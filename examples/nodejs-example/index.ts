import { DepsClient } from '../../src';

// Replace 'YOUR_API_KEY' with your actual API key
const client = new DepsClient({ apiKey: 'YOUR_API_KEY' });

async function main() {
  try {
    const status = await client.status.get();
    console.log('API Status:', status);

    const online = await client.online.get({ serverId: '1' });
    console.log('Online on server 1:', online);

    const player = await client.player.find({ serverId: '1', nickname: 'John_Doe' });
    console.log('Player info:', player);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main(); 