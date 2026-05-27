let mySaved = []
let mySavedLinks = []
let listItems = ""
let pressesSave = []
let pressesTab = []
const uInput = document.getElementById("userInput")
const savedBtn = document.getElementById("saveBtn")
const listSaved = document.getElementById("list")
const deleteBtn = document.getElementById("deleteBtn")
const tabBtn = document.getElementById("tabBtn")

chrome.storage.local.get(["mySaved", "mySavedLinks", "listItems", "pressesSave", "pressesTab"], function(result) {
    if (result.mySaved) mySaved = result.mySaved
    if (result.mySavedLinks) mySavedLinks = result.mySavedLinks
    if (result.listItems) listItems = result.listItems
    if (result.pressesSave) pressesSave = result.pressesSave
    if (result.pressesTab) pressesTab = result.pressesTab
    listSaved.innerHTML = listItems
})

savedBtn.addEventListener("click", function(){
    if(uInput.value){
    mySaved.push(uInput.value)
    chrome.storage.local.set({ mySaved: mySaved }) 
    uInput.value = ""
    pressesSave.push(1)
    chrome.storage.local.set({ pressesSave: pressesSave })
    renderSave(pressesSave.length)
    } 
})

deleteBtn.addEventListener("click", function(){
    mySaved = []
    mySavedLinks = []
    pressesSave = []
    pressesTab =[]
    listItems = ""
    uInput.value = ""
    chrome.storage.local.set({ mySaved: [],  mySavedLinks: [], listItems: "", pressesSave: [], pressesTab: []})
    listSaved.innerHTML = ""
})

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){    mySavedLinks.push(tabs[0].url)
    chrome.storage.local.set({ mySavedLinks: mySavedLinks })
    chrome.storage.local.set({ listItems: listItems })
    pressesTab.push(1)
    chrome.storage.local.set({ pressesTab: pressesTab })
    renderTab(pressesTab.length)})

})

function renderTab(Number){
     for(let i = Number - 1; i < mySavedLinks.length; i++){
   
listItems += 
     `
            <li> 
                <a target='_blank' href='${mySavedLinks[i]}'> ${mySavedLinks[i]} </a> </li>`

   }

   chrome.storage.local.set({ listItems: listItems })
    listSaved.innerHTML = listItems
   } 
   
function renderSave(Number){
       for(let i = Number - 1; i < mySaved.length; i++){
 listItems += 
            "<li>" + mySaved[i] + "</li>" 
       }
       chrome.storage.local.set({ listItems: listItems })
           listSaved.innerHTML = listItems
   }
