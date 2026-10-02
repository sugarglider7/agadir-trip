# LEGACY CONTENT INVENTORY — agadirtrip.com
Crawled 2026-10-02. Site: WordPress + OceanWP theme + Elementor 4.3.2, Yoast SEO, Jetpack CDN (i0.wp.com). Last content update anywhere on site: **2022-01-05**. The entire site is frozen since early 2022 — treat ALL prices/COVID copy as stale.

## Complete live URL list (for redirect planning)

### Pages (page-sitemap.xml)
| # | URL | Last mod |
|---|-----|----------|
| 1 | https://agadirtrip.com/ | 2022-01-05 |
| 2 | https://agadirtrip.com/about-us/ | 2021-11-05 |
| 3 | https://agadirtrip.com/excursions/ | 2021-11-05 |
| 4 | https://agadirtrip.com/agadir-barbecue-camel-ride/ | 2021-11-22 |
| 5 | https://agadirtrip.com/agadir-horse-ride/ | 2021-11-22 |
| 6 | https://agadirtrip.com/buggy-tour-in-agadir/ | 2021-11-23 |
| 7 | https://agadirtrip.com/quad-bike-in-agadir/ | 2021-11-23 |
| 8 | https://agadirtrip.com/contact/ | 2021-12-02 |
| 9 | https://agadirtrip.com/trekking-and-hiking-tour-in-agadir-with-the-locals-amazigh-people/ | 2021-12-04 |
| 10 | https://agadirtrip.com/camel-ride-in-agadir/ | 2021-12-14 |
| 11 | https://agadirtrip.com/booking/ | 2021-12-18 |

### Posts (post-sitemap.xml)
| # | URL | Last mod |
|---|-----|----------|
| 12 | https://agadirtrip.com/blog/ | 2021-12-18 |
| 13 | https://agadirtrip.com/agadir-city/ | 2021-12-18 |
| 14 | https://agadirtrip.com/a-portuguese-center-of-agadir/ | 2021-12-18 |

### Taxonomy / utility (thin, noindex-worthy; redirect to nearest hub)
| # | URL |
|---|-----|
| 15 | https://agadirtrip.com/category/agadir/ |
| 16 | https://agadirtrip.com/tag/agadir/ |
| 17 | https://agadirtrip.com/tag/city/ |
| 18 | https://agadirtrip.com/tag/history/ |
| 19 | https://agadirtrip.com/author/atlasaourir/ |
| 20 | https://agadirtrip.com/?oceanwp_library=footer (theme library artifact) |
| 21 | https://agadirtrip.com/sitemap_index.xml (+ post-, page-, oceanwp_library-, category-, post_tag-, author- sitemaps) |

## Page-by-page classification

### 1. `/` — "Home - agadir trip"
Hero "Discover Agadir in a different way", 6 excursion cards (BBQ camel, horse, quad, buggy, camel, trekking) each with a `wa.link/1tzty7` WhatsApp button, testimonial carousel, booking CTA.
**Classification: VERIFIED BUSINESS CONTENT** (excursion cards, phone, WhatsApp) **with TEMPLATE-BROKEN elements**: testimonials "Denise Griffin 2018", "adams, horse ride 2018" use theme stock headshots (team1.jpg etc.) and generic copy — almost certainly fake/demo; stats counters ("happy customers", "7 Days available") render with empty numbers.

### 2. `/about-us/`
Renders **empty** — only the header bar ("contact us / Phone: +212 649-638249") and footer. No body content at all.
**Classification: OBVIOUS TEMPLATE-BROKEN (blank page).** Do not migrate; build new About.

### 3. `/excursions/`
Also renders **empty** body. The excursions exist only as a nav dropdown. **Classification: OBVIOUS TEMPLATE-BROKEN (blank page).** Redirect to new tours index.

### 4. `/agadir-barbecue-camel-ride/`
Full tour page. Real description (sunset camel ride + Moroccan salad & chicken BBQ, veggie option), price block $70.99 struck → $40, "Children (under 10): 20€" (currency mix $ /€), ~3h, daily, EN/FR, pickup Agadir hotels/Taghazout/Cruise Port. 8 real photos (several WhatsApp camera uploads — authentic operator photos).
**Classification: VERIFIED BUSINESS CONTENT.** Flags: COVID line ("local applicable health recommendations to avoid the spread of Covid-19"), currency inconsistency, stale 2021 pricing.

### 5. `/agadir-horse-ride/`
Full tour page. Souss river + eucalyptus forest + royal palace ride, mint tea & snacks. $50.99 → $30, children under 10: 20€, ~2h, daily, EN/FR. 4-5 real photos.
**Classification: VERIFIED BUSINESS CONTENT.** Flags: COVID line; broken list item **"List IteReturn time to hotelm"** (Elementor editing accident — "List Item" merged with "Return time to hotel"); typo "horse ride in agdir" in H1; currency mix.

### 6. `/camel-ride-in-agadir/`
Full tour page (non-BBQ camel ride). $50 → $20, ~2h, mint tea & snacks, daily, EN/FR. No child price stated. One gallery image is a Flickr-sourced file (26768569099_5fa2a4e2d2_k.jpg).
**Classification: VERIFIED BUSINESS CONTENT.** Flags: COVID line; "Days/7J" garbled counter; overlaps heavily with BBQ camel page (shares images) — near-DUPLICATE imagery but distinct product.

