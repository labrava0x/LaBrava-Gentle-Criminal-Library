/**
- GENTLE'S GRAND LIBRARY: THE ULTIMATE MASTER EDITION
- Featuring high-visibility green tags and larger, readable green notes.
 */

const LIBRARY_VERSION = 'v6-gentles-grand-library-master';

class Book {
    constructor(id, title, author, pages, shelf, belovedBy, marginalia, loveLevel, status, notes) {
        this.id = id || generateId();
        this.title = title;
        this.author = author;
        this.pages = pages || 300;
        this.shelf = "each book, shared with love , and imperial royal ☕! I love you, Gentle! ❤️";
        this.belovedBy = belovedBy || 'Both';
        this.marginalia = marginalia || "A truly magnificent tome, my dear!";
        this.loveLevel = loveLevel || '❤️❤️❤️❤️❤️';
        this.status = status || 'awaiting-review';
        this.notes = notes || '';
    }

    toggleRead() {
        this.status = this.status === 'awaiting-review' ? 'studied-tome' : 'awaiting-review';
    }
}

function generateId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        try { return crypto.randomUUID(); } catch (e) {}
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const rawSeedData = [
    new Book(
        generateId(),
        "Cyrano de Bergerac",
        "Edmond Rostand",
        352,
        "",
        "Both",
        "Gentle: 'I write the lines of destiny, and La Brava ensures the spotlight captures every glorious detail!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'I write your lines. You get the spotlight. That’s the deal, darling. And frankly, nobody wears the cape quite like you do.'"
    ),
    new Book(
        generateId(),
        "The Phantom of the Opera",
        "Gaston Leroux",
        360,
        "",
        "La Brava",
        "Gentle: 'A flair for dramatic entrances and grand stagecraft, though lacking in true gentlemanly refinement.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'The opera ghost had exquisite taste, a flair for dramatic entrances, and a truly dedicated collaborator. I respect the architecture.'"
    ),
    new Book(
        generateId(),
        "Pale Fire",
        "Vladimir Nabokov",
        315,
        "",
        "La Brava",
        "Gentle: 'An intricate web of commentary where the editor becomes the architect of the narrative itself!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'A mad editor’s ultimate love letter disguised as a commentary. I’d never be that unhinged. Probably.'"
    ),
    new Book(
        generateId(),
        "The Invention of Morel",
        "Adolfo Bioy Casares",
        120,
        "",
        "La Brava",
        "Gentle: 'Immortalized in projection! A fascinating study on visual legacy.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'A machine that preserves the beloved image forever on a continuous loop? I have technical questions. And a camera tripod.'"
    ),
    new Book(
        generateId(),
        "Les Liaisons dangereuses",
        "Choderlos de Laclos",
        416,
        "",
        "Gentle",
        "Gentle: 'Etiquette wielded like a rapier in the grand salon of high society.'",
        "❤️❤️❤️❤️",
        "awaiting-review",
        "La Brava: 'Etiquette wielded like a rapier. Gentle, darling, you’d be magnificent in a powdered wig and villainous lace.'"
    ),
    new Book(
        generateId(),
        "The Count of Monte Cristo",
        "Alexandre Dumas",
        1276,
        "",
        "Both",
        "Gentle: 'Patience, elegance, and an immaculate public reveal—the gold standard of theatrical triumph!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'A masterclass in waiting for the perfect moment. You’ll have your stage, Gentle, and I’ll be behind the camera.'"
    ),
    new Book(
        generateId(),
        "Arsène Lupin, Gentleman Burglar",
        "Maurice Leblanc",
        280,
        "",
        "Gentle",
        "Gentle: 'Style, panache, and leaving the police thoroughly baffled while maintaining flawless manners!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'See? Stealing can be elegant, theatrical, and stylish. You’re just continuing a very proud, distinguished tradition.'"
    ),
    new Book(
        generateId(),
        "Don Quixote",
        "Miguel de Cervantes",
        1056,
        "",
        "Both",
        "Gentle: 'A knight-errant fighting for chivalry in a world that has forgotten the beauty of grand ideals!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'He was called mad, too, for fighting for a world that wouldn't understand. But he had his Dulcinea. I’m yours.'"
    ),
    new Book(
        generateId(),
        "The Scarlet Pimpernel",
        "Baroness Orczy",
        304,
        "",
        "Both",
        "Gentle: 'They seek him here, they seek him there! The ultimate manifestation of theatrical elusiveness!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'You’re my Pimpernel—dashing, elusive, and full of flair. And I’m the only one who truly knows your real name.'"
    ),
    new Book(
        generateId(),
        "La Brava",
        "Elmore Leonard",
        288,
        "",
        "La Brava",
        "Gentle: 'A title that resonates with unmatched loyalty and fiery devotion, my dear!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'This is us. Except our ending will be better.'"
    ),
    new Book(
        generateId(),
        "Neuromancer",
        "William Gibson",
        271,
        "",
        "La Brava",
        "La Brava: 'Why rely on brute force when a custom firewall and a mechanical keyboard can lock down the entire perimeter?'",
        "❤️❤️❤️❤️❤️",
        "awaiting-review",
        "La Brava: 'The future is digital, Gentle. Our legend will be, too.'"
    ),
    new Book(
        generateId(),
        "The Girl with the Dragon Tattoo",
        "Stieg Larsson",
        465,
        "",
        "La Brava",
        "Gentle: 'A remarkably fierce digital ally, though her tea-brewing etiquette leaves much to be desired.'",
        "❤️❤️❤️❤️",
        "awaiting-review",
        "La Brava: 'A brilliant, bruised hacker who trusts nobody, weaponizes a keyboard, and fights back against corrupt systems. I feel seen. Also, Lisbeth has excellent taste in leather jackets.'"
    ),
    new Book(
        generateId(),
        "Linux Kernel Architecture, Shell Scripting & Advanced Terminal Mastery",
        "La Brava (Private Documentation)",
        680,
        "",
        "La Brava",
        "Gentle: 'The mysterious language of command lines that keeps our broadcasting hideout entirely invisible!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'Why rely on graphical interfaces when you can command the entire operating system with pure keystrokes? True power lives in the terminal.'"
    ),
    new Book(
        generateId(),
        "The Self-Taught Developer’s Handbook: Zero to Full-Stack Prodigy",
        "Autodidact Guild",
        520,
        "",
        "La Brava",
        "Gentle: 'True genius requires no institution—only passion, intellect, and relentless execution!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'They said a locked room and a glowing monitor were a prison. I turned them into a university. Formal degrees are for people who lack imagination.'"
    ),
    new Book(
        generateId(),
        "Applied Cryptography, Penetration Testing & Hideout Perimeter Defense",
        "Anonymous White-Hat Syndicate",
        740,
        "",
        "La Brava",
        "Gentle: 'Impenetrable digital fortifications fit for a gentleman's secret headquarters!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'Our cameras, our servers, our encrypted connection logs—impenetrable. Let the heroes try to trace our IP. They'll hit a brick wall of custom firewalls.'"
    ),
    new Book(
        generateId(),
        "The Art of Seduction & Psychological Fascination",
        "Robert Greene (Annotated & Adapted)",
        480,
        "",
        "La Brava",
        "Gentle: 'A fascinating psychological study on charm, presence, and public intrigue.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'When you are preparing to meet a man who wears a cape and dreams of theatrical grandeur, you don't just show up. You study the architecture of desire. You become his indispensable obsession.'"
    ),
    new Book(
        generateId(),
        "Private Journal: The Eve of Danjuro’s Arrival",
        "Manami Aiba (La Brava)",
        150,
        "",
        "La Brava",
        "Gentle: 'A treasure beyond value. The purest testament of faith in my humble dream.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'My imagination was running wild before we ever spoke. Would he notice my code? Would he laugh at my script drafts? I spent three hours calibrating the lighting so my entrance would look like a cinematic cutscene. And then he smiled at me, and my entire universe clicked into place.'"
    ),
    new Book(
        generateId(),
        "The Art of Rhetoric (Ars Rhetorica)",
        "Aristotle",
        240,
        "",
        "Gentle",
        "Gentle: 'Ethos, pathos, and logos, my dear! Every successful public address requires an exquisite blend of moral authority and dramatic fervor.'",
        "❤️❤️❤️❤️",
        "studied-tome",
        "Gentle's personal handbook for commanding the attention of society."
    ),
    new Book(
        generateId(),
        "The Art of Public Speaking & Grand Oratory",
        "Master Rhetors of the Stage",
        380,
        "",
        "Gentle",
        "Gentle: 'A speech must not merely inform, La Brava! It must swell the heart, captivate the audience, and echo through the historic cobblestones of destiny.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "Gentle: 'A speech must not merely inform, La Brava! It must swell the heart, captivate the audience, and echo through the historic cobblestones of destiny.'"
    ),
    new Book(
        generateId(),
        "The Classic Book of Tea & Botanical Infusions",
        "Kakuzō Okakura & Master Brewers",
        210,
        "",
        "Gentle",
        "Gentle: 'Earl Grey is not merely a beverage; it is an institution, a soothing balm after a long day of defying societal expectations.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "Gentle: 'Earl Grey is not merely a beverage; it is an institution, a soothing balm after a long day of defying societal expectations.'"
    ),
    new Book(
        generateId(),
        "Burke's Peerage & The Modern Gentleman’s Guide to Etiquette",
        "Society of Noble Conduct",
        620,
        "",
        "Gentle",
        "Gentle: 'Clothes do not merely make the man—they make the legend. Never skimp on the collar starch or the velvet lapels.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "Gentle: 'Clothes do not merely make the man—they make the legend. Never skimp on the collar starch or the velvet lapels.'"
    ),
    new Book(
        generateId(),
        "The Book of Altruism: How to Change the World and Be Remembered",
        "Visionaries of the Next Era",
        310,
        "",
        "Gentle",
        "Gentle: 'Even if our methods are unconventional, our hearts beat for a world that notices us. We shall leave our mark, my dear!'",
        "❤️❤️❤️❤️",
        "awaiting-review",
        "Gentle: 'Even if our methods are unconventional, our hearts beat for a world that notices us. We shall leave our mark, my dear!'"
    ),
    new Book(
        generateId(),
        "The Setting Sun (Shayō)",
        "Osamu Dazai",
        200,
        "",
        "Both",
        "Gentle: 'The tragic decline of aristocracy expressed with heartbreaking poetic grace.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'A tragic aristocracy fading into the twilight. Gentle would pace the room reading passages aloud while wearing his finest velvet coat.'"
    ),
    new Book(
        generateId(),
        "No Longer Human (Ningen Shikkaku)",
        "Osamu Dazai",
        176,
        "",
        "Both",
        "Gentle: 'A poignant reflection on alienation and the masks required by modern society.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'The burden of alienation and performing happiness for a world that doesn't understand. Too close to home, perhaps. But profoundly brilliant.'"
    ),
    new Book(
        generateId(),
        "The Tale of the Heike (Heike Monogatari)",
        "Anonymous (Classical Epic)",
        800,
        "",
        "Gentle",
        "Gentle: '“The sound of the Gion Shōsa bells echoes the impermanence of all things.” What a magnificent, poetic rhythm for a grand downfall!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "Gentle: '“The sound of the Gion Shōsa bells echoes the impermanence of all things.” What a magnificent, poetic rhythm for a grand downfall!'"
    ),
    new Book(
        generateId(),
        "Kokoro",
        "Natsume Sōseki",
        248,
        "",
        "Both",
        "Gentle: 'An exquisite exploration of isolation, honor, and deep psychological devotion.'",
        "❤️❤️❤️❤️",
        "awaiting-review",
        "La Brava: 'Isolation, generational shifts, and deep psychological devotion. A masterclass in quiet, devastating consequence.'"
    ),
    new Book(
        generateId(),
        "Les Misérables",
        "Victor Hugo",
        1463,
        "",
        "Both",
        "Gentle: 'For those who dream of a better world, even when the cobblestones rise up to meet us.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'For the ones who dream of a better world—and the ones who follow them into the dark.'"
    ),
    new Book(
        generateId(),
        "The Picture of Dorian Gray",
        "Oscar Wilde",
        254,
        "",
        "Both",
        "Gentle: 'Wit, aesthetic perfection, and the tragic price of eternal vanity!'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'You’re beautiful, Gentle. But you don’t need a portrait to stay that way for me.'"
    ),
    new Book(
        generateId(),
        "Jane Eyre",
        "Charlotte Brontë",
        500,
        "",
        "La Brava",
        "Gentle: 'Unyielding integrity and fierce romantic devotion against all societal obstacles.'",
        "❤️❤️❤️❤️❤️",
        "studied-tome",
        "La Brava: 'Reader, I loved him. I always will.'"
    )
];

