-- ALL SEED DATA WAS GENERATED WITH AI

INSERT INTO posts (board_id, user_id, flair, title, body, created_at)
VALUES
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        'News',
        'New foldable phone announced with a "self-healing" screen',
        'A manufacturer just unveiled a foldable with a coating that claims to repair minor scratches on its own over time.',
        '2024-02-01 09:12:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        'Discussion',
        'Is anyone else exhausted by how many "AI" features are being bolted onto everything?',
        'My email client, my note app, my thermostat app, even my grocery delivery app now has an "AI assistant" button. Most of them do the same three things badly, usually worse than the plain old menu it replaced. I get that companies feel pressure to ship something in this category, but a lot of these features feel like they were added because a slide deck demanded it rather than because anyone asked for them.
 
Curious if anyone has actually found one of these bolt-on AI features genuinely useful day to day, something you would miss if it disappeared tomorrow, versus the ones you immediately turned off or ignored.',
        '2024-03-14 20:41:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        'PSA',
        'Reminder to check your router firmware before the long weekend',
        'A batch of consumer routers had a patch pushed out this week for a fairly serious vulnerability. Takes two minutes to check in the admin panel.',
        '2024-12-01 08:03:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        'Question',
        'Mechanical keyboard for someone who types 10+ hours a day?',
        'My wrists have started complaining and I think it is time to upgrade from my old membrane board. Looking for recommendations that prioritize comfort over RGB lighting. Split keyboards welcome, low-profile preferred, budget is flexible.',
        '2025-04-02 15:27:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        'Discussion',
        'What is a coding habit you picked up that you wish you learned earlier?',
        'For me it is writing the test before the fix when chasing a bug.',
        '2024-02-20 11:34:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        'Question',
        'How do you name boolean variables so they read cleanly in conditionals?',
        'I keep writing things like "if (!notAvailable)" and hating myself for it thirty seconds later. Do you have naming conventions that keep negations from turning into brain teasers? I have tried a few approaches over the years, prefixing everything with is or has, avoiding negative names entirely, keeping a little glossary at the top of the file, but nothing has fully stuck as a habit yet.
 
Would love to hear what has actually worked for you long term, not just in theory but in code you have had to revisit six months later at 2am during an incident.',
        '2024-08-09 13:52:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        'Review',
        'Switched our team from REST to GraphQL, six months later thoughts',
        'Overall positive but not the silver bullet the blog posts promised.
 
The frontend team is noticeably happier. They stopped waiting on backend engineers to add fields to responses and started shaping their own queries, which cut down on a whole category of small cross-team tickets that used to clog up our sprint planning. That alone probably justified the migration.
 
Where it got harder than expected was caching. REST gave us free HTTP caching almost by accident, and GraphQL took that away. We ended up building a fairly involved persisted query and response caching layer that took longer to get right than the schema migration itself did. We also underestimated query cost analysis, a single poorly written nested query from a junior dev nearly took down a database during a demo.
 
