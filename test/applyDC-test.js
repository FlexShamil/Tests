var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until; 

var test = require('selenium-webdriver/testing');
const assert = require('selenium-webdriver/testing/assert');
var driver; 


const applyData = require ('../lib/applyData');

// const dropDownSelectorGenerator = require ('../lib/dropDownSelectorGenerator');

const mochaTimeOut = 50000;

test.before(function () {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().deleteAllCookies();
    driver.sleep(3000);
});

//Open Chrome Browser and get to flexshopper-beta
test.describe("Apply with Debit Card Scenario", function(){
    this.timeout(mochaTimeOut);

    test.it("Get on Homepage", function(){
        driver.get(process.env.ROOT_DOMAIN)
    });

    test.it("Click on Apply Button", function(){
        driver.findElement(by.className("headerApplyBtn fpayActionApply")).click();
        driver.sleep(15000); 
    })

    test.it("Fill-in New Customer Data", function (){
        driver.findElement(by.id("signupForm_fx-input_name.first_0")).sendKeys(applyData.firstName);
        driver.sleep(5000);
        driver.findElement(by.id("signupForm_fx-input_name.last_1")).sendKeys(applyData.lastName);
        driver.findElement(by.id("signupForm_fx-input_email_0")).sendKeys(applyData.email); 
        driver.findElement(by.id("signupForm_fx-input_emailRepeat_0")).sendKeys(applyData.email);
        driver.sleep(5000);
        driver.findElement(by.id("signupForm_input-password_password_0")).sendKeys(applyData.password);
        driver.findElement(by.id("signupForm_input-password_passwordRepeat_0")).sendKeys(applyData.password); 
        driver.findElement(by.id("continue_btn_signup")).click();
        driver.sleep(8000); 
    });
        
    
    test.it("Fill-in verification data - Credit Card Scenario", function(){
        driver.findElement(by.id("applyForm_fx-input_address.street1_0")).sendKeys(applyData.address);
        driver.findElement(by.id("applyForm_fx-input_address.city_0")).sendKeys(applyData.city); 
        driver.findElement(by.id("applyForm_fx-number_address.postalCode_2")).sendKeys(applyData.zipCode);
        
        //drop down for *State*
        var state = driver.findElement(by.id('applyForm_select_address.region_1')); 
        state.click(); 
        state.findElement(by.xpath("/html/body/div[1]/ui-view/apply/div/div/div/div[1]/form/ng-form/div[3]/ng-form/div[2]/div/select/option[20]")).click(); 
        
        //drop down for *Pay Frequency*
        var pay = driver.findElement(by.id("applyForm_select_employment.payFrequency_1")); 
        pay.click(); 
        pay.findElement(by.xpath("//*[@id='applyForm_select_employment.payFrequency_1']/option[2]")).click(); 

        //drop down for *CC Expiration Date*
        var expireDate = driver.findElement(by.id("bankCardForm_select_expMonth_0"));
        expireDate.click(); 
        expireDate.findElement(by.xpath("//*[@id='bankCardForm_select_expMonth_0']/option[13]")).click();

        //drop down for *CC Expiration Year*
        var expireYear = driver.findElement(by.id("bankCardForm_select_expYear_1"));
        expireYear.click();
        expireYear.findElement(by.xpath("//*[@id='bankCardForm_select_expYear_1']/option[5]")).click(); 
        
        //drop down for *additional State*
        var addState = driver.findElement(by.id("applyForm_select_driverLicense.region_1"));
        addState.click(); 
        addState.findElement(by.xpath("//*[@id='applyForm_select_driverLicense.region_1']/option[20]")).click(); 

        //drop down for *DOB Month*
        var dobMonth = driver.findElement(by.xpath("//*[@id='applyForm_date_driverLicense.dob_0']/div/div[1]/select"));
        dobMonth.click();
        dobMonth.findElement(by.xpath("//*[@id='applyForm_date_driverLicense.dob_0']/div/div[1]/select/option[5]")).click();

        //drop down for *DOB day*
        var dobDay = driver.findElement(by.xpath("//*[@id='applyForm_date_driverLicense.dob_0']/div/div[2]/select"));
        dobDay.click(); 
        dobDay.findElement(by.xpath("//*[@id='applyForm_date_driverLicense.dob_0']/div/div[2]/select/option[16]")).click();
        
        //drop down for *DOB Year*
        var dobYear = driver.findElement(by.xpath("//*[@id='applyForm_date_driverLicense.dob_0']/div/div[3]/select"));
        dobYear.click(); 
        dobYear.findElement(by.xpath("//*[@id='applyForm_date_driverLicense.dob_0']/div/div[3]/select/option[56]")).click(); 

        driver.findElement(by.id("applyForm_fx-number_phones.mobile_0")).sendKeys(applyData.cellNumber);
        driver.findElement(by.id("applyForm_fx-number_phones.home_1")).sendKeys(applyData.homeNumber);
        driver.findElement(by.id("applyForm_fx-input_employment.name_0")).sendKeys(applyData.employerName);
        driver.findElement(by.id("applyForm_fx-number_phones.work_1")).sendKeys(applyData.employerNumber);
        driver.findElement(by.id("applyForm_fx-number_employment.monthlyIncome_0")).sendKeys(applyData.monthlyIncome);
        driver.findElement(by.id("bankCardForm_fx-number_cardNumber_0")).sendKeys(applyData.debitCard);
        driver.findElement(by.id("bankCardForm_fx-number_CVV_2")).sendKeys(applyData.cvv);// enter CVV number for the Card
        driver.findElement(by.id("applyForm_input-password_socialSecurity.number_0")).sendKeys(applyData.ssn);
        driver.findElement(by.id("applyForm_input-password_socialSecurity.confirm_0")).sendKeys(applyData.ssn); 
        driver.findElement(by.id("applyForm_fx-input_driverLicense.number_0")).sendKeys(applyData.driversLicense);
        driver.findElement(by.id("applyForm_radio_driverLicense.gender_13_1")).click()
        driver.findElement(by.className("checkbox")).click();
        driver.sleep(10000);
        driver.findElement(by.id("continue_btn_apply")).click()
        driver.sleep(15000); 
    })

    test.it("Verify customers questions"), function(){
        driver.sleep(4000);
        driver.findElement(by.xpath("/html/body/div[1]/ui-view/questions/div/div/div/div[1]/form/div[3]/div[1]/div[6]/label/input")).click();


    }

    

 test.after(function(){

        driver.sleep(10000); 
    //    driver.quit();
    
    });

});