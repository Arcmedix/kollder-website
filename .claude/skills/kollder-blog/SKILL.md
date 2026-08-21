---
name: kollder-blog
description: Produce blog articles for the Kollder website CMS (Eleventy / Cloudflare Pages). Use this skill whenever producing any blog post, article, or content for kollder.com — whether in French or English. Trigger on any request involving writing, creating, or drafting content for the Kollder blog, even if the user just says "write me a blog post" or "create an article about X for Kollder". Always use this skill before producing any Kollder blog content — the frontmatter format is non-negotiable for the CMS to render the file correctly.
---

# Kollder Blog Article Skill

Read this before writing, editing, or publishing any Kollder blog article. The frontmatter format is non-negotiable — Eleventy will not render the article correctly if it's wrong.

## File location and naming

- French articles: `blog/fr/YYYY-MM-DD-slug.md`
- English articles: `blog/en/YYYY-MM-DD-slug.md`
- Filename is the publish date + a kebab-case slug derived from the title.
- Never put the word "article" in the filename.
- Use the actual current date. Never future-date a file.

## Frontmatter — exactly 7 fields

Every article must have exactly these 7 frontmatter fields, no more, no fewer:

```yaml
---
title: "Article title here"
date: YYYY-MM-DD
description: "One to two sentence summary used for meta description and previews."
category: "Category Name"
layout: layouts/article.njk
lang: fr
published: true
---
```

- `title` — quoted string.
- `date` — plain `YYYY-MM-DD` (no time component).
- `description` — quoted string, 1-2 sentences.
- `category` — quoted string, must be one of the categories in use (see below).
- `layout` — always `layouts/article.njk`, never quoted.
- `lang` — `fr` or `en`, matching the article's language and directory.
- `published` — always `true` for anything meant to go live.

## Categories in use

- **French:** Sapeurs-pompiers, Protocoles médicaux, Médecine d'urgence, Événements sportifs, Militaire, EHS et industrie, Épidémiologie et santé publique
- **English:** Fire & Rescue, Field Protocols, Emergency Medicine, Sports Events, Military, EHS & Industry, Epidemiology

Reuse an existing category exactly as written above. Don't invent a new one unless the user explicitly asks for a new content vertical.

## Body structure

- Open with a short lead paragraph (1-3 sentences) framing the stakes — no heading needed above it.
- Use `##` for section headings.
- Use bullet lists for protocols, checklists, and comparisons.
- Bold key operational rules and numbers inline (e.g. **"Cool First, Transport Second"**).
- Close with a "Pour aller plus loin" (FR) or "Further Reading" (EN) section as the final `##` heading.

## "Pour aller plus loin" / "Further Reading" section

This is the last section of every article. Use it for:
- **Internal links** to related Kollder blog articles and relevant audience landing pages (`/sdis-pompiers/`, `/protection-civile/`, `/services-urgence-hopitaux/`, `/assistance-medicale-evenements/`, `/defense-militaire/`, `/securite-travail/`) — prioritize these, since the audience pages currently have very few inbound links from the blog corpus.
- Citations of the authoritative sources below when directly referenced in the article.

Format as a simple bullet list:

```markdown
## Pour aller plus loin

- [Titre de l'article lié](/blog/fr/slug-de-larticle/)
- [Page audience pertinente](/sdis-pompiers/)
- Source citée si pertinente (ex : ACSM Expert Consensus Statement 2023)
```

Before writing this section, run the cannibalization check below to find real existing articles to link to — don't invent links.

## Cannibalization check (run before every new article)

Before starting a new article, check whether the topic is already covered:

```bash
grep -rli "[keyword]" blog/fr blog/en
```

If a close match exists, either fold the new angle into the existing article or clearly differentiate the new one (different audience, different angle, different keyword) rather than duplicating coverage.

## Content rules (non-negotiable, from CLAUDE.md)

- **Never use "30 secondes" / "30 seconds"** — the correct claim is always "moins de 2 minutes" / "under 2 minutes", deployed by a single operator.
- **No em dashes anywhere** in the body or frontmatter — use commas, periods, or parentheses instead.
- **No future-dated articles** — the `date` field must be the actual current date, never a projected or placeholder future date.
- **No "Made in Normandy" or manufacturing/assembly location mentions** unless the user explicitly raises it first.
- **Never mention Corben's city** when referencing the competitor Corben.
- Protocol anchor whenever relevant: "Cool First, Transport Second" (ACSM 2023, IOC/BJSM 2021, Casa et al. 2007, Korey Stringer Institute).

## Key sources to cite

ACSM Expert Consensus Statement 2023, IOC — Hosokawa Y, Racinais S et al. BJSM 2021, Casa DJ et al. Exercise and Sport Sciences Reviews 2007, Korey Stringer Institute (KSI, Dr Douglas Casa), SFAR, Décret n°2025-482.

## Pre-publish validation checklist

- [ ] Exactly 7 frontmatter fields, correctly formatted
- [ ] `published: true`
- [ ] Filename is `YYYY-MM-DD-slug.md`, no "article" in the slug
- [ ] `date` is the real current date, not a future date
- [ ] `lang` matches the directory (`blog/fr/` → `fr`, `blog/en/` → `en`)
- [ ] `category` matches one of the categories in use
- [ ] Zero em dashes anywhere in the file
- [ ] Zero instances of "30 secondes" / "30 seconds"
- [ ] Cannibalization check run against `blog/fr` and `blog/en`
- [ ] "Pour aller plus loin" / "Further Reading" section present with real internal links (prioritizing audience pages) and any cited sources
