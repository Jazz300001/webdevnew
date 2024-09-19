/** * journal.js */ 
document.querySelector("button").addEventListener("click", addJournalEntry); 
/** * TODO * adds a journal entry to the journal page */ 
const myDiv = document.querySelector("#entries");
myDiv.addEventListener('click', addJournalEntry);
const date = document.getElementById('date');
journaldate=date.value;
const entry = document.getElementById('entry');
journalentry=entry.value;
function addJournalEntry(event) {
    const myDiv = event.currentTarget;
    let article = document.createElement('article');
    article.id = journaldate;
    article.textContent=journalentry;
    myDiv.appendChild(article);

}