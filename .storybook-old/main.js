module.exports = {
  framework: "@storybook/react",
  stories: [
    "../components/**/*.stories.tsx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};
