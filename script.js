var ul1 = document.getElementById("list-holder");
var button = document.getElementById("button")
var input = document.getElementById("input");

function inputLength() {
    return input.value.length
}

function deleteButton() {
    var brompton = this.parentNode;
    brompton.remove();
}

function createListItem() {
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    var theList = document.querySelector(".list");
    var theDoneList = document.querySelector(".done");
    delButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    delButton.classList.add("delete-button");
    delButton.addEventListener("click", deleteButton);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(delButton);
    li.addEventListener("click", DoneList);
    if (theList) {
        li.classList.add("list");
        ul1.insertBefore(li, theList);
        input.value = "";
    }
    else {
        li.classList.add("list");
        if (theDoneList) {
            ul1.insertBefore(li, theDoneList);
            input.value = "";
        }
        else {
        ul1.appendChild(li);
        input.value = "";
        }
    }
}

function AddListByClicking() {
    if (inputLength() > 0) {
        createListItem();
    }
}


function AddlistByKeypress(e) {
    if (inputLength() > 0 && e.key === "Enter") {
        createListItem();
    }
}

function DoneList() {
    if (this.classList[0] !== "done") {
        this.classList.add("done");
        this.classList.remove("list");

        newList = ul1.getElementsByClassName("done")[0];
        ul1.appendChild(newList);
        }
}

input.addEventListener("keypress", AddlistByKeypress);
button.addEventListener("click", AddListByClicking);