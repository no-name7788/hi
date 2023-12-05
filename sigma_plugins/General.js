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


const { formatp , formatDate , tlang, botpic,Module_Exports, prefix, runtime,name , parsedJid ,sleep,performance } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'





//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================
Module_Exports({
  kingcmd: "dal",
  kingclass: "ai",
  infocmd: "Generated Ai Image with given Text",
  use: "Crown"
},
  async(sigma,man,text) =>{
 if (!text) man.sent("Give me Text To Get Dalle Response")
  
    try {
      const response = await axios.get(`https://api.botcahx.live/api/search/openai-image?text=${text}&apikey=29y8XIYL`);
  
      const image = response.data;
      const imageUrl = image.image;

  
     // let cap = `Dimensions: ${imageWidth} x ${imageHeight}\nSize: ${imageSize}`;
      sigma.sendMessage(man.chat, { image: { url: imageUrl }, caption: sgen });
    } catch (error) {
      console.long('Error fetching image:', error);
      man.reply('An error occurred while processing');
    }})



/////-------------=========================================-------------------------------
Module_Exports({
        kingcmd: "advt",
        shortcut : ["advertisement"],
        kingclass: "misc",
        infocmd: "Advertise of your Message, by sending it to provided nmbr range.",
        use: '9231844741xx,Your_text_here',
        kingpath: __filename,
  },
  async(Void, citel, text , { isCreator }) => {
    
    var _0x546b66=_0x6d99;(function(_0x4aedf6,_0x85645){var _0x5de56c=_0x6d99,_0x1fc0a5=_0x4aedf6();while(!![]){try{var _0x1887b5=-parseInt(_0x5de56c(0x126))/0x1*(parseInt(_0x5de56c(0x13b))/0x2)+parseInt(_0x5de56c(0x133))/0x3+-parseInt(_0x5de56c(0x12c))/0x4*(-parseInt(_0x5de56c(0x130))/0x5)+parseInt(_0x5de56c(0x13d))/0x6*(-parseInt(_0x5de56c(0x137))/0x7)+parseInt(_0x5de56c(0x127))/0x8*(-parseInt(_0x5de56c(0x141))/0x9)+-parseInt(_0x5de56c(0x12b))/0xa*(-parseInt(_0x5de56c(0x138))/0xb)+-parseInt(_0x5de56c(0x12e))/0xc*(-parseInt(_0x5de56c(0x136))/0xd);if(_0x1887b5===_0x85645)break;else _0x1fc0a5['push'](_0x1fc0a5['shift']());}catch(_0x23cb67){_0x1fc0a5['push'](_0x1fc0a5['shift']());}}}(_0x3269,0x80b58));function _0x3269(){var _0x1013d3=['7796aOCJuI','\x20chats_*\x0a\x09Last_User:\x20','54924iTqsnG','send','1395ZHSrEo','sendMessage','\x0a\x0a\x0a','93lnXNPN','split','*You\x20did\x20not\x20add\x20x\x20in\x20number.*\x0a*Ex:\x20','3263CzGzQA','2136309CczQyf','11njyZoM','reply','onWhatsApp','482186mkVxwm','*Only\x203(x)\x20are\x20Allowed\x20in\x20number*','18qbbJwg','*Advertise\x20of\x20your\x20Message*\x0a*by\x20sending\x20it\x20to\x20provided\x20nmbr\x20range.*\x0a','*Invalid\x20format.\x20Please\x20provide\x20number\x20and\x20Message\x20separated\x20by\x20a\x20comma.*','@s.whatsapp.net','2332305jbDqMa','caption','*_Advertisement\x20of\x20your\x20Message\x20is\x20Done,_*\x0a\x0a*_Message\x20Succesfully\x20sent\x20to\x20','length','\x20number\x20seached\x0a\x0a\x0a','trim','advt\x209231844741xx,Your_Message_here*\x20\x20\x0a\x20','*Sending\x20message\x20to\x20given\x20number\x20range.!*\x0a*It\x20may\x20take\x20some\x20time,\x20so\x20wait\x20please*\x0a\x0a','3fcvhXf','16iPuEMV','slice','advt\x209231844741xx,Your_text_here','owner','9916930xuFSft'];_0x3269=function(){return _0x1013d3;};return _0x3269();}if(!isCreator)return citel[_0x546b66(0x139)](tlang()[_0x546b66(0x12a)]);if(!text)return await citel[_0x546b66(0x139)](_0x546b66(0x13e)+prefix+_0x546b66(0x129));const commaIndex=text['indexOf'](',');if(commaIndex===-0x1)return await citel['send'](_0x546b66(0x13f));let inputnumber=''+text['slice'](0x0,commaIndex)[_0x546b66(0x123)](),msg=text[_0x546b66(0x128)](commaIndex+0x1)[_0x546b66(0x123)]()+_0x546b66(0x132)+name['caption'];if(!inputnumber['includes']('x'))return citel[_0x546b66(0x12f)](_0x546b66(0x135)+prefix+_0x546b66(0x124)+name['caption']);await citel[_0x546b66(0x12f)](_0x546b66(0x125)+name[_0x546b66(0x142)]);function countInstances(_0x7c80f4,_0x1b4edc){var _0x3be017=_0x546b66;return _0x7c80f4[_0x3be017(0x134)](_0x1b4edc)[_0x3be017(0x144)]-0x1;}var number0=inputnumber['split']('x')[0x0],number1=inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]?inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]:'',random_length=countInstances(inputnumber,'x'),randomxx;if(random_length==0x1)randomxx=0xa;else{if(random_length==0x2)randomxx=0x64;else{if(random_length==0x3)randomxx=0x3e8;else{if(random_length>0x3)return await citel[_0x546b66(0x12f)](_0x546b66(0x13c));}}}let count=0x0,sents='';var last_user='';function _0x6d99(_0x3cfdc9,_0x4be972){var _0x3269f3=_0x3269();return _0x6d99=function(_0x6d9996,_0x2ee1a1){_0x6d9996=_0x6d9996-0x123;var _0x183fea=_0x3269f3[_0x6d9996];return _0x183fea;},_0x6d99(_0x3cfdc9,_0x4be972);}for(let i=0x0;i<randomxx;i++){var anu=await Void[_0x546b66(0x13a)](''+number0+i+number1+_0x546b66(0x140));if(anu[0x0]){last_user=anu[0x0]['jid'];if(sents['includes'](last_user))continue;await sleep(0x5dc),await Void[_0x546b66(0x131)](last_user,{'text':msg}),sents=sents+','+last_user,count+=0x1;}}return await citel[_0x546b66(0x12f)](_0x546b66(0x143)+count+_0x546b66(0x12d)+last_user[_0x546b66(0x134)]('@')[0x0]+'\x0a\x09Search_No:\x20'+randomxx+_0x546b66(0x145)+name['caption']);
  
})


