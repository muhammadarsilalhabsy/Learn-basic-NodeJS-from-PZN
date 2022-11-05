import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req.url);
  // console.log(req.headers);
  console.log(req.method);

  if (req.method === 'POST') {
    req.addListener('data', (data) => {
      res.write(data);
      res.end();
    });
  } else {
    if (req.url === '/dovi') {
      res.write('Hallo guys this is dovi page');
    } else {
      res.write('Hallo guys this is root');
    }
    res.end();
  }
});

server.listen('8088');
