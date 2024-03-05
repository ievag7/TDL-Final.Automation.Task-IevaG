import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import orderPage from '../page-objects/order.page.js';


When(`I filter products based on the {string}`, async function(sortType) {
    await productsPage.selectSortType(sortType);
});

When('I click on a product', async function() {
    await productsPage.selectProduct.click();
});

When(`I select size {word}`, async function(size) {
    await productPage.selectProductSize(size);
})

When('I click the Add to Cart button', async function() {
    await productPage.addToCartButton.waitForDisplayed({ timeout: 50000 });
    await productPage.addToCartButton.click();
})

When('I click on Proceed To Checkout button', async function() {
    await productPage.proceedToCheckoutButton.waitForClickable({ timeout: 10000 });
    await productPage.proceedToCheckoutButton.click();
})

Then(`I should see a {string} page`, async function(pageName) {
    await expect(orderPage.cartPageTitle)
    .toHaveText(expect.stringContaining(pageName));
})

When('I click on Proceed To Checkout button again', async function() {
    await orderPage.proceedToCheckoutButtonAgain.waitForClickable({ timeout: 6000 });
    await orderPage.proceedToCheckoutButtonAgain.click();
})

Then('I should see {string} and {string} fields', async function(createAccountMessage, signInMessage) {
    await expect(orderPage.SignUpField(createAccountMessage)).toBeDisplayed();
    await expect(orderPage.SignInField(signInMessage)).toBeDisplayed();
})

Then('I am on products page', async function() {
    await productsPage.productsField.isDisplayed();
})

Then(`I should see only searched {string} results`, async function(product) {
    // REVIEW: Not exacly what I had in mind, but this makes 100% sense too, good
    const onlySearchedProducts = await productsPage.onlySearchedProducts(product);
    // console.log(onlySearchedProducts);
    expect(onlySearchedProducts).toBeTruthy();
 
})

When('I check the initial item count in the cart', async function() {
    const initialCartQuantity = await productsPage.initialCartQuantityNumber();
    console.log('Cart Quantity:', initialCartQuantity);
    expect(initialCartQuantity).toBeDisplayed();
})

When('I click on close window button', async function() {
    await productsPage.closeWindowButton.waitForClickable({ timeout: 6000 });
    await productsPage.closeWindowButton.click();
})

When("I check the item count in the cart", async function() {
    const currentCartQuantity = await orderPage.currentCartItemCount();
    console.log('Cart Quantity:', currentCartQuantity);
    expect(currentCartQuantity).toBeDisplayed();
})

Then('I should see the cart item count increased by 1', async function() {
    // REVIEW: Hmm, it doesn't make much sense to get initial value after you have already added an item
    // You should have saved the initial count before adding a product.
    // Also a better approach would be to wait until counter increases by 1 in case the counter incrementes with some delay.
    const initialCartQuantity = await productsPage.initialCartQuantityNumber(); 
    console.log('initial:', initialCartQuantity);
    const currentCartQuantity = await orderPage.currentCartItemCount();
    console.log('current:', currentCartQuantity);
    // const increaseByOne = currentCartQuantity - initialCartQuantity === 1;
    // await expect(increaseByOne).toBe(true);

    await expect(currentCartQuantity)
        .toEqual(initialCartQuantity + 1); //I couldn't find a solution to make the initial cart quantity equal to 0
        
})

When('I delete one product from the cart', async function() {
    // REVIEW: This element is not clickable.
    await orderPage.deleteItemButton.waitForClickable({ timeout: 2000 });
    await orderPage.deleteItemButton.click();
})

Then(`I should see the message {string}`, async function(cartMessage) {
    await expect(orderPage.emptyCartMessage(cartMessage)).toBeDisplayed();
})



    


