

const { addnote,Module_Exports, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, name ,alive  } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "qr",
            kingclass: "user",
            kingpath: __filename,
            infocmd: "Sends CitelsVoid Qr code to scan and get your session id."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*Provide me Text To Get QR*`);
            let h =`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`;
            let buttonMessaged = 
            {
                image: { url: h },
                caption: `*_Scan Qr To Get You Text_*`,
                footer: ` Session bY >> ${name.caption}`,
                headerType: 4,
            };
            return await Void.sendMessage(citel.chat, buttonMessaged );
         
            /*
            let buttonMessaged = {
                image: { url: 'https://secktorbot.onrender.com/' },
                caption: `*_Scan Qr within 15 seconds_*\nYou'll get session id in your log number.`,
                footer: ` Session bY >> sᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: 'mY bOT Session',
                        body: 'Get you Session ID',
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: `https://i.imgur.com/NpA3ZsJ.jpeg`,
                        sourceUrl: `WWW.YOUTUBE.COM/c/SUHAILTECHINFO`,
                    },

                },

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {  quoted: citel });

*/
        })
        
//--------------------------------------------------------------------------- 
Module_Exports({
    kingcmd: "rmbg",
    shortcut : ['removebg'],
    kingclass: "misc",
    kingpath: __filename,
    infocmd: "Remove image Background."
},
async(Void, citel, text) => {
  const _0x16b89c=_0x49c2;function _0x5e60(){const _0x33515f=['log','post','unlinkSync','send','caption','reply','524478FLbaqg','671116swmKkp','Uhh\x20Please,\x20Reply\x20To\x20An\x20Image/Video','1030BtYSxu','https://api.remove.bg/v1.0/removebg','187699OYwNUd','93599mPRWgy','auto','data','3341514nVKyCN','225184Osvztc','downloadAndSaveMediaMessage','catch','imageMessage','*_Uhh\x20Dear,\x20Please\x20provide\x20Valid\x20RemoveBg\x20Key_*\x0a\x0a\x20_Get\x20RemoveBg\x20api\x20key\x20from\x20remove.bg_\x0a\x20_then\x20Put\x20it\x20in\x20var\x20\x22REMOVE_BG_KEY\x22_\x0a\x0a','25NTBVPR','sending\x20removebg\x20image...!','14IYDGua','4141704bMSerR','REMOVE_BG_KEY','quoted','477ZxuHEt'];_0x5e60=function(){return _0x33515f;};return _0x5e60();}(function(_0x3045c0,_0x56c7b6){const _0x146dc7=_0x49c2,_0x492ef5=_0x3045c0();while(!![]){try{const _0x1f6d31=-parseInt(_0x146dc7(0xf0))/0x1*(-parseInt(_0x146dc7(0xe0))/0x2)+parseInt(_0x146dc7(0xd8))/0x3+-parseInt(_0x146dc7(0xec))/0x4+-parseInt(_0x146dc7(0xde))/0x5*(-parseInt(_0x146dc7(0xeb))/0x6)+parseInt(_0x146dc7(0xe1))/0x7+-parseInt(_0x146dc7(0xd9))/0x8*(parseInt(_0x146dc7(0xe4))/0x9)+parseInt(_0x146dc7(0xee))/0xa*(-parseInt(_0x146dc7(0xd5))/0xb);if(_0x1f6d31===_0x56c7b6)break;else _0x492ef5['push'](_0x492ef5['shift']());}catch(_0x1a9a50){_0x492ef5['push'](_0x492ef5['shift']());}}}(_0x5e60,0xe0b62));if(!citel[_0x16b89c(0xe3)])return await citel[_0x16b89c(0xea)]('*Reply\x20Any\x20Image\x20To\x20Remove\x20Background*');let mime=citel[_0x16b89c(0xe3)]['mtype'];if(mime!=_0x16b89c(0xdc))return await citel[_0x16b89c(0xea)](_0x16b89c(0xed));let media=await Void[_0x16b89c(0xda)](citel[_0x16b89c(0xe3)]),anu=await TelegraPh(media);try{await fs[_0x16b89c(0xe7)](media);}catch(_0x14f72d){}const formData={'image_url':anu,'size':_0x16b89c(0xd6)};function _0x49c2(_0x16a55d,_0x16a672){const _0x5e6049=_0x5e60();return _0x49c2=function(_0x49c2f0,_0x45b252){_0x49c2f0=_0x49c2f0-0xd5;let _0x43a2e2=_0x5e6049[_0x49c2f0];return _0x43a2e2;},_0x49c2(_0x16a55d,_0x16a672);}axios[_0x16b89c(0xe6)](_0x16b89c(0xef),formData,{'headers':{'X-Api-Key':name[_0x16b89c(0xe2)]},'responseType':'arraybuffer'})['then'](_0x466f9f=>{const _0x441490=_0x16b89c;console[_0x441490(0xe5)](_0x441490(0xdf));const _0x5b34e5=Buffer['from'](_0x466f9f[_0x441490(0xd7)],'binary');return citel[_0x441490(0xe8)](_0x5b34e5,{'caption':name[_0x441490(0xe9)]},'image');})[_0x16b89c(0xdb)](_0x46980f=>{const _0x3d5c75=_0x16b89c;return citel[_0x3d5c75(0xe8)](_0x3d5c75(0xdd)+name[_0x3d5c75(0xe9)]);});

    
})

