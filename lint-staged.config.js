const micromatch = require('micromatch');

const filesToIgnore = ['eslintrc.js'];

module.exports = {
  '*.js': (files) => {
    const match = micromatch.not(files, filesToIgnore);
    return `eslint ${match.join(' ')}`;
  },
};
