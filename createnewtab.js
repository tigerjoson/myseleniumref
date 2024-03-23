//ref : chatgpt
const { Builder, By,Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome options for headless mode
let chromeOptions = new chrome.Options();


// Initialize Chrome WebDriver
let driver = new Builder().forBrowser('chrome').build();

async function openAndManageNewTab() {
    try {
        // Open the initial page
        await driver.get('https://example.com');

        // Open a new tab with a name using JavaScript
        await driver.executeScript("window.open('about:blank', 'NewTabName');");

        // Switch to the new tab by its name
        await driver.switchTo().window('NewTabName');

        // Navigate to a different URL in the new tab
        await driver.get('https://www.google.com');

        // Perform actions in the new tab
        // For example, find an element and interact with it
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
		await driver.sleep(10000);
		console.log(await driver.getTitle());
		 let handles = await driver.getAllWindowHandles();
		 
		await driver.switchTo().window(handles[0]);
		console.log(await driver.getTitle());
        
        // You can continue with further actions in the new tab if needed

        // Switch back to the original tab if needed
        // await driver.switchTo().window(originalWindowHandle);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Quit WebDriver
        await driver.quit();
    }
}

// Call the function to open and manage a new tab
openAndManageNewTab();
