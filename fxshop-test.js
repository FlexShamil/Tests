var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until;

var test = require('selenium-webdriver/testing');
var driver;

const mochaTimeOut = 30000; //ms

test.before(function(){
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().deleteAllCookies();
});


//Open chrome browser 

test.describe('Login and checkout scenario', function() {
    this.timeout(mochaTimeOut); 
    test.it('Should go to homepage', ()=>{
        driver.get('https://fmweb-beta.staging.kops.flexint.net/'); 
    });

//Get on login page 
    test.it('Login to the account', function(){
        driver.findElement(by.className("headerLoginBtn fpayActionLogin")).click();
        driver.sleep(5000)
    });
  
//Fill in login credentials 
    test.it('Filling out credentials', function(){
        driver.findElement(by.id("loginForm_fx-input_email_0")).sendKeys('barbossa.approve1@flexshopper.com');
        driver.findElement(by.id("loginForm_fx-input_password_1")).sendKeys('test123');
        driver.findElement(by.css('button')).click();
        driver.sleep(10000);
    });

//Search an item (lens) 
    test.it('Search the Item', function(){
        driver.findElement(by.name("searchInput")).sendKeys('lens');
        driver.findElement(by.css("button")).click(); 
        driver.sleep(7000);  
    });

//Pick an Item (Olympus V312040BU000)
    test.it('Get the Item in the Cart', function(){
        driver.findElement(by.partialLinkText("Voigtlander LH-8 Lens Hood for the 35mm")).click(); 
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
        driver.sleep(10000); 
    });

//Check "complete lease" checkbox and "sign" lease button
    test.it('Completing and signing the lease', function(){
        driver.findElement(by.className("checkbox")).click(); 
        driver.sleep(5000);
        driver.findElement(by.className("primary-btn leasing-complete")).click();
    });

    

//Print Lease
    test.it('Print signed LTO', function(){
        driver.findElement(by.linkText("Print lease agreement")).click();
    });

//End of test 
    // test.it('Quiting Scenario and Browser', function(){

    //     driver.sleep(10000); 
    //     driver.quit();
        
    // });


});


