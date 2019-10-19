define({ 
    knowledgeFrameworkData : [
              {
              "APIName" : "Kony Animations",
              "Description" : "<p>These functions create animations and transforms that are then passed to the methods of widgets that are capable of performing animations. For example, the segmentedUI widget methods addAll, addDataAt, and addSectionAt all perform animations on UI elements in the rows.</p> <p>In addition, you can use the animation API to do 3D transformations and animations on all widgets that support animations. To do so, your app creates a transform object, call the appropriate transformation methods to set the transformation's properties, and then store the transform object into the transform property of the widget you want to perform the transformation on.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">//Start Animation<label><br>startAnimation:function(){<br>try{<br>&lt;widget id &gt;.animate(this.getAnimationObj(), this.getAnimConfig(), { <br>animationStart :function(){kony.print("in animation start!!");},<br>animationEnd :this.animationEndCallback<br>});<br>}catch(exc){<br>alert("exception :"+JSON.stringify(exc));<br>}<br>}<br>getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br>&lt;step config&gt;<br>},<br>10:{<br>&lt;step config&gt;<br>},<br>...<br>100 : <br>{<br>&lt;step config&gt;<br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>},<br>getAnimConfig:function(){<br>var animconfig = {<br>"duration":1,<br>"iterationCount":1,<br>"direction":kony.anim.DIRECTION_ALTERNATE,<br>"delay":0,<br>"fillMode":kony.anim.FILL_MODE_BOTH<br>};<br>return animconfig;<br>},<br>animationEndCallback:function(){<br>kony.print("in animation end...");<br>/*<br>write your code here..<br>*/<br>}',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
              }
    		],
	featureSelected:function(){
      var listOfNextForms = ["frmKeyFrameAnimations","frmAffineTransformations"];
      var selectedFeatureId = this.view.segFeaturesList.selectedRowIndex[1];
      var formToBeNavigated = listOfNextForms[selectedFeatureId];
      
      var ntf = new kony.mvc.Navigation(formToBeNavigated);
      ntf.navigate();
    },
  	showKnowledgeFrameWork:function(){
      	var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
      	ntf.navigate(this.knowledgeFrameworkData);
    }

 });