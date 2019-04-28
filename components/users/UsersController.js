const UserBuilder = require('./UserBuilder');
const UserCheckTypes = require('./UserCheckTypes');
const UserDAO = require('./UsersDAO');

function Index() {
}

const register = req => async res => {
    try {
        const {name, birthdayDate, contractServices, document} = req.body;

        await UserCheckTypes({name, birthdayDate, contractServices, document});
        const userObj = new UserBuilder(name)
            .makeBirthdayDate(birthdayDate)
            .makeContractServices(contractServices)
            .makeDocument(document)
            .build();
        const result = await UserDAO.Register(userObj);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};
const listUsers = () => async res => {
    try {
        const result = await UserDAO.listAll();
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};
const findUser = req => async res => {
    const {_id} = req.params;
    const result = await UserDAO.findById(_id);
    res.send(result);
};
const updateUser = req => async res => {
    try {
        const {_id} = req.params;
        const data = req.body;
        await UserCheckTypes(data);
        const r = await UserDAO.updateById(_id, data);
        res.status(200).send(r);
    } catch (e) {
        res.status(400).send(e);
    }
};
const deleteUser = req => async res => {
    try {
        const {_id} = req.params;
        const r = await UserDAO.deleteOne(_id);
        res.status(200).send(r);
    } catch (e) {
        res.status(400).send(e);
    }
};
const deleteAllUsers = () => async res => {
    try {
        const r = await UserDAO.cleanUsers();
        res.status(200).send(r);
    } catch (e) {
        res.status(400).send(e);
    }
};
Index.prototype = {
    register,
    listUsers,
    findUser,
    updateUser,
    deleteUser,
    deleteAllUsers
};

module.exports = new Index;