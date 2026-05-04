/* ========================================
   STRUTTURA DATI DELLA MOSTRA
   ======================================== */

const showData = {
    rinascimento: {
        name: 'Rinascimento',
        artists: [
            {
                name: 'Piero della Francesca',
                works: [
                    { name: 'Pala di Montefeltro', image: "montefeltro.jpg" , desc: 'La Pala di Montefeltro è un capolavoro del Rinascimento italiano, realizzato tra il 1472 e il 1474. Quest\'opera straordinaria combina la prospettiva lineare perfetta con una profonda comprensione della luce naturale. Piero della Francesca utilizza la luce per creare volume e profondità, illuminando i visi dei personaggi con delicatezza e precisione matematica. L\'opera rappresenta la Madonna con il Bambino circondata da santi e dal Duca Federico da Montefeltro in preghiera.' }
                ]
            },
            {
                name: 'Leonardo da Vinci',
                works: [
                    { name: 'Studi preparatori sulla luce', image: "studi-leo.jpg" , desc: 'Leonardo da Vinci ha condotto studi approfonditi sulla natura della luce e delle ombre, sviluppando la tecnica dello sfumato. I suoi disegni preparatori mostrano l\'ossessione per la comprensione scientifica di come la luce interagisce con i volumi. Questi studi hanno rivoluzionato la pittura rinascimentale, permettendo una rappresentazione più naturale e atmosferica della realtà.' },
                    { name: 'La Gioconda', image: "gioconda.jpg" , desc: 'La Gioconda è forse il dipinto più famoso del mondo. Leonardo utilizza magistralmente la luce per modellare il viso di Lisa Gherardini, creando ombre e luci delicate che conferiscono al volto un\'espressione enigmatica e affascinante. La tecnica dello sfumato, l\'assenza di contorni netti, e la sublimazione della luce creano un effetto di mistero e intimità che continua ad affascinare spettatori di tutto il mondo.'}
                ]
            },
            {
                name: 'Antonello da Messina',
                works: [
                    { name: 'San Girolamo nello studio', image: "girolamo.jpg" , desc: 'In questo capolavoro, Antonello da Messina rappresenta San Girolamo intento allo studio nel suo modesto studio. L\'opera è una celebrazione della luce naturale che penetra dalla finestra, illuminando il santo immerso nel lavoro. La prospettiva lineare perfetta, la precisione dei dettagli e l\'uso raffinato della luce creavano uno spazio interno estremamente credibile. L\'opera dimostra come la luce non solo modella le forme, ma anche rivela il carattere spirituale del soggetto.' }
                ]
            }
        ]
    },
    barocco: {
        name: 'Barocco',
        artists: [
            {
                name: 'Caravaggio',
                works: [
                    { name: 'La vocazione di San Matteo', image: "vocazione.jpg" , desc: 'Caravaggio rappresenta il momento in cui Gesù chiama San Matteo a diventare uno dei suoi discepoli. Un raggio di luce tagliente penetra l\'oscurità, guidando lo sguardo dello spettatore dal Signore al pubblicano seduto al tavolo. Il contrasto tra luce e ombra non è solo un effetto visivo, ma un mezzo teologico per rappresentare la grazia divina che irrompe nel buio del peccato.', chiaroscuro: true },
                    { name: 'Il martirio di San Matteo', image: "martirio.jpg" , desc: 'In questo dipinto drammatico, la luce barocca di Caravaggio crea un momento di tensione estrema. Il martirio è rappresentato con una violenza psicologica sottolineata dal contrasto tra le figure illuminate e lo sfondo buio. La luce rivela il volto sofferente del santo e la brutalità dei carnefici, rendendo lo spettatore testimone di questo evento tragico.', chiaroscuro: true },
                    { name: "San Matteo e l'angelo", image: "matteo-angelo.jpg" , desc: 'L\'angelo guida la mano di San Matteo mentre scrive il Vangelo. L\'angelo illuminato contrasta con la figura terrena del santo, rappresentando il dialogo tra il divino e l\'umano. Caravaggio utilizza la luce per creare una gerarchia spirituale, con l\'angelo che emerge dall\'oscurità come manifestazione del sacro.', chiaroscuro: true },
                    { name: 'Cena in Emmaus (1606)', image: "cena-emmaus.jpg" , desc: 'In questo dipinto, Gesù risorto si rivela ai due discepoli durante una cena. La luce barocca di Caravaggio crea un momento di epifania, con le figure illuminate che emergono dall\'oscurità. La composizione triangolare e l\'uso drammatico della luce guidano lo sguardo verso il momento cruciale del riconoscimento divino.', chiaroscuro: true },
                    { name: 'La caduta di San Paolo', image: "conversione-paolo.jpg" , desc: 'Caravaggio rappresenta il momento della conversione di Paolo sulla strada di Damasco. Una luce celeste, quasi soprannaturale, irrompe dall\'alto, illuminando il cavallo e il santo caduto. L\'oscurità circostante amplifica l\'effetto della rivelazione divina, creando un contrasto emotivo che rappresenta la trasformazione spirituale.', chiaroscuro: true },
                    { name: 'La crocifissione di San Pietro', image: "crocifissione.jpg" , desc: 'San Pietro è crocifisso a testa in giù. La luce in questo dipinto crea una drammaticità estrema, illuminando il corpo dello santo e i carnefici mentre compiono l\'atto crudele. L\'assenza di retorica religiosa tradizionale, sottolineata dal contrasto di luce e ombra, rende la scena brutale e immediata.', chiaroscuro: true, },
                    { name: 'Le sette opere di misericordia', image: "sette-opere.jpg" , desc: 'In questa composizione complessa, Caravaggio rappresenta sette atti di carità cristiana in un\'unica scena. La luce è il elemento unificante che lega tutte le figure, creando una struttura narrativa che celebra la compassione umana. La Madonna e il Bambino osservano dall\'alto gli atti di misericordia illuminati dalla luce divina.', chiaroscuro: true },
                    { name: 'La morte della vergine',  image: "morte.jpg" , desc: 'La Vergine giace morta circondata dagli apostoli in preghiera. Caravaggio rifiuta l\'iconografia tradizionale, rappresentando una figura umana colpita dalla morte. La luce fredda che illumina il corpo della Vergine contrasta con l\'oscurità attorno, creando una composizione sommamente drammatica che riflette il dolore e la compunzione dei presenti.', chiaroscuro: true },
                    { name: 'La risurrezione di Lazzaro', image: "lazzaro.jpg" , desc: 'Caravaggio dipinge il momento in cui Lazzaro emerge dal sepolcro dopo quattro giorni di morte. La luce drammatica illumina la figura pallida di Lazzaro mentre è sollevato dalla tomba, mentre Gesù, circondato dai discepoli, osserva questo miracolo. La luce barocca enfatizza il mistero della resurrezione.', chiaroscuro: true },
                    { name: 'L\'adorazione dei pastori', image: "pastori.jpg" , desc: 'Caravaggio dipinge i pastori che adorano il Bambino Gesù in una stalla buia. La luce sofisticata del dipinto crea un\'atmosfera intima e devota, illuminando il volto del Cristo bambino come fonte di luce divina. La semplicità della scena e l\'uso drammatico della luce enfatizzano l\'umiltà della Natività.', chiaroscuro: true }
                ]
            },
            {
                name: 'Gerard van Honthorst',
                works: [
                    { name: 'Adorazione del Bambino', image: "bambino.jpg" , desc: 'Gerard van Honthorst rappresenta la scena dell\'Adorazione del Bambino con una luce notturna tipica del suo stile. La luce della candela illumina delicatamente il volto del Bambino Gesù e della Vergine Maria, creando un\'atmosfera intima e devota. Questa opera dimostra come Honthorst utilizzasse la luce artificiale per creare effetti drammatici e atmosferici.', chiaroscuro: true },
                    { name: 'Il sensale', image: "sensale.jpg" , desc: 'In questo dipinto, Honthorst ritrae un sensale ebreo mentre conta monete alla luce di una candela. La luce calda illumina il volto concentrato del personaggio e le monete d\'oro, creando un contrasto con lo sfondo buio. L\'opera è un esempio del realismo olandese e dell\'uso della luce per rivelare l\'espressione umana.', chiaroscuro: true },
                    { name: 'Cristo davanti a Caifa', image: "caifa.jpg" , desc: 'Honthorst dipinge il momento drammatico dell\'interrogatorio di Gesù davanti al sommo sacerdote Caifa. La luce di una lanterna illumina il volto sofferente di Cristo, mentre le figure circostanti emergono dall\'oscurità. Questa opera utilizza il chiaroscuro per enfatizzare la tensione emotiva e spirituale della scena.', chiaroscuro: true },
                    { name: 'I cavadenti', image: "cavadenti.jpg" ,desc: 'Questo dipinto rappresenta una scena quotidiana di un dentista al lavoro, illuminata da una luce artificiale. Honthorst cattura l\'espressione di dolore del paziente e la concentrazione del dentista, utilizzando la luce per creare un\'atmosfera realistica e leggermente grottesca. L\'opera è un esempio del genere pittorico olandese che raffigurava scene di vita quotidiana.', chiaroscuro: true },
                    { name: 'Cena con suonatore di liuto', image: "cena-liuto.jpg" , desc: 'Honthorst ritrae un gruppo di persone riunite intorno a una cena, accompagnate da un suonatore di liuto. La luce morbida illumina i volti e gli strumenti musicali, creando un\'atmosfera conviviale e intima. Questa opera dimostra la capacità di Honthorst di utilizzare la luce per creare armonia e calore umano.', chiaroscuro: true },
                    { name: 'Infanzia di Cristo', image: "infanzia.jpg" , desc: 'In questa rappresentazione dell\'Infanzia di Cristo, Honthorst utilizza una luce notturna per creare un\'atmosfera mistica. La luce della candela illumina il volto del Bambino Gesù e della Vergine Maria, circondati da angeli e pastori. L\'opera combina elementi religiosi con l\'uso drammatico della luce tipico del Barocco olandese.', chiaroscuro: true }
                ]
            },
            {
                name: 'Rembrandt',
                works: [
                    { name: 'La ronda di notte', image: "bastaronda.jpg" , desc: 'Un capolavoro del Barocco olandese. Rembrandt rappresenta una milizia di Amsterdam che si prepara a una pattuglia notturna. La luce drammatica illumina il capitano e la tamburo, mentre le altre figure emergono gradualmente dall\'oscurità. L\'opera rivoluziona la composizione di gruppo tradizionale attraverso l\'uso audace della luce barocca.', chiaroscuro: true },
                    { name: 'Giuditta al banchetto di Oloferne', image: "giuditta.jpg" , desc: 'Rembrandt dipinge il momento prima che Giuditta decapiti il generale assiro Oloferne. La luce della torcia illumina i volti dei due protagonisti, creando una tensione psicologica palpabile. La sensualità della scena è temperata dalla gravità morale del momento imminente.', chiaroscuro: true },
                    { name: 'Geremia lamenta la distruzione di Gerusalemme', image: "jeremiah.jpg", desc: 'Rembrandt ritrae il profeta Geremia in meditazione, circondato da libri e pergamene. La luce penetra delicatamente nello studio del profeta, illuminando il volto pensieroso e le mani che tengono una pergamena. L\'opera è un ritratto psicologico di saggezza e melancolia.', chiaroscuro: true }
                ]
            }
        ]
    },
    romanticismo: {
        name: 'Romanticismo',
        artists: [
            {
                name: 'J.W Turner',
                works: [
                    { name: 'L\'incendio della camera dei Lord e dei comuni', image: "incendio.jpg" , desc: 'Turner cattura il caos e la drammaticità dell\'incendio del Parlamento di Westminster nel 1834. Le fiamme arancioni e gialle illuminano il cielo notturno, riflettendosi nel Tamigi. L\'opera celebra la forza sublimale della natura e della distruzione, con la luce che diviene l\'elemento centrale di una composizione turbolenta e appassionata.' },
                    { name: 'Ulisse schernisce Polifemo', image: "ulisse.jpg" , desc: 'Turner ritrae il momento drammatico in cui Ulisse e i suoi uomini fuggono dalla grotta del gigante Polifemo. La nave è illuminata dall\'alba, mentre il gigante cieco rimane nell\'oscurità. Turner utilizza la luce per rappresentare il trionfo dell\'astuzia umana sulle forze brutali della natura, creando una composizione romantica e eroica.' }
                ]
            },
            {
                name: 'Francisco Goya',
                works: [
                    { name: 'El tres de mayo', image: "mayo.jpg" , desc: 'Goya dipinge il momento dell\'esecuzione del 3 maggio 1808, quando i soldati francesi fucilano i resistenti spagnoli. La luce accecante della lanterna illumina il volto del condannato, trasformandolo in un\'icona di martirio e eroismo. L\'opera è una condanna spietata della guerra e della violenza, con la luce che gioca un ruolo cruciale nella creazione dell\'impatto emotivo.' },
                    { name: 'Maja desnuda', image: "maya.jpg" , desc: 'Goya dipinge un nudo femminile che sfida le convenzioni dell\'arte tradizionale. La Maja è rappresentata in modo diretto e senza il velo mitologico, distesa su un divano. La luce naturale modella delicatamente il corpo, creando un\'opera che è sia sensuale che provocatoria, affermando l\'autonomia e la dignità della donna ritratta.' }
                ]
            }
        ]
    },
    impressionismo: {
        name: 'Impressionismo e oltre',
        artists: [
            {
                name: 'Claude Monet',
                works: [
                    { name: 'La Cattedrale di Rouen, primo sole', image: "rouen-primo.jpg" ,desc: 'Monet dipinge la facciata della Cattedrale di Rouen al primo sole del mattino. La luce dorata dell\'alba illumina la pietra gotica, creando riflessi e ombre delicate che trasformano l\'architettura in un\'esplosione di colore. Questa opera della serie dimostra come la luce cambi continuamente la percezione della realtà.' },
                    { name: 'La Cattedrale di Rouen, effetti di luce mattutina', image: "rouen-mattutina.jpg" , desc: 'In questa tela, Monet cattura gli effetti della luce mattutina sulla Cattedrale di Rouen. La luce morbida del mattino crea una palette di blu e rosa che si riflettono sulla pietra, dimostrando la fluidità del colore e della luce nell\'Impressionismo.'},
                    { name: 'La Cattedrale di Rouen, in pieno sole', image: "rouen-pieno.jpg" , desc: 'Monet rappresenta la Cattedrale di Rouen in pieno sole, con la luce intensa che crea contrasti drammatici e vibrazioni di colore. La pietra sembra dissolversi nella luce, rappresentando l\'essenza dell\'Impressionismo: catturare l\'istante luminoso.' },
                    { name: 'La Cattedrale di Rouen, a mezzogiorno', image: "rouen-mezzogiorno.jpg" , desc: 'A mezzogiorno, la luce verticale illumina direttamente la facciata della Cattedrale, creando ombre nette e riflessi brillanti. Monet dimostra come la luce a diverse ore del giorno trasforma completamente l\'aspetto dell\'architettura.' },
                    { name: 'La Cattedrale di Rouen, sole al tramontante', image: "rouen-tramontante.jpg" , desc: 'Al tramonto, la luce calda avvolge la Cattedrale in toni dorati e arancioni. Monet cattura l\'effetto magico della luce del sole calante, che trasforma la pietra in un\'opera d\'arte vivente.' }
                ]
            },
            {
                name: 'Pierre-Auguste Renoir',
                works: [
                    { name: 'Bal au moulin de la Galette', image: "galette.jpg" , desc: 'Renoir cattura la gioia e l\'atmosfera di una festa domenicale al Moulin de la Galette a Montmartre. La luce naturale filtra tra gli alberi, illuminando i visi felici e i corpi in movimento dei ballerini. L\'opera è una celebrazione della bellezza della vita quotidiana, con la luce che crea un\'atmosfera calda, intima e piena di vita. La composizione vibra di gioia e libertà romantica.' }
                ]
            },
            {
                name: 'Vincent van Gogh',
                works: [
                    { name: 'I mangiatori di patate', image: "patate.jpg" , desc: 'Van Gogh dipinge una famiglia di contadini seduta intorno a un tavolo per cenare con patate e caffè. La luce della lampada a olio riunisce i personaggi in un ambiente intimo e spartano. L\'opera è una celebrazione della dignità del lavoro manuale e della semplicità della vita rurale. I colori caldi e le pennellate espressive creano un\'atmosfera emotiva che comunica empatia e profondità umana.' }
                ]
            }
        ]
    }
};

