// export interface Experience {
//   role: string;
//   company: string;
//   period: string;
//   type: string;
// }

// export interface Project {
//   title: string;
//   tagline: string;
//   imageUrl: string;
//   tags: string[];
// }
export interface Skill { 
  category: string; 
  items: string[]; 
} 

export interface Experience { 
  role: string; 
  company: string; 
  period: string;
  type?: string; 
  achievements?: string[]; 
  technologies?: string[]; 
} 

export interface Project { 
  title: string; 
  tagline: string; 
  description?: string[]; 
  technologies?: string[];
  tags?: string[];        /* Added to fix the error */
  imageUrl?: string;      /* Added to fix the error */
  role?: string; 
  challenge?: string; 
  solution?: string; 
  githubUrl?: string; 
  liveUrl?: string; 
} 

export interface Education { 
  degree: string; 
  date: string; 
  institution: string; 
  score: string; 
} 

export interface Award { 
  title: string; 
  issuer: string; 
  date: string; 
}