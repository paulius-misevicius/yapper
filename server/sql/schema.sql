CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40) UNIQUE NOT NULL,
    bio VARCHAR(240),
    profile_picture_url TEXT,
    joined_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    email VARCHAR(240) UNIQUE NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    theme VARCHAR(5) NOT NULL DEFAULT 'light' CHECK (theme IN ('light', 'dark')),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS boards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) UNIQUE NOT NULL,
    description VARCHAR(240) NOT NULL,
    color TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    board_id INTEGER NOT NULL REFERENCES boards(id),
    user_id INTEGER NOT NULL REFERENCES users(id),
    flair TEXT NOT NULL,
    title VARCHAR(240) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS board_memberships (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    board_id INTEGER NOT NULL REFERENCES boards(id),
    joined_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

    UNIQUE (user_id, board_id)
);

CREATE TABLE IF NOT EXISTS board_rules (
    id SERIAL PRIMARY KEY,
    board_id INTEGER NOT NULL REFERENCES boards(id),
    rule VARCHAR(240) NOT NULL
);

CREATE TABLE IF NOT EXISTS saved_posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    post_id INTEGER NOT NULL REFERENCES posts(id),

    UNIQUE (user_id, post_id)
);

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES posts(id),
    user_id INTEGER NOT NULL REFERENCES users(id),
    parent_comment_id INTEGER,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS votes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    value INTEGER NOT NULL CHECK (value IN (-1, 1)),
    post_id INTEGER REFERENCES posts(id),
    comment_id INTEGER REFERENCES comments(id),

    UNIQUE (user_id, post_id),
    UNIQUE (user_id, comment_id),

    CHECK (
        (post_id IS NOT NULL AND comment_id IS NULL)
        OR
        (post_id IS NULL AND comment_id IS NOT NULL)
    )
);