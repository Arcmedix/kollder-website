// Heat stroke knowledge quiz: questions, UI strings and tier messaging for fr and en.
// Every fact below comes from sources already cited in the blog corpus (ACSM 2023, IOC/BJSM 2021,
// Casa 2007, Korey Stringer Institute, Walter & Carraretto 2016, Décret 2025-482).
// Do not add a figure here without a source. Positioning rules apply: no deployment-speed claim,
// no single-operator claim, no em dashes.
// `answer` is the index of the correct option. Options are shown in the order written.
module.exports = {
  formId: "mykovqeg",
  pdfUrl: "/downloads/kollder-guide-cce-2026.pdf",
  total: 10,

  fr: {
    seo: {
      title: "Test de connaissances : coup de chaleur d'effort",
      description: "10 questions sur le coup de chaleur d'effort, avec correction sourcée après chaque réponse (ACSM 2023, IOC/BJSM 2021, Korey Stringer Institute). Pour SDIS, SAMU/SMUR, médecins d'événements sportifs et responsables EHS."
    },
    hero: {
      label: "Test de connaissances",
      title: "Coup de chaleur d'effort : que savez-vous vraiment ?",
      sub: "10 questions pour tester vos réflexes face au coup de chaleur d'effort. Après chaque réponse, la correction et la source scientifique. Conçu pour les équipes SDIS, SAMU/SMUR, les médecins d'événements sportifs et les responsables EHS.",
      dims: ["10 questions", "Environ 3 minutes", "Correction sourcée après chaque réponse"],
      cta: "Commencer le test",
      altLabel: "English version"
    },
    ui: {
      questionOf: "Question {n} sur {total}",
      typeMcq: "Choix multiple",
      typeTf: "Vrai ou faux",
      tfOptions: ["Vrai", "Faux"],
      chipZero: "0 bonne réponse",
      chipOne: "1 bonne réponse",
      chipMany: "{n} bonnes réponses",
      chipDone: "Test terminé",
      correct: "Bonne réponse",
      wrong: "Mauvaise réponse",
      correctAnswer: "Réponse correcte : ",
      source: "Source : ",
      next: "Question suivante",
      finish: "Voir mon résultat",
      noscript: "Ce test nécessite JavaScript pour fonctionner.",
      progressLabel: "Progression du test"
    },
    gate: {
      eyebrow: "Résultat verrouillé",
      headline: "Votre score est prêt. Débloquez-le avec votre email professionnel.",
      body: "Vous recevrez aussi le guide complet du protocole Cool First, Transport Second, le même protocole que les équipes SAMU, SDIS et médecins d'événements sportifs utilisent sur le terrain.",
      placeholder: "Votre email professionnel",
      button: "Débloquer mon résultat",
      fine: "Pas de spam. Un seul email, immédiat.",
      sending: "Envoi en cours...",
      retry: "Réessayer",
      invalid: "Saisissez une adresse email valide.",
      failed: "L'envoi a échoué. Vérifiez votre connexion et réessayez.",
      emailLabel: "Email professionnel",
      subject: "Test connaissances coup de chaleur : kollder.com"
    },
    result: {
      scoreLabel: "Votre score",
      nextEyebrow: "Étape suivante",
      quoteCta: "Demander un devis Kollder",
      guide: "Télécharger le guide protocole complet (PDF)",
      report: "Télécharger mon bilan",
      reportHint: "Le bilan s'ouvre dans la fenêtre d'impression : choisissez « Enregistrer au format PDF ».",
      retake: "Refaire le test",
      tiers: [
        {
          min: 8,
          title: "Vous raisonnez déjà comme un professionnel du protocole",
          body: "Vos réponses montrent une bonne maîtrise du coup de chaleur d'effort et de la logique Cool First, Transport Second. Votre bilan détaille les points à consolider, le cas échéant.",
          next: "Le protocole suppose de disposer, sur place, d'un équipement d'immersion adapté. Kollder One™ repose sur un cadre acier à 6 points d'appui, stable sur terrain irrégulier, avec une capacité de 2 personnes en immersion simultanée. Il se replie dans le sac de transport Kollder Go™."
        },
        {
          min: 5,
          title: "De bonnes bases, quelques angles morts",
          body: "Vous maîtrisez l'essentiel, mais certains points, détaillés dans votre bilan, sont ceux sur lesquels les équipes hésitent le plus. Le guide protocole complet les reprend étape par étape.",
          next: "Une fois le protocole clair, reste la question de l'équipement pour l'appliquer sur place. Kollder One™ repose sur un cadre acier à 6 points d'appui, stable sur terrain irrégulier, avec une capacité de 2 personnes en immersion simultanée. Il se replie dans le sac de transport Kollder Go™."
        },
        {
          min: 0,
          title: "Ce test vient de révéler un vrai risque",
          body: "Ces questions portent sur des points décisifs dans la littérature médicale, et souvent contre-intuitifs. Ce n'est pas un jugement sur votre niveau : c'est un repère utile avant la prochaine intervention. Commencez par votre bilan et par le guide protocole complet.",
          next: "Une fois le protocole maîtrisé, l'enjeu est de disposer sur place d'un équipement d'immersion adapté. Kollder One™ repose sur un cadre acier à 6 points d'appui, stable sur terrain irrégulier, avec une capacité de 2 personnes en immersion simultanée. Il se replie dans le sac de transport Kollder Go™."
        }
      ]
    },
    print: {
      docTitle: "Bilan Kollder : test coup de chaleur d'effort",
      heading: "Bilan de connaissances : coup de chaleur d'effort",
      dateLabel: "Date : ",
      score: "Score : ",
      review: "Questions à revoir",
      none: "Toutes les réponses étaient correctes. Les sources ci-dessous permettent d'approfondir chaque point.",
      yourAnswer: "Votre réponse : ",
      correctAnswer: "Réponse correcte : ",
      refs: "Références",
      footer: "Kollder, refroidissement d'urgence. kollder.com"
    },
    reading: {
      title: "Pour aller plus loin",
      items: [
        { kicker: "Médecine d'urgence", title: "Cool First Transport Second : le protocole qui sauve des vies sur le terrain", url: "/blog/fr/2026-05-25-cool-first-transport-second-protocole-complet/" },
        { kicker: "Médecine d'urgence", title: "Immersion en eau froide vs autres méthodes de refroidissement : comparatif chiffré", url: "/blog/fr/2026-05-25-immersion-eau-froide-vs-autres-methodes-comparatif/" },
        { kicker: "Médecine d'urgence", title: "Guide complet du coup de chaleur d'effort", url: "/blog/fr/2026-06-16-guide-complet-coup-de-chaleur-d-effort/" },
        { kicker: "Pour votre secteur", title: "Baignoire de refroidissement d'urgence pour SDIS", url: "/fr/sdis-pompiers/" }
      ]
    },
    sourcesLabel: "Sources",
    questions: [
      {
        type: "mcq",
        q: "Un coureur s'effondre par forte chaleur. Quel signe permet de distinguer un coup de chaleur d'un simple épuisement par la chaleur ?",
        options: [
          "Une peau très chaude et rouge au toucher",
          "Une altération de l'état mental : confusion, désorientation, agressivité",
          "Des crampes musculaires et de forts maux de tête",
          "Une soif intense associée à une grande fatigue"
        ],
        answer: 1,
        fact: "C'est l'altération de l'état mental (confusion, désorientation, agressivité) qui fait basculer d'un épuisement par la chaleur vers un coup de chaleur. La température de la peau seule ne permet pas de trancher : le diagnostic associe ce signe neurologique à une température centrale supérieure à 40°C.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "tf",
        q: "Le coup de chaleur d'effort ne survient qu'au-dessus de 30°C de température ambiante.",
        answer: 1,
        fact: "Il peut survenir à température ambiante modérée : quand l'effort et l'humidité bloquent la dissipation de la chaleur, la température centrale s'emballe, sans qu'aucun seuil de température de l'air ne soit nécessaire.",
        source: "IOC Adverse Weather Impact Expert Working Group, Hosokawa Y, Racinais S et al., BJSM, 2021"
      },
      {
        type: "mcq",
        q: "Sur le terrain, quelle mesure fait référence pour confirmer un coup de chaleur et suivre le refroidissement ?",
        options: [
          "La température axillaire (sous l'aisselle)",
          "La température frontale (thermomètre infrarouge)",
          "La température rectale",
          "La température à l'oreille (tympanique)"
        ],
        answer: 2,
        fact: "L'ACSM désigne la thermométrie rectale comme la référence pour le diagnostic et le suivi du refroidissement sur le terrain. Les mesures axillaire ou à l'oreille ne sont pas suffisantes.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "mcq",
        q: "Quel écart de vitesse de refroidissement sépare l'immersion en eau froide des poches de glace ou des serviettes humides ?",
        options: [
          "L'immersion est de l'ordre de 10 fois plus rapide",
          "L'immersion est environ 2 fois plus rapide",
          "Aucun écart notable : toutes ces méthodes refroidissent à environ 0,3°C par minute",
          "L'immersion est environ 100 fois plus rapide"
        ],
        answer: 0,
        fact: "L'immersion en eau froide refroidit à environ 0,35°C par minute, contre environ 0,03°C par minute pour les poches de glace ou les serviettes humides : un facteur de l'ordre de 10. C'est la seule méthode qui permet de tenir de façon fiable la fenêtre de 30 minutes.",
        source: "Casa DJ et al., Exercise and Sport Sciences Reviews, 2007"
      },
      {
        type: "tf",
        q: "Attendre l'arrivée de l'ambulance avant de commencer à refroidir est l'option la plus sûre pour la victime.",
        answer: 1,
        fact: "Le protocole est Cool First, Transport Second : on refroidit sur place, on transporte ensuite. Le Korey Stringer Institute documente un taux de survie de 100 % sur plus de 401 cas lorsque la température centrale repasse sous 40°C dans les 30 minutes suivant l'effondrement.",
        source: "Korey Stringer Institute, Dr Douglas Casa, University of Connecticut"
      },
      {
        type: "mcq",
        q: "Quand la température centrale reste trop longtemps élevée, quelles atteintes la littérature médicale décrit-elle ?",
        options: [
          "Une déshydratation sévère, réversible après réhydratation",
          "Une atteinte limitée au cœur, les autres organes étant protégés",
          "Des crampes et une fatigue musculaire, sans conséquence sur les organes",
          "Des atteintes du cerveau, des reins et du foie, parfois irréversibles"
        ],
        answer: 3,
        fact: "Le cerveau (avec un risque de séquelles neurologiques durables, notamment cérébelleuses), les reins (rhabdomyolyse, insuffisance rénale aiguë) et le foie (insuffisance hépatique) sont touchés. Chaque minute passée au-dessus de 40°C aggrave les lésions.",
        source: "Walter EJ & Carraretto M, Critical Care, 2016"
      },
      {
        type: "tf",
        q: "Une victime qui transpire encore abondamment peut malgré tout être en coup de chaleur d'effort.",
        answer: 0,
        fact: "La transpiration peut être présente ou absente lors d'un coup de chaleur d'effort. Le critère déterminant est l'association d'une température centrale élevée et de signes neurologiques (confusion, troubles de l'équilibre, agitation), pas l'absence de sueur.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "mcq",
        q: "Sur un chantier, un ouvrier s'effondre par forte chaleur, confus et agressif. Quelle est la conduite à tenir ?",
        options: [
          "Le mettre à l'ombre, lui faire boire de l'eau et attendre le SAMU",
          "L'immerger dans de l'eau froide sur place et appeler le 15 en parallèle",
          "Le transporter en véhicule climatisé vers les urgences le plus vite possible",
          "Lui appliquer des serviettes humides et des poches de glace, puis l'évacuer"
        ],
        answer: 1,
        fact: "Cool First, Transport Second : refroidir immédiatement par immersion en eau froide, en alertant le 15 en parallèle. La mise à l'ombre, les serviettes humides et les poches de glace (environ 0,03°C par minute) ne suffisent pas à traiter un coup de chaleur avéré, et un transport sans refroidissement prolonge l'exposition de l'organisme à plus de 40°C.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023 ; SFAR"
      },
      {
        type: "mcq",
        q: "Que rapporte l'ACSM du suivi à long terme des patients hospitalisés pour une maladie liée à la chaleur d'effort ?",
        options: [
          "Un risque identique à celui de la population de référence après la guérison",
          "Une sensibilité accrue à la chaleur, sans autre conséquence médicale documentée",
          "Un risque accru d'événements cardiovasculaires majeurs, d'AVC ischémique et de fibrillation auriculaire",
          "Un risque accru limité aux troubles rénaux"
        ],
        answer: 2,
        fact: "Dans un suivi de 14 ans, les survivants présentaient une incidence 3,9 fois plus élevée d'événements cardiovasculaires majeurs, un risque d'AVC ischémique 5,5 fois plus élevé et une incidence de fibrillation auriculaire 15 fois plus élevée. Une cohorte de militaires américains hospitalisés pour ce type de pathologie affichait aussi un risque de mortalité à long terme supérieur de 40 % à celui d'une cohorte de référence hospitalisée pour appendicite.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "tf",
        q: "Depuis le 1er juillet 2025, le décret n°2025-482 impose à l'employeur des obligations spécifiques de prévention face aux fortes chaleurs.",
        answer: 0,
        fact: "Le décret n°2025-482 du 27 mai 2025 crée dans le Code du travail un chapitre dédié aux épisodes de chaleur intense (articles R.4463-1 à R.4463-8). Les obligations de l'employeur sont déclenchées par les niveaux de vigilance canicule de Météo-France (jaune, orange, rouge) et s'adaptent à l'intensification de la chaleur.",
        source: "Décret n°2025-482 du 27 mai 2025, Code du travail, articles R.4463-1 à R.4463-8"
      }
    ]
  },

  en: {
    seo: {
      title: "Heat Stroke Knowledge Test",
      description: "10 questions on exertional heat stroke, with a sourced explanation after every answer (ACSM 2023, IOC/BJSM 2021, Korey Stringer Institute). For fire and rescue, EMS, event medical directors and EHS managers."
    },
    hero: {
      label: "Knowledge test",
      title: "Exertional heat stroke: how much do you really know?",
      sub: "10 questions to test your instincts on exertional heat stroke. After every answer, the correct answer and the scientific source. Built for fire and rescue teams, EMS, event medical directors and EHS managers.",
      dims: ["10 questions", "About 3 minutes", "Sourced explanation after every answer"],
      cta: "Start the test",
      altLabel: "Version française"
    },
    ui: {
      questionOf: "Question {n} of {total}",
      typeMcq: "Multiple choice",
      typeTf: "True or false",
      tfOptions: ["True", "False"],
      chipZero: "0 correct answers",
      chipOne: "1 correct answer",
      chipMany: "{n} correct answers",
      chipDone: "Test complete",
      correct: "Correct",
      wrong: "Incorrect",
      correctAnswer: "Correct answer: ",
      source: "Source: ",
      next: "Next question",
      finish: "See my result",
      noscript: "This test requires JavaScript to run.",
      progressLabel: "Test progress"
    },
    gate: {
      eyebrow: "Result locked",
      headline: "Your score is ready. Unlock it with your work email.",
      body: "You will also receive the complete Cool First, Transport Second protocol guide, the same protocol that EMS crews, fire departments and sports event medical directors use in the field.",
      placeholder: "Your work email",
      button: "Unlock my result",
      fine: "No spam. One email, sent immediately.",
      sending: "Sending...",
      retry: "Try again",
      invalid: "Enter a valid email address.",
      failed: "Sending failed. Check your connection and try again.",
      emailLabel: "Work email",
      subject: "Heat stroke knowledge test: kollder.com"
    },
    result: {
      scoreLabel: "Your score",
      nextEyebrow: "Next step",
      quoteCta: "Request a Kollder quote",
      guide: "Download the complete protocol guide (PDF)",
      report: "Download my report",
      reportHint: "The report opens in the print dialog: choose \"Save as PDF\". The guide PDF is in French.",
      retake: "Take the test again",
      tiers: [
        {
          min: 8,
          title: "You already think like a protocol professional",
          body: "Your answers show a strong grasp of exertional heat stroke and of the Cool First, Transport Second logic. Your report details the points to consolidate, if any.",
          next: "The protocol assumes suitable immersion equipment is available on site. Kollder One™ has a steel frame with 6 support points, stays stable on uneven ground, and holds up to 2 people in simultaneous immersion. It folds into the Kollder Go™ transport bag."
        },
        {
          min: 5,
          title: "Solid foundations, a few blind spots",
          body: "You have the essentials, but a few points, detailed in your report, are the ones teams hesitate on most. The complete protocol guide walks through them step by step.",
          next: "Once the protocol is clear, the remaining question is equipment to apply it on site. Kollder One™ has a steel frame with 6 support points, stays stable on uneven ground, and holds up to 2 people in simultaneous immersion. It folds into the Kollder Go™ transport bag."
        },
        {
          min: 0,
          title: "This test has just revealed a real risk",
          body: "These questions cover points that are decisive in the medical literature and often counter-intuitive. This is not a judgement of your level: it is a useful marker before the next incident. Start with your report and the complete protocol guide.",
          next: "Once the protocol is mastered, the challenge is having suitable immersion equipment on site. Kollder One™ has a steel frame with 6 support points, stays stable on uneven ground, and holds up to 2 people in simultaneous immersion. It folds into the Kollder Go™ transport bag."
        }
      ]
    },
    print: {
      docTitle: "Kollder report: heat stroke knowledge test",
      heading: "Knowledge report: exertional heat stroke",
      dateLabel: "Date: ",
      score: "Score: ",
      review: "Questions to review",
      none: "Every answer was correct. The sources below let you go deeper on each point.",
      yourAnswer: "Your answer: ",
      correctAnswer: "Correct answer: ",
      refs: "References",
      footer: "Kollder, emergency cooling. kollder.com"
    },
    reading: {
      title: "Further reading",
      items: [
        { kicker: "Emergency Medicine", title: "Cool First Transport Second: The Life-Saving Protocol for Exertional Heat Stroke", url: "/blog/en/2026-05-25-cool-first-transport-second-protocol-complete-guide/" },
        { kicker: "Emergency Medicine", title: "Cold Water Immersion vs Other Cooling Methods: A Data-Backed Comparison", url: "/blog/en/2026-05-25-cold-water-immersion-vs-other-methods-comparison/" },
        { kicker: "Emergency Medicine", title: "Exertional Heat Stroke: How to Recognise It and What to Do", url: "/blog/en/2026-06-04-exertional-heat-stroke-recognise-and-treat/" },
        { kicker: "For your sector", title: "Emergency cooling equipment for fire and rescue services", url: "/en/fire-rescue/" }
      ]
    },
    sourcesLabel: "Sources",
    questions: [
      {
        type: "mcq",
        q: "A runner collapses in extreme heat. Which sign separates heat stroke from simple heat exhaustion?",
        options: [
          "Very hot, flushed skin to the touch",
          "Altered mental status: confusion, disorientation, aggression",
          "Muscle cramps and a severe headache",
          "Intense thirst combined with marked fatigue"
        ],
        answer: 1,
        fact: "Altered mental status (confusion, disorientation, aggression) is what tips heat exhaustion into heat stroke. Skin temperature alone cannot settle the diagnosis: it combines this neurological sign with a core temperature above 40°C.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "tf",
        q: "Exertional heat stroke only occurs when the ambient temperature is above 30°C.",
        answer: 1,
        fact: "It can occur at moderate ambient temperatures: when effort and humidity block heat dissipation, core temperature runs away, with no air temperature threshold required.",
        source: "IOC Adverse Weather Impact Expert Working Group, Hosokawa Y, Racinais S et al., BJSM, 2021"
      },
      {
        type: "mcq",
        q: "In the field, which measurement is the reference for confirming heat stroke and monitoring cooling?",
        options: [
          "Axillary temperature (under the arm)",
          "Forehead temperature (infrared thermometer)",
          "Rectal temperature",
          "Ear (tympanic) temperature"
        ],
        answer: 2,
        fact: "The ACSM names rectal thermometry as the reference for diagnosis and for monitoring cooling in the field. Axillary or ear measurements are not sufficient.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "mcq",
        q: "How much faster does cold water immersion cool a patient than ice packs or wet towels?",
        options: [
          "Around 10 times faster",
          "Around 2 times faster",
          "No meaningful difference: all these methods cool at about 0.3°C per minute",
          "Around 100 times faster"
        ],
        answer: 0,
        fact: "Cold water immersion cools at about 0.35°C per minute, against about 0.03°C per minute for ice packs or wet towels: a factor of around 10. It is the only method that reliably meets the 30-minute window.",
        source: "Casa DJ et al., Exercise and Sport Sciences Reviews, 2007"
      },
      {
        type: "tf",
        q: "Waiting for the ambulance before starting to cool is the safest option for the patient.",
        answer: 1,
        fact: "The protocol is Cool First, Transport Second: cool on site, then transport. The Korey Stringer Institute documents a 100% survival rate across more than 401 cases when core temperature returns below 40°C within 30 minutes of collapse.",
        source: "Korey Stringer Institute, Dr Douglas Casa, University of Connecticut"
      },
      {
        type: "mcq",
        q: "When core temperature stays elevated too long, which damage does the medical literature describe?",
        options: [
          "Severe dehydration, reversible with rehydration",
          "Damage limited to the heart, with other organs protected",
          "Muscle cramps and fatigue, with no effect on organs",
          "Damage to the brain, kidneys and liver, sometimes irreversible"
        ],
        answer: 3,
        fact: "The brain (with a risk of lasting neurological sequelae, notably cerebellar), the kidneys (rhabdomyolysis, acute kidney injury) and the liver (hepatic failure) are affected. Every minute spent above 40°C worsens the damage.",
        source: "Walter EJ & Carraretto M, Critical Care, 2016"
      },
      {
        type: "tf",
        q: "A patient who is still sweating heavily can nonetheless have exertional heat stroke.",
        answer: 0,
        fact: "Sweating may be present or absent in exertional heat stroke. The deciding criterion is the combination of an elevated core temperature and neurological signs (confusion, poor balance, agitation), not the absence of sweat.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "mcq",
        q: "On a construction site, a worker collapses in extreme heat, confused and aggressive. What is the right course of action?",
        options: [
          "Move them into the shade, give them water and wait for the ambulance",
          "Immerse them in cold water on site and call the emergency number in parallel",
          "Move them to an air-conditioned vehicle and drive to the emergency department as fast as possible",
          "Apply wet towels and ice packs, then evacuate"
        ],
        answer: 1,
        fact: "Cool First, Transport Second: cool immediately by cold water immersion, calling the emergency services in parallel. Shade, wet towels and ice packs (about 0.03°C per minute) are not enough to treat confirmed heat stroke, and transport without cooling prolongs exposure to a core temperature above 40°C.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023; SFAR"
      },
      {
        type: "mcq",
        q: "What does the ACSM report about the long-term follow-up of patients hospitalised for exertional heat illness?",
        options: [
          "A risk identical to the reference population once they recover",
          "Increased heat sensitivity, with no other documented medical consequence",
          "An increased risk of major cardiovascular events, ischaemic stroke and atrial fibrillation",
          "An increased risk limited to kidney problems"
        ],
        answer: 2,
        fact: "In a 14-year follow-up, survivors had a 3.9 times higher incidence of major cardiovascular events, a 5.5 times greater risk of ischaemic stroke and a 15 times higher incidence of atrial fibrillation. A cohort of US Army personnel hospitalised for this type of illness also showed a 40% higher long-term mortality risk than a reference cohort hospitalised for appendicitis.",
        source: "ACSM Expert Consensus Statement on Exertional Heat Illness, 2023"
      },
      {
        type: "tf",
        q: "Since 1 July 2025, French Decree No. 2025-482 places specific heat-prevention obligations on employers.",
        answer: 0,
        fact: "Decree No. 2025-482 of 27 May 2025 adds a dedicated chapter on episodes of intense heat to the French Labour Code (articles R.4463-1 to R.4463-8). Employer obligations are triggered by Météo-France heat vigilance levels (yellow, orange, red) and adapt as the heat intensifies.",
        source: "Décret n°2025-482 du 27 mai 2025, Code du travail, articles R.4463-1 to R.4463-8"
      }
    ]
  }
};
