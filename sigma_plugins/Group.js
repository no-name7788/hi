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

function _0x32a8(){const _0x27b7a7=['323616vRmgCs','18aqmbFf','jimp','921097ksuYDq','ezone','583956thvXZV','888QKHijw','169902pzIYkX','6uSvYzr','../lib/sig','-formatter','12111PZNxqL','67858TeXxsL','discord-xp','../lib','ma_plugins','wa-sticker','moment-tim','fs-extra','184Vqhnni','1770320YNiQbe','5vbOXiw'];_0x32a8=function(){return _0x27b7a7;};return _0x32a8();}function _0x1afd(_0x2af215,_0x34cf7e){const _0x26bd7f=_0x32a8();return _0x1afd=function(_0x8571a,_0x4d976b){_0x8571a=_0x8571a-(-0x21*0x6a+0x8ea*0x2+0x1*-0x277);let _0x33d4d7=_0x26bd7f[_0x8571a];return _0x33d4d7;},_0x1afd(_0x2af215,_0x34cf7e);}const _0x39898d=_0x1afd;(function(_0x1cf98c,_0x3fa90c){const _0x845b46=_0x1afd,_0x4d619a=_0x1cf98c();while(!![]){try{const _0xfd87a1=-parseInt(_0x845b46(0x1c4))/(-0x11*0x169+0xc1c+0xbde)+parseInt(_0x845b46(0x1b3))/(0x2386+0x1*-0x101e+-0x1366)*(parseInt(_0x845b46(0x1c6))/(-0x12e*-0x2+-0x1204*0x2+0x1*0x21af))+-parseInt(_0x845b46(0x1c1))/(-0x1*-0x8bc+-0xa1c*0x2+0x8*0x170)*(-parseInt(_0x845b46(0x1c0))/(0x1*-0x1f66+0x2183+0x86*-0x4))+parseInt(_0x845b46(0x1c2))/(0x26e0+-0x26bb+0x1f*-0x1)*(parseInt(_0x845b46(0x1b7))/(0x235d+-0x3*-0x203+-0x295f))+parseInt(_0x845b46(0x1be))/(-0x1205+-0xf1e+0x212b)*(parseInt(_0x845b46(0x1c8))/(0x919*0x2+0xdee*-0x1+-0x43b))+parseInt(_0x845b46(0x1bf))/(0x69d*0x2+-0x1390+0x660)+-parseInt(_0x845b46(0x1b6))/(0x1255+0x21ed*0x1+-0x3437)*(-parseInt(_0x845b46(0x1c7))/(0x1ed*0xd+0x1*0x742+0x7f*-0x41));if(_0xfd87a1===_0x3fa90c)break;else _0x4d619a['push'](_0x4d619a['shift']());}catch(_0x5d5145){_0x4d619a['push'](_0x4d619a['shift']());}}}(_0x32a8,0x4e45d+-0xc89f0+0xec01c));const {sck,sck1,Module_Exports,jsonformat,botpic,TelegraPh,RandomXP,fancytext,name,tlang,warndb,sleep,getAdmin,getBuffer,prefix,parsedJid}=require(_0x39898d(0x1b9)),{Sticker,createSticker,StickerTypes}=require(_0x39898d(0x1bb)+_0x39898d(0x1b5)),moment=require(_0x39898d(0x1bc)+_0x39898d(0x1c5)),Levels=require(_0x39898d(0x1b8)),fs=require(_0x39898d(0x1bd)),Jimp=require(_0x39898d(0x1c3)),sɪɢᴍᴀ_ᴍᴅ=require(_0x39898d(0x1b4)+_0x39898d(0x1ba));



//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "join",
            infocmd: "joins group by link",
            kingclass: "owner",
	 kingpath: __filename,
            use: 'group link',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`*_Provide me a Group Link_*`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com")) return await citel.reply("*_Link Invalid, Please Send a valid whatsapp Group Link!_*");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("*_Group Joined_*"))
                .catch((err) => citel.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------

    //-----------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "support",
        shortcut: ["sgc"],
        infocmd: "Sends official support group link.",
        kingclass: "developer",
        use: ""

    },
    async(sigma, man, text,) => {
function _0x2daf(_0x4a0439,_0x339063){const _0x8f5be4=_0x3e3a();return _0x2daf=function(_0x553f00,_0x3705b2){_0x553f00=_0x553f00-(-0x1beb*-0x1+0x9b1*-0x2+-0x81b);let _0x29959d=_0x8f5be4[_0x553f00];return _0x29959d;},_0x2daf(_0x4a0439,_0x339063);}const _0x43123c=_0x2daf;(function(_0x481e8d,_0x8122eb){const _0xeb4fde=_0x2daf,_0x5ee88e=_0x481e8d();while(!![]){try{const _0x17942f=parseInt(_0xeb4fde(0x89))/(0xd0d+-0x1800+-0x57a*-0x2)+-parseInt(_0xeb4fde(0x72))/(-0x1972+-0x1c95+-0x601*-0x9)+-parseInt(_0xeb4fde(0x75))/(-0x1f24+0x1879+-0x11d*-0x6)*(-parseInt(_0xeb4fde(0x76))/(0x1d7*-0x15+-0x19bd+0x4064))+-parseInt(_0xeb4fde(0x87))/(-0x11c3+0xb91+0x637)+-parseInt(_0xeb4fde(0x73))/(0xfbf*-0x1+-0xc2*0x17+0x1*0x2133)*(-parseInt(_0xeb4fde(0x85))/(-0xabd+-0x19f5*0x1+0x24b9*0x1))+-parseInt(_0xeb4fde(0x7b))/(-0x26e1*0x1+0x2629*-0x1+0x4d12)+parseInt(_0xeb4fde(0x77))/(0x21e*0xc+0x7*0x5f+-0x1bf8)*(parseInt(_0xeb4fde(0x8a))/(-0x2*-0xbb3+-0x52e+-0x122e));if(_0x17942f===_0x8122eb)break;else _0x5ee88e['push'](_0x5ee88e['shift']());}catch(_0x5477bc){_0x5ee88e['push'](_0x5ee88e['shift']());}}}(_0x3e3a,0x3b9d*-0x19+0x146867+-0xc8f8));const slog=await getBuffer(global[_0x43123c(0x71)]);function _0x3e3a(){const _0xbc6bc2=['\x20*•sɪɢᴍᴀ\x20ᴹ','8010112FFGhbZ','sɪɢᴍᴀ\x20ᴹᴰ-s','\x0a┃✗\x20*_•ᴅᴇᴠ','ᴀᴍᴇ•_*\x20\x0a┃✗','*_•ɢʀᴏᴜᴘ\x20ɴ','ᴜᴘᴘᴏʀᴛ','*\x20\x0a┃✗\x20*_•ɢ','━━━━⦿','𝐢𝐫\x0a┗━━━━━━','𝐌𝐚𝐡𝐞𝐫\x20𝐙𝐮𝐛𝐚','316421rzMeBv','chat','2806175akTXmM','┏━━⟪⟪\x20🅼♥︎❚❚','278245ODqDti','730eksNce','_*\x20','ᴇʟᴏᴘᴇʀ•_*\x20','ᴰ-sᴜᴘᴘᴏʀᴛ•','sendMessag','slogo','463178wZfjEn','150MPNENH','Easy\x20to\x20Us','3LcuwZM','4128164SwStnK','31833TCxRcM','♥︎🆉\x20⟫━⦿\x0a┃✗\x20','ʀᴏᴜᴘ\x20ʟɪɴᴋ•'];_0x3e3a=function(){return _0xbc6bc2;};return _0x3e3a();}await sigma[_0x43123c(0x70)+'e'](man[_0x43123c(0x86)],{'image':slog,'text':_0x43123c(0x88)+_0x43123c(0x78)+_0x43123c(0x7f)+_0x43123c(0x7e)+_0x43123c(0x7a)+_0x43123c(0x6f)+_0x43123c(0x81)+_0x43123c(0x79)+_0x43123c(0x8b)+sgc+(_0x43123c(0x7d)+_0x43123c(0x6e)+_0x43123c(0x84)+_0x43123c(0x83)+_0x43123c(0x82)),'contextInfo':{'externalAdReply':{'title':_0x43123c(0x7c)+_0x43123c(0x80),'body':_0x43123c(0x74)+'e','thumbnail':slog,'mediaType':0x4,'mediaUrl':'','sourceUrl':sgc}}});
   
    }
)
//===========================================================================
Module_Exports({
    kingcmd: "gdesc",
    shortcut : ['setgdesc','setdesc'],
    infocmd: "Set Description of Group",
    kingclass: "group",
    kingpath: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*_Provide Description text, You wants to Set_*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateDescription(citel.chat, text);
        citel.reply('*_Group description Updated Successfuly!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"Error While Updating Group Description\nReason : " + e, } ,{quoted : citel})   }
}
)
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "gname",
    shortcut : ['setgname','setname'],
    infocmd: "Set name of Group",
    kingclass: "group",
    kingpath: __filename,
    use: 'enter Description Text',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*_Provide Text To Update Group Name_*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().botAdmin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateSubject(citel.chat, text)
        citel.reply('*_Group Name Updated Successfuly!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"_Error While Updating Group Name_\nReason : " + e, } ,{quoted : citel})   }
}
)
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "antifake",
	shortcut: ["afake"],
        infocmd: "Allow  to Join Group For Specific Country Code",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        const _0x3d53e3=_0x4d30;(function(_0x3289e8,_0x35a484){const _0x3f55e9=_0x4d30,_0x4c3533=_0x3289e8();while(!![]){try{const _0x57c2cd=-parseInt(_0x3f55e9(0x15f))/0x1+-parseInt(_0x3f55e9(0x154))/0x2*(-parseInt(_0x3f55e9(0x15a))/0x3)+-parseInt(_0x3f55e9(0x163))/0x4*(parseInt(_0x3f55e9(0x145))/0x5)+-parseInt(_0x3f55e9(0x143))/0x6*(-parseInt(_0x3f55e9(0x14c))/0x7)+-parseInt(_0x3f55e9(0x149))/0x8+-parseInt(_0x3f55e9(0x142))/0x9+parseInt(_0x3f55e9(0x14f))/0xa;if(_0x57c2cd===_0x35a484)break;else _0x4c3533['push'](_0x4c3533['shift']());}catch(_0x3b6134){_0x4c3533['push'](_0x4c3533['shift']());}}}(_0x4e47,0x29ecc));if(!citel[_0x3d53e3(0x14a)])return citel[_0x3d53e3(0x146)](tlang()['group']);const groupMetadata=citel[_0x3d53e3(0x14a)]?await Void[_0x3d53e3(0x151)](citel['chat'])[_0x3d53e3(0x13f)](_0x315e70=>{}):'',participants=citel[_0x3d53e3(0x14a)]?await groupMetadata[_0x3d53e3(0x140)]:'',groupAdmins=await getAdmin(Void,citel),isAdmins=citel[_0x3d53e3(0x14a)]?groupAdmins[_0x3d53e3(0x148)](citel[_0x3d53e3(0x159)]):![];if(!isAdmins&&!isCreator)return citel[_0x3d53e3(0x146)](tlang()['admin']);function _0x4d30(_0x518d0a,_0x4df86b){const _0x4e47ac=_0x4e47();return _0x4d30=function(_0x4d308,_0x5dbaea){_0x4d308=_0x4d308-0x13e;let _0x3f5c8a=_0x4e47ac[_0x4d308];return _0x3f5c8a;},_0x4d30(_0x518d0a,_0x4df86b);}let checkinfo=await sck[_0x3d53e3(0x141)]({'id':citel[_0x3d53e3(0x162)]})||await new sck({'id':citel[_0x3d53e3(0x162)]})[_0x3d53e3(0x14b)]();if(text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x152))||text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x158))||text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x144))){if(checkinfo[_0x3d53e3(0x15d)]==_0x3d53e3(0x155))return await citel[_0x3d53e3(0x15e)](_0x3d53e3(0x147));return await sck[_0x3d53e3(0x14e)]({'id':citel[_0x3d53e3(0x162)]},{'antifake':'false'}),await citel[_0x3d53e3(0x15e)]('*Anti_Fake\x20Disable\x20Succesfully!*');}else{if(!text)return await citel[_0x3d53e3(0x15e)]('*_Antifake\x20'+(checkinfo[_0x3d53e3(0x15d)]===_0x3d53e3(0x155)?_0x3d53e3(0x156):_0x3d53e3(0x150)+checkinfo['antifake']+'\x22')+_0x3d53e3(0x160));}function _0x4e47(){const _0x1417c1=['sender','1119OfZcoi','toLowerCase','antifake\x2092_*','antifake','send','95149nQhOqw',`\x20Country\x20Code!_*\x0a\x20*Provide\x20Country\x20code\x20to\x20Update\x20Antifake\x20Status*\x0a*Ex:\x20_${prefix}antifake\x2092_*`,'startsWith','chat','4OBMwaq','*Anti_Fake\x20Succesfully\x20set\x20to\x20\x22','catch','participants','findOne','803394fyIvKZ','1356612CgXDOm','disable','319485kWURrN','reply','*Anti_Fake\x20Already\x20Disabled\x20In\x20Current\x20Chat!*','includes','2030144kUUVSD','isGroup','save','7OpPQtf','*_Please\x20provide\x20a\x20country\x20code\x20First_*\x0a\x20*_Only\x20numbers\x20to\x20join\x20this\x20group._*\x0a*_eg:\x20','updateOne','4462100VzFSpa','set\x20to\x20\x22','groupMetadata','off','split','8ZBiSLh','false','Not\x20set\x20to\x20any','\x22!*\x0a*_Now\x20People\x20Joined\x20Group\x20Who\x27s\x20Number\x20Start\x20With\x20','deact'];_0x4e47=function(){return _0x1417c1;};return _0x4e47();}let country_code=text?parseInt(text[_0x3d53e3(0x153)]('\x20')[0x0]):![];if(!text||!country_code||isNaN(country_code)||country_code===0x0)return await citel[_0x3d53e3(0x15e)](_0x3d53e3(0x14d)+prefix+_0x3d53e3(0x15c));else{if(country_code)return await sck[_0x3d53e3(0x14e)]({'id':citel['chat']},{'antifake':''+country_code}),await citel['send'](_0x3d53e3(0x13e)+country_code+_0x3d53e3(0x157)+country_code+'_*');else return await citel['send']('*_Please\x20provide\x20a\x20Valid\x20country\x20code\x20First_*\x0a\x20*_Only\x20numbers\x20to\x20join\x20this\x20group._*\x0a*_Ex:\x20'+prefix+_0x3d53e3(0x15c));}
});

