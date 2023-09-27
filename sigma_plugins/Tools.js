


const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,Module_Exports , tlang  , name } = require('../lib')
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
//---------------------------------------------------------------------------
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "ping",
    infocmd: "To check ping",
    kingclass: "tools",
    use: " ",
},
async(sigma, person) => {
    var inital = new Date().getTime();
    const { key } = await sigma.sendMessage(person.chat, {text: '_Checking ping!!!_'});
    var final = new Date().getTime();
   // await Secktor.sleep(1000)
   return await sigma.sendMessage(person.chat, {text: '*𝘗𝘐𝘕𝘎*\n *' + (final - inital) + ' 𝘔𝘚* ', edit: key});
}
);
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "plugins",
        shortcut :['plugin',"plist"],
        kingclass: "tools",
        infocmd: "Shows list of all externally installed modules",
        kingpath: __filename
    },
    async(Void, citel, text, { isCreator }) => {
 
        if (!isCreator) return citel.reply(tlang().owner)
      // if(!text) return await citel.reply("*_Uhh Please, Provide Me Plugin Url_*")
        let allmodtext = `*All External Installed Modules in ${name.botname}:*\n\n`
        allmodtext += await plugins()
        return await citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "remove",
        shortcut :['uninstall'],
        kingclass: "tools",
        infocmd: "removes external modules.",
        kingpath: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(!text) return await citel.reply("*_Please, Provide Me Plugin Name_*")
 
        if(text==='alls') 
        { 
         await plugindb.collection.drop() ; 
         return citel.reply(`Deleted All Plugins From ${name.botname}`) ;  
        }
 try 
 {
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        await citel.reply(`*_${kill}_* \n*Please Wait, ${name.botname} Restarting*`)
        const { exec } = require("child_process")
        exec('pm2 restart all')  
 }
 catch (e) {return await citel.reply(`*_That Plugin not Found in ${name.botname}_*`)}
 })

//---------------------------------------------------------------------------

