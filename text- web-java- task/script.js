//showing menu items toggle code: referenced: https://www.dofactory.com/html/table/hidden#:~:text=You%20can%20specify%20either%20'hidden,attribute%20makes%20it%20re%2Dappear

        //button onclick="toggle(this);">Hide table</button>  button calls js that toggles the attribute
let showA = button => {
    let element = document.getElementById("at"); //'at'> appetisers table
    //gets the attribute table
    let hidden = element.getAttribute("hidden");

    if (hidden) {
        //if hidden is true then
        element.removeAttribute("hidden");
        //attribute removed to show table
    } else {
        element.setAttribute("hidden", "hidden");
        //if hidden is removed then attribute set to hidden
    }
}

let showM = button => {
    let element = document.getElementById("mt"); //'at'> appetisers table
    //gets the attribute table
    let hidden = element.getAttribute("hidden");

    if (hidden) {
        //if hidden is true then
        element.removeAttribute("hidden");
        //attribute removed to show table
    } else {
        element.setAttribute("hidden", "hidden");
        //if hidden is removed then attribute set to hidden
    }
}


let showD = button => {
    let element = document.getElementById("dt");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
        //document.getElementsByClassName("options").style.backgroundColor = "red"; --change button background colour
        
    }
}


let showB = button => {
    let element = document.getElementById("bt");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
    }
}

//edit functions to fit requirements                
        function bOne() {
            alert("field missing/left empty");
        }
        
        function bTwo() { 
            document.getElementById("body").style.backgroundColor = "#4D3A4D";
            document.getElementById("nav").style.backgroundColor = "#3c303c";
            
            const textCol = document.querySelectorAll("h1, p, li, button");
            textCol.forEach((element) => {
               element.style.color= "#E1A4D6";
            });
            const btnCol = document.querySelectorAll("button");
            btnCol.forEach((element) => {
                element.style.backgroundColor = "#3e3769";
            });
        }       

        function bFour() {
            var textBox = document.getElementById("textbox");
            textBox.style.fontSize="30pt";
            textBox.style.fontFamily="Comic Sand MS";
            textBox.style.color="red";
        }
        
