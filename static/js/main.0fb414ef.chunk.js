(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),i=n(3),s=n.n(i);var l=function(){const[e,t]=Object(o.useState)([]),[n,a]=Object(o.useState)(null),[c,i]=Object(o.useState)(""),l=["https://th.bing.com/th/id/R.8587dd29f2aa06a64b6b16d0c915af2e?rik=%2f23FbpZP2jpgbQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f4%2ff%2f1423900-cool-wallpaper-jesus-christ-2146x1390-for-ios.jpg&ehk=LhSY%2fxzYMhnostjD%2bWNQK2vWsgqZMOIsQ%2fz0MEwrDvU%3d&risl=&pid=ImgRaw&r=0","https://www.thoughtco.com/thmb/ALR6WHb_AwlvkRJvtF9Qk5011qU=/3582x2592/filters:no_upscale():max_bytes(150000):strip_icc()/jesus-christ-crucified-on-the-cross-184929267-585957c25f9b586e022e22ea.jpg","https://th.bing.com/th/id/OIP.gASMlPqsrIt_9q8Y76PZKgHaFj?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.pUCLOhrVZfmo6X3OrJWASgHaE8?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.QIT2OGzAJGKna6RyctbDqAHaEK?rs=1&pid=ImgDetMain"];return Object(o.useEffect)(()=>{fetch("/bible-verses.json").then(e=>e.json()).then(e=>t(e.verses)).catch(e=>console.error("Error fetching the JSON:",e))},[]),r.a.createElement("div",{style:{padding:"20px",textAlign:"center"}},r.a.createElement("h1",null,"Bible Verses Generator"),r.a.createElement("button",{onClick:()=>{const t=Math.floor(Math.random()*e.length);a(e[t]);const n=Math.floor(Math.random()*l.length);i(l[n])},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",marginBottom:"20px"}},"Generate Random Verse"),n&&r.a.createElement("div",{id:"verse-container",style:{position:"relative",width:"80%",margin:"20px auto",padding:"50px",backgroundImage:`url(${c})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",color:"#fff",fontSize:"24px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"10px",minHeight:"300px",display:"flex",flexDirection:"column",justifyContent:"center"}},r.a.createElement("p",null,'"',n.text,'"'),r.a.createElement("p",null,"- ",n.book,"-",n.chapter,":",n.verse)),n&&r.a.createElement("button",{onClick:()=>{const e=document.getElementById("verse-container");s()(e).then(e=>{const t=document.createElement("a");t.download="bible-verse.png",t.href=e.toDataURL(),t.click()})},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",marginTop:"20px"}},"Download Verse Image"))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(l,null))},4:function(e,t,n){e.exports=n(13)}},[[4,1,2]]]);
//# sourceMappingURL=main.0fb414ef.chunk.js.map