import stateArray from "./StateArray";

const colorArray = ["#6C4385", "#807523", "#016C0B", "#2210D3", "#782b2b", "#822F2B"];

let stateColorObj = {};

function statesCustomConfig() {

  let stateColorObjRandom = {
    "AK": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "AL": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "AR": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "AZ": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "CA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "CO": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "CT": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "DE": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "FL": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "GA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "HI": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "IA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "ID": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "IL": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "IN": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "KS": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "KY": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "LA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MD": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "ME": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MI": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MN": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MO": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MS": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "MT": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NC": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "ND": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NE": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NH": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NJ": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NM": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NV": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "NY": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "OH": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "OK": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "OR": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "PA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "RI": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "SC": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "SD": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "TN": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "TX": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "UT": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "VA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "VT": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "WA": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "WI": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "WV": {fill: colorArray[(Math.floor(Math.random() * 6))],},
    "WY": {fill: colorArray[(Math.floor(Math.random() * 6))],}
  };

  stateColorObj=stateColorObjRandom;

  return stateColorObj
};

export default statesCustomConfig;