let myLibrary = [];

function loadLibrary() {
    localStorage.removeItem('gentlesGrandLibraryData_v5');
    const savedData = localStorage.getItem('gentlesGrandLibraryData_v6');

    if (!savedData) {
        myLibrary = [...rawSeedData];
        saveLibrary();
    } else {
        try {
            const parsed = JSON.parse(savedData);
            myLibrary = parsed.map(item => new Book(
                item.id, item.title, item.author, item.pages, item.shelf,
                item.belovedBy, item.marginalia, item.loveLevel, item.status, item.notes
            ));
        } catch (e) {
            myLibrary = [...rawSeedData];
            saveLibrary();
        }
    }
}

function saveLibrary() {
    localStorage.setItem('gentlesGrandLibraryData_v6', JSON.stringify(myLibrary));
}

document.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
    initPortalEngine();
    initUIEventListeners();
    initScribeModal();
    initExportEngine();
    initQuirkBoostEngine();
    renderLibrary();
});

function initPortalEngine() {
    const portal = document.getElementById('threshold-portal');
    if (!portal) return;

    function shatterPortal() {
        portal.classList.add('shattered');
        setTimeout(() => portal.style.display = 'none', 800);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && portal.style.display !== 'none') {
            shatterPortal();
        }
    });

    portal.addEventListener('click', shatterPortal);
}

