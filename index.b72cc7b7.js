const e={key:"39260371-83ef64e0aa197167fe58dcdf0",perpage:"40",image_type:"photo",orientation:"horizontal",safesearch:"true"};async function t({q:t="",page:o="1"}){try{const n=new URLSearchParams({...e,page:o,q:t}),a=await fetch(`https://pixabay.com/api?${n}`);if(!a.ok)return 400===a.status?[]:{error:a.status};const{hits:c}=await a.json();return c}catch(e){return{error:e.toString()}}}const o=e=>{const t=document.createElement("img");return t.classList.add("photo"),t.src=e.webformatURL,t};async function n({q:e,page:n}){const a=await t({q:e,page:n});a.error?alert(a.error):function({photos:e,page:t}){const n=document.querySelector("#photos");"1"===t&&(n.innerHTML="");const a=e.map(o);n.append(...a)}({photos:a,page:n})}async function a(e){e.preventDefault(),e.target.page.value="1";const t=e.target.q.value;await n({q:t,page:"1"})}async function c(){const{scrollTop:e,scrollHeight:t,clientHeight:o}=document.documentElement;if(e+o>=t){const e=document.querySelector("#searchPhotosForm"),t=parseInt(e.page.value);e.page.value=t+1,await n({q:e.q.value,page:e.page.value})}}document.querySelector("#searchPhotosForm").addEventListener("submit",a),c(),window.addEventListener("scroll",c);document.querySelector("#photos").addEventListener("click",(function(e){if(e.target.classList.contains("photo")){const t=document.getElementById("modal-image");t.innerHTML="";const o=document.createElement("img");o.src=e.target.src,o.classList.add("enlargedPhoto"),t.appendChild(o),t.style.display="flex"}}));const r=document.getElementById("modal"),s=document.getElementById("modal-image"),l=document.getElementById("close-modal");function i(e){const{scrollLeft:t,scrollWidth:o,clientWidth:n}=e.target;if(t+n>=o-10){const t=document.querySelector("#searchPhotosForm"),o=parseInt(t.page.value);t.page.value=o+1,a(e)}}document.querySelectorAll(".photo").forEach((e=>{e.addEventListener("click",(()=>{r.style.display="block",s.src=e.src}))})),l.addEventListener("click",(()=>{r.style.display="none"})),photoContainer.addEventListener("scroll",i),photoContainer.addEventListener("wheel",i);
//# sourceMappingURL=index.b72cc7b7.js.map