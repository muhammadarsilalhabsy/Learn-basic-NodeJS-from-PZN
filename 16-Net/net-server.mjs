import net from 'net';

const netServer = net.createServer((client) => {
  console.info('client connected');

  client.on('data', (data) => {
    // mengambil data dari client
    console.info('receive data from client : ' + data.toString());

    // mengirim data ke client
    client.write("i'll give back your data : " + data.toString() + '\r\n');
    //  fungsi /r/n adalah enter
  });
});

netServer.listen(8080, 'localhost');
