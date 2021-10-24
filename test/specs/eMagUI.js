describe('eMag.ro', () => {
    it('should have the correct page title', async () => {
        await browser.url('https://www.emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi');
    });

    it('should contain cart button', async ( )=> {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
    });

    it('should open eMag genius page', async () => {
        const geniusButton = await $('[title="eMAG Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('eMAG genius: serviciul tău premium de cumpărături - eMAG.ro');
    });

    it('should have working search', async () => {
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');

        await searchBox.setValue('laptop');
        await searchButton.click();

        await expect(browser).toHaveTitle('Cautare Laptop - Cumpara Acum - eMAG.ro');
    });
});

 