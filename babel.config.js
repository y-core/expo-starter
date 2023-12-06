module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', ['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
    plugins: ['expo-router/babel', 'react-native-reanimated/plugin'],
  };
};

// , 'transform-inline-environment-variables'
