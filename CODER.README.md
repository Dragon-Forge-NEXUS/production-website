# AltiesGamingStudios Beta README

## Table Of Contents:

# Code platform(s):
ASTRO v2, JS, TS, Tailwind css

# pre-Compiled:
NO

# Structure:
```
/
├── public/
│   ├── imgs/
│   │   ├── ESRB_Imgs/
│   │   │  ├── ao.png
│   │   │  ├── e.png
│   │   │  ├── e10.png
│   │   │  ├── m.png
│   │   │  └── t.png
│   │   ├── 637932775439442046.png
│   │   ├── AltiesGamingILogo.png
│   │   ├── AltiesGamingLLogo.png
│   │   ├── AltiesGamingLogo.png
│   │   ├── code-solid.svg
│   │   ├── hammer-solid.svg
│   │   ├── handshake-simple-solid.svg
│   │   └── Spot (Square) Clear Background.png
│   ├── JS/
│   │   ├── sub-AG.js
│   │   ├── sub-AGL.js
│   │   └── sub.js
│   ├── home-background.svg
│   ├── Main-Favicon.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AGS/
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   ├── Moonrise/
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   ├── Partners/
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   └── placeholder
│   ├── layouts/
│   │   ├── AGS.astro
│   │   ├── main.astro
│   │   ├── Moonrise.astro
│   │   └── Partners.astro
│   └── pages/
│       ├── AGS/
│       │   ├── AG.astro
│       │   ├── AGL.astro
│       │   ├── Discord.astro
│       │   ├── FAQ.astro
│       │   ├── FEAT.astro
│       │   ├── index.astro
│       │   └── Retired.astro
│       ├── Moonrise/
│       │   └── index.astro
│       ├── Partners/
│       │   ├── FYTS.astro
│       │   ├── index.astro
│       │   ├── requirements.astro
│       │   └── requirements.md
│       ├── index.astro
│       └── 404.astro
└── package.json
```

# Refrence Guide:
## images:
most images are stored in "<code>/public/imgs/</code>"  
to use these images use "<code>imgs/{name of image}</code>" or "<code>imgs/ESRB_Imgs/{rating}</code>"  
## Sites:
here are refrences for all of the websites:
### Root
* index.astro --> /
* 404.astro --> NEVER REFRENCE
### AGS/
* AGS/AG.astro -->
  * out of folder "<code>AGS</code>" /AGS/AG
  * in folder "<code>AGS</code>" ./AG
* AGS/AGL.astro -->
  * out of folder "<code>AGS</code>" /AGS/AGL
  * in folder "<code>AGS</code>" ./AGL
* AGS/Discord.astro -->
  * out of folder "<code>AGS</code>" /AGS/Discord
  * in folder "<code>AGS</code>" ./Discord
* AGS/FAQ.astro -->
  * out of folder "<code>AGS</code>" /AGS/FAQ
  * in folder "<code>AGS</code>" ./FAQ
* AGS/FEAT.astro -->
  * out of folder "<code>AGS</code>" /AGS/FEAT
  * in folder "<code>AGS</code>" ./FEAT
* AGS/index.astro -->
  * out of folder "<code>AGS</code>" /AGS
  * in folder "<code>AGS</code>" ./
* AGS/Retired.astro -->
  * out of folder "<code>AGS</code>" /AGS/Retired
  * in folder "<code>AGS</code>" ./Retired
### Moonrise/
* Moonrise/index.astro -->
  * out of folder "<code>Moonrise</code>" /Moonrise
  * in folder "<code>Moonrise</code>" ./
### Partners/
* Partners/FYTS.astro -->
  * out of folder "<code>Partners</code>" /Partners/FYTS
  * in folder "<code>Partners</code>" ./FYTS
* Partners/index.astro -->
  * out of folder "<code>Partners</code>" /Partners
  * in folder "<code>Partners</code>" ./
* Partners/requirements.astro -->
  * out of folder "<code>Partners</code>" /Partners/requirements
  * in folder "<code>Partners</code>" ./requirements
* Partners/requirements.md (only for ```import```s) -->
  * out of folder "<code>Partners</code>" /Partners/requirements.md
  * in folder "<code>Partners</code>" ./requirements.md

## update script:
`npm i astro@latest | npm i @astrojs/tailwind@latest | npm i @astrojs/sitemap@latest | npm i daisyui@latest | npm i @astrojs/mdx@latest | npm i @astrojs/rss@latest | npm i firebase@latest | npm i firebase-admin@latest`