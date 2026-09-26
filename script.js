// =========================================================
// Project data — sourced from the original portfolio content
// and the research-poster detail visible in each project image.
// Fields left as [ADD ...] are genuinely missing from the source
// material and should be filled in by Abdul, not invented.
// =========================================================
const PROJECTS = [
  {
    id: "glof",
    title: "GLOF Mapping & Risk Assessment — Rogheli Gol, Golen Valley (Combined Remote Sensing, GIS & Dam-Break Modelling)",
    img: "images/project-glof.jpg",
    cats: ["hazard", "glacier"],
    tagLabel: "Hazard · GLOF",
    overview: "A methodology for mapping and assessing Glacial Lake Outburst Flood (GLOF) risk at Rogheli Gol in the Golen Valley, about 8 km from the main Chitral–Mastuj road, home to a 108 MW hydropower plant. The study combines satellite remote sensing, GIS and dam-break/flood-routing modelling to identify hazard and evaluate downstream impact.",
    flow: ["Landsat 1991–2023 (NDWI/MNDWI)", "GEE Unsupervised Classification", "ALOS PALSAR / Cartosat-1 DEM", "HEC-RAS Unsteady Flow & 2D GLOF Routing", "Flood Depth / Velocity / Arrival-Time Maps"],
    overviewExtra: "Landsat imagery (1991–2023, USGS) tracked lake-area change via NDWI/MNDWI; the Upper Lake grew from 0.0819 km² to 0.1150 km² and the Lower Lake from 0.1002 km² to 0.1231 km², with a new 0.0120 km² lake forming by 2023. Cross-sections built from a 12.5 m ALOS PALSAR / Cartosat-1 DEM fed unsteady-flow HEC-RAS simulations (peak discharge ≈ 4,021,649 cfs) to produce flood depth, velocity and arrival-time maps. The resulting risk assessment flagged 34 houses (18 low, 12 medium, 4 high risk), 2 bridges (1 medium, 1 high-risk — damaged in a 2019 GLOF), and rated the water channel and hydropower dam as high risk.",
    placeholder: "Research context: co-authored with Dr. Muhammad Amin, PMAS-Arid Agriculture University Rawalpindi.",
    link: null
  },
  {
    id: "reservoir",
    title: "Reservoir Sedimentation Assessment — Tarbela Dam, Indus River",
    img: "images/project-reservoir.jpg",
    cats: ["glacier"],
    tagLabel: "Water Resources",
    overview: "Evaluates sedimentation at Tarbela Dam (34°05′23″N, 72°41′54″E) on the Indus River — the world's second-largest reservoir by capacity — combining Landsat remote sensing with the Soil and Water Assessment Tool (SWAT) to estimate sediment yield, since traditional hydrographic surveys are costly and slow.",
    flow: ["Landsat + DEM + Climatic + Soil + LULC Data", "SWAT Hydrological Modelling", "Water-Spread Time Series (1990–2020)", "Sediment Yield Estimation"],
    overviewExtra: "Recent surveys cited in the study show Tarbela and Mangla dams have lost 28.23% and 20.54% of their original storage capacity respectively. Tarbela's water-spread area rose from 227.382 Mm² in 1990 to 248.787 Mm² in 2020, while estimated annual sediment volume rose from 2,253 Mm³ to 5,661 Mm³ over the same period — findings that support the case for sediment flushing and dredging strategies.",
    placeholder: "Research context: co-authored with Muhammad Waqas, Institute of Geo-information & Earth Observation.",
    link: null
  },
  {
    id: "lst",
    title: "Land Surface Temperature Dynamics — Islamabad & Rawalpindi",
    img: "images/project-lst.jpg",
    cats: ["environmental"],
    tagLabel: "Environmental Monitoring",
    overview: "Investigates Land Surface Temperature (LST) variation across Islamabad (~906 km², at the foot of the Margalla Hills) and Rawalpindi, examining how three decades of LULC change have driven the urban heat island effect.",
    flow: ["Landsat 5 & 8 Imagery", "GEE Unsupervised LULC Classification", "LST via Radiative Transfer Method", "NDVI–LST Correlation in ArcGIS"],
    overviewExtra: "LST was extracted from Landsat thermal bands using the radiative transfer method, while NDVI quantified green-space extent; correlating the two showed a clear cooling effect from vegetation and a corresponding heat increase as green space gave way to built-up land — an argument for preserving green space in future urban planning.",
    placeholder: "",
    link: null
  },
  {
    id: "webmap",
    title: "Interactive GIS Web Map for Real-Estate Visualization — Kohistan Enclave",
    img: "images/project-webmap.jpg",
    cats: ["webgis"],
    tagLabel: "Web GIS",
    overview: "An interactive, browser-based GIS map built for the Kohistan Enclave development, letting users pan and zoom a high-resolution satellite basemap, search locations and inspect approved plot boundaries and land-use zoning — deployed as a live map on GitHub Pages.",
    flow: ["Satellite Basemap Integration", "Zoning / Plot Boundary Layers", "Leaflet-Based Web GIS", "Deployed via GitHub Pages"],
    overviewExtra: "",
    placeholder: "[ADD FULL DATASET / BASEMAP PROVIDER DETAILS]",
    link: "https://wahidceogispak.github.io/LINKDIN1/#16/33.7673/72.7179"
  },
  {
    id: "lulc",
    title: "LULC & LST Dynamics as a Result of CPEC Development — District Abbottabad",
    img: "images/project-lulc.jpg",
    cats: ["environmental"],
    tagLabel: "Change Detection",
    overview: "Analyzes Land Use/Land Cover (LULC) and Land Surface Temperature (LST) change across District Abbottabad (1,967 sq mi, Hazara division) from 2013–2022, examining how urbanization and infrastructure growth linked to the China–Pakistan Economic Corridor (CPEC) reshaped land cover and local temperature.",
    flow: ["Landsat 8/9, Sentinel-2 & MODIS", "Supervised Classification + Kappa Accuracy", "NDVI / NDBI / LST (2013–2022)", "LULC Change Analysis"],
    overviewExtra: "Between 2013 and 2022, vegetation cover rose from 24% to 29% of the district thanks to reforestation and conservation efforts, while built-up area expanded from 20% to 27% — with barren land shrinking correspondingly, illustrating the trade-off between infrastructure growth and land conservation.",
    placeholder: "",
    link: null
  },
  {
    id: "cropwat",
    title: "Crop Water Requirement Assessment — Gilgit, Pakistan (CROPWAT Model)",
    img: "images/project-cropwat.jpg",
    cats: ["glacier"],
    tagLabel: "Water Resources",
    overview: "Assesses crop water requirements in Gilgit — a mountainous, semi-arid region reliant on glacial-melt and rainfall for irrigation — for wheat, maize, potatoes, apricots and apples, using the CROPWAT model to support more sustainable irrigation management.",
    flow: ["Climate, Crop & Soil Data (FAO CLIMWAT)", "Penman–Monteith ET₀ Calculation", "CROPWAT Modelling", "Irrigation Scheduling"],
    overviewExtra: "Reference evapotranspiration (ET₀) was calculated using the Penman–Monteith method within CROPWAT; results showed maize carries a notably higher water requirement than wheat or potatoes, informing optimized irrigation intervals for the region.",
    placeholder: "",
    link: null
  },
  {
    id: "snow",
    title: "Glacier & Snow-Cover Change — Rakaposhi, Shishper & Batura Glaciers, Karakoram",
    img: "images/project-snow.jpg",
    cats: ["glacier", "environmental"],
    tagLabel: "Glacier Monitoring",
    overview: "Tracks 33 years (1990–2023) of glacier change across the Rakaposhi, Shishper and Batura glaciers in the Karakoram Range — major contributors to the region's hydrology — by integrating snow-cover, temperature and land-cover analysis.",
    flow: ["Landsat 5 & 8 (1990–2023)", "GEE Unsupervised Classification", "NDSI Snow-Cover Mapping", "LST + NDVI–LST Correlation in ArcGIS"],
    overviewExtra: "The integration of NDSI, LST and LULC analysis showed a consistent decline in glacier area across all three glaciers over the 33-year record, correlated with rising temperatures and land-use change — underscoring the need for continued monitoring of Karakoram glacier dynamics.",
    placeholder: "",
    link: null
  },
  {
    id: "landslide",
    title: "Landslide Susceptibility Mapping — Chitral District (GIS, Remote Sensing & AHP)",
    img: "images/project-landslide.jpg",
    cats: ["hazard"],
    tagLabel: "Hazard · Landslide",
    overview: "Maps landslide susceptibility across Chitral district (Upper and Lower Chitral, Hindu Kush mountains, 14,850 km², population 447,362) — an area of recurring landslides — to support disaster mitigation, land-use planning and infrastructure decisions.",
    flow: ["12 m DEM (GEE) + Slope + Geology + LULC", "10 Thematic Layers", "AHP Weighted Overlay (consistency ratio 0.04)", "5-Class Susceptibility Map"],
    overviewExtra: "Ten thematic layers spanning human-induced, topographic, hydrological and geological factors were combined through the Analytic Hierarchy Process (AHP) with a consistency ratio of 0.04, producing a final map classifying the district into five susceptibility zones from very low to very high.",
    placeholder: "Research context: co-authored with Muhammad Waqas, Institute of Geo-information & Earth Observation.",
    link: null
  }
];