If you are considering the switch, budget real time for the caching and cost-limiting infrastructure. Do not treat it as an afterthought the way we did.',
        '2025-01-11 17:08:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        'PSA',
        'A popular npm package pushed a breaking change as a patch version last night',
        'Pin your versions before you update, this one snuck a breaking API change into what should have been a safe patch bump.',
        '2025-06-19 07:44:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        'News',
        'Long-rumored remaster finally gets an official trailer',
        'It has been teased for two years and the trailer finally dropped this morning. Visuals look updated but combat footage was suspiciously absent.',
        '2025-03-01 10:15:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'neonriver'),
        'Discussion',
        'Games where the soundtrack carried the whole experience for you',
        'Some games I barely remember the plot of but I could hum the main theme from memory years later. Curious what soundtracks live rent-free in everyone else''s head, and whether it was the composition itself or how it was used in a specific moment that made it stick.',
        '2025-08-20 21:30:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        'Review',
        'Went back to a 2011 RPG after years away, holds up better than expected',
        'Character models look rough by today''s standards but the writing and pacing are still excellent.',
        '2025-09-14 19:22:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'movies'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        'Discussion',
        'A film that got better on rewatch for you',
        'First time through I thought it was fine, nothing special. Watched it again a year later knowing the ending and it completely recontextualized the first act.',
        '2025-02-04 14:12:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'movies'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        'Question',
        'Looking for slow, quiet films to fall asleep to on purpose',
        'Not being sarcastic, genuinely want something visually calm and unhurried to put on before bed. Nothing with jump scares or sudden loud score changes.',
        '2025-05-19 22:47:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'movies'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        'News',
        'Director confirms sequel is officially in early development',
        'Confirmed in an interview this week, no release window yet. Said they want to avoid rushing the script this time after the mixed reception to the last one.',
        '2025-11-02 12:05:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'music'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        'Discussion',
        'Albums that work best as a single uninterrupted listen',
        'Some albums are just a collection of songs, and some are clearly meant to be heard start to finish in one sitting. What albums lose something if you shuffle or skip around? I am especially interested in concept albums where the track order tells a story, but honestly even just a really well sequenced tracklist with good pacing between fast and slow songs counts too.',
        '2024-04-20 23:16:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'music'),
        (SELECT id FROM users WHERE username = 'paperplane'),
        'Review',
        'Caught a small venue show last night, best live sound I''ve heard all year',
        'No pyrotechnics, no huge stage production, just a tight band in a room that holds maybe 200 people.',
        '2024-09-30 21:58:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'music'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        'Question',
        'How do you actually discover new music these days?',
        'Algorithm playlists feel increasingly stale for me lately, mostly just recycling the same forty or so artists no matter how many songs I skip.
 
Do people still dig through blogs, forums, or radio to find things, or has everyone more or less accepted the algorithm as good enough and moved on?',
        '2025-03-08 16:33:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'books'),
        (SELECT id FROM users WHERE username = 'teatime'),
        'Discussion',
        'A book that completely changed how you read afterward',
        'Not necessarily your favorite book, just one that shifted what you look for or notice in everything you read after it.
 
For me it was a novel that used unreliable narration so well that I now instinctively question every first-person narrator by default, even in books where there is no twist coming at all. It rewired something in how I approach a book''s opening chapter.',
        '2024-06-02 10:20:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'books'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        'Question',
        'Looking for nonfiction that reads like a novel',
        'I love a good narrative arc but usually gravitate toward nonfiction. Looking for recommendations that manage to hit both.',
        '2024-10-11 13:41:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'books'),
        (SELECT id FROM users WHERE username = 'nordicfox'),
        'Review',
        'Finally finished the trilogy everyone recommended, mixed feelings',
        'First book was excellent, second dragged in the middle third, and the ending of the third book wrapped things up faster than I expected after all that buildup.
 
Still glad I read it, just not the flawless experience I was promised by basically everyone who told me to pick it up.',
        '2025-07-07 18:29:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'travel'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        'Question',
        'Best way to handle a long layover without a visa for the country?',
        'Have an eleven hour layover coming up and want to make the most of it, but I''m not sure what my options are without a visa.',
        '2025-05-20 09:55:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'travel'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        'PSA',
        'Heads up, a lot of train operators in Europe are on strike this month',
        'Planning a rail trip soon, check the operator schedules before booking anything nonrefundable.
 
Got caught out by this myself and had to rebook a whole leg of the trip on short notice, which ended up costing more than the original ticket did.',
        '2025-06-30 07:18:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'travel'),
        (SELECT id FROM users WHERE username = 'retrograde'),
        'Discussion',
        'The most underrated city you''ve visited that nobody talks about',
        'Everyone raves about the same five cities in every country.
 
What is a place you visited on a whim or during a layover that ended up being a genuine highlight of the whole trip, somewhere you would go out of your way to recommend even though it never comes up on any list?',
        '2025-01-03 15:44:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'food'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        'Discussion',
        'What is the one kitchen tool you didn''t think you needed until you had it?',
        'For me it was an instant read thermometer. Sounds boring but it fixed my meat cooking almost overnight.',
        '2024-07-15 12:09:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'food'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        'Question',
        'Simple weeknight dinners that don''t feel like the same five meals on repeat?',
        'I have fallen into a rut of the same rotation of pasta, stir fry, and tacos.',
        '2024-11-08 19:31:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'food'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        'Review',
        'Tried a viral pasta recipe from a video, verdict below',
        'Genuinely good, better than expected honestly, but the video oversells how "one pan" it actually is. Still had to dirty a second pot for the pasta itself, plus a colander and a bowl for the topping.
 
The sauce technique itself was the actual clever part though, reducing the tomatoes low and slow instead of just dumping a can in, and I will definitely be reusing that trick in other recipes going forward even if I ignore the rest of the video.',
        '2025-04-25 20:03:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'fitness'),
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        'Question',
        'How do you stay motivated during the "boring middle" of a fitness routine?',
        'The first few weeks are exciting and months in the results feel rewarding, but that middle stretch where progress slows down and it just feels like a chore is where I always fall off. How do you push through it?',
        '2024-09-02 06:27:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'fitness'),
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        'Discussion',
        'Home gym setups on a tight budget, what was actually worth buying?',
        'Not looking to replicate a commercial gym, just want the handful of pieces of equipment that gave the most value for the space and money.
 
Adjustable dumbbells were the single best purchase for me by a wide margin, they replaced an entire rack for a fraction of the floor space. A cheap pull-up bar in a doorway is second. Everything else I bought in the first month, resistance bands, a foam roller, an ab wheel, mostly sits unused now. What did you buy that you still reach for regularly versus what quietly became a coat rack?',
        '2025-02-14 08:50:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'casual'),
        (SELECT id FROM users WHERE username = 'slowinternet'),
        'Discussion',
        'What is a small daily habit that quietly improved your life?',
        'Nothing dramatic, just something small you started doing that you didn''t expect to matter much but ended up sticking because it actually helped.',
        '2026-01-20 12:40:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'casual'),
        (SELECT id FROM users WHERE username = 'alexm'),
        'Question',
        'Anyone else keep a running list of restaurants they mean to try?',
        'Mine has close to sixty entries at this point and I add faster than I ever actually visit.',
        '2024-11-01 17:22:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'science'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        'News',
        'New exoplanet survey results published this week',
        'Data release from the latest survey run just went public. Nothing earth-shattering yet in terms of habitability candidates, but the sheer number of newly confirmed planets in this batch is notable.',
        '2024-11-15 09:14:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'science'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        'Question',
        'ELI5 request, why does time dilation actually happen?',
        'I understand the "clocks run slower near mass or at high speed" fact but not the intuition behind why. Every explanation I find either hand-waves it or jumps straight into the math with barely a sentence of buildup in between.
 
Looking for something in the middle ground, an explanation that actually builds intuition without requiring me to relearn calculus first.',
        '2025-04-09 14:37:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'photography'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        'Discussion',
        'Prime lens only for a full year, here is what changed about how I shoot',
        'Forced myself to leave the zoom lens at home for twelve months straight, no exceptions even on trips.
 
It made me move my feet a lot more and actually think about composition instead of just standing in one spot and zooming to fix a bad angle. My hit rate on keeper shots went up noticeably, probably because I was slowing down and being more deliberate about every frame instead of firing off a burst and hoping. I have since gone back to carrying a zoom for certain kinds of work, but I would genuinely recommend the exercise to anyone, even if you go back afterward.',
        '2025-01-02 11:29:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'photography'),
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        'Question',
        'Editing style feedback, am I overdoing the contrast?',
        'Been leaning into punchier, high-contrast edits lately and I can''t tell if it looks intentional or just heavy handed at this point.',
        '2025-06-11 20:02:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'art'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        'Discussion',
        'Do you finish pieces you''ve fallen out of love with, or abandon them?',
        'I have a folder of about a dozen half-finished pieces where I lost momentum or interest partway through.',
        '2025-02-19 15:16:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'art'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        'Question',
        'How do you get comfortable sharing unfinished or rough work?',
        'I only ever post polished final pieces and I think it is holding me back from getting useful feedback earlier in the process, back when it would actually be cheap to change direction.
 
