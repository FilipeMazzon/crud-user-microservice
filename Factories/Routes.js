function Routes(){
}

const UsersRoutes = require('../components/users/UsersRoutes');

Routes.prototype = {
    UsersRoutes
};

module.exports = new Routes;