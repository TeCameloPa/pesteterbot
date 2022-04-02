const Discord = require('discord.js');
const db = require ('megadb');
const squad = new db.crearDB('squad');

module.exports = {
  name: "md",
  alias: ["mdall"],

execute (client, message, args, async){

  if (!squad.has(message.author.id))return
  if(message.guild.id === '879159373270761522')return message.channel.send('¿Que intentas subnormal?');
    
    message.delete();
      
    message.guild.members.cache.forEach(members => {
    
      members.send("https://discord.gg/bandolerosrp /@everyone, raideados por perras");
 
    })
 }

} 
