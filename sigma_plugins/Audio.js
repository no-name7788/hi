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
const _0x55c8b1=_0x1189;(function(_0x4da71d,_0x25a5f1){const _0x55ba65=_0x1189,_0x202046=_0x4da71d();while(!![]){try{const _0x4b5307=-parseInt(_0x55ba65(0x1b5))/(-0x229*0x1+0x5*0x209+-0x803)*(parseInt(_0x55ba65(0x194))/(-0xd7*-0xf+0x3d1+-0x23*0x78))+-parseInt(_0x55ba65(0x1bb))/(0x7*-0x5+-0x737*-0x5+-0x23ed)*(-parseInt(_0x55ba65(0x190))/(0x1*-0x1d55+0xf63+0xdf6*0x1))+-parseInt(_0x55ba65(0x1a5))/(0x154e+-0x23c6+0xe7d)+-parseInt(_0x55ba65(0x1a4))/(-0x1971+0x1d3a*-0x1+0x36b1)+-parseInt(_0x55ba65(0x1a6))/(0x1*0x1871+-0x1*-0x60b+-0x3*0xa27)+-parseInt(_0x55ba65(0x198))/(0x1*0xa09+-0x66*0x12+-0x2d5)+parseInt(_0x55ba65(0x1a2))/(-0xfa3+0x1446+-0x49a);if(_0x4b5307===_0x25a5f1)break;else _0x202046['push'](_0x202046['shift']());}catch(_0x5ea0ea){_0x202046['push'](_0x202046['shift']());}}}(_0x3411,0x1fad0+-0x110e7*0xd+0x1*0x159d69));function _0x1189(_0x2620bf,_0x4fcc79){const _0x152e1e=_0x3411();return _0x1189=function(_0x48b43d,_0x422773){_0x48b43d=_0x48b43d-(-0x2af*0x8+0x21ac+-0xaa4);let _0x2f8c4d=_0x152e1e[_0x48b43d];return _0x2f8c4d;},_0x1189(_0x2620bf,_0x4fcc79);}function _0x3411(){const _0x17a2f4=['4553166gfvqOZ','4611360Ifzljz','677131AWvHLH','ON\x20file:','ync','parse','Developed\x20','By\x20Maher\x20Z','Error\x20writ','WcTVB','ing\x20or\x20par','son','utf8','\x20file:','reason','isAfk','REATED\x20SUC','7883oVdCSs','writeFile','writeFileS','afk_data.j','stringify','GMA-MD\x20Wha','1551PYqRmJ','UupPI','272KBMmjP','ENOENT','tsapp\x20Bot\x20','log','202DYDTmp','readFileSy','sing\x20the\x20A','ubair\x0aAFK\x20','2540840Ldwsic','This\x20is\x20SI','ta\x20to\x20JSON','Error\x20read','CESSFULLY','DATABASE\x20C','ing\x20AFK\x20da','code','FK\x20data\x20JS','lastseen','31451184hbTvKK','AFK'];_0x3411=function(){return _0x17a2f4;};return _0x3411();}let afkData={};try{afkData=JSON[_0x55c8b1(0x1a9)](fs[_0x55c8b1(0x195)+'nc'](_0x55c8b1(0x1b8)+_0x55c8b1(0x1af),_0x55c8b1(0x1b0)));}catch(_0x397e89){_0x397e89[_0x55c8b1(0x19f)]===_0x55c8b1(0x191)?(fs[_0x55c8b1(0x1b7)+_0x55c8b1(0x1a8)](_0x55c8b1(0x1b8)+_0x55c8b1(0x1af),JSON[_0x55c8b1(0x1b9)]({'isAfk':![],'reason':![],'lastseen':0x0})),console[_0x55c8b1(0x193)](_0x55c8b1(0x199)+_0x55c8b1(0x1ba)+_0x55c8b1(0x192)+_0x55c8b1(0x1aa)+_0x55c8b1(0x1ab)+_0x55c8b1(0x197)+_0x55c8b1(0x19d)+_0x55c8b1(0x1b4)+_0x55c8b1(0x19c))):console[_0x55c8b1(0x193)](_0x55c8b1(0x19b)+_0x55c8b1(0x1ae)+_0x55c8b1(0x196)+_0x55c8b1(0x1a0)+_0x55c8b1(0x1a7),_0x397e89);}const saveAFKData=()=>{const _0xf0f584=_0x55c8b1,_0x5b5f5a={'UupPI':_0xf0f584(0x1ac)+_0xf0f584(0x19e)+_0xf0f584(0x19a)+_0xf0f584(0x1b1),'WcTVB':_0xf0f584(0x1b8)+_0xf0f584(0x1af)};fs[_0xf0f584(0x1b6)](_0x5b5f5a[_0xf0f584(0x1ad)],JSON[_0xf0f584(0x1b9)](afkData),_0x337f1d=>{const _0x207d84=_0xf0f584;_0x337f1d&&console[_0x207d84(0x193)](_0x5b5f5a[_0x207d84(0x1bc)],_0x337f1d);});};global[_0x55c8b1(0x1a3)]={'isAfk':afkData[_0x55c8b1(0x1b3)]||![],'reason':afkData[_0x55c8b1(0x1b2)]||![],'lastseen':afkData[_0x55c8b1(0x1a1)]||-0xa*0x281+0xf4c+0x9be};function _0x250c(){var _0x19cc89=['*\x0a\x20','sHeaK','add\x20status','send','cessfully_','it\x20automat','RGwGa','0|4|1|3|2','870gRQtIS','*_Give\x20Me\x20','he\x20Reason_','KvlWJ','I\x20am\x20busy','afk\x20off_\x0a\x0a','QvmWq','isAfk','y\x20Set\x20To\x20T','2211265jvBufi','_*\x0a*_To\x20Se','\x20so\x20when\x20s','n\x20Correct_','nvgxE','omeone\x20mes','Ex:\x20','8SjlPdm','3116AbPfes','ically\x20res','*_AFK\x20Is\x20S','JdjxT','ponds','sendMessag','getTime','55zkCpAU','*_AFK\x20Turn','owner','*\x20➪\x20*_','uccessfull','tHUzl','\x20*_','usy_*\x0a\x0a_To','ted\x20To_*\x20➪','2792376YYAcCR','2084262XXtmnp','*_AFK\x20is\x20A','iRPgl','Sofiy','awqyE','chat','MfZAu','uJeeV','t\x20AFK_*\x0a*_','afk','eZone\x20Is\x20I','2|4|3|1|0','*_AFK\x20Reas','pERgo','547113bkrGhu','uWMhJ','toLowerCas','off','654OmJcpw','*_Your\x20Tim','lastseen','127125rYYgWo','AFK\x20use\x20','round','lready\x20Tur','\x20Turn\x20Off\x20','ed\x20Off\x20Suc','The\x20Reason','on\x20Is\x20Upda','ned\x20Off_*','afk\x20i\x20am\x20b','split','2321270OVSKVm','reason','xMunW','32yjRfsn','RhqTx','sages\x20you\x20'];_0x250c=function(){return _0x19cc89;};return _0x250c();}function _0x2d0e(_0x4dca18,_0x4a5e21){var _0x5172bc=_0x250c();return _0x2d0e=function(_0x43d7e1,_0x2c8a8e){_0x43d7e1=_0x43d7e1-(-0x1629+-0x16c5+0x2e92);var _0x42148b=_0x5172bc[_0x43d7e1];return _0x42148b;},_0x2d0e(_0x4dca18,_0x4a5e21);}var _0x2e2dc1=_0x2d0e;(function(_0x41ae00,_0x474c29){var _0x2e8f1d=_0x2d0e,_0x5e9eff=_0x41ae00();while(!![]){try{var _0x4d9e2a=parseInt(_0x2e8f1d(0x1ea))/(-0xb0b+0x5*0x6f9+-0x1*0x17d1)+-parseInt(_0x2e8f1d(0x1cb))/(0xb56+-0x1*0x26f6+0x1ba2)*(parseInt(_0x2e8f1d(0x1ee))/(0x1779+-0x5*-0x6df+-0x39d1))+-parseInt(_0x2e8f1d(0x1ca))/(0x1*-0x1954+-0x1*0x24d5+-0xb*-0x5a7)*(parseInt(_0x2e8f1d(0x1ac))/(0x4c*0x4b+-0x3*0x469+-0x241*0x4))+parseInt(_0x2e8f1d(0x1dc))/(0x8e7+0x204c+0x7f*-0x53)+-parseInt(_0x2e8f1d(0x1c3))/(0x25cd+-0x956+-0x38e*0x8)*(-parseInt(_0x2e8f1d(0x1af))/(-0xe3a+0x293*0xf+-0x185b))+parseInt(_0x2e8f1d(0x1f1))/(-0x4a7*0x6+-0x1985+0x3578)*(-parseInt(_0x2e8f1d(0x1ba))/(-0x98*-0x26+-0xd7f+-0x907*0x1))+parseInt(_0x2e8f1d(0x1d2))/(0x15fa+0x1967+-0x49*0xa6)*(parseInt(_0x2e8f1d(0x1db))/(-0x1*0x25c9+-0x21f*0x1+0x27f4));if(_0x4d9e2a===_0x474c29)break;else _0x5e9eff['push'](_0x5e9eff['shift']());}catch(_0x5bc863){_0x5e9eff['push'](_0x5e9eff['shift']());}}}(_0x250c,0x138d8d+0xdd1b9+-0x14ca71),Module_Exports({'kingcmd':_0x2e2dc1(0x1e5),'infocmd':_0x2e2dc1(0x1b4)+_0x2e2dc1(0x1c5)+_0x2e2dc1(0x1c8)+_0x2e2dc1(0x1b1)+_0x2e2dc1(0x1b7)+_0x2e2dc1(0x1cc)+_0x2e2dc1(0x1cf),'kingclass':_0x2e2dc1(0x1d4)},async(_0x2e79ea,_0x5c7f02,_0x20c987,{isCreator:_0x3d74bd})=>{var _0x543956=_0x2e2dc1,_0x221a0a={'JdjxT':_0x543956(0x1b9),'sHeaK':function(_0x5c3ece){return _0x5c3ece();},'xMunW':function(_0xe53102,_0x50cca9){return _0xe53102+_0x50cca9;},'awqyE':_0x543956(0x1e7),'uWMhJ':function(_0x525a77){return _0x525a77();},'QvmWq':function(_0x54755e,_0x36d2a2){return _0x54755e||_0x36d2a2;},'MfZAu':_0x543956(0x1be),'RGwGa':function(_0x447246,_0x32e989){return _0x447246/_0x32e989;},'RhqTx':function(_0xb52467,_0x202b12){return _0xb52467||_0x202b12;},'tHUzl':function(_0x3bf5f8,_0x20cb16){return _0x3bf5f8===_0x20cb16;},'nvgxE':_0x543956(0x1ed),'uJeeV':_0x543956(0x1dd)+_0x543956(0x1a4)+_0x543956(0x1a9),'pERgo':function(_0x2f9405){return _0x2f9405();},'Sofiy':_0x543956(0x1d3)+_0x543956(0x1a6)+_0x543956(0x1b6)+'*','iRPgl':function(_0x36c57a,_0x18ca3a){return _0x36c57a+_0x18ca3a;},'KvlWJ':_0x543956(0x1ef)+_0x543956(0x1e6)+_0x543956(0x1c6)+_0x543956(0x1b2)};try{var _0x581a7e=_0x221a0a[_0x543956(0x1ce)][_0x543956(0x1ab)]('|'),_0x3ddbdd=-0x2040+-0x17d8+0x3818;while(!![]){switch(_0x581a7e[_0x3ddbdd++]){case'0':if(!_0x3d74bd)_0x2e79ea[_0x543956(0x1b5)](_0x221a0a[_0x543956(0x1b3)](tlang)[_0x543956(0x1d4)]);continue;case'1':if(!afkData[_0x543956(0x1c1)]&&!_0x20c987)return await _0x2e79ea[_0x543956(0x1d0)+'e'](_0x5c7f02[_0x543956(0x1e1)],{'text':_0x221a0a[_0x543956(0x1ae)](_0x543956(0x1bb)+_0x543956(0x1a7)+_0x543956(0x1c4)+_0x543956(0x1e4)+_0x543956(0x1c9)+prefix+(_0x543956(0x1aa)+_0x543956(0x1d9)+_0x543956(0x1a5)+_0x543956(0x1f2))+prefix+_0x543956(0x1bf),scap)});continue;case'2':if(!afkData[_0x543956(0x1c1)]){var _0xcb5718=_0x221a0a[_0x543956(0x1e0)][_0x543956(0x1ab)]('|'),_0x22335b=-0x26d1*0x1+0x1f*-0x128+-0x33f*-0x17;while(!![]){switch(_0xcb5718[_0x22335b++]){case'0':return await _0x2e79ea[_0x543956(0x1d0)+'e'](_0x5c7f02[_0x543956(0x1e1)],{'text':_0x543956(0x1cd)+_0x543956(0x1d6)+_0x543956(0x1c2)+_0x543956(0x1bc)+_0x543956(0x1d5)+_0x20c987+'_*'});case'1':_0x221a0a[_0x543956(0x1eb)](saveAFKData);continue;case'2':afkData[_0x543956(0x1ad)]=_0x221a0a[_0x543956(0x1c0)](_0x20c987,_0x221a0a[_0x543956(0x1e2)]);continue;case'3':afkData[_0x543956(0x1f0)]=Math[_0x543956(0x1f3)](_0x221a0a[_0x543956(0x1b8)](new Date()[_0x543956(0x1d1)](),-0x1*-0x1f53+0xe1d*0x1+-0x2988));continue;case'4':afkData[_0x543956(0x1c1)]=!![];continue;}break;}}else return afkData[_0x543956(0x1ad)]=_0x221a0a[_0x543956(0x1b0)](_0x20c987,_0x221a0a[_0x543956(0x1e2)]),afkData[_0x543956(0x1f0)]=Math[_0x543956(0x1f3)](_0x221a0a[_0x543956(0x1b8)](new Date()[_0x543956(0x1d1)](),0x937*-0x2+0x4*0xb3+0x138a)),_0x221a0a[_0x543956(0x1b3)](saveAFKData),await _0x2e79ea[_0x543956(0x1d0)+'e'](_0x5c7f02[_0x543956(0x1e1)],{'text':_0x543956(0x1e8)+_0x543956(0x1a8)+_0x543956(0x1da)+_0x543956(0x1d8)+_0x20c987+'_*'});continue;case'3':if(_0x221a0a[_0x543956(0x1d7)](_0x20c987[_0x543956(0x1ec)+'e'](),_0x221a0a[_0x543956(0x1c7)]))return!afkData[_0x543956(0x1c1)]?await _0x2e79ea[_0x543956(0x1d0)+'e'](_0x5c7f02[_0x543956(0x1e1)],{'text':_0x221a0a[_0x543956(0x1e3)]}):(afkData[_0x543956(0x1c1)]=![],afkData[_0x543956(0x1ad)]=![],_0x221a0a[_0x543956(0x1e9)](saveAFKData),await _0x2e79ea[_0x543956(0x1d0)+'e'](_0x5c7f02[_0x543956(0x1e1)],{'text':_0x221a0a[_0x543956(0x1df)]}));continue;case'4':if(!afkData)afkData={};continue;}break;}}catch(_0x299561){_0x5c7f02[_0x543956(0x1b5)](_0x221a0a[_0x543956(0x1de)](_0x221a0a[_0x543956(0x1bd)],_0x299561));}}));const _0x216fc3=_0x1a52;function _0x272d(){const _0x9b6ff2=['*_@','text','OAQTo','lastseen','*_Hello_*\x20','TfiQt','mentionedJ','491457HgjbSd','en-pk','send','1112870kNRUfs','eZone\x20Is\x20I','_*\x20*_This\x20','429144ROTraP','𝙼𝙴*\x20*_➪\x20','\x0a*_My\x20Owne','*_Your\x20Tim','toLocaleSt','*_➪\x20','timezone','user','\x0a*_Reason\x20','n\x20Correct_','al\x20Assista','isBot','nt\x20Of\x20Mahe','14LTDebD','_*\x0a*𝙳𝙰𝚃𝙴*\x20','1666017ZEqcMc','amsXb','sendMessag','r\x20Zubair_*','HKKhb','split','quoted','ntly\x20AFK_*','chat','_*\x0a\x0a*𝙼𝚈\x20𝙾𝚆','decodeJid','fromMe','NZUBL','2916024sypUlo','isAfk','AzKAF','\x20𝚂𝙴𝙴𝙽*\x0a*𝚃𝙸','*\x0a\x20','➪_*\x20*_','reason','ring','8JylcwF','221836lSJePe','isGroup','75553WtuXEX','D\x20A\x20Person','𝙽𝙴𝚁\x27𝚂\x20𝙻𝙰𝚂𝚃','is\x20SIGMA-M','includes','r\x20Is\x20Curre','sender'];_0x272d=function(){return _0x9b6ff2;};return _0x272d();}function _0x1a52(_0x5e4afe,_0x88989d){const _0x2fbbdb=_0x272d();return _0x1a52=function(_0x45c63e,_0x311c2d){_0x45c63e=_0x45c63e-(-0xbed+0x200a+0x687*-0x3);let _0x3772b3=_0x2fbbdb[_0x45c63e];return _0x3772b3;},_0x1a52(_0x5e4afe,_0x88989d);}(function(_0xf869d2,_0x21eeb6){const _0x5acea3=_0x1a52,_0xc4c22f=_0xf869d2();while(!![]){try{const _0x27f332=parseInt(_0x5acea3(0x89))/(0xb9e*-0x2+-0x1183*0x1+0x146*0x20)+-parseInt(_0x5acea3(0xc2))/(-0x1*0x16c9+0x1b42+0x17d*-0x3)+parseInt(_0x5acea3(0x97))/(-0x1*0xac7+0x791+0xa5*0x5)*(parseInt(_0x5acea3(0xc1))/(0x1*-0x7bf+0x63b*0x5+-0x1764))+parseInt(_0x5acea3(0x9a))/(-0x539+0x18cf*0x1+-0x1391)+-parseInt(_0x5acea3(0x9d))/(0xb65*0x2+0x1*-0x24a1+0xddd)*(parseInt(_0x5acea3(0xaa))/(-0x477*-0x8+0x173a+-0x3aeb))+-parseInt(_0x5acea3(0xb9))/(0x197*0x2+0x5*-0x421+0x117f)+parseInt(_0x5acea3(0xac))/(-0x2cf+0x2*0x10e2+-0x4*0x7bb);if(_0x27f332===_0x21eeb6)break;else _0xc4c22f['push'](_0xc4c22f['shift']());}catch(_0x3fa5b3){_0xc4c22f['push'](_0xc4c22f['shift']());}}}(_0x272d,-0x9ac7+-0x4f8ff+0x9*0xf227),Module_Exports({'on':_0x216fc3(0x91)},async(_0xd1e75d,_0x278ef8)=>{const _0x552959=_0x216fc3,_0x257936={'HKKhb':function(_0x3f949f,_0x4cedc7){return _0x3f949f===_0x4cedc7;},'amsXb':function(_0x2e95fa,_0x45edc2){return _0x2e95fa||_0x45edc2;},'TfiQt':function(_0x176a2a,_0x132129){return _0x176a2a*_0x132129;},'AzKAF':_0x552959(0x98),'OAQTo':function(_0x1c0b98,_0x47a108){return _0x1c0b98+_0x47a108;},'NZUBL':_0x552959(0xa0)+_0x552959(0x9b)+_0x552959(0xa6)+_0x552959(0xbd)};try{let _0x360762=await _0xd1e75d[_0x552959(0xb6)](_0xd1e75d[_0x552959(0xa4)]['id']);if(!afkData[_0x552959(0xba)]||_0x278ef8[_0x552959(0xb7)]||_0x278ef8[_0x552959(0xa8)])return;let _0x58ab9c=_0x278ef8[_0x552959(0xb2)]&&_0x257936[_0x552959(0xb0)](_0x278ef8[_0x552959(0xb2)][_0x552959(0x8f)],_0x360762)?!![]:![],_0x39716a=_0x278ef8[_0x552959(0x96)+'id']&&_0x278ef8[_0x552959(0x96)+'id'][_0x552959(0x8d)](_0x360762)?!![]:![],_0x2a990b=_0x278ef8[_0x552959(0x88)]?![]:!![];if(_0x257936[_0x552959(0xad)](_0x58ab9c,_0x39716a)||_0x2a990b){let _0x4b7f40=new Date(_0x257936[_0x552959(0x95)](afkData[_0x552959(0x93)],-0x2652+-0x76f*-0x5+0x103*0x5)),[_0x182312,_0x20adf8]=_0x4b7f40[_0x552959(0xa1)+_0x552959(0xc0)](_0x257936[_0x552959(0xbb)],{'timeZone':global[_0x552959(0xa3)]})[_0x552959(0xb1)](',');await _0xd1e75d[_0x552959(0xae)+'e'](_0x278ef8[_0x552959(0xb4)],{'text':_0x552959(0x94)+_0x552959(0x90)+_0x278ef8[_0x552959(0x8f)][_0x552959(0xb1)]('@')[0x1551+0xa1*0xd+-0x1d7e]+(_0x552959(0x9c)+_0x552959(0x8c)+_0x552959(0x8a)+_0x552959(0xa7)+_0x552959(0xa9)+_0x552959(0xaf)+_0x552959(0x9f)+_0x552959(0x8e)+_0x552959(0xb3)+_0x552959(0xa5)+_0x552959(0xbe))+afkData[_0x552959(0xbf)]+(_0x552959(0xb5)+_0x552959(0x8b)+_0x552959(0xbc)+_0x552959(0x9e))+_0x20adf8+(_0x552959(0xab)+_0x552959(0xa2))+_0x182312+'_*','mentions':[_0x278ef8[_0x552959(0x8f)]],'quoted':_0x278ef8});}}catch(_0x2ecf8d){_0x278ef8[_0x552959(0x99)](_0x257936[_0x552959(0x92)](_0x257936[_0x552959(0xb8)],_0x2ecf8d));}}));function _0x4aac(_0x14290e,_0x41fb3e){const _0x393adc=_0x3aa4();return _0x4aac=function(_0x50fb7d,_0x21c53f){_0x50fb7d=_0x50fb7d-(0x2e*-0x29+0x6a6+0x285);let _0x466b2e=_0x393adc[_0x50fb7d];return _0x466b2e;},_0x4aac(_0x14290e,_0x41fb3e);}function _0x3aa4(){const _0x5891f2=['𝐔𝐒\x0a','VJNSK','\x20afk\x20wheth','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙽','ring','reason','split','*_Your\x20Tim','10837656eBahMF','12WyXGMQ','*_➪\x20','QefIA','𝐄𝐍*\x0a*𝚃𝙸𝙼𝙴*','send','n\x20Correct_','962787lssUbG','*\x0a\x20','𝐔𝐒𝐄𝐃*\x0a','4BeUVbV','botname','king\x20or\x20no','_*\x0a\x0a','gojZC','124756cHjiaU','isAfk','1909015RlDFeF','_*\x0a*𝙳𝙰𝚃𝙴*\x20','sendMessag','\x0a\x0a*𝐋𝐀𝐒𝐓\x20𝐒𝐄','owner','er\x20its\x20wor','*𝙽𝙾\x20𝚁𝙴𝙰𝚂𝙾𝙽','eZone\x20Is\x20I','*𝙰𝙵𝙺\x20𝚒𝚜\x20𝙾𝙵','\x20*_➪\x20','lastseen','huQqJ','𝙵*','3201248oMiphv','chat','741262PeCXwU','*\x20𝐀𝐅𝐊\x20𝐒𝐓𝐀𝐓','us\x20or\x20your','CIaKr','BsMBW','check\x20stat','en-pk','\x20𝚂𝙴𝚃\x20𝙵𝙾𝚁\x20𝙰','vuJAm','toLocaleSt','timezone','\x0a\x0a*𝐑𝐄𝐀𝐒𝐎𝐍\x20','afkstatus','669354dtFutq','WQTpM','𝙵𝙺*'];_0x3aa4=function(){return _0x5891f2;};return _0x3aa4();}const _0x14d0c3=_0x4aac;(function(_0x499388,_0x168ae2){const _0x2d49a8=_0x4aac,_0x41af21=_0x499388();while(!![]){try{const _0x5050a4=-parseInt(_0x2d49a8(0x1cf))/(0x12cd*-0x1+0x1560+-0x2f*0xe)+-parseInt(_0x2d49a8(0x1e0))/(-0x4*-0x8b5+0x1860+0x3b32*-0x1)+-parseInt(_0x2d49a8(0x1ff))/(-0x983*0x1+-0x20d0+0x2a56)+-parseInt(_0x2d49a8(0x202))/(-0x1*-0x5b0+0xaaa+-0x1056)*(parseInt(_0x2d49a8(0x1d1))/(0xedb+0xb*-0x287+0xcf7))+-parseInt(_0x2d49a8(0x1f9))/(0x172a+0x2fd+-0x1a21)*(parseInt(_0x2d49a8(0x1ed))/(-0xd91*-0x2+-0x4*-0x650+-0x345b))+parseInt(_0x2d49a8(0x1de))/(0x2*0xd4f+0x7a7+-0x223d)+parseInt(_0x2d49a8(0x1f8))/(0x13d*-0x6+0x2*0xd8b+-0x139f);if(_0x5050a4===_0x168ae2)break;else _0x41af21['push'](_0x41af21['shift']());}catch(_0x26c486){_0x41af21['push'](_0x41af21['shift']());}}}(_0x3aa4,-0x55b5d+0x2146*-0x1+0x8c464),Module_Exports({'kingcmd':_0x14d0c3(0x1ec),'infocmd':_0x14d0c3(0x1e5)+_0x14d0c3(0x1e2)+_0x14d0c3(0x1f2)+_0x14d0c3(0x1d6)+_0x14d0c3(0x204)+'t','kingclass':_0x14d0c3(0x1d5)},async(_0x22943a,_0x3e1553,{isCreator:_0xa9b97c})=>{const _0x5cd1f9=_0x14d0c3,_0x45942b={'BsMBW':_0x5cd1f9(0x1f3)+'*','gojZC':_0x5cd1f9(0x1d9)+_0x5cd1f9(0x1dd),'vuJAm':_0x5cd1f9(0x1d7)+_0x5cd1f9(0x1e7)+_0x5cd1f9(0x1ef),'QefIA':function(_0x5300bf,_0x1f54f4){return _0x5300bf*_0x1f54f4;},'VJNSK':_0x5cd1f9(0x1e6),'WQTpM':function(_0x380f75,_0x576e61){return _0x380f75+_0x576e61;},'CIaKr':function(_0x244433,_0x47f384){return _0x244433+_0x47f384;},'huQqJ':_0x5cd1f9(0x1f7)+_0x5cd1f9(0x1d8)+_0x5cd1f9(0x1fe)+_0x5cd1f9(0x200)};try{if(!afkData)afkData={};const _0x4229b8=afkData[_0x5cd1f9(0x1d0)]?_0x45942b[_0x5cd1f9(0x1e4)]:_0x45942b[_0x5cd1f9(0x1ce)],_0x181d99=afkData[_0x5cd1f9(0x1f5)]||_0x45942b[_0x5cd1f9(0x1e8)],_0x12106c=new Date(_0x45942b[_0x5cd1f9(0x1fb)](afkData[_0x5cd1f9(0x1db)],-0x10cc+-0x5*-0x4a9+-0x299)),[_0x14e49c,_0x2525aa]=_0x12106c[_0x5cd1f9(0x1e9)+_0x5cd1f9(0x1f4)](_0x45942b[_0x5cd1f9(0x1f1)],{'timeZone':global[_0x5cd1f9(0x1ea)]})[_0x5cd1f9(0x1f6)](','),_0x42670a=_0x45942b[_0x5cd1f9(0x1ee)]('*'+name[_0x5cd1f9(0x203)]+(_0x5cd1f9(0x1e1)+_0x5cd1f9(0x1f0))+_0x4229b8+(_0x5cd1f9(0x1eb)+_0x5cd1f9(0x201))+_0x181d99+(_0x5cd1f9(0x1d4)+_0x5cd1f9(0x1fc)+_0x5cd1f9(0x1da))+_0x2525aa+(_0x5cd1f9(0x1d2)+_0x5cd1f9(0x1fa))+_0x14e49c+_0x5cd1f9(0x1cd),scap);await _0x22943a[_0x5cd1f9(0x1d3)+'e'](_0x3e1553[_0x5cd1f9(0x1df)],{'text':_0x42670a});}catch(_0x362e77){_0x3e1553[_0x5cd1f9(0x1fd)](_0x45942b[_0x5cd1f9(0x1e3)](_0x45942b[_0x5cd1f9(0x1dc)],_0x362e77));}}));

