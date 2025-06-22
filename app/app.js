const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end("¡Hola desde CI/CD con Docker y GitHub Actions!");
}).listen(port, () => {
  console.log(Servidor en puerto ${port});
});
