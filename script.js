// Dati delle attrazioni del Vietnam
const attractions = [
    // Nord (Hanoi & dintorni)
    {
        id: 1,
        name: "Quartiere Vecchio (Old Quarter)",
        region: "nord",
        description: "Il cuore storico di Hanoi, famoso per le sue strade strette, l'architettura coloniale e l'intensa vita di strada.",
        image: "images/quartiere_vecchio.jpg"
    },
    {
        id: 2,
        name: "Lago Hoan Kiem",
        region: "nord",
        description: "Un lago pittoresco nel centro di Hanoi, con il Tempio della Montagna di Giada e la Torre della Tartaruga.",
        image: "images/lago_hoan_kiem.jpg"
    },
    {
        id: 3,
        name: "Tempio della Letteratura",
        region: "nord",
        description: "La prima università nazionale del Vietnam, dedicata a Confucio, con giardini sereni e architettura tradizionale.",
        image: "images/tempio_letteratura.jpg"
    },
    {
        id: 4,
        name: "Mausoleo di Ho Chi Minh",
        region: "nord",
        description: "Il luogo di riposo del leader rivoluzionario vietnamita Ho Chi Minh, un imponente monumento.",
        image: "images/mausoleo_ho_chi_minh.jpg"
    },
    {
        id: 5,
        name: "Pagoda a Pilastro Unico",
        region: "nord",
        description: "Un'iconica pagoda buddista costruita su un unico pilastro di pietra, che ricorda un fiore di loto.",
        image: "images/pagoda_pilastro.jpg"
    },
    {
        id: 6,
        name: "Cittadella Imperiale di Thăng Long",
        region: "nord",
        description: "Un sito del patrimonio mondiale dell'UNESCO che fu il centro del potere politico per oltre un millennio.",
        image: "images/cittadella_thang_long.jpg"
    },
    {
        id: 7,
        name: "Baia di Halong",
        region: "nord",
        description: "Un paesaggio mozzafiato di migliaia di isole calcaree e isolotti carsici che emergono dalle acque color smeraldo.",
        image: "images/baia_halong.jpg"
    },
    {
        id: 8,
        name: "Ninh Binh (Tam Coc)",
        region: "nord",
        description: "Conosciuta come la Baia di Halong terrestre, con formazioni carsiche e risaie attraversate da fiumi.",
        image: "images/ninh_binh.jpg"
    },
    {
        id: 9,
        name: "Sapa",
        region: "nord",
        description: "Una città di montagna nel nord del Vietnam, famosa per i suoi paesaggi terrazzati e le diverse tribù di montagna.",
        image: "images/sapa.jpg"
    },
    {
        id: 10,
        name: "Cascate di Ban Gioc",
        region: "nord",
        description: "Spettacolari cascate al confine tra Vietnam e Cina, tra le più grandi e belle del paese.",
        image: "images/cascate_ban_gioc.jpg"
    },
    {
        id: 11,
        name: "Parco Nazionale di Ba Vi",
        region: "nord",
        description: "Un parco nazionale con tre cime montuose, foreste pluviali, templi antichi e una ricca biodiversità.",
        image: "images/parco_ba_vi.jpg"
    },
    {
        id: 12,
        name: "Villaggio di Duong Lam",
        region: "nord",
        description: "Un antico villaggio vietnamita ben conservato, con case tradizionali in laterizio e un forte senso di storia.",
        image: "images/villaggio_duong_lam.jpg"
    },
    {
        id: 13,
        name: "Pagoda dei Profumi",
        region: "nord",
        description: "Un vasto complesso di templi buddisti e santuari costruiti in grotte e montagne calcaree, raggiungibile in barca.",
        image: "images/pagoda_profumi.jpg"
    },
    {
        id: 14,
        name: "Mai Chau",
        region: "nord",
        description: "Una valle rurale e tranquilla, casa delle tribù Thai, con paesaggi lussureggianti e risaie.",
        image: "images/mai_chau.jpg"
    },
    {
        id: 15,
        name: "Dong Van Karst Plateau",
        region: "nord",
        description: "Un geopark UNESCO con paesaggi carsici mozzafiato, valli profonde e villaggi etnici.",
        image: "images/dong_van.jpg"
    },
    
    // Sud (Ho Chi Minh & dintorni)
    {
        id: 16,
        name: "Tunnel di Cu Chi",
        region: "sud",
        description: "Una vasta rete di tunnel sotterranei utilizzati dai Viet Cong durante la guerra del Vietnam.",
        image: "images/tunnel_cu_chi.jpg"
    },
    {
        id: 17,
        name: "Museo dei Residuati Bellici",
        region: "sud",
        description: "Un museo che espone gli orrori della guerra del Vietnam, con reperti e fotografie.",
        image: "images/museo_guerra.jpg"
    },
    {
        id: 18,
        name: "Mercato di Ben Thanh",
        region: "sud",
        description: "Un vivace mercato coperto nel centro di Ho Chi Minh City, che offre cibo, vestiti e souvenir.",
        image: "images/mercato_ben_thanh.jpg"
    },
    {
        id: 19,
        name: "Ufficio Postale Centrale",
        region: "sud",
        description: "Un edificio coloniale francese con un design impressionante, ancora in funzione come ufficio postale.",
        image: "images/ufficio_postale.jpg"
    },
    {
        id: 20,
        name: "Cattedrale di Notre Dame",
        region: "sud",
        description: "Una cattedrale cattolica romana costruita dai francesi, con mattoni importati da Marsiglia.",
        image: "images/cattedrale_notre_dame.jpg"
    },
    {
        id: 21,
        name: "Palazzo della Riunificazione",
        region: "sud",
        description: "Un edificio storico che ha giocato un ruolo cruciale nella storia del Vietnam, ex palazzo presidenziale.",
        image: "images/palazzo_riunificazione.jpg"
    },
    {
        id: 22,
        name: "Torre Bitexco Financial",
        region: "sud",
        description: "Un grattacielo iconico con una piattaforma di osservazione che offre viste panoramiche sulla città.",
        image: "images/torre_bitexco.jpg"
    },
    {
        id: 23,
        name: "Pagoda dell'Imperatore di Giada",
        region: "sud",
        description: "Una delle pagode più atmosferiche di Ho Chi Minh City, con sculture elaborate e un'atmosfera mistica.",
        image: "images/pagoda_giada.jpg"
    },
    {
        id: 24,
        name: "Delta del Mekong",
        region: "sud",
        description: "Una vasta regione nel sud-ovest del Vietnam, famosa per i suoi fiumi, risaie e mercati galleggianti.",
        image: "images/delta_mekong.jpg"
    },
    {
        id: 25,
        name: "Mercato Galleggiante di Cai Rang",
        region: "sud",
        description: "Il più grande e famoso mercato galleggiante del Delta del Mekong, dove i commercianti vendono dalle loro barche.",
        image: "images/mercato_cai_rang.jpg"
    },
    {
        id: 26,
        name: "Isola di Phu Quoc",
        region: "sud",
        description: "La più grande isola del Vietnam, famosa per le sue spiagge di sabbia bianca e le acque cristalline.",
        image: "images/phu_quoc.jpg"
    },
    {
        id: 27,
        name: "Dalat",
        region: "sud",
        description: "Una città di montagna nel sud del Vietnam, conosciuta come la 'Città dell'eterna primavera'.",
        image: "images/dalat.jpg"
    },
    {
        id: 28,
        name: "Nha Trang",
        region: "sud",
        description: "Una città costiera famosa per le sue spiagge tropicali, le attività acquatiche e la vita notturna.",
        image: "images/nha_trang.jpg"
    },
    {
        id: 29,
        name: "Mui Ne",
        region: "sud",
        description: "Una località balneare famosa per le sue dune di sabbia rosse e bianche e gli sport acquatici.",
        image: "images/mui_ne.jpg"
    },
    {
        id: 30,
        name: "Can Tho",
        region: "sud",
        description: "La capitale del Delta del Mekong, famosa per i suoi mercati galleggianti e la cultura del fiume.",
        image: "images/can_tho.jpg"
    }
];

