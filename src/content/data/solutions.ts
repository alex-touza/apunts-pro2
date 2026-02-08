export interface Solution {
    id: string;
    title: string;
    author: string;
    authorId?: string;
    code: string;
    statement?: string;
    availableLanguages?: string[];
    status?: 'pending' | 'approved';
    date?: string;
}

export interface TopicSolutions {
    topicId: string;
    solutions: Solution[];
}

export const allSolutions: TopicSolutions[] = [
    {
        topicId: 'tema-1',
        solutions: []
    }
];

export const getSolutionsByTopic = (topicId: string) => {
    return allSolutions.find(t => t.topicId === topicId)?.solutions || [];
};

export const getSolutionById = (topicId: string, problemId: string) => {
    const topic = allSolutions.find(t => t.topicId === topicId);
    return topic?.solutions.find(s => s.id === problemId);
};
