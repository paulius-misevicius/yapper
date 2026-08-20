-- ALL SEED DATA WAS GENERATED WITH AI

INSERT INTO comments (post_id, user_id, parent_comment_id, body, created_at)
VALUES
    (
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'Self-healing usually means it can shrug off hairline scratches, not gouges. Still curious to see independent durability testing before I believe the marketing copy.',
        '2024-02-01 10:04:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        'Agreed, the last "self-healing" coating I owned stopped working after about six months of pocket lint. Hoping this one is actually better.',
        '2024-02-01 11:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        NULL,
        'The crease on foldables bothers me way more than scratch resistance ever would. Did they say anything about that this time around?',
        '2024-02-01 14:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        NULL,
        'The email "smart reply" suggestions are the one I actually keep. Everything else, including the note app summarizer, gets ignored within a week.',
        '2024-03-14 21:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        4,
        'Same experience here. I think the features that survive are the ones that save a small amount of friction repeatedly, not the flashy generate-a-whole-thing ones.',
        '2024-03-14 22:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        NULL,
        'My thermostat app added one and I genuinely cannot figure out what problem it is solving. Setting a temperature was not the hard part.',
        '2024-03-15 01:37:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        6,
        'I think it is a checkbox for the app store listing at this point, "AI powered" sells better on a feature list than it actually performs in daily use.',
        '2024-03-15 08:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        7,
        'That tracks with a conversation I had with someone in product at a company that does this, the feature was greenlit before anyone defined a user problem it solved.',
        '2024-03-15 10:05:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        8,
        'Depressingly common pattern outside AI too honestly, just more visible right now because everyone is chasing the same trend at once.',
        '2024-03-15 12:41:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        9,
        'The trend chasing part is what gets me, half these features will quietly disappear in the next redesign and nobody will mention it again.',
        '2024-03-15 15:18:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        10,
        'Already seen it happen with two apps I use. The button vanished in an update and the changelog did not even acknowledge it existed.',
        '2024-03-15 18:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'Checked mine after reading this, sure enough there was an update sitting there since last month. Appreciate the nudge.',
        '2024-12-01 09:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        NULL,
        'Any chance you have a link to the CVE writeup? Curious how bad the exploit actually is before I bother restarting my whole network tonight.',
        '2024-12-01 10:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'Switched to a split ergo board two years ago after wrist pain and it made a bigger difference than any wrist rest or stretch routine did. Low profile options are more limited but they exist now.',
        '2025-04-02 16:41:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        14,
        'How long was the adjustment period for you? I have heard split boards tank your typing speed for a while before it gets better.',
        '2025-04-02 18:05:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        15,
        'About two weeks to get back to my old speed, a month before it actually felt natural. Worth it in hindsight but it was a rough couple weeks.',
        '2025-04-02 19:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'Lighter switches helped my wrists more than anything else I tried. Worth testing switch weight before you commit to a whole board.',
        '2025-04-03 08:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'Reading the actual error message instead of skimming it and guessing. Took me embarrassingly long to internalize that habit.',
        '2024-02-20 12:09:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'Committing in small, logically separate chunks instead of one giant commit at the end of the day. Made bisecting bugs so much less painful.',
        '2024-02-20 14:55:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        19,
        'This one took me years. I used to treat commits as a chore instead of a tool, huge mistake in hindsight.',
        '2024-02-20 16:18:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'I banned negative boolean names entirely a few years back, isAvailable instead of notAvailable, no exceptions. Cut down on a whole class of double-negative bugs.',
        '2024-08-09 15:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        21,
        'Same rule on my team. The one exception we allow is when the negative genuinely reads better as a guard clause early return, but it has to be justified in review.',
        '2024-08-09 16:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'A linter rule that flags negated booleans has saved me more times than I would like to admit. Cheap way to enforce the habit without relying on memory at 2am.',
        '2024-08-09 20:11:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        23,
        'Which linter are you using for that? Most of the ones I have tried only catch it in obvious cases, not the sneaky double negatives buried in a ternary.',
        '2024-08-10 07:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        24,
        'A custom rule on top of our existing linter rather than an out of the box one, the built in rules mostly missed the ternary case for us too.',
        '2024-08-10 09:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        25,
        'Custom rules are underused for exactly this kind of team specific convention. Might steal this idea for our own style guide.',
        '2024-08-10 12:05:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        NULL,
        'The caching point matches what we ran into. People underestimate how much they were leaning on HTTP caching for free until it is gone.',
        '2025-01-11 18:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        NULL,
        'Query cost analysis is the part nobody talks about until a junior dev writes a five level deep nested query in a demo. Been there.',
        '2025-01-12 07:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        28,
        'Exactly the incident that prompted this whole post honestly. We added query depth limits the next day.',
        '2025-01-12 09:05:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        29,
        'Depth limits alone did not fully solve it for us, we ended up needing per field cost weighting since some shallow fields were still expensive to resolve.',
        '2025-01-12 11:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        30,
        'Good point, we have a couple resolvers that hit external services and those need their own weighting regardless of nesting depth. Did you build that yourselves or use a library?',
        '2025-01-12 13:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        31,
        'Rolled our own, mostly because the existing libraries assumed a cost model that did not match how our external calls were billed.',
        '2025-01-12 16:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        32,
        'This is the part of the migration nobody mentions in the blog posts you referenced in the original review. Would be a good writeup on its own.',
        '2025-01-12 19:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        33,
        'Might actually put one together once the dust settles a bit more, there is definitely a gap in the existing writing on this specific problem.',
        '2025-01-12 21:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A popular npm package pushed a breaking change as a patch version last night'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'This is why I lockfile everything and pin exact versions on anything load bearing. Semver is a suggestion, not a contract, apparently.',
        '2025-06-19 08:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A popular npm package pushed a breaking change as a patch version last night'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'Which package was it? Trying to figure out if this affects our stack before it hits our build.',
        '2025-06-19 09:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        NULL,
        'No combat footage this early usually means either it is not final yet or they know it is the weakest part of the pitch. Cautiously optimistic either way.',
        '2025-03-01 11:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        37,
        'That was my read too. Visuals alone do not sell a remaster of this particular game for me, the combat was always the divisive part.',
        '2025-03-01 13:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        (SELECT id FROM users WHERE username = 'neonriver'),
        NULL,
        'Two years of teasing for a two minute trailer with no gameplay is a bold choice. Hope it was worth the wait.',
        '2025-03-01 15:55:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        NULL,
        'Barely remember the story of the game I am thinking of but I could still hum the boss theme a decade later. It was the specific moment it played that did it.',
        '2025-08-20 22:14:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        40,
        'That is exactly it for me too, it is rarely the composition in isolation, it is the scene it got attached to.',
        '2025-08-20 23:01:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Went back to a 2011 RPG after years away, holds up better than expected'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        NULL,
        'Writing from that era holds up surprisingly often, it is usually the animation and combat feedback that shows its age first.',
        '2025-09-14 20:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        NULL,
        'Happens to me most with films that hide their theme in the first act. Knowing the ending changes which lines you actually hear.',
        '2025-02-04 15:38:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'Curious which one you mean without spoiling it for people who have not seen it, feel free to tag it clearly if you want to say more.',
        '2025-02-04 17:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        NULL,
        'Long static shots and minimal dialogue, ambient score, nothing with a plot twist you would feel bad about missing. Should not be hard to find a handful that fit.',
        '2025-05-19 23:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        NULL,
        'I do this too, it has genuinely improved how fast I fall asleep compared to scrolling on my phone beforehand.',
        '2025-05-20 06:11:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Director confirms sequel is officially in early development'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        NULL,
        'Taking their time after the mixed reception is the right call honestly. Rushed sequels are usually the ones people remember worst.',
        '2025-11-02 13:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Albums that work best as a single uninterrupted listen'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        NULL,
        'Concept albums lose almost everything on shuffle for me, the track order is doing half the storytelling work.',
        '2024-04-21 00:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Albums that work best as a single uninterrupted listen'),
        (SELECT id FROM users WHERE username = 'paperplane'),
        48,
        'Even outside concept albums, a well sequenced tracklist with a slow build before the loud track hits different than hearing that same track cold.',
        '2024-04-21 09:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        NULL,
        'Small rooms just sound better, less for the mix to fight against. Glad you got a good one, those nights stick with you.',
        '2024-09-30 22:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        NULL,
        'Which artist, credit where credit is due for a set like that.',
        '2024-10-01 08:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you actually discover new music these days?'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        NULL,
        'Still dig through blogs and a couple radio archives. The algorithm gave up recommending anything outside my top forty artists a long time ago.',
        '2025-03-08 17:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you actually discover new music these days?'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        52,
        'Any blogs you would actually recommend? Feels like most of the good ones from a few years ago have gone quiet.',
        '2025-03-08 19:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        NULL,
        'An unreliable narrator done well genuinely rewires how you approach a first person opening chapter forever after. Great example.',
        '2024-06-02 11:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        (SELECT id FROM users WHERE username = 'nordicfox'),
        NULL,
        'For me it was a book that used footnotes as an unreliable second voice. Have not trusted a footnote at face value since.',
        '2024-06-02 14:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Looking for nonfiction that reads like a novel'),
        (SELECT id FROM users WHERE username = 'teatime'),
        NULL,
        'Narrative nonfiction built around a single tense event tends to work best for that novel feeling, worth searching that specific term.',
        '2024-10-11 15:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Finally finished the trilogy everyone recommended, mixed feelings'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        NULL,
        'The sagging middle book is such a common trilogy problem, it is almost a genre convention at this point.',
        '2025-07-07 19:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Finally finished the trilogy everyone recommended, mixed feelings'),
        (SELECT id FROM users WHERE username = 'teatime'),
        57,
        'Rushed endings after a slow middle feel connected too, like the author realized late how much page count the setup had eaten.',
        '2025-07-07 21:18:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        (SELECT id FROM users WHERE username = 'retrograde'),
        NULL,
        'Check if the airport itself offers a transit program first, a lot of major hubs have one that lets you leave for exactly this situation.',
        '2025-05-20 11:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        NULL,
        'Which airport, some of them are much more generous about this than others and it changes the advice a lot.',
        '2025-05-20 13:05:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Heads up, a lot of train operators in Europe are on strike this month'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        NULL,
        'Appreciate the heads up, rebooking on short notice during a strike is brutal on price. Switching my leg to a refundable fare now just in case.',
        '2025-06-30 08:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Heads up, a lot of train operators in Europe are on strike this month'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        NULL,
        'Which operators specifically? Trying to figure out if my route is affected before I panic book anything.',
        '2025-06-30 10:19:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        NULL,
        'Ended up somewhere on a delayed layover once and it turned out to be the highlight of the whole trip, completely by accident. Love this question.',
        '2025-01-03 16:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is the one kitchen tool you didn''t think you needed until you had it?'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        NULL,
        'Instant read thermometer for me too, fixed my chicken breast anxiety almost overnight. Should not have waited so long to buy one.',
        '2024-07-15 13:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is the one kitchen tool you didn''t think you needed until you had it?'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        NULL,
        'A cheap kitchen scale did this for me, baking got dramatically more consistent once I stopped eyeballing cups.',
        '2024-07-15 18:07:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is the one kitchen tool you didn''t think you needed until you had it?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        65,
        'The scale is such an underrated recommendation, cup measurements for flour are basically random depending on how packed it is.',
        '2024-07-15 19:41:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Simple weeknight dinners that don''t feel like the same five meals on repeat?'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        NULL,
        'Sheet pan dinners saved my weeknight rotation, one pan, minimal cleanup, and you can swap the protein and veg endlessly without it feeling repetitive.',
        '2024-11-08 20:14:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Simple weeknight dinners that don''t feel like the same five meals on repeat?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        NULL,
        'Second the sheet pan suggestion. Also keeping two or three sauces on hand lets one boring base ingredient taste like four different meals.',
        '2024-11-09 07:38:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'The low and slow tomato reduction trick genuinely transfers to a lot of other sauces, good callout. Most viral recipes oversell the one pan claim though, you are right about that.',
        '2025-04-25 21:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        NULL,
        'Ingredients and rough steps would be great if you feel like sharing, sounds worth trying even with the extra dishes.',
        '2025-04-26 09:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        NULL,
        'Switching the metric I track helped a lot, moving from scale weight to a lift number kept the middle stretch from feeling like nothing was happening.',
        '2024-09-02 07:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        (SELECT id FROM users WHERE username = 'nordicfox'),
        71,
        'This is underrated advice. The scale is the noisiest possible signal and it is usually the one people fixate on during the boring middle.',
        '2024-09-02 10:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        (SELECT id FROM users WHERE username = 'alexm'),
        NULL,
        'Having a training partner who expects you to show up did more for my consistency than any app or tracker ever has.',
        '2024-09-02 15:07:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        (SELECT id FROM users WHERE username = 'retrograde'),
        NULL,
        'Adjustable dumbbells were my best purchase too, replaced a whole rack in a fraction of the space just like you said. The resistance bands sit in a drawer here as well.',
        '2025-02-14 09:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        (SELECT id FROM users WHERE username = 'alexm'),
        NULL,
        'A doorway pull-up bar and a cheap bench covered most of what I actually needed. The ab wheel gathering dust seems to be a universal experience.',
        '2025-02-14 12:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        (SELECT id FROM users WHERE username = 'alexm'),
        NULL,
        'Laying out tomorrow''s clothes the night before sounds trivial but it removed one small decision from my mornings and somehow that mattered more than I expected.',
        '2026-01-20 13:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        NULL,
        'Writing tomorrow''s three priorities down before closing my laptop for the day. Small thing, but it means I stop thinking about work the second I close the lid.',
        '2026-01-20 16:09:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        77,
        'I do a version of this with a physical notebook instead of my phone, keeping it off screen helps it actually feel like closing the loop.',
        '2026-01-20 18:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        NULL,
        'Mine is somewhere past eighty at this point and half of them have probably closed since I added them. Feels less like a list and more like an aspiration.',
        '2024-11-01 18:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        NULL,
        'The sheer volume of newly confirmed planets is the more interesting story to me than any single headline candidate. Good context in the writeup.',
        '2024-11-15 10:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        NULL,
        'Do you have a source for the raw dataset? Curious to look at the size distribution myself.',
        '2024-11-15 12:58:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        NULL,
        'The intuition that clicked for me was thinking of everything moving through spacetime at a fixed total speed. Move faster through space and you necessarily move slower through time to keep the total constant.',
        '2025-04-09 15:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        82,
        'That is the first explanation of this I have read that actually built intuition instead of just restating the fact. Thank you.',
        '2025-04-09 17:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        83,
        'Following up on this, does the fixed total speed framing also explain gravitational time dilation, or is that actually a separate mechanism entirely?',
        '2025-04-09 18:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        84,
        'Related but not quite the same framing, gravitational time dilation comes from spacetime curvature rather than relative velocity through it, though both fall under general relativity.',
        '2025-04-09 20:11:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        85,
        'Is there an intuition level explanation for the curvature version too, or does that one require the math to actually click?',
        '2025-04-09 21:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        86,
        'A rough one is that clocks deeper in a gravity well tick slower because light itself has to climb out of a steeper "valley" in spacetime, losing energy on the way, which is observed as time running slow from far away.',
        '2025-04-10 07:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        87,
        'That valley analogy is genuinely the clearest version of gravitational time dilation I have come across, better than every popular science video I have watched on it.',
        '2025-04-10 09:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        88,
        'Agreed, this whole subthread should honestly be its own pinned post for this board, way clearer than most of the explainers I have seen elsewhere.',
        '2025-04-10 11:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        89,
        'Seconded, might actually put together a proper writeup pulling this whole thread together if nobody beats me to it.',
        '2025-04-10 13:48:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        NULL,
        'Moving your feet instead of zooming is such an underrated lesson. I did the same exercise for three months and my composition improved more than a year of watching tutorials did.',
        '2025-01-02 12:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'Which focal length did you pick for the year? That choice seems like it would shape the habit a lot.',
        '2025-01-02 15:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        NULL,
        'Hard to say without seeing the actual shots, but punchy contrast reads as intentional when the shadows still have some detail left. If the blacks are fully crushed it starts to look heavy handed.',
        '2025-06-11 21:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        93,
        'Good rule of thumb, shadow detail is usually the tell between stylized and just overdone.',
        '2025-06-11 22:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        NULL,
        'I force myself to finish about half of them, mostly the ones where I think the finishing itself will teach me something even if the piece never becomes a favorite.',
        '2025-02-19 16:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'I abandon most of mine honestly, but I keep the folder around since a few have ended up as useful reference later even unfinished.',
        '2025-02-19 19:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        NULL,
        'Started with a private group of two other artists before posting rough work publicly, lowered the stakes enough to actually build the habit.',
        '2025-08-01 11:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        97,
        'This is a great middle step, jumping straight to public feedback is a big ask if you have never done it before.',
        '2025-08-01 13:19:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'Nobody was talking about that lineup going in, then they nearly pulled off the upset in the final minutes. One of the highlights of the whole season for me too.',
        '2025-04-01 20:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Major trade finalized this morning, reactions are split'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'Every big trade looks split for the first 48 hours, ask again in a season and see who was actually right.',
        '2025-09-20 14:35:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Major trade finalized this morning, reactions are split'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        NULL,
        'Keeping this respectful please, saw a couple comments elsewhere getting personal about individual players already.',
        '2025-09-20 16:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        NULL,
        'Mine stared at an empty corner of the ceiling for a full ten minutes once. No context, no explanation, just stared, then walked away like nothing happened.',
        '2025-05-10 11:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        102,
        'This happens with mine too and I have genuinely stopped trying to find a rational explanation for it at this point.',
        '2025-05-10 12:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        NULL,
        'This happened with my old cat too, ended up being mild age related confusion the vet called it disorientation at night specifically. Not a vet myself, but it might be worth asking about that specifically since bloodwork alone would not catch it.',
        '2025-11-23 08:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        NULL,
        'Definitely worth a follow up if it keeps up even with normal bloodwork, but glad to hear appetite and litter habits are still fine in the meantime.',
        '2025-11-23 10:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        NULL,
        'The lead paint layer is the part that would have caught me off guard too. Good on you for catching it and gearing up properly before sanding through it.',
        '2025-08-15 17:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        NULL,
        'Curb finds always look like a quick weekend job in the photos and never are. Looks great though, worth the extra safety gear cost.',
        '2025-08-16 09:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Best way to soundproof a home office without major construction?'),
        (SELECT id FROM users WHERE username = 'teatime'),
        NULL,
        'A heavy rug plus thick curtains got me most of the way there for renter friendly options. Acoustic panels on the wall helped with echo more than actual outside noise though, worth knowing the difference before buying.',
        '2025-10-05 09:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Best way to soundproof a home office without major construction?'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        108,
        'This distinction matters a lot and most people shopping for panels do not realize it until after they have bought them.',
        '2025-10-05 11:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is it worth switching to a password manager at this point, or overkill?'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        NULL,
        'Reusing three passwords across forty accounts means one breach anywhere cascades into all of them. Worth the half hour of setup, not overkill at all.',
        '2024-01-20 09:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is it worth switching to a password manager at this point, or overkill?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        110,
        'Seconding this, and most managers will import your saved browser passwords in one step so it is less setup than it sounds like.',
        '2024-01-20 11:08:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        NULL,
        'Just checked behind my desk after reading this and found one with the same discoloration near the plug. Tossed it immediately, thank you for the reminder.',
        '2024-09-11 07:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'Fraying near the connector is usually from bend stress. Worth checking cables that live coiled tight in a bag too, not just the ones behind furniture.',
        '2024-09-11 09:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        NULL,
        'The thin app ecosystem is the tradeoff that always gets left out of the marketing. Good to see it called out plainly here.',
        '2025-05-30 22:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        NULL,
        'Battery life numbers like that are hard to go back from once you get used to them. Curious how the handwriting recognition handles messier handwriting though.',
        '2025-05-31 08:35:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        NULL,
        'On small teams I have found it helps to explicitly separate "must fix" from "nice to have" in every review comment, keeps it from feeling like nitpicking either way.',
        '2024-03-05 13:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        116,
        'This is a good split. We also started rotating who reviews first so it does not always feel like one person is just rubber stamping the other.',
        '2024-03-05 15:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'teatime'),
        NULL,
        'Rough edges with certain plugins is basically guaranteed on day one of any major version bump. Waiting a month or two before migrating anything load bearing.',
        '2025-02-27 11:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'Faster build times alone might be worth the migration headache for our monorepo. Going to read the migration guide this weekend.',
        '2025-02-27 14:03:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        119,
        'Monorepo migrations for this kind of compiler swap are usually where the real pain shows up, curious how big yours is.',
        '2025-02-27 16:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        120,
        'Somewhere around forty packages, most of them small, but a couple of the older ones have a lot of legacy plugin config to untangle first.',
        '2025-02-27 18:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        121,
        'The legacy plugin config is exactly what bit us on our last major bump too, worth doing an inventory of which plugins actually still have maintained forks before you start.',
        '2025-02-27 21:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        122,
        'Good call, going to build that inventory before touching anything. Did you find a clean way to audit which plugins were actually load bearing versus leftover cruft?',
        '2025-02-28 08:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        123,
        'We temporarily disabled each one in a branch and ran the full test suite, anything that did not break a test got flagged for removal review.',
        '2025-02-28 10:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        124,
        'That is a clever cheap audit, assuming your test coverage is decent enough to trust the negative result. Did anything slip through that you only caught later in production?',
        '2025-02-28 13:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        125,
        'One did, a plugin handling a rare locale formatting edge case that was not covered by any test. Took two weeks to notice in production, added a regression test immediately after.',
        '2025-02-28 15:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        126,
        'Good reminder to specifically check locale and formatting coverage before we start our own audit, that is exactly the kind of thing that would slip through unnoticed here too.',
        '2025-02-28 18:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        127,
        'Might be worth writing a small checklist out of this whole thread honestly, locale formatting, date handling, and anything touching currency seem like the recurring blind spots.',
        '2025-02-28 20:35:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        128,
        'Agreed, saving this whole thread as our internal migration checklist before we start next week. Thanks for walking through the whole process here.',
        '2025-02-28 23:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'The type system catching bugs you did not know existed is such a common experience with this kind of rewrite. Great motivation for anyone on the fence about trying it.',
        '2025-07-14 21:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        130,
        'Same thing happened when I ported a Python tool to Rust, found two silent bugs the moment the compiler forced me to handle every case.',
        '2025-07-14 23:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        (SELECT id FROM users WHERE username = 'neonriver'),
        NULL,
        'A good photo mode or sandbox mode keeps me around long after the story wraps up more than any endgame grind ever has.',
        '2024-03-02 08:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        NULL,
        'Mic clarity matters more than the headphone side for competitive games honestly, worth prioritizing that over positional audio marketing claims.',
        '2024-11-04 15:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        NULL,
        'Backed mine up the second I saw this thread, appreciate the warning before I updated blind like I usually do.',
        '2025-06-05 12:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        NULL,
        'Which platform specifically, want to make sure I am not affected before I update tonight.',
        '2025-06-05 14:07:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        (SELECT id FROM users WHERE username = 'neonriver'),
        NULL,
        'The meta progression slowdown in the middle hours is the exact complaint I have seen from most people who put real time into this one. Sounds like the core loop still carries it though.',
        '2025-12-01 19:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Looking for a movie night pick that works for a mixed group of tastes'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'A well made heist film usually threads that needle, enough tension for horror fans and enough charm for the romcom crowd.',
        '2024-04-18 16:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        (SELECT id FROM users WHERE username = 'nightowl'),
        NULL,
        'The character actors who show up for fifteen minutes and completely reset the tone of a scene deserve way more credit than they usually get.',
        '2024-12-19 21:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        (SELECT id FROM users WHERE username = 'quietstorm'),
        NULL,
        'Original cast attached is the one detail that actually makes me optimistic here, most of these adaptations lose that and it shows immediately.',
        '2025-08-06 15:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        NULL,
        'I do a full purge once a year, any playlist I have not touched in twelve months gets deleted no matter how good the name sounded at the time.',
        '2024-06-15 12:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Vinyl collectors, how do you decide what actually earns a physical copy?'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        NULL,
        'Album art and liner notes are exactly my filter too. If it is a great collection of singles I keep it digital, if it feels like a complete work it earns shelf space.',
        '2025-09-09 18:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        NULL,
        'Giving myself permission to quit was the single best reading habit change I ever made, read so much more once the obligation feeling disappeared.',
        '2024-07-19 10:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        (SELECT id FROM users WHERE username = 'teatime'),
        NULL,
        'A meandering middle third is such a common debut novel problem, feels like a lot of first books do not have an editor willing to cut hard yet.',
        '2025-10-25 21:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        (SELECT id FROM users WHERE username = 'retrograde'),
        NULL,
        'Solo travel forces you into more spontaneous decisions since there is no group consensus to wait on. Group trips win on shared memories though, hard to pick one over the other.',
        '2024-08-01 14:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How far in advance do you actually book flights for the best price?'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        NULL,
        'I have tracked prices for a few years now on my own routes and the honest answer is it varies wildly by route and season, the magic number articles are mostly guessing.',
        '2025-03-27 09:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried packing for a two week trip with only a carry-on, lessons learned'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        NULL,
        'Overpacking shoes is such a universal carry-on mistake. One versatile pair and one backup covers almost every situation.',
        '2025-11-30 16:55:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        NULL,
        'A splash of good vinegar or citrus at the very end of cooking punches way above its price for how much it brightens a dish.',
        '2024-08-22 19:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        NULL,
        'Fresh herbs stirred in right at the end instead of cooked the whole time. Cheap and makes almost anything taste more put together.',
        '2024-08-23 08:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        NULL,
        'A specific brand of fruit snack did this to me, ate it constantly as a kid and now the smell alone is enough to put me off.',
        '2025-04-13 12:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'That viral kitchen gadget everyone is buying is mostly a single-use plastic paperweight'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'Same experience with a different gadget last year. A good knife and a decent cutting board do ninety percent of what these things claim to do.',
        '2026-02-08 13:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        NULL,
        'A short ramp set on the first exercise itself covers most of what a separate warm up would, saves a lot of time versus doing a whole general warm up routine first.',
        '2024-09-25 08:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried a running plan aimed at complete beginners, six weeks in'),
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        NULL,
        'Longer walk intervals than expected is exactly what made a beginner plan click for me too, less intimidating start made it much easier to actually stick with.',
        '2025-05-08 07:55:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        (SELECT id FROM users WHERE username = 'retrograde'),
        NULL,
        'Light movement on rest days has worked better for me than full sedentary rest, an easy walk seems to help more than sitting still all day, though I know that is anecdotal rather than a real study.',
        '2025-12-10 10:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        NULL,
        'Thought a common phrase was spelled completely differently for most of my adult life, said it out loud constantly, nobody corrected me until a coworker finally did.',
        '2024-10-02 21:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Do you actually use the notes app on your phone, or does everything just sit there forgotten?'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        NULL,
        'Mine is a graveyard of half finished grocery lists and one cryptic note from two years ago that just says "ask about the thing." Never figured out what the thing was.',
        '2025-06-27 15:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a small purchase under twenty dollars that improved your daily life?'),
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        NULL,
        'A cheap phone stand for the kitchen counter, sounds silly but I use it every single day for recipes and calls while cooking.',
        '2025-10-14 17:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Why do we yawn, and why is it so contagious?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        NULL,
        'The brain cooling theory has more recent support than the oxygen theory from what I have read, worth searching that specifically for the current thinking.',
        '2024-11-01 13:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        NULL,
        'This exact field has had a few high profile results not survive independent replication in recent years, cautious optimism is the right posture here.',
        '2025-03-19 11:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'What is a scientific fact that broke your brain a little when you first learned it?'),
        (SELECT id FROM users WHERE username = 'teatime'),
        NULL,
        'Learning that most of an atom is empty space and yet you still cannot walk through a wall took me an embarrassingly long time to actually accept.',
        '2025-08-28 22:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you organize thousands of photos without losing your mind?'),
        (SELECT id FROM users WHERE username = 'wanderlust'),
        NULL,
        'A consistent folder structure by year and event, plus star rating only the actual keepers, made mine searchable again after years of chaos.',
        '2024-12-04 12:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        NULL,
        'Good warning, cleaned my sensor with a cheap kit last year and noticed some faint streaking afterward that I never fully traced back to the solution. Makes a lot more sense now.',
        '2025-04-17 09:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        NULL,
        'Risky call for a wedding specifically, no room for a reshoot if the lens had let you down. Glad it paid off, the low light performance tradeoff sounds worth the arm ache.',
        '2025-09-02 20:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you deal with comparing your progress to people who started around the same time as you?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        NULL,
        'I started keeping my own old work visible on a shelf instead of only comparing to others online, comparing to past me is a much healthier baseline.',
        '2025-01-25 16:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        NULL,
        'Moved to digital mostly for undo too, but I still keep a sketchbook for the initial idea stage. Something about the physical page loosens up early ideas for me.',
        '2025-05-30 12:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Took an online course from an artist I have followed for years, worth the price'),
        (SELECT id FROM users WHERE username = 'kiwibird'),
        NULL,
        'The critique sections being the actually valuable part matches my experience with a different course too. Technique tutorials are everywhere for free, learning to look at your own work objectively is rarer.',
        '2025-11-06 18:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How do you get into following a sport as an adult with no background in it?'),
        (SELECT id FROM users WHERE username = 'crispytoast'),
        NULL,
        'Watching one full season of highlight reels before ever watching a live game helped me learn the flow without the commitment of a full match right away.',
        '2025-04-05 14:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A rivalry game that lived up to the hype for once'),
        (SELECT id FROM users WHERE username = 'paperplane'),
        NULL,
        'These usually fizzle in the second half, glad this one actually delivered start to finish for once.',
        '2025-07-22 22:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        NULL,
        'The surprise factor makes me wonder if there is more to this story than what got said in the announcement. Curious who they name as successor.',
        '2025-10-30 10:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        NULL,
        'Ours took close to three months before the skittishness really eased up, two weeks in is still very early days. Consistency in routine seemed to help more than anything else.',
        '2025-05-15 11:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        (SELECT id FROM users WHERE username = 'frogboy'),
        169,
        'Three months matches what we experienced too. It felt so slow in the moment but looking back it really was not that long in the grand scheme.',
        '2025-05-15 14:22:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        (SELECT id FROM users WHERE username = 'bluecomet'),
        NULL,
        'Ours will not eat if the bowl is even slightly rotated from its usual position. No idea how she even notices, but she absolutely does every time.',
        '2025-08-19 18:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'A common houseplant is more toxic to cats than most people realize'),
        (SELECT id FROM users WHERE username = 'sunnydays'),
        NULL,
        'Glad it turned out fine. Went through my whole apartment checking a toxicity list after reading this, found two plants I had no idea were a problem.',
        '2025-12-28 07:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        (SELECT id FROM users WHERE username = 'bytebandit'),
        NULL,
        'Command strip picture ledges made the biggest visual difference for me in a rental, no drilling and they hold more weight than I expected.',
        '2025-11-11 15:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        NULL,
        'The satisfaction of building something yourself really does outweigh the money saved most of the time. Congrats on the finished piece, sounds like a solid first project.',
        '2026-01-18 20:50:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        (SELECT id FROM users WHERE username = 'analogkid'),
        NULL,
        'Misreading a measurement and having to redo a panel is basically a rite of passage on a first kit build. Which materials and tools did the kit actually include versus what you had to buy separately?',
        '2026-01-19 08:12:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        29,
        'Did you go with a hard depth limit or a computed cost score? We tried a flat depth limit first and it ended up blocking some completely legitimate queries.',
        '2025-01-12 10:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        176,
        'Computed cost score in the end, weighted by field and list size. Took a couple weeks to tune but it stopped false-flagging the legitimate deep queries our reporting dashboard needed.',
        '2025-01-12 12:05:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'wildfern'),
        177,
        'That tuning period sounds like the real hidden cost nobody budgets for. Did you build the weighting system in house or use an existing library for it?',
        '2025-01-12 14:18:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        178,
        'Started with an existing cost-analysis library and ended up forking it after a few weeks because our schema had some unusual connection patterns it did not handle well out of the box.',
        '2025-01-12 16:40:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        179,
        'Forking a dependency that early is a pretty strong signal the ecosystem tooling still is not mature for this. Curious if you have kept the fork in sync with upstream at all or if it has fully diverged by now.',
        '2025-01-12 19:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        180,
        'Mostly diverged at this point honestly, we cherry pick upstream fixes when they are relevant but the core weighting logic is entirely our own now.',
        '2025-01-13 07:14:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        181,
        'At what point does maintaining a fork like that become its own project with its own headcount cost? Seems like it could quietly become a second migration in disguise.',
        '2025-01-13 09:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        182,
        'Fair concern, we set an informal rule that if it ever needs more than a day a month of upkeep we reassess and consider going back to a simpler flat depth limit instead.',
        '2025-01-13 11:30:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'mossyrock'),
        183,
        'That kind of pre-committed exit condition is smart, way easier to make that call calmly ahead of time than in the middle of a maintenance crunch six months from now.',
        '2025-01-13 13:58:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        184,
        'Learned that lesson the hard way on a previous project where we kept patching a fork indefinitely with no exit plan. Not repeating that mistake here.',
        '2025-01-13 16:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        6,
        'I would bet it exists purely so the product page can list "AI-powered" as a bullet point. A lot of these features are marketing artifacts more than user requests.',
        '2024-03-15 08:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'codewanderer'),
        186,
        'That tracks with a conversation I had with someone who works in product at a company like this. Apparently a feature can get greenlit just from investor pressure to show AI roadmap items, independent of any user research at all.',
        '2024-03-15 10:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        187,
        'That would explain why so many of these features feel identical across totally unrelated products, they are being built to satisfy the same external pressure rather than an actual internal use case.',
        '2024-03-15 13:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        188,
        'Feels similar to the blockchain hype cycle from a few years back honestly, same pattern of bolting a trendy technology onto a product regardless of fit, just with a different buzzword this time.',
        '2024-03-15 15:37:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        189,
        'The difference is at least some of the AI features occasionally solve a real problem, whereas most of the blockchain integrations I saw solved absolutely nothing that a normal database could not.',
        '2024-03-15 18:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        190,
        'Fair distinction. Maybe the better framing is that the technology itself is not the problem, it is shipping a feature before anyone has validated there is a need for it.',
        '2024-03-15 20:33:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        191,
        'Agreed, that framing applies to basically every hype cycle in this industry if you go back far enough, not just this one.',
        '2024-03-16 07:52:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        (SELECT id FROM users WHERE username = 'bughunter'),
        192,
        'This thread wandered pretty far from thermostats but I am not mad about it, good discussion.',
        '2024-03-16 09:15:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        16,
        'Did you go fully split with a gap between the two halves, or one of the boards that is split but still connected in the middle? Trying to decide how drastic a change to start with.',
        '2025-04-02 21:10:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        194,
        'Went fully split with a real gap between them, shoulder-width apart. Rougher adjustment at first but I do not think I would have gotten the same posture benefit from a connected split board.',
        '2025-04-03 08:44:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        195,
        'That makes sense, easing in with a connected board might just be delaying the actual adjustment period rather than avoiding it. Might just rip the bandaid off and go fully split from the start then.',
        '2025-04-03 11:20:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        196,
        'That was my logic too. Also worth deciding on a column-staggered versus ortholinear layout before you buy, that choice affects the learning curve as much as the split itself does.',
        '2025-04-03 14:02:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        197,
        'Had not even considered that as a separate axis of difficulty on top of the split itself. Sounds like I should budget more like six weeks than two.',
        '2025-04-03 16:47:00+00'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Mechanical keyboard for someone who types 10+ hours a day?'),
        (SELECT id FROM users WHERE username = 'stacktrace'),
        198,
        'Six weeks is a realistic number if you are changing both things at once. Just do not schedule the switch during a high pressure work stretch if you can help it.',
        '2025-04-03 19:30:00+00'
    );