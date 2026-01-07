/* --- BASE DE DONNÉES DES ARTICLES --- */
const db = [
    // --- ARTICLES DE REMI ---
    {
        id: "reform-uk",
        category: "politics",
        title: "Reform UK Leader Farage Under Scrutiny Over Past Remarks",
        author: "Remi",
        date: "Sun 24 Nov 2025",
        image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=800&q=80", 
        summary: "Nigel Farage faces increasing pressure to clarify his party's connections with Russia and address allegations.",
        trust: "High", 
        sources: ["The Guardian Testimonies", "Sky News Interview", "Reform UK Statements"],
        keyPoints: [
            "Reform UK leads Labour in polls but faces scrutiny on Russian ties.",
            "Allegations of past racist remarks by Farage have resurfaced.",
            "Farage admits to saying 'ridiculous things' in youth but denies intent to hurt."
        ],
        content: `
            <p>Nigel Farage, the prominent leader of the far-right Reform UK party, is currently facing increasing pressure to clarify his party's connections with Russia. This comes as Reform UK tops recent polls, positioning Farage as a serious political figure in the UK, rather than the marginal provocateur he once was.</p>
            <p>However, the controversies surrounding the 61-year-old architect of Brexit extend beyond current foreign policy. In mid-November, The Guardian published multiple testimonies alleging racist and antisemitic behaviour during Farage's attendance at Dulwich College in the 1980s.</p>
            <p>Twenty former classmates spoke to the newspaper, with one, whose family survived the Holocaust, recalling a teenage Farage allegedly whispering deeply offensive phrases, including "Hitler was right." These claims echo an earlier finding from 2013, when a journalist unearthed a 1981 letter from a teacher who labelled the young Farage "racist" and "fascist."</p>
            <p>When initially confronted, Farage downplayed the allegations, admitting he said "some ridiculous things" as a youth. As the controversy intensified, a Reform UK spokesperson dismissed the allegations as "entirely without foundation." On November 24, Farage himself broke his silence, telling Sky News he had "never directly really tried to go and hurt anybody" with his comments.</p>
            <p>As his party leads the ruling Labour Party by a significant margin in the polls, Farage's past is now facing intense public and media scrutiny.</p>
        `
    },
    {
        id: "trump-doctrine",
        category: "politics",
        title: "The Trump Doctrine: Re-Carving the Global Landscape",
        author: "Remi",
        date: "Dec 2025",
        // IMAGE MISE À JOUR
        image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-740116,resizemode-75,msid-126326588/news/international/us/what-is-don-roe-doctrine-trump-rebrands-the-monroe-doctrine-after-nicols-maduro-is-captured.jpg", 
        summary: "A new US National Security Strategy seemingly prioritizes spheres of influence, signaling a return to neo-imperialism.",
        trust: "Medium", 
        sources: ["US National Security Strategy Document", "Munich Security Conference Remarks"],
        keyPoints: [
            "New strategy suggests appeasing Russia and accommodating China.",
            "The 'Trump Corollary' aims to reassert US dominance in Latin America.",
            "US role in Asia shifts to a business-driven vision, unsettling allies."
        ],
        content: `
            <p>A new US National Security Strategy has unveiled a significant shift in the Trump administration's approach to global affairs, seemingly prioritizing spheres of influence by appeasing Russia and accommodating China. While the document has formalized the increasingly harsh rhetoric towards the transatlantic relationship, as notably expressed by Vice President JD Vance in Munich, this European tension is not the central focus of the new policy.</p>
            <h3>A Return to Neo-Imperialism in the Americas</h3>
            <p>The core of the strategy appears to be an unabashed neo-imperialism aimed at Latin America. After years of perceived neglect, Washington intends to reassert its influence across the Americas, adopting interference as a guiding principle, a move already observed in countries like Panama.</p>
            <p>The primary motivations for this aggressive comeback are twofold: pushing back against Beijing, which has expanded its presence in the region, and combating transnational issues like drug trafficking and migration.</p>
            <p>This new approach is formally cemented by what is being called a "Trump corollary" to the historic Monroe Doctrine (1823). This addition is seen as an attempt by Donald Trump to secure a place in history by equating himself with former President Theodore Roosevelt, presenting his foreign policy as a return to an era where the region was treated as an American "backyard."</p>
        `
    },
    {
        id: "meta-ai",
        category: "tech",
        title: "EU Investigates Meta Over WhatsApp's AI Rollout",
        author: "Remi",
        date: "Thu 4 Dec 2025",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80", 
        summary: "The European Union launches an antitrust investigation into Meta concerning potential restrictions on third-party AI providers.",
        trust: "High", 
        sources: ["European Commission Announcement", "EU Competition Chief Statement"],
        keyPoints: [
            "EU probe focuses on whether Meta restricts rival AI on WhatsApp Business.",
            "Meta's own 'Meta AI' remains fully accessible.",
            "Investigation aims to prevent dominant tech firms from crushing innovation."
        ],
        content: `
            <p>The European Union has officially launched an antitrust investigation into Meta, the parent company of WhatsApp, concerning the introduction of new AI features. This move, announced on Thursday, December 4th, aims to determine if Meta's actions violate the bloc's competition rules.</p>
            <p>The primary concern of the European Commission is a new policy from Meta that may restrict third-party AI providers from offering their services via WhatsApp. Specifically, this policy reportedly affects a tool within the business version of WhatsApp, limiting competing AI providers' ability to communicate with their customers.</p>
            <p>Meanwhile, Meta's own AI service, "Meta AI," would remain fully accessible to users on the platform. EU competition chief Teresa Ribera emphasized the need to prevent "dominant digital incumbents from abusing their power to crowd out innovative competitors."</p>
            <p>This investigation falls under the EU's established antitrust rules, rather than the newer digital legislation. The EU is looking into whether the new policy is illegal and if swift action is necessary to prevent potential irreparable harm to competition within the developing AI space.</p>
        `
    },
    {
        id: "japan-politics",
        category: "politics",
        title: "Japanese Politics: A Rightward Shift and the Disinformation Challenge",
        author: "Remi",
        date: "Dec 2025",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80", 
        summary: "Prime Minister Sanae Takaichi’s assertive stance highlights a growing right-wing influence and disinformation challenges in Japan.",
        trust: "Medium", 
        sources: ["Yomiuri Polls", "Diet Election Results 2024-2025"],
        keyPoints: [
            "Takaichi suggests military intervention if China attacks Taiwan.",
            "64% of young Japanese adults approve of her hardline stance.",
            "The ruling LDP is struggling, leading to a coalition with right-leaning figures."
        ],
        content: `
            <p>Recent events in Japan, including Prime Minister Sanae Takaichi’s assertive stance on the China-Taiwan crisis, highlight a growing right-wing influence, particularly among younger generations.</p>
            <h3>Takaichi's Nationalistic Appeal</h3>
            <p>The crisis began with Takaichi's November 7th statement suggesting potential Japanese military intervention if China were to attack Taiwan. This position, which marks a significant policy shift, has surprisingly resonated with many. A Yomiuri poll showed that 64% of young adults (18–39) approve of her hardline stance.</p>
            <h3>Political and Social Instability</h3>
            <p>The political landscape reflects this social shift. The long-ruling Liberal Democratic Party (LDP) is in a period of weakness, having lost its absolute majority in both the lower and upper houses of the Diet in 2024 and 2025, respectively.</p>
            <p>This climate of discontent has also fueled a wave of angry messages and, crucially, a spread of disinformation across social media platforms. The nation is currently grappling with this two-fold challenge: a struggling political establishment and an increasingly polarized public discourse.</p>
        `
    },
    {
        id: "zelensky-deal",
        category: "politics",
        title: "Zelensky Under Pressure to Cede Territory as US Pushes for 'Christmas Deal'",
        author: "Remi",
        date: "Dec 2025",
        // IMAGE MISE À JOUR
        image: "https://opinion-images.wsj.net/im-76447928/?size=1.5", 
        summary: "Ukraine faces intense pressure from the US to accept a peace proposal involving significant territorial concessions by Christmas.",
        trust: "Medium", 
        sources: ["Financial Times Sources", "Draft Peace Proposal Leaks"],
        keyPoints: [
            "US pushing for a peace deal by Christmas.",
            "Proposal requires Ukraine to cede Crimea and Donbas and ban NATO membership.",
            "Zelensky faces a choice between a painful peace or risking greater losses."
        ],
        content: `
            <p>Ukrainian President Volodymyr Zelensky is facing a major diplomatic and political dilemma: whether to accept a US-backed peace proposal that demands he surrender key territory to Russia. The intense pressure comes from the White House, which is reportedly pushing for a peace agreement "by Christmas," according to a source cited in the Financial Times.</p>
            <p>The original peace proposal, an ambitious and controversial 28-point framework developed by the US and Russia, has been widely criticized for heavily favoring Moscow's demands. Core sticking points include:</p>
            <ul>
                <li><strong>Territorial Cessions:</strong> Ukraine required to recognize annexation of Crimea, Luhansk, and Donetsk.</li>
                <li><strong>NATO Prohibition:</strong> Constitutional commitment to never join NATO.</li>
                <li><strong>Military Limits:</strong> Armed forces limited to 600,000 personnel.</li>
                <li><strong>Amnesty:</strong> Mutual amnesty for wartime actions.</li>
            </ul>
            <p>Zelensky's move to send a "revised" version prepared with European allies suggests an effort to negotiate more favorable terms. However, Russian President Vladimir Putin has asserted that if Ukraine refuses, Russian troops will "liberate these territories by force." This negotiation battle represents a defining moment in the war.</p>
        `
    },
    {
        id: "migration-deal",
        category: "politics",
        title: "Migrant Lives in Limbo: The Reality Behind the UK-France 'One In, One Out' Deal",
        author: "Remi",
        date: "Dec 2025",
        // IMAGE MISE À JOUR
        image: "https://img.lemde.fr/2025/10/24/246/0/2953/1476/1342/671/60/0/0d15052_upload-1-63jlwlamejj0-003-millerand-dscf8115.jpg", 
        summary: "A new migration agreement creating a 'one in, one out' system causes distress and uncertainty for migrants crossing the Channel.",
        trust: "High", 
        sources: ["Migrant Testimonies", "UK-France Bilateral Agreement Details"],
        keyPoints: [
            "New deal: for every person sent back to France, one is admitted to the UK.",
            "Migrants describe the process as a confusing 'lottery'.",
            "Only ~20 people accepted into UK under the rule despite 37,000 crossings."
        ],
        content: `
            <p>A new migration agreement between the United Kingdom and France, aiming to tackle irregular Channel crossings, is creating a complex and distressing reality for the migrants involved. This summer's bilateral "one in, one out" deal dictates that for every person sent back to France from the UK, one person on French territory should be admitted into Britain.</p>
            <p>However, the human cost of this political mechanism is significant. For individuals like Binyam, a 26-year-old Eritrean, the process feels like a confusing and arbitrary "lottery." Having already made the perilous journey across the Channel in a small boat and then been sent back, he is one of at least 50 migrants returned to France under the agreement so far.</p>
            <p>While nearly 37,000 people have successfully made the crossing this year, Binyam's experience highlights the growing uncertainty. To date, approximately 20 people have been accepted into the UK under the reciprocal part of the agreement. This disparity, alongside the administrative uncertainty, leaves many managing extreme psychological stress while their future remains entirely dependent on bureaucratic decisions.</p>
        `
    },

    // --- ARTICLES ORIGINAUX ---
    {
        id: "athletics",
        category: "athletics",
        title: "John Ridgeon says I was too pessimistic about his sport",
        author: "The Guardian",
        date: "Tue 2 Dec 2025",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80", 
        summary: "World Athletics CEO John Ridgeon argues that the sport is growing faster than critics think.",
        trust: "High", sources: ["World Athletics Data"], keyPoints: ["Revenue up 25%", "Social media views doubled"],
        content: "<p>It’s quite a sight: midnight in Tokyo...</p>"
    },
    {
        id: "alonso",
        category: "football",
        title: "Real Madrid show fight but another setback leaves Xabi Alonso’s future hanging",
        author: "Sid Lowe",
        date: "Thu 11 Dec 2025",
        image: "https://i.guim.co.uk/img/media/913c6b9720e0ac2ff32e66c4b1da3b673fbedacb/107_79_1151_921/master/1151.jpg?width=620&dpr=1&s=none&crop=none", 
        summary: "Alonso watched his team push back against their fate only to fall short once more.",
        trust: "Medium", sources: ["Match Stats"], keyPoints: ["2nd defeat in 4 days", "Injuries impacted game"],
        content: "<p>On the night many believed his dismissal was imminent...</p>"
    },
    { 
        id: "f1", 
        category: "f1", 
        title: "F1 2026: The sport is about to flip the script", 
        author: "Formula 1", 
        date: "Dec 2025", 
        image: "https://cdn-5.motorsport.com/images/amp/2548KwJ0/s1000/f1-2026-fia-car-renders.webp", 
        summary: "New technical rules and a reshaped grid.", 
        trust: "High", 
        sources: ["FIA"], 
        keyPoints: ["Lighter cars", "No DRS"], 
        content: "<p>2026 brings the most dramatic regulation overhaul...</p>" 
    },
    { 
        id: "golf", 
        category: "golf", 
        title: "Greg Owen clinches MCB Mauritius Legends title", 
        author: "Legends Tour", 
        date: "Dec 2025", 
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80", 
        summary: "Victory by a single stroke.", 
        trust: "High", 
        sources: ["Tour Results"], 
        keyPoints: ["Birdie on 18th", "First Legends title"], 
        content: "<p>England’s Greg Owen clinched the title...</p>" 
    },
    {
        id: "cycling",
        category: "cycling",
        title: "Bulgaria will host the first three stages of the 2026 Giro d'Italia",
        author: "Cycling News",
        date: "Dec 2025",
        image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/45eb/live/88f0ddf0-ced8-11f0-9569-abed8c645734.jpg.webp",
        summary: "The second successive year the race will begin outside Italy.",
        trust: "High", sources: ["RCS Sport"], keyPoints: ["Starts in Bulgaria", "Finishes in Rome"],
        content: "<p>Bulgaria will host the first three stages...</p>"
    },
    {
        id: "tennis",
        category: "tennis",
        title: "Italian tennis legend Nicola Pietrangeli dies at 92",
        author: "SportsMag Desk",
        date: "Dec 2025",
        image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/a8b0/live/1f874a00-ce9e-11f0-a58d-8f327674649c.jpg.webp",
        summary: "The two-time French Open champion leaves an immeasurable legacy.",
        trust: "High", sources: ["FITP"], keyPoints: ["Won Roland Garros twice", "Davis Cup captain"],
        content: "<p>Italian tennis legend Nicola Pietrangeli...</p>"
    }
];

