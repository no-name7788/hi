/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, ringtone, Module_Exports,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, name } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 3600 // 30 min
var dlsize = 100 // 100mb
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tgs",
            infocmd: "Downloads telegram stickers.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<add sticker url.>'
        },
        async(Void, citel, text) => {
		if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
		if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
		let tgUrl = text.split("|")[0];
		let find = tgUrl.split("/addstickers/")[1];
		let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
		let check = text.split("|")[1] || "";
		let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
		if (result.is_animated) return await citel.reply("Animated stickers are not supported");
  		else if (check.startsWith("info")) return await citel.reply(res);
		let limit = parseInt(check.split(",")[0]) || 10;
		let count =  parseInt(check.split(",")[1]) ||  0;
	 	let isCheckText = check.split(";")[1] ||  "Sticker"
		let isSticker = true ;
	        if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
		if(limit > result.stickers.length ) {  limit = result.stickers.length  }
	        if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
		if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
		await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
		for ( count ; count < limit ; count++) 
		{
		 // if (count >= limit) break;
		  let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
		  let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
		  if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: name.packname, author: "Suhail-Md"  }, "sticker");} 
		  else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
		  //count++;
		}


 
//function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':name['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        
	
 
 })
//---------------------------------------------------------------------------


Module_Exports({
    kingcmd: "apk",
    infocmd: "Downloads apks.",
    kingclass: "downloader",

    use: 'Whatsapp',
},

async(sigma, person, text) => {
const _0x3ce32d=_0x139b;(function(_0x3c0271,_0x368e76){const _0x46b826=_0x139b,_0x1a01d4=_0x3c0271();while(!![]){try{const _0x45d4e9=-parseInt(_0x46b826(0x1d6))/(0x3e+0xa86+-0xac3)*(-parseInt(_0x46b826(0x1ed))/(0x1*0x484+-0x2*0x837+0xbec))+-parseInt(_0x46b826(0x1fd))/(-0x2350+0x274+0x20df)+parseInt(_0x46b826(0x1c4))/(-0x652*-0x5+0x125*-0x17+-0x543)+parseInt(_0x46b826(0x202))/(0xaf2*-0x2+0x240c+-0xe23)+parseInt(_0x46b826(0x1fe))/(0x2631+-0x20fd+-0x52e)+parseInt(_0x46b826(0x201))/(0x2631+0x1d6a+0x5*-0xd84)+-parseInt(_0x46b826(0x20e))/(-0x1a7a+0x2*-0xd21+-0x34c4*-0x1)*(parseInt(_0x46b826(0x1cc))/(-0x1a*-0x173+-0x5c*-0x1+-0x2601));if(_0x45d4e9===_0x368e76)break;else _0x1a01d4['push'](_0x1a01d4['shift']());}catch(_0x56ba33){_0x1a01d4['push'](_0x1a01d4['shift']());}}}(_0x350d,0xdf797+0x11aca8+-0x109463));if(!text)return person[_0x3ce32d(0x1d2)](_0x3ce32d(0x1fc)+_0x3ce32d(0x20f)+_0x3ce32d(0x1eb)+prefix+(_0x3ce32d(0x207)+'pp'));const getRandom=_0x2f21c8=>{const _0x58eea4=_0x3ce32d,_0x3a3434={'QeUcE':function(_0x1350a2,_0xb2aa49){return _0x1350a2*_0xb2aa49;}};return''+Math[_0x58eea4(0x1e4)](_0x3a3434[_0x58eea4(0x1fa)](Math[_0x58eea4(0x1cd)](),0x3ef3+-0x1f18+0x735))+_0x2f21c8;};function _0x350d(){const _0x582464=['𝚈\x20','log','n/vnd.andr','Found,\x20Try','stream','378ielMQD','random','e-archive','\x20⟫━⦿\x0a┃┏➛\x20*','*_APP\x20not\x20','name','reply','jcFYD','ᴏᴡɴʟᴏᴀᴅᴇʀ*','readFileSy','10yEgKlC','\x0a┃✗\x20*•App\x20','jALXC','size','━━⦿\x0a*╰┈➤\x20𝙶','createWrit','chat','File\x20delet','NtUKh','\x0a┃✗\x20*_•Req','data','uester•_*\x20','\x20Name_*','ting\x20file:','floor','nzEZv','pushName','send','CqyDv','NNgvZ','pipe','\x0aEg:\x20','*_File\x20siz','73198MAQNaz','rDJlJ','Found,\x20Sor','unlink','Size•*\x20','pnNkt','Name•*\x20','fully','\x0a┃✗\x20*•Vers','┏━━⟪⟪\x20','aptoide-sc','then','.apk','QeUcE','┃┗➛\x20*ᴀᴘᴋ\x20ᴅ','*_Give\x20me\x20','5471286mljMUm','9931008HnuInA','han\x20250MB.','𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱','3120824hOdvMv','6492985OPSvZj','ion•*\x20Late','oid.packag','sendMessag','ded\x20Succes','apk\x20Whatsa','eStream','applicatio','catch','e\x20bigger\x20t','agsQd','ry_*','524456jYrblm','App\x20Name_*','length','finish','get','dllink','raper','*_Apk\x20not\x20','\x0a┗━━━━━━━━','error','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','botname','Error\x20dele','\x20Valid\x20App','sfully_*','7194676hhtunD','ed\x20success','\x20*_Downloa'];_0x350d=function(){return _0x582464;};return _0x350d();}let randomName=getRandom(_0x3ce32d(0x1f9));const filePath='./'+randomName,{search,download}=require(_0x3ce32d(0x1f7)+_0x3ce32d(0x214));let searc=await search(text),data={};if(searc[_0x3ce32d(0x210)])data=await download(searc[-0x29*-0x5d+0x1b95*0x1+-0x2a7a]['id']);else return person[_0x3ce32d(0x1d2)](_0x3ce32d(0x1d0)+_0x3ce32d(0x1ca)+_0x3ce32d(0x1c2)+_0x3ce32d(0x1e2));const apkSize=parseInt(data[_0x3ce32d(0x1d9)]);if(apkSize>0x92e+-0x2345*-0x1+0x2bab*-0x1)return person[_0x3ce32d(0x1d2)](_0x3ce32d(0x1ec)+_0x3ce32d(0x20b)+_0x3ce32d(0x1ff)+'_*');function _0x139b(_0x5304d0,_0x355c0a){const _0x5787f4=_0x350d();return _0x139b=function(_0x1382ec,_0x5adadd){_0x1382ec=_0x1382ec-(-0x78b*-0x3+-0x1b11+0x62e);let _0x29fee6=_0x5787f4[_0x1382ec];return _0x29fee6;},_0x139b(_0x5304d0,_0x355c0a);}const url=data[_0x3ce32d(0x213)];let inf=_0x3ce32d(0x1f6)+mztit+(_0x3ce32d(0x1cf)+_0x3ce32d(0x1bf)+_0x3ce32d(0x1fb)+_0x3ce32d(0x1d4)+_0x3ce32d(0x1d7)+_0x3ce32d(0x1f3))+data[_0x3ce32d(0x1d1)];inf+=_0x3ce32d(0x1d7)+_0x3ce32d(0x1f1)+data[_0x3ce32d(0x1d9)],inf+=_0x3ce32d(0x1f5)+_0x3ce32d(0x203)+'st',inf+=_0x3ce32d(0x1df)+_0x3ce32d(0x1e1)+'\x20'+person[_0x3ce32d(0x1e6)],inf+=_0x3ce32d(0x216)+_0x3ce32d(0x1da)+_0x3ce32d(0x200)+_0x3ce32d(0x1c7)+name[_0x3ce32d(0x1c0)]+'*',axios[_0x3ce32d(0x212)](url,{'responseType':_0x3ce32d(0x1cb)})[_0x3ce32d(0x1f8)](_0x275fae=>{const _0x1a258e=_0x3ce32d,_0x51dc97={'NNgvZ':_0x1a258e(0x211),'jALXC':_0x1a258e(0x1be)},_0x33efd2=fs[_0x1a258e(0x1db)+_0x1a258e(0x208)](filePath);return _0x275fae[_0x1a258e(0x1e0)][_0x1a258e(0x1ea)](_0x33efd2),new Promise((_0x4d5f19,_0x712336)=>{const _0x3386f6=_0x1a258e;_0x33efd2['on'](_0x51dc97[_0x3386f6(0x1e9)],_0x4d5f19),_0x33efd2['on'](_0x51dc97[_0x3386f6(0x1d8)],_0x712336);});})[_0x3ce32d(0x1f8)](()=>{const _0x3147f6=_0x3ce32d,_0xeeca21={'jcFYD':_0x3147f6(0x1c1)+_0x3147f6(0x1e3),'CqyDv':_0x3147f6(0x1dd)+_0x3147f6(0x1c5)+_0x3147f6(0x1f4),'pnNkt':_0x3147f6(0x209)+_0x3147f6(0x1c9)+_0x3147f6(0x204)+_0x3147f6(0x1ce),'NtUKh':function(_0x82a072,_0x5db410){return _0x82a072+_0x5db410;},'rDJlJ':function(_0x2396d6,_0x177b14){return _0x2396d6+_0x177b14;},'agsQd':_0x3147f6(0x1c6)+_0x3147f6(0x206)+_0x3147f6(0x1c3)};let _0x15f3e8={'document':fs[_0x3147f6(0x1d5)+'nc'](filePath),'mimetype':_0xeeca21[_0x3147f6(0x1f2)],'fileName':_0xeeca21[_0x3147f6(0x1de)](data[_0x3147f6(0x1d1)],_0x3147f6(0x1f9)),'caption':inf};sigma[_0x3147f6(0x205)+'e'](person[_0x3147f6(0x1dc)],_0x15f3e8,{'quoted':person}),person[_0x3147f6(0x1d2)](_0xeeca21[_0x3147f6(0x1ee)](text,_0xeeca21[_0x3147f6(0x20c)])),fs[_0x3147f6(0x1f0)](filePath,_0x3bd85d=>{const _0x9e371c=_0x3147f6;_0x3bd85d?console[_0x9e371c(0x1be)](_0xeeca21[_0x9e371c(0x1d3)],_0x3bd85d):console[_0x9e371c(0x1c8)](_0xeeca21[_0x9e371c(0x1e8)]);});})[_0x3ce32d(0x20a)](_0x3ca8be=>{const _0x2ad5a5=_0x3ce32d,_0x3d7667={'nzEZv':_0x2ad5a5(0x215)+_0x2ad5a5(0x1ef)+_0x2ad5a5(0x20d)};return fs[_0x2ad5a5(0x1f0)](filePath),person[_0x2ad5a5(0x1e7)](_0x3d7667[_0x2ad5a5(0x1e5)]);});

}
)
  //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "gdrive",
            infocmd: "Downloads telegram stickers.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<add sticker url.>'
        },

