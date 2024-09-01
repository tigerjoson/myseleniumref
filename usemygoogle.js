const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
  // Specify the path to your custom user data directory
  let userprofile = process.env.UserProfile;
  let googlepath = await userprofile.concat("\\AppData\\Local\\Google\\Chrome\\User Data");
  //console.log(googlepath)
  const userDataDir =  path.resolve(await googlepath);
 

  // Set Chrome options to use the custom user data directory
  let options = await new chrome.Options();
  await options.addArguments(`--user-data-dir=${userDataDir}`);
  await options.addArguments(`--lang=en`);

  // Create a new instance of the Chrome driver with the specified options
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    // Navigate to a website
    await driver.get('https://www.google.com/');
    // Perform actions on the website
    
  } finally {
    // Quit the driver
   // await driver.quit();
  }
})();
