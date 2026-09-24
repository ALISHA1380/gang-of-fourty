// Renders the 40 shop cards from window.SHOPS right away (works on file://),
// then fetches each shop's own page to fill in its real name, owner and tagline.
// A failed fetch (file://, broken page) just leaves the default card.

const list = document.getElementById('shops')
const stats = document.getElementById('stats')
const q = document.getElementById('q')
const fa = (n) => n.toLocaleString('fa-IR')

for (const shop of window.SHOPS) {
  const li = document.createElement('li')
  li.className = 'shop'
  li.dataset.search = `${shop.slug} ${shop.character}`
  li.innerHTML = `
    <a href="shops/${shop.slug}/index.html">
      <span class="emoji" aria-hidden="true">${shop.emoji}</span>
      <strong class="name">سوپرمارکت ${shop.character}</strong>
      <span class="desc"></span>
      <span class="owner free">غرفه آزاد است</span>
      <code class="slug">${shop.slug}</code>
    </a>`
  list.append(li)
  shop.el = li
}

function updateStats() {
  const claimed = list.querySelectorAll('.owner:not(.free)').length
  stats.textContent = `${fa(claimed)} از ${fa(window.SHOPS.length)} سوپرمارکت صاحب دارد`
}
updateStats()

// textContent (not innerHTML) for anything read from learners' pages.
// Browsers block fetch on file://, so skip it there instead of logging 40 errors.
const served = location.protocol !== 'file:'
Promise.all(
  window.SHOPS.map(async (shop) => {
    if (!served) return
    try {
      const res = await fetch(`shops/${shop.slug}/index.html`)
      if (!res.ok) return
      const doc = new DOMParser().parseFromString(await res.text(), 'text/html')
      const meta = (name) => doc.querySelector(`meta[name="${name}"]`)?.content.trim()
      const title = doc.title.trim()
      const author = meta('author')
      if (title) shop.el.querySelector('.name').textContent = title
      shop.el.querySelector('.desc').textContent = meta('description') || ''
      if (author) {
        const owner = shop.el.querySelector('.owner')
        owner.textContent = `صاحب غرفه: ${author}`
        owner.classList.remove('free')
      }
      shop.el.dataset.search += ` ${title} ${author || ''}`
    } catch {
      /* file:// or offline — keep the default card */
    }
  }),
).then(updateStats)

q.addEventListener('input', () => {
  const term = q.value.trim().toLowerCase()
  for (const li of list.children) li.hidden = !li.dataset.search.toLowerCase().includes(term)
})
