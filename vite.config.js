import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(
   async ({ command, mode, isSsrBuild, isPreview }) => {
      try {
         return {
            build: {
               lib: {
                  name: 'msym',
                  entry: path.resolve(__dirname, 'src', 'index.ts'),
               },
            },
         };
      } catch (error) {
         throw new Error(error);
      }
   },
);
