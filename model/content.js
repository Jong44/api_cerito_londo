const { Sequelize } = require("sequelize");
const Quiz = require('./quiz');


module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define('content', {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        years: {
            type: Sequelize.INTEGER
        },
        images: {
            type: Sequelize.STRING
        },
        
    });

    Content.associate = models => {
        Content.hasOne(models.Quiz, {
          foreignKey: 'contentId',
          as: 'quiz'
        });
    };
    return Content;
}