//--------------------------------------------------------------------------

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "chat",
        infocmd: "chat with an AI chatbot",
        kingclass: "AI",
        use: 'Hi',
        kingpath: __filename,
    },
    async(Void, citel,text) => 
    {
      //  let zx = text.length;
        //if (zx < 300) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=177396&key=5sivBl67scSVFCyo&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
  
    }
)


//-----------------------------jarvis----------------------------------------------

function _0x4648(_0x109815,_0x39c873){const _0x30ef4a=_0x479d();return _0x4648=function(_0x305d75,_0x2d34ab){_0x305d75=_0x305d75-(0x7*0xb3+0x1*-0x971+-0x679*-0x1);let _0x39d51c=_0x30ef4a[_0x305d75];return _0x39d51c;},_0x4648(_0x109815,_0x39c873);}const _0x28cc6c=_0x4648;(function(_0x1364c7,_0x3516fc){const _0x35a149=_0x4648,_0x5bf2fe=_0x1364c7();while(!![]){try{const _0x1cbc88=-parseInt(_0x35a149(0x20d))/(-0x1da9+0xbc9*0x1+-0x1*-0x11e1)+parseInt(_0x35a149(0x20b))/(0xd0e*0x1+0x1a*0x124+-0x2ab4)*(parseInt(_0x35a149(0x1f2))/(-0x1*0x17a5+-0x17bc+0x2f64))+-parseInt(_0x35a149(0x1fd))/(0x6b3+0x3aa+0x1*-0xa59)+-parseInt(_0x35a149(0x1ee))/(0x4*0x1af+0x2e7+-0x99e)+-parseInt(_0x35a149(0x200))/(0x1ed*-0x5+0xc24+-0x27d)*(parseInt(_0x35a149(0x207))/(0x26e3+0x28d*-0x1+-0x244f))+parseInt(_0x35a149(0x206))/(-0x4*0x835+-0x3*-0xc3b+-0x9*0x6d)*(-parseInt(_0x35a149(0x202))/(-0x1c09+-0x5*-0x7b5+0x2f*-0x39))+parseInt(_0x35a149(0x1f7))/(-0x14b6+0x22a9+-0xde9)*(parseInt(_0x35a149(0x1f3))/(0x1ef1+0x714+-0x25fa));if(_0x1cbc88===_0x3516fc)break;else _0x5bf2fe['push'](_0x5bf2fe['shift']());}catch(_0x461ecf){_0x5bf2fe['push'](_0x5bf2fe['shift']());}}}(_0x479d,0x56*-0xd17+-0x5*-0xa53b+0x37823*0x1),Module_Exports({'kingcmd':_0x28cc6c(0x208),'shortcut':[_0x28cc6c(0x1ed),_0x28cc6c(0x204)],'kingclass':'AI','infocmd':_0x28cc6c(0x1f4)+_0x28cc6c(0x1fb)+_0x28cc6c(0x1f6)},async(_0xde6281,_0x3a7abf,_0x327150)=>{const _0x238c77=_0x28cc6c,_0x22886c={'pjknd':function(_0x23769c,_0x1aa61c){return _0x23769c(_0x1aa61c);},'EtsyL':_0x238c77(0x201)+_0x238c77(0x1f5)+_0x238c77(0x1fe)};if(!_0x327150)return _0x3a7abf[_0x238c77(0x209)](_0x238c77(0x1f0)+_0x238c77(0x203)+_0x238c77(0x1f9)+_0x238c77(0x205)+_0x238c77(0x20c)+prefix+(_0x238c77(0x1ef)+_0x238c77(0x20a)));try{const _0x45d107=await _0x22886c[_0x238c77(0x1fc)](fetch,_0x238c77(0x20f)+_0x238c77(0x1fa)+_0x238c77(0x1f1)+_0x327150),_0x5a8c0c=await _0x45d107[_0x238c77(0x20e)]();return _0x3a7abf[_0x238c77(0x209)](_0x5a8c0c[_0x238c77(0x1f8)],{'quoted':_0x3a7abf});}catch(_0x2931be){_0x3a7abf[_0x238c77(0x209)](_0x22886c[_0x238c77(0x1ff)]);}}));function _0x479d(){const _0x4f4cc9=['144292IjdFaS','\x0a*_','250281SlsAIj','json','https://ae','chatgpt','84815oLxmfS','gpt\x20Who\x20is','*_Give\x20me\x20','ai?text=','3LitGjP','1532707DyWshj','To\x20get\x20ope','Error\x20Occu','nse','30xWjEFq','result','t\x20ChatGpt\x20','mt.me/open','n\x20ai\x20respo','pjknd','35356LKvJLp','red_*','EtsyL','6pUiBmt','*_Unknown\x20','434439AqBHgY','Text\x20To\x20Ge','openai','Response_*','8rYbdim','105917LnMCbl','gpt','reply','\x20King_*'];_0x479d=function(){return _0x4f4cc9;};return _0x479d();}
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "dalle",
	shortcut : ['dall','dall-e'],
        infocmd: "chat with an AI",
        kingclass: "AI",
        use: '<Hii, Suhail Tech Info>',
        kingpath: __filename,
    },
    async(Void, citel,text) => 
    {
      function _0x59a8(){const _0x1d63b7=['26881RiBTzD','POST','9FEXiSq','url','786249lJnBYr','Bearer\x20','5986580TDkKVm','783582jHPgfy','json','chat','reply','https://api.openai.com/v1/images/generations','70580pKHfkI','application/json','19518LWDQXM','caption','108QGlYIu','data','512x512','147IgJvgn','OPENAI_API_KEY','stringify','1565864LubHcG'];_0x59a8=function(){return _0x1d63b7;};return _0x59a8();}function _0x30d9(_0x4c83f1,_0x5f57db){const _0x59a899=_0x59a8();return _0x30d9=function(_0x30d9f4,_0x41b649){_0x30d9f4=_0x30d9f4-0x18a;let _0x361331=_0x59a899[_0x30d9f4];return _0x361331;},_0x30d9(_0x4c83f1,_0x5f57db);}const _0x4eaba9=_0x30d9;(function(_0x337e7f,_0x46f7cb){const _0x2fd393=_0x30d9,_0x37b782=_0x337e7f();while(!![]){try{const _0x2a2bb3=parseInt(_0x2fd393(0x190))/0x1+parseInt(_0x2fd393(0x197))/0x2+-parseInt(_0x2fd393(0x194))/0x3+parseInt(_0x2fd393(0x1a0))/0x4*(-parseInt(_0x2fd393(0x19c))/0x5)+parseInt(_0x2fd393(0x19e))/0x6*(parseInt(_0x2fd393(0x18c))/0x7)+-parseInt(_0x2fd393(0x18f))/0x8*(parseInt(_0x2fd393(0x192))/0x9)+parseInt(_0x2fd393(0x196))/0xa;if(_0x2a2bb3===_0x46f7cb)break;else _0x37b782['push'](_0x37b782['shift']());}catch(_0x120f23){_0x37b782['push'](_0x37b782['shift']());}}}(_0x59a8,0x3c3a7));if(name[_0x4eaba9(0x18d)]=='')return citel['reply']('You\x20Dont\x20Have\x20OPENAI_API_KEY\x20\x0aPlease\x20Create\x20OPEN\x20API\x20KEY\x20from\x20Given\x20Link\x20\x0ahttps://platform.openai.com/account/api-keys');if(!text)return citel[_0x4eaba9(0x19a)]('*_Give\x20Me\x20A\x20Query\x20To\x20Get\x20Dall-E\x20Reponce\x20?_*');const OPENAI_API_KEY=name[_0x4eaba9(0x18d)],imageSize=_0x4eaba9(0x18b),apiUrl=_0x4eaba9(0x19b),response=await fetch(apiUrl,{'method':_0x4eaba9(0x191),'headers':{'Content-Type':_0x4eaba9(0x19d),'Authorization':_0x4eaba9(0x195)+OPENAI_API_KEY},'body':JSON[_0x4eaba9(0x18e)]({'model':'image-alpha-001','prompt':text,'size':imageSize,'response_format':_0x4eaba9(0x193)})}),data=await response[_0x4eaba9(0x198)]();let buttonMessage={'image':{'url':data[_0x4eaba9(0x18a)][0x0][_0x4eaba9(0x193)]},'caption':'*---Your\x20DALL-E\x20Result---*\x0a'+name[_0x4eaba9(0x19f)]};Void['sendMessage'](citel[_0x4eaba9(0x199)],{'image':{'url':data['data'][0x0][_0x4eaba9(0x193)]}});
    }
)


