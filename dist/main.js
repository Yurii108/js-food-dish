(()=>{var e={888:e=>{e.exports=function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,a;function r(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function i(){e.textContent=t&&n&&o&&s&&a?"female"===t?Math.floor((447.6+9.2*n+3.1*o-4.3*s)*a):Math.floor((88.36+13.4*n+4.8*o-5.7*s)*a):"____"}function c(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),i()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":n=+t.value;break;case"age":s=+t.value}i()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",t=localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,a=localStorage.setItem("ratio",1.375)),r("#gender div","calculating__choose-item_active"),r(".calculating__choose_big div","calculating__choose-item_active"),i(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}},996:e=>{e.exports=function(){class e{constructor(e,t,n,o,s,a,...r){this.src=e,this.alt=t,this.title=n,this.descr=o,this.prise=s,this.classes=r,this.parent=document.querySelector(a),this.transfer=28,this.changeToUAH()}changeToUAH(){this.prise=this.prise*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.element="menu__item",e.classList.add(this.element)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n            <img src=${this.src} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">${this.title}</h3>\n            <div class="menu__item-descr">${this.descr}</div>\n            <div class="menu__item-divider"></div>\n            <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>\n            </div>`,this.parent.append(e)}}axios.get("http://localhost:3000/menu").then((t=>{t.data.forEach((({img:t,altimg:n,title:o,descr:s,price:a})=>{new e(t,n,o,s,a,".menu .container").render()}))}))}},400:e=>{e.exports=function(){const e=document.querySelectorAll("form");function t(e){const t=document.querySelector(".modal__dialog");t.classList.add("hide"),openModal();const n=document.createElement("div");n.classList.add("modal__dialog"),n.innerHTML=`\n    <div class="modal__content">\n        <div class="modal__close" data-close>×</div>\n        <div class="modal__title">${e}</div>\n    </div>\n    `,document.querySelector(".modal").append(n),setTimeout((()=>{n.remove(),t.classList.add("show"),t.classList.remove("hide"),closeModal()}),4e3)}e.forEach((e=>{var n;(n=e).addEventListener("submit",(e=>{e.preventDefault();const o=document.createElement("img");o.src="img/form/spinner.svg",o.style.cssText="\n        display: block;\n        margin: 0 auto;\n        ",n.insertAdjacentElement("afterend",o);const s=new FormData(n);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),t("Спасибо! Скоро мы с вами свяжемся"),o.remove()})).catch((()=>{t("Что-то пошло не так...")})).finally((()=>{n.reset()}))}))})),fetch("http://localhost:3000/menu").then((e=>e.json())).then((e=>console.log(e)))}},221:e=>{e.exports=function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function n(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(s)}function o(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}e.forEach((e=>{e.addEventListener("click",n)})),t.addEventListener("click",(e=>{e.target!==t&&""!=e.target.getAttribute("data-close")||o()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&t.classList.contains("show")&&o()}));const s=setTimeout(n,5e4);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(n(),removeEventListener("scroll",e))}))}},328:e=>{e.exports=function(){let e=1,t=0;const n=document.querySelectorAll(".offer__slide"),o=document.querySelector(".offer__slider"),s=document.querySelector(".offer__slider-prev"),a=document.querySelector(".offer__slider-next"),r=document.querySelector("#total"),i=document.querySelector("#current"),c=document.querySelector(".offer__slider-wrapper"),l=document.querySelector(".offer__slider-inner"),d=window.getComputedStyle(c).width;n.length<10?(r.textContent=`0${n.length}`,i.textContent=`0${e}`):(r.textContent=n.length,i.textContent=e),l.style.width=100*n.length+"%",l.style.display="flex",l.style.transition="0.5s all",c.style.overflow="hidden",n.forEach((e=>{e.style.width=d})),o.style.position="relative";const u=document.createElement("ol"),m=[];u.classList.add("carousel-indicators"),u.style.cssText="\nposition: absolute;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 15;\ndisplay: flex;\njustify-content: center;\nmargin-right: 15%;\nmargin-left: 15%;\nlist-style: none;\n",o.append(u);for(let e=0;e<n.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\nbox-sizing: content-box;\nflex: 0 1 auto;\nwidth: 30px;\nheight: 6px;\nmargin-right: 3px;\nmargin-left: 3px;\ncursor: pointer;\nbackground-color: #fff;\nbackground-clip: padding-box;\nborder-top: 10px solid transparent;\nborder-bottom: 10px solid transparent;\nopacity: .5;\ntransition: opacity .6s ease;\n",0==e&&(t.style.opacity=1),u.append(t),m.push(t)}const h=e=>+e.replace(/\D/g,"");function g(o){o.forEach((e=>e.style.opacity=".5")),o[e-1].style.opacity=1,l.style.transform=`translateX(-${t}px)`,n.length<10?i.textContent=`0${e}`:i.textContent=e}a.addEventListener("click",(()=>{t==h(d)*(n.length-1)?t=0:t+=h(d),e==n.length?e=1:e++,g(m)})),s.addEventListener("click",(()=>{0==t?t=h(d)*(n.length-1):t-=h(d),1==e?e=n.length:e--,g(m)})),m.forEach((n=>{n.addEventListener("click",(n=>{const o=n.target.getAttribute("data-slide-to");e=o,t=h(d)*(o-1),g(m)}))}))}},523:e=>{e.exports=function(){const e=document.querySelectorAll(".tabheader__item"),t=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function o(){t.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),e.forEach((e=>{e.classList.remove("tabheader__item_active")}))}function s(n=0){t[n].classList.add("show","fade"),t[n].classList.remove("hide"),e[n].classList.add("tabheader__item_active")}o(),s(),n.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains("tabheader__item")&&e.forEach(((e,t)=>{n==e&&(o(),s(t))}))}))}},945:e=>{e.exports=function(){function e(e){return 10>e&&0<=e?"0"+e:e}!function(t,n){const o=document.querySelector(".timer"),s=o.querySelector("#days"),a=o.querySelector("#hours"),r=o.querySelector("#minutes"),i=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(e){let t,n,o,s;const a=Date.parse("2022-06-30")-Date.parse(new Date);return a<=0?(t=0,n=0,o=0,s=0):(t=Math.floor(a/864e5),n=Math.floor(a/36e5%24),o=Math.floor(a/1e3/60%60),s=Math.floor(a/1e3%60)),{total:a,days:t,hours:n,minutes:o,seconds:s}}();s.innerHTML=e(t.days),a.innerHTML=e(t.hours),r.innerHTML=e(t.minutes),i.innerHTML=e(t.seconds),t.total<=0&&clearInterval(c)}l()}()}}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){const e=n(888),t=n(996),o=n(400),s=n(221),a=n(328),r=n(523),i=n(945);e(),t(),o(),s(),a(),r(),i()}))})()})();