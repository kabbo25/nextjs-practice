# Scores

| Exercise | নম্বর (১০) | মন্তব্য |
|---|---|---|
| 1 — প্রথম page | 10 | `app/about/page.tsx` ঠিক জায়গায়, `/about`-এ `About EIMS` দেখায় |
| 2 — HeaderFrame (children + title) | 8 | children আর title ঠিকভাবে destructure করা। −১: প্রথমবার `(children)` ভুল ছিল, review দেখে ঠিক করেছ (hint ধরা হলো)। −১: page-এ দুটো `<h1>` |
| 3 — Sidebar | 8 | তিনটা item আছে, component ঠিক। −২: menu item-এ `<h1>` ব্যবহার — এগুলো heading না, `<nav>` + `<ul><li>` হওয়া উচিত |
| 4 — AppShell + root layout | 9 | AppShell-এ বামে Sidebar, ডানে children; root layout-এ ঠিকভাবে wrap করা, সব page-এ Sidebar দেখায়। −১: children-কে `<div className="flex-1">`-এ রাখোনি, তাই ডান অংশ বাকি জায়গা নেয় না |