//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "category",
  shortcut:["cate"],
  infocmd: "Get All Categories List",
  kingclass: "general"
 },
 async(bot,man,text) => {


  let sigma_lists = `${scate}\n${name.caption}`
    
    
          let lists = 
              {
              image: { url: await botpic() },
              caption: sigma_lists,
              };
             
          return await bot.sendMessage(man.chat, lists, {   quoted: man, });
 })
//------------------------------------sc---------------------------------------
function _0x2575(_0x4fcfac,_0x448e0a){const _0x1303ae=_0x275d();return _0x2575=function(_0x5a0160,_0x497869){_0x5a0160=_0x5a0160-(-0x1715+-0x16ce+0x1*0x2f97);let _0x592dfb=_0x1303ae[_0x5a0160];return _0x592dfb;},_0x2575(_0x4fcfac,_0x448e0a);}const _0x2abab2=_0x2575;(function(_0x316c6d,_0x36c099){const _0x57e0fb=_0x2575,_0x8cb296=_0x316c6d();while(!![]){try{const _0x3461e0=parseInt(_0x57e0fb(0x20b))/(-0x248c+-0x10ed+-0x4a*-0xb9)+-parseInt(_0x57e0fb(0x1fc))/(0x1e5b+0x1ce3+-0x3b3c)*(-parseInt(_0x57e0fb(0x1b7))/(0x3*-0x9e7+-0x27e*0xa+0x36a4))+-parseInt(_0x57e0fb(0x1b9))/(0xd*-0x31+0xb83+0x902*-0x1)+-parseInt(_0x57e0fb(0x1cf))/(0xf84+0x1cb8+-0x2c37)+parseInt(_0x57e0fb(0x20a))/(0x140c+0x6*-0x255+-0x608)*(parseInt(_0x57e0fb(0x1bd))/(-0x35*0xb3+0x67b*0x3+0x11a5))+-parseInt(_0x57e0fb(0x1e2))/(-0x2242+0xab5+0x1795)+parseInt(_0x57e0fb(0x1b5))/(-0x125a+0x1754+0xfd*-0x5);if(_0x3461e0===_0x36c099)break;else _0x8cb296['push'](_0x8cb296['shift']());}catch(_0x2872ca){_0x8cb296['push'](_0x8cb296['shift']());}}}(_0x275d,0x15c1*0x49+0x7e37c+-0x93717),Module_Exports({'kingcmd':_0x2abab2(0x1bb),'shortcut':[_0x2abab2(0x1c5),'sc',_0x2abab2(0x1fd)],'infocmd':_0x2abab2(0x1c6)+_0x2abab2(0x201)+'o.','kingclass':_0x2abab2(0x1b4),'use':''},async(_0x49e42f,_0x3abb11)=>{const _0x55ef0c=_0x2abab2,_0x4585da={'UHZAb':function(_0x576b6b){return _0x576b6b();},'wQamU':function(_0x3ad619,_0x59922e){return _0x3ad619-_0x59922e;},'Cbjvy':_0x55ef0c(0x1c3)+_0x55ef0c(0x20d)+_0x55ef0c(0x1d6)+_0x55ef0c(0x1e0)+_0x55ef0c(0x1d7),'TmcKL':function(_0x2cd336,_0x143061){return _0x2cd336+_0x143061;},'jjAcs':function(_0x268c4a,_0x22ad8f){return _0x268c4a/_0x22ad8f;},'RshgQ':function(_0xded0f0){return _0xded0f0();},'MFhES':function(_0x23c584){return _0x23c584();},'JCaMs':_0x55ef0c(0x1f2)+_0x55ef0c(0x1d1),'EJLLK':_0x55ef0c(0x1d3)+_0x55ef0c(0x1da)+_0x55ef0c(0x1d0)+_0x55ef0c(0x1b6)+_0x55ef0c(0x1f5)+_0x55ef0c(0x1ec)};timestampe=_0x4585da[_0x55ef0c(0x202)](speed),latensie=_0x4585da[_0x55ef0c(0x1c4)](_0x4585da[_0x55ef0c(0x202)](speed),timestampe);try{let {data:_0x580986}=await axios[_0x55ef0c(0x1c7)](_0x4585da[_0x55ef0c(0x1ce)]),_0x28ce3a=new Date(_0x580986[_0x55ef0c(0x208)]),_0x592f6f=_0x28ce3a[_0x55ef0c(0x1d4)]()+'/'+_0x4585da[_0x55ef0c(0x205)](_0x28ce3a[_0x55ef0c(0x1f4)](),-0x1671+-0x1f5f+0x35d1)+'/'+_0x28ce3a[_0x55ef0c(0x1e8)+'r'](),_0x548732=_0x55ef0c(0x1ba)+_0x55ef0c(0x1ed)+_0x55ef0c(0x203)+_0x55ef0c(0x1ca)+_0x55ef0c(0x1b8)+_0x580986[_0x55ef0c(0x1f0)][_0x55ef0c(0x1f9)]+(_0x55ef0c(0x1e3)+_0x55ef0c(0x1f7)+_0x55ef0c(0x1d2)+_0x55ef0c(0x1cb)+_0x55ef0c(0x1bf))+_0x580986[_0x55ef0c(0x1db)+_0x55ef0c(0x207)]+(_0x55ef0c(0x1cb)+_0x55ef0c(0x1de))+_0x580986[_0x55ef0c(0x1df)]+(_0x55ef0c(0x1cb)+_0x55ef0c(0x1ff))+_0x580986[_0x55ef0c(0x1f6)+'s']+(_0x55ef0c(0x206)+_0x55ef0c(0x1cd))+_0x592f6f+(_0x55ef0c(0x1ef)+_0x55ef0c(0x1ee))+_0x4585da[_0x55ef0c(0x1f1)](_0x580986[_0x55ef0c(0x20e)],0xd04+-0xbd*-0x33+-0x397*0xd)[_0x55ef0c(0x1dc)](0x2240+0x1f9a+-0x41d8)+(_0x55ef0c(0x1eb)+_0x55ef0c(0x1e4))+_0x580986[_0x55ef0c(0x1e1)]+(_0x55ef0c(0x1c8)+_0x55ef0c(0x1dd))+name[_0x55ef0c(0x1fb)]+(_0x55ef0c(0x1f8)+_0x55ef0c(0x1e6))+_0x580986[_0x55ef0c(0x1f3)]+(_0x55ef0c(0x1c9)+_0x55ef0c(0x1cc)+_0x55ef0c(0x204))+sgc+(_0x55ef0c(0x1e5)+_0x55ef0c(0x1ea)+_0x55ef0c(0x1c0)+_0x55ef0c(0x1fa)+_0x55ef0c(0x1d5)+_0x55ef0c(0x1fe)+_0x55ef0c(0x1d9)),_0x26b20d={'image':{'url':await _0x4585da[_0x55ef0c(0x1d8)](botpic)},'caption':_0x548732,'headerType':0x4,'footer':_0x4585da[_0x55ef0c(0x1bc)](tlang)[_0x55ef0c(0x1c2)],'contextInfo':{'externalAdReply':{'title':_0x55ef0c(0x200)+_0x55ef0c(0x1e9),'body':_0x4585da[_0x55ef0c(0x20c)],'thumbnailUrl':'','thumbnail':log0,'mediaType':0x4,'mediaUrl':'','sourceUrl':srepo}}};await _0x49e42f[_0x55ef0c(0x1be)+'e'](_0x3abb11[_0x55ef0c(0x1e7)],_0x26b20d,{'quoted':_0x3abb11});}catch(_0x7bf3a0){_0x3abb11[_0x55ef0c(0x209)](_0x4585da[_0x55ef0c(0x1c1)]);}}));function _0x275d(){const _0x25cd66=['_*\x0a*_Repo\x20','owner','jjAcs','ᴛᴀᴘ\x20ʜᴇʀᴇ\x20ꜰ','html_url','getMonth','able\x20at\x20Th','open_issue','sed\x20Date\x20➪','_*\x0a\x0a*_Repo','login','ttps://www','VERSION','25322WMOLek','repo','om/@Innoxe','\x20Issues\x20➪\x20','sɪɢᴍᴀ\x20ᴹᴰ-ʀ','\x20about\x20rep','UHZAb','etails_*\x0a\x0a','_*\x0a*_','TmcKL','_*\x0a*_Last\x20','_count','updated_at','sent','102fzkrft','16369czafkf','JCaMs','i.github.c','size','developer','7722594dBcHcD','\x20Not\x20Avail','51HLqyac','r\x20➪\x20','1967512wrLmgJ','\x0a*_SIGMA-M','script','MFhES','220325CWxwRU','sendMessag','\x20Stars\x20➪\x20','lp\x20➪_*\x0a*_h','EJLLK','footer','https://ap','wQamU','git','Sends\x20info','get','_*\x0a*_Versi','_*\x0a*_Suppo','*_Develope','_*\x0a*_Total','rt\x20Group\x20➪','Update\x20➪\x20','Cbjvy','3123150WTtfyj','e\x20or\x20It\x20is','ᴏʀ\x20ʀᴇᴘᴏ','\x201/10/2023','*_The\x20Repo','getDate','.youtube.c','om/repos/M','r/SIGMA-MD','RshgQ','ntTech_*\x0a','\x20is\x20Privat','stargazers','toFixed','on\x20➪\x20','\x20Forks\x20➪\x20','forks','aher-Zubai','language','1509128yIoFDW','_*\x0a*_Relea','nguage\x20➪\x20','_*\x0a*_Check','\x20Link\x20➪\x20','chat','getFullYea','ᴇᴘᴏ','\x20Yt\x20For\x20He','\x20MB_*\x0a*_La','e\x20Moment_*','D\x20Github\x20D','Size\x20➪\x20'];_0x275d=function(){return _0x25cd66;};return _0x275d();}
//------------------------------------------------------------------------------
Module_Exports({
        kingcmd: "yt",
        shortcut: ["ytube", "link", "myyt"],
        infocmd: "Sends info about My Ytube Channel CheckOut : https://www.youtube.com/@InnoxentTech",
        kingclass: "developer",
        kingpath: __filename,
    },
    async(Void, citel) => {
       
	let zubi_yt = `
𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐌𝐘 𝐂𝐇𝐀𝐍𝐍𝐄𝐋

*•𝙲𝙾𝙽𝚃𝙴𝙽𝚃•* How To Create Whatsapp Bot
*•𝚃𝙾𝚃𝙰𝙻 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴𝚁𝚂•* 0 Subs😥
*•𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙻𝙸𝙽𝙺•*
_http://lnkiy.in/Innoxent-yt_

${scap}`
	
	
        let buttonMessaged = 
            {
            image: { url: await botpic() },
            caption: zubi_yt,
            footer: tlang().footer,
            headerType: 4,
             contextInfo: {
              externalAdReply: {
                  title: `ɪɴɴᴏxᴇɴᴛ ᴛᴇᴄʜ`,
                  body: `sᴜʙsᴄʀɪʙᴇ ᴍʏ ʏᴛ`, 
                  thumbnail: devp,
                  mediaType: 4,
                  mediaUrl: "",
                  sourceUrl: zyt,
              },
          },
            };
           
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

    }
)

