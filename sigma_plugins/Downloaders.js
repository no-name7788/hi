//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                         v：1．0．0                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const { tlang, ringtone, Module_Exports,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, name } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js') 
const googleTTS = require("google-tts-api");
const fetch = require('node-fetch');
const ytdl = require('sigma-md-ytdl')
const yts = require('sigma-md-yts')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tgs",
            infocmd: "Downloads telegram stickers.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<add sticker url.>'
        },
        async(Void, citel, text) => {
    if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
    if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
    let tgUrl = text.split("|")[0];
    let find = tgUrl.split("/addstickers/")[1];
    let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
    let check = text.split("|")[1] || "";
    let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
    if (result.is_animated) return await citel.reply("Animated stickers are not supported");
      else if (check.startsWith("info")) return await citel.reply(res);
    let limit = parseInt(check.split(",")[0]) || 10;
    let count =  parseInt(check.split(",")[1]) ||  0;
    let isCheckText = check.split(";")[1] ||  "Sticker"
    let isSticker = true ;
          if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
    if(limit > result.stickers.length ) {  limit = result.stickers.length  }
          if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
    if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
    await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
    for ( count ; count < limit ; count++) 
    {
     // if (count >= limit) break;
      let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
      let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
      if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: name.packname, author: "Suhail-Md"  }, "sticker");} 
      else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
      //count++;
    }




 })
//---------------------------------------------------------------------------



Module_Exports({
    kingcmd: "apk",
    infocmd: "Downloads apks.",
    kingclass: "downloader",
    use: 'Whatsapp',
  },
  
  async(sigma, person, text) => {
    // Check if there's a replied message and set 'text' accordingly
    if (person.quoted && person.quoted.text) {
      text = person.quoted.text;
    } else if (!text) {
      return person.send(`*_Give me App Name_*\nEx: ${prefix}apk Whatsapp`);
    }
  
    const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
    let randomName = getRandom(".apk");
    const filePath = `./${randomName}`; 
    const { search, download } = require('aptoide-scraper');
  
    let searc = await search(text); 
    let data = {};
  
    if (searc.length) { 
      data = await download(searc[0].id); 
    } else {
      return person.reply("*_APP not Found, Try Valid App Name_*");
    }
  
    const apkSize = parseInt(data.size);
    if (apkSize > 300) {
      return person.reply(`*_File size bigger than 300MB._*`);
    }
  
    const url = data.dllink;
    const ico = data.icon;
    let lastUpdate = new Date(data.lastup);
    let formattedDate = `${lastUpdate.getDate()}/${lastUpdate.getMonth() + 1}/${lastUpdate.getFullYear()}`;
    let formattedTime = `${lastUpdate.getHours()}:${(lastUpdate.getMinutes() < 10 ? '0' : '') + lastUpdate.getMinutes()}`;
  
    let  inf = `*_SIGMA-MD APK DOWNLOADER_*\n\n*_App Name ➪ ${data.name}_*`;
    inf += `\n*_App Size ➪ ${data.size}_*`;
    inf += 	`\n*_Last Update ➪ ${formattedDate}_*`
    inf +=  `\n*_Package Name ➪ ${data.package}_*`
    inf +=  `\n*_Icon  ${data.icon}_*`
    inf +=  `\n${name.caption}`
  
    axios.get(url, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);
  
      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    }).then(() => {
      
      let buttonMessage = {
         // image: { url: data.icon },
          caption: inf,
          document: fs.readFileSync(filePath),
        mimetype: 'application/vnd.android.package-archive',
        fileName: data.name + `.apk`,
          headerType: 4,
          contextInfo: {
              externalAdReply: {
                  title: snam,
                  body: `apk ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                 thumbnail: {url: data.icon},
                  mediaType: 2,
                  sourceUrl: zyt
              }
          }
      };
      // Sending the message with the app icon
      
      sigma.sendMessage(person.chat, buttonMessage,{image:{url:data.icon}},{  quoted: person });
      //sigma.sendMessage(person.chat, buttonMessage, { quoted: person });
      person.send(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${text}_*`);
  
      fs.unlink(filePath, (err) => {
        if (err) { console.error('Error deleting file:', err); }
        else { console.log('File deleted successfully'); }
      });
    }).catch(error => {
      fs.unlink(filePath);
      return person.reply('*_Apk not Found, Sorry_*');
    });
          })

  //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "gdrive",
            infocmd: "Downloads telegram stickers.",
            kingclass: "downloader",
            kingpath: __filename,
            use: 'add sticker url.'
        },

