import { StorybookConfig } from '@storybook/react-native-web-vite';
 
const config: StorybookConfig = {
  addons: [
    '@storybook/addon-react-native-web', // 👈 Remove the addon
  ],
  // Replace @storybook/react-webpack5 with the Vite framework
  framework: '@storybook/react-native-web-vite',
};
 
export default config;