const Discord = require('discord.js');
const db = require ('megadb');
const squad = new db.crearDB('squad');

module.exports = {
  name: "join",
  alias: ["invite"],

execute (client, message, args){

  if(!squad.has(message.author.id))return
  let texto = args.join(" ");
  if(!texto) return message.channel.send(new Discord.MessageEmbed()
  .setDescription("🚫 | **Especifica la ID del Servidor que quieres obtener la invitación.**")
  .setColor("RED"))

  let guild = client.guilds.cache.get(texto)
  const embed = new Discord.MessageEmbed()
  .setDescription("🚫 | La ID es invalida")
  .setColor("BLACK")
  if (!guild) return message.channel.send(embed)
  let invitechannels = guild.channels.cache.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
  const embed2 = new Discord.MessageEmbed()
  .setDescription("🚫 | **No tengo permisos para crear invitaciones de ese server :(**")
  .setColor("BLACK")
  if(!invitechannels) return message.channel.send(embed2)

  invitechannels.random().createInvite().then(invite=> message.channel.send('https://discord.gg/' + invite.code))


 }

} 
