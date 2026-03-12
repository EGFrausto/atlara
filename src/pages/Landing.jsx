import React, { useEffect, useRef } from "react";

const productos = [
  {
    id: "finance",
    nombre: "Finance",
    logo: "/at-fin.png",
    tag: "Gestión Financiera",
    tagColor: "#0090b0",
    tagBg: "rgba(0,180,216,.1)",
    color: "#00b4d8",
    gradiente: "linear-gradient(90deg, #0090b0, #00b4d8, #00d4f5)",
    desc: "Controla activos, contratos, clientes y pagos desde una sola plataforma. Adaptado a cualquier industria.",
    features: ["Dashboard en tiempo real", "Gestión de contratos", "Control de pagos y cobranza", "Reportes automáticos"],
    cta: "Iniciar sesión",
    ctaLink: "https://atlara-finance.vercel.app",
    activo: true,
  },
  {
    id: "logistics",
    nombre: "Logistics",
    logo: "/at-logi.png",
    tag: "Gestión Logística",
    tagColor: "#1a9e6e",
    tagBg: "rgba(46,201,154,.1)",
    color: "#2ec99a",
    gradiente: "linear-gradient(90deg, #1a9e6e, #2ec99a, #4de8b8)",
    desc: "Optimiza rutas, rastrea flotillas y gestiona operaciones logísticas con visibilidad total en tiempo real.",
    features: ["Rastreo de flotillas", "Optimización de rutas", "Control de operadores", "Reportes de eficiencia"],
    cta: "Próximamente",
    ctaLink: null,
    activo: false,
  },
  {
    id: "systems",
    nombre: "Systems",
    logo: "/at-sys.png",
    tag: "Infraestructura Tech",
    tagColor: "#5a54c4",
    tagBg: "rgba(124,111,247,.1)",
    color: "#7c6ff7",
    gradiente: "linear-gradient(90deg, #5a54c4, #7c6ff7, #9d93ff)",
    desc: "Soluciones de infraestructura tecnológica y automatización para empresas que quieren escalar sin límites.",
    features: ["Automatización de procesos", "Integración de sistemas", "Infraestructura en la nube", "Soporte empresarial"],
    cta: "Próximamente",
    ctaLink: null,
    activo: false,
  },
];

