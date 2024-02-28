import { browser } from '@wdio/globals';

export class homePage {

    async open() {
        await browser.navigateTo(`http://www.automationpractice.pl/`); }

}


export default new homePage();