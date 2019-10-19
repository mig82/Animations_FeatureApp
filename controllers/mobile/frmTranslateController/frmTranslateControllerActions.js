define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btn2D **/
    AS_Button_b33c70f1c9a44f908d44bf189d19dbaf: function AS_Button_b33c70f1c9a44f908d44bf189d19dbaf(eventobject) {
        var self = this;
        this.btn2DClicked();
    },
    /** onClick defined for btn3D **/
    AS_Button_h42b8e6eb2a54e5f9245215ab8957997: function AS_Button_h42b8e6eb2a54e5f9245215ab8957997(eventobject) {
        var self = this;
        this.btn3DClicked();
    },
    /** onClick defined for ButtonRound **/
    AS_Button_ff9d1dcbea83464e8b0723ba8c23d023: function AS_Button_ff9d1dcbea83464e8b0723ba8c23d023(eventobject) {
        var self = this;
        this.startAnimation();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_j4d3fb8102f646eeb1a2e2d9f37ba813: function AS_FlexContainer_j4d3fb8102f646eeb1a2e2d9f37ba813(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAffineTransformations");
        ntf.navigate();
    },
    /** onClick defined for btnKnowledgeFramework **/
    AS_Button_j9ca809bdf5349e782cde9f0b047c8a4: function AS_Button_j9ca809bdf5349e782cde9f0b047c8a4(eventobject) {
        var self = this;
        this.showKnowledgeFrameWork();
    },
    /** postShow defined for frmTranslate **/
    AS_Form_deec10a835064544a0270e1e4906137f: function AS_Form_deec10a835064544a0270e1e4906137f(eventobject) {
        var self = this;
        this.frPostShow();
    }
});