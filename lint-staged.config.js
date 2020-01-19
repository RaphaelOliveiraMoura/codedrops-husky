const micromatch = require('micromatch');

const filesToIgnore = ['jest.config.js', 'eslintrc.js'];

module.exports = {
  '*.js': (files) => {
    const match = micromatch.not(files, filesToIgnore);
    return `eslint ${match.join(' ')}`;
  },
};
