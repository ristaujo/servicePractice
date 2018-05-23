"use strict";

function DataService () {

  let returnedData = "";

  const getData = () => {
    console.log(returnedData);
    return returnedData;
  };

  const setData = (data) => {
    console.log(data);
    returnedData = data;
  };

  return {
    getData,
    setData
  };
}


angular
  .module("app")
  .factory("DataService", DataService);