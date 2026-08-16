export interface Comment {
    id: number
    postId: number
    authorUsername: string
    parentCommentId: number | null
    body: string
    createdAt: string
    score: number
}

export const comments: Comment[] = [
  {
    id: 1,
    postId: 3,
    authorUsername: "privacyfirst99",
    parentCommentId: null,
    body: "Incognito mode only prevents local history storage — your ISP, employer, and the sites you visit can still see everything. Tools like uBlock Origin, a trusted VPN, and DNS-over-HTTPS are the real baseline.",
    createdAt: "2026-08-14T13:00:00+03:00",
    score: 312,
  },
  {
    id: 2,
    postId: 3,
    authorUsername: "netrunner_x",
    parentCommentId: 1,
    body: "Exactly. And even with a VPN, your VPN provider can log your traffic. The only real answer is Tor for true anonymity, but that comes with obvious trade-offs.",
    createdAt: "2026-08-14T14:00:00+03:00",
    score: 87,
  },
  {
    id: 3,
    postId: 3,
    authorUsername: "quietwatcher",
    parentCommentId: 2,
    body: "Tor exit nodes can still sniff unencrypted traffic though. HTTPS everywhere is a must on top of that.",
    createdAt: "2026-08-14T15:00:00+03:00",
    score: 44,
  },
  {
    id: 4,
    postId: 3,
    authorUsername: "vpn_skeptic",
    parentCommentId: 2,
    body: "This is why I stopped trusting 'no-log' VPN claims entirely unless they've had an independent audit. Most haven't.",
    createdAt: "2026-08-14T15:20:00+03:00",
    score: 29,
  },
  {
    id: 5,
    postId: 3,
    authorUsername: "dailydriver42",
    parentCommentId: null,
    body: "Honestly for most people just blocking third-party cookies and using a decent ad blocker covers 90% of the practical benefit. Diminishing returns after that unless you have a specific threat model.",
    createdAt: "2026-08-14T14:00:00+03:00",
    score: 55,
  },
  {
    id: 6,
    postId: 3,
    authorUsername: "threatmodel_tia",
    parentCommentId: 5,
    body: "This is the actual key point — 'private from what' matters more than people think. Hiding from advertisers and hiding from a nation-state are completely different setups.",
    createdAt: "2026-08-14T16:10:00+03:00",
    score: 68,
  },
  {
    id: 7,
    postId: 3,
    authorUsername: "dns_over_dave",
    parentCommentId: null,
    body: "Switched to DNS-over-HTTPS through a privacy-focused resolver a year ago and honestly forgot it was even running until I saw this post. Zero noticeable downside.",
    createdAt: "2026-08-14T17:05:00+03:00",
    score: 41,
  },
  {
    id: 8,
    postId: 3,
    authorUsername: "sandboxed_sid",
    parentCommentId: 7,
    body: "Which resolver did you go with? Been meaning to switch but the options are a bit overwhelming.",
    createdAt: "2026-08-14T17:40:00+03:00",
    score: 12,
  },
  {
    id: 9,
    postId: 3,
    authorUsername: "dns_over_dave",
    parentCommentId: 8,
    body: "Went with one of the audited no-log ones — happy to share, just don't want to sound like I'm shilling a specific product here.",
    createdAt: "2026-08-14T18:02:00+03:00",
    score: 18,
  },
  {
    id: 10,
    postId: 3,
    authorUsername: "browser_fingerprint_fan",
    parentCommentId: null,
    body: "Nobody in this thread has mentioned fingerprinting yet, which honestly matters more than cookies at this point. Blocking third-party cookies does nothing if your canvas/font fingerprint is unique.",
    createdAt: "2026-08-14T19:15:00+03:00",
    score: 96,
  },
  {
    id: 11,
    postId: 3,
    authorUsername: "privacyfirst99",
    parentCommentId: 10,
    body: "Good point, should've included this in the original post. A hardened browser config or something like Tor Browser is really the only reliable defense against fingerprinting specifically.",
    createdAt: "2026-08-14T19:30:00+03:00",
    score: 73,
  },
  {
    id: 12,
    postId: 3,
    authorUsername: "lurkmode_lena",
    parentCommentId: null,
    body: "This thread is exactly why I never trust the marketing around 'private browsing' features. Good breakdown.",
    createdAt: "2026-08-14T20:00:00+03:00",
    score: 21,
  },
];
 