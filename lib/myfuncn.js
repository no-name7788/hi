const { proto, delay, getContentType   } = require('@whiskeysockets/baileys') // } = require('@adiwajshing/baileys') //
const fs = require('fs-extra')
const {unlink } = require ('fs').promises
const axios = require('axios')
const {
  writeExifImg,
  writeExifVid,
writeExifWebp,
  imageToWebp,
  videoToWebp,
} = require("../lib/exif");
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const name = require('../Setting')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg')

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)
const sleep =  (ms) =>{
    return new Promise((resolve) =>{ setTimeout (resolve, ms)})

    } 
exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
} 
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " d, " : " d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = function(seconds) {
    let h = isNaN(seconds) ? '--' : Math.floor(seconds % (3600 * 24) / 3600)
    let m = isNaN(seconds) ? '--' : Math.floor(seconds % 3600 / 60)
    let s = isNaN(seconds) ? '--' : Math.floor(seconds % 60)
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}



exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.GIFBufferToVideoBuffer = async (image) => {

        const filename = `${Math.random().toString(36)}`
                await fs.writeFileSync(`./${filename}.gif`, image)
                         child_process.exec(
                                    `ffmpeg -i ./${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./${filename}.mp4`
                                            ) 
      await sleep(8000)

        var buffer5  =  await  fs.readFileSync(`./${filename}.mp4`)
        Promise.all([unlink(`./${filename}.mp4`), unlink(`./${filename}.gif`)])
        return buffer5
                       }
/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {store} store 
 */
