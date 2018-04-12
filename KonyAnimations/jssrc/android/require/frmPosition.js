define("frmPosition", function() {
    return function(controller) {
        function addWidgetsfrmPosition() {
            this.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "4%",
                "height": "8%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "SKNLBLHEADING",
                "text": "Animating Postion of Widget",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBottomLine = new kony.ui.Label({
                "height": "2px",
                "id": "lblBottomLine",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLLINE",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8%",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_dfa360d2eccf4825ad2e92174e91edc9,
                "skin": "slFbox",
                "top": "0%",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var Image0h98155ad821840 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "Image0h98155ad821840",
                "isVisible": true,
                "skin": "slImage",
                "src": "backbtn.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(Image0h98155ad821840);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXF2F1F1",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxPlayGround = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxPlayGround",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXCCCCCC1px",
                "top": "5%",
                "width": "98%",
                "zIndex": 1
            }, {}, {});
            flxPlayGround.setDefaultUnit(kony.flex.DP);
            var flxObject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxObject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNOBJECT",
                "top": "2%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxObject.setDefaultUnit(kony.flex.DP);
            flxObject.add();
            flxPlayGround.add(flxObject);
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "bottom": "5dp",
                "clipBounds": true,
                "height": "45dp",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0cb83ad5d2aea4e",
                "top": "60%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            PaddedButtonRound.setDefaultUnit(kony.flex.DP);
            var ButtonRound = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "ButtonRound",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_d8e329858fea4a27a33ee1d4525fa716,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Start Animation",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PaddedButtonRound.add(ButtonRound);
            flxBody.add(flxPlayGround, PaddedButtonRound);
            var btnKnowledgeFramework = new kony.ui.Button({
                "bottom": "5%",
                "focusSkin": "BTNKFFOCUS",
                "height": "70dp",
                "id": "btnKnowledgeFramework",
                "isVisible": true,
                "onClick": controller.AS_Button_d661eee97f484c039cb9a3858491239f,
                "right": "5%",
                "skin": "BTNKF",
                "width": "70dp",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(lblHeading, lblBottomLine, flxBack, flxBody, btnKnowledgeFramework);
        };
        return [{
            "addWidgets": addWidgetsfrmPosition,
            "enabledForIdleTimeout": false,
            "id": "frmPosition",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "SKNFRMBG"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});