function initQuirkBoostEngine() {
    const boostBtn = document.getElementById('quirk-boost-btn');
    if (!boostBtn) return;

    boostBtn.addEventListener('click', () => {
        document.body.classList.toggle('camera-mode');
        boostBtn.style.transform = 'scale(1.15)';
        setTimeout(() => boostBtn.style.transform = 'scale(1)', 200);
    });
}

function initScribeModal() {
    const modal = document.getElementById('scribe-modal');
    const openBtn = document.getElementById('open-scribe-btn');
    const closeBtn = document.getElementById('close-scribe-btn');
    const form = document.getElementById('add-volume-form');

    if (!modal || !openBtn || !closeBtn || !form) return;

    openBtn.addEventListener('click', () => modal.style.display = 'flex');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('book-title').value.trim();
        const author = document.getElementById('book-author').value.trim();
        const pages = parseInt(document.getElementById('book-pages').value) || 300;
        const shelf = "";
        const belovedBy = document.getElementById('book-beloved').value;
        const marginalia = document.getElementById('book-marginalia').value.trim();
        const loveLevel = document.getElementById('book-love').value;
        const status = document.getElementById('book-status').value;
        const notes = document.getElementById('book-notes').value.trim();

        if (title && author) {
            const newBook = new Book(generateId(), title, author, pages, shelf, belovedBy, marginalia, loveLevel, status, notes);
            myLibrary.unshift(newBook);
            saveLibrary();
            renderLibrary();
            form.reset();
            modal.style.display = 'none';
        }
    });
}

