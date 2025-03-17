import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    trace: 'on', // Captura o trace para todos os testes
  },
});
