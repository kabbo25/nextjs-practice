# Next.js practice — EIMS স্টাইলে

প্রতিটা exercise শেষ হলে Claude-কে লেখো: `check 1` (বা যে নম্বর)।
Claude তোমার ফাইল পড়বে, ১০-এর মধ্যে নম্বর দেবে, আর `SCORES.md`-এ লিখে রাখবে।

নিয়ম:
- EIMS-এর code খুলে দেখবে না। আটকে গেলে Claude-কে hint চাও (hint নিলে ১ নম্বর কাটা যাবে)।
- Data লাগলে `lib/data.ts` থেকে import করো: `import { events } from "@/lib/data";`
- চালানো: `pnpm dev` → http://localhost:3000

শুরুর আগে একবার:

```bash
cd ~/development/nextjs-practice
pnpm install
pnpm dev
```

---

## সহজ

### Exercise 1 — প্রথম page (routing)
- `/about` URL-এ একটা page বানাও যেখানে লেখা থাকবে: `About EIMS`
- Expected: `localhost:3000/about` → `About EIMS` দেখাবে

### Exercise 2 — ফ্রেম component (children)
- `components/HeaderFrame.tsx` বানাও। এটা `children` নেবে, উপরে `<h1>EIMS</h1>` দেখাবে, তার নিচে children।
- `/about` page-এ এটা দিয়ে লেখাটা wrap করো।
- Expected: `/about` → উপরে `EIMS`, নিচে `About EIMS`

### Exercise 3 — Sidebar component (শুধু চেহারা)
- `components/Sidebar.tsx` বানাও। ভেতরে তিনটা লেখা: `Home`, `Events`, `Survey targets`। (এখনো link না, শুধু লেখা)
- Expected: component তৈরি, এখনো কোথাও দেখাবে না — সেটা Exercise 4-এ

### Exercise 4 — AppShell + root layout
- `components/AppShell.tsx` বানাও: বামে `<Sidebar />`, ডানে `children`। (EIMS-এর AppShell-এর মতো)
- `app/layout.tsx`-এ `{children}`-কে `<AppShell>` দিয়ে wrap করো।
- Expected: `/` আর `/about` দুই page-এই বামে Sidebar দেখাবে

---

## মাঝারি

### Exercise 5 — Link দিয়ে navigation
- Sidebar-এর তিনটা লেখাকে `next/link`-এর `Link` বানাও: `/`, `/events`, `/survey-targets`
- `/events` আর `/survey-targets`-এ আপাতত শুধু একটা heading থাকলেই হবে।
- Expected: Sidebar-এ click করলে page বদলায়, পুরো page reload হয় না, Sidebar একই থাকে

### Exercise 6 — Active link (client component)
- এখন যে page খোলা, Sidebar-এ সেই link-টা আলাদা রঙে দেখাও। (`usePathname` লাগবে)
- Expected: `/events`-এ থাকলে শুধু `Events` হাইলাইট

### Exercise 7 — Event list
- `/events` page-এ `events` data থেকে একটা table বানাও: title, district, date, status
- Expected: ৫টা row দেখাবে

### Exercise 8 — Nested layout
- `app/events/layout.tsx` বানাও। এটা events-এর সব page-এর উপরে একটা ছোট লেখা দেখাবে: `Event management`
- Expected: `/events`-এ `Event management` দেখায়, `/about`-এ দেখায় না

---

## কঠিন

### Exercise 9 — Dynamic route
- `/events/3` খুললে ওই id-র event-এর title, district, date দেখাও। ভুল id দিলে (`/events/99`) Next.js-এর 404 দেখাও।
- Expected: `/events/3` → `NEET orientation`, `/events/99` → 404

### Exercise 10 — Search (useState)
- `/events` page-এ একটা search box দাও। Title লিখলে table ফিল্টার হবে (বড়-ছোট হাতের অক্ষর মানবে না)।
- Expected: `youth` লিখলে শুধু `Youth skills fair`; `xyz` লিখলে `কোনো event নেই`

### Exercise 11 — Search URL-এ (searchParams)
- Search-কে URL-এ রাখো: `/events?q=dhaka` খুললে district বা title-এ `dhaka` আছে এমন event দেখাবে। Box-এ লিখলে URL বদলাবে।
- Expected: `/events?q=dhaka` → ২টা row; page refresh করলেও ফিল্টার থাকে

### Exercise 12 — Provider (context)
- `components/UserProvider.tsx` বানাও যেটা `{ name: "Mac", role: "Admin" }` দেয়। Root layout-এ wrap করো।
- Sidebar-এর নিচে আর `/about` page-এ — দুই জায়গায় provider থেকে নাম পড়ে দেখাও (props দিয়ে না পাঠিয়ে)।
- Expected: দুই জায়গাতেই `Mac (Admin)`
