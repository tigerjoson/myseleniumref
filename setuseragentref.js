const {By, Builder,until} = require('selenium-webdriver');
const { remote } = require('webdriverio');
const assert = require("assert");
const Chrome = require('selenium-webdriver/chrome');
const options = new Chrome.Options();
const userAgent = require('fake-useragent');

async function main(){
	try{
		//let driver = await new Builder().setChromeOptions(options.setPageLoadStrategy('normal')).forBrowser('chrome').build();
		let chromeOptions = new Chrome.Options();
		chromeOptions.addArguments(`--user-agent=${userAgent}`);
		let driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  }
}
main();
