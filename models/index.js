const Sequelize = require('sequelize');
const Post = require('./post');
const User = require('./user');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

db.sequelize = sequelize;
db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);

User.associate(db);
Post.associate(db);

module.exports = db;