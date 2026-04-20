import { useState, useEffect } from 'react';
import type { GithubStats } from '../types';
import { getGithubStats } from '../api/get-github-stats';

export const useGithubStats = () => {
    const [stats, setStats] = useState<GithubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getGithubStats()
        .then(setStats)
        .catch((err) => {
            console.error(err);
            setError("Failed to load Github Stats.");
        })
        .finally(() => setLoading(false));
    }, []);


    return { stats, loading, error };
}