const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const Chrome = require('selenium-webdriver/chrome');
const options = new Chrome.Options();


async function cr(){
	
	try{
			driver = await new Builder().forBrowser('chrome').build();
			await driver.manage().setTimeouts({ implicit: 2000 });
            await driver.get('https://www.selenium.dev/selenium/web/dynamic.html');
            await driver.findElement(By.id("adder")).click();
			let added = await driver.findElement(By.id("box0"));
	} catch(e){
		
		console.log(e)
	}
	
}
	cr();
