var e=new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){return e()})}),n=new Promise(function(e,n){setTimeout(function(){return n(Error("Promise was rejected!"))},3e3)}),t=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");t.classList.add("message"),n&&t.classList.add("error-message"),t.textContent=e,document.body.appendChild(t)},r=function(e){t(e)},o=function(e){t(e,!0)};e.then(function(){return r("Promise was resolved!")}).catch(function(e){return o(e.message)}),n.then(function(){return r("Promise was resolved!")}).catch(function(e){return o(e.message)});
//# sourceMappingURL=index.8c39b1a7.js.map
