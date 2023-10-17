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

const { addnote,Module_Exports, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, name ,alive  } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');
const formData = require('form-data')
const axios = require('axios')
const fetch = require('node-fetch');
const { Module } = require('module');
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "qr",
            kingclass: "misc",
            kingpath: __filename,
            infocmd: "Sends Qr code to scan and get your session id."
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
    kingclass: "converter",
    kingpath: __filename,
    infocmd: "Remove image Background."
},
async(Void, citel, text) => {
  const _0x16b89c=_0x49c2;function _0x5e60(){const _0x33515f=['log','post','unlinkSync','send','caption','reply','524478FLbaqg','671116swmKkp','*_Reply\x20To\x20An\x20Image_*','1030BtYSxu','https://api.remove.bg/v1.0/removebg','187699OYwNUd','93599mPRWgy','auto','data','3341514nVKyCN','225184Osvztc','downloadAndSaveMediaMessage','catch','imageMessage','*_Please\x20provide\x20Valid\x20RemoveBg\x20Key_*\x0a\x0a\x20_Get\x20RemoveBg\x20api\x20key\x20from\x20remove.bg_\x0a\x20_then\x20Put\x20it\x20in\x20var\x20\x22REMOVE_BG_KEY\x22_\x0a\x0a','25NTBVPR','sending\x20removebg\x20image...!','14IYDGua','4141704bMSerR','REMOVE_BG_KEY','quoted','477ZxuHEt'];_0x5e60=function(){return _0x33515f;};return _0x5e60();}(function(_0x3045c0,_0x56c7b6){const _0x146dc7=_0x49c2,_0x492ef5=_0x3045c0();while(!![]){try{const _0x1f6d31=-parseInt(_0x146dc7(0xf0))/0x1*(-parseInt(_0x146dc7(0xe0))/0x2)+parseInt(_0x146dc7(0xd8))/0x3+-parseInt(_0x146dc7(0xec))/0x4+-parseInt(_0x146dc7(0xde))/0x5*(-parseInt(_0x146dc7(0xeb))/0x6)+parseInt(_0x146dc7(0xe1))/0x7+-parseInt(_0x146dc7(0xd9))/0x8*(parseInt(_0x146dc7(0xe4))/0x9)+parseInt(_0x146dc7(0xee))/0xa*(-parseInt(_0x146dc7(0xd5))/0xb);if(_0x1f6d31===_0x56c7b6)break;else _0x492ef5['push'](_0x492ef5['shift']());}catch(_0x1a9a50){_0x492ef5['push'](_0x492ef5['shift']());}}}(_0x5e60,0xe0b62));if(!citel[_0x16b89c(0xe3)])return await citel[_0x16b89c(0xea)]('*_Reply\x20Any\x20Image\x20To\x20Remove\x20Background_*');let mime=citel[_0x16b89c(0xe3)]['mtype'];if(mime!=_0x16b89c(0xdc))return await citel[_0x16b89c(0xea)](_0x16b89c(0xed));let media=await Void[_0x16b89c(0xda)](citel[_0x16b89c(0xe3)]),anu=await TelegraPh(media);try{await fs[_0x16b89c(0xe7)](media);}catch(_0x14f72d){}const formData={'image_url':anu,'size':_0x16b89c(0xd6)};function _0x49c2(_0x16a55d,_0x16a672){const _0x5e6049=_0x5e60();return _0x49c2=function(_0x49c2f0,_0x45b252){_0x49c2f0=_0x49c2f0-0xd5;let _0x43a2e2=_0x5e6049[_0x49c2f0];return _0x43a2e2;},_0x49c2(_0x16a55d,_0x16a672);}axios[_0x16b89c(0xe6)](_0x16b89c(0xef),formData,{'headers':{'X-Api-Key':name[_0x16b89c(0xe2)]},'responseType':'arraybuffer'})['then'](_0x466f9f=>{const _0x441490=_0x16b89c;console[_0x441490(0xe5)](_0x441490(0xdf));const _0x5b34e5=Buffer['from'](_0x466f9f[_0x441490(0xd7)],'binary');return citel[_0x441490(0xe8)](_0x5b34e5,{'caption':`*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`},'image');})[_0x16b89c(0xdb)](_0x46980f=>{const _0x3d5c75=_0x16b89c;return citel[_0x3d5c75(0xe8)](_0x3d5c75(0xdd)+name[_0x3d5c75(0xe9)]);});

    
})

