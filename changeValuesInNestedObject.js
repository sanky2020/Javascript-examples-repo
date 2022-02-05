//change all the values in object from "vue-2.0" to "vue-3.0" without changing any other values.
const obj = [
    {
      a: "react",
      b: "vue-2.0",
      c: {
        d: "angular",
        e: "vue-2.0",
        f: {
          g: "React",
          h: "vue-2.0",
        },
      },
    },
  ];
  
  function changeValueInObject(obj){
      for(let item in obj){
          if(obj[item] === "vue-2.0"){
              obj[item] = "vue-3.0";
          }
          if(typeof(obj[item])=='object'){
              changeValueInObject(obj[item]);
          }
      } return obj;
  }
  console.log(changeValueInObject(obj[0])) ;