import { defineConfig, UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

export const makeConfig = ({ dirname }: { dirname: string }): UserConfig => {
  return {
    cacheDir: '../node_modules/.vite',
    root: dirname,
    plugins: [tsconfigPaths(), tailwindcss()],
    css: {
      postcss: './postcss.config.js',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },
  };
};
export default defineConfig(makeConfig({ dirname: './' }));
