module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      // Add the plugin with throwIfNamespace set to false
      ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }],
    ],
  };
  