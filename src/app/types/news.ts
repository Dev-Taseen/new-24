export type newsType = {
    id: string;
    title: string;
    description: {
        blocks: {
            type: string;
            model: {
                blocks: {
                    type: string;
                    model: {
                        text: string;
                        blocks: {
                            type: string;
                            model: {
                                text: string;
                                attributes: unknown[];
                            };
                        }[];
                    };
                }[];
            };
        }[];
    };
    link: string;
    firstPublished : string;
    lastPublished : string;

    byline: {
        name: string;
        role: string;
    }[];

    topics: {
        id: string;
        name: string;
    }[];

    tags: string[];

    imageUrl: string;

    body: {
        type: "image" | "text" | "subheading";
        url?: string;
        width?: number;
        height?: number;
        caption?: string;
        altText?: string;
        copyrightHolder?: string;
        text?: string;
    }[];

    text: string;
    wordCount: number;
    source: string;
    sourceUrl: string;
};