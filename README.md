# The Asian Banker Summit 2026 — Website

Minimalist, editorial conference website. Ready to upload to GitHub Pages or any static host.

## Pages
| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, theme tracks, featured speakers, CTA |
| `about.html` | About the summit, who attends, FAQ accordion |
| `speakers.html` | Speaker grid with filter by category |
| `programme.html` | 2-day schedule with tab switcher |
| `register.html` | Pricing cards + registration form |
| `sponsors.html` | Sponsorship packages + logo grid |
| `venue.html` | Google Maps embed + travel info |
| `contact.html` | Contact details + enquiry form |

## Structure
```
summit2026/
├── index.html
├── about.html
├── speakers.html
├── programme.html
├── register.html
├── sponsors.html
├── venue.html
├── contact.html
├── css/
│   └── style.css       ← full design system
├── js/
│   └── app.js          ← shared nav/footer + all interactions
└── README.md
```

## Deploy to GitHub Pages
1. Create a new GitHub repository
2. Upload all files (drag & drop in the GitHub UI, or use Git)
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Site goes live at `https://yourusername.github.io/repo-name/`

## Customise
- **Colours**: Edit CSS variables at the top of `css/style.css`
- **Fonts**: Swap the Google Fonts import in `css/style.css`
- **Content**: All content is in plain HTML — edit directly
- **Speaker photos**: Replace the gradient `div` placeholders with `<img>` tags
- **Google Maps**: Replace the iframe `src` in `venue.html` with your embed URL
- **Logo**: Replace `.nav-logo-name` text with an `<img>` tag

## Design Enhancements vs Original Site
1. **Sticky navigation** with blur effect on scroll
2. **Animated counters** (800+, 70+, 27th) on homepage hero
3. **Scroll-reveal animations** on all content sections
4. **Gold ticker tape** scrolling conference themes
5. **Filterable speaker grid** (All / Keynote / Regulator / Banking / Technology)
6. **Day-tab schedule** — single page, tab between Day 1 & Day 2
7. **Tiered pricing cards** with featured/most-popular highlight
8. **FAQ accordion** on About page
9. **Mobile-responsive** — hamburger nav, stacked grids on small screens
10. **Newsletter signup** in footer on every page
