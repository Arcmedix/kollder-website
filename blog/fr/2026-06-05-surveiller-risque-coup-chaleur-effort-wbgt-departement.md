---
title: "Comment surveiller le risque de coup de chaleur d'effort par département"
date: 2026-06-05
description: "Le WBGT est l'indicateur de référence pour évaluer le risque d'hyperthermie d'effort sur le terrain. Voici comment l'utiliser, département par département."
category: "EHS et industrie"
layout: layouts/article.njk
lang: fr
published: true
---

En France, la chaleur tue chaque été — et la majorité des décès liés à l'hyperthermie d'effort surviennent alors que des outils de prévision fiables existent. Le problème : ils restent trop souvent réservés aux chercheurs ou aux médecins du sport, au lieu d'être intégrés aux protocoles terrain des sapeurs-pompiers, des responsables EHS et des directeurs médicaux d'événements.

## Le WBGT : pourquoi c'est l'indicateur de référence

La température ressentie seule ne suffit pas. À 28°C sous un soleil direct avec 70 % d'humidité, l'effort physique intense devient dangereux bien avant d'atteindre les 35°C à l'ombre.

**Le WBGT (Wet-Bulb Globe Temperature)** intègre les quatre facteurs déterminants du stress thermique :
- La température de l'air
- L'humidité relative
- Le rayonnement solaire direct et diffus
- La vitesse du vent

La formule standard de Liljegren (version approchée) permet de l'estimer à partir de données météo courantes : `WBGT ≈ 0,567 × T + 0,393 × Tw + 3,94`, où Tw est la température du thermomètre mouillé dérivée de la température et de l'humidité.

C'est précisément cette méthode que l'ACSM a retenue dans son Expert Consensus Statement (2023) comme base de décision pour la gestion des événements en conditions chaudes.

## Les quatre niveaux de risque ACSM

| WBGT | Niveau | Recommandation |
|---|---|---|
| < 26°C | Faible | Surveillance standard |
| 26–28°C | Modéré | Vigilance accrue, hydratation renforcée |
| 28–32°C | Élevé | Limitation des efforts intenses, accès eau froide obligatoire |
| > 32°C | Critique | Arrêt des activités à risque élevé |

Ces seuils sont issus de l'American College of Sports Medicine et repris par l'IOC (Hosokawa et al., BJSM 2021) comme référence internationale pour les événements sportifs.

## Pourquoi « par département » ?

La France métropolitaine couvre une plage climatique importante. En juin, le WBGT peut atteindre 30°C dans les Bouches-du-Rhône alors qu'il reste à 22°C en Bretagne. Cette disparité implique qu'un outil national générique est insuffisant pour la prise de décision locale.

Pour les **SDIS**, les SSSM militaires et les directeurs médicaux de trails ou de marathons, la valeur pertinente est celle du département de l'événement ou de l'intervention — pas une moyenne nationale.

## Surveiller le WBGT en temps réel

L'outil [Moniteur EHS de Kollder](/fr/monitor/) calcule le WBGT en temps réel pour n'importe quelle localisation en France, à partir des données Open-Meteo (mises à jour toutes les 15 minutes). Il affiche :

- Le WBGT actuel avec son niveau de risque ACSM
- La prévision heure par heure sur 7 jours
- Les protocoles d'urgence recommandés selon le niveau
- Un formulaire d'inscription aux alertes EHS

Concrètement : avant un trail en montagne ou une intervention sur un site industriel exposé, un directeur médical peut consulter la prévision WBGT à 48h, adapter le protocole de déploiement des équipes de refroidissement et anticiper les pics de risque.

## Ce que cette surveillance ne remplace pas

Le WBGT est un outil d'aide à la décision, pas un substitut au protocole de traitement. Lorsqu'un coup de chaleur d'effort est avéré — confusion, température centrale > 40°C — la seule intervention validée est l'immersion immédiate en eau froide.

**Le protocole "Cool First, Transport Second"** (ACSM 2023, Hutchins et al., Frontiers in Physiology 2022) stipule que la priorité absolue est de ramener la température centrale sous 39°C avant le transport. Le taux de survie est de 100 % sur plus de 401 cas documentés lorsque ce seuil est atteint dans les 30 minutes (Korey Stringer Institute, Dr Douglas Casa, UConn).

La baignoire de refroidissement [Kollder](https://kollder.com/#contact) est conçue pour ce protocole : déployable en moins de 30 secondes par une seule personne, elle permet d'initier l'immersion immédiatement sur site, quelle que soit la configuration du terrain.

## Pour aller plus loin

- [Protocole Cool First, Transport Second — Guide complet](https://kollder.com/blog/fr/2026-05-25-cool-first-transport-second-protocole-complet/)
- [Immersion en eau froide vs autres méthodes de refroidissement](https://kollder.com/blog/fr/2026-05-25-immersion-eau-froide-vs-autres-methodes-comparatif/)
- [Équipement de refroidissement pour pompiers et SDIS](https://kollder.com/blog/fr/2026-05-27-equipement-refroidissement-pompiers-feux-foret-sdis/)
- [Demander un devis Kollder](https://kollder.com/#contact)

---

*Sources : ACSM Expert Consensus Statement 2023 ; Hosokawa Y, Racinais S et al., BJSM 2021 ; Hutchins et al., Frontiers in Physiology 2022 ; Korey Stringer Institute — Douglas Casa, UConn ; Open-Meteo API (données météo temps réel).*
