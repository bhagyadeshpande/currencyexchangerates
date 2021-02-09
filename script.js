let result = document.getElementsByTagName("option");
let tab = document.getElementById("displayTable");

async function displayCurrency(code){
  try{
let response = await fetch(`https://api.exchangeratesapi.io/latest?base=${code}`);
let jsonData = await response.json();
let rate = jsonData.rates;
tab.innerHTML = "";
for(i=0;i<15;i++){
var tabRow = document.createElement("tr");
tabRow.setAttribute("text-align", "center");
var tabCol1 = document.createElement("td");
tabCol1.setAttribute("id", "c1");
tabCol1.innerHTML = result[i].value;
var tabCol2 = document.createElement("td");
tabCol2.setAttribute("id", "c2");
tabCol2.innerHTML = rate[result[i].value];
tabRow.append(tabCol1, tabCol2);
tab.append(tabRow);
}}
catch(error){
  console.log(error);
}
}

async function valueConversion(currencyValue){
  let ind = document.getElementById("cur").selectedIndex;
  let currencyCode = result[ind].value;
  try{
    let response = await fetch(`https://api.exchangeratesapi.io/latest?base=${currencyCode}`);
    let jsonData = await response.json();
    let rate = jsonData.rates;
    tab.innerHTML = "";
    for(i=0;i<15;i++){
    var tabRow = document.createElement("tr");
    tabRow.setAttribute("text-align", "center");
    var tabCol1 = document.createElement("td");
    tabCol1.setAttribute("id", "c1");
    tabCol1.innerHTML = result[i].value;
    var tabCol2 = document.createElement("td");
    tabCol2.setAttribute("id", "c2");
    tabCol2.innerHTML = rate[result[i].value] * currencyValue;
    tabRow.append(tabCol1, tabCol2);
    tab.append(tabRow);
    }}
    catch(error){
      console.log(error);
    }  
}



