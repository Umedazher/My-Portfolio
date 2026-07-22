export interface Skill { category: string; items: string[]; }
export interface Experience { role: string; company: string; period: string; achievements: string[]; technologies: string[]; }
export interface Project { title: string; tagline: string; description: string[]; technologies: string[]; role?: string; challenge?: string; solution?: string; githubUrl?: string; liveUrl?: string; }
export interface Education { degree: string; date: string; institution: string; score: string; }
export interface Award { title: string; issuer: string; date: string; }