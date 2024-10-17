/** * journal.js */ 
let entnum=0;
document.querySelector("button").addEventListener("click", addJournalEntry); 
/** * TODO * adds a journal entry to the journal page */ 
myDiv.addEventListener('click', addJournalEntry);
function addJournalEntry(event) {
    if(entnum === 5){

    }
    else{
    myDiv = document.getElementById('entries')
    const date = document.getElementById('date');
    journaldate=date.value;
    const entry = document.getElementById('entry');
    journalentry=entry.value;
    let article = document.createElement('article');
    article.textContent = (` "date: "${journaldate}, "entry: "${journalentry}`);
    article.classList.add('entry');
    myDiv.appendChild(article);
    entnum++;
    journalentry.value="";
    journaldate.value="";

}

}