// =========================================================
// Certifications — sourced from the LinkedIn "Licenses &
// Certifications" export. Image field points to a predictable
// filename under images/certs/ — drop a matching file in and it
// renders automatically; until then a styled placeholder shows.
// =========================================================
const CERTS = [
  {
    img: "images/ML.png",
    title: "ML for Earth Systems Modelling",
    issuer: "European Centre for Medium-Range Weather Forecasts (ECMWF)",
    date: "Issued Sep 2026 · Expires Sep 2026",
    skills: ["Machine Learning"],
    desc: "A foundational course covering the use of Machine Learning and AI in Earth System Modeling, including data-driven weather forecasting, model development, datasets, uncertainty, and the role of AI in climate and Earth sciences."
  },
  {
    img: "images/GIS for Climate Action_Certificate.png",
    title: "GIS for Climate Action",
    issuer: "Esri",
    date: "Issued Feb 2026 · Expired Apr 2026",
    skills: ["GIS Applications", "Climate Change"],
    desc: "A six-week course focused on using Geographic Information Systems (GIS) to understand and address climate change. Covers analyzing environmental data, visualizing climate impacts, and applying geospatial tools to support sustainable decision-making and real-world solutions."
  },
  {
    img: "images/EOC.jpeg",
    title: "EOC100",
    issuer: "Justice Institute of British Columbia",
    date: "Issued Nov 2025",
    skills: [],
    desc: ""
  },
  {
    img: "images/cert-icimod-ml-dl-cryosphere.jpeg",
    title: "Application of Machine Learning and Deep Learning in Mountain Cryosphere Research",
    issuer: "ICIMOD",
    date: "Issued Dec 2025",
    skills: [],
    desc: ""
  },
  {
    img: "images\GSP_conference.jpeg",
    title: "International Conference on Geological Hazards in Pakistan",
    issuer: "Geological Survey of Pakistan",
    date: "Issued May 2025",
    skills: [],
    desc: ""
  },
  {
    img: "images\nmda.png",
    title: "Capacity Development in Disaster Management (C2DM)",
    issuer: "National Disaster Management Authority (NDMA) Pakistan",
    date: "Issued Oct 2025",
    skills: [],
    desc: ""
  },
  {
    img: "images/cert-esri-sar-arcgis-notebooks.png",
    title: "Processing SAR Data in ArcGIS Notebooks",
    issuer: "Esri",
    date: "Issued May 2025",
    skills: ["Automation", "Satellite Image Processing"],
    desc: "Learned how to process and analyze Synthetic Aperture Radar (SAR) data using ArcGIS Notebooks. Gained hands-on experience with Python scripting for automating geospatial workflows and enhancing SAR data interpretation in remote sensing projects."
  },
  {
    img: "images/cert-esri-getting-started.png",
    title: "Getting Started with GIS",
    issuer: "Esri",
    date: "Issued Jul 2019",
    skills: ["Geographic Information Systems (GIS)", "ArcGIS Pro"],
    desc: "A beginner-friendly introduction to the essential concepts and tools of GIS — creating, analyzing and visualizing spatial data for various applications."
  },
  {
    img: "images/intro_RemoteSensing.jpg",
    title: "Introduction to Remote Sensing",
    issuer: "GeoUniversity",
    date: "Issued Nov 2019",
    skills: ["Remote Sensing", "Remote Sensing Applications"],
    desc: "Covers the fundamental principles of remote sensing, including the collection, processing and interpretation of data captured by satellites and other sensors to observe and analyze the Earth's surface."
  },
  {
    img: "images/cert-geouni-eos-remote-sensing.jpg",
    title: "Remote Sensing and Satellite Image Processing with EOS Platform",
    issuer: "GeoUniversity",
    date: "Issued Nov 2020",
    skills: [],
    desc: "An introduction to remote sensing principles using the EOS Platform, focused on processing, analyzing and interpreting satellite imagery for various applications."
  },
  {
    img: "images/cert-geouni-latex.jpg",
    title: "Introduction to LaTeX",
    issuer: "GeoUniversity",
    date: "Issued Sep 2024",
    skills: ["LaTeX", "Overleaf"],
    desc: "Covers LaTeX basics, integrating tables/figures/graphs, managing references and bibliographies with BibTeX/BibLaTeX, building presentations with the Beamer class, and using Overleaf for collaborative document creation."
  },
  {
    img: "images/cert-unuinweh-flood-mapping.jpg",
    title: "Active and Passive Satellite Data Analysis Using Cloud Computing for Surface Water / Flood Mapping",
    issuer: "United Nations University Institute for Water, Environment and Health (UNU-INWEH)",
    date: "Issued Mar 2023",
    skills: ["Flood Risk", "Flood Management"],
    desc: "An introduction to the Earth Engine Code Editor platform, covering programming concepts for processing Optical and SAR remote sensing datasets for flood inundation mapping, change detection and damage assessment — including spectral water indices, time-series analysis of flooded areas, SAR backscatter thresholds, and flood frequency analysis."
  },
  {
    img: "images/cert-unuinweh-gee-chatgpt.jpg",
    title: "Introduction to Geospatial Data Analysis with ChatGPT and Google Earth Engine",
    issuer: "United Nations University Institute for Water, Environment and Health (UNU-INWEH)",
    date: "Issued Jan 2024",
    skills: ["Google Earth Engine", "ChatGPT"],
    desc: "An introduction to the Earth Engine Code Editor platform combined with ChatGPT for geospatial data analysis workflows."
  }
];

