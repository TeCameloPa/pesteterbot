const Discord = require('discord.js');
const db = require('megadb');
const squad = new db.crearDB('squad');

module.exports = {
  name: "servers",
  alias: ["svs"],

  execute(client, message, args, async) {
    if (!squad.has(message.author.id)) return  message.channel.send('🚫 | **No estas registrado en la base de datos.**');
  let guilds = client.guilds.cache.array();
  let generateEmbed = start => {
    let current = guilds.slice(start, start + 10)
    let embed = new Discord.MessageEmbed()
      .setTitle(`Servidores ${start + 1}-${start + current.length} de ${guilds.length}`)
    current.map(async guild => embed.addField(guild.name, `**ID:** ${guild.id} **Users:** ${guild.memberCount}`));
    return embed;
  } 
    let author = message.author;
  message.channel.send(generateEmbed(0)).then(message => {
    if (guilds.length <= 10) return;
    message.react('➡️')
    let collector = message.createReactionCollector((reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id, { time: 1200000 })
    let lista1 = 0;
    collector.on('collect', reaction => {
      message.reactions.removeAll().then(async () => {
        reaction.emoji.name === '⬅️' ? lista1 -= 10 : lista1 += 10
        message.edit(generateEmbed(lista1))
        if (lista1 !== 0) await message.react('⬅️')
        if (lista1 + 10 < guilds.length) message.react('➡️')
      })
    })
  });

}

} 
