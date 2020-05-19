// sort by energy Source

// result =
// [
//   [all rows with energy source 1 (ie total)]
//   [all rows with energy source 2]
//   [etc]
// ]

// Loop through array 
// for each type in array 
// insert all items in inner array with energySource type

// using quicksort or mergesort?

// each row (obj with col&val pairs)
//   check each result[i] {
//     if row.energySource = result[i][0].energySource
//       then result[i].push(row)
//   }
//   else result.push([row])

// dump result into db
// result.foreach((engSrcGrp) => {
//   insert engSrcGrp[O].energySource into energySource table, grab id for fk
//   engSrcGrp.foreach((row) => {
//     insert into table with energySource fk 
//   });
// });

console.log(__dirname);

//require("dotenv").config({ path: __dirname + "\.."});

require("dotenv").config({ path: "/"});

process.env.NODE_ENV = "development";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

let results = []; //will be array of arrays of objects

//read in the file
const input = [
]; 

//array of objects
// const data = parse(input, {
//   columns: true,
//   skip_empty_lines: true,
//   delimiter: ","
// }) ; 

const data = [{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "MA",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Coal",
  "GENERATION (Megawatthours)": 0,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "MA",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Pumped Storage",
  "GENERATION (Megawatthours)": -37687,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "MA",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Hydroelectric Conventional",
  "GENERATION (Megawatthours)": 113416,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "MA",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Nuclear",
  "GENERATION (Megawatthours)": 450438,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "MA",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Other",
  "GENERATION (Megawatthours)": 83380,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "ME",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Coal",
  "GENERATION (Megawatthours)": 11216,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "ME",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Hydroelectric Conventional",
  "GENERATION (Megawatthours)": 318271,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "ME",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Natural Gas",
  "GENERATION (Megawatthours)": 145457,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "ME",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Other",
  "GENERATION (Megawatthours)": 29185,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "ME",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Petroleum",
  "GENERATION (Megawatthours)": 4264,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "NH",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Coal",
  "GENERATION (Megawatthours)": 120824,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "NH",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Hydroelectric Conventional",
  "GENERATION (Megawatthours)": 157118,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "NH",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Natural Gas",
  "GENERATION (Megawatthours)": 172446,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "NH",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Nuclear",
  "GENERATION (Megawatthours)": 927928,
  },{
  "YEAR": 2019,
  "MONTH": 1,
  "STATE": "NH",
  "TYPE OF PRODUCER": "Total Power Industry",
  "ENERGY SOURCE": "Other",
  "GENERATION (Megawatthours)": 4951,
 }];

console.table(data);

data.forEach((row) => {
  let placed = false;
  for (let i = 0; i < results.length; i++) {
    if (results[i][0]["ENERGY SOURCE"] === row["ENERGY SOURCE"]) {//this is the array it belongs in
      results[i].push(row);
      placed = true;
      break;
    }
  };
  //if we get out of the for without matching add a new one
  if (!placed) {
    results.push([row]);
  }
});

console.log(results);

//use speedy shopper as example to seed DB from the result array of arrays of objects

const seedMe = async () => {
  for (const result of results) {
    console.log(result);
    await db.EnergySource.create({
      typeName: result[0]["ENERGY SOURCE"]
    }).then(async ({ id }) => {
      result.forEach(async (element) => {
        await db.Generation.create({
          year: element["YEAR"],
          month: element["MONTH"],
          stateAbbrev: element["STATE"],
          prodType: element["TYPE OF PRODUCER"],
          EnergySourceId: id,
          amount: element["GENERATION (Megawatthours)"]
        });
      });
    });
  }
};

db.sequelize.sync({ 
  force: true 
}).then(async function() {
  await seedMe();
  db.sequelize.close();
})