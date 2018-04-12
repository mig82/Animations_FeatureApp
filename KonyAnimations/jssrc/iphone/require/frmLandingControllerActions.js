define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segFeaturesList **/
    AS_Segment_e5330a11999e4ffda6da5a323ce5b1a2: function AS_Segment_e5330a11999e4ffda6da5a323ce5b1a2(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.featureSelected();
    },
    /** onClick defined for btnKnowledgeFramework **/
    AS_Button_c358ad79ba1945ab9b54c46a5c551c78: function AS_Button_c358ad79ba1945ab9b54c46a5c551c78(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});