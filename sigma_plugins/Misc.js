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
 
 const {tlang, getAdmin, prefix, name, sck,sck1, fetchJson,getBuffer, runtime,Module_Exports } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");

  //---------------------------------------------------------------------------
 Module_Exports({
    kingcmd: "welcome",
    shortcut:["setwelcome","swel"],
    infocmd: "sets welcome message in specific group.",
    kingclass: "group",
 kingpath: __filename
},
async(Void, citel, text,{ isCreator }) => {

        let grp =citel.chat;
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)	
        const isAdmins = groupAdmins.includes(citel.sender) 
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
 
      let Group = await sck.findOne({ id: citel.chat });
      if (!text)  {  return await citel.reply ("*_Your Wellcome Message Is_ :* "+Group.welcome)  }
      await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
      let metadata = await Void.groupMetadata(citel.chat);
      var ppuser;
      let num = citel.sender;
  
      var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
      try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
      return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: welcome_messages,} )


       /*if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('Welcome added for this group.\n *Wellcome Message :* '+text )
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('Welcome updated successfully.\n *New Wellcome Message Is :* '+text)
                
            }      */
  
}
)
 //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "goodbye",
    shortcut: ["setgoodbye","setbye"],
    infocmd: "sets goodbye message in specific group.",
    kingclass: "group",
 kingpath: __filename
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)	
    const isAdmins = groupAdmins.includes(citel.sender) 
    if (!isAdmins && !isCreator) return citel.reply(tlang().admin);

    let Group = await sck.findOne({ id: citel.chat })
    if (!text)  {  return await citel.reply ("*_Your Goodbye Message Is:_* "+Group.goodbye)  }
    await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' }) 
 
    let metadata = await Void.groupMetadata(citel.chat);
    var ppuser;
    let num = citel.sender;
    var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
    try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }

        return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: goodbye_messages, })

         /*   if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('Goodbye added for this group.\n *New Googbye Message Is :* '+text)
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('Goodbye updated successfully.\n *New GoodBye Message Is :* '+text)    
            }      
           */
})
 //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------

 //---------------------------------------------------------------------------
 Module_Exports({
        kingcmd: "quoted",
        infocmd: "get reply Message from Replied Message",
        kingclass: "user",
        kingpath: __filename
    },
    async(Void, citel, text) => {
        if(!citel.quoted) return await citel.send("*_Reply to a Message_*")
        var quote
        try {
             quote = await Void.serializeM(await citel.getQuotedObj())
        } catch (error) {return console.log("error while geting Quoted Message : " , error )}

        if (!quote.quoted) return await citel.replay('*_Message you replied Does Not Contain Any Reply Message_*')
        else await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }}); 
        try {        
            let quote2 = await Void.serializeM(await quote.getQuotedObj())
            return await Void.copyNForward(citel.chat, quote2 , false ,)
        } catch (error) 
        {       
            const contextInfo = {}
            Void.forward(citel.chat ,quote.quoted, contextInfo , citel ); 
        }
        // attp | Void.sendMessage(citel.chat, { sticker: {url: `https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`}}, {quoted: citel })
    })

     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "blocklist",
        shortcut:["blist"],
        infocmd: "get list of all Blocked Numbers",
        kingclass: "user",
        kingpath: __filename,
        use: '',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(`*_Sorry, But You don't have any Blocked Numbers._*`);
            let txt = `${name.ownername}'s *_Block List_*\n\n*_Total Blocked Users_: ${data.length}* \n\n┏━❏\t*𝘉𝘭𝘰𝘤𝘬𝘦𝘥 𝘕𝘶𝘮𝘣𝘦𝘳𝘴*━❏\n`;
            for (let i = 0; i < data.length; i++) {      txt += `┃ ${i + 1}: wa.me/${data[i].split("@")[0]}\n`;    }
            txt += "┗━━━━━━━━━━━⦿";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.send('*Error while getting Blocked Numbers.\nError: *' + err);
          }
    }
    )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "location",
             infocmd: "get location by cordinates",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {
          if (!text) return await citel.reply(`Give Coordinates To Send Location\n *Example:* ${prefix}location 24.121231,55.1121221`);
         let cord1 = parseFloat(text.split(',')[0]) || ''
         let cord2 = parseFloat(text.split(',')[1]) || ''
         if(!cord1 || isNaN(cord1) ||  !cord2 || isNaN(cord2)) return await  citel.reply("```Cordinates Not In Format, Try Again```") 

let txt  = "*----------LOCATION------------*"
   txt +="``` \n Sending Location Of Given Data: ";
   txt +="\n Latitude     :  "+cord1;
   txt +="\n Longitude  :  "+cord2 +"```\n"+name.caption;

await citel.reply (txt);


      return await Void.sendMessage(citel.chat, { location: { degreesLatitude : cord1, degreesLongitude : cord2 } } ,{quoted : citel} )
 }
     )
     //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------

 Module_Exports({
             kingcmd: "getpp",
             infocmd: "Get Profile Pic For Given User",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*_Please Reply To A User To Get Profile Picture_*`)
    let pfp;
     try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
     catch (e) {  return citel.reply("```Error While Getting Profile Pic```") } 
//const ppUrl = await Void.profilePictureUrl(citel.quoted.sender, 'image')
  
                let buttonMessaged = {

                            //quoted: "923184474176@s.whatsapp.net", 
                            //contextInfo: { forwardingScore: 1999999, isForwarded: false },
                            image: { url: pfp },
                            caption: '  *★Profile Picture is Here★*',
                            footer: tlang().footer,
                            headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged,{quoted:citel});


         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "readmore",
             shortcut:["rmore",'readmor'],
             infocmd: "Adds *readmore* in given text.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text) => {
            if(!text) {text = `*Give Text, Eg: _${prefix}readmore text1 readmore text2_*`; }
            else { text += " " }
            text.includes("readmore")?await citel.reply(text.replace(/readmore/, (String.fromCharCode(8206)).repeat(4001))) : await citel.reply(text.replace(" ", (String.fromCharCode(8206)).repeat(4001)))
         }
     )
  //---------------------------------------------------------------------------
  Module_Exports({
    kingcmd: "whois",
    infocmd: "Get info about replied person",
    kingclass: "user",
    use: 'reply to any person',

},
async(sigma, person, memo) => { 

   if (!person.quoted) return person.reply(`*_Please reply any User_*`);
    var bio = await sigma.fetchStatus(person.quoted.sender);
    var bioo = bio.status;
    var setAt = bio.setAt.toString();
    
    var words = setAt.split(" ");
    if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
     
    var num = person.quoted.sender.split('@')[0];
    let pfp;
    try  {  pfp = await sigma.profilePictureUrl(person.quoted.sender, "image"); } 
    catch (e) { pfp = await sigma.profilePictureUrl(person.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
    
    let username = await sck1.findOne({ id: person.quoted.sender });
    var tname = username.name;

    
    let Maher = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *•ᴘᴇʀsᴏɴ's ɪɴғᴏʀᴍᴀᴛɪᴏɴ•*
┃✗ *•ɴᴀᴍᴇ•* ${tname}
┃✗ *•ɴᴜᴍ•* ${num}
┃✗ *•ʙɪᴏ•*  ${bioo}
┃✗ *•sᴇᴛ-ᴀᴛ•* ${setAt}
┃✗   *•ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ•*
┗━━━━━━━━━━⦿
`
    let king = {            
    image: { url: pfp},
    caption: Maher,
    footer: tlang().footer,
    headerType: 4,
    contextInfo: {
        externalAdReply: {
            title: `${name.ownername}`,
            body: `${name.botname}`,
            thumbnail: log0,
            mediaType: 4,
            mediaUrl: '',
            sourceUrl: `${Gname}`,}}}
  
return await sigma.sendMessage(person.chat, king,{quoted:person});
}
)
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "vcard",
             infocmd: "Create Contact by given name.",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*Please Reply to User With Name*`);
if ( !text ) return citel.reply( `*_Please Reply User With Name_*\n *Example: ${prefix}vcard Maher Zubair*`)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})
     //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "take",
             infocmd: "Makes sticker of replied image/video.",
             kingclass: "sticker",
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`*_Reply to a Sticker_*`);
             let mime = citel.quoted.mtype
             if ( mime !="stickerMessage") return await citel.reply("```Please, Reply To A Sticker```") 
             var pack;
             var author;
             if (text) {
                let anu = text.split("|");
                 pack = anu[0] !== "" ? anu[0] : citel.pushName + '♥️';
                 author = anu[1] !== "" ? anu[1] : name.packname;
             } else {
                 pack = citel.pushName;
                 author =name.packname;
             }
                 let media = await citel.quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack,
                    author: author,
                    type:  StickerTypes.FULL,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                    background: "transparent", 
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "uptime",
             shortcut: ["runtime","um"],
             infocmd: "Tells runtime/uptime of bot.",
             kingclass: "tools",
             kingpath: __filename
         },
         async(Void, citel, text) => {
             const upt = runtime(process.uptime())
             citel.reply(`*_Uptime of ${name.botname} is:_*\n${upt}`)
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "wa",
             infocmd: "Makes wa me of quoted or mentioned user.",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if(!citel.quoted && !citel.mentionedJid) return await citel.reply(`*_Please Reply Or Mention A User_*`);
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            return await  citel.reply(`https://wa.me/${users}`);
 
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "mee",
             infocmd: "Makes wa me for user.",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {
              let user = citel.sender.split('@')[0]  ; return await citel.reply( `https://wa.me/${user}` ); })
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "pick",
             infocmd: "Pick random user from Group",
             kingclass: "group",
             kingpath: __filename
         },
         async(Void, citel, match) => {
             if (!match) return citel.reply("*_Which type of User you want?_*");
             const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                 .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
             let member = participants.map((u) => u.id);
             let me = citel.sender;
             let pick = member[Math.floor(Math.random() * member.length)];
             Void.sendMessage(citel.chat, {
                 text: `*_The most ${match} around us is_* *@${pick.split("@")[0]}*`,
                 mentions: [pick],
             }, {
                 quoted: citel,
             });
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "cnsfw",
             infocmd: "activates and deactivates nsfw.\nuse buttons to toggle.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text,{isCreator}) => {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!citel.isGroup) return citel.reply(tlang().group);
             const groupAdmins = await getAdmin(Void, citel)
             //const botNumber = await Void.decodeJid(Void.user.id)
            // const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if(isCreator){}
  else if (!isAdmins) return citel.reply(tlang().admin)
             //if (!isBotAdmins) return citel.reply(tlang().botadmin)
            
  
  
             if (checkgroup.nsfw == "true") return citel.reply(`*_NSFW is Enabled in This Current Chat_*\n*_To Deactive 18+ Commands type ${prefix}deact nsfw_*`);
             else return citel.reply(`*_NSFW is Disabled in This Current Chat_*\n*_To Active 18+ Commands type ${prefix}act nsfw_*`);
 }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "npm",
             infocmd: "download mp4 from url.",
             kingclass: "search",
             use: 'fb Downloader',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('Please give me package name...')
             axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({ data }) => {
                 let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
                 citel.reply(txt)
             }).catch(e => console.log(e))
         }
     )
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "fliptext",
        shortcut: ["ftext"],
        infocmd: "Flips given text.",
        kingclass: "misc",
        use: 'Maher Zubair',
        kingpath: __filename,
    },
    async(sigma, person, memo) => {
        if (!memo) return person.reply(`*_Ex: ${prefix}fliptext I am SIGMA Male_*`)
        flipe = memo.split('').reverse().join('')
        person.reply(`┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ \`\`\`  •ᴛᴇxᴛ ғʟɪᴘᴘᴇʀ ᴛᴏᴏʟ•   \`\`\`\n┃✗ *•ɢɪᴠᴇɴ ᴛᴇxᴛ•*\n┃✗ ${memo}\n┃✗ *•ғʟɪᴘᴇᴅ ᴛᴇxᴛ•*\n┃✗ ${flipe}\n┗━━━━━━━━━━⦿`)
    
    }
    )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "downmp4",
  
             shortcut:['mp4down','mp4fromurl'],
             infocmd: "download mp4 from url.",
             kingclass: "downloader",
             use: 'url',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`_give me Video Link ?_`);
             Void.sendMessage(citel.chat, {
                 video: {
                     url: text.split(" ")[0],
                 },
                 caption: ``,
                 contextInfo: {
                     externalAdReply: {
                         title: `${name.ownername}`,
                         body: `${name.botname}`,
                         mediaType: 2,
                         mediaUrl: ``,
                         sourceUrl: ``,
                     },
                 },
             }, {
                 quoted: citel,
             });
 
         }
     )
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "events",
        infocmd: "activates and deactivates events.\nuse buttons to toggle.",
        kingclass: "group",
        kingpath: __filename
    },
    async(bot, person, write,{isCreator}) => {
        let checkgroup = await sck.findOne({ id: person.chat })
        if (!person.isGroup) return person.reply(tlang().group);
        const groupAdmins = await getAdmin(bot, person)
        //const botNumber = await bot.decodeJid(bot.user.id)
        //const isBotAdmins = person.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = person.isGroup ? groupAdmins.includes(person.sender) : false;
        
    if(isCreator){}
    else if (!isAdmins) return person.reply(tlang().admin)
        //if (!isBotAdmins) return person.reply(tlang().botadmin)
    
        if (checkgroup.events == "true") return person.reply(`*_Events are Enabled in Current Group_*\n*_To Deactivate Welcome Message_*\n*_TYPE ${prefix}deact events_*`);
        else return person.reply(`*_Events are Disabled in Current Group_*\n*_To Activate Welcome Message_*\n*_TYPE ${prefix}act events_*`);
    
    }
    )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "emix",
             infocmd: "Mixes two emojies.",
             kingclass: "sticker",
             use: '<query>',
             kingpath: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`Example : ${prefix}emix 😅,🤔`);
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
             let emoji1 = text.split(",")[0] ;
             let emoji2 = text.split(",")[1];

  const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`);
  const data = await response.json();
  if(data.locale=="") return citel.reply(`Can't Create Mixture, Please Try Other Emojies`)
  else {
let media =await getBuffer(data.results[0].url)

let sticker = new Sticker(media, {
                    pack: name.packname, 
                    author: name.author, 
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                });
const buffer = await sticker.toBuffer();
 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}
   
  
         }
     )
     //---------------------------------------------------------------------------

 

 Module_Exports({
             kingcmd: "sigmabot",
             shortcut : ["chatbot","sbot","sigmachatbot"],
             infocmd: "activates and deactivates chatbot.\nuse buttons to toggle.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib');
             let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
             switch (text.split(" ")[0])
             {
                 case "on":
                     {
                         if (chatbott.worktype == "true") return citel.reply("*_SIGMA Chatbot is Already Enabled_*")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         return await citel.reply('*_SIGMA Chatbot Activated successfully._*')   
                     }
                     break
                 case "off":
                     {
                                if (chatbott.worktype == "false") return citel.reply("*_SIGMA ChatBot is Already Disabled._*")
                                await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                                return await citel.reply('*_SIGMA Chatbot Deactivated Successfully._*')
                     }
                     break
                 default:
                     {
                        if (chatbott.worktype == "false") return await citel.reply(`*_SIGMA Chatbot Status: Disabled_* \n*_To Enable Type: ${prefix}sbot on_*`)
                        else return await citel.reply(`*SIGMA Chatbot Status: Enabled* \n*_To Disable Type : ${prefix}sbot off_*`)
                        
                     }
             }
 
 
      })
     //------------------------------ABW------------------------------------------
    
