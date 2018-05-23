"use strict";
{

const add = {
  template: `
    <input type="text" ng-model="$ctrl.coolData">
    <button type="button" ng-click="$ctrl.sendData($ctrl.coolData);">Hola</button>
  `,
  controller: ["DataService", function(DataService) {
    const vm = this;
    vm.sendData = (data) => {
      DataService.setData(data);
    };
  }]
};


angular
  .module("app")
  .component("add", add);
}
