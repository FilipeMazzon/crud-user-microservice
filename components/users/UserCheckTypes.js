const {isArray, isNotNull, isNotUndefined, isString, isNotNaN} = require('../../Util/DataCriticism');
const {cpf, cnpj} = require('cpf-cnpj-validator');
const nameCriticism = (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            await isNotUndefined(name, "name");
            await isString(name, "name");
            resolve();
        } catch (e) {
            reject(e);
        }
    })
};

const documentCriticism = document => {
    return new Promise(async (resolve, reject) => {
        try {
            await isNotUndefined(document, "name");
            if (cpf.isValid(document) || cnpj.isValid(document))
                resolve();
            else {
                reject("document isn't a cpf or cnpj");
            }
        } catch (e) {
            reject(e);
        }
    })
};
const contractServicesCriticism = contractServices => {
    return new Promise(async (resolve, reject) => {
        try {
            await isNotUndefined(contractServices, "name");
            await isArray(contractServices, "contract");
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
const birthdayDateCriticism = birthdayDate => {
    return new Promise(async (resolve, reject) => {
        try {
            await isNotNull(birthdayDate, "birthDayDate");
            await isNotUndefined(birthdayDate, "birthDayDate");
            await isNotNaN(birthdayDate, "birthDayDate");
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

const UserCheckType = ({name, document, contractServices, birthdayDate}) => {
    return new Promise(async (resolve, reject) => {
        try {
            await nameCriticism(name);
            await documentCriticism(document);
            await contractServicesCriticism(contractServices);
            await birthdayDateCriticism(birthdayDate);
            resolve();
        } catch (e) {
            reject(e);
        }
    })
};
module.exports = UserCheckType;