//---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "url",
            shortcut : ['createurl'],
            kingclass: "misc",
            kingpath: __filename,
            infocmd: "image to url."
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return await citel.reply(`*Reply To Any Image/Video To Get Url*`)
            let mime = citel.quoted.mtype
            if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("Uhh Please, Reply To An Image/Video")
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let anu = await TelegraPh(media);
            await citel.reply(util.format(anu));
            return await fs.unlinkSync(media);
        })

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "trt",
            shortcut :['translate'],
            kingclass: "misc",
            kingpath: __filename,
            infocmd: "Translate\'s given text in desird language."
        },
        async(Void, citel, text) => {
            if(!text && !citel.quoted) return await citel.reply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`);
            const translatte = require("translatte");
            let lang = text ? text.split(" ")[0].toLowerCase() : 'en';
            if (!citel.quoted)  { text = text.replace( lang , "");  }
            else { text = citel.quoted.text; }
            var whole = await translatte(text, { from:"auto",  to: lang , });
            if ("text" in whole) { return await citel.reply(whole.text); }

        }
    )
    //---------------------------------------------------------------------------


Module_Exports({
            kingcmd: "shell",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Runs command in Heroku(server) shell."
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             if(!text) return citel.reply("*Uhh PLease, Provide A Command to Run Heroku*")
             const { exec } = require("child_process")
             exec(text, (err, stdout) => {
                     if (err) return citel.reply(`----${tlang().title}----\n\n` + err)
                     if (stdout) { return citel.reply(`----${tlang().title}----\n\n` + stdout)  }
             })
        }) 
        

    //---------------------------------------------------------------------------


Module_Exports({
            kingcmd: "eval",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Runs js code on node server."
        },
        async(Void, citel, text,{ isCreator }) => {
               if (!isCreator)  return citel.reply(tlang().owner)
               if(!text) return citel.reply("*Uhh PLease, Provide A Query To Run Master*")
               try {
                   let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                   if (typeof resultTest === "object") await citel.reply(JSON.stringify(resultTest));
                   else await citel.reply(resultTest.toString());
               } catch (err) { return  await citel.reply(err.toString()); }
})
  

//---------------------------------------------------------------------------
/*Module_Exports({
            kingcmd: "delnote",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Deletes note from db."
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            if(!text) return citel.reply("*Uhh PLease, Provide A Note Id. Ex .delnote 1*")
            await delnote(text.split(" ")[0])
             return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)

        }
    )
  */
//---------------------------------------------------------------------------

/*Module_Exports({
            kingcmd: "delallnotes",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)


        }
    )
  
  */
  //---------------------------------------------------------------------------

if(name.WORKTYPE != 'private')
{
Module_Exports({
            kingcmd: "ban",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try 
            {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => 
                {
                    if (!usr) 
                    {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)
                    } 
                    if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                    await sck1.updateOne({ id: users }, { ban: "true" })
                    return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                })
            } catch (e) {  return citel.reply("*Please Reply/Mention Any User.❌*")  }


       })
     //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "unban",
            kingclass: "misc",
            kingpath: __filename,
            infocmd: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(`This command is only for my Owner`)
            try 
            {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("Please mention any user.❌")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) =>
                { // console.log(usr.ban);
                    if (!usr) { return citel.reply(`${pushnamer} is unbanned.`);}
                    if (usr.ban !== "true") return await citel.reply(`${usr.name} is already unbanned.`);
                    await sck1.updateOne({ id: users }, { ban: "false" })
                    return await citel.reply(`${usr.name} is free as a bird now`);
                })
            } catch {  return citel.reply("Please mention any user.❌");  }
        })
}
    //---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
//---------------------------------------------------------------------------
/*
Module_Exports({
            kingcmd: "addnote",
            kingclass: "owner",
            infocmd: "Adds a note on db.",
            kingpath: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply(`🔍 *Please Provide Text To Save In Notes*`)
 
 


        }
    )
 */
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "notes",
        shortcut : ['note'],
        kingclass: "owner",
        kingpath: __filename,
        infocmd: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
  const { tlang } = require('../lib')
if (!isCreator) return citel.reply(tlang().owner)
let txt = `╭───── *『 MONGODB NOTES 』* ───◆
┃ Here You Can Store Notes For Later Use
┃ *------------------------------------------*
┃  ┌┤  *✯---- ADD NEW NOTE ----⦿*
┃  │✭ *Cmd :* ${prefix}notes add 'Your Text'
┃  │✭ *Usage :* Save Text in MongoDb Server
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- GET ALL NOTES ----⦿*
┃  │✭ *Cmd :* ${prefix}notes all
┃  │✭ *Usage :* Read/Get All Saved Notes 
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- DELETE A NOTE ----⦿*
┃  │✭ *Cmd :* ${prefix}notes del 'note id'
┃  │✭ *Usage :* Delete A Single Note By ID Number 
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- DELETE ALL NOTES ----⦿*
┃  │✭ *Cmd :* ${prefix}notes delall
┃  │✭ *Usage :* Delete All Saved Notes 
┃  ╰───────────────────◆
╰━━━━━━━━━━━━━━━━━━━━━━──⊷` ; 
 
 
 if (!text) return await citel.reply(txt);
 if(text.split(' ')[0].toLowerCase() === "add"  || text.split(' ')[0].toLowerCase() === "new" )
 {
             let txt = text.replace("add", "").replace("new", "")
             await addnote(txt)
            return await citel.reply(`New note "${txt}" added in mongodb.`)
 }
 else if(text.split(' ')[0].toLowerCase() === "all")
 {
            const note_store = new Array()
            let leadtext = `*All Available Notes are:-*\n\n`
            leadtext += await allnotes()
            return await citel.reply(leadtext)
 }
  else if(text.split(' ')[0].toLowerCase() === "delall")
  {
        await delallnote()
        return await citel.reply(`All notes deleted from mongodb.`)
  }
 else if(text.split(' ')[0].toLowerCase() === "del")
 {
      try 
      {
            let id = text.split(' ')[1];
            if (!id || isNaN(id)) { return citel.reply("Uhh Please, Provide a Numeric Note ID. Example: .delnote 1"); }
            await delnote(id)
            //return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)
            return await citel.reply(`Note with ID : ${id} has been deleted from MongoDB.`);
      } catch (error) {return citel.reply("Uhh Please, Provide a Note ID. Example: .notes del 1"); }

 }
 else { return await citel.reply(txt) ; }

})

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "alive",
            kingclass: "general",
            kingpath: __filename,
            infocmd: "is bot alive??"
        },
        async(Void, citel, text, {isCreator}) => {
          let get = text;
          let alivemessage = `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : ѕυнαιℓ tєᴄʜ info_\n_If any query : wa.me/923184474176_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*`;
          let urll = '';     
          let image = false;
          let video = false;
          
if(isCreator && text != "")
{
       let aliv = await alive.findOne({ id:"1" }) || await new alive({ id:"1"}).save();
       if (text.startsWith("get")) return citel.reply(aliv.get);
       const linkPattern = /(https?:\/\/\S+)/gi;
       const imageExtensions = ['.jpg', '.jpeg', '.png'];
       const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif'];
       let match = text.match(linkPattern) || false ; 
       if(match)
       {
            let i = 0;
            while (i < match.length && !image && !video ) 
            {
                  urll = match[i];
                  const extension = urll.substring(urll.lastIndexOf('.')).toLowerCase();
                  if (imageExtensions.includes(extension)) { image = true;  video = false; } 
                  else if (videoExtensions.includes(extension)) { video = true; image = false; }
                  else { console.log(`Unknown link: ${urll}`)  }
                  i++;
             }
       }
       if( video || image) { text = text.replace(urll, ''); }
       await alive.updateOne({ id: '1' }, { text: text, get : get, url: urll,  image: image,   video: video });
}
   let aliv = await alive.findOne({ id:"1" }) || await new alive({ id:"1"}).save() ;   
   alivemessage = aliv.text;
  if(alivemessage.includes('&quote')){
     var quoo = await axios.get(`https://favqs.com/api/qotd`);
     let quote = `${quoo.data.quote.body} By ${quoo.data.quote.author}`; 
     alivemessage = alivemessage.replace('&quote', quote);
  }
   if(alivemessage.includes('&line'))
   {
       var resultt = await fetchJson(`https://api.popcat.xyz/pickuplines`);
       var line = resultt.pickupline;
       alivemessage = alivemessage.replace('&line', line);
   }
  
         
        
          image = aliv.image || false;
          video=aliv.video || false ;
          urll = aliv.url || await botpic() ;

          
const alivtxt = `${alivemessage}\n\n*Type ${prefix}menu for my command list.*`;
 const messageOptions = image ? { image: { url: urll }, caption: alivtxt }
                        : video? { video: { url: urll },gifPlayback: true, caption: alivtxt }
                        : { image: { url: await botpic() }, caption: alivtxt };

  return Void.sendMessage(citel.chat, messageOptions,{quoted : citel });
        }
    )
