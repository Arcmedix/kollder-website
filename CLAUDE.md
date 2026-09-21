# Kollder Website — Claude Code Project Context

Kollder is a French emergency cooling equipment company. Two official SKUs: **Kollder One™** (emergency cold water immersion tub) and **Kollder Go™** (hybrid backpack/wheeled transport bag, 85×10×10cm). A third product, **Kollder Rest™**, is in development (seated recovery station, forearm ice pockets, detachable front cooling tub).

## Core positioning
- Lead with **structural stability** (steel frame, 6 support points, cross-bracing — stays level on uneven ground even under load) and **full foldability** (folds into the Kollder Go™ transport bag)
- Lead with **capacity for up to 2 people in simultaneous immersion** — a real, documented spec on the same 205×80×60cm tub (already used this way in the portable-baptistry vertical: candidate + officiant together)
- Deployment speed is now a **secondary** detail only: "moins de 5 minutes / under 5 minutes" — NEVER "30 seconds", and do not claim "under 2 minutes" anymore
- Do NOT lead with or emphasize single-operator deployment ("une seule personne" / "un seul opérateur" / "single operator" / "by one person") — de-emphasized 2026-09-18 because a competitor (Corben) is closing the speed gap; stability and 2-person capacity are the differentiators now, not deployment speed or operator count
- **Exception:** the portable-baptistry vertical (Kollder as a church baptism tub — `baptistere-immersion.njk`/`portable-baptistry.njk`, and blog articles with `category: "Vie d'église"` / `"Church Life"`) is a separate market where Corben does not compete. That content still uses "moins de 2 minutes / under 2 minutes" and single-person setup — leave it as-is, this repositioning does not apply there
- Protocol anchor: "Cool First, Transport Second" (ACSM 2023, IOC/BJSM 2021, Casa et al. 2007, Korey Stringer Institute)
- Kollder is a French company — do not proactively reference manufacturing/assembly location unless the user raises it first

## Target audiences
SDIS (sapeurs-pompiers), SSSM/militaires, SAMU/SMUR/SAU, associations de protection civile, directeurs médicaux événements sportifs (trails, marathons, Hyrox), responsables EHS entreprises.

## Key competitors
- Corben (France) — aluminium tubular frame, Velcro-fixed PVC liner: structural instability on uneven ground, Velcro leakage/fragility issues over repeated use. Do NOT frame the comparison around deployment speed or operator count (Corben may be closing that gap) — the durable differentiator is structural stability and Kollder's 2-person capacity. **Never mention Corben's city.**
- I-CWIK / Nereus Medical (UK) — closed bag, limited patient access
- Do not mention Servoxy, Curaspark, or Canada/Dubai trade structure unless the user explicitly raises them

## Content rules (standing, non-negotiable)
- Never use "30 secondes / 30 seconds" for Kollder's deployment time
- For the emergency-cooling product (not the portable-baptistry vertical, see Core positioning exception above): never lead with deployment speed or single-operator/single-person claims — lead with stability and 2-person capacity instead; if deployment time is mentioned, it's "moins de 5 minutes / under 5 minutes", secondary, and never tied to an operator count
- No em dashes anywhere
- No "Made in Normandy" or manufacturing/assembly location mentions unless the user raises it
- No future-dated articles — always use the actual current date
- No mention of Corben's city

## Site stack
- Eleventy v3.1.5, hosted on Cloudflare Pages (Wrangler build system)
- GitHub repo: `Arcmedix/kollder-website` (public)
- Domains: `kollder.com` + `kollder-website.pages.dev`, via Cloudflare DNS/proxy
- GA4: `G-SF9XF8JQZK` · Microsoft Clarity: `wy0jm2kj2r`
- Push to `main` → Cloudflare Pages auto-deploys, no manual trigger needed

## Site architecture
- `index.html` — French homepage (Eleventy passthrough-copies as-is)
- `en/index.html` — English homepage
- `_includes/layouts/article.njk` — blog article layout
- `_includes/layouts/audience.njk` — audience landing pages (sdis-pompiers.njk, protection-civile.njk, services-urgence-hopitaux.njk, assistance-medicale-evenements.njk, defense-militaire.njk, securite-travail.njk)
- `_includes/layouts/partner.njk` — distributeurs + partners (layout declared in frontmatter)
- `blog/index.njk`, `monitor.njk` (layout:false, paginated over `langs`). The EHS monitor tool is **French-only** (`/fr/monitor/`): no EN/DE/ES page, and no monitor link in EN/DE/ES navigation (layouts guard it with `lang == "fr"`; `_data/nav.js` defines `monitor`/`monitorUrl` for `fr` only)
- **Rule:** always verify `layout:` frontmatter of any `.njk` before assuming it has its own nav

## Blog corpus
100+ articles: FR in `blog/fr/*.md`, EN in `blog/en/*.md`.
**Always read `.claude/skills/kollder-blog/SKILL.md` before writing any article.**

Validation checklist before publishing any article:
- Exactly 7 frontmatter fields: `title`, `date`, `description`, `category`, `layout: layouts/article.njk`, `lang`, `published: true`
- Zero em dashes
- Zero "30 secondes / 30 seconds"
- For non-baptistry articles: no "moins de 2 minutes / under 2 minutes" or single-operator/single-person deployment claims — lead with stability + 2-person capacity, 5 minutes secondary if mentioned at all
- `published: true`
- Correct dated filename (`YYYY-MM-DD-slug.md`), no "article" in the filename
- Internal links included in a "Pour aller plus loin / Further Reading" section

## Cannibalization check (run before every new article)
grep -rli "[keyword]" blog/fr blog/en

## Categories in use
- **French:** Sapeurs-pompiers, Protocoles médicaux, Médecine d'urgence, Événements sportifs, Militaire, EHS et industrie, Épidémiologie et santé publique
- **English:** Fire & Rescue, Field Protocols, Emergency Medicine, Sports Events, Military, EHS & Industry, Epidemiology

## Language system
- localStorage key: 'kollder_lang' (fr/en), 'kollder_lang_banner_dismissed' (1)
- Banner: inline in index.html (Cloudflare intercepts external JS on homepage); lang.js external for article.njk and blog/index.njk
- blog/index.njk has no Nunjucks lang variable — language detected via JS/localStorage only; never use {% if lang %} conditionals in this file

## PDF gate
kollder-guide-cce-2026.pdf gated via Formspree mykovqeg.
Distributor/international partner applications: Formspree xpqealgr.

## Key sources to cite in articles
ACSM Expert Consensus Statement 2023, IOC — Hosokawa Y, Racinais S et al. BJSM 2021, Casa DJ et al. Exercise and Sport Sciences Reviews 2007, Korey Stringer Institute (KSI, Dr Douglas Casa), SFAR, Décret n°2025-482.

## Git identity for commits
git config user.email "contact@kollder.com"
git config user.name "Kollder"

## Known outstanding issues
- 6 Belgium/Germany blog articles (dated 2026-08-18) were drafted previously but never pushed — check git log / working tree before assuming they exist
- Internal linking gap: the 6 audience pages have near-zero inbound links from the blog corpus
