export type Language = {
    name: string;
    description: string;
    githubLink?: string;
    image?: string;
    externalLinks?: ProjectExternalLink[]
};

export type ProjectExternalLink = {
    name: string;
    site: 'github' | 'gitlab' | 'bitbucket',
    link: string;
};