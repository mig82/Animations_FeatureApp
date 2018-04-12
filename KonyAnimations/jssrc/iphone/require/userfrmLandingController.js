define({
    featureSelected: function() {
        var listOfNextForms = ["frmKeyFrameAnimations", "frmAffineTransformations"];
        var selectedFeatureId = this.view.segFeaturesList.selectedRowIndex[1];
        var formToBeNavigated = listOfNextForms[selectedFeatureId];
        var ntf = new kony.mvc.Navigation(formToBeNavigated);
        ntf.navigate();
    }
});