console.log("java script loaded");
const dropdown=document.querySelectorAll(".select-container select");
const amount=document.querySelector(".amount input");
const button= document.querySelector(".btn");
const from_select=document.querySelector("#from");
const To_select=document.querySelector("#To");
const ansField= document.querySelector("#ans");

console.log(button);


for(let list of dropdown)
{
    for(let currencyCode in countryList){
    const newOption= document.createElement("option");
    newOption.innerText=currencyCode;
    newOption.value=currencyCode;
    list.appendChild(newOption); 
    }

}

function changeFlag(countryCode,selectElement){
    let immediateParent=selectElement.parentElement;
    console.log(immediateParent);
    let img= immediateParent.querySelector("img");
    img.src=`https://flagsapi.com/${countryCode}/flat/64.png`;

}


for(let list of dropdown)
{
    list.addEventListener("change",(event)=>{
        // console.log(event);
        // console.log(event.target);
        let currency=event.target.value;
        console.log(event.target.value);
        let countryCode=countryList[currency];
        console.log(countryCode);
        changeFlag(countryCode,event.target);

    })
}

amount.addEventListener("input",(event)=>{
    event.preventDefault();
    
    // console.log(event);
    // console.log(event.target);
    console.log(event.target.value);

    
})

function printAns(ans)
{
    console.log("inside print ans");
    ansField.innerText=`${amount.value} ${from_select.value}= ${ans} ${To_select.value}`;

}

function calculateAns(output,To,value,from)
{
    console.log("inside calculate ans");
    let ans= (output[from])[To]*(value);
    console.log(ans);
    //round of the ans:
    //use ans.toFixed(2) this will round off the ans to 2 decimals

    printAns(ans.toFixed(2));

}

button.addEventListener("click",async(event)=>{
    event.preventDefault();
    console.log("before fetch");
    let value=amount.value;
    console.log(value);
    let from= from_select.value.toLowerCase();
    console.log(from);

    let response= await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
    console.log(" after fetch");
    //console.log(response);
    output= await response.json();
    console.log(output);

    let To= To_select.value.toLowerCase();
    calculateAns(output,To,value,from);

    
})





