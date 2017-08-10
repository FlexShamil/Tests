(function () {
    
    var dropDownSelectorGenerator = function (dropDownSelector, option) {
        console.log("test" , dropDownSelector);
        return function () {
            
            var ddOpt = null;
            var dropDown = document.getElementById(dropDownSelector);
            var ddOpts = regionDd.getElementsByTagName('option');

            for (var i = 0; i < ddOpts.length; i++) {
                console.log(ddOpts[i]);
                if (ddOpts[i].label === option) {
                    ddOpt = ddOpts[i];
                    break;
                }
            }

            console.log(dropDown);
            console.log(ddOpts);

            return ddOpt;

        };
    };

    module.exports = dropDownSelectorGenerator; 

})();




// var menu = driver.findElement(by.id('applyForm_select_address.region_1')); 
// menu.click(); 
// menu.findElement(by.linkText("Louisiana")).click;