//---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "antidemote",
        shortcut: ["antidm"],
        infocmd: "Detects Promote and Automaticaly demote promoted person.", 
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antidemote == 'true') return await citel.send("*_Anti_Demote Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'true' });
        return await citel.send("*_Anti_Demote Enable Succesfully!_ _No One Demote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antidemote == 'false') return await citel.send("*_Anti_Demote Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'false' });
        return await citel.send("*_Anti_Demote Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To Enable & Disable Demoting Peoples!_*`)
});
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "antipromote",
        shortcut: ["antipm"],
        infocmd: "Detects Promote and Automaticaly demote promoted person.", 
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antipromote == 'true') return await citel.send("*_Anti_Promote Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'true' });
        return await citel.send("*_Anti_Promote Enable Succesfully!_ _No One Promote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antipromote == 'false') return await citel.send("*_Anti_Promote Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'false' });
        return await citel.send("*_Anti_Promote Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To Stop Promoting Peoples in Chat_*`)
});
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "pdm",
        infocmd: "Detect Promote/Demote Users And Send Alerts in Chat ",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.pdm == 'true') return await citel.send("*_Promote/Demote Alerts Already Enabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { pdm : 'true' });
        return await citel.send("*_Promote/Demote Alerts Enable Succesfully!_*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.pdm == 'false') return await citel.send("*_Promote/Demote Alerts Already Disabled In Current Chat!_*")
        await sck.updateOne({ id: citel.chat }, { pdm : 'false' });
        return await citel.send("*_Promote/Demote Alerts Disable Succesfully!_*")
      }
      else return await citel.reply(`*_Please Toggle between "On" And "Off"._*\n*_To get And Stop Promote/Demote Alerts_*`)
});
    //---------------------------------------------------------------------------
 Module_Exports({
    kingcmd: "warn",
    infocmd: "Warns user in Group.",
    kingclass: "group",
    kingpath: __filename,
    use: 'quote|reply|number',
},
async(Void, citel, text,{ isCreator }) => {
     if (!citel.isGroup) return citel.reply(tlang().group)
    const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) return citel.reply(tlang().admin)
const S=m;function Z(){const F=['126402oKAcRa','date','*_Removing\x20User\x20because\x20Warn\x20limit\x20exceeded_*\x0a\x0a*_Total\x20Warnings._*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','┃\x20*_•𝚃𝙸𝙼𝙴•_*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\x0a┃\x20*_•𝙸𝙽 𝙶𝚁𝙾𝚄𝙿•_*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','-★-❖-♕- *𝚆𝙰𝚁𝙽* -♕-❖-★-\x0a*_•𝚄𝚂𝙴𝚁•_*\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*_There\x20are\x20total\x20','split','┃\x20*_•𝚆𝙰𝚁𝙽𝙴𝙳-𝙱𝚈•_*\x20','length','sender','setDefault','group','Asia/karachi','../Setting','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('*_Please\x20Reply\x20a\x20\User_*');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0a*_•𝚁𝙴𝙰𝚂𝙾𝙽•_*\x20'+text+'\x0a*_•𝚆𝙰𝚁𝙽𝙴𝙳-𝙱𝚈•_*\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const name=require(S(0x1ff));if(h[S(0x1fa)]>name['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings._*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='┃\x20*_•𝚁𝙴𝙰𝚂𝙾𝙽•_*\x20'+h[i][S(0x1ee)]+'\x0a┃ *_•𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝙳-𝙱𝚈•_* *𝙼 𝚉𝚄𝙱𝙰𝙸𝚁*\x0a┗━━━━━━━━━━⦿\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
    
}
)
    
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "common",
    infocmd: "Get common participants in two groups, and kick using .common kick, jid",
    kingclass: "owner",
    kingpath: __filename,

},
async(Void, citel, text,{ isCreator }) => {         
var _0x87a531=_0xd64c;(function(_0x26f08a,_0x14609e){var _0x98c35b=_0xd64c,_0x1aec32=_0x26f08a();while(!![]){try{var _0x14857e=-parseInt(_0x98c35b(0xcb))/0x1+-parseInt(_0x98c35b(0xcf))/0x2+parseInt(_0x98c35b(0xe7))/0x3*(parseInt(_0x98c35b(0xdb))/0x4)+-parseInt(_0x98c35b(0xe4))/0x5+-parseInt(_0x98c35b(0xd0))/0x6+parseInt(_0x98c35b(0xd2))/0x7+parseInt(_0x98c35b(0xda))/0x8*(parseInt(_0x98c35b(0xdf))/0x9);if(_0x14857e===_0x14609e)break;else _0x1aec32['push'](_0x1aec32['shift']());}catch(_0x311bff){_0x1aec32['push'](_0x1aec32['shift']());}}}(_0x4a96,0xef9b1));let jids=await parsedJid(text);var group1,group2;if(jids[_0x87a531(0xee)]>0x1)group1=jids[0x0][_0x87a531(0xca)](_0x87a531(0xd5))?jids[0x0]:citel[_0x87a531(0xdd)],group2=jids[0x1][_0x87a531(0xca)](_0x87a531(0xd5))?jids[0x1]:citel[_0x87a531(0xdd)];else{if(jids[_0x87a531(0xee)]==0x1)group1=citel[_0x87a531(0xdd)],group2=jids[0x0]['includes']('@g.us')?jids[0x0]:citel[_0x87a531(0xdd)];else return await citel['send'](_0x87a531(0xdc));}if(group2===group1)return await citel[_0x87a531(0xd1)](_0x87a531(0xe2));var g1=await Void['groupMetadata'](group1),g2=await Void['groupMetadata'](group2),common=g1[_0x87a531(0xe8)]['filter'](({id:_0x215617})=>g2['participants'][_0x87a531(0xd3)](({id:_0xa9d3a3})=>_0xa9d3a3===_0x215617))||[];if(common[_0x87a531(0xee)]==0x0)return await citel[_0x87a531(0xd1)]('Theres\x20no\x20Common\x20Users\x20in\x20Both\x20Groups');let kick=text[_0x87a531(0xe9)](',')[0x0][_0x87a531(0xce)]()===_0x87a531(0xe3)?!![]:![],reason=![];var heading=_0x87a531(0xec);if(kick){let chat={'chat':group1};heading='\x20\x20*Kicking\x20Common\x20Participants*';const groupAdmins=await getAdmin(Void,chat)||[];var botNumber=await Void['decodeJid'](Void['user']['id']),isBotAdmins=groupAdmins[_0x87a531(0xca)](botNumber)||![],isAdmins=groupAdmins[_0x87a531(0xca)](citel[_0x87a531(0xe0)])||![];(!isBotAdmins||!isAdmins)&&(kick=![],heading=_0x87a531(0xe6)),!isBotAdmins&&(reason='*❒\x20Reason:*\x20_I\x20Can\x27t\x20Kick\x20Common\x20Participants\x20Without\x20Getting\x20Admin\x20Role,So\x20Provide\x20Admin\x20Role\x20First,_\x0a'),!isAdmins&&(reason='*❒\x20Reason:*\x20_Only\x20Group\x20Admin\x20Can\x20Kick\x20Common\x20Users\x20Through\x20This\x20Command_\x0a');}function _0xd64c(_0x32c6f8,_0x2d697c){var _0x4a96f3=_0x4a96();return _0xd64c=function(_0xd64cbf,_0x5aabfa){_0xd64cbf=_0xd64cbf-0xc9;var _0x256505=_0x4a96f3[_0xd64cbf];return _0x256505;},_0xd64c(_0x32c6f8,_0x2d697c);}function _0x4a96(){var _0x375d41=['sender','push','Please\x20Provide\x20Valid\x20Group\x20Jid','kick','7605210eeYGmA','923184474176@s.whatsapp.net','\x20\x20*乂\x20Can\x27t\x20Kick\x20Common\x20Participants*','138543ZVCNcn','participants','split','@s.whatsapp.net','\x0a*❒\x20Group2:*\x20','\x20\x20\x20*List\x20Of\x20Common\x20Participants*','user','length','caption','includes','946278jKrKhT','_Members_\x0a\x0a\x0a','\x0a*❒\x20Group1:*\x20','trim','1283014cwDqub','6253704DutAwi','send','12524057XHlruT','some','\x0a\x0a\x0a©','@g.us','923004591719@s.whatsapp.net','\x20\x20*⬡*\x20@','\x20\x20\x20\x0a','groupParticipantsUpdate','3132728ehxlpC','120EgDLWk',`*_Please\x20Provide\x20a\x20Group\x20Jid,_*\x0a*To\x20Get\x20common\x20participants\x20in\x20two\x20groups,*\x0a*Also\x20kick\x20using\x20${prefix}common\x20kick,\x20jid*`,'chat','Error\x20removing\x20participants:','45UpvHCU'];_0x4a96=function(){return _0x375d41;};return _0x4a96();}var msg='\x20'+heading+_0x87a531(0xd8)+(reason?reason:'')+_0x87a531(0xcd)+g1['subject']+_0x87a531(0xeb)+g2['subject']+'\x0a*❒\x20Common\x20Counts:*\x20_'+common[_0x87a531(0xee)]+_0x87a531(0xcc),commons=[];common['map'](async _0x5484ff=>{var _0x4ac9dd=_0x87a531;msg+=_0x4ac9dd(0xd7)+_0x5484ff['id'][_0x4ac9dd(0xe9)]('@')[0x0]+'\x0a',commons[_0x4ac9dd(0xe1)](_0x5484ff['id']['split']('@')[0x0]+_0x4ac9dd(0xea));}),await citel[_0x87a531(0xd1)](msg+(_0x87a531(0xd4)+name[_0x87a531(0xc9)]),{'mentions':commons});if(kick&&!reason)try{var botNumber=await Void['decodeJid'](Void[_0x87a531(0xed)]['id']);for(const user of commons){if(botNumber===user||user===_0x87a531(0xd6)||user===_0x87a531(0xe5))continue;await new Promise(_0x5d963f=>setTimeout(_0x5d963f,0x3e8)),await Void[_0x87a531(0xd9)](group1,[user],'remove');}}catch(_0x5636c1){console['error'](_0x87a531(0xde),_0x5636c1);}return;
});
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "diff",
    infocmd: "Get difference of participants in two groups",
    kingclass: "owner",
    kingpath: __filename,

},
async(Void, citel, text,{ isCreator }) => {          
function _0x32d6(_0x1c5452,_0xd9c18b){var _0x2c296b=_0x2c29();return _0x32d6=function(_0x32d6d6,_0x371807){_0x32d6d6=_0x32d6d6-0x1ae;var _0x3418f7=_0x2c296b[_0x32d6d6];return _0x3418f7;},_0x32d6(_0x1c5452,_0xd9c18b);}function _0x2c29(){var _0x45aad0=['\x20\x20*⬡*\x20@','send','includes','filter','\x0a*❒\x20Differ\x20Counts:*\x20_','length','participants','3634530paWHrR','subject','48PrVAuc','130RPKGzs','chat','\x0a\x0a\x0a©','8110230jpjYbb','groupMetadata','\x20\x20*乂\x20List\x20Of\x20Different\x20Participants*\x20\x0a\x0a*❒\x20Group1:*\x20','7080cVcMZN','4qYOlNg','split','1733097idxGVh','@s.whatsapp.net','push','@g.us','\x0a*❒\x20Group2:*\x20','321146RceypW','map','*_Please\x20Provide\x20a\x20Group\x20Jid_*\x0a*_To\x20Get\x20Different\x20participants\x20with\x20in\x20group_*','190807KCVkbV','388449gIdOpg','_Members_\x0a\x0a\x0a'];_0x2c29=function(){return _0x45aad0;};return _0x2c29();}var _0x1d7f58=_0x32d6;(function(_0x17cc23,_0x4b891e){var _0x39378e=_0x32d6,_0x3fed02=_0x17cc23();while(!![]){try{var _0x3a2e9b=parseInt(_0x39378e(0x1c5))/0x1+-parseInt(_0x39378e(0x1ba))/0x2+parseInt(_0x39378e(0x1bd))/0x3*(-parseInt(_0x39378e(0x1bb))/0x4)+parseInt(_0x39378e(0x1b7))/0x5+-parseInt(_0x39378e(0x1b1))/0x6+parseInt(_0x39378e(0x1c2))/0x7*(-parseInt(_0x39378e(0x1b3))/0x8)+-parseInt(_0x39378e(0x1c6))/0x9*(-parseInt(_0x39378e(0x1b4))/0xa);if(_0x3a2e9b===_0x4b891e)break;else _0x3fed02['push'](_0x3fed02['shift']());}catch(_0x4a2b92){_0x3fed02['push'](_0x3fed02['shift']());}}}(_0x2c29,0xde944));let jids=await parsedJid(text);var group1,group2;if(jids[_0x1d7f58(0x1af)]>0x1)group1=jids[0x0][_0x1d7f58(0x1ca)]('@g.us')?jids[0x0]:citel[_0x1d7f58(0x1b5)],group2=jids[0x1][_0x1d7f58(0x1ca)]('@g.us')?jids[0x1]:citel[_0x1d7f58(0x1b5)];else{if(jids[_0x1d7f58(0x1af)]==0x1)group1=citel[_0x1d7f58(0x1b5)],group2=jids[0x0][_0x1d7f58(0x1ca)](_0x1d7f58(0x1c0))?jids[0x0]:citel['chat'];else return await citel['send'](_0x1d7f58(0x1c4));}if(group2===group1)return await citel[_0x1d7f58(0x1c9)]('Please\x20Provide\x20Valid\x20Group\x20Jid');var g1=await Void[_0x1d7f58(0x1b8)](group1),g2=await Void[_0x1d7f58(0x1b8)](group2),diff=g1[_0x1d7f58(0x1b0)][_0x1d7f58(0x1cb)](({id:_0x240eaa})=>!g2['participants']['some'](({id:_0x5fe1e0})=>_0x5fe1e0===_0x240eaa))||[];if(diff[_0x1d7f58(0x1af)]==0x0)return await citel[_0x1d7f58(0x1c9)]('Theres\x20no\x20Different\x20Users\x20in\x20Both\x20Groups');var msg=_0x1d7f58(0x1b9)+g1[_0x1d7f58(0x1b2)]+_0x1d7f58(0x1c1)+g2[_0x1d7f58(0x1b2)]+_0x1d7f58(0x1ae)+diff[_0x1d7f58(0x1af)]+_0x1d7f58(0x1c7),diffs=[];diff[_0x1d7f58(0x1c3)](async _0x299f43=>{var _0x5dc1b3=_0x1d7f58;msg+=_0x5dc1b3(0x1c8)+_0x299f43['id'][_0x5dc1b3(0x1bc)]('@')[0x0]+'\x0a',diffs[_0x5dc1b3(0x1bf)](_0x299f43['id'][_0x5dc1b3(0x1bc)]('@')[0x0]+_0x5dc1b3(0x1be));});return await citel[_0x1d7f58(0x1c9)](msg+(_0x1d7f58(0x1b6)+name['caption']),{'mentions':diffs});
});
//---------------------------------------------------------------------------
     Module_Exports({
         kingcmd: "block",
         infocmd: "blocks that person",
         kingclass: "owner",
         kingpath: __filename,
         use: 'quote/reply user.'
     },
     async(bot, man, text,{isCreator}) => {
         if (!isCreator) man.reply(tlang().owner);
         let users = man.quoted ? man.quoted.sender : man.mentionedJid[0] ? man.mentionedJid[0] : "";
         if(!users)  return await send.reply("*_Reply/Mention a User_*")
         let num = users.replace("@s.whatsapp.net","")
         await bot.updateBlockStatus(users, "block")
         .then((res) => man.reply(`*@${num} _blocked Successfully.._!*`,{mentions : [ users , ]}))		    //console.log(jsonformat(res))
             .catch((err) => console.log(jsonformat(err)));
 
     }
 )
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "unblock",
            infocmd: "Unblocked to the quoted user.",
            kingclass: "owner",
            kingpath: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : false ;
            if(!users)  return await citel.reply("*_Rreply/mention an User_*")
	    let num = users.replace("@s.whatsapp.net","")
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => citel.send(`*@${num} _Unblocked Succesfully..!_*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "invite",
        shortcut:["glink"],
        infocmd: "get group link.",
        kingclass: "group",
        kingpath: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	    const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return citel.reply(tlang().admin);
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("*_Group Invite Link Is Here_* \n*_"+mergedString+"_*");
	
    }
	)
	
  //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "revoke",
        infocmd: "reset group link.",
        kingclass: "group",
        kingpath: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	if (!isBotAdmins) return citel.reply(tlang().admin);
	    
var code = await Void.groupRevokeInvite(citel.chat)
return citel.reply("*_Group Link Revoked SuccesFully_*");
	
    }
	)
    //---------------------------------------------------------------------------
         //---------------------------------------------------------------------------
         Module_Exports({
            kingcmd: "onlyadmin",
            shortcut:["antimessge","oadmin"],
            infocmd: "Only Admins Allow to Send Message, Others kick.",
            kingclass: "group",
            kingpath: __filename
        },
        async(Void, citel, text , { cmdName ,isCreator}) => {
          const _0x4b01ef=_0x5a6c;(function(_0x42afd8,_0x18cab2){const _0x4e6b35=_0x5a6c,_0x2aa161=_0x42afd8();while(!![]){try{const _0x19acf1=parseInt(_0x4e6b35(0xd6))/0x1*(-parseInt(_0x4e6b35(0xd4))/0x2)+parseInt(_0x4e6b35(0xf6))/0x3*(-parseInt(_0x4e6b35(0xf7))/0x4)+parseInt(_0x4e6b35(0xdb))/0x5+-parseInt(_0x4e6b35(0xe4))/0x6*(parseInt(_0x4e6b35(0xd7))/0x7)+parseInt(_0x4e6b35(0xf2))/0x8*(-parseInt(_0x4e6b35(0xe2))/0x9)+parseInt(_0x4e6b35(0xec))/0xa+parseInt(_0x4e6b35(0xe7))/0xb;if(_0x19acf1===_0x18cab2)break;else _0x2aa161['push'](_0x2aa161['shift']());}catch(_0x44723d){_0x2aa161['push'](_0x2aa161['shift']());}}}(_0x4da6,0xd9095));if(!citel[_0x4b01ef(0xdd)])return citel[_0x4b01ef(0xd2)](tlang()[_0x4b01ef(0xd0)]);const groupAdmins=await getAdmin(Void,citel),botNumber=await Void[_0x4b01ef(0xf5)](Void['user']['id']),isAdmins=citel['isGroup']?groupAdmins[_0x4b01ef(0xe3)](citel['sender']):![],isBotAdmins=citel[_0x4b01ef(0xdd)]?groupAdmins[_0x4b01ef(0xe3)](botNumber):![];function _0x5a6c(_0x3f3e7c,_0x356792){const _0x4da637=_0x4da6();return _0x5a6c=function(_0x5a6c42,_0xf5f5e0){_0x5a6c42=_0x5a6c42-0xcf;let _0x21b611=_0x4da637[_0x5a6c42];return _0x21b611;},_0x5a6c(_0x3f3e7c,_0x356792);}if(!isAdmins&&!isCreator)return citel['reply'](tlang()[_0x4b01ef(0xf3)]);function _0x4da6(){const _0x9c8c1f=['enable','*_Please,\x20Provide\x20Admin\x20Role\x20First_*','3469104gRwIaq','admin','\x20Succesfully\x20set\x20to\x20kick\x20message\x20senders!_*\x0a*_Now\x20Only\x20Admins\x20Allow\x20to\x20Send\x20Message\x20in\x20Group_*','decodeJid','3LabDje','3529436fszUMZ','Disabled','act','group','deact','reply','*_Onlyadmin\x20Already\x20Disabled\x20in\x20Current\x20Chat_*','206cFcBdy','onlyadmin','13014HUmNeg','425446MzPaLC','send','toLowerCase','off','6182310CJrGPU','\x20in\x20this\x20Group!_*\x0a\x20*_Use:\x20','isGroup','announcement','\x20Succesfully\x20Disable\x20in\x20group!_*\x0a*_Now\x20everyone\x20Send\x20Message\x20in\x20Group_*','findOne','split','27jvVnaa','includes','54OSXEKx','false','updateOne','31428661iArpHf','startsWith','\x20on/off_*','groupSettingUpdate','true','8660850UseQjN','save','chat','*_Onlyadmin\x20Already\x20Enabled\x20in\x20Current\x20Chat_*'];_0x4da6=function(){return _0x9c8c1f;};return _0x4da6();}let checkinfo=await sck[_0x4b01ef(0xe0)]({'id':citel[_0x4b01ef(0xee)]})||await new sck({'id':citel[_0x4b01ef(0xee)]})[_0x4b01ef(0xed)](),textt=text?text[_0x4b01ef(0xd9)]()['trim']():![],action=textt?textt[_0x4b01ef(0xe1)]('\x20')[0x0]:![];if(!action)return await citel[_0x4b01ef(0xd8)]('*_'+cmdName+'\x20'+(checkinfo[_0x4b01ef(0xd5)]==='false'?_0x4b01ef(0xf8):'Enabled')+_0x4b01ef(0xdc)+(prefix+cmdName)+_0x4b01ef(0xe9));else{if(action[_0x4b01ef(0xe8)](_0x4b01ef(0xda))||action[_0x4b01ef(0xe8)](_0x4b01ef(0xd1))||action[_0x4b01ef(0xe8)]('disable')){if(checkinfo['onlyadmin']===_0x4b01ef(0xe5))return await citel[_0x4b01ef(0xd2)](_0x4b01ef(0xd3));return await sck['updateOne']({'id':citel[_0x4b01ef(0xee)]},{'onlyadmin':_0x4b01ef(0xe5)}),await citel[_0x4b01ef(0xd8)]('*'+cmdName+_0x4b01ef(0xdf));}else{if(action[_0x4b01ef(0xe8)]('on')||action[_0x4b01ef(0xe8)](_0x4b01ef(0xcf))||action[_0x4b01ef(0xe8)](_0x4b01ef(0xf0))){if(checkinfo[_0x4b01ef(0xd5)]===_0x4b01ef(0xeb))return await citel[_0x4b01ef(0xd2)](_0x4b01ef(0xef));if(isBotAdmins)return await sck[_0x4b01ef(0xe6)]({'id':citel[_0x4b01ef(0xee)]},{'onlyadmin':_0x4b01ef(0xeb)}),await Void[_0x4b01ef(0xea)](citel['chat'],_0x4b01ef(0xde)),await citel[_0x4b01ef(0xd8)]('*'+cmdName+_0x4b01ef(0xf4));else return await citel[_0x4b01ef(0xd2)](_0x4b01ef(0xf1));}else return await citel[_0x4b01ef(0xd2)]('*_Please\x20Provide\x20Valid\x20Instruction_*\x0a*Ex:\x20_'+(prefix+cmdName)+'\x20on/off_*');}}
    })
    
    
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "devwarn",
        shortcut: ['dwarn'],
        infocmd: "sends warning from developer",
        kingclass: "developer",
        use: 'reply to any person',
    },
    async(sigma, person, memo,{isCreator}) => {
        if (!isCreator) return person.reply(tlang().owner)
        if (!person.isGroup) return person.reply(tlang().group);
        if (!person.quoted) return person.reply(`Please reply to a Person`);
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
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿  
┃✗ *•ᴅᴇᴠᴇʟᴏᴘᴇʀ's ᴡᴀʀɴɪɴɢ•*
┃✗ *•ɴᴀᴍᴇ•* ${tname}
┃✗ *•ɴᴜᴍ•* ${num}
┃✗   *•ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ•*
┃✗ *•ᴅᴏɴ'ᴛ ᴀʙᴜsᴇ•*
┃✗ *•ᴅᴏɴ'ᴛ sᴘᴀᴍ•*
┃✗ *•ᴅᴏɴ'ᴛ ᴜsᴇ ʙᴏᴛ•*
┃✗ *•ᴅᴏɴ'ᴛ sᴇɴᴅ ʟɪɴᴋs•*
┃✗ *•ᴏᴛʜᴇʀ ᴡɪsᴇ•*
┃✗ *•ʏᴏᴜ ᴡɪʟʟ•*
┃✗ *•ʙᴇ ᴋɪᴄᴋᴇᴅ•*
┃✗ *•ᴀᴜᴛʜᴏʀ•* ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ
┗━━━━━━━━━━⦿      `
    
    
    let king = {
        image: { url: pfp},
        caption: Maher,
        footer: tlang().footer,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: `${name.ownername}`,
                body: ``,
                thumbnail: log0,
                mediaType: 4,
                mediaUrl: '',
                sourceUrl: `${waUrl}`,}}}
       
    return await sigma.sendMessage(person.chat, king, {   quoted: person, });
    }
    )
    //---------------------------------------------------------------------------
   Module_Exports({
    kingcmd: "antibot",
    infocmd: "kick Bot Users from Group!",
    kingclass: "group",
    kingpath: __filename
  }, async (Void, citel, text, {
    cmdName,
    isCreator
  }) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    if (!isAdmins && !isCreator) {
      return citel.reply(tlang().admin);
    }
    let checkinfo = (await sck.findOne({
      'id': citel.chat
    })) || (await new sck({
      'id': citel.chat
    }).save());
    let textt = text ? text.toLowerCase().trim() : false;
    let action = textt ? textt.split(" ")[0x0] : false;
    if (!action) {
        return await citel.send("*_Antibadwords " + (checkinfo.antibot === "false" ? "Disabled" : 'Enabled') + " in this Group!_* \n " + (checkinfo.antibot === 'false' ? '' : "*Current Mode:* _" + checkinfo.antibot + '_') + `\n\n*Anti Bad_Words Modes:*\n  ${prefix}antibot kick (Delete Bad_Words & Kick Senders)\n  ${prefix}antibot delete (Delete Bad_Words Only)\n  ${prefix}antibot off (Disable Anti Bad_Words in chat)\n\n\n` + name.caption);
      } else {
        if (action.startsWith("off") || action.startsWith("deact") || action.startsWith("disable")) {
          await sck.updateOne({
            'id': citel.chat
          }, {
            'antibot': "false"
          });
          return await citel.send("*_Anti Bad_Words Disabled Succesfully!_*");
        } else {
          if (action.startsWith('kick')) {
            await sck.updateOne({
              'id': citel.chat
            }, {
              'antibot': "kick"
            });
            return await citel.send("*_AntiBot Succesfully Set To Kick Other's Bot!_*");
          } else {
            if (action.startsWith('delete')) {
              await sck.updateOne({
                'id': citel.chat
              }, {
                'antibot': "delete"
              });
              return await citel.send("*_Antibot Succesfully Set To Delete Bot Messages From Chat!_*");
            } else {
              return await citel.send("*_Please Provide Valid Instruction_*\n*Eg: _" + prefix + "antibot kick/delete/off_*");
            }
          }
        }
      }
  });
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "disable",
        infocmd: "disable cmds in Group.!",
        kingclass: "group",
        kingpath: __filename
    },
    async(Void, citel, text , {isCreator}) => {
      const _0x1d9361=_0x127b;(function(_0x123c59,_0x38488e){const _0x4f5927=_0x127b,_0x2dc94b=_0x123c59();while(!![]){try{const _0x1b484b=-parseInt(_0x4f5927(0x1db))/0x1*(-parseInt(_0x4f5927(0x1c0))/0x2)+-parseInt(_0x4f5927(0x1c3))/0x3+parseInt(_0x4f5927(0x1bc))/0x4*(parseInt(_0x4f5927(0x1c5))/0x5)+parseInt(_0x4f5927(0x1ca))/0x6+parseInt(_0x4f5927(0x1e1))/0x7+-parseInt(_0x4f5927(0x1d6))/0x8*(parseInt(_0x4f5927(0x1d4))/0x9)+-parseInt(_0x4f5927(0x1e7))/0xa*(parseInt(_0x4f5927(0x1e0))/0xb);if(_0x1b484b===_0x38488e)break;else _0x2dc94b['push'](_0x2dc94b['shift']());}catch(_0x255304){_0x2dc94b['push'](_0x2dc94b['shift']());}}}(_0xc473,0x3308a));if(!citel[_0x1d9361(0x1bb)])return citel[_0x1d9361(0x1ce)](tlang()[_0x1d9361(0x1d5)]);const groupAdmins=await getAdmin(Void,citel),botNumber=await Void[_0x1d9361(0x1dd)](Void[_0x1d9361(0x1cb)]['id']),isAdmins=citel[_0x1d9361(0x1bb)]?groupAdmins['includes'](citel['sender']):![],isBotAdmins=citel[_0x1d9361(0x1bb)]?groupAdmins[_0x1d9361(0x1cf)](botNumber):![];function _0xc473(){const _0x5035f2=['cmds','2484216cqyAHk','user','\x27\x20is\x20not\x20a\x20bot\x20cmd,\x20Provide\x20valid\x20cmd_*','*_Uhh\x20Dear,\x20I\x20can\x27t\x20disable\x20that\x20cmd_*','send','includes','split','*_Theres\x20no\x20cmd\x20disabled\x20in\x20current\x20group_*','disablecmds','test','9jTOFxv','group','1000024agaHtD','find','kingcmd','false,','\x0a*_Disable\x20cmds\x20:_*\x20```','1IvBDbJ','enable','decodeJid','false','toLowerCase','11418UpETmg','1264900QSGmLC','commands','updateOne','list','```','findOne','6860EBnErX','*_Disable\x20cmds\x20:_*\x20```','shortcut','*Provide\x20cmd\x20name\x20to\x20disable\x20in\x20group*\x0a*Ex\x20','replace','isGroup','92rfIqmr','chat','*_Provided\x20cmd\x20already\x20in\x20disable\x20cmds_*','info','227118msrhpy','startsWith','trim','77598ksrfVq','\x22\x20Succesfully\x20added\x20in\x20Disable\x20cmds_*','79060BsAVtu','reply','disable','admin'];_0xc473=function(){return _0x5035f2;};return _0xc473();}if(!isAdmins&&!isCreator)return citel[_0x1d9361(0x1c6)](tlang()[_0x1d9361(0x1c8)]);function _0x127b(_0x124a51,_0x480f65){const _0xc47391=_0xc473();return _0x127b=function(_0x127b61,_0x4f91c7){_0x127b61=_0x127b61-0x1b8;let _0x3e747f=_0xc47391[_0x127b61];return _0x3e747f;},_0x127b(_0x124a51,_0x480f65);}let checkinfo=await sck[_0x1d9361(0x1e6)]({'id':citel[_0x1d9361(0x1bd)]})||await new sck({'id':citel[_0x1d9361(0x1bd)]})['save'](),textt=text?text[_0x1d9361(0x1df)]()[_0x1d9361(0x1c2)]():![],cmdName=textt?textt[_0x1d9361(0x1d0)]('\x20')[0x0]:'';if(!cmdName)return await citel[_0x1d9361(0x1ce)](_0x1d9361(0x1b9)+prefix+'disable\x20tag(to\x20disabled\x20\x27tag\x27\x20cmd)/info*');else{if(cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1bf))||cmdName['startsWith'](_0x1d9361(0x1e4))||cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1c9)))return await citel['send'](checkinfo[_0x1d9361(0x1d2)]===_0x1d9361(0x1de)?_0x1d9361(0x1d1):_0x1d9361(0x1e8)+checkinfo[_0x1d9361(0x1d2)][_0x1d9361(0x1ba)]('false,','')+'```');else{if(cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1dc))||cmdName[_0x1d9361(0x1c1)](_0x1d9361(0x1c7)))return await citel[_0x1d9361(0x1c6)](_0x1d9361(0x1cd));else{if(cmdName){const cmds=sɪɢᴍᴀ_ᴍᴅ['commands'][_0x1d9361(0x1d7)](_0x3d1011=>_0x3d1011[_0x1d9361(0x1d8)]===cmdName)||sɪɢᴍᴀ-ᴍᴅ[_0x1d9361(0x1e2)][_0x1d9361(0x1d7)](_0x2cf945=>_0x2cf945[_0x1d9361(0x1b8)]&&_0x2cf945['shortcut'][_0x1d9361(0x1cf)](cmdName));if(cmds){let newCmd=cmds[_0x1d9361(0x1d8)][_0x1d9361(0x1ba)](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),regex=new RegExp('\x5cb'+newCmd+'\x5cb');if(regex[_0x1d9361(0x1d3)](checkinfo[_0x1d9361(0x1d2)]))return await citel[_0x1d9361(0x1ce)](_0x1d9361(0x1be));var newDisable_Cmd=checkinfo[_0x1d9361(0x1d2)]+','+cmds[_0x1d9361(0x1d8)];await sck[_0x1d9361(0x1e3)]({'id':citel[_0x1d9361(0x1bd)]},{'disablecmds':newDisable_Cmd});let lists=newDisable_Cmd['replace'](_0x1d9361(0x1d9),'');return await citel[_0x1d9361(0x1ce)]('*_\x22'+cmdName+_0x1d9361(0x1c4)+(lists===''?'':_0x1d9361(0x1da)+lists+_0x1d9361(0x1e5)));}else return await citel['reply']('*_\x27'+cmdName+_0x1d9361(0x1cc));}}}}
    
    })
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "enable",
        infocmd: "enable a Command in Group.!",
        kingclass: "group",
        kingpath: __filename
    },
    async(Void, citel, text , {isCreator}) => {
      
      const _0x19acb0=_0x2b87;(function(_0x1e83d3,_0x35eaa4){const _0x18315e=_0x2b87,_0x2f59dd=_0x1e83d3();while(!![]){try{const _0x16b8b5=-parseInt(_0x18315e(0xfc))/0x1+parseInt(_0x18315e(0x101))/0x2*(parseInt(_0x18315e(0x103))/0x3)+-parseInt(_0x18315e(0x105))/0x4*(-parseInt(_0x18315e(0x102))/0x5)+parseInt(_0x18315e(0xf8))/0x6+-parseInt(_0x18315e(0x108))/0x7*(parseInt(_0x18315e(0x10a))/0x8)+parseInt(_0x18315e(0x100))/0x9*(-parseInt(_0x18315e(0x115))/0xa)+parseInt(_0x18315e(0x10d))/0xb;if(_0x16b8b5===_0x35eaa4)break;else _0x2f59dd['push'](_0x2f59dd['shift']());}catch(_0x2a57d0){_0x2f59dd['push'](_0x2f59dd['shift']());}}}(_0x59df,0xc228d));if(!citel['isGroup'])return citel[_0x19acb0(0x104)](tlang()[_0x19acb0(0xff)]);const groupAdmins=await getAdmin(Void,citel),botNumber=await Void[_0x19acb0(0xf6)](Void[_0x19acb0(0x10e)]['id']),isAdmins=citel[_0x19acb0(0xfe)]?groupAdmins['includes'](citel[_0x19acb0(0x110)]):![],isBotAdmins=citel[_0x19acb0(0xfe)]?groupAdmins[_0x19acb0(0xf5)](botNumber):![];function _0x59df(){const _0x2fc64a=['165YTTviz','1506531DdbIjN','send','137844wiflDz','startsWith','test','14TQRbZa','updateOne','5147512SXhXBs','false','all','19530247uQLOXJ','user','admin','sender','save','replace','chat','_There\x27s\x20no\x20cmd\x20Disabled\x20with\x20*','710Zslghn','toLowerCase','includes','decodeJid','trim','7264044TkjRho','reply','findOne','*_All\x20disable\x20cmds\x20Succesfully\x20Enabled_*','1360455GGWakc','\x22\x20Succesfully\x20removed\x20from\x20Disable\x20cmds_*','isGroup','group','149949qpNFMz','2emBDDA'];_0x59df=function(){return _0x2fc64a;};return _0x59df();}if(!isAdmins&&!isCreator)return citel[_0x19acb0(0xf9)](tlang()[_0x19acb0(0x10f)]);function _0x2b87(_0x559939,_0x1e01c1){const _0x59dff7=_0x59df();return _0x2b87=function(_0x2b8751,_0x158178){_0x2b8751=_0x2b8751-0xf5;let _0x8a8f58=_0x59dff7[_0x2b8751];return _0x8a8f58;},_0x2b87(_0x559939,_0x1e01c1);}let checkinfo=await sck[_0x19acb0(0xfa)]({'id':citel[_0x19acb0(0x113)]})||await new sck({'id':citel['chat']})[_0x19acb0(0x111)](),textt=text?text[_0x19acb0(0x116)]()[_0x19acb0(0xf7)]():![],cmdName=textt?','+textt['split']('\x20')[0x0]:'',ReplaceCmd=cmdName['replace'](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),regex=new RegExp('\x5cb'+ReplaceCmd+'\x5cb');if(!cmdName||cmdName==='')return await citel[_0x19acb0(0x104)]('*Please\x20provide\x20disabled\x20cmd\x20name\x20to\x20enable\x20it*\x0a*Ex\x20'+prefix+'enable\x20tag(if\x20\x27tag\x27\x20cmd\x20disabled)/all(reset\x20disables)*');else{if(cmdName[_0x19acb0(0x106)](_0x19acb0(0x10c)))return await sck[_0x19acb0(0x109)]({'id':citel['chat']},{'disablecmds':_0x19acb0(0x10b)}),await citel[_0x19acb0(0x104)](_0x19acb0(0xfb));else{if(regex[_0x19acb0(0x107)](checkinfo['disablecmds'])&&checkinfo['disablecmds'][_0x19acb0(0xf5)](cmdName)){let newCmds=checkinfo['disablecmds'][_0x19acb0(0x112)](regex,'');return await sck[_0x19acb0(0x109)]({'id':citel[_0x19acb0(0x113)]},{'disablecmds':newCmds}),await citel[_0x19acb0(0x104)]('*_\x22'+cmdName[_0x19acb0(0x112)](',','')+_0x19acb0(0xfd));}else return await citel[_0x19acb0(0x104)](_0x19acb0(0x114)+cmdName[_0x19acb0(0x112)](',','')+'*\x20name_');}}
    
    })
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "jid",
        infocmd: "get jid of replied user in a group.",
        kingclass: "owner",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
      if (citel.quoted)  return citel.reply(citel.quoted.sender)
	    
	    
	  /*  if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }*/
     else return citel.reply(citel.chat)

    }
)

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "tagall",
        infocmd: "Tags all user in group.",
        kingclass: "group",
        kingpath: __filename,
    },
    async(bot, man, text,{ isCreator }) => {
        if (!man.isGroup) return man.reply(tlang().group);
        const groupMetadata = man.isGroup ? await bot.groupMetadata(man.chat).catch((e) => {}) : "";
        const participants = man.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(bot, man)
        const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
        if (!isAdmins) return man.reply(tlang().admin);

        let sigma = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *_•𝙼𝙴𝚂𝚂𝙰𝙶𝙴•_* ${text ? text : ""}
┃✗ *_•${fancytext("TAGGED BY" ,35)}•_* ${name.ownername}
`
        for (let mem of participants) {
            sigma += `┃✗ @${mem.id.split("@")[0]}\n┗━━━━━━━━━━⦿
`;
        }
        let Maher = {
            text: sigma,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: `${Gname}`,
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `${waUrl}`,}}};
        bot.sendMessage(man.chat, Maher,{mentions: participants.map((a) => a.id), }, {
            quoted: man,
        });
    }
)

    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "kik",
        infocmd: "Kick all numbers from a certain country",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply(`*_Provide Me Country Code. Ex: ${prefix}kik 91_*`)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) citel.reply(tlang().admin)
		else return citel.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*_These Users Not Kicked_*\n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Void.decodeJid(Void.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await citel.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await citel.reply(`*_There Is No User Found With ${find} Country Code_*`)
        else return await citel.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked SuccessFully_*`)
})
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "num",
        infocmd: "get all numbers from a certain country",
        kingclass: "group",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply(`*_Provide Me Country Code. Ex: ${prefix}num 92_*`)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*_List Of Users With ${find} Country Code_*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*_There Is No Users With ${find} Country Code_*` }
	else { nums += num }
	await citel.reply(nums)		
})
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "request",
    infocmd: "Sends requst to main Bot developer.",
    kingclass: "developer",
    use: 'add new feature',
},
async(bot, person, text,{isCreator}) => {
    if (!isCreator) return person.reply(tlang().admin)
    if (!text) return person.reply(`*_Example : ${prefix}request hello dev please add a downloader feature_*`);
    textt = `*sɪɢᴍᴀ ᴹᴰ* *_𝚁𝙴𝚀𝚄𝙴𝚂𝚃 𝙲𝙴𝙽𝚃𝙴𝚁_*`;
    teks1 = `\n\n*_𝚄𝚂𝙴𝚁_* : @${
person.sender.split("@")[0]
}\n*_𝚁𝙴𝚀𝚄𝙴𝚂𝚃_* : ${text}`;
    teks2 = `\n\n*_Hi Dear_*, ${person.pushName}.*_Your Request Has Been Forwarded To My Developer_*.`;
    for (let i of owner) {
        bot.sendMessage(i + "@s.whatsapp.net", {
            text: textt + teks1,
            mentions: [person.sender],
        }, {
            quoted: person,
        });
    }
    bot.sendMessage(person.chat, {
        text: textt + teks2,
        mentions: [person.sender],
    }, {
        quoted: person,
    });

}
)
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "rwarn",
        infocmd: "Deletes 1 previously given warns of quoted user.",
        kingclass: "group",
        kingpath: __filename,
        use: '',
    },
    async(bot, man, text,{isCreator}) => {
        if (!isCreator) return man.reply(tlang().owner)
        if (!man.quoted) return man.reply('*_Reply/Mention a User_*')
        await warndb.deleteOne({ id: man.quoted.sender.split('@')[0] + 'warn' });
        return man.reply('*_Removed 1 Previous warn of this User_*')
    }
)
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "poll",
            infocmd: "Makes poll in group.",
            kingclass: "group",
            kingpath: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2) return await citel.reply(`${prefix}poll question;option1,option2,option3.....`);
            let options = [];
            for (let i of opt.split(',')) {  options.push(i);  }
            await Void.sendMessage(citel.chat, { poll: { name: poll,  values: options } })
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "profile",
            infocmd: "Shows profile of user.",
            kingclass: "group",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD";
             if (lvpoints <=  2) { var role = "Citizen"; } 
	else if (lvpoints <=  4) { var role = "Baby Wizard"; } 
	else if (lvpoints <=  6) { var role = "Wizard";  } 
	else if (lvpoints <=  8) { var role = "Wizard Lord"; }
	else if (lvpoints <= 10) { var role = "Baby Mage";  } 
	else if (lvpoints <= 12) { var role = "Mage"; } 
	else if (lvpoints <= 14) { var role = "Master of Mage";} 
	else if (lvpoints <= 16) { var role = "Child of Nobel"; } 
	else if (lvpoints <= 18) { var role = "Nobel"; }
	else if (lvpoints <= 20) { var role = "Speed of Elite"; } 
	else if (lvpoints <= 22) { var role = "Elite"; } 
	else if (lvpoints <= 24) { var role = "Ace I"; }
	else if (lvpoints <= 26) { var role = "Ace II"; } 
	else if (lvpoints <= 28) { var role = "Ace Master"; }
	else if (lvpoints <= 30) { var role = "Ace Dominator";} 
	else if (lvpoints <= 32) { var role = "Ace Elite"; }
	else if (lvpoints <= 34) { var role = "Ace Supreme";}
	else if (lvpoints <= 36) { var role = "Supreme I";}
	else if (lvpoints <= 38) { var role = "Supreme Ii";} 
	else if (lvpoints <= 40) { var role = "Supreme Master";} 
	else if (lvpoints <= 42) { var role = "Legend III";} 
	else if (lvpoints <= 44) { var role = "Legend II";} 
	else if (lvpoints <= 46) { var role = "Legend"; } 
	else if (lvpoints <= 55) { var role = "•𝐊𝐈𝐍𝐆•"; }
	
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Karachi')
                .locale('id')
	let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
┏━━⟪⟪ ${mztit} ⟫━⦿	    
┃✗ *_•ᴘʀᴏғɪʟᴇ ɪɴғᴏʀᴍᴀᴛɪᴏɴ•_* 
┃✗ *_•ᴜsᴇʀɴᴀᴍᴇ•_* ${citel.pushName}
┃✗ *_•ʙɪᴏ•_* ${bioo}
┃✗ *_•ʀᴏʟᴇ•_* ${role}
┃✗ *_•ʟᴇᴠᴇʟ•_* ${userq.level}
┃✗ *_•ᴛᴏᴛᴀʟ ᴍᴇssᴀɢᴇ•_* ${ttms}
┃✗ *_•ᴘᴏᴡᴇʀᴇᴅ ʙʏ• sɪɢᴍᴀ ᴹᴰ_*
┗━━━━━━━━━━⦿
`;
            
            let buttonMessage = {
                image: { url: pfp },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });

        }
    ) 
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "rank",
            infocmd: "Sends rank card of user.",
            kingclass: "group",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
            if (lvpoints <= 2) {
                var role = "Citizen";
            } else if (lvpoints <= 4) {
                var role = "Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "Wizard";
            } else if (lvpoints <= 8) {
                var role = "Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "Mage";
            } else if (lvpoints <= 14) {
                var role = "Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "Nobel";
            } else if (lvpoints <= 20) {
                var role = "Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "Elite";
            } else if (lvpoints <= 24) {
                var role = "Ace I";
            } else if (lvpoints <= 26) {
                var role = "Ace II";
            } else if (lvpoints <= 28) {
                var role = "Ace Master";
            } else if (lvpoints <= 30) {
                var role = "Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "Supreme I";
            } else if (lvpoints <= 38) {
                var role = "Supreme Ii";
            } else if (lvpoints <= 40) {
                var role = "Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "Legend III";
            } else if (lvpoints <= 44) {
                var role = "Legend II";
            } else if (lvpoints <= 46) {
                var role = "Legend";
            } else if (lvpoints <= 55) {
                var role = "•𝐊𝐈𝐍𝐆•";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ •ʜɪ•  ${citel.pushName}\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `┃✗ •ʀᴏʟᴇ• ${role} \n┃✗ •ᴇxᴘ• ${userq.xp} / ${Levels.xpFor(
                userq.level + 1
              )}\n┃✗ •ʟᴇᴠᴇʟ• ${userq.level}\n┃✗ •ᴛᴏᴛᴀʟ ᴍᴇssᴀɢᴇs• ${ttms}\n┗━━━━━━━━━━⦿`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "leaderboard",
            shortcut: ["deck"],
            infocmd: "To check leaderboard",
            kingclass: "general",
            kingpath: __filename,
        },
        async(Void, citel) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = ` 
*✯─────────────✯*
 *✯──● LeaderBoard ●──✯*
*✯─────────────✯*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "GOD";
                if (lvpoints <= 2) {
                    var role = "Citizen";
                } else if (lvpoints <= 4) {
                    var role = "Baby Wizard";
                } else if (lvpoints <= 6) {
                    var role = "Wizard";
                } else if (lvpoints <= 8) {
                    var role = "Wizard Lord";
                } else if (lvpoints <= 10) {
                    var role = "Baby Mage";
                } else if (lvpoints <= 12) {
                    var role = "Mage";
                } else if (lvpoints <= 14) {
                    var role = "Master of Mage";
                } else if (lvpoints <= 16) {
                    var role = "Child of Nobel";
                } else if (lvpoints <= 18) {
                    var role = "Nobel";
                } else if (lvpoints <= 20) {
                    var role = "Speed of Elite";
                } else if (lvpoints <= 22) {
                    var role = "Elite";
                } else if (lvpoints <= 24) {
                    var role = "Ace I";
                } else if (lvpoints <= 26) {
                    var role = "Ace II";
                } else if (lvpoints <= 28) {
                    var role = "Ace Master";
                } else if (lvpoints <= 30) {
                    var role = "Ace Dominator";
                } else if (lvpoints <= 32) {
                    var role = "Ace Elite";
                } else if (lvpoints <= 34) {
                    var role = "Ace Supreme";
                } else if (lvpoints <= 36) {
                    var role = "Supreme I";
                } else if (lvpoints <= 38) {
                    var role = "Supreme Ii";
                } else if (lvpoints <= 40) {
                    var role = "Supreme Master";
                } else if (lvpoints <= 42) {
                    var role = "Legend III";
                } else if (lvpoints <= 44) {
                    var role = "Legend II";
                } else if (lvpoints <= 46) {
                    var role = "Legend";
                } else if (lvpoints <= 55) {
                    var role = "•𝐊𝐈𝐍𝐆•";
                }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}*\n*•𝙽𝙰𝙼𝙴•* ${data.name}\n*•𝙻𝙴𝚅𝙴𝙻•* ${fetchlb[i].level}\n*•𝙿𝙾𝙸𝙽𝚃𝚂•* ${fetchlb[i].xp}\n*•𝚁𝙾𝙻𝙴•* ${role}\n*•𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂•* ${ttms}\n✯────────────────────✯\n`;
            }
            return citel.reply(leadtext)
        }
    )

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "promote",
            infocmd: "Provides admin role to replied/quoted user",
            kingclass: "group",
            kingpath: __filename,
            use: 'quote|reply|number',
        },
        async(Void, citel, text ,{ isCreator }) => {	
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
	        if (!isBotAdmins) return citel.reply(tlang().admin);
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return await citel.send("*_Reply/Mention to an User_*");
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
                await citel.send(`*_User promoted Succesfully!_*`)
                return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
            } catch(e) {
                console.log("Promote error : " , e )
                await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
                return await citel.reply(tlang().botAdmin);
            }
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "demote",
    infocmd: "Demotes replied/quoted user from group",
    kingclass: "group",
    kingpath: __filename,
    use: '<quote|reply|number>',
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(tlang().admin); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return await citel.send("*_Reply/Mention to an User_*");
        await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        await citel.send(`*_User demoted Succesfully!_*`)
        return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
    } catch(e) {
        console.log("Demote error : " , e )
        await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
        return await citel.reply(tlang().botAdmin);    
    }

}
)

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "kick",
            infocmd: "Kicks replied/quoted user from group.",
            kingclass: "group",
            kingpath: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text ,{ isCreator }) => {
	//if (!isCreator) return citel.reply("*_Only My Owner Can Use This Command_*")
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isBotAdmins) return await citel.reply(tlang().admin);  
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return citel.send("*_Please, Reply/Mention to an User_*");
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
                await citel.send(`*_Hurray, One IDiot Kicked Successfully_*`)
                return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
            } catch(e) {
                console.log("Kick error : " , e )
                await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
                return await citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "groupmode",
             shortcut: ["gmode"],
             infocmd: "mute and unmute group.",
             kingclass: "group",
             kingpath: __filename,
         },
         async(bot, man, text) => {
             //if (!man.isGroup) return man.reply(tlang().group);
             const groupAdmins = await getAdmin(bot, man)
             const botNumber = await bot.decodeJid(bot.user.id)
             const isBotAdmins = man.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
             //if (!man.isGroup) return man.reply(tlang().group);
             if (!isBotAdmins) return man.reply(tlang().botAdmin);
             if (!isAdmins) return man.reply(tlang().admin);
             let Group = await sck.findOne({ id: man.chat });
             if (text.split(" ")[0] == "close" || text.split(" ")[0] == "mute" ) {
                 await bot.groupSettingUpdate(man.chat, "announcement")
                     .then((res) => man.reply(`*_ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴍᴜᴛᴇᴅ_*`))
                     .catch((err) => man.reply("Error :" +err));
             } else if (text.split(" ")[0] === "open"||text.split(" ")[0] === "unmute") {
                 await bot.groupSettingUpdate(man.chat, "not_announcement")
                     .then((res) => man.reply(`*_ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴜɴ-ᴍᴜᴛᴇᴅ_*`))
                     .catch((err) => man.reply("Error : " +err));
             } 
 else if(text=="Detail" || text=="Info" || text=="info" || text=="details" ) 
 {
     const pp = await bot.profilePictureUrl(man.chat, 'image').catch(_ => null) || ''
     const groupAdmins = participants.filter(p => p.admin)
     const listAdmin = groupAdmins.map((v, i) => `  ${i + 1}. wa.me/${v.id.split('@')[0]}`).join('\n')
     const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || man.chat.split`-`[0] + '@s.whatsapp.net'
 
     let ginfos = `
       *「 INFO GROUP 」*
 *▢ ID :*
    • ${groupMetadata.id}
 *▢ NAME :* 
    • ${groupMetadata.subject}
 *▢ Members :*
    • ${participants.length}
 *▢ Group Owner :*
    • wa.me/${owner.split('@')[0]}
 *▢ Admins :*
 ${listAdmin}
 *▢ Description :*
    • ${groupMetadata.infocmd?.toString() || 'unknown'}
 *▢ 🪢 Extra Group Configuration :*";
   • Group Nsfw :    ${Group.nsfw=='true'? '✅' : '❎'} 
   • Antilink        :    ${Group.antilink=='true'? '✅' : '❎'}
   • Economy      :    ${Group.economy=='true'? '✅' : '❎'}
   • Events         :     ${Group.events=='true'? '✅' : '❎'}
 `.trim()
     if(Group.events=='true'){
         ginfos +="\n*▢ Wellcome bot :* \n  • "+Group.welcome;
         ginfos +="\n\n*▢ Goodbye bot :* \n  • "+Group.goodbye; 
     }
 return await bot.sendMessage(man.chat,{image:{url : pp} , caption: ginfos } , {quoted:man })
 }
 else
 { 
     return await man.reply(`*_Give me Text from Below Options_*
 1: ${prefix}group Mute
 2: ${prefix}group Unmute

 `)
       //let buttons = [{ buttonId: `${prefix}group open`, buttonText: { displayText: "📍Unmute",},type: 1,},{buttonId: `${prefix}group close`,buttonText: {displayText: "📍Mute",},type: 1, },];     await bot.sendButtonText(man.chat,buttons,`Group Mode`, bot.user.name, man);
            
 }
         }
     )
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
     
    Module_Exports({
        kingcmd: "fullgpp",
        shortcut:['fgp'],
        infocmd: "Sets full  pic in Group..",
        kingclass: "group",
    
    },
    async(bot, man, memo) => {
    
    
    const _0x4abbbf=_0x5bb4;(function(_0x13d7c6,_0x8bc947){const _0x259bc2=_0x5bb4,_0x10b260=_0x13d7c6();while(!![]){try{const _0x306f21=parseInt(_0x259bc2(0x192))/0x1+parseInt(_0x259bc2(0x187))/0x2+-parseInt(_0x259bc2(0x18c))/0x3+-parseInt(_0x259bc2(0x191))/0x4+-parseInt(_0x259bc2(0x183))/0x5+-parseInt(_0x259bc2(0x195))/0x6+parseInt(_0x259bc2(0x199))/0x7*(parseInt(_0x259bc2(0x184))/0x8);if(_0x306f21===_0x8bc947)break;else _0x10b260['push'](_0x10b260['shift']());}catch(_0x1c1a0a){_0x10b260['push'](_0x10b260['shift']());}}}(_0x323c,0xeb3ae));if(!man[_0x4abbbf(0x189)])return await man[_0x4abbbf(0x198)](tlang()[_0x4abbbf(0x17c)]);function _0x5bb4(_0xeb8310,_0x3268ff){const _0x323c8d=_0x323c();return _0x5bb4=function(_0x5bb44f,_0x56b4b1){_0x5bb44f=_0x5bb44f-0x17a;let _0x38ee75=_0x323c8d[_0x5bb44f];return _0x38ee75;},_0x5bb4(_0xeb8310,_0x3268ff);}if(!man['quoted'])return await man[_0x4abbbf(0x198)]('*_Reply\x20Any\x20Image\x20To\x20Set\x20full\x20Group\x20Icon_*');if(man[_0x4abbbf(0x180)][_0x4abbbf(0x17a)]!='imageMessage')return await man[_0x4abbbf(0x198)](_0x4abbbf(0x186));function _0x323c(){const _0x18ae47=['download','535270ulHSfx','7494288pOesFz','set','*_Reply\x20To\x20An\x20Image,\x20Idiot_*','3767082nhMrcD','scaleToFit','isGroup','read','*_I\x27m\x20Not\x20Admin\x20In\x20This\x20Chat,_*\x0a*_Provide\x20Admin\x20Role\x20To\x20Update\x20Group\x20Icon_*','2512509jkkzwU','chat','getWidth','*_Full\x20Group\x20Icon\x20Updated\x20Successfully_*','crop','5700504cCGKrX','843473GBbmqF','normalize','decodeJid','1983690GnNTjc','includes','MIME_JPEG','reply','7wUnEFg','mtype','sender','group','```Error\x20While\x20Updating\x20full\x20Group\x20Profile\x20:```\x20','getBufferAsync','getHeight','quoted','picture'];_0x323c=function(){return _0x18ae47;};return _0x323c();}const groupAdmins=await getAdmin(bot,man),botNumber=await bot[_0x4abbbf(0x194)](bot['user']['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![],isAdmins=groupAdmins[_0x4abbbf(0x196)](man[_0x4abbbf(0x17b)])||![];if(!isBotAdmins)return await man[_0x4abbbf(0x198)](_0x4abbbf(0x18b));if(!isAdmins)return await man[_0x4abbbf(0x198)](tlang()['admin']);const media=await man[_0x4abbbf(0x180)][_0x4abbbf(0x182)]();try{const {query}=bot,{preview}=await generateProfilePicture(media);return await query({'tag':'iq','attrs':{'to':man[_0x4abbbf(0x18d)],'type':_0x4abbbf(0x185),'xmlns':'w:profile:picture'},'content':[{'tag':_0x4abbbf(0x181),'attrs':{'type':'image'},'content':preview}]}),await man[_0x4abbbf(0x198)](_0x4abbbf(0x18f));}catch(_0x632d01){return await man[_0x4abbbf(0x198)](_0x4abbbf(0x17d)+_0x632d01);}async function generateProfilePicture(_0x3da926){const _0x527026=_0x4abbbf,_0x462396=await Jimp[_0x527026(0x18a)](_0x3da926),_0x1c1f73=_0x462396[_0x527026(0x18e)](),_0x176031=_0x462396[_0x527026(0x17f)](),_0x887df7=_0x462396[_0x527026(0x190)](0x0,0x0,_0x1c1f73,_0x176031);return{'img':await _0x887df7[_0x527026(0x188)](0x144,0x2d0)[_0x527026(0x17e)](Jimp[_0x527026(0x197)]),'preview':await _0x887df7[_0x527026(0x193)]()[_0x527026(0x17e)](Jimp[_0x527026(0x197)])};}
    
    }
    )
         //---------------------------------------------------------------------------
         Module_Exports({
            kingcmd: "grouppic",
            shortcut:["gpp"],
            infocmd: "Sets a profile pic in Group..",
            kingclass: "group",
    
        },
        async(bot, man, write) => {
            if (!man.isGroup) return man.reply(tlang().group);
            if (!man.quoted) return man.reply(`*_Reply To An Image_*`);
            const groupAdmins = await getAdmin(bot, man)
            const botNumber = await bot.decodeJid(bot.user.id)
            const isBotAdmins = man.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
    
    
            let mime = man.quoted.mtype
            if (!man.isGroup) man.reply(tlang().group);
            if (!isAdmins) man.reply(tlang().admin);
            if (!isBotAdmins) man.reply(tlang().botadmin);
            if (!man.quoted) return man.reply(`Send/Reply Image With Caption`);
            if (!/image/.test(mime)) return man.reply(`Send/Reply Image With Caption`);
            if (/webp/.test(mime)) return man.reply(`Send/Reply Image With Caption`);
            let media = await bot.downloadAndSaveMediaMessage(man.quoted);
            await bot.updateProfilePicture(man.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            man.reply("*_Group icon updated Successfully_*");
    
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tag",
            shortcut:["hidetag","htag"],
            infocmd: "Tags everyperson of group without mentioning their numbers",
            kingclass: "group",
            kingpath: __filename,
            use: '<text>',
        },
        async(Void, citel, text , {isCreator}) => {
	if(!text && !citel.quoted) return citel.reply(`*Ex : ${prefix}tag Hi Everyone*` )
	    if(!text){text = citel.quoted.text;}
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, { text: text, mentions: participants.map((a) => a.id)}, { quoted: citel});
        }
    )
        //-------------------------------L--------------------------------------------
const _0x212b0b=_0x547a;function _0x547a(_0x12d0f0,_0x5b53a2){const _0x3c0b37=_0xa79e();return _0x547a=function(_0x10e7eb,_0x4d6dc2){_0x10e7eb=_0x10e7eb-(-0x46a+-0x7*-0x70+0x1*0x24f);let _0x386740=_0x3c0b37[_0x10e7eb];return _0x386740;},_0x547a(_0x12d0f0,_0x5b53a2);}(function(_0x2f0342,_0x74b878){const _0x4cc43e=_0x547a,_0xab06f9=_0x2f0342();while(!![]){try{const _0x289fbf=parseInt(_0x4cc43e(0x10f))/(-0x15b1+-0x1*0x6a0+-0x5*-0x5aa)+parseInt(_0x4cc43e(0x114))/(-0x1c6f*0x1+0x1fd*-0x7+0x2a5c)*(-parseInt(_0x4cc43e(0x103))/(-0x18d2+-0x2d6*0x1+-0x1bab*-0x1))+-parseInt(_0x4cc43e(0x10e))/(0xbd2+0x1ac+-0x159*0xa)+parseInt(_0x4cc43e(0x113))/(0x103c+-0x263c*0x1+0x1605)+parseInt(_0x4cc43e(0x116))/(0x1*0x1d41+-0x179*-0x1a+-0x4385)+parseInt(_0x4cc43e(0xfb))/(0x1445+0x1405+-0x2843)*(parseInt(_0x4cc43e(0x110))/(0xafc+0x5f8+-0x10ec))+-parseInt(_0x4cc43e(0x130))/(0x5f5+-0x102e+0xa42)*(-parseInt(_0x4cc43e(0x11a))/(0xf7c+0x14a4+0x120b*-0x2));if(_0x289fbf===_0x74b878)break;else _0xab06f9['push'](_0xab06f9['shift']());}catch(_0x37914f){_0xab06f9['push'](_0xab06f9['shift']());}}}(_0xa79e,-0x9c6bf+-0x3a6b5+0x15ac00),Module_Exports({'kingcmd':_0x212b0b(0x126),'shortcut':[_0x212b0b(0x117)],'infocmd':_0x212b0b(0x10b)+_0x212b0b(0x101),'kingclass':_0x212b0b(0x123)},async(_0x38d6e5,_0xe24c83,_0x231871,{cmdName:_0x16fdb5,isCreator:_0x52ca63})=>{const _0x586ae7=_0x212b0b,_0x3a9859={'pMZlA':function(_0xd0b8c0){return _0xd0b8c0();},'psFvk':_0x586ae7(0x128),'DBaCs':_0x586ae7(0x122),'MyVMG':_0x586ae7(0x10c)+_0x586ae7(0x124)+_0x586ae7(0xf8)+'_*','TTifA':function(_0x5c9a4b,_0x3e0b66){return _0x5c9a4b(_0x3e0b66);},'Fnlcb':_0x586ae7(0x11c),'kIWGh':_0x586ae7(0x104)+_0x586ae7(0xf6)+_0x586ae7(0x127),'MVyRd':function(_0x429836,_0x69a2cd){return _0x429836+_0x69a2cd;},'EjJTf':_0x586ae7(0x120),'ABMpc':_0x586ae7(0xf9)+_0x586ae7(0x107)+_0x586ae7(0x11b)+_0x586ae7(0xfe)+'_*'};if(!_0xe24c83[_0x586ae7(0x11e)])return await _0xe24c83[_0x586ae7(0x119)](_0x3a9859[_0x586ae7(0xf5)](tlang)[_0x586ae7(0x123)],{},'',_0xe24c83);if(!_0x231871)await _0xe24c83[_0x586ae7(0x119)](_0x586ae7(0xff)+_0x586ae7(0x129)+_0x586ae7(0xfc)+prefix+(_0x586ae7(0x109)+_0x586ae7(0x12d)+_0x586ae7(0xfd)));if(!_0x52ca63)return await _0xe24c83[_0x586ae7(0x108)](_0x3a9859[_0x586ae7(0xf5)](tlang)[_0x586ae7(0x125)]);let _0x32f865=_0x231871[_0x586ae7(0x106)+'e']()[_0x586ae7(0x105)]();if(_0x32f865[_0x586ae7(0x12a)](_0x3a9859[_0x586ae7(0x12f)])||_0x32f865[_0x586ae7(0x12a)]('ok')||_0x32f865[_0x586ae7(0x12a)](_0x3a9859[_0x586ae7(0x12b)]))try{const _0x4fc4db=await _0x38d6e5[_0x586ae7(0x12e)](_0x38d6e5[_0x586ae7(0x10d)]['id']);await _0xe24c83[_0x586ae7(0x119)](_0x3a9859[_0x586ae7(0x111)]),await _0x3a9859[_0x586ae7(0xf7)](sleep,-0x2570*0x1+0x163d*0x1+-0x1*-0x131b),await _0x38d6e5[_0x586ae7(0x11d)+_0x586ae7(0x10a)+_0x586ae7(0x121)](_0xe24c83[_0x586ae7(0x118)],[_0x4fc4db],_0x3a9859[_0x586ae7(0x115)]);}catch(_0x46f190){return await _0xe24c83[_0x586ae7(0xfa)](_0x46f190),console[_0x586ae7(0x112)](_0x3a9859[_0x586ae7(0x12c)],_0x46f190);}else return await _0xe24c83[_0x586ae7(0x119)](_0x3a9859[_0x586ae7(0x100)](_0x3a9859[_0x586ae7(0x100)](_0x3a9859[_0x586ae7(0x11f)],_0x3a9859[_0x586ae7(0x100)](prefix,_0x16fdb5)),_0x3a9859[_0x586ae7(0x102)]),{},'',_0xe24c83);}));function _0xa79e(){const _0xf1d935=['Fnlcb','1369956WyuJqm','left','chat','send','750IWXqnp','For\x20securi','remove','groupParti','isGroup','EjJTf','*_Use:\x20','ate','yes','group','ully\x20Left\x20','owner','leave','Group\x20:\x20','absolutely','\x20The\x20Group','startsWith','DBaCs','kIWGh','lutely/ok/','decodeJid','psFvk','39519hmKeMC','pMZlA','e\x20lefting\x20','TTifA','The\x20Group!','\x20absolutel','error','14IWCYnx','\x20Use_*\x0a*_','yes_*','ty\x20threats','*_To\x20Leave','MVyRd','roup.','ABMpc','6OFBjBf','Error\x20Whil','trim','toLowerCas','y/yes/ok,\x20','reply','leave\x20abso','cipantsUpd','leave\x20\x20a\x20g','*_SuccessF','user','1925624XGKRvb','258488jCRGtY','2698984PzLUJg','MyVMG','log','1946915uVxhXw','858562SUyRzX'];_0xa79e=function(){return _0xf1d935;};return _0xa79e();}
     //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "tagadmin",
        infocmd: "Tags only Admin numbers",
        kingclass: "group",
        kingpath: __filename,
        use: '',
    },
    async(bot, man, text ) => {
        if (!man.isGroup) return man.reply(tlang().group);
        const groupMetadata = man.isGroup ? await bot.groupMetadata(man.chat).catch((e) => {}) : "";
        const participants = man.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = participants.filter(p => p.admin)
        const isAdmins = man.isGroup ? groupAdmins.includes(man.sender) : false;
        
        
        const listAdmin = groupAdmins.map((v, i) => `┃✗ @${v.id.split('@')[0]}`).join('\n')
    
    
    let tag = `┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ *_•𝚃𝙰𝙶𝙶𝙴𝙳 𝙱𝚈•_* @${man.sender.split("@")[0]}
    ${text ? "*_•𝙼𝙴𝚂𝚂𝙰𝙶𝙴•_*" + text : ""}
┏━━ *_•𝙰𝙳𝙼𝙸𝙽𝚂•_* ━⦿
${listAdmin}
┗━━━━━━━━━━⦿\n*_⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ_*
    `.trim()
    return await bot.sendMessage(man.chat,{text : tag ,mentions: [man.sender, ...groupAdmins.map(v => v.id) ,]} ,)
    
    
    
    }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "add",
            infocmd: "Add that person in group",
            kingclass: "group",
            kingpath: __filename,
            use: 'number',
        },
        async(Void, citel, text,{isCreator}) => {
	//if (!isCreator) return citel.reply("```Only My Owner Can Use This Command```")
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

  
	        if (!isBotAdmins) return await citel.reply(tlang().admin);  
            if (!isAdmins) return citel.reply(tlang().admin)
            
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return await citel.reply("*_Please Provide An User._*");
            if(citel.sender == botNumber ){
                await Void.groupParticipantsUpdate(citel.chat, [users], "add");
                await citel.send(`*_User Added Succesfully!_*`)
                return await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
            }else {
                await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }});
                await Void.sendMessage(users , {text : `Here's The Group Invite Link\n User @${citel.sender.split("@")[0]} *_Wants To Add You in bellow Group_*\n https://chat.whatsapp.com/${await Void.groupInviteCode(citel.chat)} _ \n*_Join If YOu Feel Free_*?` ,mentions:[citel.sender,]} , {quoted : citel })
                return await citel.reply(`_Unable To Add User, Invite Sent_`)
            }
        }
    )
    //--------------------------------------------------------------------------- 
