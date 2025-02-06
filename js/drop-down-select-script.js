let wraper=document.querySelector('.drop-down-content');
const selectbtn=document.querySelector('.select-btn');
const options=document.querySelector('.drop-down-content .options');
let searchInput=document.querySelector('.drop-down-content .search input');
let categories=["Acountant","Resturant","Acountant","Resturant","Acountant","Resturant","Acountant","Resturant"]

function addCategories()
{
    options.innerHTML="";
    categories.forEach(category=>{
        let li=`<li onclick="updateName(this)">${category}</li>`;
        options.insertAdjacentHTML('beforeend',li);
    })
}
addCategories();
function updateName(li)
{
    searchInput.value="";
    addCategories();
    selectbtn.firstElementChild.innerText=li.innerText
}
selectbtn.addEventListener('click',()=>{
    wraper.classList.toggle('active');
    selectbtn.classList.toggle('rotate')
})

searchInput.addEventListener("keyup",()=>{
    let arr=[];
    let searchVal=searchInput.value.toLowerCase();
    arr=categories.filter(data=>{
        return data.toLowerCase().startsWith(searchVal);
    }).map(data=>`<li  onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML=arr;
});