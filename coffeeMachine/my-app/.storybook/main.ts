import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  docs: {}
};

export default main;
