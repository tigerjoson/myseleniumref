import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class ChromeProfileExample {
    public static void main(String[] args) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");

        // Create ChromeOptions instance
        ChromeOptions options = new ChromeOptions();
        
        // Set the user data directory
        options.addArguments("user-data-dir=C:/Users/your-username/AppData/Local/Google/Chrome/User Data");
        
        // Set the profile directory
        options.addArguments("profile-directory=Profile 1");

        // Initialize WebDriver with ChromeOptions
        WebDriver driver = new ChromeDriver(options);

        // Open a website
        driver.get("https://www.example.com");

        // Perform your automation tasks...

        // Close the browser
        driver.quit();
    }
}