function initials(str){
  return str.replace(/\(.*?\)/g, "").trim().split(/\s+/).filter(w=>/[A-Za-z]/.test(w)).slice(0,2).map(w=>w[0]).join("").toUpperCase();
}

function renderCerts(){
  const el = document.getElementById("certGrid");
  if(!el) return;
  el.innerHTML = CERTS.map((c, i) => `
    <div class="cert-card">
      <div class="cert-thumb">
        <img src="${c.img}" alt="${c.title}" loading="lazy" onerror="this.classList.add('cert-img-hidden'); this.parentElement.querySelector('.cert-badge').style.display='flex';">
        <div class="cert-badge" style="display:none;">${initials(c.issuer)}</div>
      </div>
      <div class="cert-body">
        <div class="cert-issuer-row"><span class="cert-issuer">${c.issuer}</span><span>${c.date}</span></div>
        <div class="cert-title">${c.title}</div>
        ${c.skills.length ? `<div class="cert-skills">${c.skills.map(s=>`<span>${s}</span>`).join("")}</div>` : ""}
        <div class="cert-toggle" data-idx="${i}"><span class="arrow">›</span> Details</div>
        <div class="cert-desc" id="certDesc${i}">
          ${c.desc ? `<p>${c.desc}</p>` : `<p class="cert-desc-empty">No further details listed for this credential.</p>`}
        </div>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".cert-toggle").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btn.classList.toggle("open");
      document.getElementById("certDesc"+btn.dataset.idx).classList.toggle("open");
    });
  });
}
renderCerts();

// ---------- project cards render (with tilt handlers) ----------
const grid = document.getElementById("projectGrid");
function attachTilt(card){
  const isTouch = matchMedia("(hover: none)").matches;
  if(isTouch) return;
  card.addEventListener("mousemove", e=>{
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", (px*100)+"%");
    card.style.setProperty("--my", (py*100)+"%");
    card.style.setProperty("--rx", ((px-0.5) * 6).toFixed(2)+"deg");
    card.style.setProperty("--ry", ((0.5-py) * 6).toFixed(2)+"deg");
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.setProperty("--rx","0deg");
    card.style.setProperty("--ry","0deg");
  });
}
function renderProjects(filter){
  grid.innerHTML = "";
  PROJECTS
    .filter(p => filter === "all" || p.cats.includes(filter))
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "pcard reveal in";
      card.innerHTML = `
        <div class="pcard-img">
          <span class="pcard-tag">${p.tagLabel}</span>
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
        <div class="pcard-body">
          <h3>${p.title}</h3>
          <p>${p.overview.slice(0, 140)}${p.overview.length > 140 ? "…" : ""}</p>
          <span class="pcard-more">View case study →</span>
        </div>`;
      card.addEventListener("click", () => openLightbox(p));
      attachTilt(card);
      grid.appendChild(card);
    });
}
renderProjects("all");

document.querySelectorAll(".pf-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".pf-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// ---------- lightbox ----------
const lightbox = document.getElementById("lightbox");
function openLightbox(p){
  document.getElementById("lbImg").src = p.img;
  document.getElementById("lbImg").alt = p.title;
  document.getElementById("lbTitle").textContent = p.title;
  document.getElementById("lbOverview").textContent = p.overview;
  document.getElementById("lbMeta").innerHTML = p.cats.map(c=>`<span class="cs-chip">${c}</span>`).join("") + `<span class="cs-chip">${p.tagLabel}</span>`;
  document.getElementById("lbFlow").innerHTML = p.flow.map((f,i)=> (i>0?'<i>→</i>':'') + `<span>${f}</span>`).join("");

  const extraWrap = document.getElementById("lbExtraWrap");
  if(p.overviewExtra){ extraWrap.style.display = "block"; document.getElementById("lbExtra").textContent = p.overviewExtra; }
  else { extraWrap.style.display = "none"; }

  const phWrap = document.getElementById("lbPlaceholderWrap");
  const phHeading = document.getElementById("lbPlaceholderHeading");
  if(p.placeholder){
    phWrap.style.display = "block";
    document.getElementById("lbPlaceholder").textContent = p.placeholder;
    phHeading.textContent = (p.overviewExtra ? "04" : "03") + " — Note";
  } else {
    phWrap.style.display = "none";
  }

  const linkWrap = document.getElementById("lbLinkWrap");
  if(p.link){ linkWrap.style.display = "block"; document.getElementById("lbLink").href = p.link; }
  else { linkWrap.style.display = "none"; }
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxBackdrop").addEventListener("click", closeLightbox);
document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeLightbox(); });

// =========================================================
// Real email delivery via Web3Forms (free, no backend needed).
// Get your own access key at https://web3forms.com (enter your
// email, they send you a key instantly — no account/password).
// Replace the placeholder below with your real key.
// =========================================================
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";
const DEST_EMAIL = "wahidchitralii@gmail.com";

async function submitToWeb3Forms(fields){
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    email: DEST_EMAIL, // ensures delivery lands in your inbox regardless of sender
    ...fields
  };
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if(!res.ok || !data.success){ throw new Error(data.message || "Delivery failed"); }
  return data;
}

function mailtoFallback(subject, bodyLines){
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(bodyLines.join("\n"));
  window.location.href = `mailto:${DEST_EMAIL}?subject=${s}&body=${b}`;
}

// ---------- CV request modal ----------
const cvModal = document.getElementById("cvModal");
function openCvModal(){
  const form = document.getElementById("cvForm");
  form.reset();
  form.style.display = "block";
  document.getElementById("cvSent").style.display = "none";
  document.getElementById("cvError").style.display = "none";
  cvModal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCvModal(){
  cvModal.classList.remove("open");
  document.body.style.overflow = "";
}
["navResumeBtn","heroResumeBtn","contactResumeBtn"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener("click", e=>{ e.preventDefault(); openCvModal(); });
});
document.getElementById("cvClose").addEventListener("click", closeCvModal);
document.getElementById("cvBackdrop").addEventListener("click", closeCvModal);
document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeCvModal(); });

document.getElementById("cvForm").addEventListener("submit", async function(e){
  e.preventDefault();
  if(document.getElementById("cvBotcheck").checked) return; // honeypot: silently drop bots
  const name = document.getElementById("cvName").value.trim();
  const email = document.getElementById("cvEmail").value.trim();
  const reason = document.getElementById("cvReason").value.trim();
  const btn = document.getElementById("cvSubmitBtn");
  const errEl = document.getElementById("cvError");
  errEl.style.display = "none";
  btn.disabled = true; btn.textContent = "Sending…";
  try{
    await submitToWeb3Forms({
      subject: `CV Request from ${name}`,
      from_name: name,
      "Requester Email": email,
      "Reason": reason || "—",
      message: `${name} (${email}) requested access to your CV.\n\nReason: ${reason || "not given"}`
    });
    this.style.display = "none";
    document.getElementById("cvSent").style.display = "block";
  } catch(err){
    try{
      mailtoFallback(`CV Request from ${name}`, [`Name: ${name}`, `Email: ${email}`, reason ? `Reason: ${reason}` : null, "", "— Sent via fallback (direct delivery unavailable)"].filter(Boolean));
      errEl.textContent = "Direct delivery is temporarily unavailable — opening your email client instead.";
    } catch(_){
      errEl.textContent = "Something went wrong sending this. Please email me directly at " + DEST_EMAIL + ".";
    }
    errEl.style.display = "block";
  } finally {
    btn.disabled = false; btn.textContent = "Send Request";
  }
});

// ---------- nav toggle (mobile) ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", ()=>{
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=> navLinks.classList.remove("open")));

// ---------- scroll reveal ----------
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// Safety net: never leave content permanently invisible (e.g. deep links,
// instant/programmatic scrolls, or browsers where IO timing is unreliable).
function forceRevealVisible(){
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight && r.bottom > 0){ el.classList.add("in"); }
  });
}
window.addEventListener("load", forceRevealVisible);
window.addEventListener("hashchange", ()=> setTimeout(forceRevealVisible, 400));
setTimeout(()=> document.querySelectorAll(".reveal:not(.in)").forEach(el=>el.classList.add("in")), 2500);

// ---------- active nav link on scroll ----------
const sections = ["about-section","skills-section","project-section","resume-section","contact-section"].map(id=>document.getElementById(id));
const navA = navLinks.querySelectorAll('a[href^="#"]');
const navObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navA.forEach(a=> a.classList.toggle("active", a.getAttribute("href") === "#"+e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });
sections.forEach(s=> s && navObs.observe(s));

// ---------- back to top ----------
const totop = document.getElementById("totop");
const whatsappFab = document.querySelector(".whatsapp-fab");
window.addEventListener("scroll", ()=>{
  const past = window.scrollY > 700;
  totop.classList.toggle("show", past);
  if(whatsappFab) whatsappFab.classList.toggle("show", past);
});
totop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

// ---------- typed rotating role line ----------
const roles = ["GIS Officer, Aga Khan Agency for Habitat","GIS & Remote Sensing Professional","Freelance GIS Consultant","Planning to Pursue a PhD"];
const typedEl = document.getElementById("typedRole");
let ri = 0;
function cycleRole(){
  typedEl.style.opacity = 0;
  setTimeout(()=>{
    ri = (ri+1) % roles.length;
    typedEl.textContent = roles[ri];
    typedEl.style.opacity = 1;
  }, 350);
}
typedEl.style.transition = "opacity .35s ease";
setInterval(cycleRole, 3200);

// ---------- constellation network background (satellite/sensor motif) ----------
(function initConstellation(){
  const canvas = document.getElementById("constellation");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, nodes;

  function resize(){
    const hero = canvas.closest(".hero");
    w = canvas.width = hero.offsetWidth;
    h = canvas.height = hero.offsetHeight;
    const count = Math.max(18, Math.min(46, Math.round((w*h)/38000)));
    nodes = Array.from({length: count}, ()=>({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-0.5)*0.18, vy: (Math.random()-0.5)*0.18,
      r: Math.random()*1.6 + 0.6
    }));
  }

  function frame(){
    ctx.clearRect(0,0,w,h);
    nodes.forEach(n=>{
      n.x += n.vx; n.y += n.vy;
      if(n.x < 0 || n.x > w) n.vx *= -1;
      if(n.y < 0 || n.y > h) n.vy *= -1;
    });
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 140){
          ctx.strokeStyle = `rgba(78,136,166,${(1-dist/140)*0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
        }
      }
    }
    nodes.forEach(n=>{
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = "rgba(232,163,61,0.55)";
      ctx.fill();
    });
    if(!reduceMotion) requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  frame();
})();

