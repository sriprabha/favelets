function run(){
	var divs = document.getElementsByTagName("div");
	var spans=document.getElementsByTagName("span");
   appendErrorText(divs);
   appendErrorText(spans);
}


function appendErrorText(elementList){
   for(var i = 0; i < elementList.length; i++){
         var attributeRole=elementList[i].getAttribute("role");
         if(attributeRole!==null && attributeRole==="button"){
            var attributeTabindex=elementList[i].getAttribute("tabindex");
            if(attributeTabindex===null || attributeTabindex===""){
               var errorSpan=document.createElement('span');
               errorSpan.style.color="red";
               errorSpan.style.fontSize="small";
               errorSpan.style.marginLeft="4px";
               errorSpan.innerHTML="No tabindex found!";
               elementList[i].parentNode.appendChild(errorSpan);
            }
         }
         
   }
}
run();