/* --- LOGIQUE GLOBALE (Date du jour) --- */
const dateElement = document.getElementById('date-display');
if(dateElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = new Date().toLocaleDateString("en-US", options);
}

/* --- LOGIQUE PAGE ARTICLE --- */
const articleContainer = document.getElementById('article-main-content');
if (articleContainer) {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');
    const articleData = db.find(item => item.id === articleId);

    if (articleData) {
        document.getElementById('art-tag').textContent = articleData.category;
        document.getElementById('art-title').textContent = articleData.title;
        document.getElementById('art-meta').innerHTML = `Published on ${articleData.date}`;
        document.getElementById('art-img').src = articleData.image; 
        
        const wordCount = articleData.content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        document.getElementById('art-meta').insertAdjacentHTML('beforeend', `<span style="margin-left:15px; color:#555;">⏱️ ${readTime} min read</span>`);

        if (articleData.trust) {
            const trustClass = articleData.trust === "High" ? "trust-high" : "trust-med";
            const trustLabel = articleData.trust === "High" ? "✅ Verified Source" : "⚠️ Analysis";
            document.getElementById('art-meta').insertAdjacentHTML('beforeend', `<span class="trust-badge ${trustClass}">${trustLabel}</span>`);
        }

        document.getElementById('art-body').innerHTML = articleData.content;

        if (articleData.keyPoints) {
            const pointsHTML = articleData.keyPoints.map(pt => `<li>${pt}</li>`).join("");
            const summaryHTML = `<div class="summary-box"><h3>⚡ In a nutshell</h3><ul>${pointsHTML}</ul></div>`;
            document.getElementById('art-body').insertAdjacentHTML('afterbegin', summaryHTML);
        }

        if (articleData.sources) {
            const sourcesList = articleData.sources.join(", ");
            const factBox = `<div class="fact-check-box"><span class="fact-check-title">🛡️ Fact-Check & Sources</span><p>Verified against: <strong>${sourcesList}</strong>.</p></div>`;
            document.getElementById('art-body').insertAdjacentHTML('beforeend', factBox);
        }

        const creditContainer = document.getElementById('art-author-credit');
        if(creditContainer) {
            creditContainer.innerHTML = `
                <div class="author-bubble">
                    <strong>Article Credit</strong>
                    Written by:<br>
                    <span style="font-size: 1.1em; font-weight:bold; color:#333;">${articleData.author}</span>
                </div>
            `;
        }
    } else {
        articleContainer.innerHTML = "<h2>Article not found.</h2><p><a href='index.html'>Return home</a></p>";
    }
}

