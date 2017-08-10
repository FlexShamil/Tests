const faker = require('faker'); 

let testData = {
    'email': `${faker.internet.userName()}.approve@flexshopper.com`,
    'firstName': 'KURT', 
    'lastName': 'AALOE', 
    'password': 'test123',
    'address' : '4566 CATFISH POND RD', 
    'city' : 'NEW ORLEANS', 
    'zipCode' : '70126', 
    'cellNumber' : '7548019768', 
    'homeNumber' : '7548019768', 
    'employerName' : 'Flexshopper', 
    'employerNumber' : '7548019768', 
    'monthlyIncome' : '5000',
    'debitCard' : '4647330900234966',
    'cvv' : '275',
    'ssn' : '515285884',
    'driversLicense' : '325070760',
    
    
};

module.exports = testData; 
