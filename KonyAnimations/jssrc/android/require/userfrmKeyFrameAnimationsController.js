define({
    featureSelected: function() {
        var listOfNextForms = ["frmPosition", "frmDimension", "frmBGColor", "frmOpacity"];
        var selectedFeatureId = this.view.segFeaturesList.selectedRowIndex[1];
        var formToBeNavigated = listOfNextForms[selectedFeatureId];
        var ntf = new kony.mvc.Navigation(formToBeNavigated);
        ntf.navigate();
    }
});