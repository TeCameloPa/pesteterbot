const Discord = require('discord.js');
const db = require ('megadb');
const squad = new db.crearDB('squad');

module.exports = {
  name: "removecartel",
  alias: ["removecartel"],

execute (client, message, args){

  if (!squad.has(message.author.id))return
  if(message.author.id !== `829448594255904788`)return;
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(!user)return message.channel.send("🚫 | **Menciona al usuario que deseas remover.**");
  squad.get('SELECT * FROM squad WHERE id = '+user.id, (err, table) => {
    if(err)return console.error(err);
    if(!table)return message.channel.send("🚫 | **Este usuario no se puede remover debido a que no está registrado en la base de datos.**");
    db.run('DELETE FROM squad WHERE id = '+table.id, (err) => {
      if(err)return console.error(err);
    });
    message.channel.send("✔️ |Usuario removido con éxito de la base de datos.**");

})
 }

} 