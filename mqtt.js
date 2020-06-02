const fs = require('fs')
const schema = require('./database/schema')
const mqtt = require('mqtt')
const api = require('./api');
require('./database/connection')
const client = mqtt.connect('mqtt://broker.mqttdashboard.com')
client.on('connect', () => {
        client.subscribe('ufpel',(err)=>{

//se existir um erro imprime no console
        if(err!=null){
        console.log(err)
        }
                                        })
                         })

client.on('message',async (topic,message)=>{
    // caputra a mensagem do mqtt
    var   payload_coord = message.toString()
    // utiliza o marcador * para separar latitude e longitude em um vetor
    const payload = payload_coord.split('*')
    
    fs.writeFile('./arquivos/coord.json', '{"busId":"0001","latitude":"' + payload[0] + '","longitude":"' + payload[1] + '"}', () => { })
    const saveAsInfo = await schema.create({
                busID: '001',
                lat: payload[0],
                lng:payload[1]
    })
    console.log(payload)  
    api(payload[0]+','+payload[1],'-31.780520,-52.326566')
    })

    

   
