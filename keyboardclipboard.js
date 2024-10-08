  //let search_bar = driver.findel....
    await search_bar.sendKeys(Key.CONTROL, 'a');
		await search_bar.sendKeys(Key.BACK_SPACE);
		await search_bar.sendKeys("cloud computing");
		await search_bar.sendKeys(Key.ENTER);
	
