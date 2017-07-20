var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until; 

var test = require('selenium-webdriver/testing');
const assert = require('selenium-webdriver/testing/assert');
var driver; 

const mochaTimeOut = 50000;

test.before(function () {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().deleteAllCookies();
    driver.sleep(3000);
});

//Open Chrome Browser and get to flexshopper-beta
test.describe("Product Search", function(){
    this.timeout(mochaTimeOut);

    test.it("Get on Homepage", function(){
        driver.get(process.env.ROOT_DOMAIN)
    });

    test.it("Get on *Shop Products mega-menu* ", function() {
        var shopProd = driver.findElement(by.className("mmOpenAnchor")); 
        shopProd.click(); 
        shopProd.findElement(by.xpath("//*[@id='globalHeader']/div[2]/nav/div/div/nav/a[6]")).click(); 
    }); 














 test.after(function(){

        driver.sleep(10000); 
    //    driver.quit();
        
    });

});