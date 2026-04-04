export interface Project {
    id: string;
    title: string
    version: string;
    architecture: string;
    tech: string[];
    star?: {
        s: string;
        t: string;
        a: string;
        r: string;
    }
}