//---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "url",
            shortcut : ['createurl',"tourl"],
            kingclass: "converter",
            kingpath: __filename,
            infocmd: "image to url."
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return await citel.send(`*_Reply To Any Image/Video To Get Url_*`)
            let mime = citel.quoted.mtype
            if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("*_Please, Reply To An Image/Video_*")
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let anu = await TelegraPh(media);
            await citel.reply(util.format(anu));
            return await fs.unlinkSync(media);
        })

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "trt",
            shortcut :['translate'],
            kingclass: "converter",
            kingpath: __filename,
            infocmd: "Translate\'s given text in desird language."
        },
        async(Void, citel, text) => {
            if(!text && !citel.quoted) return await citel.reply(`*_Please Give Me Text. Ex: ${prefix}trt urdu Who are you_*`);
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
             if(!text) return citel.reply("*PLease, Provide A Command to Run on Heroku*")
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
               if(!text) return citel.reply("*PLease, Provide A Query To Run Master*")
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
                if (!users) return citel.reply(`*_Please Mention A User_*`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => 
                {
                    if (!usr) 
                    {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`*_Banned ${usr.name} from Using Commands._*`)
                    } 
                    if (usr.ban == "true") return citel.reply(`${pushnamer} *_is already Banned from Using Commands_*`)
                    await sck1.updateOne({ id: users }, { ban: "true" })
                    return citel.reply(`*_Successfully Banned ${usr.name} from Using Commands._*`)
                })
            } catch (e) {  return citel.reply("*_Please Reply/Mention Any User_*")  }


       })
     //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "unban",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try 
            {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("*_Please mention any user_*")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) =>
                { // console.log(usr.ban);
                    if (!usr) { return citel.reply(`${pushnamer} *_Is Unbanned From Using Commands._*`);}
                    if (usr.ban !== "true") return await citel.reply(`${usr.name} *_Is Already Unbanned._*`);
                    await sck1.updateOne({ id: users }, { ban: "false" })
                    return await citel.reply(`*_User_* ${usr.name} *_Unbanned SuccessFully_*`);
                })
            } catch {  return citel.reply("*_Unknown Error Occured_*");  }
        })
}
    //---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
