// Eventlister för elementet med id "box" som fungerar när musen rör sig över den
document.getElementById("box").addEventListener("mouseover", function() {
    this.classList.add("highlight");
});

// Eventlister för elementet med id "box" som fungerar när musen rör sig bort från den
document.getElementById("box").addEventListener("mouseout", function() {
    this.classList.remove("highlight");
});

// Eventlister för elementet med id "toggleClass" som fungerar när musen klickar på den
document.getElementById("toggleClass").addEventListener("click", function() {
    let box = document.getElementById("box"); // Hämtar elementet med id "box"
    box.classList.toggle("highlight"); 
});