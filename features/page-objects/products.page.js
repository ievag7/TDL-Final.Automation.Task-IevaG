import { Page } from './page.js';
import { browser } from '@wdio/globals';


class ProductsPage extends Page {
    async selectSortType(sortType) {
        const sortButton = await $('.selector');
        await sortButton.click();

        const sortTypes = $(`//option[text()="${sortType}"]`);
        await sortTypes.click();
}

// REVIEW: There are many formatting consistencies especially with indentation.
get selectProduct() {return $('.product_list .product_img_link'); }
get productsField() {return $(`//ul[contains(@class, "product_list grid row")]`); }

get productTitles() {return $$('.product_list>li .product-name/*title'); }

    async onlySearchedProducts(product) {
        const productTitles = await this.productTitles.map((item) => item.getText());
        return productTitles.every((title) => title.toLowerCase().includes(product.toLowerCase()));
    }

    async initialCartQuantityNumber() {
        // Here I am trying to get the text directly from the DOM, because it is not displayed on the website. Here is the element: <span class="ajax_cart_quantity unvisible" style="display: none;">0</span>
        const cartQuantityString = await browser.execute(() => {
            const element = document.querySelector('.shopping_cart .ajax_cart_quantity');
            return element ? element.innerText : null;
        });
        return cartQuantityString ? parseInt(cartQuantityString) : null;
    }

get closeWindowButton() {return $(`//span[contains(@title, "Close window")]`); }
    

    

// async getItemCountText() {
//     await this.itemCountNumber.waitForDisplayed({ timeout: 2000 });
//     return this.itemCountNumber.getText();
   
// }
}

/* <span class="ajax_cart_quantity unvisible" style="display: inline;">1</span>
<span class="ajax_cart_quantity unvisible" style="display: none;">0</span> */



export default new ProductsPage();