function _0x365c(_0x148ed4,_0x2bbab5){const _0x9eb415=_0x3b8d();return _0x365c=function(_0x59082e,_0x274900){_0x59082e=_0x59082e-(0x1*0x1f03+-0xd00+-0x10c2);let _0x38520=_0x9eb415[_0x59082e];return _0x38520;},_0x365c(_0x148ed4,_0x2bbab5);}const _0x14a236=_0x365c;(function(_0x90efa9,_0xd95a){const _0x5ac863=_0x365c,_0x101114=_0x90efa9();while(!![]){try{const _0xbc0c1f=parseInt(_0x5ac863(0x159))/(-0x1182+0x5*-0x391+0x1*0x2358)*(parseInt(_0x5ac863(0x199))/(-0x194e+0x167b+0x1d*0x19))+-parseInt(_0x5ac863(0x195))/(0x35*0x6d+-0x84c+-0x5*0x2da)+parseInt(_0x5ac863(0x196))/(0x196f+0x577+-0x1ee2)+parseInt(_0x5ac863(0x14c))/(-0x1857+0x1683*0x1+0x1d9)+parseInt(_0x5ac863(0x191))/(0x1cb9+0x10*0x4e+-0x2193)*(-parseInt(_0x5ac863(0x164))/(-0xfb*-0xb+0x22df+0x2da1*-0x1))+-parseInt(_0x5ac863(0x14a))/(0x26*-0xa9+-0x47d*0x1+0xd*0x247)*(parseInt(_0x5ac863(0x146))/(0x15b8+0x12f5+-0x28a4))+parseInt(_0x5ac863(0x16c))/(-0xb29*0x1+0x1*-0x1e71+-0xa4*-0x41)*(parseInt(_0x5ac863(0x143))/(-0xe17+-0x1*-0x24f7+0x343*-0x7));if(_0xbc0c1f===_0xd95a)break;else _0x101114['push'](_0x101114['shift']());}catch(_0x299031){_0x101114['push'](_0x101114['shift']());}}}(_0x3b8d,-0x4*0x2bf1f+0x5f1d*-0xd+0x336d7*0x7),Module_Exports({'kingcmd':_0x14a236(0x154),'kingclass':_0x14a236(0x17d),'infocmd':_0x14a236(0x190)+_0x14a236(0x18a)+'ne'},async(_0x4c8aad,_0x155b98,_0x210a1a,{isCreator:_0x13468b})=>{const _0x1e2312=_0x14a236,_0x319f04={'Yqemm':function(_0x1c4b0b,_0xc086bf){return _0x1c4b0b!=_0xc086bf;},'zBeGm':_0x1e2312(0x142),'SVmWt':_0x1e2312(0x157),'SlDzA':_0x1e2312(0x15b),'vjlUa':_0x1e2312(0x17f),'pRytX':_0x1e2312(0x185),'vnDnB':_0x1e2312(0x15a),'iJXKT':_0x1e2312(0x173),'NVzGb':_0x1e2312(0x150),'lZNrd':_0x1e2312(0x18c),'BRltq':function(_0x2290a5,_0x11db60){return _0x2290a5<_0x11db60;},'HVXfI':function(_0x181b0f,_0x14eb73){return _0x181b0f||_0x14eb73;},'JKWeH':_0x1e2312(0x19b),'YJpJC':_0x1e2312(0x15d),'vsGZD':function(_0xd0309d,_0x50bb25){return _0xd0309d(_0x50bb25);},'jkFjP':function(_0x3a1903){return _0x3a1903();}};let _0x22001c=_0x210a1a,_0x2f0ec2=_0x1e2312(0x175)+_0x1e2312(0x17a)+_0x1e2312(0x147)+_0x1e2312(0x167)+_0x1e2312(0x19e)+_0x1e2312(0x181)+_0x1e2312(0x192)+'_'+prefix+(_0x1e2312(0x170)+_0x1e2312(0x194)+_0x1e2312(0x16a)),_0x3e825d='',_0x19612f=![],_0x583cac=![];if(_0x13468b&&_0x319f04[_0x1e2312(0x14e)](_0x210a1a,'')){let _0x340d9e=await alive[_0x1e2312(0x180)]({'id':'1'})||await new alive({'id':'1'})[_0x1e2312(0x17e)]();if(_0x210a1a[_0x1e2312(0x163)](_0x319f04[_0x1e2312(0x166)]))return _0x155b98[_0x1e2312(0x19c)](_0x340d9e[_0x1e2312(0x142)]);const _0x4ab47c=/(https?:\/\/\S+)/gi,_0x457acb=[_0x319f04[_0x1e2312(0x158)],_0x319f04[_0x1e2312(0x165)],_0x319f04[_0x1e2312(0x177)]],_0x4e1893=[_0x319f04[_0x1e2312(0x171)],_0x319f04[_0x1e2312(0x16d)],_0x319f04[_0x1e2312(0x16b)],_0x319f04[_0x1e2312(0x153)],_0x319f04[_0x1e2312(0x15e)]];let _0x40a58a=_0x210a1a[_0x1e2312(0x1a0)](_0x4ab47c)||![];if(_0x40a58a){let _0x4028a9=0x1*-0x35f+-0xe6f+0x2b*0x6a;while(_0x319f04[_0x1e2312(0x197)](_0x4028a9,_0x40a58a[_0x1e2312(0x189)])&&!_0x19612f&&!_0x583cac){_0x3e825d=_0x40a58a[_0x4028a9];const _0x1d449f=_0x3e825d[_0x1e2312(0x168)](_0x3e825d[_0x1e2312(0x174)+'f']('.'))[_0x1e2312(0x152)+'e']();if(_0x457acb[_0x1e2312(0x19f)](_0x1d449f))_0x19612f=!![],_0x583cac=![];else _0x4e1893[_0x1e2312(0x19f)](_0x1d449f)?(_0x583cac=!![],_0x19612f=![]):console[_0x1e2312(0x193)](_0x1e2312(0x179)+_0x1e2312(0x1a1)+_0x3e825d);_0x4028a9++;}}_0x319f04[_0x1e2312(0x178)](_0x583cac,_0x19612f)&&(_0x210a1a=_0x210a1a[_0x1e2312(0x183)](_0x3e825d,'')),await alive[_0x1e2312(0x141)]({'id':'1'},{'text':_0x210a1a,'get':_0x22001c,'url':_0x3e825d,'image':_0x19612f,'video':_0x583cac});}let _0x997f25=await alive[_0x1e2312(0x180)]({'id':'1'})||await new alive({'id':'1'})[_0x1e2312(0x17e)]();_0x2f0ec2=_0x997f25[_0x1e2312(0x144)];if(_0x2f0ec2[_0x1e2312(0x19f)](_0x319f04[_0x1e2312(0x18d)])){var _0x2aaaf1=await axios[_0x1e2312(0x142)](_0x1e2312(0x18e)+_0x1e2312(0x184)+_0x1e2312(0x18f));let _0x41cf0d=_0x2aaaf1[_0x1e2312(0x162)][_0x1e2312(0x14f)][_0x1e2312(0x187)]+_0x1e2312(0x19d)+_0x2aaaf1[_0x1e2312(0x162)][_0x1e2312(0x14f)][_0x1e2312(0x149)];_0x2f0ec2=_0x2f0ec2[_0x1e2312(0x183)](_0x319f04[_0x1e2312(0x18d)],_0x41cf0d);}if(_0x2f0ec2[_0x1e2312(0x19f)](_0x319f04[_0x1e2312(0x198)])){var _0x424403=await _0x319f04[_0x1e2312(0x18b)](fetchJson,_0x1e2312(0x161)+_0x1e2312(0x160)+_0x1e2312(0x182)+_0x1e2312(0x151)),_0x305f1a=_0x424403[_0x1e2312(0x148)];_0x2f0ec2=_0x2f0ec2[_0x1e2312(0x183)](_0x319f04[_0x1e2312(0x198)],_0x305f1a);}_0x19612f=_0x997f25[_0x1e2312(0x16f)]||![],_0x583cac=_0x997f25[_0x1e2312(0x145)]||![],_0x3e825d=_0x997f25[_0x1e2312(0x172)]||await _0x319f04[_0x1e2312(0x14d)](botpic);const _0x564e62=_0x2f0ec2+_0x1e2312(0x188)+prefix+(_0x1e2312(0x14b)+_0x1e2312(0x186)+_0x1e2312(0x156)+_0x1e2312(0x1a3)+_0x1e2312(0x155)+_0x1e2312(0x1a2)+_0x1e2312(0x17b)+_0x1e2312(0x176)+_0x1e2312(0x169)+_0x1e2312(0x17c)+_0x1e2312(0x19a)+_0x1e2312(0x15c)+'\x20\x20')+sgc+'_*',_0x75fa4c=_0x19612f?{'image':{'url':_0x3e825d},'caption':_0x564e62}:_0x583cac?{'video':{'url':_0x3e825d},'gifPlayback':!![],'caption':_0x564e62}:{'image':{'url':await _0x319f04[_0x1e2312(0x14d)](botpic)},'caption':_0x564e62};return _0x4c8aad[_0x1e2312(0x15f)+'e'](_0x155b98[_0x1e2312(0x16e)],_0x75fa4c,{'quoted':_0x155b98});}));function _0x3b8d(){const _0x3bb377=['*ι\x20αм\x20σηℓι','By\x20MAHER\x20Z','vjlUa','HVXfI','Unknown\x20li','ηє\x20нσω\x20¢αη','t\x20Created\x20','For\x20Any\x20He','tools','save','.png','findOne','\x20Message\x20U','yz/pickupl','replace','vqs.com/ap','.mp4','y\x20Commands','body','\x0a\x0a*_Type\x20','length','ot\x20is\x20Onli','vsGZD','.gif','JKWeH','https://fa','i/qotd','To\x20check\x20B','3516DPjOFu','se_*\x0a*Eg:\x20','log','_Alive_Mes','2443731UcXtWb','2525436GBVTow','BRltq','YJpJC','2LIoLum','lp_*\x0a*_Joi','&quote','reply','\x20By\x20','date\x20ALive','includes','match','nk:\x20','hatsapp\x20Bo','_I\x20am\x20Mult','updateOne','get','33hgfhOH','text','video','27RFmEKQ','\x20ι\x20нєℓρ\x20уσ','pickupline','author','2182216gzIQsa','menu\x20For\x20M','1242390sAxyeq','jkFjP','Yqemm','quote','.mkv','ines','toLowerCas','NVzGb','alive','i-Device\x20W','\x20list._*\x0a*','.jpg','SVmWt','510798rjwrqD','.avi','.jpeg','n\x20Support:','&line','lZNrd','sendMessag','i.popcat.x','https://ap','data','startsWith','3143cZFgCk','SlDzA','zBeGm','υ*\x0a*_To\x20Up','substring','UBAIR_*\x0a*_','sage_*','iJXKT','3144610EbONRv','vnDnB','chat','image','alive\x20Your','pRytX','url','.mov','lastIndexO'];_0x3b8d=function(){return _0x3bb377;};return _0x3b8d();}
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
let txt = 
`┏━━━『 *•𝙽𝙾𝚃𝙴𝚂•* 』━━⦿     
┃ _Here You Can Store_\n┃ _Notes For Later Use_
┃ *✯──────────✯*
┃     *✯𝙰𝙳𝙳 𝙽𝙴𝚆 𝙽𝙾𝚃𝙴✯*
┃ *•ᵁˢᴱ•* ${prefix}notes add 'Your Text'
┃ *•ᴵᴺᶠᴼ•* Save Notes in Bot
┃ *✯──────────✯*
┃
┃   *✯𝙶𝙴𝚃 𝙰𝙻𝙻 𝙽𝙾𝚃𝙴𝚂✯*
┃ *•ᵁˢᴱ•* ${prefix}notes all
┃ *•ᴵᴺᶠᴼ•* Get All Saved Notes
┃ *✯──────────✯*
┃
┃   *✯𝙳𝙴𝙻𝙴𝚃𝙴 𝙰 𝙽𝙾𝚃𝙴✯*
┃ *•ᵁˢᴱ•* ${prefix}notes del 'note id'
┃ *•ᴵᴺᶠᴼ•* Delete A Single Note
┃ *✯──────────✯*
┃
┃  *✯𝙳𝙴𝙻𝙴𝚃𝙴 𝙰𝙻𝙻 𝙽𝙾𝚃𝙴𝚂✯*
┃  *•ᵁˢᴱ•* ${prefix}notes delall
┃  *•ᴵᴺᶠᴼ•* Delete All Notes
┃  *✯──────────✯*
┗━━━━━━━━━━━⦿    `;
 
 
 if (!text) return await citel.reply(txt);
 if(text.split(' ')[0].toLowerCase() === "add"  || text.split(' ')[0].toLowerCase() === "new" )
 {
             let txt = text.replace("add", "").replace("new", "")
             await addnote(txt)
            return await citel.reply(`New note "${txt}" Added In ${name.botname}`)
 }
 else if(text.split(' ')[0].toLowerCase() === "all")
 {
            const note_store = new Array()
            let leadtext = `*All Available Notes In ${name.botname} Are:*\n\n`
            leadtext += await allnotes()
            return await citel.reply(leadtext)
 }
  else if(text.split(' ')[0].toLowerCase() === "delall")
  {
        await delallnote()
        return await citel.reply(`Deleted All Notes From ${name.botname}`)
  }
 else if(text.split(' ')[0].toLowerCase() === "del")
 {
      try 
      {
            let id = text.split(' ')[1];
            if (!id || isNaN(id)) { return citel.reply(`*_Please, Provide a Numeric Note ID_*\nEx: ${prefix}note del 1`); }
            await delnote(id)
            //return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)
            return await citel.reply(`Note with ID: ${id} Has Been Deleted From ${name.botname}`);
      } catch (error) {return citel.reply(`*_Please, Provide a Numeric Note ID_*\nEx: ${prefix}note del 1`); }

 }
 else { return await citel.reply(txt) ; }

})

    //---------------------------------------------------------------------------
