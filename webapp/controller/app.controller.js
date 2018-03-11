sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(jQuery, Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("todo.controller.app", {
		onInit: function(){
			this.oModel = new JSONModel();
			this.oModel.loadData(jQuery.sap.getModulePath("todo.demodata", "/data.json"));
			this.getView().setModel(this.oModel);
		},
		onBeforeRendering: function(){
			
		},
		onAfterRendering: function(oEvent){
			
		},
		onSubmit: function (evt) {
			var oAlbum = this.getView().byId("idAlbum").getValue();
			var oId = this.getView().byId("idText").getValue();
			var oTitle = this.getView().byId("idTitle").getValue();
			var list = {
				albumId : oAlbum,
				id : oId,
				title : oTitle
			};
			var oModel = this.getView().getModel();
			oModel.getProperty("/Dummy").push(list);
			oModel.refresh();
			this.getView().byId("idAlbum").setValue("");
			this.getView().byId("idText").setValue("");
			this.getView().byId("idTitle").setValue("");
		},
		handleDelete : function(oEvent){
			var oItem = oEvent.getParameter("listItem");
			var oList = oEvent.getSource();
		
			oList.removeItem(oItem);
			oList.fireUpdateFinished();
		}
		
		
	});
});