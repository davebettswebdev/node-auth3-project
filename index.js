const server = require('./api/server');
const PORT = process.env.PORT || 6000;

server.listen(PORT, () => console.log(`\n** Listening on port: ${PORT} **\n`));

server.get('/', (res) => {
    res.send("API is running!");
  })