var webdriver = require ('selenium-webdriver'), 
    by = webdriver.By, 
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

function getLouisianaDdOpt () {

    var louisianaDdOpt = null;
    var regionDd = document.getElementById('applyForm_select_address.region_1');
    var regionDdOpts = regionDd.getElementsByTagName('options');

    for (var i = 0; i < regionDdOpts; i++) {
        if (regionDdOpts[i].label === 'Louisiana') {
            louisianaDdOpt = regionDdOpts[i];
            break;
        }
    }

    return louisianaDdOpt;

};

//Open chrome(www.flexshopper.com) 
driver.get('https://fmweb-beta.staging.kops.flexint.net'); 
driver.sleep(5000); 

//Click on apply button 
driver.findElement(by.className('headerApplyBtn fpayActionApply')).click(); 
driver.sleep(5000);

//Fill required fields - bios
driver.findElement(by.id('signupForm_fx-input_name.first_0')).sendKeys("KURT"); 
driver.findElement(by.id('signupForm_fx-input_name.last_1')).sendKeys("AALOE"); 
driver.findElement(by.id('signupForm_fx-input_email_0')).sendKeys('a12345.approve@flexshopper.com');
driver.sleep(3000) 
driver.findElement(by.id('signupForm_fx-input_emailRepeat_0')).sendKeys('a12345.approve@flexshopper.com');
driver.findElement(by.id('signupForm_input-password_password_0')).sendKeys('test123'); 
driver.findElement(by.id('signupForm_input-password_passwordRepeat_0')).sendKeys('test123');
driver.findElement(by.className('primary-btn ng-scope')).click();
driver.sleep(10000); 

//Fill in required - auth data
driver.findElement(by.id('applyForm_fx-input_address.street1_0')).sendKeys('4566 CATFISH POND RD');
driver.findElement(by.id('applyForm_fx-input_address.city_0')).sendKeys('New Orleans'); 
driver.findElement(by.id('applyForm_select_address.region_1')).click();
driver.sleep(4000);
driver.findElement(by.js(getLouisianaDdOpt)).click();  

driver.sleep(10000); 
//pick a state

driver.findElement(by.id('applyForm_fx-number_address.postalCode_2')).sendKeys('70126');
driver.findElement(by.id('applyForm_fx-input_employment.name_0')).sendKeys('Flexshopper'); 
driver.findElement(by.id('applyForm_fx-number_phones.work_1')).sendKeys('7548019768'); 
driver.findElement(by.id('applyForm_fx-number_employment.monthlyIncome_0')).sendKeys('5000'); 
driver.findElement(by.id('applyForm_select_employment.payFrequency_1')).click(); 











 










