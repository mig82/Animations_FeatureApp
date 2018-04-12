define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segList **/
    AS_Segment_cb5b0c8013f046ecb96b967ad858e891: function AS_Segment_cb5b0c8013f046ecb96b967ad858e891(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.featureSelected();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_a900a850ad844862ac1208e61a1762e8: function AS_FlexContainer_a900a850ad844862ac1208e61a1762e8(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    },
    /** onClick defined for btnKnowledgeFramework **/
    AS_Button_h8f3c4776acf4f08b088a17fe92a538f: function AS_Button_h8f3c4776acf4f08b088a17fe92a538f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});