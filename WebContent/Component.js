sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
   "use strict";
   return UIComponent.extend("sap.ui.study.one.Component", {
            metadata : {
		manifest: "json"
	},
	init : function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        var oData = {
           recipient : {
              name : "World"
           }
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        this.getRouter().initialize();
        
        var oDeviceModel = new JSONModel(Device);
		oDeviceModel.setDefaultBindingMode("OneWay");
		this.setModel(oDeviceModel, "device");
        
     }
  });
});