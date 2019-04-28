const chai = require('chai');
chai.should();
const assert = chai.assert;
const db = require('../config/MongoDb');

describe('Db', () => {
    context('Basic Tests', function () {
        it('get a connection', async function () {
            try {
                await db.get();
            } catch (e) {
                assert.equal(null, e);
            }
        });
    })
});
