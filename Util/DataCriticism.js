function DataCriticism() {
}

const isArray = (val, nameVariable) => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(val)) {
            resolve(true);
        } else {
            reject(`the variable:${nameVariable} isn't a Array`);
        }
    });
};
const isNotNull = (val, valName) => {
    return new Promise((resolve, reject) => {
            if (val !== null) {
                resolve(true);
            } else {
                reject(`the variable:${valName} can't be null`)
            }
        }
    );
};
const isNotUndefined = (val, valName) => {
    return new Promise((resolve, reject) => {
            if (typeof val != "undefined") {
                resolve(true);
            } else {
                reject(`the variable:${valName} can't be undefined`)
            }
        }
    );
};
const isNumber = val => {
    return typeof val == "number";
};
const isInteger = val => {
    return Number.isInteger(val);
};
const isNotNaN = (val, valName = "variable") => {
    return new Promise((resolve, reject) => {
        if (!isNaN(val)) {
            return resolve(true);
        } else {
            reject(`the variable:${valName} can't be NaN`);
        }
    });
};
const isString = (val, valName = "variable") => {
    return new Promise((resolve, reject) => {
        if (typeof val == "string") {
            resolve(true);
        } else {
            reject(`the variable:${valName} must be a string`);
        }
    });
};
//Handle unexpectValueOnArray not working right now
/*const UnexpectValueOnArray = (val,onlyTypes) =>{
    return new Promise((resolve,reject)=>{
        const filtered = val.filter(async (value) => {
            console.log(value);

            let haveDifferentValue = true;
            for await(const type of onlyTypes) {
                console.log(type);
                if (value === type) {
                    haveDifferentValue = true;
                    break;
                }
            }
            return haveDifferentValue;
        });
        console.log(filtered);
    });
};
UnexpectValueOnArray([1,3],[1,2,6,7,8]);*/

DataCriticism.prototype = {
    isArray,
    isNotNull,
    isNotUndefined,
    isNumber,
    isInteger,
    isNotNaN,
    isString
};
module.exports = new DataCriticism;