function run(){
	var divs = document.getElementsByTagName("div");
	for(var i = 0; i < divs.length; i++){
   		var attributeRole=divs[i].getAttribute("role");
   		if(attributeRole!==null && attributeRole !=="" && attributeRole==="button"){
   			var attributeTabindex=divs[i].getAttribute("tabindex");
   			if(attributeTabindex===null || attributeTabindex===""){
   				var errorSpan=document.createElement('span');
   				errorSpan.style.color="red";
               errorSpan.style.fontSize="small";
               errorSpan.style.backgroundColor="#f5deb3";
   				errorSpan.innerHTML="No tabindex found!";
   				divs[i].appendChild(errorSpan);
   			}
   		}
   		
	}
}
run();