async(Void, citel, text) => {
if (!text) return citel.send('Uhh Please, Give me  Google Drive Url') 
if (!(text && text.match(/drive\.google/i))) citel.send('Uhh Please, Give me Valid Google Drive Url')
let id =(text.match(/\/?id=(.+)/i) || text.match(/\/d\/(.*?)\//))[1]
if (!id) return citel.reply('ID Not Found');
try {
	GDriveDl(id).then(async (res) => 
	{ 
                let data  =  "*File Name :* "+ res.fileName ;
	            data +="\n*File Size :* " + res.size +"Mb" ;
	            data +="\n*File Type :* "+ res.mimetype.split('/')[1] +  "\n" + name.caption;
	        let buttonMessage = 
		{
			document: { url: res.downloadUrl },
			fileName: res.fileName,
			mimetype: res.mimetype,
			caption : "\t  *GOOGLE DRIVE DOWNLOADER*  \n" + data
		}
	        return await Void.sendMessage(citel.chat,buttonMessage, { quoted: citel })
	})
 } catch (error) {  return citel.reply("```File Not Found```" ) }
	
})
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "gitclone",
    shortcut: ["gclone","gitc"],
    infocmd: "Downloads github repo",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'https://github.com/Maher-Zubair/SIGMA-MD',
},
async(sigma, person, text) => {
function _0x5559(_0x42a8f9,_0x1569a3){const _0x3d58d1=_0x5354();return _0x5559=function(_0xf3ee22,_0x3f5c25){_0xf3ee22=_0xf3ee22-(0x11ab*0x1+-0x6b1*-0x1+-0x176e);let _0x21d794=_0x3d58d1[_0xf3ee22];return _0x21d794;},_0x5559(_0x42a8f9,_0x1569a3);}const _0xe6aa8d=_0x5559;(function(_0x3e0605,_0x2fbb7d){const _0x533d4e=_0x5559,_0x2d6392=_0x3e0605();while(!![]){try{const _0x1b56bc=parseInt(_0x533d4e(0xfa))/(0x1585+0x1503+-0x2a87)+parseInt(_0x533d4e(0x10c))/(0x771+0x1a88+-0xeb*0x25)*(-parseInt(_0x533d4e(0xfd))/(-0x8d1+-0xcc7+0x159b))+-parseInt(_0x533d4e(0x119))/(-0x16f7+0x133*0x11+0x298)+parseInt(_0x533d4e(0x12b))/(0x137c+0x251e+-0x3895)*(-parseInt(_0x533d4e(0x10d))/(-0x18a*-0x4+0x103d*0x1+0x775*-0x3))+parseInt(_0x533d4e(0xf2))/(-0x2a9+0x28d*0x9+-0x1445)*(-parseInt(_0x533d4e(0x102))/(0x16db+-0x4*-0x583+0x669*-0x7))+parseInt(_0x533d4e(0xef))/(0xe87+0x175*-0x1a+0x1764)+-parseInt(_0x533d4e(0x117))/(-0x10*-0x20c+-0x1fcd+0x1*-0xe9)*(-parseInt(_0x533d4e(0x126))/(0x107a+-0x1*0xb01+0x8b*-0xa));if(_0x1b56bc===_0x2fbb7d)break;else _0x2d6392['push'](_0x2d6392['shift']());}catch(_0x591761){_0x2d6392['push'](_0x2d6392['shift']());}}}(_0x5354,0x1*-0x2e6ba+0x4*-0x1af7d+-0x7*-0x33b6f));if(!text)return await person[_0xe6aa8d(0x12f)](_0xe6aa8d(0x116)+_0xe6aa8d(0xf9)+_0xe6aa8d(0x10b)+prefix+(_0xe6aa8d(0xfb)+_0xe6aa8d(0xf6)+_0xe6aa8d(0xee)+_0xe6aa8d(0x118)+_0xe6aa8d(0xf1)+'*'));if(!text[_0xe6aa8d(0x10a)](_0xe6aa8d(0x115)))return person[_0xe6aa8d(0x12f)](_0xe6aa8d(0x11b)+_0xe6aa8d(0xf0)+_0xe6aa8d(0x112)+_0xe6aa8d(0x12c));const regex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;function _0x5354(){const _0x23858c=['i.github.c','ᴏ-ʟɪɴᴋ•*\x20h','https://gi','p\x0a┃✗\x20*•ʀᴇᴘ','\x20⟫━⦿\x0a┃┏➛\x20*','Repo\x20Url,_','1406536oljwrX','*gitclone\x20','\x0a┃✗\x20*•ꜰɪʟᴇ','503238JeVbMl','┏━━⟪⟪\x20','try\x20Url_*','*\x0a┃✗\x20*•ᴀᴜᴛ','•*\x20','26568Wtcyuu','hub.com/','*_Please,\x20','lid\x20Reposi','get','ʜᴏʀ•*\x20','replace','┃┗➛\x20*ʀᴇᴘᴏ\x20','includes','*\x0a\x20Ex:\x20','20vsvZPA','6vQLcsS','pushName','applicatio','sendMessag','headers','ed\x20is\x20inva','Provide\x20Va','n/zip','github.com','*_Provide\x20','108660kDnsWS','aher-Zubai','5341408qYHVJX','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','_The\x20link\x20','match','test','𝚈\x20','-ᴛʏᴘᴇ•*\x20zi','ttps://git','https://ap','\x0a┃✗\x20*•ʀᴇᴘᴏ','𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱','HEAD','om/repos/','4367uProCh','/zipball','\x0a┗━━━━━━━━','━━⦿\x0a*╰┈➤\x20𝙶','content-di','5216595JhWskT','lid_','ᴅᴏᴡɴʟᴏᴀᴅᴇʀ','\x0a┃✗\x20*•ʀᴇǫᴜ','reply','sposition','botname','ᴇsᴛᴇʀ•*\x20\x20','thub.com/M','5740641EkzFSw','you\x20provid','r/SIGMA-MD','3059BFExFl','chat'];_0x5354=function(){return _0x23858c;};return _0x5354();}if(!regex[_0xe6aa8d(0x11d)](text))return await person[_0xe6aa8d(0x12f)](_0xe6aa8d(0x104)+_0xe6aa8d(0x113)+_0xe6aa8d(0x105)+_0xe6aa8d(0xff));let [_,user,repo]=text[_0xe6aa8d(0x11c)](regex)||[];repo=repo[_0xe6aa8d(0x108)](/.git$/,'');let url=_0xe6aa8d(0x121)+_0xe6aa8d(0xf4)+_0xe6aa8d(0x125)+user+'/'+repo+_0xe6aa8d(0x127),filename=(await fetch(url,{'method':_0xe6aa8d(0x124)}))[_0xe6aa8d(0x111)][_0xe6aa8d(0x106)](_0xe6aa8d(0x12a)+_0xe6aa8d(0x130))[_0xe6aa8d(0x11c)](/attachment; filename=(.*)/)[0xcd7*0x1+-0x58*0x21+-0x17e];await sigma[_0xe6aa8d(0x110)+'e'](person[_0xe6aa8d(0xf3)],{'document':{'url':url},'caption':_0xe6aa8d(0xfe)+mztit+(_0xe6aa8d(0xf8)+_0xe6aa8d(0x11a)+_0xe6aa8d(0x109)+_0xe6aa8d(0x12d)+_0xe6aa8d(0x100)+_0xe6aa8d(0x107))+user+(_0xe6aa8d(0x122)+_0xe6aa8d(0x101))+repo+(_0xe6aa8d(0xfc)+_0xe6aa8d(0x11f)+_0xe6aa8d(0xf7)+_0xe6aa8d(0xf5)+_0xe6aa8d(0x120)+_0xe6aa8d(0x103))+user+'/'+repo+(_0xe6aa8d(0x12e)+_0xe6aa8d(0x132))+person[_0xe6aa8d(0x10e)]+(_0xe6aa8d(0x128)+_0xe6aa8d(0x129)+_0xe6aa8d(0x123)+_0xe6aa8d(0x11e))+name[_0xe6aa8d(0x131)]+'*','fileName':filename,'mimetype':_0xe6aa8d(0x10f)+_0xe6aa8d(0x114)});
})

  //---------------------------------------------------------------------------
  Module_Exports({
    kingcmd: "tts",
    infocmd: "text to voice",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'I am king',
},
async(sigma, person, memo) => {
    if (!memo) return person.reply(`_Give me text to change into audio_\nEx: ${prefix}tts i am SIGMA MALE`)
    let memotts = memo
    const ttsurl = googleTTS.getAudioUrl(memotts, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
    });
    return sigma.sendMessage(person.chat, {
        audio: {
            url: ttsurl,
        },
        mimetype: "audio/mpeg",
        fileName: `ttspersonsigma.m4a`,
    }, {
        quoted: person,
    });
}

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "video",
        infocmd: "Downloads video from yt.",
        kingclass: "downloader",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(bot, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.reply(`Example: ${prefix}video Surah Fateh`);
        let search = await yts(tax);
        let anu = search.videos[0];
        let urlYt = anu.url
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Video Size too Large!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp4");
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let Maher = {
                    video: fs.readFileSync(`./${randomName}`),
                    jpegThumbnail: log0,
        
                    mimetype: 'video/mp4',
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,
        height: 540,
                    width: 480,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `${name.ownername}`,
                            body: ``,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            renderLargerThumbnail: true,
                            mediaType: 4,
                            mediaUrl: ``,
                            sourceUrl: `${waUrl}`,
                        }
                    }
                }
             bot.sendMessage(citel.chat, Maher, { quoted: citel })
             return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB..`);
            }
            return fs.unlinkSync(`./${randomName}`);      


    }
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "song",
        desc: "Downloads audio from youtube.",
        category: "downloader",
        filename: __filename,
        use: '<text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        let search = await yts(text);
    if (!text) return citel.reply(`Give me song name/nExample: ${prefix}song My babe i love your voice`);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio file is too big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*Downloadig:* '+titleYt)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let Maher = {
                audio: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: `${name.ownername}`,
                        body: ``,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: text,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: `${waUrl}`,
                        
                    },
                },
            }
            await Void.sendMessage(citel.chat, Maher, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File size bigger then 100MB`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "music",
            infocmd: "Downloads ringtone.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<Dowanload Tiktok Sounds>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.send(`*Give A Number Example: ${prefix}music 5*`)
	const n = parseInt(text);
	if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```Give Number From 1 to 160```');
	   let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await Void.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
		audio: anu,
		fileName: url.toString() ,
		mimetype: 'audio/mp4',
		ptt: true 
		}
	return Void.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "ringtone",
            infocmd: "Downloads ringtone.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.send(`Example: ${prefix}ringtone back in black`)
	    const {ringtone } = require('../lib/scraper')
            let anu = await ringtone(text)
        let buttonMessage = {
		audio: { url: anu[0].audio },
		caption : `*${anu[0].title}*`,
		fileName: anu[0].title + '.mp3',
		mimetype: 'audio/mpeg',
		}
	return Void.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "pint",
        desc: "Downloads image from pinterest.",
        category: "downloader",
        filename: __filename,
        use: '<text|image name>',
    },
    async(Void, citel, text) => {
        if (!text) return citel.reply(`*_What Picture You Are Looking For?_*\nᴇɢ: ${prefix}pint crown`) && Void.sendMessage(citel.chat, {
            react: {
                text: '',
                key: citel.key
            }
        })
        try {
            anu = await pinterest(text)
            result = anu[Math.floor(Math.random() * anu.length)]
            let Maher = {
                image: {
                    url: result
                },
                caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,
                footer: tlang().footer,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: `${Gname}`,
                        body: ``,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: `${waUrl}`
                    }
                }
            }
            return Void.sendMessage(citel.chat, Maher, {
                quoted: citel
            })
        } catch (e) {
            console.log(e)
        }
    })
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "mediafire",
            shortcut :['mf','mfire'],
            infocmd: "Downloads media from Mediafire.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            
            if (!text.includes("mediafire.com")) return citel.reply(`The link you provided is invalid`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);
	
	if(!baby1.length) return citel.reply(`could not found anything`);
	const apkSize = parseInt(baby1[0].size);
	if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);
	
