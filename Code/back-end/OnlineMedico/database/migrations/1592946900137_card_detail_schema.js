"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CardDetailSchema extends Schema {
  up() {
    this.create("card_details", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("card_details");
  }
}

module.exports = CardDetailSchema;
