//TODO: replace 'var' with 'const'
var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until; //TODO: remove unused var

var driver = new webdriver.Builder().forBrowser('chrome').build();
var test = require('selenium-webdriver/testing');
var faker = require('faker'); 

const mochaTimeOut = 30000; //ms


test.describe('Signup with Credit Card', function() {
    this.timeout(mochaTimeOut);

    //TODO: replace with const
    var testData = {
        'email': `${faker.internet.userName()}.approve@flexshopper.com`,
        'firstName': 'KURT', 
        'lastName': 'AALOE', 
        'password': 'test123'
    };     

    //Open Flexshopper.com
    test.it('Get to homepage', ()=>{
        driver.get('http://flexshopper.com'); //TODO: swap with env var
    driver.sleep(4000); //TODO: indent
    });

    //Click on Apply button 
    test.it('Get on Apply Page', function(){
        driver.findElement(by.className("headerApplyBtn fpayActionApply")).click();
        driver.sleep(5000);
    });  

    //Fill in "New Customer Details" and continue 
    test.it('Fill in account data', function(){
        //TODO: replace double quotes with single quotes
        driver.findElement(by.id('signupForm_fx-input_name.first_0')).sendKeys(testData.firstName);
        driver.findElement(by.id('signupForm_fx-input_name.last_1')).sendKeys(testData.lastName); 
        driver.findElement(by.id('signupForm_fx-input_email_0')).sendKeys(testData.email);
        driver.sleep(4000);
        driver.findElement(by.id('signupForm_fx-input_emailRepeat_0')).sendKeys(testData.email);
        driver.findElement(by.id('signupForm_input-password_password_0')).sendKeys(testData.password);
        driver.findElement(by.id('signupForm_input-password_passwordRepeat_0')).sendKeys(testData.password);
        }); //TODO: indentation
        driver.findElement(by.id('continue_btn_signup')).click();


//Fill in "Application form" with CC info

//Finish Test

}); 

