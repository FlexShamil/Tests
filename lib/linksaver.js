const fs = require('fs');

module.exports = function savePdfLink (filePath, link){
    fs.appendFile(`${filePath}.txt`, `${link}\n`, (err) => {

        if (err) {
            return console.log(err);
        }

        console.log(`${link} was added to ${filePath}.txt`);

    });
};
