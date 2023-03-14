const path = require("path");
module.exports = {
    stories: [
        "../src/**/**/*.stories.mdx",
        "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-next",
        "storybook-addon-designs",
        "@whitespace/storybook-addon-html",
        "@storybook/addon-storysource",
        "@storybook/addon-a11y",
        {
            name: "@storybook/addon-docs",
            options: {
                sourceLoaderOptions: {
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