/* ========================================
   INIZIALIZZAZIONE
   ======================================== */

let currentView = 'homepage';
let currentPeriod = null;
let currentArtist = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeMap();
    console.log('Mostra LUMINA caricata correttamente');
});

/* ========================================
   EVENT LISTENERS
   ======================================== */

function initializeEventListeners() {
    // Click su carte delle correnti artistiche
    const periodCards = document.querySelectorAll('.period-card.clickable');
    periodCards.forEach(card => {
        card.addEventListener('click', function() {
            const period = this.dataset.period;
            showPeriodView(period);
        });
    });

    // Pulsante Indietro
    const btnBack = document.getElementById('btn-back');
    if (btnBack) {
        btnBack.addEventListener('click', goBack);
    }

    // Pulsante Prenota Ora
    const prenotaButtons = document.querySelectorAll('.btn-prenota');
    prenotaButtons.forEach(button => {
        button.addEventListener('click', openPrenotationForm);
    });

    // Pulsante Visualizza Mappa
    const mappaButtons = document.querySelectorAll('.btn-mappe, .btn-map');
    mappaButtons.forEach(button => {
        button.addEventListener('click', openMap);
    });

    // Chiudi effetto Chiaroscuro con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            deactivateChiaroscuroEffect();
        }
    });
}

