//const mysql = require(`mysql`);
const config = require('./config');
const mysql = require(`mysql-await`);

class Bdd {
	constructor() {
        	 this.begin_db = mysql.createConnection(config.begin_db);
    		this.begin_db.on(`error`, (err) => {
   			 console.error(`Connection error ${err.code}`);
  		}); 
		this.db = mysql.createConnection(config.db);

		this.db.on(`error`, (err) => {
    			console.error(`Connection error ${err.code}`);
 		 });
	}

	Create_Data = async () => {
		let con = this.begin_db;	
			const row =  await con.awaitQuery("CREATE DATABASE IF NOT EXISTS genderfluide"); 
			con.awaitEnd();
		
	}

	get bdd () {
		this.db = mysql.createConnection(config.db);
		return this.db;
	}

	Create_Table = async () => {
		let con = this.db;
			const row = await con.awaitQuery("CREATE TABLE IF NOT EXISTS  gender (name VARCHAR(255));");
			con.awaitEnd();
	}
	Get_rand = async () => {
		let con = mysql.createConnection(config.db);
		const row = await con.awaitQuery("SELECT * FROM gender ORDER BY RAND() LIMIT 1");
		//console.log(row[0].name);
		con.awaitEnd();
		return row[0].name
	}
}

class Singleton_db {

  constructor() {
      if (!Singleton_db.instance) {
          Singleton_db.instance = new Bdd();
      }
  }

  getInstance() {
      return Singleton_db.instance;
  }

}

module.exports = Singleton_db;
