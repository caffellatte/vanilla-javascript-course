var initial_object = {
  first_prop: null,
  second_prop: undefined,
  third_prop: 1,
  fourth_prop: "string",
  fifth_prop: true,
  sixth_prop: {
    first_prop: null,
    second_prop: undefined,
    third_prop: 1,
    fourth_prop: "string",
    fifth_prop: true,
    sixth_prop: {
      first_prop: null,
      second_prop: undefined,
      third_prop: 1,
      fourth_prop: "string",
      fifth_prop: true,
      sixth_prop: {
        first_prop: null,
        second_prop: undefined,
        third_prop: 1,
        fourth_prop: "string",
        fifth_prop: true,
        sixth_prop: [1, 2, 3],
      },
      seven_prop: {
        first_prop: null,
        second_prop: undefined,
        third_prop: 1,
        fourth_prop: "string",
        fifth_prop: true,
        sixth_prop: {
          first_prop: null,
          second_prop: undefined,
          third_prop: 1,
          fourth_prop: "string",
          fifth_prop: true,
        },
      },
    },
  },
};

function nestedToFlat(obj, parentObj, childObjKey) {
  if (parentObj) {
    for (var key of Object.getOwnPropertyNames(obj)) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        var childObj = Object.assign({}, obj[key]);
        delete obj[key];
        iterateOwnProperties(childObj, parentObj, childObjKey + "_" + key);
      } else {
        parentObj[childObjKey + "_" + key] = obj[key];
      }
    }
  } else {
    for (var key of Object.getOwnPropertyNames(obj)) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        var childObj = Object.assign({}, obj[key]);
        delete obj[key];
        iterateOwnProperties(childObj, obj, key);
      }
    }
  }
}

nestedToFlat(initial_object);

console.log(initial_object);
