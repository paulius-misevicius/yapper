-- ALL SEED DATA WAS GENERATED WITH AI

INSERT INTO board_rules (board_id, rule)
VALUES
    ((SELECT id FROM boards WHERE name = 'technology'), 'Stay on topic: technology, gadgets, software, AI, and the internet.'),
    ((SELECT id FROM boards WHERE name = 'technology'), 'No unsolicited self-promotion or affiliate links.'),
    ((SELECT id FROM boards WHERE name = 'technology'), 'Disclose any personal or financial interest when reviewing a product.'),
    ((SELECT id FROM boards WHERE name = 'technology'), 'No piracy links or requests for cracked software.'),
 
    ((SELECT id FROM boards WHERE name = 'programming'), 'Use code blocks when posting code, not screenshots.'),
    ((SELECT id FROM boards WHERE name = 'programming'), 'Homework help is fine, but show your own attempt first.'),
    ((SELECT id FROM boards WHERE name = 'programming'), 'No unpaid job or gig postings, this is a discussion board, not a job board.'),
    ((SELECT id FROM boards WHERE name = 'programming'), 'Keep editor and language debates civil, no flame wars.'),
 
    ((SELECT id FROM boards WHERE name = 'gaming'), 'Use spoiler tags for anything released within the last 30 days.'),
    ((SELECT id FROM boards WHERE name = 'gaming'), 'No cheat codes, exploits, or account trading requests.'),
    ((SELECT id FROM boards WHERE name = 'gaming'), 'Keep platform debates respectful, no console warring.'),
    ((SELECT id FROM boards WHERE name = 'gaming'), 'Tag which platform you are playing on when asking for help.'),
 
    ((SELECT id FROM boards WHERE name = 'movies'), 'Mark spoilers clearly in your post title and body.'),
    ((SELECT id FROM boards WHERE name = 'movies'), 'No links to pirated streams or downloads.'),
    ((SELECT id FROM boards WHERE name = 'movies'), 'Be respectful of differing opinions on films, no personal attacks.'),
 
    ((SELECT id FROM boards WHERE name = 'music'), 'Credit the artist and album when sharing a track or clip.'),
    ((SELECT id FROM boards WHERE name = 'music'), 'No links to pirated music or unauthorized downloads.'),
    ((SELECT id FROM boards WHERE name = 'music'), 'Self-promotion of your own music is limited to one post per month.'),
 
    ((SELECT id FROM boards WHERE name = 'books'), 'Mark spoilers clearly, including for older books.'),
    ((SELECT id FROM boards WHERE name = 'books'), 'No links to pirated ebooks or PDFs.'),
    ((SELECT id FROM boards WHERE name = 'books'), 'Author self-promotion must be disclosed as such.'),
 
    ((SELECT id FROM boards WHERE name = 'travel'), 'No unsolicited tour or booking service advertisements.'),
    ((SELECT id FROM boards WHERE name = 'travel'), 'Disclose sponsorships or free stays when reviewing a destination.'),
    ((SELECT id FROM boards WHERE name = 'travel'), 'Be specific about location and season so advice stays useful.'),
 
    ((SELECT id FROM boards WHERE name = 'food'), 'Include ingredients and rough steps when sharing a recipe, not just a photo.'),
    ((SELECT id FROM boards WHERE name = 'food'), 'No restaurant advertisements or unsolicited business promotion.'),
    ((SELECT id FROM boards WHERE name = 'food'), 'Be kind about dietary restrictions and substitutions in comments.'),
 
    ((SELECT id FROM boards WHERE name = 'fitness'), 'This is not a substitute for medical advice, consult a professional for injuries.'),
    ((SELECT id FROM boards WHERE name = 'fitness'), 'No promotion of unregulated supplements or extreme crash diets.'),
    ((SELECT id FROM boards WHERE name = 'fitness'), 'Be supportive of all fitness levels, no body shaming.'),
 
    ((SELECT id FROM boards WHERE name = 'casual'), 'Keep it friendly, this board is for lighthearted conversation.'),
    ((SELECT id FROM boards WHERE name = 'casual'), 'No political or religious debates, take those elsewhere.'),
    ((SELECT id FROM boards WHERE name = 'casual'), 'Off-topic is fine here, but keep posts respectful.'),
 
    ((SELECT id FROM boards WHERE name = 'science'), 'Cite sources for claims where possible.'),
    ((SELECT id FROM boards WHERE name = 'science'), 'No pseudoscience presented as established fact.'),
    ((SELECT id FROM boards WHERE name = 'science'), 'Keep speculative discussion clearly labeled as speculation.'),
 
    ((SELECT id FROM boards WHERE name = 'photography'), 'Credit the photographer when sharing someone else''s work.'),
    ((SELECT id FROM boards WHERE name = 'photography'), 'Constructive criticism only, no low-effort takedowns.'),
    ((SELECT id FROM boards WHERE name = 'photography'), 'Disclose when an image has been heavily edited or AI-generated.'),
 
    ((SELECT id FROM boards WHERE name = 'art'), 'Credit the original artist when sharing work that is not your own.'),
    ((SELECT id FROM boards WHERE name = 'art'), 'Label AI-generated art clearly as such.'),
    ((SELECT id FROM boards WHERE name = 'art'), 'Keep critique constructive, focus on the work, not the artist.'),
 
    ((SELECT id FROM boards WHERE name = 'sports'), 'Keep team rivalries respectful, no personal attacks on players or fans.'),
    ((SELECT id FROM boards WHERE name = 'sports'), 'No gambling tips or betting line promotion.'),
    ((SELECT id FROM boards WHERE name = 'sports'), 'Use spoiler tags for games not yet aired in all time zones.'),
 
    ((SELECT id FROM boards WHERE name = 'pets'), 'No buying, selling, or rehoming animals on this board.'),
    ((SELECT id FROM boards WHERE name = 'pets'), 'This is not a substitute for veterinary advice.'),
    ((SELECT id FROM boards WHERE name = 'pets'), 'Be kind, judgmental comments about pet care will be removed.'),
 
    ((SELECT id FROM boards WHERE name = 'diy'), 'Include basic safety notes for anything involving tools, electricity, or chemicals.'),
    ((SELECT id FROM boards WHERE name = 'diy'), 'No unsolicited promotion of your own contracting or repair business.'),
    ((SELECT id FROM boards WHERE name = 'diy'), 'Share what materials and tools you used so others can replicate the project.');
 