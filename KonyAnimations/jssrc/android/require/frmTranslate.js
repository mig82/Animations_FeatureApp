define("frmTranslate", function() {
    return function(controller) {
        function addWidgetsfrmTranslate() {
            this.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "4%",
                "height": "8%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "SKNLBLHEADING",
                "text": "TITLE",
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
            var SquaredButtonDouble0f43a3418300248 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "SquaredButtonDouble0f43a3418300248",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyflxButtonSkin0g8519903647646",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            SquaredButtonDouble0f43a3418300248.setDefaultUnit(kony.flex.DP);
            var ContainerLeft0a883e3adcab947 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "ContainerLeft0a883e3adcab947",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox1",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            ContainerLeft0a883e3adcab947.setDefaultUnit(kony.flex.DP);
            var btn2D = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSqrdSkinFocus",
                "id": "btn2D",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_b33c70f1c9a44f908d44bf189d19dbaf,
                "right": 5,
                "skin": "BTNACTIVE",
                "text": "2D",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ContainerLeft0a883e3adcab947.add(btn2D);
            var ConatinerRight0h60be43aa20941 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "ConatinerRight0h60be43aa20941",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "0dp",
                "skin": "CopyslFbox1",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            ConatinerRight0h60be43aa20941.setDefaultUnit(kony.flex.DP);
            var btn3D = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSqrdSkinFocus",
                "id": "btn3D",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_h42b8e6eb2a54e5f9245215ab8957997,
                "right": "10dp",
                "skin": "BTNINACTIVE",
                "text": "3D",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ConatinerRight0h60be43aa20941.add(btn3D);
            SquaredButtonDouble0f43a3418300248.add(ContainerLeft0a883e3adcab947, ConatinerRight0h60be43aa20941);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0cdb09ef401fc4e",
                "top": "10%",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxAnimator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxAnimator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAnimator.setDefaultUnit(kony.flex.DP);
            var flxPlayGround = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60%",
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
                "centerX": "20%",
                "centerY": "20%",
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
                "clipBounds": true,
                "height": "45dp",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0cb83ad5d2aea4e",
                "top": "65%",
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
                "onClick": controller.AS_Button_ff9d1dcbea83464e8b0723ba8c23d023,
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
            flxAnimator.add(flxPlayGround, PaddedButtonRound);
            flxBody.add(SquaredButtonDouble0f43a3418300248, flxShadow, flxAnimator);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_j4d3fb8102f646eeb1a2e2d9f37ba813,
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
            var btnKnowledgeFramework = new kony.ui.Button({
                "bottom": "5%",
                "focusSkin": "BTNKFFOCUS",
                "height": "70dp",
                "id": "btnKnowledgeFramework",
                "isVisible": true,
                "onClick": controller.AS_Button_j9ca809bdf5349e782cde9f0b047c8a4,
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
            this.add(lblHeading, lblBottomLine, flxBody, flxBack, btnKnowledgeFramework);
        };
        return [{
            "addWidgets": addWidgetsfrmTranslate,
            "enabledForIdleTimeout": false,
            "id": "frmTranslate",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_deec10a835064544a0270e1e4906137f,
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