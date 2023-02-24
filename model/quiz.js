const { Sequelize } = require("sequelize");
const Content = require('./content');

module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        question: {
            type: Sequelize.STRING
        },
        a: {
            type: Sequelize.STRING
        },
        b: {
            type: Sequelize.STRING
        },
        c: {
            type: Sequelize.STRING
        },
        d: {
            type: Sequelize.STRING
        },
        key: {
            type: Sequelize.STRING
        },
        contentId: {
            type: Sequelize.INTEGER
        }
    });

    Quiz.associate = models => {
        Quiz.belongsTo(models.Content, {
          foreignKey: 'contentId',
          as: 'content'
        });
    };
    return Quiz;
}
