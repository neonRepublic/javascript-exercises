const removeFromArray = function (num, ...args) {
    
    const myArray = [];
    
    num.forEach((item) => {

        if (!args.includes(item)) {
            myArray.push(item);
          }
        });

        return myArray;

    
};

// Do not edit below this line
module.exports = removeFromArray;
