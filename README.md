# 🧺 بازارچه — Bazaarche

A Persian online grocery built by 40 bootcamp learners over 6 weeks.
Each learner owns **one supermarket** under `shops/<slug>/` and grows it every week,
from a hello-world page in Week 1 to a shop that can sell its groceries by Week 6.

یک سوپرمارکت آنلاین فارسی که ۴۰ شرکت‌کننده بوت‌کمپ در ۶ هفته می‌سازند.
هر نفر صاحب **یک سوپرمارکت** در پوشه `shops/<slug>/` است و هر هفته آن را کامل‌تر می‌کند.

## Rules / قوانین

1. **Only edit your own folder:** `shops/<your-slug>/`. CI rejects PRs that touch anything else.
   فقط فایل‌های پوشه خودت را تغییر بده.
2. **Never push to `main`.** Always use a branch and a Pull Request.
3. **Your HTML must pass the validator.** CI runs it on the files you change.
4. Keep your slug for all 6 weeks. / اسم (slug) خودت را تا آخر نگه دار.

## Week 1: claim your shop / هفته اول: غرفه‌ات را بگیر

Pick a free character from the table below (the landing page shows which ones are taken), then:

```bash
git clone <this-repo-url>
cd bazaarche
git checkout -b feat/<slug>-w1
```

Open `shops/<slug>/index.html` and put your name in the author tag:

```html
<meta name="author" content="Your first name">
```

Use a first name or a nickname: everyone who visits the site can see it.

```bash
git add shops/<slug>
git commit -m "Claim <slug> shop"
git push -u origin feat/<slug>-w1
```

Open a Pull Request, write a short description in Markdown, and ask your mentor for a review.
Once it's merged, your name appears on the landing page. 🎉

## Every week after / هفته‌های بعد

```bash
git switch main
git pull
git checkout -b feat/<slug>-w<week>
# work only inside shops/<slug>/
```

## Preview locally / دیدن روی سیستم خودت

- Double-click `index.html` to open the landing page. Shop names and owners only
  update when the site is served over http.
- For the full view, serve the folder: VS Code **Live Server**, or `npx serve .`

## What the landing page reads from your page

| From your `shops/<slug>/index.html` | Shown on the landing card |
|---|---|
| `<title>` | shop name |
| `<meta name="description">` | tagline |
| `<meta name="author">` | owner (empty = free shop) |

## The 40 shops / ۴۰ سوپرمارکت

| # | | Character | slug |
|---|---|---|---|
| 1 | 🟥 | کلاه‌قرمزی | `kolah-ghermezi` |
| 2 | 🎒 | پسرخاله | `pesar-khale` |
| 3 | 🐞 | خاله سوسکه | `khale-sooskeh` |
| 4 | 🐁 | آقا موشه | `agha-mooshe` |
| 5 | 🐐 | شنگول | `shangool` |
| 6 | 🐏 | منگول | `mangool` |
| 7 | 🍇 | حبه‌انگور | `habbe-angoor` |
| 8 | 👳 | ملانصرالدین | `mulla-nasreddin` |
| 9 | 🧒 | حسنی | `hasani` |
| 10 | 🎃 | کدو قلقله‌زن | `kadoo-ghelghele` |
| 11 | 🐱 | تام | `tom` |
| 12 | 🧀 | جری | `jerry` |
| 13 | 🐆 | پلنگ صورتی | `pink-panther` |
| 14 | 🧸 | مستر بین | `mr-bean` |
| 15 | 🧅 | شرک | `shrek` |
| 16 | 👢 | گربه چکمه‌پوش | `puss-in-boots` |
| 17 | ⚡ | پیکاچو | `pikachu` |
| 18 | 🍄 | ماریو | `mario` |
| 19 | 🔧 | لوئیجی | `luigi` |
| 20 | 🦔 | سونیک | `sonic` |
| 21 | 🍝 | گارفیلد | `garfield` |
| 22 | 🐶 | اسنوپی | `snoopy` |
| 23 | 🐕 | اسکوبی‌دو | `scooby-doo` |
| 24 | 🧽 | باب اسفنجی | `spongebob` |
| 25 | ⭐ | پاتریک | `patrick-star` |
| 26 | ⛄ | اولاف | `olaf` |
| 27 | 🍌 | مینیون | `minion` |
| 28 | 🤥 | پینوکیو | `pinocchio` |
| 29 | 🥬 | ملوان زبل | `popeye` |
| 30 | 🥕 | باگز بانی | `bugs-bunny` |
| 31 | 🐤 | توییتی | `tweety` |
| 32 | 🍯 | خرس پو | `winnie-the-pooh` |
| 33 | 🎩 | میکی ماوس | `mickey-mouse` |
| 34 | 🦆 | دونالد داک | `donald-duck` |
| 35 | 🦴 | گوفی | `goofy` |
| 36 | 🍩 | هومر سیمپسون | `homer-simpson` |
| 37 | 🐧 | پینگو | `pingu` |
| 38 | 🐼 | پاندای کونگ‌فوکار | `kung-fu-panda` |
| 39 | 🐠 | نمو | `nemo` |
| 40 | 🐟 | دوری | `dory` |
