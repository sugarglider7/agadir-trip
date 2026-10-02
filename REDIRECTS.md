# REDIRECTS — agadirtrip.com legacy URLs → rebuilt site

Every URL that was live on agadirtrip.com (per `LEGACY_CONTENT_INVENTORY.md`, crawled 2026-10-02)
mapped to the rebuilt site. New paths are relative to the site root
(currently deployed at `https://sugarglider7.github.io/agadir-trip/`; on the original
domain they apply as-is, so URL parity is preserved for all six tour pages).

`301` = permanent redirect · `200` = same URL, page rebuilt in place · `410` = gone, no replacement.

## Pages

| Legacy URL | Action | New path | Notes |
|---|---|---|---|
| `/` | 200 | `/` | Rebuilt homepage |
| `/about-us/` | 301 | `/` | Legacy page rendered empty (template-broken); no verified team/owner facts exist to build a real About page, so the homepage "local operator" section is the closest content |
| `/excursions/` | 200 | `/excursions/` | Legacy page was blank; rebuilt as the full listing |
| `/agadir-barbecue-camel-ride/` | 200 | `/agadir-barbecue-camel-ride/` | Slug preserved |
| `/agadir-horse-ride/` | 200 | `/agadir-horse-ride/` | Slug preserved |
| `/buggy-tour-in-agadir/` | 200 | `/buggy-tour-in-agadir/` | Slug preserved |
| `/quad-bike-in-agadir/` | 200 | `/quad-bike-in-agadir/` | Slug preserved |
| `/contact/` | 200 | `/contact/` | Rebuilt; unverified social handles and the ambiguous map embed dropped |
| `/trekking-and-hiking-tour-in-agadir-with-the-locals-amazigh-people/` | 200 | `/trekking-and-hiking-tour-in-agadir-with-the-locals-amazigh-people/` | Slug preserved; template demo pricing removed, price now "on request" |
| `/camel-ride-in-agadir/` | 200 | `/camel-ride-in-agadir/` | Slug preserved |
| `/booking/` | 301 | `/book/` | Booking flow rebuilt as WhatsApp/mailto request form |

## Posts (blog was copied encyclopedia text — do not migrate)

| Legacy URL | Action | New path | Notes |
|---|---|---|---|
| `/blog/` | 301 | `/excursions/` | Blog index; both posts were Wikipedia copies, blog not rebuilt |
| `/agadir-city/` | 410 | — | Duplicated/plagiarised Wikipedia content (half untranslated French); nearest hub if a 410 is impossible: `/excursions/` |
| `/a-portuguese-center-of-agadir/` | 410 | — | Copied encyclopedia history text; nearest hub if a 410 is impossible: `/excursions/` |

## Taxonomy / utility

| Legacy URL | Action | New path | Notes |
|---|---|---|---|
| `/category/agadir/` | 301 | `/excursions/` | Thin auto-archive |
| `/tag/agadir/` | 301 | `/excursions/` | Thin auto-archive |
| `/tag/city/` | 301 | `/excursions/` | Thin auto-archive |
| `/tag/history/` | 301 | `/excursions/` | Thin auto-archive |
| `/author/atlasaourir/` | 301 | `/` | Author archive; no team page exists (owner identity unverified) |
| `/?oceanwp_library=footer` | 410 | — | WordPress theme-library artifact |
| `/sitemap_index.xml` (+ `post-`, `page-`, `oceanwp_library-`, `category-`, `post_tag-`, `author-` sitemaps) | 301 | `/sitemap.xml` | Single static sitemap replaces the Yoast index |

## Implementation note

GitHub Pages cannot issue real 301/410 responses. If this build is dropped onto the original
domain behind Apache/nginx/Cloudflare, implement the table above as server redirects.
On GitHub Pages alone, the six tour slugs, `/excursions/` and `/contact/` already resolve
identically (URL parity), and everything else lands on the custom `404.html`.