let result4 = ` *Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* :${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}

`;
	result4 +=name.caption ; 
	
            //citel.reply(`${result4}`);
            
            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                    
                }; 
                
 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "play",
            infocmd: "Downloads audio from youtube.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<give text>',
        },
        async(Void, citel, text) => {
  
                if (!text) return await citel.reply(`*PLease, Give Me Song Name_*\nEx: ${prefix}play bella ciao`);
                let yts = require("secktor-pack")
                let search = await yts(text);
                let i = search.all[1] ;
                let cap = `┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ ┏➛ *sɪɢᴍᴀ ᴹᴰ*\n┃✗ ┗➛ *ʏᴏᴜ-ᴛᴜʙᴇ ᴘʟᴀʏᴇʀ*   \n\n┃✗ *•𝚃𝙸𝚃𝙻𝙴•* " + i.title + "\n┃✗ *•𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽•* " + i.timestamp +"\n┃✗ *•𝚅𝙸𝙴𝚆𝚂•* "+i.views +"\n┃✗ *•𝚄𝙿𝙻𝙾𝙰𝙳𝙴𝙳•* " +i.ago +"\n┃✗ *•𝙰𝚄𝚃𝙷𝙾𝚁•* "+i.author.name+"\n┃✗ *•𝚄𝚁𝙻•* " + i.url +"\n┗━━━━━━━━━━⦿\n\n\n\n*_Reply 1 For Video_*\n*_Reply 2 For Audio_*` ;
                Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap });
           
           
           
           
           
           
            
           
           /*
    
    
            let search = await yts(text)
            let listSerch = []
            let teskd = `Result From ${text}.\n_+ ${search.all.length} more results._`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `*Suhail-MD* / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: tlang().footer,
                title: ``,
                buttonText: "Songs",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
            */
    })

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "audio",
        desc: "Downloads audio from youtube.",
        category: "downloader",
        filename: __filename,
        use: '<text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
    if (!text) return citel.send(`Example: ${prefix}song My Babe i love Your Voice`);
        let search = await yts(text);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*Downloadig:* '+titleYt)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let buttonMessage = {
                document: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: `${name.ownername}`,
                        body: ``,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: text,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: `${waUrl}`,
                        
                    },
                },
            }
            await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Then 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "yts",
        infocmd: "Sends given text result with all info and media links",
        category: "downloader",
        filename: __filename,
        use: 'bella ciao',
    },
    async(sigma, person, memo) => {
        let yts = require("secktor-pack");
        if (!memo) return person.reply(`Example: ${prefix}yts surah Rehman`);
        let search = await yts(memo);
        let memot = "*sɪɢᴍᴀ ᴹᴰ* *ʏᴏᴜ-ᴛᴜʙᴇ sᴇᴀʀᴄʜ*\n\n Result From " + memo + "\n\n*✯────────────────────✯*\n\n";
        let no = 1;
        for (let i of search.all) {
            memot += `*𝚃𝙸𝚃𝙻𝙴* : ${i.title}\n*𝚅𝙸𝙴𝚆𝚂* : ${i.views}\n*𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽* : ${
      i.timestamp
    }\n*𝚄𝚁𝙻* : ${
      i.url
    }\n\n*✯────────────────────✯*\n`;
        }
        return sigma.sendMessage(person.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: memot,
        }, {
            quoted: person,
        });
    }
)
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "ytmp4",
            shortcut: ["ytv","ytvid" , "ytvideo"],
            infocmd: "Downloads video from youtube.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<yt video url>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply(`❌Please provide me a url`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`❌ Give youtube link!`);
                let infoYt = await ytdl.getInfo(urlYt);
                 if(infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                   
                 
                 
                 let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: "  *Here's Your Video*" + name.caption ,
			 gifPlayback: false,
                   height: 496,
                   width: 640,
                   headerType: 4,
                        headerType: 4,
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 200mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "ytmp3",
	shortcut : ["yta"],
	infocmd: "Downloads audio by yt link.",
        kingclass: "downloader",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                citel.reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                
             
             let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                   
                }
             
             
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 200mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "ytdoc",
            shortcut: ["ytd"],
        infocmd: "Downloads audio by yt link as document.",
        kingclass: "downloader",
        use: '<ytdoc video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`;  };

        if (text.length === 0) return await citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
  
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) return await citel.reply(`❌ Give youtube link!`);
      
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return await citel.reply(`❌ I can't download that long video!`);

            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {  filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,  })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {   stream.on("error", reject); stream.on("finish", resolve);    });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
		          caption: "  *Here's Your File*\n" + name.caption ,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {         citel.reply(`❌ File size bigger than 200mb.`);    }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {     console.log(e)    }

})

