  //let search_bar = driver.findel....
	//ctrl+a
	await search_bar.sendKeys(Key.CONTROL, 'a');
	//press BACK_SPACE
	await search_bar.sendKeys(Key.BACK_SPACE);
	//
	await search_bar.sendKeys("cloud computing");
	await search_bar.sendKeys(Key.ENTER);
	
