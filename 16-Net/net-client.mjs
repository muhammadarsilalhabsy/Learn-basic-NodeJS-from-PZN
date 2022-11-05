import net from 'net';

const netConnection = net.createConnection({
  port: 8080,
  host: 'localhost',
});

netConnection.on('data', (data) => {
  // mengambil data dari server
  console.log('Recive data from server : ' + data.toString());
});

setInterval(() => {
  netConnection.write('Jamal\r\n');
}, 5000);