// ---------- footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- scroll progress rail ----------
const progressFill = document.getElementById("progressFill");
function updateProgress(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (scrolled / max) * 100 : 0;
  if(progressFill) progressFill.style.width = pct + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// ---------- animated stat counters ----------
const statEls = document.querySelectorAll(".stat-num[data-target]");
function animateCount(el){
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || "";
  const dur = 1400;
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(target * eased);
    el.innerHTML = val + (suffix ? `<span>${suffix}</span>` : "");
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ animateCount(e.target); statObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
statEls.forEach(el=> statObs.observe(el));

// ---------- fixed section index tracker ----------
const sectionIndexEl = document.getElementById("sectionIndex");
const SECTION_ORDER = [
  {id:"top", label:"HOME"},
  {id:"about-section", label:"ABOUT"},
  {id:"focus-section", label:"FOCUS"},
  {id:"project-section", label:"PROJECTS"},
  {id:"skills-section", label:"SKILLS"},
  {id:"resume-section", label:"EXPERIENCE"},
  {id:"education-section", label:"EDUCATION"},
  {id:"certifications-section", label:"CERTS"},
  {id:"contact-section", label:"CONTACT"}
];
if(sectionIndexEl){
  const secObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const idx = SECTION_ORDER.findIndex(s=>s.id === e.target.id);
        if(idx > -1){
          const n = String(idx+1).padStart(2,"0");
          const total = String(SECTION_ORDER.length).padStart(2,"0");
          sectionIndexEl.innerHTML = `<b>${n}</b> / ${total} — ${SECTION_ORDER[idx].label}`;
        }
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  SECTION_ORDER.forEach(s=>{ const el = document.getElementById(s.id); if(el) secObs.observe(el); });
}

// ---------- contact form -> real delivery via Web3Forms ----------
document.getElementById("contactForm").addEventListener("submit", async function(e){
  e.preventDefault();
  if(document.getElementById("contactBotcheck").checked) return; // honeypot: silently drop bots
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const msg = document.getElementById("cmsg").value.trim();
  const btn = document.getElementById("contactSubmitBtn");
  const errEl = document.getElementById("contactError");
  errEl.style.display = "none";
  btn.disabled = true; btn.textContent = "Sending…";
  try{
    await submitToWeb3Forms({
      subject: `Portfolio enquiry from ${name}`,
      from_name: name,
      "Sender Email": email,
      message: msg
    });
    this.style.display = "none";
    document.getElementById("contactSent").style.display = "block";
  } catch(err){
    try{
      mailtoFallback(`Portfolio enquiry from ${name}`, [msg, "", `— ${name} (${email})`, "", "— Sent via fallback (direct delivery unavailable)"]);
      errEl.textContent = "Direct delivery is temporarily unavailable — opening your email client instead.";
    } catch(_){
      errEl.textContent = "Something went wrong sending this. Please email me directly at " + DEST_EMAIL + ".";
    }
    errEl.style.display = "block";
  } finally {
    btn.disabled = false; btn.textContent = "Send Message";
  }
});
