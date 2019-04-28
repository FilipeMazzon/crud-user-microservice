const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
chai.use(require('chai-as-promised'));
const dataCriticism = require('../../Util/DataCriticism');


describe('Data Criticism', function () {
    context('Test isNotNan', function () {
        it('using number', async function () {
            const varTest = 1;
            const result = await dataCriticism.isNotNaN(varTest);
            result.should.equal(true);
        });
        it('using String', async function () {
            const varTest = "1";
            const result = await dataCriticism.isNotNaN(varTest);
            result.should.equal(true);
        });
        it('using Array', async function () {
            const varTest = [];
            const result = await dataCriticism.isNotNaN(varTest);
            result.should.equal(true);
        });
        it('using null', async function () {
            const varTest = null;
            const result = await dataCriticism.isNotNaN(varTest);
            result.should.equal(true);
        });
        it('using object', async function () {
            const varTest = {};
            await dataCriticism.isNotNaN(varTest).should.be.rejectedWith("the variable:variable can't be NaN");
        });
        it('using undefined', async function () {
            const varTest = undefined;
            await dataCriticism.isNotNaN(varTest).should.be.rejectedWith("the variable:variable can't be NaN");
        })
        it('using NaN', async function () {
            const varTest = NaN;
            await dataCriticism.isNotNaN(varTest).should.be.rejectedWith("the variable:variable can't be NaN");
        });
    });
    context('Test isArray', function () {
        it('using Array', async function () {
            const value = [];
            const result = await dataCriticism.isArray(value, value);
            result.should.equal(true);
        });
        it('using null', async function () {
            const value = null;
            await dataCriticism.isArray(value, "value").should.be.rejectedWith("the variable:value isn't a Array");
        });
        it('using object', async function () {
            const value = {};
            await dataCriticism.isArray(value, "value").should.be.rejectedWith("the variable:value isn't a Array");
        })
        it('using integer', async function () {
            const value = 5;
            await dataCriticism.isArray(value, "value").should.be.rejectedWith("the variable:value isn't a Array");
        })
        it('using array of object', async function () {
            const value = [{"mazzon": "oi"}];
            const result = await dataCriticism.isArray(value, value);
            result.should.equal(true);
        })
    });
    context('Test isNotNull', function () {
        it('using null', async () => {
            const value = null;
            await dataCriticism.isNotNull(value, "value").should.be.rejectedWith("the variable:value can't be null");
        });
        it('using Array', async ()=> {
            const value = [];
            const result = await dataCriticism.isNotNull(value, value);
            result.should.equal(true);
        });
        it('using Undefined', async ()=> {
            const value = undefined;
            const result = await dataCriticism.isNotNull(value, value);
            result.should.equal(true);
        });
        it('using Integer', async ()=> {
            const value = 3;
            const result = await dataCriticism.isNotNull(value, value);
            result.should.equal(true);
        });
        it('using empty String', async ()=> {
            const value = "";
            const result = await dataCriticism.isNotNull(value, value);
            result.should.equal(true);
        });
    });
    context('Test isNotUndefined', function () {
        it('using null', async () => {
            const value = null;
            const result = await dataCriticism.isNotUndefined(value, value);
            result.should.equal(true);
        });
        it('using undefined', async () => {
            const value = undefined;
            await dataCriticism.isNotUndefined(value, "value").should.be.rejectedWith("the variable:value can't be undefined");
        });
    })
});

