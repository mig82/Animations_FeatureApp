define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ButtonRound **/
    AS_Button_d3cc3028f21c47ed8fbdec84053f17ba: function AS_Button_d3cc3028f21c47ed8fbdec84053f17ba(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPosition");
        ntf.navigate();
    },
    /** onClick defined for ButtonRound0aeb5d7e3021c40 **/
    AS_Button_e368ba2a5db841fba79f990f0973cc28: function AS_Button_e368ba2a5db841fba79f990f0973cc28(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDimension");
        ntf.navigate();
    },
    /** onClick defined for CopyButtonRound0a92f927168304c **/
    AS_Button_jb82ed10937c43be96461db8b60f9bdd: function AS_Button_jb82ed10937c43be96461db8b60f9bdd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBGColor");
        ntf.navigate();
    },
    /** onClick defined for CopyButtonRound0cdd34e04318d4b **/
    AS_Button_cac8641ba5ca431bb2382d9f871988e3: function AS_Button_cac8641ba5ca431bb2382d9f871988e3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmOpacity");
        ntf.navigate();
    },
    /** onRowClick defined for segFeaturesList **/
    AS_Segment_b87401a0a4324337872151462026fce1: function AS_Segment_b87401a0a4324337872151462026fce1(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.featureSelected();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_bcd1ec8a375d4e318819428e791ceb4c: function AS_FlexContainer_bcd1ec8a375d4e318819428e791ceb4c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    },
    /** onClick defined for btnKnowledgeFramework **/
    AS_Button_fd30ae46c44c446580402f6b72bcc83b: function AS_Button_fd30ae46c44c446580402f6b72bcc83b(eventobject) {
        var self = this;
        this.showKnowledgeFrameWork();
    }
});