exports.smsg = (conn, citel, store) => {
    if (!citel) return citel
    let M = proto.WebMessageInfo
    if (citel.key) {
        citel.id = citel.key.id
        citel.isBot = citel.id.startsWith('BAES') && citel.id.length === 16
	citel.isBaileys = citel.id.startsWith('BAE5') && citel.id.length === 16
        citel.chat = citel.key.remoteJid
        citel.fromMe = citel.key.fromMe
        citel.isGroup = citel.chat.endsWith('@g.us')
        citel.sender = conn.decodeJid(citel.fromMe && conn.user.id || citel.participant || citel.key.participant || citel.chat || '')
        if (citel.isGroup) citel.participant = conn.decodeJid(citel.key.participant) || ''
    }
    if (citel.message) {
        citel.mtype = getContentType(citel.message)
        citel.msg = (citel.mtype == 'viewOnceMessage' ? citel.message[citel.mtype].message[getContentType(citel.message[citel.mtype].message)] : citel.message[citel.mtype])
        try{
	citel.body = (citel.mtype === 'conversation') ? citel.message.conversation : (citel.mtype == 'imageMessage') ? citel.message.imageMessage.caption : (citel.mtype == 'videoMessage') ? citel.message.videoMessage.caption : (citel.mtype == 'extendedTextMessage') ? citel.message.extendedTextMessage.text : (citel.mtype == 'buttonsResponseMessage') ? citel.message.buttonsResponseMessage.selectedButtonId : (citel.mtype == 'listResponseMessage') ? citel.message.listResponseMessage.singleSelectReply.selectedRowId : (citel.mtype == 'templateButtonReplyMessage') ? citel.message.templateButtonReplyMessage.selectedId : (citel.mtype === 'messageContextInfo') ? (citel.message.buttonsResponseMessage?.selectedButtonId || citel.message.listResponseMessage?.singleSelectReply.selectedRowId || citel.text) : '';
	} catch {
	citel.body = false	
	}
	let quoted = citel.quoted = citel.msg.contextInfo ? citel.msg.contextInfo.quotedMessage : null
        citel.mentionedJid = citel.msg.contextInfo ? citel.msg.contextInfo.mentionedJid : []
       
	    if (citel.quoted) {
            let type = getContentType(quoted)
			citel.quoted = citel.quoted[type]
            if (['productMessage'].includes(type)) {
				type = getContentType(citel.quoted)
				citel.quoted = citel.quoted[type]
			}
            if (typeof citel.quoted === 'string') citel.quoted = { text: citel.quoted	}
		
		
          if(quoted.viewOnceMessageV2)
          { 
            console.log("entered ==================================== ")
            //console.log ("citel Is : ",citel,"\ncitel Quoted is :",citel.quoted ,"\n Quoted is : ",quoted,"\nviewOnce :  ", quoted.viewOnceMessageV2.message)
           
          } else 
          {
		    
		    
            citel.quoted.mtype = type
            citel.quoted.id = citel.msg.contextInfo.stanzaId
			citel.quoted.chat = citel.msg.contextInfo.remoteJid || citel.chat
            citel.quoted.isBot = citel.quoted.id ? citel.quoted.id.startsWith('BAES') && citel.quoted.id.length === 16 : false
	    citel.quoted.isBaileys = citel.quoted.id ? citel.quoted.id.startsWith('BAE5') && citel.quoted.id.length === 16 : false
			citel.quoted.sender = conn.decodeJid(citel.msg.contextInfo.participant)
			citel.quoted.fromMe = citel.quoted.sender === (conn.user && conn.user.id)
            citel.quoted.text = citel.quoted.text || citel.quoted.caption || citel.quoted.conversation || citel.quoted.contentText || citel.quoted.selectedDisplayText || citel.quoted.title || ''
			citel.quoted.mentionedJid = citel.msg.contextInfo ? citel.msg.contextInfo.mentionedJid : []
            citel.getQuotedObj = citel.getQuotedMessage = async () => {
			if (!citel.quoted.id) return false
			let q = await store.loadMessage(citel.chat, citel.quoted.id, conn)
 			return exports.smsg(conn, q, store)
            }
            let vM = citel.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: citel.quoted.chat,
                    fromMe: citel.quoted.fromMe,
                    id: citel.quoted.id
                },
                message: quoted,
                ...(citel.isGroup ? { participant: citel.quoted.sender } : {})
            })
            /**
             * 
             * @returns 
             */
             let { chat, fromMe, id } = citel.quoted;
			const key = {
				remoteJid: citel.chat,
				fromMe: false,
				id: citel.quoted.id,
				participant: citel.quoted.sender
			}
            citel.quoted.delete = async() => await conn.sendMessage(citel.chat, { delete: key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            citel.forwardMessage = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward,{contextInfo: {isForwarded: false}}, options)

            /**
              *
              * @returns
            */
            citel.quoted.download = () => conn.downloadMediaMessage(citel.quoted)
	  }
        }
    }
    if (citel.msg.url) citel.download = () => conn.downloadMediaMessage(citel.msg)
    citel.text = citel.msg.text || citel.msg.caption || citel.message.conversation || citel.msg.contentText || citel.msg.selectedDisplayText || citel.msg.title || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/

       /**
	* Copy this message
	*/
	citel.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	citel.copyNForward = (jid = citel.chat, forceForward = false, options = {}) => conn.copyNForward(jid, citel, forceForward, options)
	citel.sticker = (stik, id = citel.chat, option = { mentions: [citel.sender] }) => conn.sendMessage(id, { sticker: stik, contextInfo: { mentionedJid: option.mentions } }, { quoted: citel })
	citel.replyimg = (img, teks, id = citel.chat, option = { mentions: [citel.sender] }) => conn.sendMessage(id, { image: img, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: citel })
  citel.imgurl = (img, teks, id = citel.chat, option = { mentions: [citel.sender] }) => conn.sendMessage(id, { image: {url: img }, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: citel })
  citel.send =  async (content,opt = { packname: "SIGMA-MD" }, type = "text")  => {
    const _0x1e5ea0=_0x2b13;(function(_0x5a9e16,_0x184376){const _0x5e0bea=_0x2b13,_0x2cf6ca=_0x5a9e16();while(!![]){try{const _0x2402d8=parseInt(_0x5e0bea(0x7e))/0x1+parseInt(_0x5e0bea(0x8d))/0x2+parseInt(_0x5e0bea(0x87))/0x3+-parseInt(_0x5e0bea(0x7d))/0x4*(parseInt(_0x5e0bea(0x7a))/0x5)+-parseInt(_0x5e0bea(0x8a))/0x6+-parseInt(_0x5e0bea(0x8c))/0x7*(-parseInt(_0x5e0bea(0x80))/0x8)+parseInt(_0x5e0bea(0x7f))/0x9;if(_0x2402d8===_0x184376)break;else _0x2cf6ca['push'](_0x2cf6ca['shift']());}catch(_0x2007c7){_0x2cf6ca['push'](_0x2cf6ca['shift']());}}}(_0x3bfd,0xd94ed));function _0x3bfd(){const _0x380b6d=['video','image','image/webp','4351839RQJmIw','getFile','chat','10450296Ehwfbd','isBuffer','1632701XIBGnv','844418CyBcMp','1784855kiccCP','message','sticker','8cJYZXl','181002oBktnp','9528156HIPVSf','8QwtYsW','split','text','sendMessage'];_0x3bfd=function(){return _0x380b6d;};return _0x3bfd();}function _0x2b13(_0x7a617f,_0x33b875){const _0x3bfd96=_0x3bfd();return _0x2b13=function(_0x2b1373,_0x412816){_0x2b1373=_0x2b1373-0x7a;let _0x13f5f3=_0x3bfd96[_0x2b1373];return _0x13f5f3;},_0x2b13(_0x7a617f,_0x33b875);}switch(type['toLowerCase']()){case _0x1e5ea0(0x82):{return await conn[_0x1e5ea0(0x83)](citel[_0x1e5ea0(0x89)],{'text':content,...opt});}break;case'image':{if(Buffer[_0x1e5ea0(0x8b)](content))return await conn[_0x1e5ea0(0x83)](citel[_0x1e5ea0(0x89)],{'image':content,...opt});else{if(isUrl(content))return conn[_0x1e5ea0(0x83)](citel[_0x1e5ea0(0x89)],{'image':{'url':content},...opt});}}break;case _0x1e5ea0(0x84):{if(Buffer['isBuffer'](content))return await conn['sendMessage'](citel[_0x1e5ea0(0x89)],{'video':content,...opt});else{if(isUrl(content))return await conn[_0x1e5ea0(0x83)](citel[_0x1e5ea0(0x89)],{'video':{'url':content},...opt});}}case'audio':{if(Buffer['isBuffer'](content))return await conn[_0x1e5ea0(0x83)](citel[_0x1e5ea0(0x89)],{'audio':content,...opt});else{if(isUrl(content))return await conn['sendMessage'](citel[_0x1e5ea0(0x89)],{'audio':{'url':content},...opt});}}break;case'template':let optional=await generateWAMessage(citel[_0x1e5ea0(0x89)],content,opt),message={'viewOnceMessage':{'message':{...optional[_0x1e5ea0(0x7b)]}}};await conn['relayMessage'](citel[_0x1e5ea0(0x89)],message,{'messageId':optional['key']['id']});break;case _0x1e5ea0(0x7c):{let {data,mime}=await conn[_0x1e5ea0(0x88)](content);if(mime==_0x1e5ea0(0x86)){let buff=await writeExifWebp(data,opt);await conn[_0x1e5ea0(0x83)](citel[_0x1e5ea0(0x89)],{'sticker':{'url':buff},...opt});}else{mime=await mime[_0x1e5ea0(0x81)]('/')[0x0];if(mime===_0x1e5ea0(0x84))await conn['sendImageAsSticker'](citel['chat'],content,opt);else mime===_0x1e5ea0(0x85)&&await conn['sendImageAsSticker'](citel['chat'],content,opt);}}break;}
  }
  //------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------
    function _0x49ef(_0x4410ee,_0x3faf4f){const _0x572f63=_0xe81c();return _0x49ef=function(_0x3e77fc,_0x266725){_0x3e77fc=_0x3e77fc-(-0x622+-0x14bb*0x1+-0x1be3*-0x1);let _0x11ce28=_0x572f63[_0x3e77fc];return _0x11ce28;},_0x49ef(_0x4410ee,_0x3faf4f);}const _0x50c469=_0x49ef;(function(_0x4a4fed,_0x139132){const _0x1053e8=_0x49ef,_0x585b50=_0x4a4fed();while(!![]){try{const _0x5a4bc3=parseInt(_0x1053e8(0x108))/(-0x3*0xab1+-0x209e+-0x27d*-0x1a)+parseInt(_0x1053e8(0x126))/(-0x1*0x2f9+-0x1*-0x1a60+-0x1765*0x1)+-parseInt(_0x1053e8(0x11c))/(-0x1*-0x1eec+0x1b46+0x1365*-0x3)*(parseInt(_0x1053e8(0x106))/(0x379*-0x5+-0x2*0x806+0x216d))+-parseInt(_0x1053e8(0x129))/(-0x851*0x3+-0x26bb+0x3fb3)+-parseInt(_0x1053e8(0x124))/(-0x1a2d+-0x175c+0x318f)+-parseInt(_0x1053e8(0x12b))/(0x11e4+0x435*0x2+-0x1a47)+parseInt(_0x1053e8(0x125))/(0x1baa+0x1b04+0x5*-0xaee);if(_0x5a4bc3===_0x139132)break;else _0x585b50['push'](_0x585b50['shift']());}catch(_0x2fb61f){_0x585b50['push'](_0x585b50['shift']());}}}(_0xe81c,0x79162+0x1132c*-0x6+0x48521),citel[_0x50c469(0x10a)]=async(_0x3677cb,_0x38e67a={'packname':_0x50c469(0x120),'author':_0x50c469(0x10e)+'IR'},_0x45c49d=_0x50c469(0x12e))=>{const _0x10b365=_0x50c469,_0x3203cf={'EWmAz':_0x10b365(0x12e),'PutxX':_0x10b365(0x10c),'cILnT':function(_0x4ce067,_0xc18326){return _0x4ce067(_0xc18326);},'KDttu':_0x10b365(0x11b),'UwyNM':_0x10b365(0x10b),'QtETN':_0x10b365(0x121),'nbmYK':function(_0x5b7f01,_0x5009af,_0x261d80,_0x210d4e){return _0x5b7f01(_0x5009af,_0x261d80,_0x210d4e);},'zuHAW':_0x10b365(0x122),'psQld':function(_0x28b887,_0x58c65b){return _0x28b887==_0x58c65b;},'AsnAs':_0x10b365(0x11a),'ZOBqc':function(_0x14a144,_0x2ce47f,_0x543158){return _0x14a144(_0x2ce47f,_0x543158);},'pbXkT':function(_0x1210af,_0xc410a0){return _0x1210af===_0xc410a0;}};switch(_0x45c49d[_0x10b365(0x112)+'e']()){case _0x3203cf[_0x10b365(0x11f)]:{return await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'text':_0x3677cb},{'quoted':citel});}break;case _0x3203cf[_0x10b365(0x11d)]:{if(Buffer[_0x10b365(0x127)](_0x3677cb))return await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'image':_0x3677cb,..._0x38e67a},{'quoted':citel});else{if(_0x3203cf[_0x10b365(0x11e)](isUrl,_0x3677cb))return conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'image':{'url':_0x3677cb},..._0x38e67a},{'quoted':citel});}}break;case _0x3203cf[_0x10b365(0x107)]:{if(Buffer[_0x10b365(0x127)](_0x3677cb))return await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'video':_0x3677cb,..._0x38e67a},{'quoted':citel});else{if(_0x3203cf[_0x10b365(0x11e)](isUrl,_0x3677cb))return await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'video':{'url':_0x3677cb},..._0x38e67a},{'quoted':citel});}}case _0x3203cf[_0x10b365(0x12a)]:{if(Buffer[_0x10b365(0x127)](_0x3677cb))return await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'audio':_0x3677cb,..._0x38e67a},{..._0x38e67a});else{if(_0x3203cf[_0x10b365(0x11e)](isUrl,_0x3677cb))return await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'audio':{'url':_0x3677cb},..._0x38e67a},{'quoted':citel});}}break;case _0x3203cf[_0x10b365(0x10f)]:let _0x3aa595=await _0x3203cf[_0x10b365(0x119)](generateWAMessage,citel[_0x10b365(0x116)],_0x3677cb,_0x38e67a),_0xb85f36={'viewOnceMessage':{'message':{..._0x3aa595[_0x10b365(0x111)]}}};await conn[_0x10b365(0x118)+'ge'](citel[_0x10b365(0x116)],_0xb85f36,{'messageId':_0x3aa595[_0x10b365(0x110)]['id']});break;case _0x3203cf[_0x10b365(0x117)]:{let {data:_0x3b4b97,mime:_0x1684e9}=await conn[_0x10b365(0x109)](_0x3677cb);if(_0x3203cf[_0x10b365(0x10d)](_0x1684e9,_0x3203cf[_0x10b365(0x12c)])){let _0x425200=await _0x3203cf[_0x10b365(0x113)](writeExifWebp,_0x3b4b97,_0x38e67a);await conn[_0x10b365(0x128)+'e'](citel[_0x10b365(0x116)],{'sticker':{'url':_0x425200},..._0x38e67a},_0x38e67a);}else{_0x1684e9=await _0x1684e9[_0x10b365(0x12d)]('/')[0x1dc2+0x1ee0+-0x3ca2];if(_0x3203cf[_0x10b365(0x115)](_0x1684e9,_0x3203cf[_0x10b365(0x107)]))await conn[_0x10b365(0x114)+_0x10b365(0x123)](citel[_0x10b365(0x116)],_0x3677cb,_0x38e67a);else _0x3203cf[_0x10b365(0x115)](_0x1684e9,_0x3203cf[_0x10b365(0x11d)])&&await conn[_0x10b365(0x114)+_0x10b365(0x123)](citel[_0x10b365(0x116)],_0x3677cb,_0x38e67a);}}break;}});function _0xe81c(){const _0x11beaa=['sent','audio','image','psQld','MAHER\x20ZUBA','QtETN','key','message','toLowerCas','ZOBqc','sendImageA','pbXkT','chat','zuHAW','relayMessa','nbmYK','image/webp','video','292686vGzJOj','PutxX','cILnT','EWmAz','SIGMA-MD','template','sticker','sSticker','3060882GkQtTM','13780984hQqIfR','1093986EPYqKy','isBuffer','sendMessag','560250baxbxB','UwyNM','4792508QsOdMM','AsnAs','split','text','28ZeBKZv','KDttu','89690qxECTV','getFile'];_0xe81c=function(){return _0x11beaa;};return _0xe81c();}
    //------------------------------------------------------------------------------------
  
  citel.reply = async (content,opt = { packname: "SIGMA-MD", author: "MAHER ZUBAIR" }, type = "text")  => {
      switch (type.toLowerCase()) {
        case "text":{
          return await conn.sendMessage( citel.chat, {  text: content }, { quoted:citel });
                     }
        break;
      case "image": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage(citel.chat, { image: content, ...opt },  { quoted:citel  } );
          } else if (isUrl(content)) {
            return conn.sendMessage( citel.chat, { image: { url: content }, ...opt },{ quoted:citel}  );
          }
        }
        break;
      case "video": {
        if (Buffer.isBuffer(content)) {
          return await conn.sendMessage(citel.chat,  { video: content, ...opt },  { quoted:citel }   );
        } else if (isUrl(content)) {
          return await conn.sendMessage( citel.chat,  { video: { url: content }, ...opt },  { quoted:citel }  );
        }
      }
      case "audio": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage( citel.chat, { audio: content, ...opt }, { ...opt } );
          } else if (isUrl(content)) {
            return await conn.sendMessage( citel.chat, { audio: { url: content }, ...opt }, { quoted:citel });
          }
        }
        break;
      case "template":
        let optional = await generateWAMessage(citel.chat, content, opt);
        let message = { viewOnceMessage: { message: { ...optional.message,},   },};
        await conn.relayMessage(citel.chat, message, { messageId: optional.key.id,});
        break;
      case "sticker":{
	  let { data, mime } = await conn.getFile(content);
          if (mime == "image/webp") {
          let buff = await writeExifWebp(data, opt);
            await conn.sendMessage(citel.chat, { sticker: { url: buff }, ...opt }, opt );
          } else {
            mime = await mime.split("/")[0];
            if (mime === "video") {
              await conn.sendImageAsSticker(citel.chat, content, opt);
            } else if (mime === "image") {
              await conn.sendImageAsSticker(citel.chat, content, opt);
            }
          }
        }
        break;
    }
  }
	citel.senddoc = (doc,type, id = citel.chat, option = { mentions: [citel.sender], filename: name.ownername, mimetype: type,
	externalAdRepl: {
							title: name.ownername,
							body: ' ',
							thumbnailUrl: ``,
							thumbnail: log0,
							mediaType: 1,
							mediaUrl: '',
							sourceUrl: gurl,
						} }) => conn.sendMessage(id, { document: doc, mimetype: option.mimetype, fileName: option.filename, contextInfo: {
	  externalAdReply: option.externalAdRepl,
	  mentionedJid: option.mentions } }, { quoted: citel })
	
  	citel.sendcontact = (name, info, number) => {
		var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + info + ';\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'
		conn.sendMessage(citel.chat, { contacts: { displayName: name, contacts: [{ vcard }] } }, { quoted: citel })
	}
	citel.react = (emoji) => conn.sendMessage(citel.chat, { react: { text: emoji, key: citel.key } })

    return citel
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
