export interface ContributionDay {
    date: string;
    contributionCount: number;
}

export  interface Week {
    contributionDays: ContributionDay[];
}

export interface GithubStats {
    totalContributions: number;
    weeks: Week[];
}