/////=======================  REPLY SYSTEM ===================================================



// By @SuhailTechInfo
// https://wa.me/923184474176
// https://www.youtube.com/@suhailtechinfo0



/*Module_Exports({
    kingcmd: "song",
    infocmd: "Search Song From youtube",
    kingclass: "downloader",
    kingpath: __filename,
    use: '<Add Yt Song Query>'
},
async(Void, citel, text) => {
if (!text) return await citel.reply(`*_Ohh PLease, Give Me Song Name_*`);
let search = await yts(text)
let i = search.all[1] ;
let cap = "\t *---Yt Song Searched Data---*   \n\nTitle : " + i.title + "\nUrl : " + i.url +"\nDescription : " + i.timestamp +"\nViews : "+i.views +"\nUploaded : " +i.ago +"\nAuthor : "+i.author.name+"\n\n\nReply 1 To Video \nReply 2 To Audio" ;
Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap })
})
*/

//-----------------------------------------------------------------

Module_Exports({ on: "text" }, async(Void, citel ,text , {isCreator} ) => {

    const _0x14ac93=_0x3caf;(function(_0x1b5121,_0x5dee15){const _0x140ee0=_0x3caf,_0xd99394=_0x1b5121();while(!![]){try{const _0x100840=parseInt(_0x140ee0(0x1b9))/0x1+-parseInt(_0x140ee0(0x1a7))/0x2*(parseInt(_0x140ee0(0x1b4))/0x3)+-parseInt(_0x140ee0(0x1bc))/0x4+-parseInt(_0x140ee0(0x1a9))/0x5+parseInt(_0x140ee0(0x1bb))/0x6*(parseInt(_0x140ee0(0x1ad))/0x7)+parseInt(_0x140ee0(0x1c0))/0x8+-parseInt(_0x140ee0(0x1be))/0x9;if(_0x100840===_0x5dee15)break;else _0xd99394['push'](_0xd99394['shift']());}catch(_0x398085){_0xd99394['push'](_0xd99394['shift']());}}}(_0x28e1,0x4e44a));function _0x3caf(_0x33f635,_0x1b37f7){const _0x28e1ba=_0x28e1();return _0x3caf=function(_0x3caf60,_0x180b2f){_0x3caf60=_0x3caf60-0x1a4;let _0x408a02=_0x28e1ba[_0x3caf60];return _0x408a02;},_0x3caf(_0x33f635,_0x1b37f7);}if(citel[_0x14ac93(0x1c1)]&&citel[_0x14ac93(0x1b6)]){const lines=citel[_0x14ac93(0x1c1)][_0x14ac93(0x1b6)][_0x14ac93(0x1b8)]('\x0a');if(lines[0x0][_0x14ac93(0x1a8)]('Yt\x20Song\x20Searched\x20Data')){const urlLine=lines[_0x14ac93(0x1ab)](_0x4d3aae=>_0x4d3aae[_0x14ac93(0x1a5)](_0x14ac93(0x1b1)));let urlYt=urlLine['replace']('Url\x20:','')['trim']();try{let randomName;if(citel[_0x14ac93(0x1b6)][_0x14ac93(0x1a5)]('1')){randomName=_0x14ac93(0x1a6);const stream=ytdl(urlYt,{'filter':_0x366613=>_0x366613[_0x14ac93(0x1af)]==0x16||_0x366613[_0x14ac93(0x1af)]==0x12})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0x594b37,_0x3484a0)=>{const _0x2ab110=_0x14ac93;stream['on'](_0x2ab110(0x1ba),_0x3484a0),stream['on']('finish',_0x594b37);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'video':fs[_0x14ac93(0x1bf)](randomName),'mimetype':_0x14ac93(0x1ac),'caption':name['caption']},{'quoted':citel});}else{if(citel[_0x14ac93(0x1b6)]['startsWith']('2')){randomName='./ytsong.mp3';const stream=ytdl(urlYt,{'filter':_0xb925ca=>_0xb925ca[_0x14ac93(0x1ae)]==0xa0||_0xb925ca['audioBitrate']==0x80})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0xbd802f,_0x3e8a3)=>{const _0x5d910d=_0x14ac93;stream['on']('error',_0x3e8a3),stream['on'](_0x5d910d(0x1b3),_0xbd802f);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'audio':fs['readFileSync'](randomName),'mimetype':_0x14ac93(0x1b2)},{'quoted':citel});}}try{return fs[_0x14ac93(0x1aa)](randomName);}catch(_0x4b8369){}}catch(_0x2c1b30){return await citel[_0x14ac93(0x1b0)](_0x14ac93(0x1b5)+_0x2c1b30);}}}function _0x28e1(){const _0x5a2e4d=['video/mp4','33215aEaqLO','audioBitrate','itag','reply','Url\x20:','audio/mpeg','finish','708PUYfdf','Error\x20While\x20Downloading\x20Video\x20:\x20','text','chat','split','211117duABrL','error','540vpKxFa','1041800hTaUXQ','sendMessage','1389897APKDJS','readFileSync','4173952CbWaym','quoted','createWriteStream','pipe','startsWith','./ytsong.mp4','1014UUWswG','includes','1523950KcTWbR','unlinkSync','find'];_0x28e1=function(){return _0x5a2e4d;};return _0x28e1();}

})



