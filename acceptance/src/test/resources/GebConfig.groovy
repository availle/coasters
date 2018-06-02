/*
	This is the Geb configuration file.

	See: http://www.gebish.org/manual/current/configuration.html
*/


import org.openqa.selenium.chrome.ChromeDriver

waiting {
	timeout = 2
}

environments {
	// run via “./gradlew firefoxTest”
	// See: http://code.google.com/p/selenium/wiki/FirefoxDriver
	chrome {
		driver = { new ChromeDriver() }
	}

}

// To run the tests with all browsers just run “./gradlew test”