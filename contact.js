const form=document.querySelector("form");
const scope=form.elements.scope,index=new URLSearchParams(location.search).get("scope");
if(scope && /^[012]$/.test(index||""))scope.selectedIndex=Number(index);
form.addEventListener("submit",event=>{
 event.preventDefault();
 const subject=document.querySelector("h1").textContent+" | SAMT";
 const lines=Array.from(form.querySelectorAll("input,select,textarea"),field=>field.parentElement.firstChild.textContent+": "+field.value.trim());
 const source=new URLSearchParams(location.search).get("source");
 if (["homepage","case-study","linkedin","facebook","youtube","partner","direct","freelance"].includes(source)) lines.push("Source / مصدر الطلب: "+source);
 const body=encodeURIComponent([subject,...lines].join("\n"));
 location.href=event.submitter?.value==="email"?"mailto:mohammed.ragab@eng.asi.edu.eg?subject="+encodeURIComponent(subject)+"&body="+body:"https://wa.me/201093597338?text="+body;
});