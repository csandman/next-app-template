module.exports = {
  '**/*.js?(x)': (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
  '*.{js,jsx,ts,tsx,css,less,scss,json,gql,md}': 'prettier --write',
  'package.json': 'prettier-package-json --write',
};
