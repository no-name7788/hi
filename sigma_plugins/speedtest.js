const { 
    Function, 
    fetchJson,
    prefix,
    name 
  } = require('./lib');
  
  const speedTest = require('speedtest-net');
  
  Function({
    kingcmd: "stest",
    kingclass: "tools",
    infocmd: "Runs a speedtest",
    use: "speedtest"
  }, async(sigma, person) => {
  
    const testSpeed = async () => {
      const speed = await speedTest({maxTime: 5000});
      
      const downMbps = speed.download.bandwidth / 125000;
      const upMbps = speed.upload.bandwidth / 125000;
      const pingMs = speed.ping.latency;
      
      await person.reply(`*${name.botname} Speed Test*
  
  Download: ${downMbps.toFixed(2)} Mbps
  Upload: ${upMbps.toFixed(2)} Mbps  
  Ping: ${pingMs} ms`);
    }
    
    await testSpeed();
    
  });