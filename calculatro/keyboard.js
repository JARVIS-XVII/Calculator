document.addEventListener("DOMContentLoaded", () =>{
    const display = document.querySelector("input[name = 'display']");

    document.addEventListener("keydown", (event) =>{
        const key = event.key;

        if(/[\d+\-*/.]/.test(key)){
            display.value += key;
        }

        if (key ==="Enter" || key ==="="){
            try{
                display.value = eval(display.value) ||"";
            }
            catch{
                display.value = "Error";
            }
        }

        if (key==="Backspace"){
            display.value = display.value.slice(0, -1);
        }

        if(key === "Escape"){
            display.value="";
        }
    });
});