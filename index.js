//Colshapes 
let BallasGarage = mp.colshapes.newRectangle(103.10161590576172, -1958.8590087890625, 2, 2);
let GroveGarage = mp.colshapes.newRectangle(477.1581115722656,-1795.8492431640625, 2, 2);
let LCNGarage = mp.colshapes.newRectangle(-1534.203125, 80.34367370605469, 2, 2);
let MG11Garage = mp.colshapes.newRectangle(1159.1534423828125,-1643.384521484375, 2, 2);
let RednecksGarage = mp.colshapes.newRectangle(1130.8751220703125, -661.395263671875, 2, 2);
let VagosGarage = mp.colshapes.newRectangle(-1129.87890625,-1613.529052734375, 2, 2);
let TriadenGarage = mp.colshapes.newRectangle(1405.6898193359375, 1123.2635498046875, 2, 2);
let YakuzaGarage = mp.colshapes.newRectangle(-1528.5313720703125, 870.7482299804688, 2, 2);
let OrgGarage = mp.colshapes.newRectangle(-56.816917419433594, 355.900634765625, 2, 2,);
let MidnightGarage = mp.colshapes.newRectangle(443.129150390625, 226.7752227783203, 2, 2);

function playerEnterColshapeHandler(player, shape) {
  if(shape == BallasGarage) {
    player.call("openGarageBrowser");
  }
  if(shape == GroveGarage) {
        player.call("openGarageBrowser");
  }
  if(shape == LCNGarage) {
        player.call("openGarageBrowser");
  }
  if(shape == MG11Garage) {
        player.call("openGarageBrowser");
  }
  if(shape == RednecksGarage) {
        player.call("openGarageBrowser");
  }
  if(shape == TriadenGarage) {
        player.call("openGarageBrowser");
  }
  if(shape == VagosGarage) {
        player.call("openGarageBrowser");
  }
  if(shape == YakuzaGarage) {
        player.call("openGarageBrowser") 
}
if(shape == OrgGarage) {
  player.call("openGarageBrowser");
}
if(shape == MidnightGarage) {
  player.call("openGarageBrowser");
}
}

mp.events.add("playerEnterColshape", playerEnterColshapeHandler); 

//Schafter
mp.events.add("schafter", (player) => {
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
          grove.rotation = new mp.Vector3(0, 0, 319)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(-1119.076904296875,-1604.0330810546875,3.9584097862243652)));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 149)
          mg13.numberPlate = "ESL13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
          case 12:
  if(player.getVariable("org")){
    let org = player.getVariable("org");
    org.destroy();
    player.setVariable("org", null);
}   

  let org = mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961)));
  org.rotation = new mp.Vector3(0, 0, 153)
  org.numberPlate = "ORGA"
  player.putIntoVehicle(org, -1);
  org.setColor(2, 2);
  player.setVariable('org', org);
break;

case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}
  let midnight =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
})
  //Revolter
mp.events.add("revolter", (player) => {
  if(player.level < 25) {
  player.call("notification", ["Du benötigst Level 25", 4]);
  return;
  }
else if(player.level >= 25) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668 )));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
          case 12:
            if(player.getVariable("org")){
              let org = player.getVariable("org");
              org.destroy();
              player.setVariable("org", null);
          }   
          let org = mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961)));
            org.rotation = new mp.Vector3(0, 0, 138)
            org.numberPlate = "Organisazija"
            player.putIntoVehicle(org, -1);
            org.setColor(2, 2);
            player.setVariable('org', org);
          break;

          case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}   
          let midnight = mp.vehicles.new(mp.joaat('revolter'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
});

  //Bati
  mp.events.add("bati", (player) => {
    if(player.level < 35) {
      player.call("notification", ["Du benötigst Level 35", 4]);
      return;
      }
    else if(player.level >= 35) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668 )));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));       
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
  case 12:
    if(player.getVariable("org")){
      let org = player.getVariable("org");
      org.destroy();
      player.setVariable("org", null);
  }   
          let org = mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961 )));
    org.rotation = new mp.Vector3(0, 0, 138)
    org.numberPlate = "Organisazija"
    player.putIntoVehicle(org, -1);
    org.setColor(2, 2);
    player.setVariable('org', org);
  break;

  case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}   
          let midnight = mp.vehicles.new(mp.joaat('bati'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
});

