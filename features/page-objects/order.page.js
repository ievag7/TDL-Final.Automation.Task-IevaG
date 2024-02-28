import { Page } from './page.js';
import { browser } from '@wdio/globals';

class OrderPage extends Page {
    get cartPageTitle() { return $("#cart_title.page-heading"); }
    get proceedToCheckoutButtonAgain() {return $(`//span[text()="Proceed to checkout"]`); } 
    SignUpField(createAccountMessage) { return $(`//h3[text()="${createAccountMessage}"]`); }  
    SignInField(signInMessage) { return $(`//h3[text()="${signInMessage}"]`); }


    async currentCartItemCount() {
        
        const cartQuantityString = await browser.execute(() => {
            const element = document.querySelector('.shopping_cart .ajax_cart_quantity');
            return element ? element.innerText : null;
        });
        return cartQuantityString ? parseInt(cartQuantityString) : null;
    }

    get deleteItemButton() { return $('.icon-trash'); }

    emptyCartMessage(cartMessage) {return $(`//p[text() ="${cartMessage}"]`); }
}








export default new OrderPage();