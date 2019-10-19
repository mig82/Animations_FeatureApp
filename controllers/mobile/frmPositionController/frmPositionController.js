define({
  		knowledgeFrameworkData : [
              {
              "APIName" : "Animating Position",
              "Description" : "<p>positional properties (top, left, right, bottom, centerX, centerY) are animatable. Changes to these properties can make the widget move out of the parent and overlap with other widgets.</p><p><b>Note</b> that these positional properties only indicate the values that developers set but the layout engine will determine final frames and the animation happens between the final computed values.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
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
                   "left":"2%",
                   "top":"2%"
                  },
                 25 :{
                   "left":"40%"
                 },
                50 : {
                  	"top":"40%"
                },
                75: {
                  "left":"78%"	
                },
                 100 : 
                 {
                   "top":"78%"
                  }
                } ;
              return kony.ui.createAnimation(animDefinition);
		},
  		getAnimConfig:function(){
          var animconfig = {
            	"duration":1,
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
  			this.view.flxObject.left = "2%";
          	this.view.flxObject.top = "2%";
      		
          	this.view.ButtonRound.text = "Start Animation";
          	this.view.ButtonRound.onClick = this.startAnimation;
		}
 });