async(Void, citel, text) => {
if (!text) return citel.send('Uhh Please, Give me  Google Drive Url') 
if (!(text && text.match(/drive\.google/i))) citel.send('Uhh Please, Give me Valid Google Drive Url')
let id =(text.match(/\/?id=(.+)/i) || text.match(/\/d\/(.*?)\//))[1]
if (!id) return citel.reply('ID Not Found');
try {
  GDriveDl(id).then(async (res) => 
  { 
                let data  =  "*File Name :* "+ res.fileName ;
              data +="\n*File Size :* " + res.size +"Mb" ;
              data +="\n*File Type :* "+ res.mimetype.split('/')[1] +  "\n" + name.caption;
          let buttonMessage = 
    {
      document: { url: res.downloadUrl },
      fileName: res.fileName,
      mimetype: res.mimetype,
      caption : "\t  *GOOGLE DRIVE DOWNLOADER*  \n" + data
    }
          return await Void.sendMessage(citel.chat,buttonMessage, { quoted: citel })
  })
 } catch (error) {  return citel.reply("```File Not Found```" ) }

})
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "gitclone",
    shortcut: ["gclone","gitc"],
    infocmd: "Downloads github repo",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'https://github.com/Maher-Zubair/SIGMA-MD',
},
async(sigma, person, tax) => {
function _0xda55(_0x28fa32,_0x5445d5){const _0x52cbbf=_0x405c();return _0xda55=function(_0x74bd91,_0x17ca32){_0x74bd91=_0x74bd91-(-0xd9*0x9+0x1*0x12f0+-0xa27);let _0x2f330a=_0x52cbbf[_0x74bd91];return _0x2f330a;},_0xda55(_0x28fa32,_0x5445d5);}const _0x599afb=_0xda55;(function(_0x251c90,_0x358396){const _0x194cd9=_0xda55,_0x30c3df=_0x251c90();while(!![]){try{const _0x2fef01=-parseInt(_0x194cd9(0x149))/(-0x3ce+0x1179+-0xdaa)*(parseInt(_0x194cd9(0x172))/(-0x5ba*-0x2+-0x14ef+-0x7*-0x15b))+parseInt(_0x194cd9(0x163))/(0x7*0x22a+0x1c07+-0x2b2a)*(parseInt(_0x194cd9(0x167))/(-0x2*-0xde5+0x10a3+-0x2c69))+-parseInt(_0x194cd9(0x15a))/(0x6*0x4f1+-0x1*-0x2608+0x43a9*-0x1)+parseInt(_0x194cd9(0x173))/(0x22c4+-0xdf4+-0x14ca)*(-parseInt(_0x194cd9(0x145))/(-0x1c6c+-0x2*0x311+0x2295))+-parseInt(_0x194cd9(0x133))/(0x21e2+0x1574+0x1ba7*-0x2)*(-parseInt(_0x194cd9(0x129))/(-0xe27*0x2+-0x161f*-0x1+-0x4*-0x18e))+-parseInt(_0x194cd9(0x14e))/(0x15*-0x19c+-0x2*-0x517+0x17a8)*(parseInt(_0x194cd9(0x135))/(-0x9f*-0x3d+0xd55*-0x1+-0x1883))+parseInt(_0x194cd9(0x143))/(0xa93+0xadf+-0x1566);if(_0x2fef01===_0x358396)break;else _0x30c3df['push'](_0x30c3df['shift']());}catch(_0x178600){_0x30c3df['push'](_0x30c3df['shift']());}}}(_0x405c,0x2ad*0x737+0x4fa3e+-0xb037e));if(!tax)return await person[_0x599afb(0x162)](_0x599afb(0x165)+_0x599afb(0x14d)+_0x599afb(0x13b)+prefix+(_0x599afb(0x168)+_0x599afb(0x13d)+_0x599afb(0x14a)+_0x599afb(0x174)+_0x599afb(0x160)+'*'));if(!tax[_0x599afb(0x144)](_0x599afb(0x14b)))return person[_0x599afb(0x162)](_0x599afb(0x153)+_0x599afb(0x13f)+_0x599afb(0x137)+_0x599afb(0x15d));try{const regex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!regex[_0x599afb(0x15b)](tax))return await person[_0x599afb(0x12a)](_0x599afb(0x159)+_0x599afb(0x154)+_0x599afb(0x139)+_0x599afb(0x16e));let [_,user,repo]=tax[_0x599afb(0x130)](regex)||[];repo=repo[_0x599afb(0x158)](/.git$/,'');let url=_0x599afb(0x157)+_0x599afb(0x164)+_0x599afb(0x13c)+user+'/'+repo+_0x599afb(0x13e),filename=(await fetch(url,{'method':_0x599afb(0x15f)}))[_0x599afb(0x14f)][_0x599afb(0x16b)](_0x599afb(0x161)+_0x599afb(0x132))[_0x599afb(0x130)](/attachment; filename=(.*)/)[-0x2*0x1003+0xb43+0x14c4];await sigma[_0x599afb(0x128)+'e'](person[_0x599afb(0x134)],{'document':{'url':url},'caption':_0x599afb(0x131)+mztit+(_0x599afb(0x14c)+_0x599afb(0x12c)+_0x599afb(0x136)+_0x599afb(0x170)+_0x599afb(0x152)+_0x599afb(0x151))+user+(_0x599afb(0x12e)+_0x599afb(0x12f))+repo+(_0x599afb(0x13a)+_0x599afb(0x156)+_0x599afb(0x146)+_0x599afb(0x169)+_0x599afb(0x141)+_0x599afb(0x16d))+user+'/'+repo+(_0x599afb(0x138)+_0x599afb(0x16c))+person[_0x599afb(0x150)]+(_0x599afb(0x171)+_0x599afb(0x12d)+_0x599afb(0x155)+_0x599afb(0x166))+name[_0x599afb(0x148)]+'*','fileName':filename,'mimetype':_0x599afb(0x142)+_0x599afb(0x15e)});}catch(_0x38ce15){person[_0x599afb(0x162)](_0x599afb(0x12b)+_0x599afb(0x15c)+_0x599afb(0x147)+_0x599afb(0x16a)+_0x599afb(0x16f)+_0x599afb(0x140)+_0x38ce15);}function _0x405c(){const _0xf68b2c=['\x0a┗━━━━━━━━','86wtyZnO','31338JFEOaV','aher-Zubai','sendMessag','3303WwUNHT','reply','*_The\x20Repo','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','━━⦿\x0a*╰┈➤\x20𝙶','\x0a┃✗\x20*•ʀᴇᴘᴏ','•*\x20','match','┏━━⟪⟪\x20','sposition','1952mmNkwR','chat','11tznjqE','┃┗➛\x20*ʀᴇᴘᴏ\x20','ed\x20is\x20inva','\x0a┃✗\x20*•ʀᴇǫᴜ','lid\x20Reposi','\x0a┃✗\x20*•ꜰɪʟᴇ','*\x0a\x20Ex:\x20','om/repos/','https://gi','/zipball','you\x20provid','*\x0a\x20','ttps://git','applicatio','47696364sQhtrY','includes','763cNYVEH','p\x0a┃✗\x20*•ʀᴇᴘ','e\x20Or\x20It\x20Ma','botname','19769pKbLiY','thub.com/M','github.com','\x20⟫━⦿\x0a┃┏➛\x20*','Repo\x20Url,_','9318810YmqUPM','headers','pushName','ʜᴏʀ•*\x20','*\x0a┃✗\x20*•ᴀᴜᴛ','_The\x20link\x20','Provide\x20Va','𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱','-ᴛʏᴘᴇ•*\x20zi','https://ap','replace','*_Please,\x20','8405120cpDyYT','test','\x20is\x20Privat','lid_','n/zip','HEAD','r/SIGMA-MD','content-di','send','167529uXxUdY','i.github.c','*_Provide\x20','𝚈\x20','60yvljDS','gitclone\x20*','ᴏ-ʟɪɴᴋ•*\x20h','y\x20Be\x20Tempo','get','ᴇsᴛᴇʀ•*\x20\x20','hub.com/','try\x20Url_*','rary\x20Down_','ᴅᴏᴡɴʟᴏᴀᴅᴇʀ'];_0x405c=function(){return _0xf68b2c;};return _0x405c();}  
})  

  //---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "tts",
  infocmd: "text to voice",
  kingclass: "downloader",
  kingpath: __filename,
  use: 'I am king',
},
async (sigma, person, memo) => {
  try {
    memo = memo ? memo : person.quoted && person.quoted.text ? person.quoted.text : "";
    if (!memo && person.type !== 'chat') return person.reply(`*_Give me text to change into audio.\nEx: ${prefix}tts I am a Sigma Male_*`);
    if (!memo && person.type === 'chat') {
      memo = person.body;
    }



    const ttsurl = googleTTS.getAudioUrl(memo, {
      lang: "en",
      slow: false,
      host: "https://translate.google.com",
    });
   await person.sent("*_Converting Your Text To Voice..._*");
    sigma.sendMessage(person.chat, {
      audio: {
        url: ttsurl,
      },
      mimetype: "audio/mpeg",
      fileName: `ttspersonsigma.m4a`,
    }, {
      quoted: person,
    });
  } catch (e) {
    person.sent("*_Unknow Error Occured_* "+e)
  }
});

    //---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "video",
  infocmd: "Downloads video from YouTube.",
  kingclass: "downloader",
  kingpath: __filename,
  use: 'bella ciao',
},
async (bot, citel, tax) => {


  try {
    tax = tax ? tax : citel.quoted && citel.quoted.text ? citel.quoted.text : "";
    if (!tax && citel.type !== 'chat') return citel.send(`*_Example: ${prefix}video Surah Fateh_*`);

    if (!tax && citel.type === 'chat') {
      tax = citel.body;
    }

    let search = await yts(tax);
    let anu = search.videos[0];
    let urlYt = anu.url;

    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };

    let infoYt = await ytdl.getInfo(urlYt);
    if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Video duration is too long!`);

    let titleYt = infoYt.videoDetails.title;
    let randomName = getRandom(".mp4");

    citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${tax}_*`);

    const stream = ytdl(urlYt, {
      filter: (info) => info.itag == 22 || info.itag == 18,
    }).pipe(fs.createWriteStream(`./${randomName}`));

    await new Promise((resolve, reject) => {
      stream.on("error", reject);
      stream.on("finish", resolve);
    });

    let stats = fs.statSync(`./${randomName}`);
    let fileSizeInBytes = stats.size;
    let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

    if (fileSizeInMegabytes <= dlsize) {
      let Maher = {
        video: fs.readFileSync(`./${randomName}`),
        jpegThumbnail: log0,
        mimetype: 'video/mp4',
        caption: sgen,
        height: 640,
        width: 780,
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: snam,
            body: `Video Downloader`,
            thumbnail: await getBuffer(search.all[0].thumbnail),
            renderLargerThumbnail: true,
            mediaType: 4,
            mediaUrl: ``,
            sourceUrl: zyt,
          }
        }
      }
      bot.sendMessage(citel.chat, Maher, { quoted: citel });
      fs.unlinkSync(`./${randomName}`);
    } else {
      citel.reply(`File size is bigger than ${dlsize} MB.`);
      fs.unlinkSync(`./${randomName}`);
    }
  } catch (e) {
    citel.sent("*_Unknow Error Occured_* "+e)

  }
});

    //---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "song",
  infocmd: "Downloads audio from YouTube.",
  kingclass: "downloader",
  kingpath: __filename,
  use: 'bella ciao',
},
async (bot, citel, tax) => {
  try {

    tax = tax ? tax : citel.quoted && citel.quoted.text ? citel.quoted.text : "";
    if (!tax && citel.type !== 'chat') return citel.send(`Example: ${prefix}song My Babe I love Your Voice`);
    if (!tax && citel.type === 'chat') {
      tax = citel.body;
    }
    if (!tax) return citel.send(`*_Example: ${prefix}song My Babe I love Your Voice_*`);

    let search = await yts(tax);
    let anu = search.videos[0];
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    let infoYt = await ytdl.getInfo(anu.url);
    if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
    let titleYt = infoYt.videoDetails.title;
    let randomName = getRandom(".mp3");
    citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${tax}_*`);
    const stream = ytdl(anu.url, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    })
      .pipe(fs.createWriteStream(`./${randomName}`));
    await new Promise((resolve, reject) => {
      stream.on("error", reject);
      stream.on("finish", resolve);
    });

    let stats = fs.statSync(`./${randomName}`);
    let fileSizeInBytes = stats.size;
    let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    if (fileSizeInMegabytes <= dlsize) {
      let buttonMessage = {
        audio: fs.readFileSync(`./${randomName}`),
        mimetype: 'audio/mpeg',
        caption: sgen,
        fileName: titleYt + ".mp3",
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: snam,
            body: `Song Downloader`,
            renderLargerThumbnail: true,
            thumbnailUrl: search.all[0].thumbnail,
            mediaUrl: tax,
            mediaType: 1,
            thumbnail: await getBuffer(search.all[0].thumbnail),
            sourceUrl: zyt,
          },
        },
      };
      await bot.sendMessage(citel.chat, buttonMessage, { quoted: citel });
      fs.unlinkSync(`./${randomName}`);
    } else {
      citel.reply(`File Size Bigger Than 100MB.`);
      fs.unlinkSync(`./${randomName}`);
    }
  } catch (e) {
    citel.sent("*_Unknow Error Occured_* "+e)

  }
});



    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "music",
            infocmd: "Downloads tiktok music.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '78',
        },
        async(bot, citel, tax) => {
            if (!tax) return citel.send(`*Give A Number Example: ${prefix}music 3*`)
            citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${tax}_*`)
  const n = parseInt(tax);
  if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```Give Number From 1 to 160```');
     let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await bot.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
    audio: anu,
    fileName: url.toString() ,
    mimetype: 'audio/mp4',
    ptt: true ,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: `ᴍᴜsɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                thumbnail: log0,
                mediaType: 2,


                sourceUrl: zyt,

            },
        },
    }
  return bot.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})


//-------------------------------------------------------------------------------
Module_Exports({
    kingcmd: "ringtone",
    infocmd: "Downloads ringtone.",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'apple',
},
async(bot, citel, tax) => {
    let query = tax || (citel.quoted && citel.quoted.text ? citel.quoted.text : '');

    if (!query) {
        citel.send(`*_Example: ${prefix}ringtone bella ciao_*`);
        return;
    }
    citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${query}_*`);
    const { ringtone } = require('../lib/scraper');
    let anu = await ringtone(query);

    let buttonMessage = {
        audio: { url: anu[0].audio },
        caption: `*${anu[0].title}*`,
        fileName: anu[0].title + '.mp3',
        mimetype: 'audio/mpeg',
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: `ʀɪɴɢᴛᴏɴᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                thumbnail: log0,
                mediaType: 2,
                sourceUrl: zyt,
            },
        },
    };

    await bot.sendMessage(citel.chat, buttonMessage, { quoted: citel });
});


    //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "pint",
    desc: "Downloads image from Pinterest.",
    category: "downloader",
    filename: __filename,
    use: '<text|image name>',
},
async(Void, citel, text) => {
    let query = text || (citel.quoted && citel.quoted.text ? citel.quoted.text : '');

    if (!query) {
        citel.send(`*_What picture are you looking for?_*`);
        return;
    }

    citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${query}_*`);

    try {
        let anu = await pinterest(query);
        let result = anu[Math.floor(Math.random() * anu.length)];
        let buttonMessage = {
            image: { url: result },
            caption: sgen,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: snam,
                    body: `ᴘɪɴᴛᴇʀᴇsᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                    thumbnail: log0,
                    mediaType: 2,
                    sourceUrl: zyt
                }
            }
        };
        return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
    } catch (e) {
        return citel.sent("*_Unknow Error Occured_* "+e)
    }
});

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "mediafire",
            shortcut :['mfire'],
            infocmd: "Downloads media from Mediafire.",
            kingclass: "downloader",
            kingpath: __filename,
            use: 'url of mediafire',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link `);

            if (!text.includes("mediafire.com")) return citel.reply(`The link you provided is invalid`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);

  if(!baby1.length) return citel.reply(`could not found anything`);
  const apkSize = parseInt(baby1[0].size);
  if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);

