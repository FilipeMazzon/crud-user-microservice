const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
chai.use(require('chai-as-promised'));
const EventServerFunctions = require('../../Util/EventServerFunctions');


describe('Event Server Function', function () {
    context('Test portSet', function () {
        it('using number Positive', async function () {
            const varTest = 1000;
            EventServerFunctions.normalizePort(varTest)
                .should.equal(1000);
        });
        it('using number 0', async function () {
            const varTest = 0;
            EventServerFunctions.normalizePort(varTest)
                .should.equal(0);
        });
        it('using String', async function () {
            const varTest = "a";
            const result = EventServerFunctions.normalizePort(varTest);
            result.should.equal("a");
        });
    });
});