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

const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');
const ttdl = require('btch-downloader');

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
      person.send('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+memo)
      let data;
      try{ data= await (await fetch(`https://inrl-web.onrender.com/api/insta?url=${memo}`)).json();} 
      catch { return person.reply(`An error occurred`);  }
      let SIGMA_INSTA_DOWNLODER = {
        video : {url : data.result[0] },
        caption: sgen,
        footer: tlang().footer,
        headerType: 4,
        width: 600,
        height: 490,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: "ɪɴsᴛᴀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ",
                thumbnail: log0,
                mediaType: 4,
                mediaUrl: '',
                sourceUrl: zyt,}}}
      return sigma.sendMessage(person.chat,SIGMA_INSTA_DOWNLODER,{ quoted: person })
    
    })
    Module_Exports({
        kingcmd: "facebook",
        shortcut: ["fb","fbdl"],
        kingclass: "downloader",
        infocmd: "downloads facebook videos",
        use: "paste fb video link"
        },
       async(sigma, person, memo) => {
        if (!memo) return person.reply(`Give me facebook video link`);
        let txt = memo ? memo.split(" ")[0]:'';
if (!/facebook/.test(txt)) return await person.reply(`Please give me valid facebook video link..!`);
person.send('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+memo)
        bocil.facebookdlv2(memo).then(async (data) =>
         {        
         let SIGMA_FB_DOWNLODER = {
          video : {url : data.result[0] },
          caption: sgen,
          footer: tlang().footer,
          headerType: 4,
          width: 600,
          height: 490,
          contextInfo: {
              externalAdReply: {
                  title: snam,
                  body: "ꜰʙ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ",
                  thumbnail: log0,
                  mediaType: 4,
                  mediaUrl: '',
                  sourceUrl: zyt,}}}
          return sigma.sendMessage(person.chat,SIGMA_FB_DOWNLODER,  { quoted: person }) }) 
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
            if (status) return await sigma.sendMessage(person.chat, {video : {url : video } ,caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,height: 470,width: 540,  } , {quoted : person });
            else return await person.reply("Error while downloading your video") 
        })    
        
        
/*


        const url = require('url');
        const https = require('https'); 
        
        function extractDomainAndSurl(url) {
          const { hostname, query } = url.parse(url);
          const { surl } = query;
          return [hostname, surl];
        }
        
        function parseCookieFile(cookiefile) {
          const cookies = {};
          const data = fs.readFileSync(cookiefile, 'utf8');
        
          data.split('\n').forEach(line => {
            if (!line.startsWith('#')) {
              const [name, value] = line.trim().split('\t')[5,6];
              cookies[name] = value; 
            }
          });
        
          return cookies;
        }
        
        async function download(url) {
          const cookies = parseCookieFile('cookies.txt');
          
          const httpsAgent = new https.Agent({  
            rejectUnauthorized: false
          });
        
          const res = await axios.get(url, { httpsAgent, headers: {
            Cookie: Object.entries(cookies).map(([name, value]) => `${name}=${value}`).join('; ')
          }});
        
          const [domain, key] = extractDomainAndSurl(res.url);
        
          const headers = {
            Accept: 'application/json, text/plain, *',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            Referer: `https://${domain}/sharing/link?surl=${key}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36'
          };
          
          const { data } = await axios.get(`https://www.terabox.com/share/list?app_id=250528&shorturl=${key}&root=1`, {
            httpsAgent,
            headers    
          });
        
          return data.list[0].dlink;
        }
        
        // Usage
        
        const dlink = await download('https://teraboxapp.com/s/1ZqumlUbwrc32c40geaQsVg');
        */

        
        Module_Exports( {
        
          kingcmd: "tb",
          infocmd: "Terabox video downloader",
        },
          async(sigma, man, tax) => {
        
            if(!tax) return man.reply('Provide a Terabox link');
        
            const url = tax[0];
        
           
        
              const cookies = parseCookies('cookies.txt'); // parse cookies
        
              const { data } = await axios.get(url, {  headers: {
                Cookie: cookies 
               }});
        
              const [domain, key] = extractDomainAndSurl(data.url); // get domain and surl
        
              const { data: res } = await axios.get(`https://www.terabox.com/share/list?app_id=250528&shorturl=${key}&root=1`, {
                 
                 headers: {
                   Referer: `https://${domain}/sharing/link?surl=${key}`  
                 }
              });
        
              const dlink = res.list[0].dlink;
              
              return man.reply(dlink);
              
            
              return man.reply('Error downloading file');
            }
        
          
        
        )
        
        function parseCookies(file) {
          // ... parse cookies
        }
        
        function extractDomainAndSurl(url) {
          // ... extract domain and surl 
        }



