const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

Module_Exports({
        kingcmd: "insta",
        shortcut: ["ig","igdl","instagram"],
        infocmd: "download instagram videos",
        kingclass: "downloader",
        use: "paste insta video link"
    },
    async(sigma,person,memo) => {
if(!memo) return person.reply('*_Give me insta video link_*')
let txt = memo ? memo.split(" ")[0]:'';
if (!/instagram/.test(txt)) return await person.reply(`*_Please give me valid instagram video link..!_*`);
let data;
try{ data= await (await fetch(`https://inrl-web.onrender.com/api/insta?url=${memo}`)).json();} 
catch { return person.reply(`An error occurred`);  }
return sigma.sendMessage(person.chat, {video : {url : data.result[0] },caption: `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}`,width: 600,height: 490, },{ quoted: person })
    })

Module_Exports({kingcmd: "facebook",
     shortcut: ["fb","fbdl"],
     kingclass: "downloader",
     infocmd: "downloads facebook videos",
     use: "paste fb video link"
     },
    async(sigma, person, memo) => {
        if (!memo) return person.reply(`Give me facebook video link`);
         let txt = memo ? memo.split(" ")[0]:'';
 if (!/facebook/.test(txt)) return await person.reply(`Please give me valid facebook video link..!`);
         bocil.facebookdlv2(memo).then(async (data) =>
          {  return sigma.sendMessage(person.chat, { video: { url: data.result[0].url },caption: `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}`,width: 550,height: 470, },{ quoted: person }) }) 
         return person.reply("Error while downloading your video") 
})

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};



Module_Exports({
            kingcmd: "tiktok",
	    shortcut :  ['tt','ttdl'],
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
 if (status) return await sigma.sendMessage(person.chat, {video : {url : video } ,caption: `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}`,height: 470,width: 540,  } , {quoted : person });
 else return await person.reply("Error while downloading your video") 	})
