var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
var test = require('selenium-webdriver/testing');

const mochaTimeOut = 30000; //ms


//Open chrome browser 

test.describe('Search Products', function() {
    this.timeout(mochaTimeOut);

test.it('Get on the homepage', function() {
        driver.get('https://fmweb-beta.staging.kops.flexint.net/');
    });

//Click on Shop Prodcut Button 
test.it('Click on Shop Products Button', function() {
    driver.findElement(by.className('mmOpenAnchor'));
}); 

// //test.it('Mouse moved on Shop Products',function () { 
// //     driver.mouseMove(by.className('mmOpenAnchor'));

// }); 
});

