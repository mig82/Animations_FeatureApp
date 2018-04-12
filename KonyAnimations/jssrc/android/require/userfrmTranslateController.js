define({
    selectedAnimation: null,
    is3DEnabled: false,
    onNavigate: function(option) {
        this.selectedAnimation = option;
        this.view.lblHeading.text = "";
        if (this.selectedAnimation == 0 || this.selectedAnimation == 3 || this.selectedAnimation == 5 || this.selectedAnimation == 6) {
            this.view.lblHeading.text = this.view.lblHeading.text + " TRANSLATE ";
        }
        if (this.selectedAnimation == 1 || this.selectedAnimation == 3 || this.selectedAnimation == 4 || this.selectedAnimation == 6) {
            this.view.lblHeading.text = this.view.lblHeading.text + " SCALE ";
        }
        if (this.selectedAnimation == 2 || this.selectedAnimation == 4 || this.selectedAnimation == 5 || this.selectedAnimation == 6) {
            this.view.lblHeading.text = this.view.lblHeading.text + " ROTATE ";
        }
        this.view.ButtonRound.text = "Start Animation";
        this.view.ButtonRound.onClick = this.startAnimation;
    },
    frPostShow: function() {
        this.view.flxPlayGround.removeAll();
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
        this.view.flxPlayGround.add(flxObject);
        if (this.selectedAnimation == 1 || this.selectedAnimation == 2 || this.selectedAnimation == 4) {
            flxObject.centerX = "50%";
            flxObject.centerY = "50%";
        }
        this.btn2DClicked();
    },
    btn2DClicked: function() {
        this.is3DEnabled = false;
        this.view.btn2D.skin = "BTNACTIVE";
        this.view.btn3D.skin = "BTNINACTIVE";
    },
    btn3DClicked: function() {
        if (kony.os.deviceInfo().name === "android") {
            alert("3D animations are not supported in android!!!!");
            return;
        } else {
            this.is3DEnabled = true;
            this.view.btn2D.skin = "BTNINACTIVE";
            this.view.btn3D.skin = "BTNACTIVE";
        }
    },
    startAnimation: function() {
        try {
            this.view.flxObject.animate(this.getAnimationObj(), this.getAnimConfig(), {
                animationStart: function() {
                    kony.print("in animation start!!");
                },
                animationEnd: this.animationEndCallback
            });
        } catch (exc) {
            alert("exception :" + JSON.stringify(exc));
        }
    },
    getAnimationObj: function() {
        try {
            var transformProp1 = kony.ui.makeAffineTransform();
            if (this.selectedAnimation !== null) {
                if (this.is3DEnabled === false) {
                    if (this.selectedAnimation == 0 || this.selectedAnimation == 3 || this.selectedAnimation == 5 || this.selectedAnimation == 6) {
                        transformProp1.translate(80, 80);
                    }
                    if (this.selectedAnimation == 1 || this.selectedAnimation == 3 || this.selectedAnimation == 4 || this.selectedAnimation == 6) {
                        transformProp1.scale(1.5, 1.5);
                    }
                    if (this.selectedAnimation == 2 || this.selectedAnimation == 4 || this.selectedAnimation == 5 || this.selectedAnimation == 6) {
                        transformProp1.rotate(60);
                    }
                } else {
                    transformProp1.setPerspective(300);
                    if (this.selectedAnimation == 0 || this.selectedAnimation == 3 || this.selectedAnimation == 5 || this.selectedAnimation == 6) {
                        transformProp1.translate3D(80, 80, 80);
                    }
                    if (this.selectedAnimation == 1 || this.selectedAnimation == 3 || this.selectedAnimation == 4 || this.selectedAnimation == 6) {
                        transformProp1.scale3D(1.5, 1.5, 1.5);
                    }
                    if (this.selectedAnimation == 2 || this.selectedAnimation == 4 || this.selectedAnimation == 5 || this.selectedAnimation == 6) {
                        transformProp1.rotate3D(45, 5, 5, 5);
                    }
                }
            }
            var animDefinition = {
                100: {
                    "transform": transformProp1
                }
            };
            return kony.ui.createAnimation(animDefinition);
        } catch (err) {
            alert("exception :" + JSON.stringify(err));
        }
    },
    getAnimConfig: function() {
        var animconfig = {
            "duration": 1,
            "iterationCount": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE,
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_BOTH
        };
        return animconfig;
    },
    animationEndCallback: function() {
        kony.print("in animation end...");
        this.view.ButtonRound.text = "RESET";
        this.view.ButtonRound.onClick = this.resetAnimObj;
    },
    resetAnimObj: function() {
        this.frPostShow();
        this.view.ButtonRound.text = "Start Animation";
        this.view.ButtonRound.onClick = this.startAnimation;
    }
});