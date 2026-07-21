"use strict";
const userinput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const list = document.getElementById("list");
let checkedAmount = document.getElementById("checkedAmount");
let uncheckedAmount = document.getElementById("uncheckedAmount");
let savedValue = document.getElementById("savedValue");
let userPresses = [];
let savedValueAmount = 0;
addBtn.addEventListener("click", function () {
    if (userinput.value) {
        userPresses.push("a");
        list.insertAdjacentHTML("beforeend", `<div class="container" id="listItem${userPresses.length}">
                                        <input type="checkbox" class="checkbox" id="checkbox${userPresses.length}">
                                        <button class="deleteTask" id="deleteTask${userPresses.length}">Delete Task</button>
                                        <li>${userinput.value}</li></div>`);
        userinput.value = "";
        savedValueAmount = document.querySelectorAll(`.container input`).length;
        savedValue.innerText = savedValueAmount.toString();
        for (let i = 0; i < 100; i++) {
            const checkbox = document.getElementById(`checkbox${i}`);
            if (checkbox) {
                checkbox.addEventListener("change", function () {
                    const checked = document.querySelectorAll(`.container input:checked`).length;
                    const unchecked = document.querySelectorAll(`.container input`).length - checked;
                    uncheckedAmount.innerText = unchecked.toString();
                    checkedAmount.innerText = checked.toString();
                    savedValueAmount = document.querySelectorAll(`.container input`).length;
                    savedValue.innerText = savedValueAmount.toString();
                });
            }
        }
        for (let i = 0; i < 100; i++) {
            const deleteBtn = document.getElementById(`deleteTask${i}`);
            if (deleteBtn) {
                deleteBtn.addEventListener("click", function () {
                    var _a;
                    (_a = document.getElementById(`listItem${i}`)) === null || _a === void 0 ? void 0 : _a.remove();
                    const checked = document.querySelectorAll(`.container input:checked`).length;
                    const unchecked = document.querySelectorAll(`.container input`).length - checked;
                    uncheckedAmount.innerText = unchecked.toString();
                    checkedAmount.innerText = checked.toString();
                    savedValueAmount = document.querySelectorAll(`.container input`).length;
                    savedValue.innerText = savedValueAmount.toString();
                });
            }
        }
        const checked = document.querySelectorAll(`.container input:checked`).length;
        const unchecked = document.querySelectorAll(`.container input`).length - checked;
        uncheckedAmount.innerText = unchecked.toString();
        checkedAmount.innerText = checked.toString();
    }
});
deleteAllBtn.addEventListener("click", function () {
    list.innerHTML = "";
    userinput.value = "";
    userPresses = [];
    savedValue.innerText = "";
    savedValueAmount = 0;
    const checked = document.querySelectorAll('#checkboxes input:checked').length;
    const unchecked = userPresses.length - checked;
    uncheckedAmount.innerText = unchecked.toString();
    checkedAmount.innerText = checked.toString();
});