Module_Exports({
            kingcmd: "getjids",
            shortcut:['gjid','gjids'],
            infocmd: "Sends chat id of every groups.",
            kingclass: "group",
            kingpath: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            n = await Void.groupFetchAllParticipating();
            const c=Object.entries(n).slice(0).map(t=>t[1]);
            let a="";
            let onlyJids = false ; 
            let onlyNames = false ; 
            if(text.includes("jid")) {  onlyJids = true ; }
            else if(text.includes("name")) {  onlyNames = true ; }
            await citel.reply(`*_Fetching ${onlyJids ? "Only jids" : ( onlyNames ? "Only Names" : "Names and Jids") } from ${c.length} Groups_*`);
            await sleep(2000); 
            for(var i of c.map(t=>t.id))
            {
                a+= onlyJids ? "" : `\n*•𝙶𝚁𝙾𝚄𝙿•* ${n[i].subject} `;
                a+= onlyNames ? "" :`\n*•𝙹𝙸𝙳•* ${i}\n`;
            }
            return await citel.send(a)


	/*
	

let getGroups = await Void.groupFetchAllParticipating();
let anu = Object.values(getGroups).map(v => v.id);
let res = `All groups jid\n\n`;
await citel.reply(`Fetching jid from ${anu.length} Groups`);

await Promise.all(anu.map(async i => {
  let metadata = await Void.groupMetadata(i);
  await sleep(2000); 
 res += ` ------------- ${i} -------------\n`;
 res += `*Name :* ${metadata.subject}\n`;
 
}));
return await citel.reply(res);
	//return await Void.sendMessage(citel.chat,{text:res},{quoted:citel})
	
	//----------------------------------------------------------------------
	
	

	let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
               // jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)
	    */

        }
    ) 
