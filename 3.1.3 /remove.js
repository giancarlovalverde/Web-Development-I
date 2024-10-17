// För att visa en varning och logga att varingen har visats
function showAlert() {
    alert('You did it!');
    logEvent('Alert shown');
}

// Funktion för att logga händelser med tid
function logEvent(message) {
    const log = document.getElementById('log');
    const timestamp = new Date().toLocaleTimeString(); //hämtar tiden
    log.innerHTML += `<p>${timestamp}: ${message}</p>`;
}

// Listener för att visa varning med id "alertBtn" vid klickning 
document.getElementById("alertBtn").addEventListener("click", showAlert);
logEvent('Show Alert event listener added'); 

// Listner för att ta bort varning med id "alertBtn" vid klickning
document.getElementById("removeEventBtn").addEventListener("click", function() {
    document.getElementById("alertBtn").removeEventListener("click", showAlert);
    document.getElementById("removeEventBtn").textContent = 'Event Removed';
    logEvent('Alert event listener removed');
});

// För att lägga tillbaka eventlistener på alertBtn med id "addEventBtn" vid klickning
document.getElementById("addEventBtn").addEventListener("click", function() {
    document.getElementById("alertBtn").addEventListener("click", showAlert);
    document.getElementById("removeEventBtn").textContent = 'Remove Event';
    logEvent('Alert event listener re-added');
});