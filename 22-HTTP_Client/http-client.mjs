import https from 'https';

const endpoint = 'https://635272a4ffbb7da0f2d8983d.mockapi.io/api/v1/test';
// const options = ;

const request = https.request(
  endpoint,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  },
  (res) => {
    res.on('data', (data) => {
      console.log('Recived : ' + data.toString());
    });
  }
);

const body = JSON.stringify({
  name: 'dovi',
});

request.write(body);
request.end();