let result4 = ` *Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* :${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}

`;
  result4 +=name.caption ; 

            //citel.reply(`${result4}`);

            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,

                }; 

 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------


    //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "audio",
    infocmd: "Downloads audio from YouTube.",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'bella ciao',
},
async (sigma, citel, tax) => {

    tax = tax ? tax : citel.quoted && citel.quoted.text ? citel.quoted.text : "";

    if (!tax) {
        citel.send(`*_Example: ${prefix}audio My Babe i love Your Voice_*`);
        return;
    }

    let search = await yts(tax);
    let anu = search.videos[0];
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    let infoYt = await ytdl.getInfo(anu.url);
    if (infoYt.videoDetails.lengthSeconds >= videotime) {
        citel.reply(`Audio File Too Big!`);
        return;
    }
    let titleYt = infoYt.videoDetails.title;
    let randomName = getRandom(".mp3");

    citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${tax}_*`);

    const stream = ytdl(anu.url, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    }).pipe(fs.createWriteStream(`./${randomName}`));

    await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
    });

    let stats = fs.statSync(`./${randomName}`);
    let fileSizeInBytes = stats.size;
    let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

    if (fileSizeInMegabytes <= dlsize) {
        let buttonMessage = {
            document: fs.readFileSync(`./${randomName}`),
            mimetype: 'audio/mpeg',
            caption: sgen,
            fileName: titleYt + ".mp3",
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: snam,
                    body: `ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                    renderLargerThumbnail: true,
                    thumbnailUrl: search.all[0].thumbnail,
                    mediaUrl: tax,
                    mediaType: 1,
                    thumbnail: await getBuffer(search.all[0].thumbnail),
                    sourceUrl: zyt,
                },
            },
        };

        await sigma.sendMessage(citel.chat, buttonMessage, { quoted: citel });
        return fs.unlinkSync(`./${randomName}`);
    } else {
        citel.reply(`File Size Bigger Than 100MB.`);
    }

    fs.unlinkSync(`./${randomName}`);
});

    //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "yts",
    infocmd: "Sends given text result with all info and media links",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'bella ciao',
},
async(sigma, person, memo) => {
    try {
        // Extract the replied text
        if (!memo && person.quoted && person.quoted.text) {
            memo = person.quoted.text;
        } else if (!memo) {
            return person.send(`*_Example: ${prefix}yts surah Rehman_*`);
        }

        let search = await yts(memo);
        let memot = `*sɪɢᴍᴀ ᴹᴰ* *ʏᴏᴜ-ᴛᴜʙᴇ sᴇᴀʀᴄʜ*\n\n *_Search Result From ${memo}_*` + "\n\n*✯────────────────────✯*\n\n";
        let no = 1;
        for (let i of search.all) {
            memot += `*𝚃𝙸𝚃𝙻𝙴* : ${i.title}\n*𝚅𝙸𝙴𝚆𝚂* : ${i.views}\n*𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽* : ${i.timestamp}\n*𝚄𝚁𝙻* : ${i.url}\n\n*✯────────────────────✯*\n`;
        }
        return sigma.sendMessage(person.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: memot,
        }, {
            quoted: person,
        });
    } catch (error) {
        console.error(error);
        person.send("*_Failed to fetch YouTube search results._* "+error);
    }
});

    //---------------------------------------------------------------------------

