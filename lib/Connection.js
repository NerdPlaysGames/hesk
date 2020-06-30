const mysql = require('mysql2');
const { Ticket, Category, User } = require('./classes');

class Connection {
  /**
   * Initate the connection to the database
   * @param {Object} [settings={}] The options for the connection
   * @param {string} [settings.host="localhost"] The host id for the MySQL
   * @param {string} [settings.database="hesk"] The host id for the MySQL
   * @param {string} [settings.password="HeskisAwesome"] The host id for the MySQL
   * @param {string} [settings.user="hesk"] The host id for the MySQL
   * @param {string} [settings.prefix="hesk_"] The host id for the MySQL
   */
  constructor(settings) {
    this.settings = settings;
    this.tablePrefix = settings.prefix;
    delete this.settings.prefix;
    this.settings.connectionLimit = 10;
    this.connection = mysql.createPool(this.settings);
  }

  /**
   * Makes a query on the connection
   * @param {string} sql The string to execute on the connection
   * @returns {Promise<Array>}
   */

  query(sql) {
    return new Promise((resolve, reject) => {
      this.connection.execute(sql, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }

  /**
   * Closes the connection to the database
   */
  close() {
    this.connection.end();
  }

  /**
   * Gets a ticket from an ID
   * @param {number} id The ID for tracking a ticket. Can be either a Tracking ID or a numeral ID
   * @param {Object} [option = {}] The Options for the search
   * @param {boolean} [option.trackingid = false] Wheter or not to search for the Tracking ID
   * @param {boolean} [option.id = true] Wheter or not to search for the ID
   * @returns {Promise<Ticket>} A ticket object
   */

  getTicket(id, option = { id: true, trackingid: false }) {
    let queryType;
    if (option.trackingid) queryType = `tracking = "${id}"`; else if (option.id) queryType = `id = ${id}`;
    let queryString = `SELECT * FROM ${this.tablePrefix}tickets WHERE ${queryType}`;
    return this.query(queryString).then((results) => {
      let ticket = new Ticket(results[0]);
      return ticket;
    });
  }

  /**
   *
   * @param {string} id The ID of the user
   * @returns {Promise<User>}
   */
  getUser(id) {
    let queryString = `SELECT * FROM ${this.tablePrefix}users WHERE id = ${id}`;
    return this.query(queryString).then((result) => {
      let userObj = result[0];
      let user = new User(userObj);
      return user;
    });
  }

  /**
   * Returns the categories in the database.
   * @returns {Promise<Object>}
   */

  getCategories() {
    let queryString = `SELECT * FROM ${this.tablePrefix}categories`;
    return this.query(queryString).then((results) => {
      let categories = {};
      for (let i = 0; i < results.length; i++) {
        const categoryObj = results[i];
        let category = new Category(categoryObj);
        let id = category.id;
        categories[id] = category;
      }
      return categories;
    });
  }
}

module.exports = Connection;
