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

const { tlang,Module_Exports,prefix,fetchJson,name } = require('../lib')
const fs = require('fs')
const { exec } = require('child_process')
const ffmpeg = require("fluent-ffmpeg")
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "bass",
        infocmd: "adds bass in given sound",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "blown",
        infocmd: "adds blown in given audio",
        kingclass: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af acrusher=.1:1:64:0:log";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "deep",
        infocmd: "adds deep effect in given audio",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af atempo=4/4,asetrate=44500*2/3";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fast",
        infocmd: "Adds fast(equilizer) in quoted audio.",
        kingclass: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "reverse",
        infocmd: "Adds reverse(equilizer) in quoted audio.",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(bot, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter_complex "areverse"';
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await bot.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.send(err);
                let buff = fs.readFileSync(ran);
                bot.sendMessage( citel.chat, {  audio: buff, mimetype: "audio/mpeg",}, { quoted: citel, });
                fs.unlinkSync(ran);
            });
        } else  citel.send(`Reply to the audio you want to change with.*`);
    }
)
    //-------------------------------Stleath--------------------------------------------
const _0x5bebab=_0x3044;(function(_0x3f3264,_0xc7b01a){const _0x2c4f04=_0x3044,_0xa8be7e=_0x3f3264();while(!![]){try{const _0x22ca91=-parseInt(_0x2c4f04(0x181))/(-0x1273+-0x23*0x61+-0x17*-0x161)+-parseInt(_0x2c4f04(0x1e9))/(0x25*-0x94+-0x2335+-0x151*-0x2b)*(parseInt(_0x2c4f04(0x1f6))/(-0xdbf+-0x1051+0x1e13))+parseInt(_0x2c4f04(0x1df))/(-0xd45*-0x1+0x93*-0x25+0x1*0x7fe)+-parseInt(_0x2c4f04(0x1c2))/(0x1*0x1705+-0x1f5*-0xa+0x1549*-0x2)*(parseInt(_0x2c4f04(0x206))/(0x2710+-0x494*0x8+-0x67*0x6))+-parseInt(_0x2c4f04(0x165))/(0x1cff+-0x7f9+0xd7*-0x19)+-parseInt(_0x2c4f04(0x16b))/(-0x2324+-0x41e+0x274a)*(parseInt(_0x2c4f04(0x190))/(-0xb3*0x15+0x2127+-0x126f))+-parseInt(_0x2c4f04(0x170))/(0x2*0x3ca+-0x694+-0xf6)*(-parseInt(_0x2c4f04(0x1a2))/(0x512*0x2+-0xd36+0x31d));if(_0x22ca91===_0xc7b01a)break;else _0xa8be7e['push'](_0xa8be7e['shift']());}catch(_0x4d7c7a){_0xa8be7e['push'](_0xa8be7e['shift']());}}}(_0x311a,-0x333*0x1f+0x91c*0x2+0x2d597));let afkData={};try{afkData=JSON[_0x5bebab(0x1b1)](fs[_0x5bebab(0x1f8)+'nc'](_0x5bebab(0x1eb)+_0x5bebab(0x1bc)+_0x5bebab(0x1b3),_0x5bebab(0x1c0)));}catch(_0x1f54eb){_0x1f54eb[_0x5bebab(0x16a)]===_0x5bebab(0x179)?(fs[_0x5bebab(0x1ac)+_0x5bebab(0x196)](_0x5bebab(0x1eb)+_0x5bebab(0x1bc)+_0x5bebab(0x1b3),JSON[_0x5bebab(0x1e8)]({'isAfk':![],'reason':![],'lastseen':0x0})),console[_0x5bebab(0x1f1)](_0x5bebab(0x1dd)+_0x5bebab(0x1b2)+_0x5bebab(0x1c7)+_0x5bebab(0x1c1)+_0x5bebab(0x1e1)+_0x5bebab(0x1cb)+_0x5bebab(0x17f)+_0x5bebab(0x1e2)+_0x5bebab(0x1ed))):console[_0x5bebab(0x1f1)](_0x5bebab(0x191)+_0x5bebab(0x18c)+_0x5bebab(0x1ba)+_0x5bebab(0x204)+_0x5bebab(0x1d3),_0x1f54eb);}function _0x311a(){const _0x423ce7=['pnmTi','hAUKr','QUSPf','𝐔𝐒𝐄𝐃*\x0a','ing\x20or\x20par','UEISW','phVrp','off','99fccQNX','Error\x20read','*\x20➪\x20*_','lastseen','\x0a\x0a*𝐑𝐄𝐀𝐒𝐎𝐍\x20','\x20Turn\x20Off\x20','ync','*_AFK\x20Turn','uccessfull','ta\x20to\x20JSON','𝙽𝙴𝚁\x27𝚂\x20𝙻𝙰𝚂𝚃','add\x20status','eZone\x20Is\x20I','lready\x20Tur','*_AFK\x20is\x20A','ngCCd','YLIsn','isGroup','7673116onzlYi','decodeJid','𝐄𝐍*\x0a*𝚃𝙸𝙼𝙴*','ing\x20AFK\x20da','*𝙽𝙾\x20𝚁𝙴𝙰𝚂𝙾𝙽','mIDhn','I\x20am\x20busy','ring','OYpnM','iExPr','writeFileS','y\x20Set\x20To\x20T','dAsxW','ted\x20To_*\x20➪','3|2|4|1|0','parse','GMA-MD\x20Wha','data.json','hugIU','t\x20AFK_*\x0a*_','isBot','𝙵*','xNFIm','isAfk','sing\x20the\x20A','*_Give\x20Me\x20','MD_DB/afk_','aCWDM','botname','ponds','utf8','Developed\x20','5ZRkLhP','euIKu','n\x20Correct_','_*\x0a*𝙳𝙰𝚃𝙴*\x20','sent','tsapp\x20Bot\x20','\x20*_','AFK','𝙼𝙴*\x20*_➪\x20','ubair\x0aAFK\x20','\x20𝚂𝙴𝙴𝙽*\x0a*𝚃𝙸','RJWir','owner','en-pk','_*\x0a\x0a*𝙼𝚈\x20𝙾𝚆','𝐔𝐒\x0a','send','ON\x20file:','ed\x20Off\x20Suc','\x20afk\x20wheth','_*\x0a*_To\x20Se','king\x20or\x20no','*_AFK\x20Reas','split','*_Your\x20Tim','afk\x20off_\x0a\x0a','text','This\x20is\x20SI','Ex:\x20','710944JCWPzS','on\x20Is\x20Upda','By\x20Maher\x20Z','REATED\x20SUC','\x20file:','afkstatus','timezone','pushName','it\x20automat','stringify','391822qjGczX','afk','lib/SIGMA_','*\x0a\x20','CESSFULLY','AFK\x20use\x20','cessfully_','Reason\x20➪_*','log','The\x20Reason','sages\x20you\x20','writeFile','JHHqA','3OyoVIj','toLowerCas','readFileSy','\x20so\x20when\x20s','*\x20𝐀𝐅𝐊\x20𝐒𝐓𝐀𝐓','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙵','\x20*_➪\x20','EoPFN','usy_*\x0a\x0a_To','*_Hello_*\x20','RiYev','nRhpM','round','sYCbP','FK\x20data\x20JS','getTime','1252740jqkmtq','\x20𝚂𝙴𝚃\x20𝙵𝙾𝚁\x20𝙰','includes','_*\x20\x0a\x20*_I\x20A','us\x20or\x20your','sender','mentionedJ','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙽','m\x20Currentl','OPNOG','ically\x20res','457814MfRFFs','SkfdT','reason','er\x20its\x20wor','SqMgJ','code','139784iaEmQe','IhIjw','omeone\x20mes','afk\x20i\x20am\x20b','toLocaleSt','10kBDrUm','𝙵𝙺*','wqZrK','check\x20stat','*_➪\x20','sendMessag','ITiwl','y\x20AFK_*\x0a*_','_*\x0a\x0a','ENOENT','sPXOx','Error\x20writ','he\x20Reason_','*_AFK\x20Is\x20S','quoted','DATABASE\x20C','user','47960bnDCRB','ned\x20Off_*','chat','\x0a\x0a*𝐋𝐀𝐒𝐓\x20𝐒𝐄','mZVKz','lhuYu','fromMe'];_0x311a=function(){return _0x423ce7;};return _0x311a();}function _0x3044(_0x3a410d,_0x2d07f5){const _0x35d318=_0x311a();return _0x3044=function(_0x561f07,_0x2899b6){_0x561f07=_0x561f07-(0x1*0x23bb+-0x23ca+-0x1*-0x173);let _0x417be4=_0x35d318[_0x561f07];return _0x417be4;},_0x3044(_0x3a410d,_0x2d07f5);}const saveAFKData=()=>{const _0x836e76=_0x5bebab,_0x5770a1={'SkfdT':_0x836e76(0x17b)+_0x836e76(0x1a5)+_0x836e76(0x199)+_0x836e76(0x1e3),'YLIsn':_0x836e76(0x1eb)+_0x836e76(0x1bc)+_0x836e76(0x1b3)};fs[_0x836e76(0x1f4)](_0x5770a1[_0x836e76(0x1a0)],JSON[_0x836e76(0x1e8)](afkData),_0x55b5ea=>{const _0x5a59d5=_0x836e76;_0x55b5ea&&console[_0x5a59d5(0x1f1)](_0x5770a1[_0x5a59d5(0x166)],_0x55b5ea);});};global[_0x5bebab(0x1c9)]={'isAfk':afkData[_0x5bebab(0x1b9)]||![],'reason':afkData[_0x5bebab(0x167)]||![],'lastseen':afkData[_0x5bebab(0x193)]||-0x12e2+-0x1fa*0x3+0x18d0},Module_Exports({'kingcmd':_0x5bebab(0x1ea),'infocmd':_0x5bebab(0x19b)+_0x5bebab(0x1f9)+_0x5bebab(0x16d)+_0x5bebab(0x1f3)+_0x5bebab(0x1e7)+_0x5bebab(0x164)+_0x5bebab(0x1bf),'kingclass':_0x5bebab(0x1ce)},async(_0x4b404e,_0x21ee8a,_0x3f621c,{isCreator:_0x152173})=>{const _0x5c0d32=_0x5bebab,_0x5a7952={'wqZrK':function(_0x334b4d){return _0x334b4d();},'JHHqA':function(_0x22e9b5,_0x2d142d){return _0x22e9b5+_0x2d142d;},'lhuYu':function(_0x2eed86,_0x1e378e){return _0x2eed86===_0x1e378e;},'QUSPf':_0x5c0d32(0x18f),'sYCbP':_0x5c0d32(0x19e)+_0x5c0d32(0x19d)+_0x5c0d32(0x182),'ITiwl':function(_0x5de2fc){return _0x5de2fc();},'dAsxW':_0x5c0d32(0x197)+_0x5c0d32(0x1d4)+_0x5c0d32(0x1ef)+'*','EoPFN':_0x5c0d32(0x1b0),'ngCCd':function(_0xfabe1,_0x4f9664){return _0xfabe1||_0x4f9664;},'mZVKz':_0x5c0d32(0x1a8),'OPNOG':function(_0x413a6d,_0x58c0c4){return _0x413a6d/_0x58c0c4;},'aCWDM':function(_0x324bd8){return _0x324bd8();},'IhIjw':function(_0x15a495,_0x43545a){return _0x15a495+_0x43545a;},'hugIU':_0x5c0d32(0x1da)+_0x5c0d32(0x19c)+_0x5c0d32(0x1c4)+_0x5c0d32(0x1ec)};try{if(!_0x152173)_0x4b404e[_0x5c0d32(0x1d2)](_0x5a7952[_0x5c0d32(0x172)](tlang)[_0x5c0d32(0x1ce)]);if(!afkData)afkData={};if(!afkData[_0x5c0d32(0x1b9)]&&!_0x3f621c)return await _0x4b404e[_0x5c0d32(0x175)+'e'](_0x21ee8a[_0x5c0d32(0x183)],{'text':_0x5a7952[_0x5c0d32(0x1f5)](_0x5c0d32(0x1bb)+_0x5c0d32(0x1f2)+_0x5c0d32(0x1d6)+_0x5c0d32(0x1b5)+_0x5c0d32(0x1de)+prefix+(_0x5c0d32(0x16e)+_0x5c0d32(0x1fe)+_0x5c0d32(0x195)+_0x5c0d32(0x1ee))+prefix+_0x5c0d32(0x1db),scap)});if(_0x5a7952[_0x5c0d32(0x186)](_0x3f621c[_0x5c0d32(0x1f7)+'e'](),_0x5a7952[_0x5c0d32(0x18a)]))return!afkData[_0x5c0d32(0x1b9)]?await _0x4b404e[_0x5c0d32(0x175)+'e'](_0x21ee8a[_0x5c0d32(0x183)],{'text':_0x5a7952[_0x5c0d32(0x203)]}):(afkData[_0x5c0d32(0x1b9)]=![],afkData[_0x5c0d32(0x167)]=![],_0x5a7952[_0x5c0d32(0x176)](saveAFKData),await _0x4b404e[_0x5c0d32(0x175)+'e'](_0x21ee8a[_0x5c0d32(0x183)],{'text':_0x5a7952[_0x5c0d32(0x1ae)]}));if(!afkData[_0x5c0d32(0x1b9)]){const _0x422d8f=_0x5a7952[_0x5c0d32(0x1fd)][_0x5c0d32(0x1d9)]('|');let _0x44f76a=-0x56*-0x49+-0xb5*0xd+-0xf55;while(!![]){switch(_0x422d8f[_0x44f76a++]){case'0':return await _0x4b404e[_0x5c0d32(0x175)+'e'](_0x21ee8a[_0x5c0d32(0x183)],{'text':_0x5c0d32(0x17d)+_0x5c0d32(0x198)+_0x5c0d32(0x1ad)+_0x5c0d32(0x17c)+_0x5c0d32(0x192)+_0x3f621c+'_*'});case'1':_0x5a7952[_0x5c0d32(0x176)](saveAFKData);continue;case'2':afkData[_0x5c0d32(0x1b9)]=!![];continue;case'3':afkData[_0x5c0d32(0x167)]=_0x5a7952[_0x5c0d32(0x19f)](_0x3f621c,_0x5a7952[_0x5c0d32(0x185)]);continue;case'4':afkData[_0x5c0d32(0x193)]=Math[_0x5c0d32(0x202)](_0x5a7952[_0x5c0d32(0x20f)](new Date()[_0x5c0d32(0x205)](),0x1725+0xa3b+-0x1d78));continue;}break;}}else return afkData[_0x5c0d32(0x167)]=_0x5a7952[_0x5c0d32(0x19f)](_0x3f621c,_0x5a7952[_0x5c0d32(0x185)]),afkData[_0x5c0d32(0x193)]=Math[_0x5c0d32(0x202)](_0x5a7952[_0x5c0d32(0x20f)](new Date()[_0x5c0d32(0x205)](),-0xaa4*0x2+0x3*-0x4ca+-0x278e*-0x1)),_0x5a7952[_0x5c0d32(0x1bd)](saveAFKData),await _0x4b404e[_0x5c0d32(0x175)+'e'](_0x21ee8a[_0x5c0d32(0x183)],{'text':_0x5c0d32(0x1d8)+_0x5c0d32(0x1e0)+_0x5c0d32(0x1af)+_0x5c0d32(0x1c8)+_0x3f621c+'_*'});}catch(_0x241735){_0x21ee8a[_0x5c0d32(0x1c6)](_0x5a7952[_0x5c0d32(0x16c)](_0x5a7952[_0x5c0d32(0x1b4)],_0x241735));}}),Module_Exports({'on':_0x5bebab(0x1dc)},async(_0x30032b,_0x4bcc8c)=>{const _0x289e6f=_0x5bebab,_0x187704={'nRhpM':function(_0x5c7298,_0x274d68){return _0x5c7298===_0x274d68;},'RJWir':function(_0x23ba65,_0x197bf5){return _0x23ba65||_0x197bf5;},'SqMgJ':function(_0x52e929,_0x130368){return _0x52e929*_0x130368;},'pnmTi':_0x289e6f(0x1cf),'phVrp':function(_0xbc5a4b,_0x4fd5e3){return _0xbc5a4b+_0x4fd5e3;},'sPXOx':_0x289e6f(0x1da)+_0x289e6f(0x19c)+_0x289e6f(0x1c4)+_0x289e6f(0x1ec)};try{let _0xc0b071=await _0x30032b[_0x289e6f(0x1a3)](_0x30032b[_0x289e6f(0x180)]['id']);if(!afkData[_0x289e6f(0x1b9)]||_0x4bcc8c[_0x289e6f(0x187)]||_0x4bcc8c[_0x289e6f(0x1b6)])return;let _0xa63088=_0x4bcc8c[_0x289e6f(0x17e)]&&_0x187704[_0x289e6f(0x201)](_0x4bcc8c[_0x289e6f(0x17e)][_0x289e6f(0x20b)],_0xc0b071)?!![]:![],_0x1e1b81=_0x4bcc8c[_0x289e6f(0x20c)+'id']&&_0x4bcc8c[_0x289e6f(0x20c)+'id'][_0x289e6f(0x208)](_0xc0b071)?!![]:![],_0x4af973=_0x4bcc8c[_0x289e6f(0x1a1)]?![]:!![];if(_0x187704[_0x289e6f(0x1cd)](_0xa63088,_0x1e1b81)||_0x4af973){let _0x4ba259=new Date(_0x187704[_0x289e6f(0x169)](afkData[_0x289e6f(0x193)],0x1300+0x22c7+-0x1*0x31df)),[_0x4f991f,_0x201036]=_0x4ba259[_0x289e6f(0x16f)+_0x289e6f(0x1a9)](_0x187704[_0x289e6f(0x188)],{'timeZone':global[_0x289e6f(0x1e5)]})[_0x289e6f(0x1d9)](',');await _0x30032b[_0x289e6f(0x175)+'e'](_0x4bcc8c[_0x289e6f(0x183)],{'text':_0x289e6f(0x1ff)+'*_'+_0x4bcc8c[_0x289e6f(0x1e6)]+(_0x289e6f(0x209)+_0x289e6f(0x20e)+_0x289e6f(0x177)+_0x289e6f(0x1f0)+_0x289e6f(0x1c8))+afkData[_0x289e6f(0x167)]+(_0x289e6f(0x1d0)+_0x289e6f(0x19a)+_0x289e6f(0x1cc)+_0x289e6f(0x1ca))+_0x201036+(_0x289e6f(0x1c5)+_0x289e6f(0x174))+_0x4f991f+'_*'});}}catch(_0x34c36c){_0x4bcc8c[_0x289e6f(0x1c6)](_0x187704[_0x289e6f(0x18e)](_0x187704[_0x289e6f(0x17a)],_0x34c36c));}}),Module_Exports({'kingcmd':_0x5bebab(0x1e4),'infocmd':_0x5bebab(0x173)+_0x5bebab(0x20a)+_0x5bebab(0x1d5)+_0x5bebab(0x168)+_0x5bebab(0x1d7)+'t','kingclass':_0x5bebab(0x1ce)},async(_0x32ecc7,_0x2833de,{isCreator:_0x281eff})=>{const _0x582ade=_0x5bebab,_0x443f60={'RiYev':_0x582ade(0x20d)+'*','euIKu':_0x582ade(0x1fb)+_0x582ade(0x1b7),'UEISW':_0x582ade(0x1a6)+_0x582ade(0x207)+_0x582ade(0x171),'hAUKr':function(_0x3a08ba,_0x56dfe7){return _0x3a08ba*_0x56dfe7;},'OYpnM':_0x582ade(0x1cf),'mIDhn':function(_0x48e09b,_0x1fe1c4){return _0x48e09b+_0x1fe1c4;},'iExPr':function(_0x378ae7,_0x3abf0d){return _0x378ae7+_0x3abf0d;},'xNFIm':_0x582ade(0x1da)+_0x582ade(0x19c)+_0x582ade(0x1c4)+_0x582ade(0x1ec)};try{if(!afkData)afkData={};const _0x4ae0b4=afkData[_0x582ade(0x1b9)]?_0x443f60[_0x582ade(0x200)]:_0x443f60[_0x582ade(0x1c3)],_0x2e764a=afkData[_0x582ade(0x167)]||_0x443f60[_0x582ade(0x18d)],_0x432039=new Date(_0x443f60[_0x582ade(0x189)](afkData[_0x582ade(0x193)],-0x1af0*-0x1+-0x1f78+0x870)),[_0x495506,_0x19a198]=_0x432039[_0x582ade(0x16f)+_0x582ade(0x1a9)](_0x443f60[_0x582ade(0x1aa)],{'timeZone':global[_0x582ade(0x1e5)]})[_0x582ade(0x1d9)](','),_0x4deaaa=_0x443f60[_0x582ade(0x1a7)]('*'+name[_0x582ade(0x1be)]+(_0x582ade(0x1fa)+_0x582ade(0x1d1))+_0x4ae0b4+(_0x582ade(0x194)+_0x582ade(0x18b))+_0x2e764a+(_0x582ade(0x184)+_0x582ade(0x1a4)+_0x582ade(0x1fc))+_0x19a198+(_0x582ade(0x1c5)+_0x582ade(0x174))+_0x495506+_0x582ade(0x178),scap);await _0x32ecc7[_0x582ade(0x175)+'e'](_0x2833de[_0x582ade(0x183)],{'text':_0x4deaaa});}catch(_0x379870){_0x2833de[_0x582ade(0x1c6)](_0x443f60[_0x582ade(0x1ab)](_0x443f60[_0x582ade(0x1b8)],_0x379870));}});