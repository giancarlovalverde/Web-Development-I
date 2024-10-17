// Hämtar element från HTML
const rådKnapp = document.getElementById('rådKnapp');
const läggTillKnapp = document.getElementById('läggTillRåd');
const startaKnapp = document.getElementById('startaAutomatisk');
const stoppaKnapp = document.getElementById('stoppaAutomatisk');
const öppnaFönsterKnapp = document.getElementById('öppnaFönster');
const rådDiv = document.getElementById('råd');

// Array med olika råd
let råd = [
  "Drick mer vatten",
  "Försök något nytt idag",
  "Le alltid!",
  "Var tacksam för det du har",
  "Tänk positivt",
  "Sätt upp nya mål",
];

let intervalId;

// Visar slumpmässigt råd
function geRåd() {
  if (confirm("Vill du ha ett nytt råd?")) {
    const slumpmässigtTal = Math.floor(Math.random() * råd.length);
    rådDiv.textContent = råd[slumpmässigtTal];
  }else {
    rådDiv.textContent = "Inget nytt råd :(, då! Klicka på 'Stoppa automatisk råd' för att sluta.";
  }
}

// För att lägga till eget råd som användaren själv skriver in
function läggTillEgetRåd() {
  const nyttRåd = prompt("Skriv in ditt eget råd:");
  if (nyttRåd) {
    råd.push(nyttRåd);
    geRåd();
  }
}

// Visar ett nytt råd varje 5 sekunder 
function startaAutomatiskByte() {
  alert("Du kommer få olika råd varje 5 sekunder!");
  intervalId = setInterval(geRåd, 5000);
}

// Stoppa automatiskt byte av råd
function stoppaAutomatiskByte() {
  clearInterval(intervalId);
  alert("Automatisk rådgivning har stoppats.");
}

// Öppnar ett nytt fönster med en video som är 30 sekunder
function öppnaOchStängFönster() {
  let nyttFönster = open("", "newWindow", "width=800,height=600");
  if (nyttFönster) {
    nyttFönster.document.write(`
      <h1>Njut av havet!</h1>
      <p>Videon varar i 30 sekunder.</p>
      <video id="havVideo" src="../media/hav.mp4" controls autoplay width="100%"></video>
    `);

    setTimeout(() => {
      if (nyttFönster && !nyttFönster.closed) {
        nyttFönster.close();
        alert("Bildfönstret har stängts.");
      }
    }, 30000); 
  }
}

// Eventlisteners för knapparna 
rådKnapp.addEventListener('click', geRåd);
läggTillKnapp.addEventListener('click', läggTillEgetRåd);
startaKnapp.addEventListener('click', startaAutomatiskByte);
stoppaKnapp.addEventListener('click', stoppaAutomatiskByte);
öppnaFönsterKnapp.addEventListener('click', öppnaOchStängFönster);