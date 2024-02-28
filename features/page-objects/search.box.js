import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchBox extends Page {
    
    async searchProduct(itemName) {
    const searchBox = await $('#searchbox');
    await searchBox.click();

    const searchBoxInput = await $('#search_query_top')
    await searchBoxInput.setValue(itemName);
}
get searchButton() { return $(`//button[contains(@name, "submit_search")]`); }

}

export default new SearchBox();