// Stato dell'applicazione
let currentQuestionIndex = 0;
let playerName = '';
let selectedAttractions = {
    nord: [],
    sud: []
};
let shuffledAttractions = [];

// Elementi DOM
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const playerNameInput = document.getElementById('player-name');
const startQuizBtn = document.getElementById('start-quiz');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const attractionImage = document.getElementById('attraction-image');
const attractionName = document.getElementById('attraction-name');
const attractionDescription = document.getElementById('attraction-description');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const winnerTitle = document.getElementById('winner-title');
const northScore = document.getElementById('north-score');
const southScore = document.getElementById('south-score');
const northAttractions = document.getElementById('north-attractions');
const southAttractions = document.getElementById('south-attractions');
const btnRestart = document.getElementById('btn-restart');
const btnCopy = document.getElementById('btn-copy');
const btnDownload = document.getElementById('btn-download');
const savedResults = document.getElementById('saved-results');
const savedList = document.getElementById('saved-list');

// Funzione per mescolare array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Funzione per mostrare una schermata
function showScreen(screenToShow) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    screenToShow.classList.add('active');
}

// Funzione per iniziare il quiz
function startQuiz() {
    playerName = playerNameInput.value.trim();
    currentQuestionIndex = 0;
    selectedAttractions = { nord: [], sud: [] };
    shuffledAttractions = shuffleArray(attractions);
    
    totalQuestionsSpan.textContent = attractions.length;
    showScreen(quizScreen);
    showCurrentQuestion();
}

