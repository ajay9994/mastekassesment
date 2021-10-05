const root=document.getElementById("root");
const ol=document.createElement("ul");
ol.setAttribute('id',"shoplist");
 
function Additem(){
    const item=document.getElementById("item").value;  
    
    const li=document.createElement("li");
    li.innerHTML=item;
    ol.appendChild(li);
    root.appendChild(ol);
    document.getElementById("item").value="";    
    
}
