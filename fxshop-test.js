var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until;

var test = require('selenium-webdriver/testing');
var linkSaver = require('./linksaver');

var driver;
const mochaTimeOut = 30000; //ms

test.before(function () {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().deleteAllCookies();
    driver.sleep(3000);
});

//Open chrome browser 
test.describe('Login and checkout scenario', function() {
    this.timeout(mochaTimeOut); 
    test.it('Should go to homepage', ()=>{
        driver.get(process.env.ROOT_DOMAIN);  
    });

//Get on login page 
    test.it('Login to the account', function(){
        driver.findElement(by.className("headerLoginBtn fpayActionLogin")).click();
        driver.sleep(5000)
    });
  
//Fill in login credentials 
    test.it('Filling out credentials', function(){
        driver.findElement(by.id("loginForm_fx-input_email_0")).sendKeys(process.env.TEST_USER_EMAIL);
        driver.findElement(by.id("loginForm_fx-input_password_1")).sendKeys(process.env.TEST_USER_PASSWORD);
        driver.findElement(by.className('primary-btn ng-scope')).click();
        driver.sleep(10000);
    });

//Search an item (lens) 
    test.it('Search the Item', function(){
        driver.findElement(by.name("searchInput")).sendKeys(process.env.SEARCH_TERM);
        driver.findElement(by.css("button")).click(); 
        driver.sleep(7000);  
    });

//Pick an Item 
    test.it('Get the Item in the Cart', function(){

        driver.findElement(by.js(function findSkuPageLink () {
            return skuPageLink = $('.searchSkuWrap').find('.searchSku').find('.skuTitle').eq(0);
        })).click();

        driver.findElement(by.className("js-addToCartButton addToCart")).click();
        driver.sleep(5000);

    });

//Product in the cart
    test.it('Product in the Cart', function(){
        driver.findElement(by.className("js-proceedToCheckoutFromCart processToCheckoutFromCart")).click();
        driver.sleep(5000);
    });

//Continue checking out
    test.it('Checking out the Cart', function(){
        driver.findElement(by.className("leaseReviewBtn")).click();
        driver.sleep(11000); 
    });

//Check "complete lease" checkbox and "sign" lease button
    test.it('Completing and signing the lease', function(){
        driver.findElement(by.className("checkbox")).click(); 
        driver.sleep(5000);
        driver.findElement(by.className("primary-btn leasing-complete")).click();
        driver.sleep(5000);
    });
  

//Print Lease
    test.it('Print signed LTO', function(){

        driver.findElement(by.className("printLease")).click();
        driver.sleep(5000);

        if (isTrue(process.env.SAVE_LINKS)){

            driver.getCurrentUrl().then(function (currentUrl) {
                linkSaver(process.env.SAVE_LINKS_PATH, currentUrl);
            });

        }
    });


//End of test 
    test.after(function(){

        driver.sleep(10000); 
        driver.quit();
        
    });

});

function isTrue(val){
    return val === true || val === 'true';
}
