var { MessageEmbed } = require('discord.js')

exports.run = async(client, msg, args) => {
    let embed = new MessageEmbed()
    .setTitle('Kataline Help Page (1/?')
    .setColor('GRAY')
    .addField('kl-ping', `Show Ping`)
    .addField('kl-test', `Test Your Connection`)
    .addField('kl-rules', `Show The Rules Channel`)
    .setFooter('Created By 『H Y K』•RaisDzk•『H Y K』#5806')
    message.channel.send(embed)
}