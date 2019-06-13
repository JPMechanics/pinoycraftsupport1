const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg1ODI0ODMyOTkwNzQwNTAw.XQGPOw.byhPbtJvA8epK4v6g3fKHHTohUE';

const PREFIX = '!';
bot.on('ready', () =>{
    console.log('This bot is online!');

})
bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!')
    }
    if(msg.content === "IP"){
        msg.reply('The ip is Pinoycraft.mc-dns.net!')
    }
    if(msg.content === "Ip"){
        msg.reply('The ip is Pinoycraft.mc-dns.net!')
    }
    if(msg.content === "Whats the IP"){
        msg.reply('The ip is Pinoycraft.mc-dns.net!')
    }
    if(msg.content === "Whats the Ip"){
        msg.reply('The ip is Pinoycraft.mc-dns.net!')
    }
    if(msg.content === "Whats the ip"){
        msg.reply('The ip is Pinoycraft.mc-dns.net!')
    }
})

bot.login(token);
