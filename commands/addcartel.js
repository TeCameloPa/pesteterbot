const Discord = require('discord.js');
const db = require('megadb');
let squad = new db.crearDB('squad');

module.exports = {
  name: "addcartel",
  alias: ["permsadd"],

execute (client, message, args){
    if(message.author.id !== `784587744222904330` && message.author.id !== `481980558377877514` && message.author.id !== ``)return message.channel.send("🚫 | **Este comando nadamas lo pueden ejecutar los founders.**")
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1 || !user)return message.channel.send("🚫 | **Tienes que mencionar a un usuario.**");
  if(user.bot)return message.channel.send("🚫 | **Un bot no puedo ser registrado en la base de datos.**");
  if(squad.has(user.id))return message.channel.send("🚫 | **Este usuario ya esta registrado.**")  //return message.channel.send("Desarrollando...");
  squad.establecer(user.id, user.tag);
  message.channel.send(new Discord.MessageEmbed().setDescription("✔️ | **Usuario "+user.tag+" registrado y añadido correctamente a la base de datos!!**").setColor('BLACK'));

 }

} 