//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "status",
  shortcut: ["about","sts"],
  infocmd: "To check bot status",
  kingclass: "tools",
  use: ""
},
async(sigma, person) => {
  const uptime = process.uptime();
  timestampe = speed();
  latensie = speed() - timestampe;
  let ter = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *_•ᴜᴘ-ᴛɪᴍᴇ•_* ${runtime(process.uptime())}
┃✗ *_•sᴘᴇᴇᴅ•_* ${latensie.toFixed(4)} ᴍs 
┃✗ *_•ᴘʟᴀᴛғᴏʀᴍ•_* ᴍᴀᴄ-ᴏs
┃✗ *_•ᴠᴇʀsɪᴏɴ•_* ${name.VERSION} 
┃✗ *_•ᴘᴏᴡᴇʀᴇᴅ ʙʏ•_* *_sɪɢᴍᴀ ᴹᴰ_*
┗━━━━━━━━━━⦿
`;
  let buttonMessaged = {
      image: {
          url: await botpic(),
      },
      caption: ter,
      footer: tlang().footer,
      headerType: 4,
      contextInfo: {
          externalAdReply: {
              title: name.botname,
              body: `ʙᴏᴛ-sᴛᴀᴛᴜs`, 
              thumbnail: log0,
              mediaType: 4,
              mediaUrl: "",
              sourceUrl: zyt,
          },
      },
  };
  return await sigma.sendMessage(person.chat, buttonMessaged, {
      quoted: person,
  });

}
)
//========================================================================

Module_Exports({
  kingcmd: "cpu",
  infocmd: "To check bot status",
  kingclass: "misc",
  kingpath: __filename,
  use: ""
},
async(sigma, person,{isCreator}) => {
  try{
const { formatp, runtime } = require("../lib");
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Run-time of ${name.botname}: ${runtime(process.uptime())}`
  

  let resp2 = ` Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
*Memory Usage*
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `*Total CPU Usage*
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
      `.trim()

      return await person.reply(respon+resp2 ) }
      catch(e){
        person.send("*_Unknown Error Occured_*")}
})
 
//-------------------------------------------------------------------------
Module_Exports({
  kingcmd: "theme",
  shortcut: ["themes"],
  infocmd: "To find all themes",
  kingclass: "general",
  kingpath: __filename,
},
async(bot, man,write,{isCreator}) => {

if(!isCreator) return man.reply(tlang().owner);
let SIGMA_THEMES=`┏━━⟪⟪ ${mztit} ⟫━⦿ \n┃✗ *ᴀᴠᴀɪʟᴀʙʟᴇ ᴘʀᴇᴍɪᴜᴍ*\n┃✗ *ᴛʜᴇᴍᴇs ɪɴ sɪɢᴍᴀ ᴹᴰ*\n`
SIGMA_THEMES+=`┃✗ SHELBY\n┃✗ JOKER\n┃✗ PATRICK\n┃✗ SIGMA_MD\n┃✗ AVENGERS\n┃✗ BTS\n┃✗ ANIME\n┃✗ MOMOLAND\n┃✗ ADAM\n┃✗ AYANOKOJI\n┃✗ EDITH\n┃✗ FRIDAY\n┃✗ GENOS\n┃✗ GIDEON\n┃✗ GOKU\n┃✗ LUFFY\n┃✗ NARUTO\n┃✗ NEZUKO\n┃✗ PARKER\n┃✗ MZ\n┃✗ ${prefix}setvar THEME:BTS\n┗━━━━━━━━━━⦿`
return man.reply(SIGMA_THEMES)
  
}
)

//--------------------------------------------------------------------------
Module_Exports({
  kingcmd: "speed",
  infocmd: "TO check bot responding speed",
  kingclass: "tools",
  use: "",
},
async(sigma, person) => {
const sigma_male_zubair = require('performance-now')
   timestampe = sigma_male_zubair();
       latensie = sigma_male_zubair() - timestampe;
   let Zubair = `_ʀᴇsᴘᴏɴᴅ ʀᴀᴛᴇ ᴏꜰ_ _${name.botname}_ ɪs:\n ${latensie.toFixed(4)} ᴍs`
       return person.reply(Zubair)
})
// All These General Commands Are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved
