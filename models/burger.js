const orm = require('../config/orm.js')

module.exports = {
  getBurgers(cb) {
    orm.getAll("games", (games) => cb(games));
  },
  updateBurger(changes, where, cb) {
    orm.updateOne("burgers", changes, where, (info) => cb(info));
  },
  addBurger(game, cb) {
    orm.insertOne("games", game, (info) => cb(info));
  },
};