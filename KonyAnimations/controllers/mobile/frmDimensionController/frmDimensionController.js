define({
  		knowledgeFrameworkData : [
              {
              "APIName" : "Animating Dimension",
              "Description" : "<p>dimensional properties such as width, height, minHeight, maxHeight, minWidth, maxWidth, and visibility will result in change in widget dimensions.</p> <p><b>Note:</b> Note that these dimensional properties only indicate the values that developers set but the layout engine will determine final frames and the animation happens between the final computed values.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br> 0 : { <br>"width":"20%", <br>"height":"20%" <br>},<br> 100 : {<br> "width":"40%",<br> "height":"40%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
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
                   "width":"20%",
                   "height":"20%"
                  },
                 100 : 
                 {
                   "width":"40%",
                   "height":"40%"
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
  			this.view.flxObject.width = "20%";
          	this.view.flxObject.height = "20%";
      		
          	this.view.ButtonRound.text = "Start Animation";
          	this.view.ButtonRound.onClick = this.startAnimation;
		}
 });