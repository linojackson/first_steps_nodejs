var http = require("http");

http.createServer(function(requis, resposta){
    resposta.end("<h2>Hola</h2><br><hr><b>Teste</b>");

}).listen(8181);


console.log("It's running baby");