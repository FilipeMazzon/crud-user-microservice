const Db = require('../../config/MongoDb');
const {ObjectID} = require('mongodb');
const assert = require('assert');

const collectionName = "Users";

function UsersDAO() {

}

const objectIDParser = parameters => {
    return new Promise(resolve => {
        let query={};
        if (typeof parameters === "string") {
            query = {"_id": ObjectID(parameters)}
        } else {
            query = {"_id": ObjectID(parameters._id)};
        }
        resolve(query);
    })
};
const Register = data => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await Db.get();
            const r = await db.collection(collectionName).insertOne(data);
            assert.equal(1, r.insertedCount);
            resolve(`the data ${JSON.stringify(data, null, 2)} was inserted on Database`);
        } catch (e) {
            reject(e);
        }
    });
};
const listAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await Db.get();
            const r = await db.collection(collectionName).find().sort({
                name: 1
            }).toArray();
            resolve(r);
        } catch (e) {
            reject(e);
        }
    });
};
const findById = (parameters) => {
    return new Promise(async (resolve, reject) => {
        try {
            const params = await objectIDParser(parameters);
            const db = await Db.get();
            const result = db.collection(collectionName).findOne(params);
            resolve(result);
        } catch (e) {
            reject(e);
        }
    })
};
const updateById = (parameters, toSet) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await Db.get();
            const params = await objectIDParser(parameters);
            const r = await db.collection(collectionName).updateOne(params, {$set: toSet});
            assert.equal(1, r.matchedCount);
            assert.equal(1, r.modifiedCount);
            resolve(`the data of _id: ${parameters} was updated on Database`);
        } catch (e) {
            reject(e);
        }
    });
};
const deleteOne = parameters => {
    return new Promise(async (resolve, reject) => {
        try {
            const params = await objectIDParser(parameters);
            const db = await Db.get();
            const r = await db.collection(collectionName).deleteOne(params);
            assert.equal(1, r.deletedCount);
            resolve(`the data of _id:${parameters} was deleted`);
        } catch (e) {
            reject(e);
        }
    });
};
const cleanUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await Db.get();
            const r = await db.collection(collectionName).deleteMany();
            assert.equal(r.result.n, r.deletedCount);
            resolve(`the Users was Clean`);
        } catch (e) {
            reject(e);
        }
    });
};

UsersDAO.prototype = {
    Register,
    listAll,
    findById,
    updateById,
    deleteOne,
    cleanUsers
};

module.exports = new UsersDAO;