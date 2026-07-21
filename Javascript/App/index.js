import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://save-links-app-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const uInput = document.getElementById("userInput")
const savedBtn = document.getElementById("saveBtn")
const listSaved = document.getElementById("list")
const deleteBtn = document.getElementById("deleteBtn")
const linkBtn = document.getElementById("linkBtn")

onValue(referenceInDB, function(snapshot) {
    if (snapshot.exists()) {
        const items = Object.values(snapshot.val())
        console.log(items)
        items.sort((a, b) => a.timestamp - b.timestamp)
        let listItems = ""
        for(let i = 0; i < items.length; i++){
            if(items[i].type === "link"){
                listItems += `<li><a target='_blank' href='${items[i].text}'>${items[i].text}</a></li>`
            } else {
                listItems += "<li>" + items[i].text + "</li>"
            }
        }
        listSaved.innerHTML = listItems
    } else {
        listSaved.innerHTML = ""
    }
})

savedBtn.addEventListener("click", function(){
    if(uInput.value){
        push(referenceInDB, { text: uInput.value, type: "text", timestamp: Date.now() })
        uInput.value = ""
    } 
})

linkBtn.addEventListener("click", function(){
    if(uInput.value){
        push(referenceInDB, { text: uInput.value, type: "link", timestamp: Date.now() })
        uInput.value = ""
    } 
})

deleteBtn.addEventListener("click", function(){
    uInput.value = ""
    listSaved.innerHTML = ""
    remove(referenceInDB)
})