const Discord = require("discord.js");
const mysql = require('mysql');
const requests = require("http");
KEY = process.env.KEY;

const client = new Discord.Client();
console.log("Client Loaded");
const prefix = "*";

client.on("ready", () => {
	console.log("I am ready!");
	client.user.setPresence({ game: { name: '*help' }, status: 'online' })
});




client.on("guildMemberRemove", (member) => {
	member.sendMessage("You just got kicked!");
});

client.on("messageUpdate", (oldMessage, newMessage) => {
	if(newMessage.content.toLowerCase() != "h" && newMessage.channel.id == "439518693538660363"){
		newMessage.delete();
	}
});

client.on("message", (message) => {
	if(message.author.bot) return;
	if(message.content.indexOf("@everyone") !== -1){
		message.channel.send("I fuckin hope that everyone tag was necessary");
	}
	if(message.content.toLowerCase() == "it was"){
		message.channel.send("Stop talking to the bot you lonely prick");
		
	} else if(message.content.toLowerCase().indexOf("it was") !== -1) {
		message.channel.send("I've had it with you autists. 'Haha look the bot is responding to the wrong message'\nFUCK OFF");
	}
	if(message.channel.id == "439518693538660363" && message.content.toLowerCase() != "h") {
		message.delete();
	}
	if(message.author.tag == "Cdog_designs#7579") {
		var chance = Math.random();
		if (chance <= 0.1){
			message.channel.send("***1 blocked message***");
		}
	}

	var chance2 = Math.random();
	if (chance2 <= 0.05){
		message.react("🇴")
			.then(message.react("⭕"))
			.then(message.react("🇫"));
	}


	if(message.content.indexOf(prefix) !== 0) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === "ping") {
		message.channel.send("pong!");
	}

	if(command === "help") {
		message.channel.send("```*ping - Get ponged!```");
	}
	/*
	if (command === "admin") {
		if (message.mentions.users.array().length < 1) {
			var sql = "SELECT name, adminEnd FROM members WHERE isAdmin=1";
			var con = mysql.createConnection({
				host: "sql2.freemysqlhosting.net",
				user: "sql2228048",
				password: "jC1!iR4!",
				database: "sql2228048"
			});
			con.query(sql, function(err, result, fields) {
				if (err) throw err;
				for (var i = 0; i < result.length; i++) {
					message.channel.send(result[i].name + " is an admin until " + String(result[i].adminEnd).substring(0,15) + "!");
				}
			})
		}
		else {
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
		
	} */
});

client.login(KEY);
