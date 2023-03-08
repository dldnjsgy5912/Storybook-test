module.exports = {
    stories: [
        "../src/**/**/*.stories.mdx",
        "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        { name: "@storybook/addon-links" },
        { name: "@storybook/addon-essentials" },
        { name: "@storybook/addon-interactions" },
        { name: "storybook-addon-next" },
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
};
