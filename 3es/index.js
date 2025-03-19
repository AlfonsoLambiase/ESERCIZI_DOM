
function addProduct(event) {
    event.preventDefault();                                     // Previene il Deafult e si lascia controllare

    const task = document.getElementById("task");               // Otteniamo il valore dell'input
    const taskValue = task.value;                               // Otteniamo il valore dell'input

    
    if (taskValue !== "") {                                     // Verifica che l'input non sia vuoto
        const newElement = document.createElement("li");        // Creiamo un nuovo elemento <li>

        const textNode = document.createTextNode(taskValue);    // Creiamo un testo con il valore della task
        newElement.appendChild(textNode);                       // Aggiungiamo il testo all'elemento <li>

        const ul = document.querySelector("ul");                // Selezioniamo la lista <ul>
        ul.appendChild(newElement);                             // Aggiungiamo il nuovo <li> alla lista

        
        const checkbox = document.createElement("input");      // Creiamo una checkbox e impostiamo il tipo
        checkbox.type = "checkbox"; 

        newElement.appendChild(checkbox);                      // Aggiungiamo la checkbox all'elemento <li>

        task.value = "";                                       // Puliamo il campo di input per il prossimo task
    } else {
        alert("Inserisci un nome valido");                     // Se l'input è vuoto, mostriamo un avviso
    }
}









