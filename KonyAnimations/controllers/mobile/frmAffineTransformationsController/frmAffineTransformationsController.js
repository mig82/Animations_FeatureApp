define({ 
  	knowledgeFrameworkData : [
              {
              "APIName" : "Affine Transformations",
              "Description" : "<p>This method creates a 2D transform object. A 2D transform object can be used to scale, translate, and rotate the widgets in a two-dimensional space.</p><br><p><b>Note:</b> Irrespective of the invocation order of operations, kony.ui.makeAffineTransform method applies the transform in the sequence of scale, translate, and rotate operations.</p>",
              "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">getAnimationObj:function(){<br>try{<br>var transformProp1 = kony.ui.makeAffineTransform();<br>transformProp1.translate(tx, ty);<br>transformProp1.scale(sx,sy);<br>transformProp1.rotate(angle);<br><br>var transformProp2 = kony.ui.makeAffineTransform();<br>transformProp2.translate(tx, ty);<br>transformProp2.scale(sx,sy);<br>transformProp2.rotate(angle);<br>var animDefinition = {<br>0:{<br> "transform" : transformProp1;<br>}...<br>100 :{<br>"transform" : transformProp2;<br>}<br>} ;<br>return kony.ui.createAnimation(animDefinition);<br>}catch(err){<br>alert("exception :"+JSON.stringify(err));<br>}<br>}<br>',
              "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#animationapi.htm%3FTocPath%3DAnimation%2520API%7C_____0">Animation APIs</a><br>'
              }
    		],
  	showKnowledgeFrameWork:function(){
      	var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
      	ntf.navigate(this.knowledgeFrameworkData);
    },
	featureSelected:function(){
     	var ntf = new kony.mvc.Navigation("frmTranslate");
    	ntf.navigate(this.view.segList.selectedRowIndex[1]);
    }
 });