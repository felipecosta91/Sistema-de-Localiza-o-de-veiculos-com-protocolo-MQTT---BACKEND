
var fs=require('fs')
var mqtt = require('mqtt')
var api = require('./api');
var client = mqtt.connect('mqtt://broker.mqttdashboard.com')
client.on('connect',()=>{
        client.subscribe('ufpel',(err)=>{

//se existir um erro imprime no console
        if(err!=null){
        console.log(err)
        }
                                        })
                         })

client.on('message',(topic,message)=>{
    // caputra a mensagem do mqtt
    var   payload_coord = message.toString()
    // utiliza o marcador * para separar latitude e longitude em um vetor
    const payload = payload_coord.split('*')
    fs.writeFile('./arquivos/coord.json','{"busId":"0001","latitude":"'+payload[0]+'","longitude":"'+payload[1]+'"}',()=>{})
    console.log(payload)  
    api(payload[0]+','+payload[1],'-31.780520,-52.326566')
    })

    

   
