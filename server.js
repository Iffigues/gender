const config = require('./config');
const express = require('express');
const app = express();
const port = config.server.port;
const bdd = require('./db');
const gender = require('gender-detection');


app.set('view engine', 'pug');
logger = new bdd().getInstance();
var session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}))


app.get('/replay', (req, res) => {
	req.session.destroy();
	res.redirect("/");
}) 

app.get('/res/:id', (req, res) => {
	let gendername = req.params.id;
	if (gendername != "m" &&  gendername != "w") {
		res.redirect("/");
		return;
	}
	if (!req.session.point)
		res.redirect("/");
	else {
		let name = req.session.name;
		let g = gender.detect(name);
		if (g == "unisex") {
			req.session.point += 1;
		} else if (g == "unknown") {
			
		} else if (g == "male" && gendername == "m" ) {
			req.session.point += 1;
		} else if ( (g == "female") && (gendername == "w")) {
			req.session.point += 1;
		} else {
			req.session.point -= 1;
		}
		res.redirect("/");
	}
});

app.get('/', async  (req, res) => {
 req.session.name = await logger.Get_rand(); 
 if (typeof req.session.point === "undefined") {
	req.session.point = 10;
  }
  if(req.session.point == 0) {
	res.render('finish', { title: 'LOOSE', message: 'LOOSE', point:req.session.point.toString()});	
  } else if (req.session.point == 20) {
	res.render('finish', { title: 'WIN', message: 'WIN',point:req.session.point.toString()});
  } else {
  	res.render('index', { title: 'Gender Name', message: 'what is gender name?', name: req.session.name, point:req.session.point.toString()});
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
