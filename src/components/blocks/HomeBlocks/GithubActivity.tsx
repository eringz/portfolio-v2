import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ContributionDay {
    date: string;
    contributionCount: number;
    color: string;
}


interface Week {
    contributionDays: ContributionDay[];
}

interface GitHubStats {
    totalContributions: number;
    weeks: Week[];
}

const GithubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
        const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

        const query = `
          query($userName:String!) {
            user(login: $userName) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      color
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query, variables: { userName: USERNAME } }),
        });

        const result = await response.json();
        setStats(result.data.user.contributionsCollection.contributionCalendar);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-500">Loading contributions...</p>;
  if (!stats) return <p className="text-red-500">Failed to load stats.</p>;

  return (
    <motion.div 
        initial={{ x: -20, scale: 0, opacity: 0 }}
        animate={{ x: 1, scale: 1, opacity: 1 }}
        transition={{
            duration: 1.2,
        }}
        className="p-6 rounded-2xl shadow-2xl w-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-emerald-400 text-shadow-lg">GitHub Activity</h2>
      </div>
      <p className="text-slate-400 text-sm mb-4"><span className="text-emerald-400 font-extrabold">{stats.totalContributions}</span> contributions in the last year</p>
      
      {/* Mini Heatmap Render */}
      <div className="grid grid-flow-col gap-1 overflow-x-auto pb-2 custom-scrollbar">
        {stats.weeks.slice(12).map((week, wIndex) => (
          <div key={wIndex} className="flex flex-col gap-1">
            {week.contributionDays.map((day, dIndex) => (
              <div
                key={dIndex}
                title={`${day.date}: ${day.contributionCount} contributions`}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: day.contributionCount > 0 ? day.color : '#787d81' }}
              />
            ))}
          </div>
        ))}
      </div>
      {/* <p className="mt-4 text-xs text-slate-500 text-right">Last 12 weeks activity</p> */}
    </motion.div>
  );
};

export default GithubStats;