/* --- LOGIQUE PAGE CATÉGORIE (AVEC PODCAST & REPORTAGE) --- */
const categoryContainer = document.getElementById('category-list');
if (categoryContainer) {
    const params = new URLSearchParams(window.location.search);
    const catFilter = params.get('cat');
    const titleElement = document.getElementById('cat-title');
    
    // PODCAST
    if (catFilter === 'podcast') {
        titleElement.textContent = "LATEST PODCASTS 🎙️";
        categoryContainer.innerHTML = `
            <div class="media-wrapper">
                <h4>Ep. 42: The Future of F1 Rules</h4>
                <div class="fake-audio-player">
                    <div class="audio-btn" onclick="alert('Playing podcast...')">▶</div>
                    <div class="audio-bar"><div class="audio-progress" style="width:30%"></div></div>
                    <span style="font-size:0.8rem; color:#666;">12:40 / 45:00</span>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">Join the team as we discuss the 2026 regulations and what they mean for Ferrari.</p>
            </div>
            <div class="media-wrapper">
                <h4>Ep. 41: Premier League Crisis?</h4>
                <div class="fake-audio-player">
                    <div class="audio-btn" onclick="alert('Playing podcast...')">▶</div>
                    <div class="audio-bar"><div class="audio-progress" style="width:0%"></div></div>
                    <span style="font-size:0.8rem; color:#666;">00:00 / 32:15</span>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">Analysis of the weekend's shocking results.</p>
            </div>
        `;
    } 
    // REPORTAGE
    else if (catFilter === 'reportage') {
        titleElement.textContent = "VIDEO REPORTAGE 🎥";
        categoryContainer.innerHTML = `
            <div class="media-wrapper">
                <div class="fake-video" onclick="alert('Playing video...')">
                    <div class="play-icon">▶</div>
                    <span style="position:absolute; bottom:10px; right:10px; font-size:1rem; background:rgba(0,0,0,0.7); padding:2px 5px; border-radius:3px;">10:24</span>
                </div>
                <h3 style="margin-top:10px;">Inside the Training Camp: Paris 2024</h3>
                <p>Exclusive access to the athletes preparing for the games.</p>
            </div>
            <div class="media-wrapper">
                <div class="fake-video" onclick="alert('Playing video...')">
                    <div class="play-icon">▶</div>
                    <span style="position:absolute; bottom:10px; right:10px; font-size:1rem; background:rgba(0,0,0,0.7); padding:2px 5px; border-radius:3px;">05:45</span>
                </div>
                <h3 style="margin-top:10px;">Tech in Sports: The AI Revolution</h3>
                <p>How data is changing the way we watch football.</p>
            </div>
        `;
    }
    // ARTICLES CLASSIQUES
    else {
        if(catFilter) titleElement.textContent = catFilter.toUpperCase() + " NEWS";
        const filteredArticles = catFilter ? db.filter(item => item.category === catFilter) : db;
        categoryContainer.innerHTML = "";

        if (filteredArticles.length > 0) {
            filteredArticles.forEach(article => {
                categoryContainer.innerHTML += `
                    <a href="article.html?id=${article.id}" class="article-link">
                        <article class="article-card">
                            <img src="${article.image}" class="card-img" alt="${article.title}">
                            <div class="article-content">
                                <span class="tag" style="background:#004aad; margin-bottom:5px; display:inline-block;">${article.category}</span>
                                <h4>${article.title}</h4>
                                <p>${article.summary}</p>
                            </div>
                        </article>
                    </a>
                `;
            });
        } else {
            categoryContainer.innerHTML = "<p>No articles found.</p>";
        }
    }
}

