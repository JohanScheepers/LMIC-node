/*******************************************************************************
 *
 *  File:         lmic-node-uplink-formatters.js
 * 
 *  Function:     LMIC-node uplink payload formatter JavaScript function(s).
 * 
 *  Author:       Johan  Scheepers
 * 
 *  Description:  These function(s) are for use with The Things Network V3. 
 *                 
 ******************************************************************************/


 function decodeUplink(input) {
    var data = {};
    var warnings = [];


  if (input.fPort == 10) {
      data.tempA = ((input.bytes[0] & 0x80 ? 0xFFFF<<16 : 0) | input.bytes[0]<<8 | input.bytes[1])/100;
      data.door = input.bytes[2];
      data.watchdog = input.bytes[3];
  }
  else {
      warnings.push("Unsupported fPort");
  }
  return {
    data: data,
    warnings: warnings
  };
}