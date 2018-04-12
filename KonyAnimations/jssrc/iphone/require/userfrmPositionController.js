define({
    startAnimation: function() {
        this.view.flxObject.animate(this.getAnimationObj(), this.getAnimConfig(), {
            animationStart: function() {
                kony.print("in animation start!!");
            },
            animationEnd: this.animationEndCallback
        });
    },
    getAnimationObj: function() {
        var animDefinition = {
            0: {
                "left": "2%",
                "top": "2%"
            },
            25: {
                "left": "40%"
            },
            50: {
                "top": "40%"
            },
            75: {
                "left": "78%"
            },
            100: {
                "top": "78%"
            }
        };
        return kony.ui.createAnimation(animDefinition);
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
        this.view.flxObject.left = "2%";
        this.view.flxObject.top = "2%";
        this.view.ButtonRound.text = "Start Animation";
        this.view.ButtonRound.onClick = this.startAnimation;
    }
});