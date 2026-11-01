const SITE = {
  name: "Smart Products Zone",
  heroTitle: "Premium electronics, trusted service, real results.",
  heroText: "Shop genuine electronics and get expert repair and restoration from a team that treats every device like its own.",
  whatsapp: "919999999999",
  phone: "+91 99999 99999",
  email: "hello@smartproductszone.com",
  address: "Shop 12, Main Market Road, Kolkata, West Bengal",
  hours: "Mon to Sat, 10:00 am to 8:00 pm",
  instagram: "https://www.instagram.com/yourusername/",
  facebook: "https://www.facebook.com/yourpage/",
  youtube: "https://www.youtube.com/@yourchannel",
  stats: [["5,000+", "Happy customers"], ["8 years", "In business"], ["1 year", "Service warranty"]],
  heroImage: "images/hero.jpg",
  services: [
    { title: "Electronics store", text: "Phones, audio, smart home and accessories from trusted brands with proper billing.", img: "images/store.jpg" },
    { title: "Repair and service", text: "Screen, battery and board-level repair with quality parts and a written warranty.", img: "images/repair.jpg" },
    { title: "Restoration", text: "Worn, scratched and faded devices brought back to a like-new finish.", img: "images/restore.jpg" },
    { title: "Bulk and business orders", text: "Special pricing and doorstep delivery for offices, shops and institutions.", img: "images/bulk.jpg" }
  ],
  results: [
    { name: "Phone screen", before: "images/before1.jpg", after: "images/after1.jpg" },
    { name: "Laptop body", before: "images/before2.jpg", after: "images/after2.jpg" },
    { name: "Speaker", before: "images/before3.jpg", after: "images/after3.jpg" }
  ],
  reviews: [
    { name: "Rohit S.", stars: 5, text: "Brought my phone with a cracked display. It came back spotless in one day and the price was fair." },
    { name: "Ananya D.", stars: 5, text: "Clear advice before buying and a proper bill with warranty. Will shop here again." },
    { name: "Imran K.", stars: 4, text: "Good range of products and quick WhatsApp replies. Delivery took a little longer than promised." },
    { name: "Pooja M.", stars: 5, text: "They restored my old speaker and it sounds new. Very honest team." }
  ]
};


const sample = path => "https://picsum.photos/seed/" + encodeURIComponent(path) + "/1200/750" + (/before/.test(path) ? "?grayscale&blur=2" : "");
document.addEventListener("error", e => {
  const el = e.target;
  if (el.tagName === "IMG" && !el.dataset.fb) {
    el.dataset.fb = "1";
    el.src = sample(el.getAttribute("src") || "");
  }
}, true);
const heroProbe = new Image();
heroProbe.onerror = () => document.querySelector(".hero").style.setProperty("--hero", "url('" + sample("hero") + "')");
heroProbe.src = SITE.heroImage;

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waLink = text => "https://wa.me/" + SITE.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");

document.title = SITE.name + " | Electronics, Repair and Restoration";
$("brandName").textContent = SITE.name;
$("mark").textContent = SITE.name.charAt(0);
$("bigName").textContent = SITE.name;
$("heroTitle").textContent = SITE.heroTitle;
$("heroText").textContent = SITE.heroText;
document.querySelector(".hero").style.setProperty("--hero", "url('" + SITE.heroImage + "')");
const hello = "Hello " + SITE.name + ", I would like some information.";
["navWa", "heroWa", "waFloat"].forEach(id => $(id).href = waLink(hello));

