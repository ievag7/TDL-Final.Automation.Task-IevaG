import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {

    async selectProductSize(size) {
        const itemSizeButton = await $('//select');
        await itemSizeButton.click();

        const itemSize = $(`//option[text()=${size}]`);
        await itemSize.click();
}
get addToCartButton() {return $('#add_to_cart>button'); }
get proceedToCheckoutButton() {return $('//a[contains(@title,"Proceed to checkout")]'); }
}

export default new ProductPage();