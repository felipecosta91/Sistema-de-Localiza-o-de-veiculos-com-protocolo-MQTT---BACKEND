require('dotenv').config();
const on = require("./server");
const axios = require("axios");
const onServer = require("./server");
const onWrite = require("./write");
const time = [];
var anglo, cotada, ICH, salis, cabeluda, CampusII, ALM;
const api = (origem, destino) => {
  //consulta a api do google para controle de rota
  axios
    .get(
      "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric,driving&origins=" +
        origem +
        "&destinations=" +
        destino +
        `&key=${process.env.API_GOOGLE}`
    )
    .then(response => {
      //consulta api do google para controle de tempo
      axios
        .get(
          "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric,driving&origins=-31.7802207,-52.3257864|-31.781066,-52.335146|-31.779783,-52.339528|-31.775980,-52.339338|-31.772324,-52.342917|-31.772036,-52.340056|-31.77598,-52.339338&destinations=" +
            origem +
            `&key=${process.env.API_GOOGLE}`
        )
        .then(responseTimer => {
          // pega dados do response do axios em uma matriz
          var dis = response.data.rows[0].elements[0].distance.text;
          time[0] = responseTimer.data.rows[0].elements[0].duration.text;
          time[1] = responseTimer.data.rows[1].elements[0].duration.text;
          time[2] = responseTimer.data.rows[2].elements[0].duration.text;
          time[3] = responseTimer.data.rows[3].elements[0].duration.text;
          time[4] = responseTimer.data.rows[4].elements[0].duration.text;
          time[5] = responseTimer.data.rows[5].elements[0].duration.text;
          time[6] = responseTimer.data.rows[5].elements[0].duration.text;
          console.log(dis);
          // multiplica por 973.3 para dar maior precisão se já passou
          onServer();
          // efetua verificações
          if (dis.length >= 5) {
            disAnglo = parseFloat(dis);
            disAnglo = disAnglo * 973.3;

            if (disAnglo > 800.2) {
              anglo = "Já passou ANGLO";
            } else {
              anglo = time[0];
            }
            onWrite(anglo);
          }
          if (dis.length >= 5) {
            disCotada = parseFloat(dis);
            disCotada = disCotada * 973.3;

            if (disCotada > 1167.9599) {
              cotada = "Já passou Cotada";
            } else {
              cotada = time[1];
            }
            onWrite(anglo, cotada);
          }

          if (dis.length >= 5) {
            disICH = parseFloat(dis);
            disICH = disICH * 973.3;
            if (disICH > 1167.9599) {
              ICH = "Já passou ICH";
            } else {
              ICH = time[2];
            }
            onWrite(anglo, cotada, ICH);
          }
          if (dis.length >= 6) {
            disCampusII = parseFloat(dis);
            disCampusII = disCampusII * 973.3;
            if (disCampusII > 1300) {
              CampusII = "CampusII Já passou";
            } else {
              CampusII = time[3];
            }
            onWrite(anglo, cotada, ICH, CampusII);
          }
          if (dis.length >= 6) {
            disCabeluda = parseFloat(dis);
            disCabeluda = disCabeluda * 973.3;
            if (disCabeluda > 1945) {
              cabeluda = "cabeluda Já passou";
            } else {
              cabeluda = time[4];
            }
            onWrite(anglo, cotada, ICH, CampusII, cabeluda);
          }
          if (dis.length >= 6) {
            disSalis = parseFloat(dis);
            disSalis = disSalis * 973.3;
            if (disSalis > 1945 && disSalis < 2042) {
              salis = "salis Já passou";
            } else {
              salis = time[5];
            }

            onWrite(anglo, cotada, ICH, CampusII, cabeluda, salis);
          }
          if (dis.length >= 6) {
            disAlm = parseFloat(dis);
            disAlm = disSalis * 973.3;
            console.log(disAlm);
            if (disAlm > 284192 && disAlm < 290000) {
              console.log(disAlm);
              ALM = "ALM Já passou";
              console.log(disAlm);
            } else {
              ALM = time[5];
              console.log(ALM);
            }

            onWrite(anglo, cotada, ICH, CampusII, cabeluda, salis, ALM);
          }
        });
    });
};

module.exports = api;
