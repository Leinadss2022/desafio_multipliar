import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationpratice.com.br';

// Cadastro bem-sucedido
test('Cadastro de usuário com sucesso', async ({ page }) => {
    await page.goto(`${BASE_URL}/index.php?controller=authentication&create_account=1`);
    
    await page.fill('#email', 'teste' + Date.now() + '@email.com');
    await page.fill('#passwd', 'Teste@1234');
    await page.fill('#customer_firstname', 'Nome');
    await page.fill('#customer_lastname', 'Sobrenome');
    await page.click('#submitAccount');

    await expect(page).toHaveURL(/controller=my-account/);
    await page.screenshot({ path: 'evidencias/cadastro_sucesso.png' });
});

// Logout da conta
test('Logout do usuário', async ({ page }) => {
    await page.goto(`${BASE_URL}/index.php?controller=authentication`);
    
    await page.fill('#email', 'teste@email.com');
    await page.fill('#passwd', 'Teste@1234');
    await page.click('#SubmitLogin');

    await page.click('.logout');
    await expect(page).toHaveURL(/controller=authentication/);
    await page.screenshot({ path: 'evidencias/logout.png' });
});

// Cadastro com campos vazios
test('Tentativa de cadastro com campos vazios', async ({ page }) => {
    await page.goto(`${BASE_URL}/index.php?controller=authentication&create_account=1`);
    await page.click('#submitAccount');
    
    const errorMessages = await page.locator('.alert-danger');
    await expect(errorMessages).toBeVisible();
    await page.screenshot({ path: 'evidencias/cadastro_erro.png' });
});