//BF400
mp.events.add("bf400", (player) => {
  if(player.level < 45) {
    player.call("notification", ["Du benötigst Level 45", 4]);
    return;
    }
  else if(player.level >= 45) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668 )));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
          case 12:
            if(player.getVariable("org")){
              let org = player.getVariable("org");
              org.destroy();
              player.setVariable("org", null);
          }   
          let org = mp.vehicles.new(mp.joaat('bf400'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961)));
            org.rotation = new mp.Vector3(0, 0, 138)
            org.numberPlate = "Organisazija"
            player.putIntoVehicle(org, -1);
            org.setColor(2, 2);
            player.setVariable('org', org);
          break;

          case 13:
            case 13:
              if(player.getVariable("midnight")){
                let midnight = player.getVariable("midnight");
                midnight.destroy();
                player.setVariable("midnight", null);
            }   
              let midnight =  mp.vehicles.new(mp.joaat('schafter4'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
              midnight.rotation = new mp.Vector3(0, 0, 67)
              midnight.numberPlate = "MIDNIGHT"
              player.putIntoVehicle(midnight, -1);
              midnight.setColor(131, 131);
              player.setVariable('midnight', midnight);
            break;
                  }
            });
            

//Jugular
mp.events.add("Jugular", (player) => {
  if(player.level < 55) {
    player.call("notification", ["Du benötigst Level 55", 4]);
    return;
    }
  else if(player.level >= 55) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668)));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
          case 12:
            if(player.getVariable("org")){
              let org = player.getVariable("org");
              org.destroy();
              player.setVariable("org", null);
          }   
          let org = mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961 )));
            org.rotation = new mp.Vector3(0, 0, 138)
            org.numberPlate = "Organisazija"
            player.putIntoVehicle(org, -1);
            org.setColor(2, 2);
            player.setVariable('org', org);
          break;

          case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}   
          let midnight = mp.vehicles.new(mp.joaat('Jugular'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
});

//Entity
mp.events.add("entity", (player) => {
  if(player.level < 65) {
    player.call("notification", ["Du benötigst Level 65", 4]);
    return;
    }
  else if(player.level >= 65) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668 )));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;  
          case 12:
            if(player.getVariable("org")){
              let org = player.getVariable("org");
              org.destroy();
              player.setVariable("org", null);
          }   
          let org = mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961)));
            org.rotation = new mp.Vector3(0, 0, 138)
            org.numberPlate = "Organisazija"
            player.putIntoVehicle(org, -1);
            org.setColor(2, 2);
            player.setVariable('org', org);
          break;

          case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}   
          let midnight = mp.vehicles.new(mp.joaat('entity2'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
});

//xa21
mp.events.add("xa21", (player) => {
  if(player.level < 75) {
    player.call("notification", ["Du benötigst Level 75", 4]);
    return;
    }
  else if(player.level >= 75) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(95.4940414428711, -1960.26220703125, 20.747577667236328)));
        ballas.rotation = new mp.Vector3(0, 0, 320)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0)
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53);
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(-1528.9383544921875, 98.3396224975586, 56.693359375)));
          lcn.rotation = new mp.Vector3(0, 0, 230)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668 )));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
          case 12:
            if(player.getVariable("org")){
              let org = player.getVariable("org");
              org.destroy();
              player.setVariable("org", null);
          }   
          let org = mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961)));
            org.rotation = new mp.Vector3(0, 0, 138)
            org.numberPlate = "Organisazija"
            player.putIntoVehicle(org, -1);
            org.setColor(2, 2);
            player.setVariable('org', org);
          break;

          case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}   
          let midnight = mp.vehicles.new(mp.joaat('xa21'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
});