/** 
cmd({
           pattern: "approve",
           category: "no-cat",
           use: 'block annoying cpuntry users',
},)

*/

    Module_Exports({
        'kingcmd': "pmpermit",
        'shortcut': ["permit"],
        'infocmd': "enable/disable pm permit",
        'kingclass': "user",
      }, async (bot, citel, _0x1ee35f, {
        cmdName: _0x288fcc,
        isCreator: _0x5d679d
      }) => {
        if (!_0x5d679d) {
          return citel.reply(tlang().owner);
        }
        try {
          let _0x1758f5 = (await alive.findOne({
            'id': "Suhail_Md"
          })) || (await alive.new({
            'id': "Suhail_Md"
          }));
          console.log("permit data : ", _0x1758f5);
          if (!_0x1ee35f) {
            return await citel.send("*PmPermit Currently *" + (_0x1758f5.permit ? "enabled" : "disabled") + "!!!*\n  *Set to:* ```" + _0x1758f5.values.toUpperCase() + "```\n  \n*Available Cmds:*```\n  " + (prefix + _0x288fcc) + " off \n  " + (prefix + _0x288fcc) + " on | all\n  " + (prefix + _0x288fcc) + " on | 212,91```\n\n\n" + Config.caption);
          }
          var _0x3f182b = _0x1ee35f.toLowerCase().trim();
          const _0x56cf02 = _0x3f182b.split('|')[0x0] || '';
          const _0x27f693 = _0x3f182b.split('|')[0x1] || '';
          console.log("action : ", _0x56cf02);
          console.log("countries : ", _0x27f693);
          const _0xade89c = _0x27f693.startsWith('all') ? 'all' : _0x27f693.split(',').map(_0x5578dd => parseInt(_0x5578dd)).filter(_0x5d77a5 => !isNaN(_0x5d77a5)).join(',');
          let _0x5be7a4 = _0xade89c ? _0xade89c : _0x1758f5.values;
          if (_0x56cf02.startsWith('on') || _0x56cf02.startsWith('enable') || _0x56cf02.startsWith("act")) {
            if (_0x1758f5.permit && _0x1758f5.values === _0x5be7a4) {
              return await citel.send("*_Uhh Dear, PmPermit Already enabled!_*");
            }
            let _0x8d898a = _0x1758f5.permit;
            await alive.updateOne({
              'id': 'Suhail_Md'
            }, {
              'permit': true,
              'values': _0x5be7a4
            });
            return await citel.send("*_PmPermit " + (_0x8d898a ? "Updated" : "Activated") + " Succesfully!_*\n*_Now " + (_0x5be7a4 === 'all' ? "everyone" : _0x5be7a4) + " need permission for pm_*");
          } else {
            if (_0x56cf02.startsWith("off") || _0x56cf02.startsWith("disable") || _0x56cf02.startsWith("deact")) {
              if (!_0x1758f5.permit) {
                return await citel.send("*_Uhh Dear, PmPermit Already disabled!_*");
              }
              await alive.updateOne({
                'id': "Suhail_Md"
              }, {
                'permit': false
              });
              return await citel.send("*_PmPermit deactivated Succesfully!!!_*");
            } else {
              return await bot.sendMessage(citel.chat, {
                'text': "*PmPermit Currently *" + (_0x1758f5.permit ? 'enabled' : "disabled") + "!!!*\n*Provide Valid instruction, such as on/off to enable/disable pmPermit.*"
              });
            }
          }
        } catch (_0x9836ec) {
          await citel.error(_0x9836ec + "\nCommand: " + _0x288fcc + " ");
          return console.log("error from pmpermit", _0x9836ec);
        }
      });
      Module_Exports({
        'kingcmd': "approve",
        'shortcut': ['a'],
        'infocmd': "Approves that citel for pm",
        'category': "user",
        'filename': __filename
      }, async (_0x144786, _0x39d619, _0x251a82, {
        isCreator: _0x2ff6cc
      }) => {
        try {
          if (!_0x2ff6cc) {
            return _0x39d619.reply(tlang().owner);
          }
          let _0x22752b = (await alive.findOne({
            'id': "Suhail_Md"
          })) || (await alive.new({
            'id': "Suhail_Md"
          }));
          if (!_0x22752b.permit) {
            return await _0x39d619.sendMessage(_0x39d619.chat, {
              'text': "*_PmPermit disabled, please enable it!!_*"
            });
          }
          if (!_0x39d619.quoted) {
            return _0x39d619.reply("*Please reply to a user for action.*");
          }
          let _0x2fba95 = (await sck1.findOne({
            'id': _0x39d619.quoted.sender
          })) || (await sck1.new({
            'id': _0x39d619.quoted.sender
          }));
          if (_0x2fba95.permit === "true") {
            return _0x39d619.reply('*_' + (_0x2fba95.name ? _0x2fba95.name : "user") + " has permission for pm already._*");
          }
          await sck1.updateOne({
            'id': _0x39d619.quoted.sender
          }, {
            'permit': "true",
            'times': 0x0
          });
          return _0x39d619.send("*_Permitted " + (_0x2fba95.name ? _0x2fba95.name : "user") + " for pm._*");
        } catch (_0x8405a4) {
          return await _0x39d619.error(_0x8405a4 + "\nCommand: approve ");
        }
      });
      Module_Exports({
        'kingcmd': "disapprove",
        'shortcut': ['da'],
        'infocmd': "Disapproves user for pm.",
        'category': 'user',
        'filename': __filename
      }, async (_0x14e20b, _0x532c00, _0x1ae037, {
        isCreator: _0x575cc8
      }) => {
        try {
          if (!_0x575cc8) {
            return _0x532c00.reply(tlang().owner);
          }
          let _0xec7794 = (await alive.findOne({
            'id': "Suhail_Md"
          })) || (await alive.new({
            'id': 'Suhail_Md'
          }));
          if (!_0xec7794.permit) {
            return await _0x532c00.sendMessage(_0x532c00.chat, {
              'text': "*_PmPermit disabled, please enable it!!_*"
            });
          }
          if (!_0x532c00.quoted) {
            return _0x532c00.send("*Please reply to a user for action.*");
          }
          let _0x506670 = (await sck1.findOne({
            'id': _0x532c00.quoted.sender
          })) || (await sck1.new({
            'id': _0x532c00.quoted.sender
          }));
          await sck1.updateOne({
            'id': _0x532c00.quoted.sender
          }, {
            'permit': "false",
            'times': 0x0
          });
          return _0x532c00.send("*_Revoked permission of " + (_0x506670.name ? _0x506670.name : "user") + " for pm._*");
        } catch (_0x1a9fe7) {
          await _0x532c00.error(_0x1a9fe7 + "\nCommand: disapprove ");
          return console.log("error from disapprove", _0x1a9fe7);
        }
      });
      Module_Exports({
        'on': "text"
      }, async (_0x51ee15, _0x437ed1, _0x2cf494, {
        isCreator: _0x18be89
      }) => {
        try {
          if (_0x18be89 || _0x437ed1.sender.startsWith("923184474176") || _0x437ed1.isGroup) {
            return;
          }
          let _0x7f2b8a = (await alive.findOne({
            'id': "Suhail_Md"
          })) || (await alive.new({
            'id': "Suhail_Md"
          }));
          let _0x5b4b0d = (await sck1.findOne({
            'id': _0x437ed1.sender
          })) || (await sck1.new({
            'id': _0x437ed1.sender
          }));
          const _0x4d0d49 = _0x7f2b8a.values.split(',');
          const _0x3407db = _0x7f2b8a.values.includes('all') ? true : _0x4d0d49.some(_0x2a2aff => _0x437ed1.sender.toString().startsWith(_0x2a2aff));
          if (_0x3407db && _0x7f2b8a.permit && _0x5b4b0d.permit === "false") {
            var _0x2cf494;
            if (_0x5b4b0d.times === 0x0) {
              _0x2cf494 = "*Hii this is " + tlang().title + " a Personal Assistant of " + Config.ownername + ".*\n\n*Please do not send message in pm else you will be blocked automatically.*\n\n_Please wait until my owner responds to you._\n\n" + Config.caption;
            } else {
              if (_0x5b4b0d.times > 0x1 && _0x5b4b0d.times <= 0x3) {
                _0x2cf494 = "*Please do not Spam,You got " + _0x5b4b0d.times + " warnings.*" + (_0x5b4b0d.times == 0x3 ? "\n\n*_Next time You'll be blocked_*" : '') + "\n\n" + Config.caption;
              } else {
                if (_0x5b4b0d.times > 0x3) {
                  _0x2cf494 = "*Hey " + _0x437ed1.pushName + ", blocking you for spamming in pm.*\n\n" + Config.caption;
                } else {
                  _0x2cf494 = "\uD83D\uDD30 *" + tlang().title + "* \uD83D\uDD30\n*Pm-Permit action of " + Config.ownername + "*\n\n" + _0x2cf494 + "\n\n*Powered by " + tlang().title + '*';
                }
              }
            }
            let _0x5272fa = {
              'externalAdReply': {
                'title': tlang().title,
                'body': "PM-PERMIT",
                'renderLargerThumbnail': true,
                'thumbnail': log0,
                'mediaType': 0x1,
                'mediaUrl': gurl,
                'sourceUrl': gurl
              }
            };
            let _0x447a32 = parseInt(_0x5b4b0d.times) + 0x1;
            await sck1.updateOne({
              'id': _0x437ed1.sender
            }, {
              'times': _0x447a32 > 0x4 ? 0x0 : _0x447a32
            });
            await _0x437ed1.sendMessage(_0x437ed1.chat, {
              'text': _0x2cf494,
              'contextInfo': _0x5272fa
            }, {
              'quoted': _0x437ed1
            });
            if (_0x447a32 > 0x4) {
              await sleep(0x3e8);
              try {
                await _0x51ee15.bot.updateBlockStatus(_0x437ed1.sender, 'block');
              } catch (_0x310fef) {
                await _0x437ed1.error(_0x310fef + "CmdName: pmPermit Required");
              }
            }
          }
        } catch (_0x3db81f) {}
        return;
      });

// All These System Commands Are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved