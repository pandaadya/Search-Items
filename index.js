const searchProduct=()=>{
    const userSearch=document.getElementById("search").value.toUpperCase();
    const products=document.querySelectorAll(".product");
    const productName=document.getElementsByTagName("h2")


    for(var i=0;i<productName.length;i++){
        let match=products[i].getElementsByTagName("h2")[0];

        if(match){
            let text=match.textContent||match.innerHTML;

            if(text.toLocaleUpperCase().indexOf(userSearch) > -1){
                products[i].style.display="";
            }
            else{
                products[i].style.display="none"
            }
        }
    }
}


// document.querySelector("#search").
// addEventListener('input',filterList)

// function filterList(){
//     const searchInput=document.querySelector("#search");
//     const filter=searchInput.value.toLowerCase();
//     const listitem=document.querySelectorAll(".product")

//     listitem.forEach((item)=>{
//         let text=item.textContent;
//         if(text.toLowerCase().includes(filter.toLowerCase())){
//             item.style.dispay="";
//         }
//         else{
//             item.style.display="none";
//         }
