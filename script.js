// Affichage de la date
const dateElement = document.getElementById('date-display');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

if(dateElement) {
    dateElement.innerHTML = today.toLocaleDateString("fr-FR", options);
}