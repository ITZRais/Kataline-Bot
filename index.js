var config = require('./config.json');
var Discord = require('discord.js');
var client = new Discord.Client();
const kataline = new Client({
	clientSettings: {
	    	presence: {
				activity: {
						name: 'Kataline'
					, type:'WATCHING'
					, url: 'github.com/ITZRais/Kataline-Bot'
				}
			}
        
client.on('ready', async() => {
    console.log('Iam Online BITCHES');
});

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    if(!msg.guild) return;

    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    try {
        var file = require(`./commands/Editable/${cmd}.js`);
        file.run(client, msg, args);
    } catch(err) {
        console.warn(err);
    }
    try {
        var file = require(`./commands/Don't Edit/${cmd}.js`);
        file.run(client, msg, args);
    } catch(err) {
        console.warn(err);
    }
});

client.login(config.token);
