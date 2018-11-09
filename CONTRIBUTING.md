
# Tests

## In-browser testing

The project uses Selenium Webdriver to run tests. This can be done locally
using the command

    SELENIUM_BROWSER=chrome npm run test:browser

The following browers (values of `SELENIUM_BROWSER`) have been tested:

* chrome
* firefox
* safari (NB need to enable remote scripting access in Safari developer
  menu)
