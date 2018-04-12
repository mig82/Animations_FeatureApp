define({
    featureSelected: function() {
        var ntf = new kony.mvc.Navigation("frmTranslate");
        ntf.navigate(this.view.segList.selectedRowIndex[1]);
    }
});