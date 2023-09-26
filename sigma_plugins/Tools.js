


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
  infocmd: "Installs external Plugins..",
  use: " ",
},
async(sigma, person, memo, {isCreator}) => {
function _0x5910(_0xb03251,_0x160920){const _0x11791e=_0xa225();return _0x5910=function(_0x58136f,_0x4fa22b){_0x58136f=_0x58136f-(-0x2532+0x3fb*0x5+0x11e8);let _0x14779e=_0x11791e[_0x58136f];return _0x14779e;},_0x5910(_0xb03251,_0x160920);}const _0x3b211a=_0x5910;(function(_0x46dd1f,_0x2dd984){const _0x283599=_0x5910,_0x151c49=_0x46dd1f();while(!![]){try{const _0x43cd2e=-parseInt(_0x283599(0xc3))/(-0x415+0x35a*-0x6+0x1832)*(-parseInt(_0x283599(0xc0))/(0x290+-0x1757+-0x14c9*-0x1))+parseInt(_0x283599(0xad))/(-0x26*-0x8+-0x16d3*0x1+0x15a6)+parseInt(_0x283599(0xc9))/(0x880*-0x2+-0x1*-0x2429+0x1d*-0xa9)+parseInt(_0x283599(0xaa))/(-0x1962+0x204f+-0x6e8)+parseInt(_0x283599(0xb0))/(0x4f*0x1b+0x8*0x456+0x3*-0xe55)*(parseInt(_0x283599(0xb6))/(-0x1*-0xcf9+0x1cad+0x1*-0x299f))+-parseInt(_0x283599(0xbc))/(0x93b+-0x42b+0xa1*-0x8)*(parseInt(_0x283599(0xa1))/(0x3*-0x4bd+0x25a1+-0x1761))+-parseInt(_0x283599(0xa4))/(-0x8a3+0x6b4+-0x5*-0x65)*(parseInt(_0x283599(0xbf))/(-0x139b*0x1+-0x1c72+-0x1*-0x3018));if(_0x43cd2e===_0x2dd984)break;else _0x151c49['push'](_0x151c49['shift']());}catch(_0x1fc7f5){_0x151c49['push'](_0x151c49['shift']());}}}(_0xa225,0x127a9+-0x245*-0x9c3+-0xb96ba));if(!isCreator)return person[_0x3b211a(0xb9)](tlang()[_0x3b211a(0xc5)]);if(!memo)return await person[_0x3b211a(0xb9)](_0x3b211a(0xb3)+_0x3b211a(0xc1)+_0x3b211a(0xb1)+_0x3b211a(0xa6)+_0x3b211a(0xbd));function _0xa225(){const _0x5145f5=['slice','5517032ICOQXH','```','.js','319IoShHO','142gUQcAM','give\x20me\x20Pl','\x20*ɪɴsᴛᴀʟʟᴇ','14921sGynMU','get','owner','quoted','ᴅ\x20ɪɴ*\x20','toString','1185128KOHnOu','age','ugin\x20link!','*sɪɢᴍᴀ\x20ᴹᴰ*','url','9eFpBVJ','split','href','737470payIIZ','Invalid\x20Pl','to\x20install','exec','random','ync','5125350dCjHDU','../lib','unlinkSync','2344908tYIgmw','writeFileS','reply_mess','2604234jAOEJm','ugin\x20Link\x20','*ᴘʟᴜɢɪɴ*\x20','```Please\x20','replace','memo','7kVOebC','save','ugin\x0a','reply','utf8'];_0xa225=function(){return _0x5145f5;};return _0xa225();}let trl=memo?memo:person[_0x3b211a(0xc6)]&&person[_0x3b211a(0xc6)][_0x3b211a(0xb5)]?person[_0x3b211a(0xc6)][_0x3b211a(0xb5)]:person[_0x3b211a(0xaf)+_0x3b211a(0x9d)];for(let Url of isUrl(trl)){try{var url=new URL(Url);}catch{person[_0x3b211a(0xb9)](_0x3b211a(0xa5)+_0x3b211a(0x9e));}let fs=require('fs'),{data}=await axios[_0x3b211a(0xc4)](url[_0x3b211a(0xa3)]),lp=/kingcmd: ["'](.*)["'],/g[_0x3b211a(0xa7)](data),lj=lp[0x1a98+0x1173+0x2c0a*-0x1][_0x3b211a(0xa2)]('\x20')[-0x4*0x652+0x1*-0x26f9+0x4041]||Math[_0x3b211a(0xa8)]()[_0x3b211a(0xc8)](0x2297+-0x2234+0x1*-0x3f)[_0x3b211a(0xbb)](-(-0x1f04+-0x95*0x15+0x2b42));l=lj[_0x3b211a(0xb4)](/[^A-Za-z]/g,''),await fs[_0x3b211a(0xae)+_0x3b211a(0xa9)](__dirname+'/'+l+_0x3b211a(0xbe),data,_0x3b211a(0xba));try{require(__dirname+'/'+l+_0x3b211a(0xbe));}catch(_0x33ccb1){return fs[_0x3b211a(0xac)](__dirname+'/'+l+_0x3b211a(0xbe)),person[_0x3b211a(0xb9)](_0x3b211a(0xa5)+_0x3b211a(0xb8)+_0x33ccb1+_0x3b211a(0xbd));}const {plugindb}=require(_0x3b211a(0xab));let plugin={};plugin['id']=l,plugin[_0x3b211a(0xa0)]=url,await new plugindb(plugin)[_0x3b211a(0xb7)](),person[_0x3b211a(0xb9)](_0x3b211a(0xb2)+l+(_0x3b211a(0xc2)+_0x3b211a(0xc7)+_0x3b211a(0x9f)+'\x20'));}})

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





