let count = document.getElementById("count")
let countNmbr = 0
function record (){
    countNmbr = countNmbr + 1
    count.innerText = countNmbr
}
function save (){
    let savedStr = countNmbr + " , "
    saved.innerText += savedStr
    countNmbr = 0
    count.innerText = countNmbr
}
function reset (){
    countNmbr = 0
    count.innerText = countNmbr
    saved.innerText = ""

}