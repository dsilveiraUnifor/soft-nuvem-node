const express = require("express");//importa o modulo express 
const app = express(); //iniciando o express

app.get("/",function(req,res){
    res.send("Bem vindo ao meu site!");
})

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de produtos!</h1>");
})

app.get("/consulta/:parametro", function(req,res){
    //res --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    const nome = req.params.nome;
    if(nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }

})

app.listen(4000, function(erro){ // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log("Servidor Iniciado");


    }
})
