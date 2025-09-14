export enum Page {
    Start,
    Formula,
    Flashcards,
    Faq,
    Summary
}

export interface UserData {
    [key: string]: any;
    step1?: {
        targetAudience?: string;
        learningStyle?: string;
    };
    step2?: {
        reference1?: string;
        reference2?: string;
        reference3?: string;
    };
    step3?: {
        title1?: string;
        title2?: string;
    };
    step4?: {
        contentIdeas?: string;
    };
    step5?: {
        interactiveElements?: string[];
    };
    step6?: {
        chapter1?: string;
        chapter2?: string;
        chapter3?: string;
        chapter4?: string;
    };
    step7?: {
        distributionMethods?: string[];
    };
    reflection?: {
        learning: string;
        nextSteps: string;
        date: string;
    };
}

export interface WallPost {
    userName: string;
    text: string;
    timestamp: string;
}

export interface Badge {
    id: string;
    name: string;
    icon: string;
    stepToUnlock: number;
}
