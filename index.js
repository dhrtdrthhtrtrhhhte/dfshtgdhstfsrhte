function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
let token = "OTIzMTAyNTcwNzE5ODkxNDg2.Yd3w5Q.Vmhd_tcEVIBR912jfZqVlYfoGL0";
let prefix = ";";

client.on('ready', () => {
    console.log(`Go go ${client.user.tag}!`);
});

client.on('ready', () => {
    client.user.setActivity("lmao penis", {
        type: "STREAMING",
        url: "https://twitch.tv/ninja"
      });
})

client.on('message', function(message) {

    if (message.content === ";bump2") { 

        var interval = setInterval (function () {
            client.channels.cache.get(`743593616739401738`).send(`dc!bump`)
            .catch(console.error);
        }, 1 * 1830000); 
    }
});

client.on('message', function(message) {

    if (message.content === ";bump1") { 

        var interval = setInterval (function () {
            message.channel.send("!d bump")
        }, 1 * 1830000); 
    }
});

client.on('message', message => {
  if (message.content === 'z') {  
    message.channel.send(`go way`)
  }
});

client.login(token);