"use strict";

const get = {
  template: `
    <p>This is our cool data: {{$ctrl.dataToDisplay}} </p>
    <button type="button" ng-click="$ctrl.getData();">Get Data</button>
  `,

  controller: ["DataService", function (DataService) {
    const vm = this;
    vm.dataToDisplay = null;
    vm.getData = () => {
      vm.dataToDisplay = DataService.getData();
    };
  }]
}

angular
  .module("app")
  .component("get", get);