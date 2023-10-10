
const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');
const ttdl = require('btch-downloader');



const { tiktokdl } = require('tiktokdl');

Module_Exports({
  kingcmd: "tiktok",
shortcut :  ['tk','ttdl'],
  infocmd: "Downloads Tiktok Videos Via Url.",
  kingclass: "downloader",
  use: "paste tiktok video link",
},

async(sigma, person, memo) => {
  if(!memo) return await person.reply(`*_Give me tiktok video link_*`);
  let txt = memo ? memo.split(" ")[0]:'';
  if (!/tiktok/.test(txt)) return await person.reply(`*_Please give me valid tiktok video link..!_*`);
  const { status ,thumbnail, video, audio } = await tiktokdl(txt)
  //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
  if (status) return await sigma.sendMessage(person.chat, {video : {url : video } ,caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,height: 470,width: 540,  } , {quoted : person });
  else return await person.reply("Error while downloading your video") 
})