function _0x2de2(_0x396f7f,_0xd9bed9){const _0x3a76b9=_0x28bb();return _0x2de2=function(_0x271e92,_0x20c4b1){_0x271e92=_0x271e92-(0x9b8+0xb68+0x1*-0x1355);let _0x3b377c=_0x3a76b9[_0x271e92];return _0x3b377c;},_0x2de2(_0x396f7f,_0xd9bed9);}function _0x28bb(){const _0x3ab91c=['admin','WWxRF','gpOve','ully\x20Set\x20T','updateOne','*_Antiword','\x20in\x20this\x20G','nSeQl','Kick/Delet','sfufb','antiwords','OXBSI','lVpsZ','AAYLd','isGroup','7995822boyJhN','ders!_*','delete','4543152ouypIR','sender','\x20words\x20sen','antibadwor','50132ThGcHL','\x0a\x0a*_Use\x20','ntly\x20','includes','QfSaC','uHWqs','antiwords\x20','e/off_*','zjfdF','id\x20Instruc','o\x20Kick\x20Bad','8670120yiFtZo','der','tvInO','*_Anti\x20Wor','send','BXaDb','XAzNU','WjnQP','ZZMjc','Mode\x20➪_*\x20*','kick','disable','hyedP','Ywech','*_Please\x20P','VLHso','Enabled','caption','off','tion_*\x0a*_E','YMrnI','save','s\x20Is\x20Curre','ad_Words\x20F','463126BwHKMG','d\x20Succesfu','deletes\x20an','4onGSNR','trim','startsWith','rom\x20Chat!_','gVXjT','JSOoR','kick/delet','x:\x20','155iymlkJ','Disabled','pHKBI','toLowerCas','roup!_*\x20\x0a\x20','7RBPjAV','d\x20kick\x20bad','msdVm','o\x20Delete\x20B','chat','rovide\x20Val','dHdnY','hioiE','lly!_*','ds\x20Succesf','group','findOne','PoUCt','e/Off_*\x0a\x0a','7156926aMAEhh','false','deact','reply','*_Current\x20','4245456ggnOrI','split','ds\x20Disable','_Words\x20Sen'];_0x28bb=function(){return _0x3ab91c;};return _0x28bb();}const _0x45ea3b=_0x2de2;(function(_0x5eda99,_0x2986b4){const _0xc4b519=_0x2de2,_0x433a61=_0x5eda99();while(!![]){try{const _0x5bff84=parseInt(_0xc4b519(0x21b))/(0x1523+0x1*-0x12d6+0x2a*-0xe)*(-parseInt(_0xc4b519(0x218))/(-0x1*-0x21d7+-0x1dcd+-0x408))+-parseInt(_0xc4b519(0x1db))/(0x128c+0x817*-0x1+0x17e*-0x7)+parseInt(_0xc4b519(0x1f5))/(-0x25a0+-0x1915*0x1+-0x3eb9*-0x1)*(-parseInt(_0xc4b519(0x223))/(-0xa*0x2fb+-0x25ee+0xd8d*0x5))+parseInt(_0xc4b519(0x1ee))/(0x1b43+-0x1d0f+0x2*0xe9)+-parseInt(_0xc4b519(0x228))/(0x3*0x5c+-0xb*-0x47+-0x15*0x32)*(-parseInt(_0xc4b519(0x1f1))/(0x1fdf+-0x2396+0x89*0x7))+parseInt(_0xc4b519(0x1d6))/(-0x1*0x16d2+0x1437+0x2a4)+parseInt(_0xc4b519(0x200))/(0x3d1*0x7+0x107b*0x1+0x565*-0x8);if(_0x5bff84===_0x2986b4)break;else _0x433a61['push'](_0x433a61['shift']());}catch(_0x1e4998){_0x433a61['push'](_0x433a61['shift']());}}}(_0x28bb,0x12fb4f+-0x368*0x25c+0x5*0x5a43),Module_Exports({'kingcmd':_0x45ea3b(0x1e9),'infocmd':_0x45ea3b(0x21a)+_0x45ea3b(0x229)+_0x45ea3b(0x1f3)+_0x45ea3b(0x201),'kingclass':_0x45ea3b(0x1d2)},async(_0x3c2e3b,_0x156f62,_0x23f644,{isCreator:_0x45df03})=>{const _0x4759ab=_0x45ea3b,_0xcbdcff={'BXaDb':function(_0x3a014a){return _0x3a014a();},'QfSaC':function(_0x2ed0e7,_0x12627e,_0xf5384){return _0x2ed0e7(_0x12627e,_0xf5384);},'zjfdF':function(_0x2de97d,_0xb8c8b2){return _0x2de97d&&_0xb8c8b2;},'XAzNU':function(_0x5bfd8d){return _0x5bfd8d();},'gVXjT':function(_0x9dfaad,_0xb9da2e){return _0x9dfaad+_0xb9da2e;},'WjnQP':function(_0x4ff287,_0x494f4e){return _0x4ff287+_0x494f4e;},'ZZMjc':function(_0x2af027,_0x1654ee){return _0x2af027+_0x1654ee;},'YMrnI':_0x4759ab(0x1e4)+_0x4759ab(0x216)+_0x4759ab(0x1f7),'tvInO':function(_0xa26564,_0x225c4c){return _0xa26564===_0x225c4c;},'Ywech':_0x4759ab(0x1d7),'hioiE':_0x4759ab(0x224),'msdVm':_0x4759ab(0x210),'sfufb':_0x4759ab(0x1e5)+_0x4759ab(0x227),'dHdnY':function(_0xd101a4,_0x3888f8){return _0xd101a4===_0x3888f8;},'pHKBI':_0x4759ab(0x1da)+_0x4759ab(0x209)+'_','lVpsZ':_0x4759ab(0x212),'JSOoR':_0x4759ab(0x1d8),'PoUCt':_0x4759ab(0x20b),'WWxRF':_0x4759ab(0x203)+_0x4759ab(0x1dd)+_0x4759ab(0x219)+_0x4759ab(0x1d0),'gpOve':_0x4759ab(0x20a),'OXBSI':_0x4759ab(0x203)+_0x4759ab(0x1d1)+_0x4759ab(0x1e2)+_0x4759ab(0x1ff)+_0x4759ab(0x1de)+_0x4759ab(0x1ef),'VLHso':_0x4759ab(0x1f0),'AAYLd':_0x4759ab(0x203)+_0x4759ab(0x1d1)+_0x4759ab(0x1e2)+_0x4759ab(0x1cb)+_0x4759ab(0x217)+_0x4759ab(0x21e)+'*','uHWqs':function(_0x2f39c7,_0x278f2f){return _0x2f39c7+_0x278f2f;},'nSeQl':_0x4759ab(0x20e)+_0x4759ab(0x1cd)+_0x4759ab(0x1fe)+_0x4759ab(0x213)+_0x4759ab(0x222),'hyedP':_0x4759ab(0x1fb)+_0x4759ab(0x221)+_0x4759ab(0x1fc)};if(!_0x156f62[_0x4759ab(0x1ed)])return _0x156f62[_0x4759ab(0x1d9)](_0xcbdcff[_0x4759ab(0x205)](tlang)[_0x4759ab(0x1d2)]);const _0x4a681a=await _0xcbdcff[_0x4759ab(0x1f9)](getAdmin,_0x3c2e3b,_0x156f62),_0x4ecd38=_0x156f62[_0x4759ab(0x1ed)]?_0x4a681a[_0x4759ab(0x1f8)](_0x156f62[_0x4759ab(0x1f2)]):![];if(_0xcbdcff[_0x4759ab(0x1fd)](!_0x4ecd38,!_0x45df03))return _0x156f62[_0x4759ab(0x1d9)](_0xcbdcff[_0x4759ab(0x206)](tlang)[_0x4759ab(0x1df)]);let _0x5d83b5=await sck[_0x4759ab(0x1d3)]({'id':_0x156f62[_0x4759ab(0x1cc)]})||await new sck({'id':_0x156f62[_0x4759ab(0x1cc)]})[_0x4759ab(0x215)](),_0x33fcb4=_0x23f644?_0x23f644[_0x4759ab(0x226)+'e']()[_0x4759ab(0x21c)]():![],_0x49e278=_0x33fcb4?_0x33fcb4[_0x4759ab(0x1dc)]('\x20')[-0x1f1*0x9+-0x1f19+-0x2*-0x1849]:![];return!_0x49e278?await _0x156f62[_0x4759ab(0x204)](_0xcbdcff[_0x4759ab(0x21f)](_0xcbdcff[_0x4759ab(0x21f)](_0xcbdcff[_0x4759ab(0x21f)](_0xcbdcff[_0x4759ab(0x207)](_0xcbdcff[_0x4759ab(0x208)](_0xcbdcff[_0x4759ab(0x214)],_0xcbdcff[_0x4759ab(0x202)](_0x5d83b5[_0x4759ab(0x1f4)+'ds'],_0xcbdcff[_0x4759ab(0x20d)])?_0xcbdcff[_0x4759ab(0x1cf)]:_0xcbdcff[_0x4759ab(0x22a)]),_0xcbdcff[_0x4759ab(0x1e8)]),_0xcbdcff[_0x4759ab(0x1ce)](_0x5d83b5[_0x4759ab(0x1f4)+'ds'],_0xcbdcff[_0x4759ab(0x20d)])?'':_0xcbdcff[_0x4759ab(0x21f)](_0xcbdcff[_0x4759ab(0x208)](_0xcbdcff[_0x4759ab(0x225)],_0x5d83b5[_0x4759ab(0x1f4)+'ds']),'_*')),_0x4759ab(0x1f6)+prefix+(_0x4759ab(0x1fb)+_0x4759ab(0x1e7)+_0x4759ab(0x1d5))),name[_0x4759ab(0x211)])):_0x49e278[_0x4759ab(0x21d)](_0xcbdcff[_0x4759ab(0x1eb)])||_0x49e278[_0x4759ab(0x21d)](_0xcbdcff[_0x4759ab(0x220)])||_0x49e278[_0x4759ab(0x21d)](_0xcbdcff[_0x4759ab(0x1d4)])?(await sck[_0x4759ab(0x1e3)]({'id':_0x156f62[_0x4759ab(0x1cc)]},{'antibadwords':_0xcbdcff[_0x4759ab(0x20d)]}),await _0x156f62[_0x4759ab(0x204)](_0xcbdcff[_0x4759ab(0x1e0)])):_0x49e278[_0x4759ab(0x21d)](_0xcbdcff[_0x4759ab(0x1e1)])?(await sck[_0x4759ab(0x1e3)]({'id':_0x156f62[_0x4759ab(0x1cc)]},{'antibadwords':_0xcbdcff[_0x4759ab(0x1e1)]}),await _0x156f62[_0x4759ab(0x204)](_0xcbdcff[_0x4759ab(0x1ea)])):_0x49e278[_0x4759ab(0x21d)](_0xcbdcff[_0x4759ab(0x20f)])?(await sck[_0x4759ab(0x1e3)]({'id':_0x156f62[_0x4759ab(0x1cc)]},{'antibadwords':_0xcbdcff[_0x4759ab(0x20f)]}),await _0x156f62[_0x4759ab(0x204)](_0xcbdcff[_0x4759ab(0x1ec)])):await _0x156f62[_0x4759ab(0x204)](_0xcbdcff[_0x4759ab(0x1fa)](_0xcbdcff[_0x4759ab(0x1fa)](_0xcbdcff[_0x4759ab(0x1e6)],prefix),_0xcbdcff[_0x4759ab(0x20c)]));}));
//---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "ebinary",
             infocmd: "encode binary",
             kingclass: "misc",
             use: 'hi',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             try {
                 if (!text) return citel.reply(`Send text to be encoded.\nEx: ${prefix}ebinary hi My I am Maher Zubair`);
 
                 let textt = text || citel.quoted.text
                 let eb = await eBinary(textt);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "dbinary",
             infocmd: "decode binary",
             kingclass: "misc",
             use: 'hi',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             try {
                 if (!text) return citel.reply(`Send text to be Decoded.\nEx: ${prefix}dbinary hi My I am Maher Zubair`);
                 let eb = await dBinary(text);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )

//-----------------------------------------------------------------------------------

if(name.WORKTYPE != 'private')
{
 
Module_Exports({
  kingcmd: "bot",
  infocmd: "activates and deactivates bot.\nuse buttons to toggle.",
  kingclass: "misc",
  kingpath: __filename
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return citel.reply(tlang().owner)
  switch (text.split(" ")[0]) {
            case 'on':{
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, botenable: "true" }).save()
                        return citel.reply(`*_Successfully Enabled ${name.botname}_*`)
                    } else {
                        if (checkgroup.botenable == "true") return citel.reply("*_Bot was Already Enabled_*")
                        await sck.updateOne({ id: citel.chat }, { botenable: "true" })
                        return citel.reply(`*_Successfully Enabled ${name.botname}_*`)
                    }
                }

            break
           case 'off':{
                       {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, botenable: "false" })
                                .save()
                            return citel.reply(`*_Successfully disabled ${name.botname}_*`)
                        } else {
                            if (checkgroup.botenable == "false") return citel.reply("*_Bot Was Already Disabled_*")
                            await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                            return citel.reply(`*_Successfully disabled ${name.botname}_*`)
                        }
                    }
           }
           break
           default:
           {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   let buttons = [{
                             buttonId: `${prefix}bot on`,
                             buttonText: {
                                 displayText: "Turn On",
                             },
                             type: 1,
                         },
                         {
                             buttonId: `${prefix}bot off`,
                             buttonText: {
                                 displayText: "Turn Off",
                             },
                             type: 1,
                         },
                     ];
                     await Void.sendButtonText(citel.chat, buttons, `*_Bot Status in Current Group: ${checkgroup.botenable}_*`, Void.user.name, citel);
           }
       }
})   
} // if Statements
     //---------------------------------------------------------------------------
 /*
 Module_Exports({
             kingcmd: "antispam",
             infocmd: "Kick Spamers From Group.\nuse buttons to toggle.",
             kingclass: "group",
             kingpath: __filename
         },
         async(Void, citel, text , {isCreator}) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
           let check = text ? text : '';
             let checkgroup = await sck.findOne({ id: citel.chat }) || await new sck({id : citel.chat , antispam : 'true'  }) .save();
             const groupAdmins = await getAdmin(Void, citel)
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins && !isCreator) return citel.reply(tlang().admin)     
             if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
             { 
                 try 
                 {
                  await sck.updateOne({ id: citel.chat }, { antispam: "true" })
                   return await citel.reply("*_Antispam Enabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
             }
             else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
             {
                 try 
                 {
                    await sck.updateOne({ id: citel.chat }, { antispam: "false" })
                    return await citel.reply("*_Antispam Disabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
             }      
if (checkgroup.antispam == "true") return citel.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
else return citel.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
         
 })
 */
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "ginfo",
        infocmd: "shows group info",
        kingclass: "group"
      }, async (bot, person, text, { isCreator }) => {
const _0x260d38=_0xb87c;(function(_0x4f536c,_0x56a6b4){const _0x19e4b2=_0xb87c,_0x2fedd0=_0x4f536c();while(!![]){try{const _0xb02731=-parseInt(_0x19e4b2(0xb5))/(0x1*-0x1d89+-0x7ab+-0x2535*-0x1)*(-parseInt(_0x19e4b2(0x87))/(0x4*0x845+-0x1d*0x3a+-0x1a80))+parseInt(_0x19e4b2(0xaf))/(-0xf55+-0x3*-0x4f5+-0xb*-0xb)*(parseInt(_0x19e4b2(0x9f))/(-0x2e*-0x6e+-0x1*0x1777+-0x3b7*-0x1))+-parseInt(_0x19e4b2(0xa3))/(0x4bb*0x4+-0x1ff*-0xe+-0x2ed9)*(-parseInt(_0x19e4b2(0x72))/(0x867+0x1*-0x16ae+0x7*0x20b))+-parseInt(_0x19e4b2(0x9c))/(-0xb*0x16f+0x1*0x221d+-0x1251)*(-parseInt(_0x19e4b2(0xbe))/(-0x2*0x31d+0xb7e+0xa*-0x86))+-parseInt(_0x19e4b2(0x73))/(0xd*-0x13d+-0x1*0x5b7+0x15d9)+-parseInt(_0x19e4b2(0x7f))/(-0x1c69+-0x10*0x95+0x25c3)+-parseInt(_0x19e4b2(0xb0))/(0xc19+0x99*0xb+0x1*-0x12a1)*(parseInt(_0x19e4b2(0xb2))/(-0xa4a+0xb06*0x3+-0x16bc));if(_0xb02731===_0x56a6b4)break;else _0x2fedd0['push'](_0x2fedd0['shift']());}catch(_0x345aae){_0x2fedd0['push'](_0x2fedd0['shift']());}}}(_0x19ee,0x83884+-0x3961c+0x2794));if(!person[_0x260d38(0x6e)])return person[_0x260d38(0x75)](tlang()[_0x260d38(0x8c)]);const groupAdmins=await getAdmin(bot,person),isAdmin=person[_0x260d38(0x6e)]?groupAdmins[_0x260d38(0x78)](person[_0x260d38(0x79)]):![];if(!isAdmin&&!isCreator)return person[_0x260d38(0x6d)](tlang()[_0x260d38(0x7a)]);function _0xb87c(_0x596eaa,_0x17dba2){const _0x3d32b7=_0x19ee();return _0xb87c=function(_0x9c076f,_0x1173cf){_0x9c076f=_0x9c076f-(0x2267+-0x11c1+-0x3e*0x43);let _0x41fe6e=_0x3d32b7[_0x9c076f];return _0x41fe6e;},_0xb87c(_0x596eaa,_0x17dba2);}try{let checkinfo=await sck[_0x260d38(0xa8)]({'id':person[_0x260d38(0xa9)]})||await new sck({'id':person[_0x260d38(0xa9)]})[_0x260d38(0xa5)]();bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]);let gname=await(await bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]))[_0x260d38(0xbf)],gdesc=await(await bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]))[_0x260d38(0x83)]||_0x260d38(0x93)+_0x260d38(0x9a);;let gmembers=await(await bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]))[_0x260d38(0xb7)+'ts'][_0x260d38(0x88)],gowner=await(await bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]))[_0x260d38(0x8e)]||groupAdmins[_0x260d38(0xa1)](_0x240d28=>_0x240d28[_0x260d38(0x7a)]===_0x260d38(0xa4))?.['id']||person[_0x260d38(0xa9)][_0x260d38(0x74)]`-`[-0x1*-0xb51+-0x33f+-0x812]+(_0x260d38(0x8a)+_0x260d38(0x81)),gcreate=await(await bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]))[_0x260d38(0x6c)],gid=await(await bot[_0x260d38(0x6f)+_0x260d38(0x97)](person[_0x260d38(0xa9)]))['id'],createDate=new Date(parseInt(gcreate)*(0x337*0x1+0x7a*-0x1+0x17*0xd)),formattedCreateDate=(createDate[_0x260d38(0x9b)]()+(0x2382+-0x1eb3+0xf*-0x52))[_0x260d38(0xb1)]()[_0x260d38(0xba)](0x525+0x244b+-0x14b7*0x2,'0')+'/'+(createDate[_0x260d38(0xb3)]()[_0x260d38(0xb1)]()[_0x260d38(0xba)](-0x1e25*-0x1+-0x1036+-0xded,'0')+'/')+(''+createDate[_0x260d38(0xbc)+'r']()),response=_0x260d38(0x90)+_0x260d38(0xb8)+_0x260d38(0x80);return response+=_0x260d38(0x85)+gname+_0x260d38(0x98),response+=_0x260d38(0x89)+'➪\x20'+gmembers+_0x260d38(0x98),response+=_0x260d38(0x71)+_0x260d38(0x8f)+gowner[_0x260d38(0x74)]('@')[-0xac+-0x9*-0x61+-0x2bd]+_0x260d38(0x98),response+=_0x260d38(0x96)+_0x260d38(0x82)+formattedCreateDate+_0x260d38(0x98),response+=_0x260d38(0x86)+gid+_0x260d38(0xbd),response+=_0x260d38(0x7c)+_0x260d38(0xa6)+_0x260d38(0x92)+'\x0a\x0a',response+=_0x260d38(0x94)+_0x260d38(0x7e)+(checkinfo[_0x260d38(0xbb)]===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=checkinfo[_0x260d38(0xbb)]===_0x260d38(0x7b)?'':_0x260d38(0x84)+_0x260d38(0xab)+'_'+checkinfo[_0x260d38(0xbb)]+_0x260d38(0x98),response+=_0x260d38(0xa0)+_0x260d38(0x95)+(checkinfo[_0x260d38(0xad)+'ds']===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=checkinfo[_0x260d38(0xad)+'ds']===_0x260d38(0x7b)?'':_0x260d38(0x84)+_0x260d38(0xab)+'_'+checkinfo[_0x260d38(0xad)+'ds']+_0x260d38(0x98),response+=_0x260d38(0x76)+_0x260d38(0x7e)+(checkinfo[_0x260d38(0x8b)]===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=checkinfo[_0x260d38(0x8b)]===_0x260d38(0x7b)?'':_0x260d38(0x84)+_0x260d38(0xab)+'_'+checkinfo[_0x260d38(0x8b)]+_0x260d38(0x98),response+=_0x260d38(0xaa)+_0x260d38(0xb6)+(checkinfo[_0x260d38(0xb9)+'e']===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=_0x260d38(0x7d)+_0x260d38(0x8d)+(checkinfo[_0x260d38(0xa7)]===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=_0x260d38(0xac)+(checkinfo[_0x260d38(0x99)]===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=_0x260d38(0x9e)+'\x20'+(checkinfo[_0x260d38(0x77)]===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),response+=_0x260d38(0x91)+'➪\x20'+(checkinfo[_0x260d38(0x70)]===_0x260d38(0x7b)?_0x260d38(0x9d):_0x260d38(0xb4))+_0x260d38(0x98),await person[_0x260d38(0xae)](response);}catch(_0x6d7e94){person[_0x260d38(0x6d)](_0x260d38(0xa2)+_0x6d7e94);}function _0x19ee(){const _0xaacc9f=['3gUbikY','6514453fizrwF','toString','24RodsXy','getDate','True','41295nINtjK','mote\x20➪\x20','participan','formation_','antipromot','padStart','antilink','getFullYea','_*\x0a\x0a','2214456xKlShg','subject','creation','sent','isGroup','groupMetad','economy','*_Owner\x20➪\x20','3326142TFtXNR','295974nizZJK','split','reply','\x0a*_AntiBot','events','includes','sender','admin','false','*_Extra\x20Gr','*_AntiDemo','\x20➪\x20','6023940dvIPdD','*\x0a\x0a\x20','p.net','\x20Date\x20➪\x20','desc','*_Current\x20','*_Name\x20➪\x20','*_Jid\x20➪\x20','20uHsIlS','length','*_Members\x20','@s.whatsap','antibot','group','te\x20➪\x20','owner','wa.me/','*_Group\x20In','*_Economy\x20','urations_*','*_No\x20descr','*_AntiLink','ds\x20➪\x20','*_Creation','ata','_*\x0a','pdm','iption_*','getMonth','14uBrbot','False','*_Events\x20➪','2450628RpavrN','\x0a*_AntiWor','find','*_Error_*\x20','5YJZKzl','superadmin','save','oup\x20Config','antidemote','findOne','chat','\x0a*_AntiPro','Mode\x20➪_*\x20*','*_PDM\x20➪\x20','antibadwor','send'];_0x19ee=function(){return _0xaacc9f;};return _0x19ee();}
      })
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "antilink",
        infocmd: "activates and deactivates antilink.\nuse buttons to toggle.",
        kingclass: "group",
        kingpath: __filename
    },
    async(Void, citel, text , {isCreator}) => {
          const _0x1d7d89=_0x26a4;(function(_0x1635cd,_0x3e5126){const _0x4ab2e7=_0x26a4,_0x425095=_0x1635cd();while(!![]){try{const _0x5d35e5=parseInt(_0x4ab2e7(0x157))/(0x62*0x5+-0x16*0x1c+0x7f)*(parseInt(_0x4ab2e7(0x178))/(-0x1*-0x12b9+-0xa1*0xe+-0x9e9))+-parseInt(_0x4ab2e7(0x13c))/(-0x7ab+-0x2183+0x2931)+parseInt(_0x4ab2e7(0x15c))/(-0x17bf*-0x1+0x2175+-0x14*0x2dc)+-parseInt(_0x4ab2e7(0x144))/(-0xd31+0x29d*-0xb+0x1d3*0x17)*(parseInt(_0x4ab2e7(0x162))/(0x942+0x21*0x125+-0x2f01*0x1))+-parseInt(_0x4ab2e7(0x139))/(0x8ff+0x21b5*0x1+-0x2aad)+parseInt(_0x4ab2e7(0x160))/(0x1b25*-0x1+-0x10ef+0x2c1c)*(-parseInt(_0x4ab2e7(0x15a))/(-0x4b*0x7b+0x9a1+0x1a71))+parseInt(_0x4ab2e7(0x13f))/(0x1a3*0x11+-0x5ed+-0xaee*0x2);if(_0x5d35e5===_0x3e5126)break;else _0x425095['push'](_0x425095['shift']());}catch(_0x2a0b4e){_0x425095['push'](_0x425095['shift']());}}}(_0x1d56,0x9d7b3+0x113ec*-0x1b+-0x371*-0x9d6));if(!citel[_0x1d7d89(0x169)])return citel[_0x1d7d89(0x15d)](tlang()[_0x1d7d89(0x16c)]);const groupAdmins=await getAdmin(Void,citel),isAdmins=citel[_0x1d7d89(0x169)]?groupAdmins[_0x1d7d89(0x14e)](citel[_0x1d7d89(0x14d)]):![];function _0x1d56(){const _0xd025f1=['8iEpkhW','delete','777942PuaFRJ','roup!_*\x20\x0a\x20','caption','off','lly\x20set\x20to','\x20senders!_','k\x20Disabled','isGroup','rovide\x20Val','findOne','group','x:\x20','ick/delete','\x0a\x0a*_Use\x20','\x20kick\x20link','disable','antilink\x20k','startsWith','kick','save','updateOne','admin','282078DjkQRm','\x20Succesful','10687551EUlmMQ','Enabled','id\x20Instruc','63447CjiqWj','*_Antilink','*_Please\x20P','35443130xjlIhW','nks\x20from\x20c','tly\x20','hat!_*','*_Anti_Lin','25OOiUFU','/off_*','/Off_*\x0a\x0a','chat','trim','Mode\x20➪_*\x20*','false','ick/Delete','tion_*\x0a*_E','sender','includes','*_Current\x20','Disabled','\x20is\x20Curren','deact','split','\x20delete\x20li','toLowerCas','send','3cTkfuS','ly!_*','k\x20Succesfu','7922322hnckrD','\x20In\x20this\x20G','261136DIBhsy','reply','antilink','antilink\x20K'];_0x1d56=function(){return _0xd025f1;};return _0x1d56();}if(!isAdmins&&!isCreator)return citel[_0x1d7d89(0x15d)](tlang()[_0x1d7d89(0x177)]);function _0x26a4(_0x1bb6f2,_0x9b12d7){const _0x4ab5f6=_0x1d56();return _0x26a4=function(_0x4a3321,_0x56b98e){_0x4a3321=_0x4a3321-(-0x79e+0x2417+0x4*-0x6d0);let _0x2ca8da=_0x4ab5f6[_0x4a3321];return _0x2ca8da;},_0x26a4(_0x1bb6f2,_0x9b12d7);}let checkinfo=await sck[_0x1d7d89(0x16b)]({'id':citel[_0x1d7d89(0x147)]})||await new sck({'id':citel[_0x1d7d89(0x147)]})[_0x1d7d89(0x175)](),textt=text?text[_0x1d7d89(0x155)+'e']()[_0x1d7d89(0x148)]():![],action=textt?textt[_0x1d7d89(0x153)]('\x20')[0x9*0x44d+0x9d0+-0x3085]:![];return!action?await citel[_0x1d7d89(0x156)](_0x1d7d89(0x13d)+_0x1d7d89(0x151)+_0x1d7d89(0x141)+(checkinfo[_0x1d7d89(0x15e)]===_0x1d7d89(0x14a)?_0x1d7d89(0x150):_0x1d7d89(0x13a))+(_0x1d7d89(0x15b)+_0x1d7d89(0x163))+(checkinfo[_0x1d7d89(0x15e)]===_0x1d7d89(0x14a)?'':_0x1d7d89(0x14f)+_0x1d7d89(0x149)+'_'+checkinfo[_0x1d7d89(0x15e)]+'_*')+(_0x1d7d89(0x16f)+prefix+(_0x1d7d89(0x15f)+_0x1d7d89(0x14b)+_0x1d7d89(0x146)))+name[_0x1d7d89(0x164)]):action[_0x1d7d89(0x173)](_0x1d7d89(0x165))||action[_0x1d7d89(0x173)](_0x1d7d89(0x152))||action[_0x1d7d89(0x173)](_0x1d7d89(0x171))?(await sck[_0x1d7d89(0x176)]({'id':citel[_0x1d7d89(0x147)]},{'antilink':_0x1d7d89(0x14a)}),await citel[_0x1d7d89(0x156)](_0x1d7d89(0x143)+_0x1d7d89(0x168)+_0x1d7d89(0x179)+_0x1d7d89(0x158))):action[_0x1d7d89(0x173)](_0x1d7d89(0x174))?(await sck[_0x1d7d89(0x176)]({'id':citel[_0x1d7d89(0x147)]},{'antilink':_0x1d7d89(0x174)}),await citel[_0x1d7d89(0x156)](_0x1d7d89(0x143)+_0x1d7d89(0x159)+_0x1d7d89(0x166)+_0x1d7d89(0x170)+_0x1d7d89(0x167)+'*')):action[_0x1d7d89(0x173)](_0x1d7d89(0x161))?(await sck[_0x1d7d89(0x176)]({'id':citel[_0x1d7d89(0x147)]},{'antilink':_0x1d7d89(0x161)}),await citel[_0x1d7d89(0x156)](_0x1d7d89(0x143)+_0x1d7d89(0x159)+_0x1d7d89(0x166)+_0x1d7d89(0x154)+_0x1d7d89(0x140)+_0x1d7d89(0x142))):await citel[_0x1d7d89(0x156)](_0x1d7d89(0x13e)+_0x1d7d89(0x16a)+_0x1d7d89(0x13b)+_0x1d7d89(0x14c)+_0x1d7d89(0x16d)+prefix+(_0x1d7d89(0x172)+_0x1d7d89(0x16e)+_0x1d7d89(0x145)));

}) 
     //---------------------------------------------------------------------------
 Module_Exports({ on: "body" }, async(Void, citel) => {
   if (!name.autoreaction) return 
   else if (name.autoreaction === 'true' && citel.text.startsWith(prefix)) {
         const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
  
  else if (name.autoreaction === 'all') {
         const mojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','🧞‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣']
         const mokis = mojis[Math.floor(Math.random() * (mojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: mokis,
                 key: citel.key
             }
         })
     }
 
 })

 // All These Misc Commamnds Are Developed By @Maher-Zubair
 // Whatsapp +923466319114
 // Usage And CopyRights Are Reserved