Module_Exports({
    kingcmd: "ytmp4",
    shortcut: ["ytv", "ytvid", "ytvideo", "yt4"],
    infocmd: "Downloads video from youtube.",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'yt video url',
},
async(Void, citel, text) => {
    try {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        // Extract the replied text if available
        if (!text && citel.quoted && citel.quoted.text) {
            text = citel.quoted.text;
        } else if (!text) {
            citel.reply("*_Give ME YouTube Link_*");
            return;
        }

        citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${text}_*`);

        let urlYt = text;
        if (!urlYt.startsWith("http")) {
            citel.reply("*_Plz Give ME YouTube Link_*");
            return;
        }

        let infoYt = await ytdl.getInfo(urlYt);
        if (infoYt.videoDetails.lengthSeconds >= videotime) {
            citel.reply(`Video File Too Big!`);
            return;
        }

        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp4");

        const stream = ytdl(urlYt, {
            filter: (info) => info.itag == 22 || info.itag == 18,
        }).pipe(fs.createWriteStream(`./${randomName}`));

        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

        if (fileSizeInMegabytes <= dlsize) {
            let search = await yts(text);
            let buttonMessage = {
                video: fs.readFileSync(`./${randomName}`),
                jpegThumbnail: log0,
                mimetype: 'video/mp4',
                caption: sgen,
                height: 640,
                width: 780,
                fileName: `${titleYt}.mp4`,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        mediaType: 2,
                        mediaUrl: ``,
                        thumbnail: log0,
                        sourceUrl: zyt
                    }
                }
            };

            Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`Video Size IS Larger Than 100MB`);
        }

        fs.unlinkSync(`./${randomName}`);
    } catch (e) {
      citel.sent("*_Unknow Error Occured_* "+e)
    }
})

    //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "ytmp3",
    shortcut: ["yta", "yt3"],
    infocmd: "Downloads audio by yt link.",
    kingclass: "downloader",
    use: 'yt video url',
},
async(Void, citel, text) => {
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
    };

    // Extract the replied text if available
    if (text.length === 0 && citel.quoted && citel.quoted.text) {
        text = citel.quoted.text;
    } else if (text.length === 0) {
        citel.reply('```Please Give Me Link```');
        return;
    }

    try {
        let urlYt = text;
        if (!urlYt.startsWith("http")) {
            citel.reply(`_Idiot Give YouTube Link_!`);
            return;
        }

        citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${text}_*`);

        let infoYt = await ytdl.getInfo(urlYt);
        // 30 MIN
        if (infoYt.videoDetails.lengthSeconds >= videotime) {
            reply(`_I can't Download That Long Audio_`);
            return;
        }

        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        const stream = ytdl(urlYt, {
            filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
        }).pipe(fs.createWriteStream(`./${randomName}`));

        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let search = await yts(text);
            let buttonMessage = {
                audio: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        thumbnail: log0,
                        mediaUrl: text,
                        mediaType: 1,
                        sourceUrl: zyt,
                    },
                },
            };
            await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Than 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
    } catch (e) {
      citel.sent("*_Unknow Error Occured_* "+e)
    }
});


  //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "ytdoc",
    shortcut: ["ytd"],
    infocmd: "Downloads audio by yt link as document.",
    kingclass: "downloader",
    use: 'ytdoc video url',
},
async (Void, citel, text) => {
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
    };

    // Extract the replied text if available
    if (text.length === 0 && citel.quoted && citel.quoted.text) {
        text = citel.quoted.text;
    } else if (text.length === 0) {
        citel.reply('```Please Give Me Link```');
        return;
    }

    try {
        let urlYt = text;
        if (!urlYt.startsWith("http")) {
            citel.reply(`_Idiot Give YouTube Link_`);
            return;
        }
        citel.reply(`*_𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶: ➪ ${text}_*`);

        let infoYt = await ytdl.getInfo(urlYt);
        //30 MIN
        if (infoYt.videoDetails.lengthSeconds >= videotime) {
            reply(`_I can't Download That Long Audio_!`);
            return;
        }

        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        const stream = ytdl(urlYt, {
            filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
        }).pipe(fs.createWriteStream(`./${randomName}`));

        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let search = await yts(text);
            let buttonMessage = {
                document: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `‌ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,

                       thumbnail: log0,
                        mediaType: 1,
                        sourceUrl: zyt,
                    },
                },
            };
            await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Than 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
    } catch (e) {
        citel.sent("*_Unknow Error Occured_* "+e)
    }
});


function _0x2e4f(_0x41bcea,_0x59a872){const _0x581f2b=_0x59c2();return _0x2e4f=function(_0x5322af,_0x13954b){_0x5322af=_0x5322af-(-0x1*-0x3f3+-0x2575*-0x1+-0x282d);let _0x346734=_0x581f2b[_0x5322af];return _0x346734;},_0x2e4f(_0x41bcea,_0x59a872);}const _0x5322df=_0x2e4f;(function(_0x3f2719,_0x7d1b1f){const _0x3fca63=_0x2e4f,_0x459a92=_0x3f2719();while(!![]){try{const _0x3b48ac=-parseInt(_0x3fca63(0x156))/(0x2602+0x5e7+-0x2be8)*(parseInt(_0x3fca63(0x14a))/(-0x178b+0x2b*-0x2+0x5*0x4c7))+-parseInt(_0x3fca63(0x16f))/(0x1*-0x2220+0x37*-0x41+0x301a)+-parseInt(_0x3fca63(0x14c))/(0x1d96+-0x1865+-0x52d)+parseInt(_0x3fca63(0x14f))/(-0x3e*0x11+0x7*-0x563+0x29d8)*(-parseInt(_0x3fca63(0x168))/(0x18d*0x1+-0x863*-0x1+0x2f*-0x36))+parseInt(_0x3fca63(0x17c))/(-0x59*-0x7+-0x1*-0x2515+-0x277d)*(-parseInt(_0x3fca63(0x15f))/(0x1c9*0x12+-0x1c22+-0x3f8))+parseInt(_0x3fca63(0x173))/(-0x625+0x1548+-0xf1a)*(parseInt(_0x3fca63(0x13c))/(-0x71a*-0x3+0x1*0x131+0x1*-0x1675))+parseInt(_0x3fca63(0x147))/(0x59e+-0x1cc6+0x1733);if(_0x3b48ac===_0x7d1b1f)break;else _0x459a92['push'](_0x459a92['shift']());}catch(_0x5cb070){_0x459a92['push'](_0x459a92['shift']());}}}(_0x59c2,-0x211*-0x80e+0x1*0xf0f9d+-0x47*0x5261),Module_Exports({'kingcmd':_0x5322df(0x144),'infocmd':_0x5322df(0x148)+_0x5322df(0x166)+_0x5322df(0x158),'kingclass':_0x5322df(0x16c),'kingpath':__filename,'use':_0x5322df(0x176)},async(_0x2513c1,_0x19ffee,_0x108288)=>{const _0x17cd4e=_0x5322df,_0x5babd7={'rAxIO':function(_0x340cdc,_0x269691){return _0x340cdc+_0x269691;},'wyUCN':function(_0x2265dd,_0x241a17){return _0x2265dd+_0x241a17;},'VLEIA':_0x17cd4e(0x149)+_0x17cd4e(0x16d)+_0x17cd4e(0x174)+_0x17cd4e(0x15b),'yDDMQ':_0x17cd4e(0x15c)+_0x17cd4e(0x181),'rQbeA':function(_0x5b2b1c,_0x4e551e){return _0x5b2b1c(_0x4e551e);},'UvTxY':function(_0x477f7f,_0x1fb567){return _0x477f7f+_0x1fb567;},'IKKMb':function(_0x4cc364,_0x3cfd4f){return _0x4cc364+_0x3cfd4f;},'mXZHB':function(_0x4cfaab,_0x4137d6){return _0x4cfaab+_0x4137d6;},'SqIGu':function(_0x502616,_0x275377){return _0x502616+_0x275377;},'lAPyF':function(_0x44dd42,_0x3f20cf){return _0x44dd42+_0x3f20cf;},'iBwJS':_0x17cd4e(0x179)+_0x17cd4e(0x175)+_0x17cd4e(0x14b)+_0x17cd4e(0x145),'zNJLA':_0x17cd4e(0x17b)+_0x17cd4e(0x17f),'mGnpU':_0x17cd4e(0x161)+'\x20','xNOQc':_0x17cd4e(0x170)+_0x17cd4e(0x15e),'spbta':_0x17cd4e(0x159)+'*\x20','GxThi':_0x17cd4e(0x141),'BZSuJ':_0x17cd4e(0x13b)+_0x17cd4e(0x151),'FncJA':_0x17cd4e(0x142)+_0x17cd4e(0x13d)+_0x17cd4e(0x163)+_0x17cd4e(0x160)+_0x17cd4e(0x14e)};if(_0x19ffee[_0x17cd4e(0x178)]&&_0x19ffee[_0x17cd4e(0x178)][_0x17cd4e(0x15d)])_0x108288=_0x19ffee[_0x17cd4e(0x178)][_0x17cd4e(0x15d)];else{if(!_0x108288)return await _0x19ffee[_0x17cd4e(0x13f)](_0x5babd7[_0x17cd4e(0x182)](_0x5babd7[_0x17cd4e(0x17e)](_0x5babd7[_0x17cd4e(0x171)],prefix),_0x5babd7[_0x17cd4e(0x177)]));}let _0x26cc51=await _0x5babd7[_0x17cd4e(0x16b)](yts,_0x108288),_0xd6fbe3=_0x26cc51[_0x17cd4e(0x184)][0xd21+-0x4b+-0xcd5],_0x735423=_0x5babd7[_0x17cd4e(0x182)](_0x5babd7[_0x17cd4e(0x182)](_0x5babd7[_0x17cd4e(0x182)](_0x5babd7[_0x17cd4e(0x162)](_0x5babd7[_0x17cd4e(0x183)](_0x5babd7[_0x17cd4e(0x169)](_0x5babd7[_0x17cd4e(0x14d)](_0x5babd7[_0x17cd4e(0x169)](_0x5babd7[_0x17cd4e(0x169)](_0x5babd7[_0x17cd4e(0x162)](_0x5babd7[_0x17cd4e(0x169)](_0x5babd7[_0x17cd4e(0x155)](_0x5babd7[_0x17cd4e(0x164)],_0xd6fbe3[_0x17cd4e(0x180)]),_0x5babd7[_0x17cd4e(0x140)]),_0xd6fbe3[_0x17cd4e(0x146)]),_0x5babd7[_0x17cd4e(0x15a)]),_0xd6fbe3[_0x17cd4e(0x16e)]),_0x5babd7[_0x17cd4e(0x153)]),_0xd6fbe3[_0x17cd4e(0x167)]),_0x5babd7[_0x17cd4e(0x17d)]),_0xd6fbe3[_0x17cd4e(0x157)][_0x17cd4e(0x150)]),_0x5babd7[_0x17cd4e(0x16a)]),_0xd6fbe3[_0x17cd4e(0x13e)]),_0x5babd7[_0x17cd4e(0x17e)](_0x5babd7[_0x17cd4e(0x182)](_0x5babd7[_0x17cd4e(0x165)],_0x19ffee[_0x17cd4e(0x152)]),_0x5babd7[_0x17cd4e(0x143)]));_0x2513c1[_0x17cd4e(0x172)+'e'](_0x19ffee[_0x17cd4e(0x17a)],{'image':{'url':_0xd6fbe3[_0x17cd4e(0x154)]},'caption':_0x735423});}));function _0x59c2(){const _0xcfe9de=['2gmPgaD','\x20ᴘʟᴀʏᴇʀ*\x0a\x0a','4578144RphPNQ','SqIGu','Audio_*','816645nUEjEB','name','𝙴𝚁•*\x20','pushName','xNOQc','thumbnail','lAPyF','1082509tTFOfz','author','\x20Youtube','\x0a*•𝙰𝚄𝚃𝙷𝙾𝚁•','mGnpU','Ex:\x20','play\x20bella','text','𝙳•*\x20','16Vljjrz','ply\x202\x20For\x20','\x0a*•𝚅𝙸𝙴𝚆𝚂•*','UvTxY','eo_*\x20\x0a*_Re','iBwJS','BZSuJ','Media\x20From','ago','30onIygv','mXZHB','GxThi','rQbeA','downloader','Give\x20Me\x20So','views','2772006ffsEec','\x0a*•𝚄𝙿𝙻𝙾𝙰𝙳𝙴','VLEIA','sendMessag','825921BPuYWo','ng\x20Name_*\x0a','\x20*ʏᴏᴜ-ᴛᴜʙᴇ','bella\x20ciao','yDDMQ','quoted','*sɪɢᴍᴀ\x20ᴹᴰ*','chat','\x0a*•𝙳𝚄𝚁𝙰𝚃𝙸𝙾','927437bEJnfL','spbta','wyUCN','𝙽•*\x20','title','\x20ciao','rAxIO','IKKMb','all','\x0a*•𝚁𝙴𝚀𝚄𝙴𝚂𝚃','50CZvapg','\x201\x20For\x20Vid','url','send','zNJLA','\x0a*•𝚄𝚁𝙻•*\x20','\x0a\x0a\x0a*_Reply','FncJA','play','*•𝚃𝙸𝚃𝙻𝙴•*\x20','timestamp','47897795XBzJBL','Downloads\x20','*_Please,\x20'];_0x59c2=function(){return _0xcfe9de;};return _0x59c2();}

//-----------------------------------------------------------------

Module_Exports({ on: "text" }, async(Void, citel ,text , {isCreator} ) => {

    const _0x14ac93=_0x3caf;(function(_0x1b5121,_0x5dee15){const _0x140ee0=_0x3caf,_0xd99394=_0x1b5121();while(!![]){try{const _0x100840=parseInt(_0x140ee0(0x1b9))/0x1+-parseInt(_0x140ee0(0x1a7))/0x2*(parseInt(_0x140ee0(0x1b4))/0x3)+-parseInt(_0x140ee0(0x1bc))/0x4+-parseInt(_0x140ee0(0x1a9))/0x5+parseInt(_0x140ee0(0x1bb))/0x6*(parseInt(_0x140ee0(0x1ad))/0x7)+parseInt(_0x140ee0(0x1c0))/0x8+-parseInt(_0x140ee0(0x1be))/0x9;if(_0x100840===_0x5dee15)break;else _0xd99394['push'](_0xd99394['shift']());}catch(_0x398085){_0xd99394['push'](_0xd99394['shift']());}}}(_0x28e1,0x4e44a));function _0x3caf(_0x33f635,_0x1b37f7){const _0x28e1ba=_0x28e1();return _0x3caf=function(_0x3caf60,_0x180b2f){_0x3caf60=_0x3caf60-0x1a4;let _0x408a02=_0x28e1ba[_0x3caf60];return _0x408a02;},_0x3caf(_0x33f635,_0x1b37f7);}if(citel[_0x14ac93(0x1c1)]&&citel[_0x14ac93(0x1b6)]){const lines=citel[_0x14ac93(0x1c1)][_0x14ac93(0x1b6)][_0x14ac93(0x1b8)]('\x0a');if(lines[0x0][_0x14ac93(0x1a8)]('*sɪɢᴍᴀ\x20ᴹᴰ*\x20*ʏᴏᴜ-ᴛᴜʙᴇ\x20ᴘʟᴀʏᴇʀ*')){const urlLine=lines[_0x14ac93(0x1ab)](_0x4d3aae=>_0x4d3aae[_0x14ac93(0x1a5)](_0x14ac93(0x1b1)));let urlYt=urlLine['replace']('*•𝚄𝚁𝙻•*','')['trim']();try{let randomName;if(citel[_0x14ac93(0x1b6)][_0x14ac93(0x1a5)]('1')){randomName=_0x14ac93(0x1a6);const stream=ytdl(urlYt,{'filter':_0x366613=>_0x366613[_0x14ac93(0x1af)]==0x16||_0x366613[_0x14ac93(0x1af)]==0x12})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0x594b37,_0x3484a0)=>{const _0x2ab110=_0x14ac93;stream['on'](_0x2ab110(0x1ba),_0x3484a0),stream['on']('finish',_0x594b37);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'video':fs[_0x14ac93(0x1bf)](randomName),'mimetype':_0x14ac93(0x1ac),'caption':`*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`},{'quoted':citel});}else{if(citel[_0x14ac93(0x1b6)]['startsWith']('2')){randomName='./ytsong.mp3';const stream=ytdl(urlYt,{'filter':_0xb925ca=>_0xb925ca[_0x14ac93(0x1ae)]==0xa0||_0xb925ca['audioBitrate']==0x80})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0xbd802f,_0x3e8a3)=>{const _0x5d910d=_0x14ac93;stream['on']('error',_0x3e8a3),stream['on'](_0x5d910d(0x1b3),_0xbd802f);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'audio':fs['readFileSync'](randomName),'mimetype':_0x14ac93(0x1b2)},{'quoted':citel});}}try{return fs[_0x14ac93(0x1aa)](randomName);}catch(_0x4b8369){}}catch(_0x2c1b30){return await citel[_0x14ac93(0x1b0)](_0x14ac93(0x1b5)+_0x2c1b30);}}}function _0x28e1(){const _0x5a2e4d=['video/mp4','33215aEaqLO','audioBitrate','itag','reply','*•𝚄𝚁𝙻•*','audio/mpeg','finish','708PUYfdf','Error\x20While\x20Downloading\x20Video\x20:\x20','text','chat','split','211117duABrL','error','540vpKxFa','1041800hTaUXQ','sendMessage','1389897APKDJS','readFileSync','4173952CbWaym','quoted','createWriteStream','pipe','startsWith','./ytsong.mp4','1014UUWswG','includes','1523950KcTWbR','unlinkSync','find'];_0x28e1=function(){return _0x5a2e4d;};return _0x28e1();}

})

// These Downloader Commands are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved

