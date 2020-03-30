const fs = require("fs");

const onWrite = (anglo, cotada, ich, campus, cabeluda, salis, ALM) => {
  if (anglo === undefined) {
    anglo = "";
  }
  if (cotada === undefined) {
    cotada = "";
  }
  if (ich === undefined) {
    ich = "";
  }
  if (campus === undefined) {
    campus = "";
  }
  if (cabeluda === undefined) {
    cabeluda = "";
  }
  if (salis === undefined) {
    salis = "";
  }

  if (ALM === undefined) {
    ALM = "";
  }

  fs.writeFile(
    "./arquivos/times.json",
    '{"idBus": "1","anglo":"' +
      anglo +
      '","cotada":"' +
      cotada +
      '","ich":"' +
      ich +
      '","CAMPUSII":"' +
      campus +
      '","cabeluda":"' +
      cabeluda +
      '","salis":"' +
      salis +
      '","ALM":"' +
      ALM +
      '"}',
    () => {}
  );
};

module.exports = onWrite;
