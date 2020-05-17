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

// using quicksort or mergesort

// each row (obj with col&val pairs)
//   check each result[i] {
//     if row.energySource = result[i][0].energySource
//       then result[i].push(row)
//   }
//   else result.push([row])

const fs = require("fs");
const parse = require("csv-parse/lib/sync");


let result = []; //will be array of arrays of objects

//read in the file
const input = [
  ["col1", "col2", "col3"],
  ["data1", "data2", "data3"],
  ["stuff1", "stuff2", "stuff3"],
  ["things1", "things2", "things3"]
]; 

//array of objects
// const data = parse(input, {
//   columns: true,
//   skip_empty_lines: true,
//   delimiter: ","
// }) ; 

const data = [{
  "col1": "data1",
  "col2": "data2",
  "energySource": "data3"
  },{
  "col1": "bob1",
  "col2": "bob2",
  "energySource": "things3"
  },{
  "col1": "stuff1",
  "col2": "stuff2",
  "energySource": "data3"
  },{
  "col1": "thingy1",
  "col2": "thingy2",
  "energySource": "carl2"
  },{
  "col1": "things1",
  "col2": "things2",
  "energySource": "things3"
  },{
  "col1": "things1",
  "col2": "things2",
  "energySource": "carl3"
}];

console.table(data);

data.forEach((row) => {
  let placed = false;
  for (let i = 0; i < result.length; i++) {
    if (result[i][0].energySource === row.energySource) {//this is the array it belongs in
      result[i].push(row);
      placed = true;
      return;
    }
  };
  //if we get out of the foreach without returning it didn't match an existing array, so add a new one
  if (!placed) {
    result.push([row]);
  }
});

console.log(result);