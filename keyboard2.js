//for pure html mutify should be rightway
const {By, Builder,until,Key} = require('selenium-webdriver');
const { remote } = require('webdriverio');
const assert = require("assert");
const Chrome = require('selenium-webdriver/chrome');
const options = new Chrome.Options();

const google_search= "https://www.google.com/";
//const google_search_fig= "https://www.google.com/imghp?hl=zh-TW&ogbl";
async function main(){
		let driver = new Builder().forBrowser('chrome').build();
	try{
		//ecco sales
		await driver.switchTo().newWindow('tab');
		//await driver.get(google_search_fig);
		await driver.get(google_search);
		await driver.findElement(By.className('gLFyf')).sendKeys("your search string",Key.ENTER);
		await driver.sleep(5000);
}catch (e){
		console.log(e)
	}
}

main();
