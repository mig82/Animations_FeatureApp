define("flxFeature", function() {
    return function(controller) {
        var flxFeature = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxFeature",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFeature.setDefaultUnit(kony.flex.DP);
        var PaddedButtonRound = new kony.ui.FlexContainer({
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "PaddedButtonRound",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "slFbox0f7ba7028a53849",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        PaddedButtonRound.setDefaultUnit(kony.flex.DP);
        var lblFeatureName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "lblFeatureName",
            "isVisible": true,
            "skin": "LBLFEATURE",
            "text": "Label",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        PaddedButtonRound.add(lblFeatureName);
        flxFeature.add(PaddedButtonRound);
        return flxFeature;
    }
})