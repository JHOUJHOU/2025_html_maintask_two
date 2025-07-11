import"./main-f77b37b9.js";const n=document.querySelectorAll(".productCheckBtn"),i=`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
    </svg>`,r=`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path d="M8 1C6.243-1.25 0 2.273 0 6.5 0 9.016 1.81 11.49 8 15c6.19-3.51 8-5.984 8-8.5C16 2.273 9.757-1.25 8 1z"/>
    </svg>`;n.forEach(t=>{const e=document.querySelector(".productCheckBtnIcon"),o=document.querySelector(".productCheckBtnText");t.addEventListener("click",()=>{const c=t.classList.toggle("active");e.innerHTML=c?r:i,o.textContent=c?"已收藏":"加入收藏"})});
