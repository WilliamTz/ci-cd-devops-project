const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end("¡Hola desde CI/CD con Docker y GitHub Actions!");
}).listen(port, () => {
  console.log(Servidor en puerto ${port});
});
Y package.json:

{
  "name": "ci-cd-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "test": "echo 'Tests ejecutados con éxito'"
  }
}
