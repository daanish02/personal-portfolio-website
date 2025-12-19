// ===================================
// TYPE DEFINITIONS FOR PORTFOLIO CONTENT
// ===================================

export interface Link {
    label: string;
    url: string;
}

export interface ExperienceDetails {
    problem?: string;
    approach?: string;
    impact?: string;
    skills?: string[];
    links?: Link[];
}

export interface Experience {
    id: string;
    title: string;
    subtitle: string;
    period: string;
    overview: string;
    details?: ExperienceDetails;
    isEmpty?: boolean;
}

export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    period?: string;
    overview: string;
    details?: {
        description?: string;
        problem?: string;
        approach?: string;
        impact?: string;
        skills?: string[];
        links?: Link[];
    };
    badge?: string;
    isEmpty?: boolean;
}

export interface Skill {
    name: string;
    icon?: string | null;
    url?: string;
}

export interface SkillsData {
    skills: Skill[];
}

export interface Language {
    name: string;
    icon?: string | null;
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    status: 'Completed' | 'In Progress' | 'Planned';
    overview: string;
    details?: {
        description?: string;
        links?: Link[];
    };
    isEmpty?: boolean;
}

export interface Volunteering {
    id: string;
    title: string;
    organization: string;
    period: string;
    overview: string;
    details?: {
        description?: string;
        impact?: string;
        links?: Link[];
    };
    isEmpty?: boolean;
}

export interface Award {
    id: string;
    title: string;
    context: string;
    year: string;
    overview: string;
    details?: {
        description?: string;
    };
    isEmpty?: boolean;
}

export interface StudentActivity {
    id: string;
    title: string;
    organization: string;
    period: string;
    overview: string;
    details?: {
        description?: string;
        impact?: string;
    };
    isEmpty?: boolean;
}

export interface Research {
    id: string;
    title: string;
    venue: string;
    date: string;
    overview: string;
    details?: {
        description?: string;
        links?: Link[];
    };
    isEmpty?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
    highlights?: string[];
}
export interface ContactData {
    email: string;
    github: {
        username: string;
        statsUsername: string;
        url: string;
    };
    linkedin: {
        url: string;
    };
    leetcode: {
        username: string;
        url: string;
    };
}

