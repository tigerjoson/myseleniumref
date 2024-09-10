package myselenium;

import java.util.Set;

import org.openqa.selenium.WebDriver;

public class Close_other_tabs {
	public Close_other_tabs() {

	}

	public Close_other_tabs(WebDriver driver,String unwantkillhandleString) throws Exception {
		//Thread.sleep(3000);
		System.out.println("call Close_other_tabs");
		Set <String> set = driver.getWindowHandles();
		for ( String s:set ) {
			boolean isunwantkill = s.equals(unwantkillhandleString);
			if(!isunwantkill) {
				driver.switchTo().window(s);
				driver.close();
			}
		}
		
	}
}
