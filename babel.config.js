module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'module:react-native-dotenv',
    'react-native-reanimated/plugin', // Ensure the plugin is listed separately
  ],
};
