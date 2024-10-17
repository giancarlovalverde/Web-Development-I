// Array med olika årstider och månader
const säsonger = [
    {period: "Vår", ledtråd: ["blommor", "fåglar", "regn", "grönska", "påsk"], collectedItems:[], date: "Mars - Maj"},
    {period: "Sommar", ledtråd: ["sol", "bad", "glass", "semester", "strand", "resa"], collectedItems:[], date: "Juni - Augusti"},
    {period: "Höst", ledtråd: ["löv", "vind", "skola", "svampplockning"], collectedItems:[], date: "September - November"},
    {period: "Vinter", ledtråd: ["snö", "jul", "kallt", "skidor", "pepparkakor"], collectedItems:[], date: "December - Februari"}
];

// För att hålla koll på poäng och antal försök
let score = 0;
let attemps = 0;

// Funktion som startar spelet
function startaSpel() {
    // Den tar fram en slumpmässig årstid
    const säsongIndex = Math.floor(Math.random() * säsonger.length); 
    const valtSäsong = säsonger[säsongIndex];

    const ledtrådIndex = Math.floor(Math.random() * valtSäsong.ledtråd.length);
    const valdLedtråd = valtSäsong.ledtråd[ledtrådIndex];
    
    let userGuess = prompt("Vilken säsong tänker jag på? Här är en ledtråd: " + valdLedtråd);

    // Checkar om användaren gissat rätt
    if (gissning(userGuess, valtSäsong.period)) {
        alert("Rätt! Du fick en poäng");
        score++;
        attemps++;
        spelaIgen();
        
    } else {
        userGuess = prompt("Fel! Försök igen. Här är en ny ledtråd! Denna säsong är mellan " + valtSäsong.date);
        if (gissning(userGuess, valtSäsong.period)) {
            alert("Rätt! Du fick en poäng");
            score++;
            spelaIgen();
        } else {
            alert("Fel! Du får inga poäng :(");
            attemps++;
            spelaIgen();
        }
    }

    document.getElementById('clues').textContent = 'Här är din första ledtråd...';
}

// Funktion som visar dagens datum
function visaDagensDatum() {
    const idag = new Date();
    const datumStr = idag.toLocaleDateString('sv-SE', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    document.getElementById('currentDate').textContent = `Idag är det ${datumStr}`;
}

// Funktion som frågar om man vill spela igen eller avsluta
function spelaIgen() {
    if (confirm("Vill du fortsätta spela?")) {
        startaSpel();
    } else {
        alert("Tack för att du spelade! Du fick " + score + " poäng på " + attemps + " försök");
    }
}

// För att jämföra användarens gissning med den korrekta årstiden
function gissning(userGuess, korrektSäsong) {
    let re = /[^a-zA-ZåäöÅÄÖ]/g; 
    let cleanedKorrektSäsong = korrektSäsong.toLowerCase().replace(re, '');
    let cleanedUserGuess = userGuess.toLowerCase().replace(re, ''); 

    return cleanedKorrektSäsong === cleanedUserGuess;
}

function showScore() {
    alert("Du har " + score + " poäng på " + attemps + " försök");
}

// Eventlistener för att starta spelet
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', startaSpel);
    visaDagensDatum(); 
});

// Startar spelet när sidan laddas
startaSpel(); 