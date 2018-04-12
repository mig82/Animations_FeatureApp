define("frmKeyFrameAnimations", function() {
    return function(controller) {
        function addWidgetsfrmKeyFrameAnimations() {
            this.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "4%",
                "height": "8%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "SKNLBLHEADING",
                "text": "Key Frame Animations",
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
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "PaddedButtonRound",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0aeb98fe846e84b",
                "top": "5dp",
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
                "onClick": controller.AS_Button_d3cc3028f21c47ed8fbdec84053f17ba,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Animating Position",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PaddedButtonRound.add(ButtonRound);
            var PaddedButtonRound0f602f5f6bdb345 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "PaddedButtonRound0f602f5f6bdb345",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0d6465039c88c4f",
                "top": "75dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            PaddedButtonRound0f602f5f6bdb345.setDefaultUnit(kony.flex.DP);
            var ButtonRound0aeb5d7e3021c40 = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "ButtonRound0aeb5d7e3021c40",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_e368ba2a5db841fba79f990f0973cc28,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Animating Dimensions",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PaddedButtonRound0f602f5f6bdb345.add(ButtonRound0aeb5d7e3021c40);
            var CopyPaddedButtonRound0g5e25d65dba448 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyPaddedButtonRound0g5e25d65dba448",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0d6465039c88c4f",
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyPaddedButtonRound0g5e25d65dba448.setDefaultUnit(kony.flex.DP);
            var CopyButtonRound0a92f927168304c = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "CopyButtonRound0a92f927168304c",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_jb82ed10937c43be96461db8b60f9bdd,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Background Color",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyPaddedButtonRound0g5e25d65dba448.add(CopyButtonRound0a92f927168304c);
            var CopyPaddedButtonRound0a26fa7baa9c04d = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyPaddedButtonRound0a26fa7baa9c04d",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0d6465039c88c4f",
                "top": "225dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyPaddedButtonRound0a26fa7baa9c04d.setDefaultUnit(kony.flex.DP);
            var CopyButtonRound0cdd34e04318d4b = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "CopyButtonRound0cdd34e04318d4b",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_cac8641ba5ca431bb2382d9f871988e3,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Animating Opacity",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyPaddedButtonRound0a26fa7baa9c04d.add(CopyButtonRound0cdd34e04318d4b);
            var segFeaturesList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "lblFeatureName": "Animating Position"
                }, {
                    "lblFeatureName": "Animating Dimensions"
                }, {
                    "lblFeatureName": "Animating Background Color"
                }, {
                    "lblFeatureName": "Animating Opacity"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segFeaturesList",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_b87401a0a4324337872151462026fce1,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "SKNSEGNOBG",
                "rowTemplate": "flxFeature",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "PaddedButtonRound": "PaddedButtonRound",
                    "flxFeature": "flxFeature",
                    "lblFeatureName": "lblFeatureName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(PaddedButtonRound, PaddedButtonRound0f602f5f6bdb345, CopyPaddedButtonRound0g5e25d65dba448, CopyPaddedButtonRound0a26fa7baa9c04d, segFeaturesList);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_bcd1ec8a375d4e318819428e791ceb4c,
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
                "imageWhenFailed": "backbtn.png",
                "imageWhileDownloading": "backbtn.png",
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
                "onClick": controller.AS_Button_fd30ae46c44c446580402f6b72bcc83b,
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
            "addWidgets": addWidgetsfrmKeyFrameAnimations,
            "enabledForIdleTimeout": false,
            "id": "frmKeyFrameAnimations",
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