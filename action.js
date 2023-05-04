document.getElementById("troisligne").addEventListener("click",function(){
    document.getElementById("nav").classList.toggle("active");
});
let books=document.getElementsByClassName("linebook11");
for(let i=0;i<books.length;i++){
    books[i].addEventListener("click",function(){
    books[i].classList.toggle("active");
    })
};
let p11Elements=document.getElementsByClassName("p11");
let booksName= Array.from(p11Elements).map(function(bookName){
    return bookName.innerHTML;
});
function search(query){
    for(let i=0;i<booksName.length;i++){
        if(booksName[i].toLowerCase().startsWith(query.toLowerCase())||query==""){
            p11Elements[i].parentNode.style.display="inline-block";
        }
        else{
            p11Elements[i].parentNode.style.display="none";
        }
    }
}
document.getElementById("input").addEventListener("input",function(){
    search(this.value);
});