//Donator
mp.events.add("donator", (player) => {
  if(player.donator < 1) {
    player.call("notification", ["ONLY FOR DONATOR", 4]);
    return;
    }
  else if(player.donator >= 1) 
  switch(player.getVariable("team")) {
        case 1:
            if(player.getVariable("ballas")){
              let ballas = player.getVariable("ballas");
              ballas.destroy();
              player.setVariable("ballas", null);
          }  
        let ballas =  mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(80.03179168701172, -1965.165771484375, 24.366249084472656)));
        ballas.rotation = new mp.Vector3(0, 0, 318)
        ballas.numberPlate = "BALLAS"
        player.putIntoVehicle(ballas, -1);
        ballas.setColor(148, 148);
        player.setVariable('ballas', ballas);
        break;

        case 2:
          if(player.getVariable("grove")){
            let grove = player.getVariable("grove");
            grove.destroy();
            player.setVariable("grove", null);
        }  
          let grove = mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(484.9903564453125, -1799.1943359375, 28.415191650390625)));
        grove.rotation = new mp.Vector3(325, 0, 0) 
        grove.numberPlate = "GROVE"
        player.putIntoVehicle(grove, -1);
        grove.setColor(53, 53)
        player.setVariable('grove', grove);
        break;

        case 3:
          if(player.getVariable("lcn")){
            let lcn = player.getVariable("lcn");
            lcn.destroy();
            player.setVariable("lcn", null);
        }  
          let lcn =  mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(-1511.7930908203125, 113.57050323486328, 66.62712860107422)));
          lcn.rotation = new mp.Vector3(0, 0, 229)
          lcn.numberPlate = "LCN"
          player.putIntoVehicle(lcn, -1);
          lcn.setColor(12, 12);
          player.setVariable('lcn', lcn);
        break;

        case 4:
          if(player.getVariable("yakuza")){
            let yakuza = player.getVariable("yakuza");
            yakuza.destroy();
            player.setVariable("yakuza", null);
        }  
          let yakuza =  mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(-1487.8282470703125, 887.9216918945312, 182.5920867919922)));
          yakuza.rotation = new mp.Vector3(0, 0, 617)
          yakuza.numberPlate = "YAKUZA"
          player.putIntoVehicle(yakuza, -1);
          yakuza.setColor(40, 40);
          player.setVariable('yakuza', yakuza);
        break;

        case 5:
          if(player.getVariable("vagos")){
            let vagos = player.getVariable("vagos");
            vagos.destroy();
            player.setVariable("vagos", null);
        }  
          let vagos =  mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(321.600830078125, -2028.38720703125, 20.77058219909668 )));
          vagos.rotation = new mp.Vector3(0, 0, 410)
          vagos.numberPlate = "VAGOS"
          player.putIntoVehicle(vagos, -1);
          vagos.setColor(89, 89);
          player.setVariable('vagos', vagos);
        break;

        case 6:
          if(player.getVariable("triaden")){
            let triaden = player.getVariable("triaden");
            triaden.destroy();
            player.setVariable("triaden", null);
        }  
          let triaden =  mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(1401.8194580078125,1117.841064453125,114.39297485351562)));
          triaden.rotation = new mp.Vector3(0, 0, 90)
          triaden.numberPlate = "TRIADEN"
          player.putIntoVehicle(triaden, -1);
          triaden.setColor(84, 84);
          player.setVariable('triaden', triaden);
          break;

        case 7:
          if(player.getVariable("mg13")){
            let mg13 = player.getVariable("mg13");
            mg13.destroy();
            player.setVariable("mg13", null);
        }  
          let mg13 = mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(1169.1114501953125, -1660.8673095703125, 36.89038848876953)));
          mg13.rotation = new mp.Vector3(0, 0, 137)
          mg13.numberPlate = "MG13"
          player.putIntoVehicle(mg13, -1);
          mg13.setColor(127, 127);
          player.setVariable('mg13', mg13);
          break;

          case 8:
            if(player.getVariable("rednecks")){
              let rednecks = player.getVariable("rednecks");
              rednecks.destroy();
              player.setVariable("rednecks", null);
          }  
            let rednecks =  mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(1173.7816162109375, -755.4760131835938, 57.84720230102539)));
            rednecks.rotation = new mp.Vector3(0, 0, 270) 
            rednecks.numberPlate = "REDNECKS"
            player.putIntoVehicle(rednecks, -1);
            rednecks.setColor(128, 128);
            player.setVariable('rednecks', rednecks);
            break;
          case 12:
            if(player.getVariable("org")){
              let org = player.getVariable("org");
              org.destroy();
              player.setVariable("org", null);
          }   
          let org = mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(-55.783084869384766, 342.7467346191406, 112.1017074584961)));        
            org.rotation = new mp.Vector3(0, 0, 147)
            org.numberPlate = "Organisazija"
            player.putIntoVehicle(org, -1);
            org.setColor(2, 2);
            player.setVariable('org', org);
          break;

          case 13:
  if(player.getVariable("midnight")){
    let midnight = player.getVariable("midnight");
    midnight.destroy();
    player.setVariable("midnight", null);
}   
  let midnight = mp.vehicles.new(mp.joaat('supervolito'), (new mp.Vector3(415.2554931640625, 230.29078674316406, 103.18841552734375 )));
  midnight.rotation = new mp.Vector3(0, 0, 67)
  midnight.numberPlate = "MIDNIGHT"
  player.putIntoVehicle(midnight, -1);
  midnight.setColor(131, 131);
  player.setVariable('midnight', midnight);
break;
      }
    });     