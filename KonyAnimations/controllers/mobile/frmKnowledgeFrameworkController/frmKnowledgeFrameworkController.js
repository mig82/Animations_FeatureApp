define({ 
		onNavigate:function(dataToShow){
          	if(dataToShow===undefined || dataToShow===null){
              	kony.print("no data to show in KnowledgeFramework");
              	alert("no data to show");
              	return;
            }
    		this.view.KnowledgeFramework.setData(dataToShow);
        }
});