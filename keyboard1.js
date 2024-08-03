const {By, Builder,until} = require('selenium-webdriver');
const { remote } = require('webdriverio');
const assert = require("assert");
const Chrome = require('selenium-webdriver/chrome');
const options = new Chrome.Options();
let yurl = 'https://www.nlpi.edu.tw/';

async function test(){
		let driver = await new Builder().setChromeOptions(options.setPageLoadStrategy('normal')).forBrowser('chrome').build();
		await driver.get(yurl);
       
		await driver.sleep(10000);
//pgdn click
    await driver.actions().sendKeys('\uE00F').perform();
		await driver.sleep(40000);

		await driver.quit();

}

test();
