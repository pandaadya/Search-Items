// const search=()=>{
//  const searchbox=document.getElementById("search").ariaValueMax.toLocaleUpperCase();
//  const storeItem=document.getElementById("product-list");
//  const product=document.querySelectorAll(".product");
//  const pname=document.getElementsByTagName("h2");
// }
document.querySelector("#search").
addEventListener('input',filterList)

function filterList(){
    const searchInput=document.querySelector("#search");
    const filter=searchInput.value.toLowerCase();
    const listitem=document.querySelectorAll(".product")

    listitem.forEach((item)=>{
        let text=item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.dispay="";
        }
        else{
            item.style.display="none";
        }

       
    })
}