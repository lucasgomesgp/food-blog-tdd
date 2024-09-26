export interface IContent {
  content: {
        raw: {
            children: ({
                type: string;
                children: {
                    bold: boolean;
                    text: string;
                }[];
            } | {
                type: string;
                children: {
                    text: string;
                }[];
            } | {
                type: string;
                children: {
                    type: string;
                    children: {
                        type: string;
                        // biome-ignore lint/complexity/noBannedTypes: <explanation>
                        children: {
                            ...,
                        }[],
                    }[],
                }[],
            })[],
        },
    },
}