// Funzione per mostrare la domanda corrente
function showCurrentQuestion() {
    const attraction = shuffledAttractions[currentQuestionIndex];
    
    // Aggiorna progress bar
    const progress = ((currentQuestionIndex + 1) / attractions.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Aggiorna contenuto
    attractionImage.innerHTML = `<img src="${attraction.image}" alt="${attraction.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" onerror="this.style.display='none'">`;
    attractionName.textContent = attraction.name;
    attractionDescription.textContent = attraction.description;
}

// Funzione per gestire la risposta
function handleAnswer(liked) {
    const attraction = shuffledAttractions[currentQuestionIndex];
    
    if (liked) {
        selectedAttractions[attraction.region].push(attraction.name);
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < attractions.length) {
        showCurrentQuestion();
    } else {
        showResults();
    }
}

// Funzione per mostrare i risultati
function showResults() {
    const northCount = selectedAttractions.nord.length;
    const southCount = selectedAttractions.sud.length;
    
    // Aggiorna punteggi
    northScore.textContent = northCount;
    southScore.textContent = southCount;
    
    // Determina il vincitore
    let winnerMessage;
    if (northCount > southCount) {
        winnerMessage = "🏆 Vince il NORD (Hanoi & dintorni)!";
    } else if (southCount > northCount) {
        winnerMessage = "🏆 Vince il SUD (Ho Chi Minh & dintorni)!";
    } else {
        winnerMessage = "🤝 Pareggio! Potete mixare Nord e Sud.";
    }
    
    winnerTitle.textContent = winnerMessage;
    
    // Aggiorna liste attrazioni
    northAttractions.innerHTML = selectedAttractions.nord.length > 0 
        ? selectedAttractions.nord.map(name => `<li>${name}</li>`).join('')
        : '<li><em>Nessuna attrazione selezionata</em></li>';
    
    southAttractions.innerHTML = selectedAttractions.sud.length > 0 
        ? selectedAttractions.sud.map(name => `<li>${name}</li>`).join('')
        : '<li><em>Nessuna attrazione selezionata</em></li>';
    
    // Salva risultati se c'è un nome giocatore
    if (playerName) {
        saveResults();
    }
    
    showScreen(resultsScreen);
}

// Funzione per salvare i risultati
function saveResults() {
    const results = {
        playerName,
        date: new Date().toLocaleDateString('it-IT'),
        northCount: selectedAttractions.nord.length,
        southCount: selectedAttractions.sud.length,
        northAttractions: selectedAttractions.nord,
        southAttractions: selectedAttractions.sud
    };
    
    let savedData = JSON.parse(localStorage.getItem('vietnamQuizResults') || '[]');
    
    // Rimuovi risultati precedenti dello stesso giocatore
    savedData = savedData.filter(result => result.playerName !== playerName);
    
    // Aggiungi nuovo risultato
    savedData.unshift(results);
    
    // Mantieni solo gli ultimi 10 risultati
    savedData = savedData.slice(0, 10);
    
    localStorage.setItem('vietnamQuizResults', JSON.stringify(savedData));
    loadSavedResults();
}

// Funzione per caricare i risultati salvati
function loadSavedResults() {
    const savedData = JSON.parse(localStorage.getItem('vietnamQuizResults') || '[]');
    
    if (savedData.length === 0) {
        savedResults.style.display = 'none';
        return;
    }
    
    savedResults.style.display = 'block';
    savedList.innerHTML = savedData.map(result => `
        <div class="saved-item" onclick="loadSavedResult('${result.playerName}')">
            <div class="saved-item-name">${result.playerName}</div>
            <div class="saved-item-score">
                ${result.date} - Nord: ${result.northCount}, Sud: ${result.southCount}
            </div>
        </div>
    `).join('');
}

// Funzione per caricare un risultato salvato
function loadSavedResult(playerName) {
    const savedData = JSON.parse(localStorage.getItem('vietnamQuizResults') || '[]');
    const result = savedData.find(r => r.playerName === playerName);
    
    if (result) {
        selectedAttractions.nord = result.northAttractions;
        selectedAttractions.sud = result.southAttractions;
        showResults();
    }
}

// Funzione per copiare i risultati
function copyResults() {
    const northCount = selectedAttractions.nord.length;
    const southCount = selectedAttractions.sud.length;
    
    let winnerText;
    if (northCount > southCount) {
        winnerText = "Vince il NORD (Hanoi & dintorni)!";
    } else if (southCount > northCount) {
        winnerText = "Vince il SUD (Ho Chi Minh & dintorni)!";
    } else {
        winnerText = "Pareggio! Potete mixare Nord e Sud.";
    }
    
    const resultsText = `
Quiz Vietnam: Nord vs Sud
${playerName ? `Giocatore: ${playerName}` : ''}
Data: ${new Date().toLocaleDateString('it-IT')}

${winnerText}

Punteggio:
Nord: ${northCount}
Sud: ${southCount}

Attrazioni Nord scelte:
${selectedAttractions.nord.length > 0 ? selectedAttractions.nord.map(name => `• ${name}`).join('\n') : '• Nessuna'}

Attrazioni Sud scelte:
${selectedAttractions.sud.length > 0 ? selectedAttractions.sud.map(name => `• ${name}`).join('\n') : '• Nessuna'}
    `.trim();
    
    navigator.clipboard.writeText(resultsText).then(() => {
        btnCopy.textContent = '✅ Copiato!';
        setTimeout(() => {
            btnCopy.textContent = '📋 Copia Risultati';
        }, 2000);
    }).catch(() => {
        alert('Impossibile copiare negli appunti');
    });
}

// Funzione per scaricare i risultati
function downloadResults() {
    const northCount = selectedAttractions.nord.length;
    const southCount = selectedAttractions.sud.length;
    
    let winnerText;
    if (northCount > southCount) {
        winnerText = "Vince il NORD (Hanoi & dintorni)!";
    } else if (southCount > northCount) {
        winnerText = "Vince il SUD (Ho Chi Minh & dintorni)!";
    } else {
        winnerText = "Pareggio! Potete mixare Nord e Sud.";
    }
    
    const resultsText = `Quiz Vietnam: Nord vs Sud
${playerName ? `Giocatore: ${playerName}` : ''}
Data: ${new Date().toLocaleDateString('it-IT')}

${winnerText}

Punteggio:
Nord: ${northCount}
Sud: ${southCount}

Attrazioni Nord scelte:
${selectedAttractions.nord.length > 0 ? selectedAttractions.nord.map(name => `• ${name}`).join('\n') : '• Nessuna'}

Attrazioni Sud scelte:
${selectedAttractions.sud.length > 0 ? selectedAttractions.sud.map(name => `• ${name}`).join('\n') : '• Nessuna'}`;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-vietnam-${playerName || 'risultati'}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Funzione per ricominciare
function restart() {
    showScreen(welcomeScreen);
    playerNameInput.value = playerName; // Mantieni il nome precedente
}

// Event listeners
startQuizBtn.addEventListener('click', startQuiz);
btnYes.addEventListener('click', () => handleAnswer(true));
btnNo.addEventListener('click', () => handleAnswer(false));
btnRestart.addEventListener('click', restart);
btnCopy.addEventListener('click', copyResults);
btnDownload.addEventListener('click', downloadResults);

// Carica risultati salvati all'avvio
document.addEventListener('DOMContentLoaded', () => {
    loadSavedResults();
});

// Gestione touch per migliorare l'esperienza mobile
document.addEventListener('touchstart', function() {}, { passive: true });

// Prevenzione zoom accidentale su iOS
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

// Gestione orientamento schermo
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

