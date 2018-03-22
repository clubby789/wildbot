const Discord = require("discord.js");
const mysql = require('mysql');
const client = new Discord.Client();
const prefix = "*";
client.on("ready", () => {
	console.log("I am ready!");
});




client.on("guildMemberRemove", (member) => {
	member.sendMessage("You just got kicked!");
});

client.on("message", (message) => {
	if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === "ping") {
		message.channel.send("pong!");
	}

	/* if (command === "era") {
		var text = args.join(" ");
		var url = "http://api.funtranslations.com/translate/shakespeare.json?text="+text;
		url = encodeURI(url);
		console.log(url);

		request({																	ON HOLD WHILE I LOOK FOR AN API
		    url: url,
		    json: true
		}, function (error, response, body) {

		    if (!error && response.statusCode === 200) {
		        response = JSON.parse(response); 
				console.log(response.contents.translated);
		    }
		})

	}
	*/
	if (command === "admin") {
		let member = String(message.mentions.users.first().tag);
		var sql = "SELECT isAdmin,adminEnd FROM members WHERE id='" + member + "'";
		var con = mysql.createConnection({
			host: "sql2.freemysqlhosting.net",
			user: "sql2228048",
			password: "jC1!iR4!",
			database: "sql2228048"
		});
		con.query(sql, function(err, result, fields) {
			if (err) throw err;
			if (result[0].isAdmin == 1) {
				message.channel.send("Is an admin until " + String(result[0].adminEnd).substring(0,15) + "!");
			} else {
				message.channel.send("Is not an admin!");
			}
		})
	}
});

client.login("NDI2MTAzNzMzMDY0MTcxNTMw.DZROTg.wbkm7IQf_3F0vcPJcHKc-kzJcdc");