/* ========================================
   NAVIGAZIONE TRA VISTE
   ======================================== */

function showPeriodView(period) {
    currentPeriod = period;
    currentView = 'period';
    
    const homepageView = document.getElementById('homepage-view');
    const periodView = document.getElementById('period-view');
    const artistView = document.getElementById('artist-view');
    const navBar = document.getElementById('nav-bar');
    
    homepageView.classList.add('hidden');
    periodView.classList.remove('hidden');
    artistView.classList.add('hidden');
    artistView.classList.remove('artist-view-active');
    navBar.classList.remove('hidden');
    
    const periodData = showData[period];
    document.getElementById('nav-title').textContent = periodData.name;
    
    // Genera HTML per gli artisti
    let html = '<div class="artists-grid">';
    periodData.artists.forEach(artist => {
        html += `
            <div class="artist-card" onclick="showArtistView('${period}', '${artist.name}')">
                <h3 class="artist-name">${artist.name}</h3>
                <p style="color: #666;">Clicca per scoprire le opere</p>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('period-content').innerHTML = html;
}

function showArtistView(period, artistName) {
    currentArtist = artistName;
    currentView = 'artist';
    
    const homepageView = document.getElementById('homepage-view');
    const periodView = document.getElementById('period-view');
    const artistView = document.getElementById('artist-view');
    const navBar = document.getElementById('nav-bar');
    
    homepageView.classList.add('hidden');
    periodView.classList.add('hidden');
    artistView.classList.remove('hidden');
    artistView.classList.add('artist-view-active');
    navBar.classList.remove('hidden');
    navBar.classList.add('fixed');
    
    // Impedisci lo scroll della pagina principale
    document.body.style.overflow = 'auto';
    
    document.getElementById('nav-title').textContent = artistName;
    
    // Trova l'artista nei dati
    const periodData = showData[period];
    const artist = periodData.artists.find(a => a.name === artistName);
    
    // Genera HTML per le opere
    let html = '<div class="artists-grid">';
    artist.works.forEach(work => {
        const isChiaroscuro = work.chiaroscuro ? 'chiaroscuro-work' : '';
        const imageHtml = work.image ? `<img src="${work.image}" alt="${work.name}" class="work-image">` : '';
        html += `
            <div class="artist-card">
                <div class="work-item ${isChiaroscuro}">
                    ${imageHtml}
                    <h4>${work.name}</h4>
                    <button class="btn-scopri" onclick="toggleWorkDescription(this)">Scopri</button>
                    <div class="work-description hidden">
                        <p>${work.desc}</p>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('artist-content').innerHTML = html;
    
    // Ripristina interattività chiaroscuro per Caravaggio, Honthorst e Rembrandt
    const chiaroscuroArtists = ['Caravaggio', 'Gerard van Honthorst', 'Rembrandt'];
    if (chiaroscuroArtists.includes(artistName)) {
        const chiaroscuroItems = document.querySelectorAll('.chiaroscuro-work');
        chiaroscuroItems.forEach(item => {
            const img = item.querySelector('.work-image');
            if (img) {
                item.addEventListener('click', function(e) {
                    // Non attivare se clicchi sul pulsante "Scopri"
                    if (e.target.classList.contains('btn-scopri')) return;
                    
                    // Se clicchi sull'immagine stessa o su testo/heading
                    if (e.target.tagName === 'IMG' || e.target.tagName === 'H4' || 
                        (e.target.tagName === 'P' && !e.target.closest('.work-description'))) {
                        
                        // Rimuovi l'effetto da tutte le altre immagini
                        document.querySelectorAll('.work-image.chiaroscuro-active').forEach(otherImg => {
                            if (otherImg !== img) {
                                otherImg.classList.remove('chiaroscuro-active');
                            }
                        });
                        
                        // Toggle l'effetto sull'immagine cliccata
                        img.classList.toggle('chiaroscuro-active');
                        e.stopPropagation();
                    }
                });
            }
        });
        
        // Rimuovi l'effetto quando clicchi fuori dalle immagini chiaroscuro
        document.addEventListener('click', function(e) {
            const clickedChiaroscuro = e.target.closest('.chiaroscuro-work');
            if (!clickedChiaroscuro && !e.target.classList.contains('btn-scopri')) {
                document.querySelectorAll('.work-image.chiaroscuro-active').forEach(img => {
                    img.classList.remove('chiaroscuro-active');
                });
            }
        });
    }
}

function goBack() {
    if (currentView === 'artist') {
        const artistView = document.getElementById('artist-view');
        const navBar = document.getElementById('nav-bar');
        artistView.classList.add('hidden');
        artistView.classList.remove('artist-view-active');
        navBar.classList.remove('fixed');
        document.body.style.overflow = 'auto';
        showPeriodView(currentPeriod);
    } else if (currentView === 'period') {
        const homepageView = document.getElementById('homepage-view');
        const periodView = document.getElementById('period-view');
        const artistView = document.getElementById('artist-view');
        const navBar = document.getElementById('nav-bar');
        
        periodView.classList.add('hidden');
        artistView.classList.add('hidden');
        artistView.classList.remove('artist-view-active');
        homepageView.classList.remove('hidden');
        navBar.classList.add('hidden');
        
        // Svuota il contenuto per evitare che rimanga visibile nella home
        document.getElementById('period-content').innerHTML = '';
        document.getElementById('artist-content').innerHTML = '';
        
        currentView = 'homepage';
        currentPeriod = null;
        currentArtist = null;
    }
}

/* ========================================
   PULSANTE SCOPRI
   ======================================== */

function toggleWorkDescription(button) {
    const workItem = button.closest('.work-item');
    const description = workItem.querySelector('.work-description');
    
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        button.textContent = 'Nascondi';
        button.style.backgroundColor = 'var(--color-accent)';
        button.style.color = 'var(--color-primary)';
        
        setTimeout(() => {
            description.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        description.classList.add('hidden');
        button.textContent = 'Scopri';
        button.style.backgroundColor = 'transparent';
        button.style.color = 'var(--color-text)';
    }
}

/* ========================================
   PRENOTAZIONE E MAPPA
   ======================================== */

function openPrenotationForm() {
    alert('Accedi al sistema di prenotazione:\n\nGrazie per l\'interesse nella mostra LUMINA!\n\nPuoi prenotare il tuo ingresso compilando il modulo online.\n\nOrari disponibili: 11:00 - 19:00\n\nPrezzi:\n- Bambini (0-18): Gratuito\n- Studenti: Gratuito\n- Adulti: 15 euro\n- Con guida: 22 euro\n\nNon è necessario stampare il biglietto, basta mostrarlo dal telefono.');
}

function openMap() {
    const address = 'Palazzo Pitti, Piazza Pitti 1, Firenze, Italia';
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}/`;
    window.open(googleMapsUrl, '_blank');
}

function initializeMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center;">
            <p style="font-size: 1.1rem; margin-bottom: 15px; color: #333;">Palazzo Pitti, Firenze</p>
            <p style="color: #666; margin-bottom: 10px;">Piazza Pitti 1, 50125 Firenze FI, Italia</p>
            <p style="color: #999; font-size: 0.9rem; margin-bottom: 15px;">Coordinate: 43.7627° N, 11.2494° E</p>
            <button class="btn btn-mappe" onclick="window.open('https://www.google.com/maps/search/Palazzo+Pitti+Firenze/', '_blank')">
                Apri in Google Maps
            </button>
        </div>
    `;
}

/* ========================================
   LOG DI BENVENUTO
   ======================================== */

console.log('%cBenvenuto in LUMINA', 'color: #f4d89f; font-size: 2em; font-weight: bold;');
console.log('%cUn viaggio attraverso i secoli per scoprire come la luce ha plasmato l\'arte', 'color: #666; font-size: 1.2em; font-style: italic;');
console.log('A cura di Silia Cacciola e Marta Giordano');