$("stats").innerHTML = SITE.stats.map(s => "<div><b>" + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></div>").join("");
$("serviceGrid").innerHTML = SITE.services.map(s =>
  '<article class="card"><img loading="lazy" src="' + esc(s.img) + '" alt="' + esc(s.title) + '"><div><h3>' + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div></article>").join("");

$("cPhone").textContent = SITE.phone;
$("cMail").textContent = SITE.email;
$("cAddr").textContent = SITE.address;
$("cHours").textContent = SITE.hours;
const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg>',
  whatsapp: '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.7 4.5 1.8 6.3L4 29l7.9-1.8A12 12 0 0 0 16 28c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.9 0-3.700-.5-5.200-1.500l-.4-.2-4.600 1 1-4.500-.3-.5A9.800 9.800 0 1 1 16 24.800zm5.400-7.300c-.3-.1-1.800-.9-2-1s-.5-.1-.7.1-.8 1-1 1.200-.4.200-.7.100a8 8 0 0 1-4-3.500c-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700c0 1.600 1.200 3.200 1.300 3.400s2.300 3.500 5.600 4.900c2.100.9 2.900 1 3.900.8.600-.1 1.800-.7 2-1.400s.3-1.300.2-1.400-.3-.2-.6-.3z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6.5c0-.7.2-1 1.100-1H17V2h-2.600C11.400 2 10 3.700 10 6.200V8H7.500v3.500H10V22h4V11.500h2.800L17.300 8z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.200a3 3 0 0 0-2.100-2.100C18 5.600 12 5.600 12 5.600s-6 0-7.900.5A3 3 0 0 0 2 8.200 31 31 0 0 0 1.600 12 31 31 0 0 0 2 15.800a3 3 0 0 0 2.100 2.100c1.900.5 7.900.5 7.900.5s6 0 7.900-.5a3 3 0 0 0 2.100-2.100c.4-1.200.4-3.800.4-3.800s0-2.600-.4-3.800zM10 15V9l5.200 3z"/></svg>'
};
const socialList = [
  ["instagram", "Instagram", SITE.instagram],
  ["whatsapp", "WhatsApp", waLink(hello)],
  ["facebook", "Facebook", SITE.facebook],
  ["youtube", "YouTube", SITE.youtube]
];
$("soc").innerHTML = socialList.filter(s => s[2]).map(s =>
  '<a class="s-' + s[0] + '" href="' + esc(s[2]) + '" target="_blank" rel="noopener">' + ICONS[s[0]] + "<span>" + s[1] + "</span></a>").join("");
$("igFloat").href = SITE.instagram;
$("igFloat").innerHTML = ICONS.instagram;
$("igHero").href = SITE.instagram;
$("foot").textContent = "\u00A9 " + new Date().getFullYear() + " " + SITE.name + ". All rights reserved.";

$("menu").onclick = () => $("nav").classList.toggle("open");
$("nav").addEventListener("click", e => { if (e.target.tagName === "A") $("nav").classList.remove("open"); });

const ba = $("ba"), range = $("range");
range.oninput = () => ba.style.setProperty("--pos", range.value + "%");
function showPair(i) {
  const p = SITE.results[i];
  $("imgBefore").src = p.before;
  $("imgAfter").src = p.after;
  $("imgBefore").alt = "Before: " + p.name;
  $("imgAfter").alt = "After: " + p.name;
  range.value = 50;
  ba.style.setProperty("--pos", "50%");
  [...$("pairs").children].forEach((b, n) => b.classList.toggle("on", n === i));
}
$("pairs").innerHTML = SITE.results.map((r, i) => '<button type="button" data-i="' + i + '">' + esc(r.name) + "</button>").join("");
$("pairs").onclick = e => { if (e.target.dataset.i) showPair(+e.target.dataset.i); };
showPair(0);

const KEY = "site_reviews_v1";
function stored() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
}
function save(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
}
const starStr = n => "\u2605".repeat(n) + "\u2606".repeat(5 - n);
function renderReviews() {
  const all = stored().concat(SITE.reviews);
  const total = all.length;
  const avg = total ? all.reduce((a, r) => a + r.stars, 0) / total : 0;
  $("avg").textContent = avg.toFixed(1);
  $("avgStars").textContent = starStr(Math.round(avg));
  $("count").textContent = "Based on " + total + " review" + (total === 1 ? "" : "s");
  $("bars").innerHTML = [5, 4, 3, 2, 1].map(n => {
    const c = all.filter(r => r.stars === n).length;
    return "<div><span>" + n + "\u2605</span><i><em style='width:" + (total ? c / total * 100 : 0) + "%'></em></i><span>" + c + "</span></div>";
  }).join("");
  $("revList").innerHTML = all.slice(0, 6).map(r =>
    '<div class="rv"><header><strong>' + esc(r.name) + '</strong><span class="stars">' + starStr(r.stars) + "</span></header><p>" + esc(r.text) + "</p></div>").join("");
}
let pickVal = 0;
$("pick").innerHTML = [1, 2, 3, 4, 5].map(n => '<button type="button" data-n="' + n + '" aria-label="' + n + ' stars">\u2605</button>').join("");
$("pick").onclick = e => {
  if (!e.target.dataset.n) return;
  pickVal = +e.target.dataset.n;
  [...$("pick").children].forEach((b, i) => b.classList.toggle("on", i < pickVal));
};
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2600);
}
$("revForm").onsubmit = e => {
  e.preventDefault();
  if (!pickVal) { toast("Please choose a star rating"); return; }
  const list = stored();
  list.unshift({ name: $("rName").value.trim(), stars: pickVal, text: $("rText").value.trim() });
  save(list);
  e.target.reset();
  pickVal = 0;
  [...$("pick").children].forEach(b => b.classList.remove("on"));
  renderReviews();
  toast("Thank you for your review");
};
renderReviews();

$("waForm").onsubmit = e => {
  e.preventDefault();
  const msg = "Hello " + SITE.name + ",\nName: " + $("wName").value.trim() + "\nPhone: " + $("wPhone").value.trim() + "\n\n" + $("wMsg").value.trim();
  window.open(waLink(msg), "_blank", "noopener");
  e.target.reset();
};
