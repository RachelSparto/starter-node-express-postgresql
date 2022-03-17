const knex = require("../db/fixtures/connections");

function list() {
  return knex("categories").select("*");
}

module.exports = {
  list,
};
