# Bibo privacy policy

A static page (HTML and CSS, no build) in English and Indonesian. Google Play needs its public URL.

## Before you publish

1. The contact email is `innerjtct@gmail.com`, in the Contact section of both languages in `index.html`. Change it there if it moves.
2. Check each statement against the app and the sync server you run. The page says: no ads, no analytics, sync sends email, password and expense data over HTTPS, the server keeps the password as a one-way hash (argon2id) and the rest as plain text, and synced data is deleted on request by email.
3. When the policy changes, update the date in both languages (`Last updated` / `Terakhir diperbarui`).

## Files

| File | What |
|---|---|
| `index.html` | The page, both languages in one file |
| `styles.css` | Bibo's colours, light and dark |
| `script.js` | The EN / ID switch (opens in `#id` or `#en`, else the browser language) |
| `fonts/` | Fredoka and Nunito, self-hosted, with their licences |

## Host it

Any static host works. GitHub Pages is free: push this folder to a repository, then Settings > Pages > deploy from the main branch. The URL goes in Play Console under App content > Privacy policy.
