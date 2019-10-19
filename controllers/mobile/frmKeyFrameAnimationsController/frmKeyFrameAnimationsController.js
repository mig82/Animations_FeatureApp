define({ 
  	 knowledgeFrameworkData : [
              {
              "APIName" : "Widget Level Animations",
              "Description" : "<p>Widget Level Animation feature enables you to animate widgets placed in a container (for example, Form ). The scope of this feature is to support 2D animations and transformations by using widget properties only.  These animations are supported in iOS, Android, Windows, and SPA platforms for the applications created in JavaScript language using Kony Platform</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{var animDefinition = {<br>0:{<br> &lt;widget property&gt; : &lt;value&gt; ,<br> &lt;widget property&gt; : &lt;value&gt; <br>... <br>},<br>10:{<br>&lt;widget property&gt; : &lt;value&gt; ,<br> &lt;widget property&gt; : &lt;value&gt; <br>...<br>},<br>...<br>100 : <br>{<br>&lt;widget property&gt; : &lt;value&gt; ,<br> &lt;widget property&gt; : &lt;value&gt; <br>...<br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
              }
    		],
	featureSelected:function(){
      var listOfNextForms = ["frmPosition","frmDimension","frmBGColor","frmOpacity"];
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