define({
  		knowledgeFrameworkData : [
              {
              "APIName" : "Background Color",
              "Description" : "<p>Specifies the background color of the widget in hex format.</p><p>default: No default value. It accepts 6 dig or 8 digit with alpha position are allowed. For example, ffffff or ffffff00.</p><p><br><b>Note:</b> This property has more priority compared to the values coming from the configured skin.The values 0x and # are not allowed in the hex format.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br> 0 : {<br> "backgroundColor" :"77BD43"<br> },<br>100 : {<br> "backgroundColor" :"F36C21"<br>} <br>} <br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
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
                	"backgroundColor" :"77BD43"
                  },
                100 : 
                 {
                	"backgroundColor" :"F36C21"
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
    
          	this.view.flxObject.backgroundColor = "77BD43";
          
          	this.view.ButtonRound.text = "Start Animation";
          	this.view.ButtonRound.onClick = this.startAnimation;
		}
 });