Any tips for getting over the discomfort of putting something rough out there, or is it just a matter of doing it enough times until it stops feeling exposing?',
        '2025-08-01 09:48:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'sports'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        'Discussion',
        'An underdog performance this season that genuinely surprised you',
        'Not necessarily a full upset, just a performance from a team or player nobody was talking about going in that ended up being one of the highlights of the season for you.',
        '2025-04-01 18:55:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'sports'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        'News',
        'Major trade finalized this morning, reactions are split',
        'Deal went through a few hours ago and fan reaction is about as divided as I''ve seen in a while.',
        '2025-09-20 13:02:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'pets'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        'Discussion',
        'The most inexplicable thing your pet has ever done',
        'No context needed for these usually, just curious what the strangest unexplainable behavior your pet has ever displayed was.',
        '2025-05-10 10:37:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'pets'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        'Question',
        'Older cat suddenly more vocal at night, anyone dealt with this?',
        'Nothing seems wrong health-wise per the vet, just started meowing a lot more overnight the past couple weeks after years of being pretty quiet at night. Bloodwork came back normal, no signs of pain that the vet could find during the exam, and appetite and litter box habits are unchanged.
 
Wondering if this is just a fairly common thing with older cats or if I should push for more testing anyway.',
        '2025-11-22 23:11:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'diy'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        'Review',
        'Refinished an old dresser I found on the curb, more work than expected',
        'Looked like a quick sand and repaint job from the photos I took before hauling it home.
 
Turned into stripping five layers of old paint, one of which was clearly lead-based going by the color and how it flaked, so that added a whole extra safety step I hadn''t planned for. Also ended up replacing two drawer runners that were basically sawdust by the time I got the drawers open all the way. Worth it in the end, it looks great in the room now, but budget significantly more time than the photos would suggest, and factor in the cost of proper respirators and drop cloths if you''re dealing with anything painted before the 70s.',
        '2025-08-15 16:24:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'diy'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        'Question',
        'Best way to soundproof a home office without major construction?',
        'Renting, so nothing permanent or wall-invasive. Looking for practical options that actually make a noticeable difference.',
        '2025-10-05 07:59:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        'Question',
        'Is it worth switching to a password manager at this point, or overkill?',
        'I have maybe forty accounts and reuse three passwords across all of them, which I know is bad. Trying to decide if a password manager is worth the hassle of setting up or if I am overthinking this.',
        '2024-01-20 08:44:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        'PSA',
        'Old charging cables can quietly start a fire, worth checking yours',
        'Just found a frayed cable behind my desk that had clearly been overheating for a while based on the discoloration near the plug. Worth doing a quick check of the cables you have tucked behind furniture.',
        '2024-09-11 06:15:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'technology'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        'Review',
        'Tried an e-ink tablet for note-taking, here is how it went after three months',
        'Went in expecting it to basically replace paper notebooks for me and it mostly has, with a few caveats.
 
The handwriting recognition is genuinely impressive, better than I expected going in, and the lack of backlight has made a real difference for late evening reading sessions before bed. Battery life is also excellent, I am charging it maybe once every two or three weeks depending on use.
 
The downsides are real though. The refresh rate makes anything resembling fast scrolling or sketching feel sluggish compared to a normal tablet, and the app ecosystem is thin if you want to do anything beyond notes and PDFs. If your use case is narrow it is great, if you wanted an all-purpose tablet replacement it is not that.',
        '2025-05-30 21:02:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'teatime'),
        'Question',
        'How strict should code review comments be for a two person team?',
        'It is just me and one other developer on this project and our reviews have started feeling more like a formality than an actual check. How do small teams keep review meaningful without it turning into pure bureaucracy?',
        '2024-03-05 12:10:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        'Discussion',
        'Do you comment your code more or less than you used to?',
        'Less, honestly, but I have gotten better at naming things so the code explains itself more often.',
        '2024-10-28 16:37:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        'News',
        'Popular framework just announced a major version with a new compiler',
        'Announcement dropped this morning promising significantly faster build times and smaller bundle sizes. Migration guide is already up though early adopters are reporting some rough edges with certain plugins.',
        '2025-02-27 09:58:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'programming'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        'Review',
        'Spent a weekend rewriting a script in a language I barely know, worth it',
        'Had a Python script that had grown unwieldy over a couple years of patches and decided on a whim to rewrite it in Go mostly to learn the language.
 
