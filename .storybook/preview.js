import "@/styles/globals.css";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        exclude: ["role"],
    },
    html: {
        prettier: {
            tabWidth: 4,
            useTabs: false,
        },
    },
    a11y: {
        config: {
            rules: [
                {
                    id: "color-contrast",
                    enabled: false,
                },
            ],
        },
    },
};
