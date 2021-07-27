const detect = require('detect-gender');
const fs = require('fs');
const mysql = require('mysql-await');
const config = require('./config');
const bdd = require('./db');


var getArrayNames = (file) => {
	let arrayNames = [];
	let i = 0;	
	try {
		const data = fs.readFileSync(file, 'utf8');
		let lines = data.split('\n');
		lines.every(element => {
			i++;
			if (element)	
				arrayNames.push([element.split(' ')[0]]);
			if (i == 300)
				return false;
			return true;
		});
		return arrayNames;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	return null;
};


var populate = async (file) => {
	var logger = new bdd().getInstance();
	let e = await logger.Create_Data();
	let b = await logger.Create_Table();
	let arrayNames = getArrayNames(file);
	let conn = logger.bdd;	
	var sql = "INSERT INTO gender (name) VALUES ?";
	let c = await conn.awaitQuery(sql, [arrayNames]);
	conn.awaitEnd();
}


if (process.argv.length != 3) {
	console.error("run with node populate.js <filepath/filename>");
	process.exit(1);
}

populate(process.argv[2]);

