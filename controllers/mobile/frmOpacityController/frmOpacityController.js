define({
  		knowledgeFrameworkData : [
              {
              "APIName" : "Animating Opacity",
              "Description" : "<p>Specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value.</p><br><p><b>Note:</p> This property has more priority compared to the values coming from the configured skin.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0 : {<br>"opacity" :1<br> },<br> 100 :{<br> "opacity" :0 <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
              }
    		],
  		showKnowledgeFrameWork:function(){
          var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
          ntf.navigate(this.knowledgeFrameworkData);
   	 	},
		startAnimation:function(){
        	this.view.flxObject.animate(this.getAnimationObj(), this.getAnimConfig(), {
                                                                                      animationStart :function(){kony.print("in animation start!!");},
                                                                                      animationEnd :this.animationEndCallback
                                                                                    });  
        },
  		getAnimationObj:function(){
  			var animDefinition = 
              {
                0 : 
                 {
                	"opacity" :1
                  },
                100 : 
                 {
                	"opacity" :0
                  }
                } ;
              return kony.ui.createAnimation(animDefinition);
		},
  		getAnimConfig:function(){
          var animconfig = {
            	"duration":2,
            	"iterationCount":1,
            	"direction":kony.anim.DIRECTION_ALTERNATE,
            	"delay":0,
            	"fillMode":kony.anim.FILL_MODE_BOTH
          };
          return animconfig;
        },
  		animationEndCallback:function(){
            kony.print("in animation end...");   
          
          	this.view.ButtonRound.text = "RESET";
          	this.view.ButtonRound.onClick = this.resetAnimObj;
          
        	
        },
  		resetAnimObj:function(){
  			this.view.flxObject.width = "20%";
          	this.view.flxObject.height = "20%";
    
          	this.view.flxObject.opacity = 1;
          
          	this.view.ButtonRound.text = "Start Animation";
          	this.view.ButtonRound.onClick = this.startAnimation;
		}
 });