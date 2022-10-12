
const url='https://api.kanye.rest/'
function myQuotes(url){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{quotes(data)
    console.log(data);
    })
}
const quotes=(quote)=>{
const paragraph=document.getElementById('quotes')
paragraph.innerText=quote.quote
}