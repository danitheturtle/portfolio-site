const prettierConfig = {
  experimentalTernaries: true,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'lf',
  singleAttributePerLine: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: "./src/styles/main.css",
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};

export default prettierConfig;
