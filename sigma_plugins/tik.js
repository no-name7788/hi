
const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');
const ttdl = require('btch-downloader');


const { tiktokdl: downloadTikTok } = require('tiktokdl');

Module_Exports({
  kingcmd: 'tiktok',
  shortcut: ['tik'],
  kingclass: 'Downloads',
  infocmd: 'Download videos from TikTok.'
},

async (sigma, person, text) => {
  const url = text.split(' ')[1];

  try {
    const data = await downloadTikTok(url);
    sigma.sendMessage(person.chat, { text: 'TikTok video downloaded successfully!' });
  } catch (error) {
    sigma.sendMessage(person.chat, { text: 'Error downloading TikTok video: ' + error.message });
  }
});
