// Shared site-chrome strings (nav, mobile overlay, language switcher) for all 4 languages.
// Blog/resources has no DE/ES content yet, so `resources` is null for those two —
// templates should skip rendering the resources link when it's null.
module.exports = {
  fr: {
    home: "Accueil", homeUrl: "/?lang=fr",
    partners: "Distributeurs", partnersUrl: "/fr/distributeurs/",
    whoWeServe: "Secteurs",
    sectors: [
      { label: "SDIS / Pompiers", url: "/fr/sdis-pompiers/" },
      { label: "SAMU / SMUR", url: "/fr/services-urgence-hopitaux/" },
      { label: "Protection civile", url: "/fr/protection-civile/" },
      { label: "Événementiel sportif", url: "/fr/assistance-medicale-evenements/" },
      { label: "Défense & Militaire", url: "/fr/defense-militaire/" },
      { label: "Sécurité au travail", url: "/fr/securite-travail/" }
    ],
    resources: "Ressources", resourcesUrl: "/blog/?lang=fr",
    monitor: "Moniteur EHS", monitorUrl: "/fr/monitor/",
    quote: "Obtenir un devis", quoteUrl: "/#contact",
    closeMenu: "Fermer le menu"
  },
  en: {
    home: "Home", homeUrl: "/en/",
    partners: "Partners", partnersUrl: "/en/partners/",
    whoWeServe: "Who We Serve",
    sectors: [
      { label: "Fire & Rescue", url: "/en/fire-rescue/" },
      { label: "EMS & Emergency Depts", url: "/en/emergency-medical-services/" },
      { label: "Civil Protection", url: "/en/civil-protection/" },
      { label: "Event Medical", url: "/en/event-medical-support/" },
      { label: "Defense & Military", url: "/en/defense-military/" },
      { label: "Occupational Safety", url: "/en/occupational-safety/" }
    ],
    resources: "Resources", resourcesUrl: "/blog/?lang=en",
    monitor: "EHS Monitor", monitorUrl: "/en/monitor/",
    quote: "Get a quote", quoteUrl: "/en/#contact",
    closeMenu: "Close menu"
  },
  de: {
    home: "Startseite", homeUrl: "/de/",
    partners: "Vertriebspartner", partnersUrl: "/de/vertriebspartner/",
    whoWeServe: "Einsatzbereiche",
    sectors: [
      { label: "Feuerwehr & Rettungsdienst", url: "/de/feuerwehr-rettungsdienst/" },
      { label: "Rettungsdienst & Notaufnahme", url: "/de/rettungsdienst-notaufnahme/" },
      { label: "Zivilschutz", url: "/de/zivilschutz/" },
      { label: "Sportveranstaltungen", url: "/de/sportveranstaltungen-medizin/" },
      { label: "Verteidigung & Militär", url: "/de/verteidigung-militaer/" },
      { label: "Arbeitssicherheit", url: "/de/arbeitssicherheit/" }
    ],
    resources: null, resourcesUrl: null,
    monitor: "EHS-Monitor", monitorUrl: "/de/monitor/",
    quote: "Angebot anfordern", quoteUrl: "/de/#contact",
    closeMenu: "Menü schließen"
  },
  es: {
    home: "Inicio", homeUrl: "/es/",
    partners: "Distribuidores", partnersUrl: "/es/distribuidores/",
    whoWeServe: "A quién servimos",
    sectors: [
      { label: "Bomberos y Rescate", url: "/es/bomberos-rescate/" },
      { label: "Emergencias Sanitarias", url: "/es/servicios-emergencias-sanitarias/" },
      { label: "Protección Civil", url: "/es/proteccion-civil/" },
      { label: "Eventos Deportivos", url: "/es/asistencia-medica-eventos/" },
      { label: "Defensa y Militar", url: "/es/defensa-militar/" },
      { label: "Seguridad Laboral", url: "/es/seguridad-laboral/" }
    ],
    resources: null, resourcesUrl: null,
    monitor: "Monitor EHS", monitorUrl: "/es/monitor/",
    quote: "Solicitar presupuesto", quoteUrl: "/es/#contact",
    closeMenu: "Cerrar menú"
  }
};
