var http = require("http");

http.createServer(function(requis, resposta){
    resposta.end("<h2>Hola</h2>");

}).listen(8181);


console.log("It's running baby");