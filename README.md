# Nails by Felicity

A responsive React and Vite website for Nails by Felicity in Murang’a, Kenya. The project uses Tailwind CSS v4 for utility styling, with a small custom stylesheet for the brand's page layouts and responsive details.

## Start in VS Code

1. Open the `Nails_by_Felicity` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Add Felicity’s WhatsApp number

Copy `.env.example` to `.env.local`, then add the number with country code and digits only, without `+`, spaces, or punctuation. For a Kenyan number, use `254` followed by the number without its leading `0`.

```env
VITE_WHATSAPP_NUMBER=2547XXXXXXXX
```

Restart the Vite server after editing the environment file. The same WhatsApp setting powers all booking buttons and pre-fills a short enquiry message. Until a number is added, the buttons are visibly inactive.

## Update the site details

- **Services and gallery:** edit `src/data/site.js`.
- **Photos:** replace or add images in `public/images/portfolio/`; update the matching gallery entries in `src/data/site.js`.
- **Service prices:** the site currently invites clients to enquire, so it does not publish prices that Felicity has not confirmed.
- **Location:** the site currently shows Murang’a, Kenya; add a more specific address only if Felicity wants it public.

## Pages

- `/` — home and featured work
- `/services` — manicure, pedicure, acrylics/extensions and press-on nails
- `/gallery` — filterable portfolio with image previews
- `/about` — Felicity and the studio
- `/contact` — location details and appointment enquiries

The home page, service descriptions, contact copy, prices and portfolio are written to be easy to revise as Felicity confirms her final business details.

## Design direction and Unslop

This project uses the Unslop skill by Damir Sokolovsky to keep the interface specific to Felicity’s nail work. The skill is installed in `.agents/skills/unslop`. It is licensed under CC BY 4.0; attribution and the license are included with the skill files. See [UNSLOP-NOTES.md](UNSLOP-NOTES.md) for the audit and direction used for this pass.
