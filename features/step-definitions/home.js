import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";
import { parseMenuCategory } from '../utils/utils.js';
import homePage from "../page-objects/home.page.js";
import menu from '../page-objects/menu.js';
import searchBox from '../page-objects/search.box.js';


Given('I am on the home page', async function() {
    await homePage.open();
});

When('I select {string} menu category', async function(menuCategory) {
    const menuItems = parseMenuCategory(menuCategory);
    await menu.selectMenuItem(menuItems);
})

When(`I enter the text {string} into the search box`, async function(itemName) {
    await searchBox.searchProduct(itemName);
})

When('I click on the search button', async function() {
    await searchBox.searchButton.click();
})

