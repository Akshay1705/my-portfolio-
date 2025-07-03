var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-content");
        function opentab(tabname){
            for(var tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(var tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }
// -------------sidemanu----------
var sidemau=document.getElementById("sidemanu");

function openmenu(){
    sidemau.style.right="0";
}
function closemenu(){
    sidemau.style.right="-200px";
}