# Agadir Trip — website rebuild (demo)

Production-quality rebuild of [agadirtrip.com](https://agadirtrip.com) — a local excursions operator in Agadir, Morocco (camel rides, horse rides, quad, buggy, Amazigh trekking).

**Live demo:** https://sugarglider7.github.io/agadir-trip/

## What this is

A speculative redesign built from a full crawl of the existing site. All commercial facts (tours, prices, durations, inclusions, pickup areas, contact details) come from the operator's own published content — see `SOURCE_OF_TRUTH.md` and `LEGACY_CONTENT_INVENTORY.md`. Broken template content, COVID-era copy and fake theme testimonials from the legacy site were deliberately not carried over.

- The six legacy tour URLs are preserved slug-for-slug for drop-in URL parity (`REDIRECTS.md` maps all 21 legacy URLs).
- Booking is an honest request flow that composes a prefilled WhatsApp message — no fake checkout.
- Prices are shown exactly as the operator last published them (adult $ / child €), flagged "confirmed when you book".

## Stack

Static HTML/CSS/vanilla JS, no build step. Deployable to any static host; all links are relative so it works under a subpath (GitHub Pages) or a root domain.

## Repo notes

- `ASSET_INVENTORY.md` — provenance of every image. Raw research downloads (`assets/research/`) are excluded from the repo; optimized, cleared images live in `assets/img/`.
- `QA_CHECKLIST.md` — findings and fixes from the independent QA pass.
