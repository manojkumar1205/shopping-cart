let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');

var wrapper = document.getElementsByClassName('wrapper');
var radio = document.getElementsByClassName('radio');
for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {



        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            wrapper[i].style.border = "1px solid #007f61";
            wrapper[i].style.background = "rgba(244, 251, 249, 1)"
            radio[i].checked = true;
        }
        else {
            contentDiv[i].style.height = "0px";
            wrapper[i].style.background = "#fff"
            wrapper[i].style.border = "1px solid #c8c8c8";


        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                console.log(j, "J");
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                radio[j].checked = false;
                wrapper[j].style.background = "#fff"
                wrapper[j].style.border = "1px solid #c8c8c8";
            }
        }
    });
}