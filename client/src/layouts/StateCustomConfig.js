let stateArray = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA",
  'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN',
  'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV',
  'WY'
];

function statesCustomConfig() {

  let goodState = "green";
  let badState = "brown";
  let hotState = "red";
  let coolState = "blue"

  return {
    "HI": {
      fill: goodState,
    },
    "NJ": {
      fill: hotState,
    },
    "NY": {
      fill: coolState,
    },
    "MN": {
      fill: hotState,
    },
    "FL": {
      fill: badState,
    },
    "UT": {
      fill: goodState,
    },
    "TX": {
      fill: badState
    }
  };
};

export default statesCustomConfig;

