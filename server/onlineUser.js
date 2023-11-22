const { Users } = require("../server/models");

const getUser = (userId) => {
    Users.find((user) => {
        user.id === userId;
    });
};

module.exports = getUser;
