import { Page } from './page.js';
import { browser } from '@wdio/globals';


class Menu extends Page {

    async selectMenuItem(menuItems) {
        for (const [i, menuItem] of menuItems.entries()) {
            let el;
    
            await browser.waitUntil(async function() {
                const elements = await $$(`//a[text()="${menuItem}"]`);
    
                for (const element of elements) {
                    const isDisplayed = await element.isDisplayed();
                    if (isDisplayed) {
                        el = element;
                        return true;
                    }
                }
    
                return false;
            });
    
            if (i === menuItems.length-1) {
                await el.click();
            } else {
                await el.moveTo();
            }
        }
    }
}



export default new Menu();