function Landing() {
  const revealsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80);
        }
      });
    }, { threshold: 0.1 });
    revealsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el) => { if (el) revealsRef.current.push(el); };

  return (
    <div>
      {/* NAV */}
      <nav style={styles.nav}>
        <img src="/left-a.png" alt="Atlara" style={{ height: 60, width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} />
        <ul style={styles.navLinks}>
          <li><a href="#productos" style={styles.navLink}>Productos</a></li>
          <li><a href="#ecosistema" style={styles.navLink}>Ecosistema</a></li>
          <li><a href="#contacto" style={styles.navLink}>Contacto</a></li>
          <li><a href="#contacto" style={styles.navCta}>Solicitar Demo</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.heroTag}>
          <div style={styles.heroTagDot} />
          Ecosistema de Software Empresarial
        </div>
        <h1 style={styles.heroTitle}>
          Software que<br />
          <span style={styles.heroGrad}>transforma</span><br />
          industrias.
        </h1>
        <p style={styles.heroSub}>
          Atlara desarrolla soluciones tecnológicas para empresas que necesitan operar con mayor velocidad, claridad y control.
        </p>
        <div style={styles.heroActions}>
          <a href="#productos" style={styles.btnDark}>Ver productos</a>
          <a href="#contacto" style={styles.btnOutline}>Contactar</a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={styles.products} id="productos">
        <div ref={addReveal} style={styles.sectionHeader} className="reveal">
          <div style={styles.eyebrow}>Nuestros productos</div>
          <h2 style={styles.sectionTitle}>Un ecosistema.<br />Tres soluciones.</h2>
          <p style={styles.sectionSub}>Cada producto está diseñado para resolver un problema específico, pero funcionan mejor juntos.</p>
        </div>

        <div style={styles.productsGrid}>
          {productos.map((p, i) => (
            <div
              key={p.id}
              ref={addReveal}
              className="reveal"
              style={{ ...styles.productCard, opacity: p.activo ? 1 : 0.7 }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,.08)";
                e.currentTarget.querySelector(".card-bar").style.opacity = "1";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector(".card-bar").style.opacity = "0";
              }}
            >
              <div className="card-bar" style={{ ...styles.cardBar, background: p.gradiente }} />
              <img src={p.logo} alt={p.nombre} style={styles.productLogo} />
              <div style={styles.productName}>{p.nombre}</div>
              <div style={{ ...styles.productTag, background: p.tagBg, color: p.tagColor }}>{p.tag}</div>
              <p style={styles.productDesc}>{p.desc}</p>
              <div style={styles.featureList}>
                {p.features.map((f, j) => (
                  <div key={j} style={styles.featureItem}>
                    <div style={{ ...styles.featureDot, background: p.color }} />
                    {f}
                  </div>
                ))}
              </div>
              {p.activo ? (
                <a href={p.ctaLink} style={{ ...styles.productCta, color: p.color }}>
                  {p.cta} →
                </a>
              ) : (
                <span style={{ ...styles.productCtaDisabled, color: p.color }}>{p.cta}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section style={styles.ecosystem} id="ecosistema">
        <div ref={addReveal} className="reveal">
          <div style={{ ...styles.eyebrow, color: "rgba(255,255,255,.4)" }}>El ecosistema</div>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>Números que hablan.</h2>
          <p style={{ ...styles.sectionSub, color: "rgba(255,255,255,.4)" }}>Atlara está en construcción activa. Esto es lo que ya tenemos.</p>
        </div>
        <div ref={addReveal} className="reveal" style={styles.ecoGrid}>
          {[
            { num: "1", label: "Producto en producción", color: "#00b4d8" },
            { num: "3", label: "Productos en el ecosistema", color: "#2ec99a" },
            { num: "∞", label: "Industrias que podemos servir", color: "#7c6ff7" },
          ].map((e, i) => (
            <div key={i} style={styles.ecoItem}>
              <div style={{ ...styles.ecoNum, color: e.color }}>{e.num}</div>
              <div style={styles.ecoLabel}>{e.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta} id="contacto">
        <h2 ref={addReveal} className="reveal" style={styles.ctaTitle}>
          ¿Listo para transformar<br />tu operación?
        </h2>
        <p ref={addReveal} className="reveal" style={styles.ctaSub}>
          Agenda una demo personalizada y te mostramos cómo Atlara se adapta a tu empresa.
        </p>
        <div ref={addReveal} className="reveal" style={styles.heroActions}>
          <a href="mailto:contacto@atlara.mx" style={styles.btnDark}>Solicitar Demo</a>
          <a href="#productos" style={styles.btnOutline}>Ver productos</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <img src="/left-a.png" alt="Atlara" style={{ height: 50, width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} />
        <div style={styles.footerProducts}>
          <a href="#" style={{ ...styles.footerProduct, color: "#0090b0" }}>Finance</a>
          <a href="#" style={{ ...styles.footerProduct, color: "#1a9e6e" }}>Logistics</a>
          <a href="#" style={{ ...styles.footerProduct, color: "#5a54c4" }}>Systems</a>
        </div>
        <div style={styles.footerCopy}>© 2026 Atlara. Todos los derechos reservados.</div>
      </footer>

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        a { text-decoration: none; }
      `}</style>
    </div>
  );
}

const styles = {
  nav: { position:"fixed", top:0, left:0, right:0, zIndex:100, height:70, background:"rgba(255,255,255,.85)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", borderBottom:"1px solid rgba(0,0,0,.08)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 48px" },
  navLinks: { display:"flex", alignItems:"center", gap:32, listStyle:"none" },
  navLink: { fontSize:13, fontWeight:400, color:"#86868b", textDecoration:"none" },
  navCta: { background:"#1d1d1f", color:"#ffffff", padding:"7px 16px", borderRadius:20, fontWeight:500, fontSize:13, textDecoration:"none" },
  hero: { minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"120px 48px 80px", position:"relative", overflow:"hidden" },
  heroBg: { position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 50% at 20% 50%, rgba(0,180,216,.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(124,111,247,.05) 0%, transparent 60%)" },
  heroTag: { display:"inline-flex", alignItems:"center", gap:6, background:"#f5f5f7", border:"1px solid #e8e8ed", borderRadius:20, padding:"6px 14px", fontSize:12, fontWeight:500, color:"#86868b", marginBottom:32, position:"relative" },
  heroTagDot: { width:6, height:6, borderRadius:"50%", background:"#00b4d8" },
  heroTitle: { fontFamily:"'Outfit', sans-serif", fontSize:"clamp(52px, 7vw, 88px)", fontWeight:800, lineHeight:1.0, letterSpacing:-2, color:"#1d1d1f", marginBottom:24, position:"relative" },
  heroGrad: { background:"linear-gradient(135deg, #0090b0, #00b4d8, #00d4f5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" },
  heroSub: { fontSize:19, fontWeight:300, color:"#86868b", maxWidth:560, lineHeight:1.6, marginBottom:48, position:"relative" },
  heroActions: { display:"flex", gap:12, alignItems:"center", justifyContent:"center", position:"relative" },
  btnDark: { background:"#1d1d1f", color:"#ffffff", border:"none", borderRadius:24, padding:"14px 28px", fontSize:15, fontWeight:500, cursor:"pointer", textDecoration:"none" },
  btnOutline: { background:"transparent", color:"#1d1d1f", border:"1px solid #e8e8ed", borderRadius:24, padding:"14px 28px", fontSize:15, fontWeight:500, cursor:"pointer", textDecoration:"none" },
  products: { padding:"100px 48px", background:"#f5f5f7" },
  sectionHeader: { textAlign:"center", marginBottom:64 },
  eyebrow: { fontSize:13, fontWeight:500, color:"#86868b", textTransform:"uppercase", letterSpacing:2, marginBottom:16 },
  sectionTitle: { fontFamily:"'Outfit', sans-serif", fontSize:"clamp(36px, 4vw, 52px)", fontWeight:700, letterSpacing:-1, color:"#1d1d1f", lineHeight:1.1 },
  sectionSub: { fontSize:17, color:"#86868b", fontWeight:300, maxWidth:500, margin:"16px auto 0", lineHeight:1.6 },
  productsGrid: { display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20, maxWidth:1100, margin:"0 auto" },
  productCard: { background:"#ffffff", borderRadius:24, padding:"40px 36px", border:"1px solid #e8e8ed", transition:"transform .3s ease, box-shadow .3s ease", cursor:"pointer", position:"relative", overflow:"hidden" },
  cardBar: { position:"absolute", top:0, left:0, right:0, height:3, borderRadius:"24px 24px 0 0", opacity:0, transition:"opacity .3s" },
  productLogo: { height:72, width:"auto", objectFit:"contain", marginBottom:28, mixBlendMode:"multiply" },
  productName: { fontFamily:"'Outfit', sans-serif", fontSize:24, fontWeight:700, color:"#1d1d1f", letterSpacing:-0.3, marginBottom:8 },
  productTag: { display:"inline-block", fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:12, marginBottom:20, textTransform:"uppercase", letterSpacing:1 },
  productDesc: { fontSize:15, color:"#86868b", lineHeight:1.6, fontWeight:300, marginBottom:28 },
  featureList: { display:"flex", flexDirection:"column", gap:8, marginBottom:32 },
  featureItem: { display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#1d1d1f", fontWeight:400 },
  featureDot: { width:5, height:5, borderRadius:"50%", flexShrink:0 },
  productCta: { fontSize:14, fontWeight:600, textDecoration:"none" },
  productCtaDisabled: { fontSize:14, fontWeight:600, opacity:0.5 },
  ecosystem: { padding:"100px 48px", background:"#1d1d1f", textAlign:"center" },
  ecoGrid: { display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:1, background:"rgba(255,255,255,.08)", maxWidth:900, margin:"64px auto 0", borderRadius:20, overflow:"hidden" },
  ecoItem: { background:"#1d1d1f", padding:"48px 32px" },
  ecoNum: { fontFamily:"'Outfit', sans-serif", fontSize:48, fontWeight:800, marginBottom:8 },
  ecoLabel: { fontSize:13, color:"rgba(255,255,255,.4)", fontWeight:400 },
  cta: { padding:"120px 48px", textAlign:"center", background:"#ffffff" },
  ctaTitle: { fontFamily:"'Outfit', sans-serif", fontSize:"clamp(40px, 5vw, 64px)", fontWeight:800, letterSpacing:-2, color:"#1d1d1f", lineHeight:1.05, marginBottom:20 },
  ctaSub: { fontSize:17, color:"#86868b", fontWeight:300, marginBottom:40, maxWidth:480, margin:"0 auto 40px" },
  footer: { background:"#f5f5f7", borderTop:"1px solid #e8e8ed", padding:"40px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" },
  footerProducts: { display:"flex", gap:24 },
  footerProduct: { fontSize:12, fontWeight:500, textDecoration:"none" },
  footerCopy: { fontSize:12, color:"#86868b" },
};

export default Landing;