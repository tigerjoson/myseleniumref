let myrows =  await driver.findElements(By.className('tableclassname'));
		for (r of await myrows){
			//console.log(await r.getText());
			let mycells =  await driver.findElements(By.tagName('td'));
			for (cell of mycells){
				console.log(await cell.getText());
			}
			
			
		}
