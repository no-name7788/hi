/**

 
 Module_Exports({
            kingcmd: "reaction-pack",
            kingclass: "reaction",
            use: '<quote|reply|tag>',
        },
 **/
/* These Commands Are Still Under Development



        const axios = require('axios')
        const { fetchJson,Module_Exports, GIFBufferToVideoBuffer} = require('../lib')
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "bite",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bite`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bitten to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bitten to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "blush",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/blush`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} blushed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} blushed to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "punch",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kick`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} punched to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} punched everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "pat",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/pat`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} patted with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} patted with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "kiss",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kiss`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} kissed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} kissed with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "kill",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kill`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} killed @${users.split("@")[0]}. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} killed everyone over here. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "happy",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} felt happy with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} felt happy with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "dance",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} danced with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} danced with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "yeet",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/yeet`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} yeeted to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} yeeted with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "wink",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/wink`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} winked with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} winked with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "slap",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/slap`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} slapped @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} slapped to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "bonk",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bonk`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bonked to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bonked to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "bully",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bully`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bullied to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bullied to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                    kingcmd: "cringe",
                    kingclass: "reaction",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/cringe`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} cringed at @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} cringed with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        Module_Exports({
                kingcmd: "cuddle",
                kingclass: "reaction",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
        
                var bite = await fetchJson(`https://api.waifu.pics/sfw/cuddle`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} cuddled with @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} cuddled with everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )*/