/* =========================================
   SIMULATEUR DE SCORES EN DIRECT
   ========================================= */
let liveMatches = [
    { id: 1, sport: "Football", home: "Man Utd", away: "Tottenham", hScore: 2, aScore: 1, time: 72, status: "LIVE" },
    { id: 2, sport: "Football", home: "Barcelona", away: "Sevilla", hScore: 0, aScore: 0, time: 12, status: "LIVE" },
    { id: 3, sport: "NBA", home: "Lakers", away: "Warriors", hScore: 110, aScore: 108, time: "Q4 - 2:30", status: "LIVE" },
    { id: 4, sport: "Tennis", home: "Sinner", away: "Alcaraz", info: "Set 3: 4-3", status: "LIVE" }
];

function renderLiveScores() {
    const container = document.getElementById('live-scores-container');
    if (!container) return; 

    let html = "";
    liveMatches.forEach(match => {
        let scoreDisplay = "";
        let timeDisplay = "";

        if (match.sport === "Football") {
            scoreDisplay = `
                <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                    <span>${match.home}</span> <strong>${match.hScore}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${match.away}</span> <strong>${match.aScore}</strong>
                </div>
            `;
            timeDisplay = `<span style="color: #d93025; font-weight: bold; font-size: 0.8rem;">LIVE • ${match.time}'</span>`;
        } 
        else if (match.sport === "NBA") {
            scoreDisplay = `
                <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                    <span>${match.home}</span> <strong>${match.hScore}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${match.away}</span> <strong>${match.aScore}</strong>
                </div>
            `;
            timeDisplay = `<span style="color: #d93025; font-weight: bold; font-size: 0.8rem;">${match.time}</span>`;
        }
        else if (match.sport === "Tennis") {
            scoreDisplay = `
                <div style="margin-top:5px; font-size:0.9rem;">
                    <strong>${match.home}</strong> vs <strong>${match.away}</strong><br>
                    <span style="color:#555;">${match.info}</span>
                </div>
            `;
            timeDisplay = `<span style="color: #d93025; font-weight: bold; font-size: 0.8rem;">LIVE</span>`;
        }

        html += `
            <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                ${timeDisplay}
                ${scoreDisplay}
            </div>
        `;
    });
    container.innerHTML = html;
}

function simulateGameUpdates() {
    liveMatches.forEach(match => {
        if (match.sport === "Football" && match.time < 90) {
            match.time++; // +1 minute
            if (Math.random() > 0.95) { 
                if (Math.random() > 0.5) match.hScore++;
                else match.aScore++;
            }
        }
        if (match.sport === "NBA") {
             if (Math.random() > 0.7) match.hScore += 2;
             if (Math.random() > 0.7) match.aScore += 2;
        }
    });
    renderLiveScores();
}

function votePoll(option) {
    alert("Thanks for voting for: " + option);
}

renderLiveScores();
setInterval(simulateGameUpdates, 60000);