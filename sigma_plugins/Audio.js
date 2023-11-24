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
const _0x2031ae=_0x3a7b;(function(_0x492365,_0x322c52){const _0x3a2595=_0x3a7b,_0x19377b=_0x492365();while(!![]){try{const _0x3108cc=parseInt(_0x3a2595(0x1c7))/(0x1*-0x1c73+-0x1*0x1a92+0x1b83*0x2)*(parseInt(_0x3a2595(0x226))/(-0xa*0x200+0x20b0+-0x3*0x43a))+-parseInt(_0x3a2595(0x1f1))/(0xbfc+0x2ea+-0xee3*0x1)+-parseInt(_0x3a2595(0x1c4))/(0x1a62+0x1e11+-0x386f)*(-parseInt(_0x3a2595(0x1ab))/(-0x13e*-0x9+0x1bf7+-0x2720))+-parseInt(_0x3a2595(0x1da))/(-0x7*0x58d+0x2597+-0x21*-0xa)+parseInt(_0x3a2595(0x194))/(-0x1*-0x2305+-0x129b+0x1*-0x1063)+parseInt(_0x3a2595(0x19e))/(0x4*0x403+0x5*-0xbf+0x1*-0xc49)*(-parseInt(_0x3a2595(0x1bc))/(-0x234d+-0x6b1*-0x2+0x15f4))+parseInt(_0x3a2595(0x218))/(-0x1f7c+0xb*-0x17+0x2083);if(_0x3108cc===_0x322c52)break;else _0x19377b['push'](_0x19377b['shift']());}catch(_0x3c552e){_0x19377b['push'](_0x19377b['shift']());}}}(_0x1a2d,0x5a34*0x4+-0x7208+-0x3eaae*-0x2));function _0x1a2d(){const _0x35c633=['CzKOf','GutNv','xyicW','𝐔𝐒\x0a','553686VJrTUt','Developed\x20','writeFile','*_Your\x20Tim','ePhOR','ason\x20➪_*\x20*','t\x20AFK_*\x0a*_','afk','auKwi','CGVqO','ically\x20res','*𝙽𝙾\x20𝚁𝙴𝙰𝚂𝙾𝙽','send','*_AFK\x20Reas','check\x20stat','reason','er\x20its\x20wor','Fhzij','_*\x0a*𝙳𝙰𝚃𝙴*\x20','The\x20Reason','he\x20Reason_','\x20Turn\x20Off\x20','*\x20𝐀𝐅𝐊\x20𝐒𝐓𝐀𝐓','split','\x0a\x0a*𝐑𝐄𝐀𝐒𝐎𝐍\x20','𝐄𝐍*\x0a*𝚃𝙸𝙼𝙴*','lib/SIGMA_','\x0a\x0a*𝐋𝐀𝐒𝐓\x20𝐒𝐄','ync','log','king\x20or\x20no','chat','isBot','𝙵*','utf8','ibMYr','off','getTime','MTTyV','9821760PncmsE','y\x20Set\x20To\x20T','CXUmC','cessfully_','oVZur','_*\x20*_I\x20Am\x20','XduPC','*_➪\x20','uccessfull','n\x20Correct_','𝐔𝐒𝐄𝐃*\x0a','sent','toLowerCas','vGFFs','26iaYWZj','jktEt','*_Hello_*\x20','tsapp\x20Bot\x20','botname','rjQqr','𝙵𝙺*','\x20afk\x20wheth','\x20*_➪\x20','2|0|4|3|1','zBZae','GUUyh','AFK','CeSFv','fromMe','Currently\x20','afkstatus','on\x20Is\x20Upda','ing\x20or\x20par','CESSFULLY','ta\x20to\x20JSON','REATED\x20SUC','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙽','add\x20status','usy_*\x0a\x0a_To','2937648SfuyDF','_*\x0a*_To\x20Se','writeFileS','Error\x20read','AFK\x20use\x20','includes','sender','text','𝙼𝙴*\x20*_➪\x20','Ex:\x20','29864xlcVWo','AFK_*\x0a*_Re','data.json','I\x20am\x20busy','By\x20Maher\x20Z','quoted','ENOENT','\x20*_','round','isAfk','vWYMK','FK\x20data\x20JS','𝙽𝙴𝚁\x27𝚂\x20𝙻𝙰𝚂𝚃','215QwBmoL','apMME','us\x20or\x20your','sages\x20you\x20','eZone\x20Is\x20I','Ibmej','decodeJid','user','parse','ubair\x0aAFK\x20','it\x20automat','fTfcf','stringify','*\x20➪\x20*_','*_AFK\x20Is\x20S','en-pk','qsLXj','1899eoujZd','timezone','ON\x20file:','wcjvX','GMA-MD\x20Wha','DATABASE\x20C','afk\x20off_\x0a\x0a','\x20file:','93452Yghzks','owner','EFEtL','16914VYeJoB','ned\x20Off_*','ing\x20AFK\x20da','code','_*\x0a\x0a','*_@','QuqCM','iMEBP','*\x0a\x20','ed\x20Off\x20Suc','readFileSy','toLocaleSt','ring','\x20𝚂𝙴𝙴𝙽*\x0a*𝚃𝙸','ponds','*_Give\x20Me\x20','mentionedJ','\x20so\x20when\x20s','UWwMX','6465348iTQkOh','oQUaO','lready\x20Tur','sing\x20the\x20A','*_AFK\x20Turn','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙵','lastseen','ted\x20To_*\x20➪','omeone\x20mes','\x20𝚂𝙴𝚃\x20𝙵𝙾𝚁\x20𝙰','_*\x0a\x0a*𝙼𝚈\x20𝙾𝚆','jtraz','*_AFK\x20is\x20A','sendMessag','Error\x20writ','afk\x20i\x20am\x20b','MD_DB/afk_','This\x20is\x20SI','lAqNf'];_0x1a2d=function(){return _0x35c633;};return _0x1a2d();}let afkData={};try{afkData=JSON[_0x2031ae(0x1b3)](fs[_0x2031ae(0x1d1)+'nc'](_0x2031ae(0x20b)+_0x2031ae(0x1ea)+_0x2031ae(0x1a0),_0x2031ae(0x213)));}catch(_0x109a4b){_0x109a4b[_0x2031ae(0x1ca)]===_0x2031ae(0x1a4)?(fs[_0x2031ae(0x196)+_0x2031ae(0x20d)](_0x2031ae(0x20b)+_0x2031ae(0x1ea)+_0x2031ae(0x1a0),JSON[_0x2031ae(0x1b7)]({'isAfk':![],'reason':![],'lastseen':0x0})),console[_0x2031ae(0x20e)](_0x2031ae(0x1eb)+_0x2031ae(0x1c0)+_0x2031ae(0x17e)+_0x2031ae(0x1f2)+_0x2031ae(0x1a2)+_0x2031ae(0x1b4)+_0x2031ae(0x1c1)+_0x2031ae(0x190)+_0x2031ae(0x18e))):console[_0x2031ae(0x20e)](_0x2031ae(0x197)+_0x2031ae(0x18d)+_0x2031ae(0x1dd)+_0x2031ae(0x1a9)+_0x2031ae(0x1be),_0x109a4b);}function _0x3a7b(_0x30c412,_0x5a87f3){const _0x455a19=_0x1a2d();return _0x3a7b=function(_0x563ea5,_0x371454){_0x563ea5=_0x563ea5-(0x2669+0xb4*-0xc+0x2*-0xe3e);let _0x5ece1b=_0x455a19[_0x563ea5];return _0x5ece1b;},_0x3a7b(_0x30c412,_0x5a87f3);}const saveAFKData=()=>{const _0x50652f=_0x2031ae,_0x2ae5fd={'Ibmej':_0x50652f(0x1e8)+_0x50652f(0x1c9)+_0x50652f(0x18f)+_0x50652f(0x1c3),'lAqNf':_0x50652f(0x20b)+_0x50652f(0x1ea)+_0x50652f(0x1a0)};fs[_0x50652f(0x1f3)](_0x2ae5fd[_0x50652f(0x1ec)],JSON[_0x50652f(0x1b7)](afkData),_0x2e727c=>{const _0x518760=_0x50652f;_0x2e727c&&console[_0x518760(0x20e)](_0x2ae5fd[_0x518760(0x1b0)],_0x2e727c);});};global[_0x2031ae(0x187)]={'isAfk':afkData[_0x2031ae(0x1a7)]||![],'reason':afkData[_0x2031ae(0x200)]||![],'lastseen':afkData[_0x2031ae(0x1e0)]||-0xf82+0x76b*0x5+-0x1595},Module_Exports({'kingcmd':_0x2031ae(0x1f8),'infocmd':_0x2031ae(0x192)+_0x2031ae(0x1d8)+_0x2031ae(0x1e2)+_0x2031ae(0x1ae)+_0x2031ae(0x1b5)+_0x2031ae(0x1fb)+_0x2031ae(0x1d5),'kingclass':_0x2031ae(0x1c5)},async(_0x50e06e,_0x5ca4ff,_0x3aae3b,{isCreator:_0x5d1527})=>{const _0x467d06=_0x2031ae,_0x46cb52={'CGVqO':function(_0x1a29ad){return _0x1a29ad();},'wcjvX':function(_0x45696f,_0x1dc836){return _0x45696f+_0x1dc836;},'XduPC':function(_0x28b74b,_0x26fa6b){return _0x28b74b===_0x26fa6b;},'rjQqr':_0x467d06(0x215),'GUUyh':_0x467d06(0x1e6)+_0x467d06(0x1dc)+_0x467d06(0x1c8),'qsLXj':_0x467d06(0x1de)+_0x467d06(0x1d0)+_0x467d06(0x21b)+'*','QuqCM':_0x467d06(0x184),'apMME':function(_0x4345b8,_0x199274){return _0x4345b8||_0x199274;},'iMEBP':_0x467d06(0x1a1),'EFEtL':function(_0x1db05a){return _0x1db05a();},'zBZae':function(_0x4e495c,_0x2154d6){return _0x4e495c/_0x2154d6;},'vGFFs':function(_0x39601f,_0x4c0952){return _0x39601f||_0x4c0952;},'ibMYr':function(_0x2c9549,_0x2b2d12){return _0x2c9549/_0x2b2d12;},'jtraz':function(_0x2b82df){return _0x2b82df();},'jktEt':_0x467d06(0x1f4)+_0x467d06(0x1af)+_0x467d06(0x221)+_0x467d06(0x1cf)};try{if(!_0x5d1527)_0x50e06e[_0x467d06(0x1fd)](_0x46cb52[_0x467d06(0x1fa)](tlang)[_0x467d06(0x1c5)]);if(!afkData)afkData={};if(!afkData[_0x467d06(0x1a7)]&&!_0x3aae3b)return await _0x50e06e[_0x467d06(0x1e7)+'e'](_0x5ca4ff[_0x467d06(0x210)],{'text':_0x46cb52[_0x467d06(0x1bf)](_0x467d06(0x1d6)+_0x467d06(0x204)+_0x467d06(0x195)+_0x467d06(0x1f7)+_0x467d06(0x19d)+prefix+(_0x467d06(0x1e9)+_0x467d06(0x193)+_0x467d06(0x206)+_0x467d06(0x198))+prefix+_0x467d06(0x1c2),scap)});if(_0x46cb52[_0x467d06(0x21e)](_0x3aae3b[_0x467d06(0x224)+'e'](),_0x46cb52[_0x467d06(0x180)]))return!afkData[_0x467d06(0x1a7)]?await _0x50e06e[_0x467d06(0x1e7)+'e'](_0x5ca4ff[_0x467d06(0x210)],{'text':_0x46cb52[_0x467d06(0x186)]}):(afkData[_0x467d06(0x1a7)]=![],afkData[_0x467d06(0x200)]=![],_0x46cb52[_0x467d06(0x1fa)](saveAFKData),await _0x50e06e[_0x467d06(0x1e7)+'e'](_0x5ca4ff[_0x467d06(0x210)],{'text':_0x46cb52[_0x467d06(0x1bb)]}));if(!afkData[_0x467d06(0x1a7)]){const _0x3ea5c2=_0x46cb52[_0x467d06(0x1cd)][_0x467d06(0x208)]('|');let _0xbd53a5=-0x10d8+-0x16d9+0x27b1;while(!![]){switch(_0x3ea5c2[_0xbd53a5++]){case'0':afkData[_0x467d06(0x1a7)]=!![];continue;case'1':return await _0x50e06e[_0x467d06(0x1e7)+'e'](_0x5ca4ff[_0x467d06(0x210)],{'text':_0x467d06(0x1b9)+_0x467d06(0x220)+_0x467d06(0x219)+_0x467d06(0x205)+_0x467d06(0x1b8)+_0x3aae3b+'_*'});case'2':afkData[_0x467d06(0x200)]=_0x46cb52[_0x467d06(0x1ac)](_0x3aae3b,_0x46cb52[_0x467d06(0x1ce)]);continue;case'3':_0x46cb52[_0x467d06(0x1c6)](saveAFKData);continue;case'4':afkData[_0x467d06(0x1e0)]=Math[_0x467d06(0x1a6)](_0x46cb52[_0x467d06(0x185)](new Date()[_0x467d06(0x216)](),-0x18d8+0x11fe+0xac2));continue;}break;}}else return afkData[_0x467d06(0x200)]=_0x46cb52[_0x467d06(0x225)](_0x3aae3b,_0x46cb52[_0x467d06(0x1ce)]),afkData[_0x467d06(0x1e0)]=Math[_0x467d06(0x1a6)](_0x46cb52[_0x467d06(0x214)](new Date()[_0x467d06(0x216)](),-0x335+0x1*-0x24df+-0x233*-0x14)),_0x46cb52[_0x467d06(0x1e5)](saveAFKData),await _0x50e06e[_0x467d06(0x1e7)+'e'](_0x5ca4ff[_0x467d06(0x210)],{'text':_0x467d06(0x1fe)+_0x467d06(0x18c)+_0x467d06(0x1e1)+_0x467d06(0x1a5)+_0x3aae3b+'_*'});}catch(_0x1766f8){_0x5ca4ff[_0x467d06(0x223)](_0x46cb52[_0x467d06(0x1bf)](_0x46cb52[_0x467d06(0x227)],_0x1766f8));}}),Module_Exports({'on':_0x2031ae(0x19b)},async(_0x27ee4a,_0x1b443f)=>{const _0x57ce1b=_0x2031ae,_0x5c0b5b={'ePhOR':function(_0x23750c,_0x4a536f){return _0x23750c===_0x4a536f;},'MTTyV':function(_0x1c002a,_0x1731f8){return _0x1c002a||_0x1731f8;},'xyicW':function(_0x3e9362,_0x30e1e8){return _0x3e9362*_0x30e1e8;},'oVZur':_0x57ce1b(0x1ba),'CzKOf':function(_0x4b18c8,_0x52bf2d){return _0x4b18c8+_0x52bf2d;},'auKwi':_0x57ce1b(0x1f4)+_0x57ce1b(0x1af)+_0x57ce1b(0x221)+_0x57ce1b(0x1cf)};try{let _0x5c2499=await _0x27ee4a[_0x57ce1b(0x1b1)](_0x27ee4a[_0x57ce1b(0x1b2)]['id']);if(!afkData[_0x57ce1b(0x1a7)]||_0x1b443f[_0x57ce1b(0x189)]||_0x1b443f[_0x57ce1b(0x211)])return;let _0x16dc01=_0x1b443f[_0x57ce1b(0x1a3)]&&_0x5c0b5b[_0x57ce1b(0x1f5)](_0x1b443f[_0x57ce1b(0x1a3)][_0x57ce1b(0x19a)],_0x5c2499)?!![]:![],_0x313e97=_0x1b443f[_0x57ce1b(0x1d7)+'id']&&_0x1b443f[_0x57ce1b(0x1d7)+'id'][_0x57ce1b(0x199)](_0x5c2499)?!![]:![];if(_0x5c0b5b[_0x57ce1b(0x217)](_0x16dc01,_0x313e97)){let _0x4ba912=new Date(_0x5c0b5b[_0x57ce1b(0x1ef)](afkData[_0x57ce1b(0x1e0)],-0x649*-0x1+0x2452+-0x1*0x26b3)),[_0x5b32a9,_0x5b8dfb]=_0x4ba912[_0x57ce1b(0x1d2)+_0x57ce1b(0x1d3)](_0x5c0b5b[_0x57ce1b(0x21c)],{'timeZone':global[_0x57ce1b(0x1bd)]})[_0x57ce1b(0x208)](',');await _0x27ee4a[_0x57ce1b(0x1e7)+'e'](_0x1b443f[_0x57ce1b(0x210)],{'text':_0x57ce1b(0x17d)+_0x57ce1b(0x1cc)+_0x1b443f[_0x57ce1b(0x19a)][_0x57ce1b(0x208)]('@')[-0x1*-0x1af+-0xc5*0x2d+0x20f2]+(_0x57ce1b(0x21d)+_0x57ce1b(0x18a)+_0x57ce1b(0x19f)+_0x57ce1b(0x1f6)+'_')+afkData[_0x57ce1b(0x200)]+(_0x57ce1b(0x1e4)+_0x57ce1b(0x1aa)+_0x57ce1b(0x1d4)+_0x57ce1b(0x19c))+_0x5b8dfb+(_0x57ce1b(0x203)+_0x57ce1b(0x21f))+_0x5b32a9+'_*','mentions':[_0x1b443f[_0x57ce1b(0x19a)]],'quoted':_0x1b443f});}}catch(_0xb75560){_0x1b443f[_0x57ce1b(0x223)](_0x5c0b5b[_0x57ce1b(0x1ed)](_0x5c0b5b[_0x57ce1b(0x1f9)],_0xb75560));}}),Module_Exports({'kingcmd':_0x2031ae(0x18b),'infocmd':_0x2031ae(0x1ff)+_0x2031ae(0x1ad)+_0x2031ae(0x182)+_0x2031ae(0x201)+_0x2031ae(0x20f)+'t','kingclass':_0x2031ae(0x1c5)},async(_0x45ce72,_0x39d58a,{isCreator:_0x3081c1})=>{const _0x59cb12=_0x2031ae,_0x31ab7e={'vWYMK':_0x59cb12(0x191)+'*','GutNv':_0x59cb12(0x1df)+_0x59cb12(0x212),'UWwMX':_0x59cb12(0x1fc)+_0x59cb12(0x1e3)+_0x59cb12(0x181),'oQUaO':function(_0x2dd590,_0x383241){return _0x2dd590*_0x383241;},'fTfcf':_0x59cb12(0x1ba),'CeSFv':function(_0x105e8b,_0x5a6a45){return _0x105e8b+_0x5a6a45;},'Fhzij':function(_0x12ca96,_0x3256a0){return _0x12ca96+_0x3256a0;},'CXUmC':_0x59cb12(0x1f4)+_0x59cb12(0x1af)+_0x59cb12(0x221)+_0x59cb12(0x1cf)};try{if(!afkData)afkData={};const _0x26e99c=afkData[_0x59cb12(0x1a7)]?_0x31ab7e[_0x59cb12(0x1a8)]:_0x31ab7e[_0x59cb12(0x1ee)],_0x3ee47b=afkData[_0x59cb12(0x200)]||_0x31ab7e[_0x59cb12(0x1d9)],_0x2406cb=new Date(_0x31ab7e[_0x59cb12(0x1db)](afkData[_0x59cb12(0x1e0)],-0xc15*0x2+0xaec+0x36e*0x5)),[_0xb61c06,_0x5cad7e]=_0x2406cb[_0x59cb12(0x1d2)+_0x59cb12(0x1d3)](_0x31ab7e[_0x59cb12(0x1b6)],{'timeZone':global[_0x59cb12(0x1bd)]})[_0x59cb12(0x208)](','),_0x57f51f=_0x31ab7e[_0x59cb12(0x188)]('*'+name[_0x59cb12(0x17f)]+(_0x59cb12(0x207)+_0x59cb12(0x1f0))+_0x26e99c+(_0x59cb12(0x209)+_0x59cb12(0x222))+_0x3ee47b+(_0x59cb12(0x20c)+_0x59cb12(0x20a)+_0x59cb12(0x183))+_0x5cad7e+(_0x59cb12(0x203)+_0x59cb12(0x21f))+_0xb61c06+_0x59cb12(0x1cb),scap);await _0x45ce72[_0x59cb12(0x1e7)+'e'](_0x39d58a[_0x59cb12(0x210)],{'text':_0x57f51f});}catch(_0x19281e){_0x39d58a[_0x59cb12(0x223)](_0x31ab7e[_0x59cb12(0x202)](_0x31ab7e[_0x59cb12(0x21a)],_0x19281e));}});