### 7. `/quad-bike-in-agadir/`
Full tour page. 2h quad, Tifnit dunes, Berber village south of Agadir, 10-min orientation, helmet+goggles. $75 → $40. Combinable with buggy (same site/base).
**Classification: VERIFIED BUSINESS CONTENT.** Flags: COVID line; "List IteReturn time to hotelm" broken item; gallery has raw unstyled link list (broken Elementor gallery widget).

### 8. `/buggy-tour-in-agadir/`
Full tour page. 2h buggy, Tifnit dunes + Atlantic, 10-min orientation, helmet+goggles. $90.99 → $55. Combinable with quad.
**Classification: VERIFIED BUSINESS CONTENT.** Flags: COVID line; broken "List IteReturn…" item; duplicated/raw gallery link lists.

### 9. `/trekking-and-hiking-tour-in-agadir-with-the-locals-amazigh-people/` ⚠️
Top half is REAL: full-day Amazigh/Berber hiking, avoids touristy Paradise Valley lakes, ~9:00 hotel pickup, Argan oil cooperative breakfast stop, Atlas-foothill paths, swim in hidden natural pools, panoramic stops. Bottom half CONFIRMED BROKEN exactly as reported: **"featured tours — Lorem ipsum dolor sit amet…"** followed by a pricing card **"$2559.99 → $1559.99"** with inclusions **"Cruise the Adriatic Coast / Shop Italian boutiques / 5-star restaurants / 3 nights luxury stay"** — untouched luxury-travel theme demo content. No real price, duration confirmation, or inclusions for the actual trek anywhere on the page.
**Classification: MIXED — VERIFIED BUSINESS CONTENT (narrative) + OBVIOUS TEMPLATE-BROKEN (entire pricing/featured block). The $2559.99/$1559.99 price and all four "inclusions" MUST NOT be republished.**

### 10. `/contact/`
Real contact data: "bensergaw agadir" (= Bensergao), +212 649 63 82 49, agadirtrip@gmail.com, Google Maps embed query `agadir bensrgaw aghroud` (note: Bensergao is south Agadir; Aghroud is ~30km north near Taghazout — the embed query mixes both, ambiguous). "Social Networks" section lists `agadirtrip / @agadirtrip / agadirtrip / agadirtrip` as **plain text with NO hyperlinks** — placeholder handles, unverified.
**Classification: VERIFIED BUSINESS CONTENT (phone/email/area) + TEMPLATE-BROKEN (unlinked social handles, ambiguous map query).**

### 11. `/booking/`
Enquiry-form page ("we will get back to you within 24 hours… custom quote"). FAQ section broken: heading "how can we help you?" followed by a bare "1." and nothing else. Review cards: "Denise Griffin 4.5★ 2018", "Jeff Douglas 5★ 2018", "Kelly Bezos 4.5★ 2016" — all three share the identical quote "I had great time with travel agency! Cozy trip and best travel service so far!" with theme stock team photos.
**Classification: VERIFIED BUSINESS CONTENT (booking process copy) + OBVIOUS TEMPLATE-BROKEN (fake testimonials, empty FAQ). Fake reviews MUST NOT be republished.**

### 12. `/blog/`
Index of 2 posts. **Classification: VERIFIED (thin).**

### 13. `/agadir-city/`
Wikipedia-style Agadir overview, author "atlasaourir". First long paragraph is **duplicated verbatim twice**; second half switches to **untranslated French** (copied from French Wikipedia, with dangling footnote markers "5", "6", "7", "15"). Contains ccimage-shutterstock image.
**Classification: POSSIBLY STALE / DUPLICATE (copied encyclopedia content, not original). Do not migrate as-is; plagiarism + language-mix risk.**

### 14. `/a-portuguese-center-of-agadir/`
Agadir history 1505–1886, again copied encyclopedia text with dangling footnote markers ("17", "20"), wrapped in code-blocks (formatting accident).
**Classification: POSSIBLY STALE / copied content.** Same guidance as #13.

### 15-20. Taxonomy/author/footer-library URLs
Auto-generated thin archives. **Classification: DUPLICATE/UNKNOWN value — 301 to relevant hubs.**

## Cross-site flags summary
- **COVID-era copy** on all 5 priced tour pages ("…avoid the spread of Covid-19") — remove.
- **Lorem ipsum**: trekking page only.
- **Luxury-template nonsense pricing**: trekking page only ($2559.99/$1559.99, Adriatic cruise).
- **Fake testimonials**: homepage + booking page (theme demo names/photos).
- **Currency chaos**: adult prices in $, child prices in €, business is in Morocco (MAD) — pick one currency on rebuild.
- **Blank pages**: /about-us/, /excursions/.
- **Broken list artifact** "List IteReturn time to hotelm" on horse/quad/buggy pages.
- **Author slug** `atlasaourir` suggests the site builder is connected to Aourir (banana village, 12km north of Agadir).