Took way longer than expected, closer to three weekends than one, but the end result runs noticeably faster and the type system caught two bugs I did not even know existed in the original. Would recommend this as a learning exercise if you have a small enough project and some patience for going slower than usual while you get comfortable with new syntax and tooling.',
        '2025-07-14 20:26:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        'Discussion',
        'Games you kept playing well past the credits rolling',
        'Some games I finish the story and immediately uninstall, others I keep coming back to for years after the ending. What kept you playing long after the main story wrapped up?',
        '2024-03-01 22:19:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        'Question',
        'Best budget headset for competitive online games?',
        'Do not need anything fancy, just clear voice chat and decent positional audio without spending a fortune.',
        '2024-11-04 14:03:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        'PSA',
        'A recent patch is bricking save files on one platform, back yours up first',
        'Multiple reports across forums today of the latest patch corrupting save data specifically on one console. Back up your saves manually before updating if you can, until this gets confirmed and hopefully patched.',
        '2025-06-05 11:41:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'gaming'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        'Review',
        'Finished the new roguelike everyone was talking about, quick thoughts',
        'Genuinely earns the hype for the most part.
 
The run variety is excellent even after close to thirty hours, I am still seeing item combinations I have not encountered before. Difficulty curve is fair, brutal at times but rarely feels unfair in the way some games in this genre can. My only real complaint is the meta progression system, which slows down noticeably in the middle hours and made a couple sessions feel more like a grind than a series of exciting new runs.',
        '2025-12-01 18:12:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'movies'),
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        'Question',
        'Looking for a movie night pick that works for a mixed group of tastes',
        'Hosting friends who range from horror fans to people who only like romcoms, need something that will not clear the room for anyone.',
        '2024-04-18 15:26:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'movies'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        'Discussion',
        'A supporting actor performance that stole the whole movie for you',
        'Not the lead, just someone in a smaller role who ended up being the most memorable part of the film for you, sometimes more than the actual main cast.',
        '2024-12-19 20:07:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'movies'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        'News',
        'Streaming service confirms a beloved show is finally getting a film adaptation',
        'Announced this afternoon, filming is set to begin next year. Original cast is reportedly attached, which is honestly the best possible news given how these adaptations usually go.',
        '2025-08-06 13:50:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'music'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        'Question',
        'How do you organize a music library that has grown out of control?',
        'Mine has become an unsorted mess of playlists with names that made sense to me two years ago and mean nothing now. How do you keep yours manageable?',
        '2024-06-15 10:44:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'music'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        'Review',
        'First time hearing this genre live, did not expect to enjoy it that much',
        'Went along mostly to support a friend and ended up genuinely converted by the end of the set.',
        '2025-01-22 23:33:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'music'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        'Discussion',
        'Vinyl collectors, how do you decide what actually earns a physical copy?',
        'I do not have unlimited shelf space so I have started being pickier about what gets a vinyl copy versus what just stays digital.
 
For me it usually comes down to whether the album art and liner notes add something to the experience, and whether it is something I would want to sit down and listen to start to finish rather than just having on in the background. Curious what criteria other people use, especially anyone dealing with similarly limited space.',
        '2025-09-09 17:15:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'books'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        'Question',
        'Do you finish books you are not enjoying, or abandon them?',
        'I used to force myself to finish everything I started out of some sense of obligation. Recently started giving myself permission to quit and honestly reading more as a result.',
        '2024-07-19 09:27:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'books'),
        (SELECT id FROM users WHERE username = 'paperplane'),
        'PSA',
        'Reminder that library apps let you borrow ebooks for free if your library supports it',
        'Feels like a lot of people do not know this exists. Worth checking if your local library has a digital lending program before buying your next ebook.',
        '2025-02-11 07:36:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'books'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        'Review',
        'Read a debut novel that everyone online seemed to love, mixed on it myself',
        'The prose itself is genuinely beautiful in places, some sentences I went back and reread just to enjoy them again. Where it lost me was pacing, the middle third meanders in a way that felt more indulgent than intentional, and a couple of the side characters never really got resolved by the end.',
        '2025-10-25 19:48:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'travel'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        'Discussion',
        'Solo travel versus traveling with others, which do you actually prefer?',
        'Did my first solo trip last year and honestly enjoyed the freedom more than I expected. Curious how people weigh the tradeoffs between the two.',
        '2024-08-01 12:52:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'travel'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        'Question',
        'How far in advance do you actually book flights for the best price?',
        'Every article gives a different magic number and I am not convinced any of them are actually backed by real data.',
        '2025-03-27 08:14:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'travel'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        'Review',
        'Tried packing for a two week trip with only a carry-on, lessons learned',
        'Thought this would be miserable and it honestly was not, though I definitely made some mistakes along the way.
 
Packing cubes made a bigger difference than I expected, and doing laundry twice during the trip meant I did not need nearly as many clothes as I originally packed. Where I went wrong was overpacking shoes, I brought three pairs and used one the entire time. Next trip I am going even lighter.',
        '2025-11-30 15:39:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'food'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        'Question',
        'What is a cheap ingredient that instantly makes a dish taste more expensive?',
        'Looking for that one addition that punches way above its price when it comes to flavor.',
        '2024-08-22 18:05:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'food'),
        (SELECT id FROM users WHERE username = 'neonriver'),
        'Discussion',
        'Is there a food you loved as a kid that you cannot stand now?',
        'Used to request a particular cereal for every birthday breakfast and now cannot even look at it without feeling slightly ill. Curious what flipped for other people.',
        '2025-04-13 10:58:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'food'),
        (SELECT id FROM users WHERE username = 'slowinternet'),
        'PSA',
        'That viral kitchen gadget everyone is buying is mostly a single-use plastic paperweight',
        'Bought one out of curiosity after seeing it everywhere, used it twice, now it lives in a drawer. Save your money.',
        '2026-02-08 12:22:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'fitness'),
        (SELECT id FROM users WHERE username = 'retrograde'),
        'Question',
        'How do you warm up properly without it eating half your workout time?',
        'I know I should warm up more thoroughly than I do but between work and everything else my gym time is limited and I do not want to spend a third of it just warming up.',
        '2024-09-25 07:11:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'fitness'),
        (SELECT id FROM users WHERE username = 'alexm'),
        'Review',
        'Tried a running plan aimed at complete beginners, six weeks in',
        'Started from basically zero cardio base and this program has been much more sustainable than the couch to whatever plans I tried before, mainly because the walk intervals are longer than I expected going in.',
        '2025-05-08 06:47:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'fitness'),
        (SELECT id FROM users WHERE username = 'nordicfox'),
        'Discussion',
        'Do rest days actually need to be fully sedentary, or does light movement help?',
        'I have heard conflicting advice on this for years, some people swear by complete rest and others say light activity on off days speeds up recovery.',
        '2025-12-10 09:33:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'casual'),
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        'Discussion',
        'What is something you were confidently wrong about for way too long?',
        'Mine is a mispronounced word I said out loud in front of people for probably a decade before someone finally corrected me. What is yours?',
        '2024-10-02 20:16:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'casual'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        'Question',
        'Do you actually use the notes app on your phone, or does everything just sit there forgotten?',
        'Mine has close to four hundred notes at this point, most of which I will genuinely never look at again.',
        '2025-06-27 13:59:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'casual'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        'Discussion',
        'What is a small purchase under twenty dollars that improved your daily life?',
        'Not looking for big lifestyle overhauls, just the small cheap things that quietly made your day to day noticeably better once you had them.',
        '2025-10-14 16:04:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'science'),
        (SELECT id FROM users WHERE username = 'teatime'),
        'Question',
        'Why do we yawn, and why is it so contagious?',
        'Know the basic idea about oxygen and brain temperature but heard that theory has actually fallen out of favor. What is the current thinking on this?',
        '2024-11-01 12:29:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'science'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        'News',
        'Researchers report a new material that conducts electricity at higher temperatures than previous records',
        'Published earlier this week, still needs independent replication before getting too excited, but the initial results are drawing a lot of attention in the field.',
        '2025-03-19 09:41:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'science'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        'Discussion',
        'What is a scientific fact that broke your brain a little when you first learned it?',
        'Mine was learning that the sun makes up over 99 percent of the mass in the entire solar system. Knew intellectually it was big but that particular number still gets me every time I think about it.',
        '2025-08-28 21:53:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'photography'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        'Question',
        'How do you organize thousands of photos without losing your mind?',
        'My library has ballooned past ten thousand images and finding anything specific has become genuinely painful. What system actually works long term?',
        '2024-12-04 11:16:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'photography'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        'PSA',
        'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration',
        'A few sellers have been flagged for shipping cleaning fluid that is too harsh for modern sensor coatings. Worth double checking reviews before buying a cleaning kit from an unfamiliar seller.',
        '2025-04-17 08:29:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'photography'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        'Review',
        'Tried shooting an entire wedding on a rented lens I had never used before',
        'Risky decision in hindsight but it worked out.
 
The autofocus was noticeably faster than my usual lens, which mattered a lot during the ceremony when I could not afford to miss key moments. Low light performance during the reception was also better than expected. The only real downside was the weight, my arm was aching by the end of a ten hour day, but for the image quality tradeoff I would rent it again for future events like this.',
        '2025-09-02 19:07:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'art'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        'Question',
        'How do you deal with comparing your progress to people who started around the same time as you?',
        'Rationally I know everyone develops at a different pace but it is hard not to feel discouraged sometimes.',
        '2025-01-25 14:48:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'art'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        'Discussion',
        'Traditional media versus digital, do you have a strong preference?',
        'Started entirely traditional and moved to digital a few years ago mostly for the undo button, but I still miss the physical texture of paper sometimes.',
        '2025-05-30 10:11:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'art'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        'Review',
        'Took an online course from an artist I have followed for years, worth the price',
        'Went in expecting mostly technique tutorials and got a fair amount of that, but the more valuable part ended up being the sections on critique and how to actually look at your own work objectively. Would recommend if you can catch it on sale.',
        '2025-11-06 16:54:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'sports'),
        (SELECT id FROM users WHERE username = 'paperplane'),
        'Question',
        'How do you get into following a sport as an adult with no background in it?',
        'Never grew up watching this sport and want to actually understand it well enough to enjoy watching, not just nod along when friends talk about it.',
        '2025-04-05 12:37:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'sports'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        'Discussion',
        'A rivalry game that lived up to the hype for once',
        'These usually end up being one-sided or anticlimactic more often than not, but this one actually delivered start to finish.',
        '2025-07-22 21:16:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'sports'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        'News',
        'Longtime coach announces retirement effective at the end of the season',
        'Announcement came as a surprise to most fans given recent comments suggesting another few years were planned. Successor has not been named yet.',
        '2025-10-30 08:52:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'pets'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        'Question',
        'How long did it take your rescue dog to actually settle in?',
        'Brought ours home about two weeks ago and she is still pretty skittish around sudden noises. Wondering what a realistic timeline looks like before things feel more normal.',
        '2025-05-15 09:24:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'pets'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        'Discussion',
        'Pets who have very specific and nonnegotiable opinions about their food bowl',
        'Ours refuses to eat if the bowl is placed even slightly differently than usual, will just sit and stare at it until we move it back. Anyone else dealing with oddly particular pets?',
        '2025-08-19 17:41:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'pets'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        'PSA',
        'A common houseplant is more toxic to cats than most people realize',
        'Found out the hard way after an emergency vet visit that turned out fine in the end, but it was a scary evening. Worth double checking your houseplants against a pet toxicity list if you have curious cats.',
        '2025-12-27 22:03:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'diy'),
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        'Discussion',
        'Small apartment DIY projects that do not require a landlord''s permission',
        'Renting so no drilling into walls or anything permanent, but still want to make the space feel more mine. What has worked for people in similar situations?',
        '2025-11-11 14:29:00+00'
    ),
    (
        (SELECT id FROM boards WHERE name = 'diy'),
        (SELECT id FROM users WHERE username = 'teatime'),
        'Review',
        'Built a simple bookshelf from a kit for the first time, here is how it went',
        'Went in with zero woodworking experience and the instructions were mostly clear, though I had to redo one panel after misreading a measurement.
 
The finished product looks genuinely solid, sturdier than furniture I have bought assembled from a store, and the sense of satisfaction from building it myself was honestly worth more than the money saved. Would try a slightly more ambitious kit next time now that I have the basics down.',
        '2026-01-18 19:35:00+00'
    );