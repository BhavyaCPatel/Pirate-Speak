var input=document.querySelector("#textinput");
var btn=document.querySelector("#btn-translate");
var output=document.querySelector("#textoutput");

btn.addEventListener("click",()=>{
    console.log(input.value)
    var inputText=input.value
    fetch("https://api.funtranslations.com/translate/pirate.json?text="+inputText)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
        output.innerHTML=response.contents.translated
    })
    .catch(err=>{
        alert('Some error occured')
        console.log(err)})
});
