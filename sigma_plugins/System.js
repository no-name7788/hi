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
const _0x2b7f52=_0x4190;function _0x4190(_0x531497,_0x164846){const _0x23a516=_0x5908();return _0x4190=function(_0x4c289a,_0x1c76b7){_0x4c289a=_0x4c289a-(-0x862*-0x2+0x5e9+-0xb0b*0x2);let _0x21c8d4=_0x23a516[_0x4c289a];return _0x21c8d4;},_0x4190(_0x531497,_0x164846);}(function(_0x56ea58,_0x108e3f){const _0x16522e=_0x4190,_0x22f670=_0x56ea58();while(!![]){try{const _0xdab3cf=-parseInt(_0x16522e(0xdf))/(0xb1*-0x13+-0xe70+-0xa*-0x2c2)*(-parseInt(_0x16522e(0xe6))/(0x1*0x1312+-0x1777*0x1+0x467))+-parseInt(_0x16522e(0xb5))/(-0x230b*-0x1+0xa6a*0x3+-0x1*0x4246)+-parseInt(_0x16522e(0xd6))/(-0x1486+0x815*0x1+-0xc75*-0x1)*(-parseInt(_0x16522e(0xb1))/(0xb99+-0xe9*0x8+-0x44c))+-parseInt(_0x16522e(0xc3))/(0x2*0x7a9+0xce7+-0x1c33)*(parseInt(_0x16522e(0xc7))/(-0x1*0x224+-0x1e54+0x207f))+parseInt(_0x16522e(0xe1))/(-0x94b*-0x4+-0x6*-0x526+-0x1102*0x4)*(-parseInt(_0x16522e(0xbb))/(0x1e5*-0xa+-0x95c+0x1c57))+parseInt(_0x16522e(0xf6))/(-0x174*-0x10+-0xd*0x221+0x477)+parseInt(_0x16522e(0xc2))/(-0x7b1*-0x2+-0x3cc+-0xb8b)*(-parseInt(_0x16522e(0xd1))/(-0x9*0x3b1+0x22b9+-0x174));if(_0xdab3cf===_0x108e3f)break;else _0x22f670['push'](_0x22f670['shift']());}catch(_0x11df9c){_0x22f670['push'](_0x22f670['shift']());}}}(_0x5908,-0x3a7c5+0x66a8f+0x5*0x15255),Module_Exports({'kingcmd':_0x2b7f52(0xae),'kingclass':_0x2b7f52(0xc4),'kingpath':__filename,'infocmd':_0x2b7f52(0xf7)+_0x2b7f52(0xdc)+'ne'},async(_0x3eb846,_0x237d03,_0x508b82,{isCreator:_0x44215d})=>{const _0x223b05=_0x2b7f52,_0x22fe5b={'tZnvR':function(_0x4cad5a,_0x3cb9a8){return _0x4cad5a!=_0x3cb9a8;},'snysW':_0x223b05(0xde),'jtWii':_0x223b05(0xbf),'sCPkj':_0x223b05(0xa8),'mZUNg':_0x223b05(0xcc),'ISsyA':_0x223b05(0x97),'WsEXh':_0x223b05(0xa4),'dXcDD':_0x223b05(0xf0),'lmlUD':_0x223b05(0xaf),'TTtDy':_0x223b05(0xea),'IEtqc':function(_0x5da37d,_0x36eaac){return _0x5da37d<_0x36eaac;},'NQAFP':function(_0xd0bfea,_0x391e1d){return _0xd0bfea||_0x391e1d;},'NWKVE':_0x223b05(0xb0),'XyFXo':_0x223b05(0xec),'SoxCG':function(_0x40c85c,_0x43f15c){return _0x40c85c(_0x43f15c);},'MrMFA':function(_0x2fce91){return _0x2fce91();},'eoPfL':function(_0x42f094){return _0x42f094();}};let _0xc0046e=_0x508b82,_0xdb95c4=_0x223b05(0xc1)+_0x223b05(0xe2)+_0x223b05(0xeb)+_0x223b05(0xca)+_0x223b05(0xf1)+_0x223b05(0xd8)+_0x223b05(0xe7)+'_'+prefix+(_0x223b05(0xb4)+_0x223b05(0x98)+_0x223b05(0xc9)),_0x2d1b66='',_0x53c39f=![],_0x245508=![];if(_0x44215d&&_0x22fe5b[_0x223b05(0xbc)](_0x508b82,'')){let _0xfeb57b=await alive[_0x223b05(0xf4)]({'id':'1'})||await new alive({'id':'1'})[_0x223b05(0x9e)]();if(_0x508b82[_0x223b05(0xcf)](_0x22fe5b[_0x223b05(0xd3)]))return _0x237d03[_0x223b05(0xa6)](_0xfeb57b[_0x223b05(0xde)]);const _0xaf1870=/(https?:\/\/\S+)/gi,_0x35dcfc=[_0x22fe5b[_0x223b05(0xee)],_0x22fe5b[_0x223b05(0xf5)],_0x22fe5b[_0x223b05(0xa9)]],_0x2f1000=[_0x22fe5b[_0x223b05(0xc5)],_0x22fe5b[_0x223b05(0xb6)],_0x22fe5b[_0x223b05(0xe5)],_0x22fe5b[_0x223b05(0xa3)],_0x22fe5b[_0x223b05(0x99)]];let _0x237f4e=_0x508b82[_0x223b05(0xf9)](_0xaf1870)||![];if(_0x237f4e){let _0x500d53=0x135*-0x17+-0x1*-0x10f3+-0x1*-0xad0;while(_0x22fe5b[_0x223b05(0xaa)](_0x500d53,_0x237f4e[_0x223b05(0xb8)])&&!_0x53c39f&&!_0x245508){_0x2d1b66=_0x237f4e[_0x500d53];const _0x11232c=_0x2d1b66[_0x223b05(0xef)](_0x2d1b66[_0x223b05(0xd9)+'f']('.'))[_0x223b05(0xd2)+'e']();if(_0x35dcfc[_0x223b05(0xd4)](_0x11232c))_0x53c39f=!![],_0x245508=![];else _0x2f1000[_0x223b05(0xd4)](_0x11232c)?(_0x245508=!![],_0x53c39f=![]):console[_0x223b05(0xd0)](_0x223b05(0x9c)+_0x223b05(0xc8)+_0x2d1b66);_0x500d53++;}}_0x22fe5b[_0x223b05(0xa5)](_0x245508,_0x53c39f)&&(_0x508b82=_0x508b82[_0x223b05(0xdd)](_0x2d1b66,'')),await alive[_0x223b05(0xb9)]({'id':'1'},{'text':_0x508b82,'get':_0xc0046e,'url':_0x2d1b66,'image':_0x53c39f,'video':_0x245508});}let _0x530b14=await alive[_0x223b05(0xf4)]({'id':'1'})||await new alive({'id':'1'})[_0x223b05(0x9e)]();_0xdb95c4=_0x530b14[_0x223b05(0xcd)];if(_0xdb95c4[_0x223b05(0xd4)](_0x22fe5b[_0x223b05(0xd5)])){var _0xdbc395=await axios[_0x223b05(0xde)](_0x223b05(0xe9)+_0x223b05(0xa7)+_0x223b05(0xbd));let _0x4a16a2=_0xdbc395[_0x223b05(0xda)][_0x223b05(0xbe)][_0x223b05(0xc6)]+_0x223b05(0xce)+_0xdbc395[_0x223b05(0xda)][_0x223b05(0xbe)][_0x223b05(0xd7)];_0xdb95c4=_0xdb95c4[_0x223b05(0xdd)](_0x22fe5b[_0x223b05(0xd5)],_0x4a16a2);}if(_0xdb95c4[_0x223b05(0xd4)](_0x22fe5b[_0x223b05(0xe4)])){var _0xbfdb50=await _0x22fe5b[_0x223b05(0xe8)](fetchJson,_0x223b05(0xf2)+_0x223b05(0x9a)+_0x223b05(0xed)+_0x223b05(0xa2)),_0x470e78=_0xbfdb50[_0x223b05(0xad)];_0xdb95c4=_0xdb95c4[_0x223b05(0xdd)](_0x22fe5b[_0x223b05(0xe4)],_0x470e78);}_0x53c39f=_0x530b14[_0x223b05(0xf3)]||![],_0x245508=_0x530b14[_0x223b05(0xf8)]||![],_0x2d1b66=_0x530b14[_0x223b05(0x9f)]||await _0x22fe5b[_0x223b05(0xac)](botpic);const _0x1703fe=_0xdb95c4+_0x223b05(0xc0)+prefix+(_0x223b05(0x9b)+_0x223b05(0xb3)+_0x223b05(0xe0)+_0x223b05(0xb2)+_0x223b05(0xab)+_0x223b05(0xfb)+_0x223b05(0xe3)+_0x223b05(0x9d)+_0x223b05(0xfa)+_0x223b05(0xa0)+_0x223b05(0xb7)+_0x223b05(0xa1)+'\x20\x20')+sgc+'_*',_0x2406d2=_0x53c39f?{'image':{'url':_0x2d1b66},'caption':_0x1703fe}:_0x245508?{'video':{'url':_0x2d1b66},'gifPlayback':!![],'caption':_0x1703fe}:{'image':{'url':await _0x22fe5b[_0x223b05(0xdb)](botpic)},'caption':_0x1703fe};return _0x3eb846[_0x223b05(0xba)+'e'](_0x237d03[_0x223b05(0xcb)],_0x2406d2,{'quoted':_0x237d03});}));function _0x5908(){const _0x3a91eb=['get','254071DfTzTA','\x20list._*\x0a*','200RXGFWZ','ηє\x20нσω\x20¢αη','t\x20Created\x20','XyFXo','dXcDD','4NMIUza','se_*\x0a*Eg:\x20','SoxCG','https://fa','.gif','\x20ι\x20нєℓρ\x20уσ','&line','yz/pickupl','jtWii','substring','.mov','date\x20ALive','https://ap','image','findOne','sCPkj','11113540djMRgl','To\x20check\x20B','video','match','UBAIR_*\x0a*_','hatsapp\x20Bo','.mp4','_Alive_Mes','TTtDy','i.popcat.x','menu\x20For\x20M','Unknown\x20li','By\x20MAHER\x20Z','save','url','For\x20Any\x20He','n\x20Support:','ines','lmlUD','.avi','NQAFP','reply','vqs.com/ap','.jpeg','mZUNg','IEtqc','i-Device\x20W','MrMFA','pickupline','alive','.mkv','&quote','25UQogKa','_I\x20am\x20Mult','y\x20Commands','alive\x20Your','335835UfnDSi','WsEXh','lp_*\x0a*_Joi','length','updateOne','sendMessag','29331SdnYEs','tZnvR','i/qotd','quote','.jpg','\x0a\x0a*_Type\x20','*ι\x20αм\x20σηℓι','5170759BTpqXA','6HfhTNd','tools','ISsyA','body','85575eiWYFa','nk:\x20','sage_*','υ*\x0a*_To\x20Up','chat','.png','text','\x20By\x20','startsWith','log','24ANmjsO','toLowerCas','snysW','includes','NWKVE','112232IScabO','author','\x20Message\x20U','lastIndexO','data','eoPfL','ot\x20is\x20Onli','replace'];_0x5908=function(){return _0x3a91eb;};return _0x5908();}

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


// All These System Commands Are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved