-- ALL SEED DATA WAS GENERATED WITH AI

INSERT INTO votes (user_id, value, post_id, comment_id)
VALUES
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        117
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        188
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        -1,
        NULL,
        117
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        1
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        19
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        117
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        117
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        190
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        148
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        193
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        3
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        -1,
        NULL,
        193
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        116
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        23
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        110
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        19
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        110
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        (SELECT id FROM posts WHERE title = 'Looking for a movie night pick that works for a mixed group of tastes'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        NULL,
        191
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        21
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        49
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        -1,
        NULL,
        148
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        191
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        65
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        -1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        65
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        51
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you comment your code more or less than you used to?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        80
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        67
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        80
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        -1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        51
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        -1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize thousands of photos without losing your mind?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        25
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        79
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        21
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        140
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        154
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        191
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        10
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        144
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        68
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        NULL,
        188
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        -1,
        NULL,
        8
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        144
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        67
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you comment your code more or less than you used to?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Simple weeknight dinners that don''t feel like the same five meals on repeat?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        51
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize thousands of photos without losing your mind?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        144
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        147
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you deal with comparing your progress to people who started around the same time as you?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        81
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        18
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        65
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        -1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        7
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        NULL,
        7
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        92
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        31
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        120
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        179
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        -1,
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        32
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        -1,
        NULL,
        43
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        119
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        193
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        -1,
        NULL,
        22
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        91
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        176
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        68
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        119
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        39
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        96
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        88
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        8
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Albums that work best as a single uninterrupted listen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        3
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        199
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        183
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        NULL,
        193
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get into following a sport as an adult with no background in it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        -1,
        NULL,
        88
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        188
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        8
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        123
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        83
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        72
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        51
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        117
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        145
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        43
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get into following a sport as an adult with no background in it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        148
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        120
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Simple weeknight dinners that don''t feel like the same five meals on repeat?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        147
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        96
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        166
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        NULL,
        85
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        166
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        -1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        NULL,
        192
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        45
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        72
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you actually discover new music these days?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        89
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        166
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get into following a sport as an adult with no background in it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        18
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        43
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        37
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        128
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        176
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        99
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        176
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for nonfiction that reads like a novel'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        178
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        170
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        132
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize thousands of photos without losing your mind?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        113
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        -1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        176
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        -1,
        NULL,
        99
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Albums that work best as a single uninterrupted listen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        183
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        160
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        73
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        -1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get into following a sport as an adult with no background in it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        92
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        -1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'A popular npm package pushed a breaking change as a patch version last night'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        65
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        169
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        -1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        149
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        65
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        43
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        68
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        197
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        -1,
        NULL,
        18
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        67
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        80
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        85
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        102
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        15
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for nonfiction that reads like a novel'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        96
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        149
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        -1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you actually use the notes app on your phone, or does everything just sit there forgotten?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        112
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        46
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        29
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        8
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        155
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        35
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        21
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        26
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'A popular npm package pushed a breaking change as a patch version last night'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        126
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        12
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        -1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        135
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        8
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        7
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        135
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        93
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        131
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        189
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        198
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        81
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        96
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        199
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        -1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you deal with comparing your progress to people who started around the same time as you?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'A rivalry game that lived up to the hype for once'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        NULL,
        18
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        (SELECT id FROM posts WHERE title = 'Why do we yawn, and why is it so contagious?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        134
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        -1,
        NULL,
        81
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        160
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        9
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        18
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        -1,
        NULL,
        192
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        145
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        NULL,
        144
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        161
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        NULL,
        139
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        170
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        142
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        NULL,
        43
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        36
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        193
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        -1,
        (SELECT id FROM posts WHERE title = 'Games you kept playing well past the credits rolling'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        183
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        121
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        -1,
        NULL,
        169
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        62
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        12
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        62
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Heads up, a lot of train operators in Europe are on strike this month'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        27
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Finally finished the trilogy everyone recommended, mixed feelings'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        97
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'Heads up, a lot of train operators in Europe are on strike this month'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        131
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        161
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        107
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        67
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        61
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        69
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        147
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        119
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        107
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Heads up, a lot of train operators in Europe are on strike this month'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        -1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        131
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        29
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        49
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Vinyl collectors, how do you decide what actually earns a physical copy?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        92
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        199
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a running plan aimed at complete beginners, six weeks in'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        120
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        46
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        191
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        72
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        41
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Went back to a 2011 RPG after years away, holds up better than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Is it worth switching to a password manager at this point, or overkill?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        161
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Why do we yawn, and why is it so contagious?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        177
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        -1,
        NULL,
        147
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        67
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'A rivalry game that lived up to the hype for once'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        36
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        121
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize thousands of photos without losing your mind?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Major trade finalized this morning, reactions are split'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        NULL,
        195
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        67
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        31
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        1
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        132
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        108
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for a movie night pick that works for a mixed group of tastes'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        190
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        115
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        -1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        19
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        27
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        -1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for a movie night pick that works for a mixed group of tastes'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        29
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        20
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you actually use the notes app on your phone, or does everything just sit there forgotten?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        5
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        NULL,
        1
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Why do we yawn, and why is it so contagious?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        119
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Major trade finalized this morning, reactions are split'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        144
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        -1,
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        92
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        79
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        NULL,
        9
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        148
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        50
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        90
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        155
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        57
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a running plan aimed at complete beginners, six weeks in'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        85
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        96
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        120
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        66
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        131
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        11
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        NULL,
        181
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        46
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        14
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        108
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'A rivalry game that lived up to the hype for once'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        115
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        -1,
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Director confirms sequel is officially in early development'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        34
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        57
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        -1,
        NULL,
        12
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        -1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        NULL,
        97
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        -1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        24
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        170
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        176
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        41
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        14
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        186
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        50
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        31
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        62
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        120
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        34
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        -1,
        NULL,
        102
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        54
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        51
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        (SELECT id FROM posts WHERE title = 'Tried packing for a two week trip with only a carry-on, lessons learned'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        -1,
        NULL,
        119
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        93
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        165
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        149
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        13
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        7
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        NULL,
        179
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish pieces you''ve fallen out of love with, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        43
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        53
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        16
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        14
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for nonfiction that reads like a novel'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        NULL,
        79
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        115
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        124
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        92
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        113
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        195
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        -1,
        NULL,
        108
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        63
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        164
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        155
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        141
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Why do we yawn, and why is it so contagious?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        -1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        NULL,
        165
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        119
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Researchers report a new material that conducts electricity at higher temperatures than previous records'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        25
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        18
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        57
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Solo travel versus traveling with others, which do you actually prefer?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        83
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        121
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Is it worth switching to a password manager at this point, or overkill?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        -1,
        NULL,
        97
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        136
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        14
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        191
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        16
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        -1,
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        99
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        152
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        -1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        157
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        89
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        159
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        179
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        81
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        167
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        49
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        -1,
        NULL,
        72
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'A rivalry game that lived up to the hype for once'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        40
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        104
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        161
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'New foldable phone announced with a "self-healing" screen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        53
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        121
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        46
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'A common houseplant is more toxic to cats than most people realize'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        168
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        164
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        76
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        -1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        143
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        166
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        46
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        193
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a coding habit you picked up that you wish you learned earlier?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        (SELECT id FROM posts WHERE title = 'A popular npm package pushed a breaking change as a patch version last night'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        39
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        -1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        27
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        -1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        30
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        97
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'What is the one kitchen tool you didn''t think you needed until you had it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        -1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you stay motivated during the "boring middle" of a fitness routine?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Games where the soundtrack carried the whole experience for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Heads up, a lot of train operators in Europe are on strike this month'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'A common houseplant is more toxic to cats than most people realize'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        56
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        162
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        NULL,
        191
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        110
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        89
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        -1,
        (SELECT id FROM posts WHERE title = 'A common houseplant is more toxic to cats than most people realize'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        64
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        128
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        40
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small purchase under twenty dollars that improved your daily life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        162
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        77
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        -1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        162
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'How strict should code review comments be for a two person team?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        61
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        -1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        149
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        174
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        78
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        NULL,
        102
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        NULL,
        53
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        -1,
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        172
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        72
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        58
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        (SELECT id FROM posts WHERE title = 'Best way to soundproof a home office without major construction?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        35
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        80
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Finally finished the trilogy everyone recommended, mixed feelings'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Sensor cleaning kits sold on some marketplaces are shipping with the wrong solution concentration'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        115
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        -1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        -1,
        NULL,
        45
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        51
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Is there a food you loved as a kid that you cannot stand now?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        148
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to soundproof a home office without major construction?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you name boolean variables so they read cleanly in conditionals?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        53
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        153
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        44
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a scientific fact that broke your brain a little when you first learned it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        -1,
        NULL,
        53
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        NULL,
        110
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        178
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        168
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Simple weeknight dinners that don''t feel like the same five meals on repeat?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        NULL,
        5
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'A film that got better on rewatch for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Anyone else keep a running list of restaurants they mean to try?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        141
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Caught a small venue show last night, best live sound I''ve heard all year'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        137
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for nonfiction that reads like a novel'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        189
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        62
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is the one kitchen tool you didn''t think you needed until you had it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        -1,
        NULL,
        141
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        155
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        88
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        -1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        159
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        75
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        199
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        170
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        159
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        183
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'A common houseplant is more toxic to cats than most people realize'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        77
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        130
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        17
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        49
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        -1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        78
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'How do you deal with comparing your progress to people who started around the same time as you?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        40
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        77
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        107
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'Best way to handle a long layover without a visa for the country?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        166
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        -1,
        NULL,
        174
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        156
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        111
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        139
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        196
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Popular framework just announced a major version with a new compiler'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        NULL,
        182
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Home gym setups on a tight budget, what was actually worth buying?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        150
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        (SELECT id FROM posts WHERE title = 'The most inexplicable thing your pet has ever done'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        153
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        165
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Albums that work best as a single uninterrupted listen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Major trade finalized this morning, reactions are split'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small purchase under twenty dollars that improved your daily life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        -1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        62
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you comment your code more or less than you used to?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        136
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        171
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        153
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        NULL,
        140
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        NULL,
        101
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Small apartment DIY projects that do not require a landlord''s permission'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you finish books you are not enjoying, or abandon them?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Spent a weekend rewriting a script in a language I barely know, worth it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for slow, quiet films to fall asleep to on purpose'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        -1,
        NULL,
        179
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        NULL,
        183
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Do you comment your code more or less than you used to?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        -1,
        NULL,
        165
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        143
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Traditional media versus digital, do you have a strong preference?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        125
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        198
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        -1,
        NULL,
        169
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        7
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        141
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        NULL,
        49
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'Albums that work best as a single uninterrupted listen'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        188
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'A rivalry game that lived up to the hype for once'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        (SELECT id FROM posts WHERE title = 'A recent patch is bricking save files on one platform, back yours up first'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        (SELECT id FROM posts WHERE title = 'An underdog performance this season that genuinely surprised you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        168
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        NULL,
        78
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'A supporting actor performance that stole the whole movie for you'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        34
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        78
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        158
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        143
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        -1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        85
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        131
    ),
    (
        (SELECT id FROM users WHERE username = 'wildfern'),
        1,
        NULL,
        87
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        -1,
        (SELECT id FROM posts WHERE title = 'Is it worth switching to a password manager at this point, or overkill?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried packing for a two week trip with only a carry-on, lessons learned'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        (SELECT id FROM posts WHERE title = 'Refinished an old dresser I found on the curb, more work than expected'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        70
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        167
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'A book that completely changed how you read afterward'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a cheap ingredient that instantly makes a dish taste more expensive?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        37
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        174
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Best budget headset for competitive online games?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bughunter'),
        -1,
        (SELECT id FROM posts WHERE title = 'ELI5 request, why does time dilation actually happen?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Long-rumored remaster finally gets an official trailer'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        NULL,
        41
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        31
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        117
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Old charging cables can quietly start a fire, worth checking yours'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        150
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        -1,
        NULL,
        44
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        172
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        130
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        -1,
        NULL,
        60
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'That viral kitchen gadget everyone is buying is mostly a single-use plastic paperweight'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        93
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Read a debut novel that everyone online seemed to love, mixed on it myself'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        153
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        58
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        76
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        -1,
        NULL,
        150
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        182
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'That viral kitchen gadget everyone is buying is mostly a single-use plastic paperweight'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        82
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        173
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        180
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Took an online course from an artist I have followed for years, worth the price'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        -1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried an e-ink tablet for note-taking, here is how it went after three months'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        -1,
        NULL,
        163
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder to check your router firmware before the long weekend'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        149
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        38
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        44
    ),
    (
        (SELECT id FROM users WHERE username = 'bytebandit'),
        1,
        NULL,
        168
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        116
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        198
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        NULL,
        45
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        1,
        NULL,
        175
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'How long did it take your rescue dog to actually settle in?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        150
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        183
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        NULL,
        172
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        NULL,
        4
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        153
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        NULL,
        31
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        180
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        1,
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        (SELECT id FROM posts WHERE title = 'Switched our team from REST to GraphQL, six months later thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        (SELECT id FROM posts WHERE title = 'Looking for nonfiction that reads like a novel'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'bluecomet'),
        1,
        NULL,
        139
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        134
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        169
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small purchase under twenty dollars that improved your daily life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        NULL,
        167
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        -1,
        NULL,
        131
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        -1,
        (SELECT id FROM posts WHERE title = 'Longtime coach announces retirement effective at the end of the season'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do you comment your code more or less than you used to?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        -1,
        NULL,
        24
    ),
    (
        (SELECT id FROM users WHERE username = 'coffeeaddict'),
        1,
        (SELECT id FROM posts WHERE title = 'Streaming service confirms a beloved show is finally getting a film adaptation'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'hexadecimal'),
        -1,
        NULL,
        148
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Finished the new roguelike everyone was talking about, quick thoughts'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'The most underrated city you''ve visited that nobody talks about'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        NULL,
        126
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        114
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'moonrabbit'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried a viral pasta recipe from a video, verdict below'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'analogkid'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you warm up properly without it eating half your workout time?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'teatime'),
        1,
        NULL,
        130
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        129
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        NULL,
        6
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        1,
        NULL,
        77
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        (SELECT id FROM posts WHERE title = 'Tried shooting an entire wedding on a rented lens I had never used before'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        NULL,
        61
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        53
    ),
    (
        (SELECT id FROM users WHERE username = 'quietstorm'),
        1,
        NULL,
        150
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        (SELECT id FROM posts WHERE title = 'Is anyone else exhausted by how many "AI" features are being bolted onto everything?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        NULL,
        109
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        (SELECT id FROM posts WHERE title = 'Prime lens only for a full year, here is what changed about how I shoot'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'stacktrace'),
        1,
        NULL,
        181
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        76
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        46
    ),
    (
        (SELECT id FROM users WHERE username = 'sunnydays'),
        1,
        NULL,
        150
    ),
    (
        (SELECT id FROM users WHERE username = 'mossyrock'),
        1,
        (SELECT id FROM posts WHERE title = 'First time hearing this genre live, did not expect to enjoy it that much'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'kiwibird'),
        1,
        NULL,
        2
    ),
    (
        (SELECT id FROM users WHERE username = 'sleeplessdev'),
        -1,
        NULL,
        58
    ),
    (
        (SELECT id FROM users WHERE username = 'wanderlust'),
        -1,
        (SELECT id FROM posts WHERE title = 'New exoplanet survey results published this week'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'What is something you were confidently wrong about for way too long?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        NULL,
        78
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        -1,
        (SELECT id FROM posts WHERE title = 'What is a small purchase under twenty dollars that improved your daily life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nightowl'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get comfortable sharing unfinished or rough work?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'frogboy'),
        1,
        NULL,
        94
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        136
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        1,
        NULL,
        99
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        NULL,
        185
    ),
    (
        (SELECT id FROM users WHERE username = 'codewanderer'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a small daily habit that quietly improved your life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'neonriver'),
        -1,
        (SELECT id FROM posts WHERE title = 'Do rest days actually need to be fully sedentary, or does light movement help?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        -1,
        (SELECT id FROM posts WHERE title = 'How do you organize a music library that has grown out of control?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        -1,
        NULL,
        97
    ),
    (
        (SELECT id FROM users WHERE username = 'orbitingmars'),
        1,
        NULL,
        144
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        NULL,
        153
    ),
    (
        (SELECT id FROM users WHERE username = 'alexm'),
        1,
        (SELECT id FROM posts WHERE title = 'Older cat suddenly more vocal at night, anyone dealt with this?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'lazydeveloper'),
        1,
        (SELECT id FROM posts WHERE title = 'Editing style feedback, am I overdoing the contrast?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Reminder that library apps let you borrow ebooks for free if your library supports it'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'cloudchaser'),
        1,
        (SELECT id FROM posts WHERE title = 'How do you get into following a sport as an adult with no background in it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'crispytoast'),
        1,
        NULL,
        33
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'What is a scientific fact that broke your brain a little when you first learned it?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        (SELECT id FROM posts WHERE title = 'Built a simple bookshelf from a kit for the first time, here is how it went'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        141
    ),
    (
        (SELECT id FROM users WHERE username = 'retrograde'),
        1,
        NULL,
        199
    ),
    (
        (SELECT id FROM users WHERE username = 'slowinternet'),
        1,
        NULL,
        110
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        -1,
        (SELECT id FROM posts WHERE title = 'What is a small purchase under twenty dollars that improved your daily life?'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'pixelpanda'),
        1,
        (SELECT id FROM posts WHERE title = 'That viral kitchen gadget everyone is buying is mostly a single-use plastic paperweight'),
        NULL
    ),
    (
        (SELECT id FROM users WHERE username = 'nordicfox'),
        1,
        NULL,
        180
    ),
    (
        (SELECT id FROM users WHERE username = 'paperplane'),
        1,
        (SELECT id FROM posts WHERE title = 'Pets who have very specific and nonnegotiable opinions about their food bowl'),
        NULL
    );