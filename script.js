/* --- BASE DE DONNÉES DES ARTICLES (100% SPORT - TEXTE EXACT) --- */
const db = [
    {
        id: "alonso",
        category: "football",
        title: "Real Madrid show fight but another setback leaves Xabi Alonso’s future hanging in the balance",
        author: "Sid Lowe",
        date: "Thu 11 Dec 2025",
        image: "https://i.guim.co.uk/img/media/913c6b9720e0ac2ff32e66c4b1da3b673fbedacb/107_79_1151_921/master/1151.jpg?width=620&dpr=1&s=none&crop=none", 
        summary: "On the night many believed his dismissal was imminent, Alonso watched his team push back against their fate only to fall short once more.",
        trust: "Medium", 
        sources: ["Match Statistics (Opta)", "Bernabéu Stadium Reports"], 
        keyPoints: ["Real Madrid lost again despite a spirited performance.", "Alonso's future is on a knife-edge.", "Injuries to key players like Mbappé hampered the team."],
        content: `
            <p>On the night many believed his dismissal was imminent, Xabi Alonso watched his team push back against their fate — and perhaps his — only to fall short once more. He heard the whistles from the crowd and the final whistle from the referee, hugged the man who once mentored him, and then disappeared quickly down the Bernabéu tunnel, his second home defeat in four days heavy on his shoulders.</p>
            <p>Real Madrid had confronted Manchester City bravely, taking the lead and later chasing another comeback. But in the end, as Rodrygo — whose first goal in 33 matches briefly lifted the stadium — admitted, “it was not enough”.</p>
            <p>Whether it will be enough to save the coach is the pressing question now. Late on Sunday night, in one of the club’s internal offices, several senior figures were ready to dismiss Alonso after a stretch of just two wins in seven games. His fate was postponed, but this match was widely considered a final verdict. Extending the poor run to eight games offers no assurance that he will remain in charge — yet it also doesn’t guarantee he will be removed. His future sits on a knife-edge.</p>
            <p>Still, Madrid fought. They did not fold. The supporters whistled at times, but they also urged the team forward, sensing glimpses of the old Madrid — intensity, belief, defiance. Alonso insisted there was nothing to criticize in their attitude; in fact, he found plenty to praise. They were undone by a scruffy goal, a controversial penalty, and denied a dramatic, possibly deserved late equaliser by the thickness of the crossbar. Ultimately, there was no remontada, no unlikely resurrection.</p>
            <p>After the match, Alonso greeted Pep Guardiola and left the field, his players lingering behind. “This bad spell will pass,” he said.</p>
            <p>On the eve of their first meeting as opposing managers, Guardiola had been asked if he had any advice for Alonso. “Yes,” he replied. “Que mee con la suya.” That is: do it your way. Make your own decisions, free from pressures in the dressing room or the boardroom. Build the team on conviction, not compromise.</p>
            <p>Whether Alonso did that here is debatable. He was missing Dani Carvajal, Éder Militão, Trent Alexander-Arnold, Ferland Mendy, David Alaba, Eduardo Camavinga, and Dean Huijsen. Kylian Mbappé was also ruled out by a last-minute ankle injury. There was, in truth, only so much he could change.</p>
            <p>But his lineup was unconventional, stepping slightly away from the usual star-driven model: Vinícius Júnior returned to centre stage, Rodrygo shifted wide, and Dani Ceballos — a genuine midfield playmaker — was the evening’s surprise inclusion. Endrick came on later. At times, the performance showed promise.</p>
            <p>Yet promise once again failed to bring points — and Alonso’s future remains more uncertain than ever.</p>
        `
    },
    {
        id: "athletics",
        category: "athletics",
        title: "John Ridgeon says I was too pessimistic about his sport — and he might be right. So we talked it out",
        author: "The Guardian",
        date: "Tue 2 Dec 2025",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80", 
        summary: "World Athletics CEO John Ridgeon argues that the sport is growing faster than critics think.",
        trust: "High", 
        sources: ["World Athletics Data", "Guardian Interview"], 
        keyPoints: ["Revenue is up 25% and social media views have doubled.", "New formats aim to attract Gen Z.", "Ridgeon defends the sport's growth metrics."],
        content: `
            <p>It’s quite a sight: midnight in Tokyo, Usain Bolt is behind the decks, the launch party for the World Athletics Ultimate Championships is buzzing — and suddenly World Athletics CEO Jon Ridgeon walks up to me and says: “I read your recent Guardian column, and I thought it was very unfair.”</p>
            <p>Picture Gary Lineker flying into a tackle despite never having received a yellow card. This was the track-and-field equivalent. Ridgeon, a former world silver medallist in the 110m hurdles and one of the most measured and intelligent voices in sport, was telling me — politely but unmistakably — that he was annoyed.</p>
            <p>It wasn’t that he completely rejected my argument that athletics needs to work harder to appeal to Gen Z and stay relevant. Rather, he felt the column leaned too heavily towards the negative and failed to acknowledge how much World Athletics has changed in recent years.</p>
            <p>I like a good argument, so we started debating the points and looking for middle ground. Ridgeon, to his credit, admitted that some of his own friends agreed more with me than with him. I conceded that I should have highlighted certain achievements — including the Athletics Integrity Unit’s progress on doping.</p>
            <p>But with Bolt turning the volume up to tinnitus levels, we eventually had to shift the conversation outside. Last weekend, though, we finally sat down properly to settle the debate. Think of it as Ridgeon v Ingle II: this time without the bass shaking the walls.</p>
            <p>If this were a 1980s tabloid story, there might have been a photo of Ridgeon delivering a playful uppercut. Instead, after a brief warm-up exchange, we got into why the future might be brighter than I suggested a few months ago.</p>
            <p>First, Ridgeon wanted to correct something. “In your column you quoted a US-based coach who implied the sport was asleep and in decline,” he said. “But on every metric — global TV audience, media reach, social media numbers, revenue — it’s growing.”</p>
            <p>He pressed on: “Our income has risen by 25% in the last three or four years. Cities around the world are calling us asking to host world championships. And the biggest sporting event in 2025 was ours in Tokyo. That’s growth. Not complacency — growth.”</p>
            <p>And he wasn’t done. “We’re not just sitting back saying: ‘Gen Z is difficult — let’s rely on our middle-aged fans.’”</p>
            <p>There was a spark in his eye as he explained that World Athletics generated 700 million video views across its social media platforms during the September world championships — double the figure from Budapest two years earlier.</p>
            <p>It is impressive. But my main point remains: while athletics shines at the Olympics and world championships, it still struggles to engage casual fans during the rest of the year.</p>
            <p>Take Mondo Duplantis. He can clear a double-decker bus with nearly two metres to spare. Or marathon champion Sabastian Sawe, who runs 26.2 miles at an average pace of 4 minutes 40 seconds per mile. Unless you witness these feats up close, the scale of their brilliance is hard to grasp.</p>
            <p>Ridgeon agrees, and says television needs to do more to show the extraordinary. “Broadcasts often sanitise these superhuman performances. We need to bring them to life,” he says. “Drone footage, especially, could transform the way we film events.”</p>
            <p>He also notes that World Athletics’ data and research unit — which studies how fans react both in stadiums and at home — has already brought subtle improvements. They’ve even fitted spectators with sensors to measure emotional responses.</p>
            <p>“Do people get sweaty palms watching the 100m? Or the shot put?” he asks. “You can guess the answer. But it shows we’re trying new things. It’s just challenging when the sport is 150 years old.”</p>
            <p>More changes are coming. A World Treadmill Championships is on the horizon, aiming to connect with everyday gym-goers. And at next year’s Ultimate Championships, athletes will be allowed to bring their own social media teams to create content for their platforms. The aim is to amplify personalities and build rivalries essential to modern sport.</p>
            <p>Ridgeon admits that athletes must realise they’re not just competing against the people in their lane or on the track — but also against every sport, TV show, and online distraction fighting for viewers. Jake Paul v Anthony Joshua may be absurd on many levels, but it will draw attention.</p>
            <p>Despite the collapse of Grand Slam Track in its first US season, Ridgeon remains upbeat. He points to Nielsen research showing that one in seven people globally say they like athletics. The potential, he says, is enormous.</p>
            <p>“But what we haven’t succeeded in doing is converting the billion people who jog to keep fit into actual athletics fans.”</p>
            <p>So could athletics make a Formula One-style leap?</p>
            <p>“We’ve got two groups of sports,” he says. “Football, F1 — the giants sucking up the money and the eyeballs. Then there are the traditional, usually Olympic sports that struggle. Athletics sits in the middle.”</p>
            <p>Ridgeon pauses, then shifts to optimism.</p>
            <p>“Our foundations are incredible. We should be able to break into the lower tier of those giants. We just have to keep pushing, keep the energy high, and maintain the trajectory.”</p>
            <p>On that, at least, we agree.</p>
        `
    },
    { 
        id: "f1", 
        category: "f1", 
        title: "The 2025 Formula 1 season is wrapped up — but the sport is about to flip the script", 
        author: "Formula 1", 
        date: "Dec 2025", 
        image: "https://cdn-5.motorsport.com/images/amp/2548KwJ0/s1000/f1-2026-fia-car-renders.webp", 
        summary: "In 2026, F1 steps into a radically different era. New technical rules, a reshaped grid, and an 11th team will redefine the landscape.", 
        trust: "High", 
        sources: ["FIA 2026 Technical Regulations"], 
        keyPoints: ["Cars will be 30kg lighter and 10cm narrower.", "Engines shift to 50% electric / 50% combustion.", "DRS replaced by a push-to-pass system."], 
        content: `
            <p>The 2025 Formula 1 season is wrapped up, with McLaren sweeping both the constructors’ and drivers’ titles. But the celebration won’t last long — the sport is about to flip the script.</p>
            <p>In 2026, F1 steps into a radically different era. New technical rules, a reshaped grid, and an 11th team will redefine the landscape. Here’s what will matter next season.</p>
            <h3>A bold new rulebook</h3>
            <p>2026 brings the most dramatic regulation overhaul F1 has ever attempted. Cars will be lighter, smaller, and built around sustainability. The weight drops by 30kg, the width shrinks by 10cm, and the engines shift to an almost 50/50 balance between electric and combustion power, all running on fully sustainable fuels.</p>
            <p>How will that transform racing? No one truly knows — even the drivers admit the unknowns are huge.</p>
            <p>Chassis and power unit regulations have never been updated so heavily at the same time. Aerodynamics are being completely reshaped, and while the engines stay as 1.6-litre V6 turbo hybrids, the tech behind them changes dramatically. The MGU-H is gone, and hybrid output is roughly doubled.</p>
            <p>Ground-effect floors introduced in 2022 are being scrapped, replaced by movable front and rear wings designed to boost straight-line speed and improve energy recovery under braking. These changes are expected to alter the feel of the car significantly — including quirks like engines revving at maximum in certain corners because the combustion engine will often act as a generator.</p>
            <p>DRS disappears entirely. Instead, drivers will rely on a push-to-pass system that offers temporary bursts of electrical power.</p>
            <p>Lewis Hamilton sums up the uncertainty:</p>
            <p>“It’s really, really hard to predict what it’s going to be like. It feels so different, and I’m not sure fans will love it — but maybe it’ll surprise us. Maybe overtaking will be incredible. Maybe easier. I don’t know. With less downforce and more torque, driving in the rain will be insanely tough. But who knows? Maybe the grip will be better than we think.”</p>
        ` 
    },
    {
        id: "cycling",
        category: "cycling",
        title: "Bulgaria will host the first three stages of the 2026 Giro d'Italia",
        author: "Cycling News",
        date: "Dec 2025",
        image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/45eb/live/88f0ddf0-ced8-11f0-9569-abed8c645734.jpg.webp",
        summary: "The second successive year the race will begin outside Italy.",
        trust: "High", 
        sources: ["RCS Sport"], 
        keyPoints: ["Starts in Bulgaria.", "Finishes in Rome.", "Total distance of 3,458km."],
        content: `
            <p>Bulgaria will host the first three stages of the 2026 Giro d'Italia - the second successive year it will begin outside Italy.</p>
            <p>Albania hosted the opening three stages of this year's race in May, which since 2010 has started abroad seven times, including Jerusalem in 2018.</p>
            <p>The three-week event will take place 8-31 May and finishes in Rome.</p>
            <p>The 2026 edition will cover 3,458km with about 50,000 metres of elevation gain.</p>
            <p>The Women's Giro d'Italia, which begins on 30 May, will not start in Bulgaria and instead begins in Cesenatico on Italy's east coast.</p>
            <p>After nine stages it will finish on 7 June in Saluzzo.</p>
            <p>Two-time winner Elisa Longo Borghini will be defending her title on home soil, while Britain's Simon Yates is the reigning men's champion.</p>
            <p>The Giro d'Italia is one of cycling's three Grand Tours, alongside the Tour de France and Vuelta a Espana.</p>
        `
    },
    {
        id: "tennis",
        category: "tennis",
        title: "Italian tennis legend Nicola Pietrangeli dies at 92",
        author: "SportsMag Desk",
        date: "Dec 2025",
        image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/a8b0/live/1f874a00-ce9e-11f0-a58d-8f327674649c.jpg.webp",
        summary: "The two-time French Open champion and Davis Cup icon leaves an immeasurable legacy.",
        trust: "High", 
        sources: ["Italian Tennis Federation (FITP)", "ATP Tour"], 
        keyPoints: ["Nicola Pietrangeli passed away at 92.", "Won Roland Garros in 1959 and 1960.", "Captained Italy to Davis Cup victory in 1976."],
        content: `
            <p>Italian tennis legend Nicola Pietrangeli, a two-time French Open champion and one of the sport’s greats, has died at 92.</p>
            <p>Pietrangeli became the first Italian to win a Grand Slam singles title when he lifted the Roland Garros trophy in 1959, defending it successfully in 1960. Over a career that brought him 48 titles, he was long regarded as Italy’s best-ever player until the rise of current world number two and four-time major champion Jannik Sinner.</p>
            <p>“Italian tennis is mourning an icon,” the Italian Tennis Federation (FITP) announced, noting he remains the only Italian inducted into the International Tennis Hall of Fame.</p>
            <p>Along with his two victories in Paris, Pietrangeli reached the French Open final in 1961 and 1964. He was also a giant of the Davis Cup, playing a record 164 matches for Italy, winning 120, and guiding the team to its first title in 1976.</p>
            <p>ITF president David Haggerty praised him as “the true embodiment of everything the Davis Cup stands for — passion, prestige and national pride,” adding that Pietrangeli leaves an “immeasurable legacy” in world tennis.</p>
            <p>Rafael Nadal, the 14-time French Open champion, also paid tribute on X, calling him “a great of Italian and world tennis”.</p>
            <p>The organisers of the Italian Open, which Pietrangeli won twice, wrote: “With deep sadness we say goodbye to Nicola Pietrangeli, a true legend of Italian tennis. Ciao, Nicola.”</p>
        `
    },
    { 
        id: "golf", 
        category: "golf", 
        title: "England’s Greg Owen clinches MCB Mauritius Legends title in dramatic finale", 
        author: "Legends Tour", 
        date: "Dec 2025", 
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80", 
        summary: "Greg Owen clinched the title by a single stroke after draining a clutch birdie on the 18th.", 
        trust: "High", 
        sources: ["Tour Results"], 
        keyPoints: ["Owen won by a single stroke.", "Birdie on the 18th secured victory.", "First Indian winner on DP World Tour mentioned."], 
        content: `
            <p>England’s Greg Owen clinched the MCB Mauritius Legends title by a single stroke after draining a clutch birdie on the 18th at Constance Belle Mare Plage, edging out Jeev Milkha Singh and Darren Fichardt in the 2025 Legends Tour finale.</p>
            <p>Owen looked untouchable when his ninth birdie of the round took him to -20 through 14 holes, but a disastrous four-putt double bogey on the 15th and another dropped shot on 17 opened the door for his rivals. Milkha Singh’s birdie at the last meant Owen needed at least a par on the final par five to secure his maiden Legends Tour victory.</p>
            <p>The 53-year-old from Mansfield smoked his drive on 18, though play stalled as partner Craig Farrelly struggled in the volcanic rocks. Not wanting to lose rhythm, Owen announced he’d go ahead — then flushed a long iron to the heart of the green, giving himself an eagle chance and near-certain birdie.</p>
            <p>But drama lingered: Fichardt, still able to tie, stiffed his second to 10 feet. His eagle putt shaved the hole, leaving Owen two putts for the title. He calmly lagged up and tapped in for birdie, sealing a seven-under 65 to cap rounds of 65 and 68 for an 18-under total.</p>
            <p>Fichardt’s 66 and Milkha Singh’s strong finish left them one back. Singh, notably, was the first Indian to win on the DP World Tour.</p>
            <p>Owen started the day like a man possessed: four straight birdies, then five more between the 6th and 14th. Victory seemed inevitable until the 15th-hole nightmare and the bogey on 17.</p>
            <p>“For 16 holes it was probably the best I’ve ever played,” Owen said. “I’m just glad I didn’t have to hole that last one. It’s been a tough year — injuries, divorce… but this makes the grind worth it. I want more wins.”</p>
            <p>Elsewhere, Peter Baker threatened a three-peat with a late surge before bogeys at the finish dropped him to fourth.</p>
            <p>Michael Campbell, the 2005 U.S. Open champion, fired 66–65 over the weekend to tie for fifth with Scotland’s Stephen Gallacher, England’s Andrew Marshall, and Farrelly.</p>
            <p>Welshman Jamie Donaldson, remembered for holing the winning putt in the 2014 Ryder Cup, rebounded from a poor second round with a strong 66.</p>
        ` 
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
    
    // PODCAST (Sport Only)
    if (catFilter === 'podcast') {
        titleElement.textContent = "SPORTS PODCASTS 🎙️";
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
    // REPORTAGE (Sport Only)
    else if (catFilter === 'reportage') {
        titleElement.textContent = "SPORTS DOCS 🎥";
        categoryContainer.innerHTML = `
            <div class="media-wrapper">
                <div class="fake-video" onclick="alert('Playing video...')" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop') center/cover no-repeat;">
                    <div class="play-icon">▶</div>
                    <span style="position:absolute; bottom:10px; right:10px; font-size:1rem; background:rgba(0,0,0,0.7); padding:2px 5px; border-radius:3px;">10:24</span>
                </div>
                <h3 style="margin-top:10px;">Inside the Training Camp: Paris 2024</h3>
                <p>Exclusive access to the athletes preparing for the games.</p>
            </div>
            <div class="media-wrapper">
                <div class="fake-video" onclick="alert('Playing video...')" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=800&auto=format&fit=crop') center/cover no-repeat;">
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