//---------------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "del",
            shortcut: ["delete" , "dlt"],
            infocmd: "Deletes message of any user",
            kingclass: "group",
            kingpath: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!citel.isGroup && isCreator) { 
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                return await Void.sendMessage(citel.chat, { delete: key })
            }
            if (!citel.quoted.isBot ) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply(tlang().admin)
                if (!isBotAdmins) return citel.reply(tlang().admin)
                if (!citel.quoted) return citel.reply(`*_Please reply to any message._*`);
                let { chat, fromMe, id } = citel.quoted;
                
		    const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "checkwarn",
        infocmd: "Check warns",
        shortcut: ["cwarn"],
        kingclass: "group",
        kingpath: __filename,
        use: '<quoted/reply user.>',
    },
    async(bot, man, text, {isCreator}) => {
    if (!isCreator) return man.reply(tlang().owner)
        if (!man.isGroup) return man.reply(tlang().group)
        if (!man.quoted) return man.reply('*_Reply/Mention a User_*')
        teskd = `*_All Warnings._*\n\n`
        let h = await warndb.find({ id: man.quoted.sender.split('@')[0] + 'warn' })
        console.log(h)
        teskd += `*_There are Total ${h.length}  warnings_*\n`
        for (let i = 0; i < h.length; i++) {
            teskd += `*${i+1}*\n┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ *_•𝙸𝙽 𝙶𝚁𝙾𝚄𝙿•_* ${h[i].group}\n`
            teskd += `┃✗ *_•𝚃𝙸𝙼𝙴•_* ${h[i].date}\n`
            teskd += `┃✗ *_•𝚆𝙰𝚁𝙽𝙴𝙳 𝙱𝚈•_* ${h[i].warnedby}\n`
            teskd += `┃✗ *_•𝚁𝙴𝙰𝚂𝙾𝙽•_* ${h[i].reason}\n┗━━━━━━━━━━⦿\n`
        }
        man.reply(teskd)
    }

)
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "broadcast",
        infocmd: "Bot makes a broadcast in all groups",
        kingclass: "group",
        kingpath: __filename,
        use: '<text for broadcast.>',
    },
    async(Void, citel, text,{isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(!text) return await citel.reply(`*_Uhh Dear, Provide text to broadcast in all groups_*`)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        citel.send(`*_Send Broadcast To ${anu.length} Group Chat, Finish Time ${ anu.length * 1.5} second_*`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: citel.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + citel.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Void.sendMessage(i, buttonMessaged, { quoted: citel,});
        }
        return await citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------
	Module_Exports({ on: "text" }, async(Void, citel) => {
	    const randomXp = 8;
	    let usrname = citel.pushName
	    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
	    if (hasLeveledUp) 
	    {
		    const sck1 = await Levels.fetch(citel.sender, "RandomXP");
		    const lvpoints = sck1.level;
		    var role = "GOD";
			 if (lvpoints <=  2) { var role = "Citizen";  } 
		    else if (lvpoints <=  4) { var role = "Baby Wizard"; } 
		    else if (lvpoints <=  6) { var role = "Wizard"; } 
		    else if (lvpoints <=  8) { var role = "Wizard Lord"; } 
		    else if (lvpoints <= 10) { var role = "Baby Mage"; } 
		    else if (lvpoints <= 12) { var role = "Mage"; } 
		    else if (lvpoints <= 14) { var role = "Master of Mage";} 
		    else if (lvpoints <= 16) { var role = "Child of Nobel";  } 
		    else if (lvpoints <= 18) { var role = "Nobel";} 
		    else if (lvpoints <= 20) { var role = "Speed of Elite"; }
		    else if (lvpoints <= 22) { var role = "Elite"; } 
		    else if (lvpoints <= 24) { var role = "Ace I"; } 
		    else if (lvpoints <= 26) { var role = "Ace II"; } 
		    else if (lvpoints <= 28) { var role = "Ace Master"; }
		    else if (lvpoints <= 30) { var role = "Ace Dominator"; }
		    else if (lvpoints <= 32) { var role = "Ace Elite"; }
		    else if (lvpoints <= 34) { var role = "Ace Supreme";} 
		    else if (lvpoints <= 36) { var role = "Supreme I"; }
		    else if (lvpoints <= 38) { var role = "Supreme Ii"; } 
		    else if (lvpoints <= 40) { var role = "Supreme Master"; } 
		    else if (lvpoints <= 42) { var role = "Legend III"; } 
		    else if (lvpoints <= 44) { var role = "Legend II"; } 
		    else if (lvpoints <= 46) { var role = "Legend"; } 
		    else if (lvpoints <= 55) { var role = "•𝐊𝐈𝐍𝐆•"; } 
		    else {  var role = "Kiddo";   }

		    if(name.levelupmessage !== 'false')
		    {
			    await Void.sendMessage(citel.chat, { image: {  url: await botpic() },
			caption: `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ •ᴡᴏᴡ,sᴏᴍᴇᴏɴᴇ ᴊᴜsᴛ•
┃✗ •ʟᴇᴠᴇʟᴇᴅ ᴜᴘ ʜᴜʜ•
┃✗ •ɴᴀᴍᴇ• ${citel.pushName}
┃✗ •ʟᴇᴠᴇʟ• ${sck1.level}🍭
┃✗ •ᴇxᴘ• ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
┃✗ •ʀᴏʟᴇ• *${role}*
┗━━━━━━━━━━⦿\n ${name.caption}`   }, { quoted: citel });
		    }
	    }
	})
	

