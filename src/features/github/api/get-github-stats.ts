import type { GithubStats } from '../types';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

const query = `
    query($userName: String!) {
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

export const getGithubStats = async (): Promise<GithubStats> => {
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables: {userName: USERNAME} }),
    });

    const result = await response.json();
    if (result.errors) {
        throw new Error(`GitHub API error: ${result.errors.map((e: any) => e.message).join(', ')}`);
    }

    if (!result.data || !result.data.user) {
        throw new Error('GitHub user not found or API response invalid');
    }
    return result.data.user.contributionsCollection.contributionCalendar
};