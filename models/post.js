const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            time: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            mon: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            tue: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            wed: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            thu: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            fri: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            sat: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            sun: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            typeAl: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User);
    }
};