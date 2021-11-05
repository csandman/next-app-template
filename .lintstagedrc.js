module.exports = {
  '**/*.js?(x)': (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
  '*': 'prettier --ignore-unknown --write',
  'package.json': 'prettier-package-json --write',
};
