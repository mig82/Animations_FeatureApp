define({
  		selectedAnimation:null,
  		is3DEnabled:false,
  		commonKFData:{
          "TRANSLATE":{
      	      "APIName" : "Translate",
              "Description" : "<p>This method returns an affine transformation matrix constructed by translating receivers affine transform. It is a JSObject with keys tx and ty and allow numbers in dp.</p><br><p><b>Note:</b> Values cannot be specified using percentage and pixels.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
          },
          "SCALE":{
              "APIName" : "Scale",
              "Description" : "<p>This method returns an affine transformation matrix constructed by scaling receivers affine transform. It is a JSObject with keys sx and sy and allow numbers only.</p><br><p><b>Note:</b> Scaling does not result in any layout changes to parent or peer widgets. This is applicable to the widgets placed inside horizontal or vertical flex containers. Negative values for sx and sy will make the widget flip in that direction.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"<br>},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
          },
          "ROTATE":{
             "APIName" : "Rotate",
             "Description" : "<p>This method returns an affine transformation matrix constructed by rotating receivers affine transform. Angle is a number in degrees and always measured from x-axis as shown.</p><br><p><b>Note:</b> Any value greater than 180 degrees may lead to shortest path rotation from its current position. For cross platform values, for example 190 degrees will make the object rotate -170 (190-360) in negative direction, as 170 is shortest path compared to 190.</p>",
             "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"<br>},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
             "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
          },
          "TRANSLATE3D":{
      	      "APIName" : "Translate3D",
              "Description" : "<p>Translates the widget from present location to new location by x, y, z amount.</p><br><p><b>Note:</b> Values cannot be specified using percentage and pixels.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"<br>},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
          },
          "SCALE3D":{
              "APIName" : "Scale3D",
              "Description" : "<p>This method returns an affine transformation matrix constructed by scaling receivers affine transform. It is a JSObject with keys sx and sy and allow numbers only.</p><br><p><b>Note:</b> Scaling does not result in any layout changes to parent or peer widgets. This is applicable to the widgets placed inside horizontal or vertical flex containers. Negative values for sx and sy will make the widget flip in that direction.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
          },
          "ROTATE3D":{
             "APIName" : "Rotate3D",
             "Description" : "<p>This method returns an affine transformation matrix constructed by rotating receivers affine transform. Angle is a number in degrees and always measured from x-axis as shown.</p><br><p><b>Note:</b> Any value greater than 180 degrees may lead to shortest path rotation from its current position. For cross platform values, for example 190 degrees will make the object rotate -170 (190-360) in negative direction, as 170 is shortest path compared to 190.</p>",
             "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> "left" : "2%" ,<br> "top" : "2%" <br>},<br>25:{<br>"left" : "40%"},<br>50:{<br>"top" : "40%"},<br>75:{<br>"left" : "78%"<br>},<br>100 : <br>{<br>"top" : "78%" <br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
             "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
          }
        },
  		knowledgeFrameworkData : [],
  		showKnowledgeFrameWork:function(){
          var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
          ntf.navigate(this.knowledgeFrameworkData);
   	 	},
  		onNavigate:function(option){
          if(option!==null && option!==undefined){
          this.knowledgeFrameworkData = [];
          this.selectedAnimation = option;
          this.view.lblHeading.text = "";
            var deviceName = kony.os.deviceInfo().name;
          if(this.selectedAnimation==0 || this.selectedAnimation==3 || this.selectedAnimation==5 || this.selectedAnimation==6){
            		this.view.lblHeading.text = this.view.lblHeading.text + " TRANSLATE ";
            		this.knowledgeFrameworkData.push(this.commonKFData.TRANSLATE);
                      if(deviceName==="iPhone"){
                        this.knowledgeFrameworkData.push(this.commonKFData.TRANSLATE3D);
                      }
            
                }
                if(this.selectedAnimation==1 || this.selectedAnimation==3 || this.selectedAnimation==4 || this.selectedAnimation==6){
                      this.view.lblHeading.text = this.view.lblHeading.text + " SCALE ";
                  	  this.knowledgeFrameworkData.push(this.commonKFData.SCALE);
                  		if(deviceName==="iPhone"){
                        this.knowledgeFrameworkData.push(this.commonKFData.SCALE3D);
                      }
                  }
                if(this.selectedAnimation==2 || this.selectedAnimation==4 || this.selectedAnimation==5 || this.selectedAnimation==6){
          			 this.view.lblHeading.text = this.view.lblHeading.text + " ROTATE ";
                  	 this.knowledgeFrameworkData.push(this.commonKFData.ROTATE);
                  		if(deviceName==="iPhone"){
                        this.knowledgeFrameworkData.push(this.commonKFData.ROTATE3D);
                      }
                }
          }
          	this.view.ButtonRound.text = "Start Animation";
          	this.view.ButtonRound.onClick = this.startAnimation;
        },
  		frPostShow:function(){
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
          
          if(this.selectedAnimation==1 || this.selectedAnimation==2 || this.selectedAnimation==4){
            flxObject.centerX = "50%";
            flxObject.centerY = "50%";
          }
          
          this.btn2DClicked();
          
        },
  		btn2DClicked:function(){
          this.is3DEnabled = false;
          
          this.view.btn2D.skin = "BTNACTIVE";
          this.view.btn3D.skin = "BTNINACTIVE";
        },
  		btn3DClicked:function(){
          if(kony.os.deviceInfo().name==="android"){
            alert("3D animations are not supported in android!!!!");
            return;
          }else{
            this.is3DEnabled = true;
            
            this.view.btn2D.skin = "BTNINACTIVE";
            this.view.btn3D.skin = "BTNACTIVE";
          }
        },
		startAnimation:function(){
          try{
        	this.view.flxObject.animate(this.getAnimationObj(), this.getAnimConfig(), {
                                                                                      animationStart :function(){kony.print("in animation start!!");},
                                                                                      animationEnd :this.animationEndCallback
                                                                                    });  
          }catch(exc){
            alert("exception :"+JSON.stringify(exc));
          }
        },
  		getAnimationObj:function(){
          
          try{
            var transformProp1 = kony.ui.makeAffineTransform();
          if(this.selectedAnimation !== null ){
          	if(this.is3DEnabled===false){
          		if(this.selectedAnimation==0 || this.selectedAnimation==3 || this.selectedAnimation==5 || this.selectedAnimation==6){
            		transformProp1.translate(80, 80);      
                }
                if(this.selectedAnimation==1 || this.selectedAnimation==3 || this.selectedAnimation==4 || this.selectedAnimation==6){
                      transformProp1.scale(1.5,1.5);
                  }
                if(this.selectedAnimation==2 || this.selectedAnimation==4 || this.selectedAnimation==5 || this.selectedAnimation==6){
          			 transformProp1.rotate(60);
                }
            }else{
              	transformProp1.setPerspective(300);
				if(this.selectedAnimation==0 || this.selectedAnimation==3 || this.selectedAnimation==5 || this.selectedAnimation==6){
            		transformProp1.translate3D(80, 80,80);      
                }
                if(this.selectedAnimation==1 || this.selectedAnimation==3 || this.selectedAnimation==4 || this.selectedAnimation==6){
                      transformProp1.scale3D(1.5,1.5,1.5);
                  }
                if(this.selectedAnimation==2 || this.selectedAnimation==4 || this.selectedAnimation==5 || this.selectedAnimation==6){
          			 transformProp1.rotate3D(45,5,5,5);
                }
            }
          }
                    
  			var animDefinition = 
              {
                 100 : 
                 {
               		"transform":transformProp1
                  }
                } ;
            
              return kony.ui.createAnimation(animDefinition);
          }catch(err){
            alert("exception :"+JSON.stringify(err));
          }
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
          	this.frPostShow();
  			
          	this.view.ButtonRound.text = "Start Animation";
          	this.view.ButtonRound.onClick = this.startAnimation;
		}
 });