function initExportEngine() {
    const exportBtn = document.getElementById('export-library-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(myLibrary, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "gentles-grand-library-archives.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });
}

function initUIEventListeners() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.book-card');
        if (!card) return;
        const bookId = card.dataset.id;

        if (e.target.classList.contains('delete-btn')) {
            removeBook(bookId);
        } else if (e.target.classList.contains('status-btn')) {
            toggleBookStatus(bookId);
        }
    });
}

function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    saveLibrary();
    renderLibrary();
}

function toggleBookStatus(id) {
    const book = myLibrary.find(b => b.id === id);
    if (book) {
        book.toggleRead();
        saveLibrary();
        renderLibrary();
    }
}

function renderLibrary() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = `book-card ${book.status}`;
        card.dataset.id = book.id;

        const isStudied = book.status === 'studied-tome';

        card.innerHTML = `
            <div class="book-spine-accent"></div>
            <div class="box-content" style="padding: 1.5rem;">
                <div class="card-top-meta" style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; font-size: 0.85rem;">
                    <span class="book-shelf-tag" style="color: #00FF66; font-family: 'Cinzel', serif; font-weight: 700;">${escapeHTML(book.shelf)}</span>
                    <span class="beloved-tag" style="color: #F9D3DD;">❤️ Beloved by: ${escapeHTML(book.belovedBy)}</span>
                </div>
                
                <h3 class="book-title" style="font-family: 'Cinzel', serif; font-size: 1.4rem; color: #F9D3DD; margin-bottom: 0.3rem;">${escapeHTML(book.title)}</h3>
                <h4 class="book-author" style="font-family: 'Cormorant Garamond', serif; font-style: italic; color: #d1c7d6; margin-bottom: 1rem;">by ${escapeHTML(book.author)} — <span class="page-count">${book.pages} pages</span></h4>
                
                <div class="marginalia-box" style="background: rgba(214, 120, 147, 0.08); border-left: 3px solid #D67893; padding: 0.8rem; margin-bottom: 0.8rem; border-radius: 4px;">
                    <p class="marginalia-text" style="font-family: 'Cormorant Garamond', serif; font-style: italic; color: #f7f1e3; margin: 0;">"${escapeHTML(book.marginalia)}"</p>
                </div>

                <div class="love-rating" style="font-size: 0.9rem; margin-bottom: 0.8rem; color: #F9D3DD;">Love Level: <span class="hearts">${book.loveLevel}</span></div>
                
                ${book.notes ? `<p class="book-notes" style="font-family: 'Cormorant Garamond', serif; color: #00FF66; font-size: 1.15rem; line-height: 1.4; margin-bottom: 1.2rem; font-weight: 600;">${escapeHTML(book.notes)}</p>` : ''}
                
                <div class="book-actions" style="display: flex; gap: 0.8rem; align-items: center;">
                    <button class="status-btn ${isStudied ? 'status-studied' : 'status-awaiting'}" style="flex: 1; padding: 0.6rem 1rem; background: ${isStudied ? 'rgba(53, 27, 41, 0.7)' : 'rgba(214, 120, 147, 0.2)'}; border: 1px solid #D67893; color: #F9D3DD; border-radius: 6px; font-family: 'Cinzel', serif; cursor: pointer; font-size: 0.85rem;">
                        ${isStudied ? '🎩 Gentle has studied this tome' : '⏳ Awaiting Gentle’s review'}
                    </button>
                    <button class="delete-btn" style="padding: 0.6rem 1rem; background: transparent; border: 1px solid rgba(214, 120, 147, 0.4); color: #D67893; border-radius: 6px; font-family: 'Cinzel', serif; cursor: pointer; font-size: 0.85rem;" title="Back to the Terminal">Back to the Terminal</button>
                </div>
            </div>
        `;
        libraryContainer.appendChild(card);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}