Module_Exports({
  kingcmd: "install",
  kingclass: "tools",
  kingpath: "Installs external Plugins..",
  use: " ",
},
async(sigma, person, memo, {isCreator}) => {
const _0x40b212=_0x10ee;(function(_0x263616,_0x2170f8){const _0x25c89b=_0x10ee,_0x26f169=_0x263616();while(!![]){try{const _0x5eb918=parseInt(_0x25c89b(0xcd))/(0xde1+0x1f7a+-0xd7*0x36)*(-parseInt(_0x25c89b(0xc9))/(-0x2290+-0xa2*0x2+0x116*0x21))+-parseInt(_0x25c89b(0xb0))/(-0x2344+-0x2e9+0x263*0x10)*(-parseInt(_0x25c89b(0xc5))/(0x1394+-0x7da+-0x1*0xbb6))+-parseInt(_0x25c89b(0xc4))/(0x52a*0x1+0xd47*0x2+-0xa91*0x3)+-parseInt(_0x25c89b(0xb1))/(0x1*-0x4d9+-0x615+0x2bd*0x4)*(-parseInt(_0x25c89b(0xa4))/(0x1b0f+0x13b4+-0x2*0x175e))+parseInt(_0x25c89b(0xc1))/(-0xee3*-0x1+-0x1*-0x233+-0x2*0x887)*(-parseInt(_0x25c89b(0xb6))/(0x9*-0x259+0x466*0x4+-0x392*-0x1))+parseInt(_0x25c89b(0xcf))/(-0xb38+-0x92+0x2*0x5ea)*(-parseInt(_0x25c89b(0xa5))/(0x292+0x1c81+-0x1f08))+parseInt(_0x25c89b(0xbb))/(0x9*-0x232+0x2360*0x1+-0xf92);if(_0x5eb918===_0x2170f8)break;else _0x26f169['push'](_0x26f169['shift']());}catch(_0x454dab){_0x26f169['push'](_0x26f169['shift']());}}}(_0x2c66,0x6e0d0+0xad9b+-0x199*0x283));if(!isCreator)return person[_0x40b212(0xae)](tlang()[_0x40b212(0xb8)]);function _0x2c66(){const _0x583417=['lid\x20Plugin','```','3fKEbOS','../lib','290qKfIMH','split','age','startsWith','\x20Link\x20to\x20i','819NunlsR','86229trtLBz','slice','.js','exec','quoted','```Please\x20','*sɪɢᴍᴀ\x20ᴹᴰ*','ugin\x0a','random','reply','utf8','1176KXwQSX','5538rCiYUT','memo','replace','\x20*ɪɴsᴛᴀʟʟᴇ','Invalid\x20Pl','26658txMZnd','get','owner','ync','toLowerCas','8274252LmqnZY','ᴅ\x20ɪɴ*\x20','toString','url','reply_mess','unlinkSync','248WAfizE','*ᴘʟᴜɢɪɴ*\x20','writeFileS','561430VpZcyC','2104NfXALd','nstall```','give\x20me\x20Va','save','226694TbhnjS','https'];_0x2c66=function(){return _0x583417;};return _0x2c66();}function _0x10ee(_0x5c8140,_0x3d1ecc){const _0x4ff057=_0x2c66();return _0x10ee=function(_0x5a01ff,_0x11353d){_0x5a01ff=_0x5a01ff-(-0x1c8d+-0x22d4+0x4003);let _0x18ec22=_0x4ff057[_0x5a01ff];return _0x18ec22;},_0x10ee(_0x5c8140,_0x3d1ecc);}if(!memo[_0x40b212(0xba)+'e']()[_0x40b212(0xa2)](_0x40b212(0xca)))return await person[_0x40b212(0xae)](_0x40b212(0xaa)+_0x40b212(0xc7)+_0x40b212(0xcb)+_0x40b212(0xa3)+_0x40b212(0xc6));let trl=memo?memo:person[_0x40b212(0xa9)]&&person[_0x40b212(0xa9)][_0x40b212(0xb2)]?person[_0x40b212(0xa9)][_0x40b212(0xb2)]:person[_0x40b212(0xbf)+_0x40b212(0xd1)],url=memo[_0x40b212(0xd0)]('\x20')[-0x1245*-0x1+-0xa99+-0x7ac],fs=require('fs'),{data}=await axios[_0x40b212(0xb7)](url),lp=/kingcmd: ["'](.*)["'],/g[_0x40b212(0xa8)](data),lj=lp[0x5*0x46c+0xc16*-0x1+-0x5*0x201][_0x40b212(0xd0)]('\x20')[-0x24eb+-0xc39+0x3124]||Math[_0x40b212(0xad)]()[_0x40b212(0xbd)](0x4b*0x1+-0x1*-0xc83+-0xcaa)[_0x40b212(0xa6)](-(0xaa9+0x91a+0x10a*-0x13));l=lj[_0x40b212(0xb3)](/[^A-Za-z]/g,''),await fs[_0x40b212(0xc3)+_0x40b212(0xb9)](__dirname+'/'+l+_0x40b212(0xa7),data,_0x40b212(0xaf));try{require(__dirname+'/'+l+_0x40b212(0xa7));}catch(_0x37fcf4){return fs[_0x40b212(0xc0)](__dirname+'/'+l+_0x40b212(0xa7)),person[_0x40b212(0xae)](_0x40b212(0xb5)+_0x40b212(0xac)+_0x37fcf4+_0x40b212(0xcc));}const {plugindb}=require(_0x40b212(0xce));let plugin={};plugin['id']=l,plugin[_0x40b212(0xbe)]=url,await new plugindb(plugin)[_0x40b212(0xc8)](),person[_0x40b212(0xae)](_0x40b212(0xc2)+l+(_0x40b212(0xb4)+_0x40b212(0xbc)+_0x40b212(0xab)+'\x20'));



})

//------------------------------------------------------------------
Module_Exports(
    {   
     kingcmd: "restart",
     shortcut: ["res"],
     infocmd: "To restart bot",
     kingclass: "tools",
      kingpath: __filename
     }, async(Void, citel,text,{ isCreator }) => {
          if (!isCreator) return citel.reply(tlang().owner);
            const { exec } = require("child_process");
             citel.reply(`*_Please Wait While_*\n*_${name.botname} Restarting_*`); exec('pm2 restart all'); });





