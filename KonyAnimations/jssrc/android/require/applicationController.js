define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konycmpt.KnowledgeFramework", "KnowledgeFramework", "KnowledgeFrameworkController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFramework",
            "name": "com.konycmpt.KnowledgeFramework"
        });
        kony.mvc.registry.add("flexAPIs", "flexAPIs", "flexAPIsController");
        kony.mvc.registry.add("flxFeature", "flxFeature", "flxFeatureController");
        kony.mvc.registry.add("frmAffineTransformations", "frmAffineTransformations", "frmAffineTransformationsController");
        kony.mvc.registry.add("frmBGColor", "frmBGColor", "frmBGColorController");
        kony.mvc.registry.add("frmDimension", "frmDimension", "frmDimensionController");
        kony.mvc.registry.add("frmKeyFrameAnimations", "frmKeyFrameAnimations", "frmKeyFrameAnimationsController");
        kony.mvc.registry.add("frmKnowledgeFramework", "frmKnowledgeFramework", "frmKnowledgeFrameworkController");
        kony.mvc.registry.add("frmLanding", "frmLanding", "frmLandingController");
        kony.mvc.registry.add("frmOpacity", "frmOpacity", "frmOpacityController");
        kony.mvc.registry.add("frmPosition", "frmPosition", "frmPositionController");
        kony.mvc.registry.add("frmTranslate", "frmTranslate", "frmTranslateController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLanding").navigate();
    }
});