
const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');
const ttdl = require('btch-downloader');



const { tikd } = require('tiktokdl');

Module_Exports({kingcmd: "facebook",
     shortcut: ["tik","fbdl"],
     kingclass: "downloader",
     infocmd: "downloads facebook videos",
     use: "paste fb video link"
     },
    async(sigma, person, memo) => {
        if (!memo) return person.reply(`Give me facebook video link`);
         let txt = memo ? memo.split(" ")[0]:'';
 if (!/tiktok/.test(txt)) return await person.reply(`Please give me valid facebook video link..!`);
         ttdl.tiktoklv2(memo).then(async (data) =>
          {  return sigma.sendMessage(person.chat, { video: { url: data.result[0].url },caption: `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}`,width: 550,height: 470, },{ quoted: person }) }) 
         return person.reply("Error while downloading your video") 
})