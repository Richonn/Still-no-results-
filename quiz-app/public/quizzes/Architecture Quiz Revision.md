# Quel est l'objectif principal de l'architecture logicielle selon le cours?
- [ ] Augmenter la quantité de code
- [ ] Créer plus de documentation
- [x] Minimiser l'impact des changements
- [ ] Rendre le code plus complexe

---

# Quelle est la principale responsabilité d'un architecte?
- [ ] Écrire tout le code
- [x] Servir le domaine d'affaire
- [ ] Organiser les réunions
- [ ] Gérer le budget

---

# Quel est l'objectif du couplage et de la cohésion?
- [ ] Faible cohésion et fort couplage
- [ ] Cohésion et couplage moyens
- [x] Forte cohésion et faible couplage
- [ ] Fort couplage et forte cohésion

---

# Quel exemple illustre une FORTE cohésion?
- [ ] Canadian Tire
- [ ] Supermarché
- [x] Fromagerie (spécialisé fromages)
- [ ] Dépanneur

---

# Quel exemple illustre un FAIBLE couplage?
- [x] Papier dans une imprimante
- [ ] Cartouche d'encre dans imprimante
- [ ] Roue soudée à une voiture
- [ ] Processeur sur carte mère

---

# Le patron Singleton permet de:
- [ ] Créer plusieurs instances identiques
- [x] Garantir une seule instance d'une classe
- [ ] Transformer des objets
- [ ] Observer des changements

---

# Le patron Factory sert à:
- [ ] Observer les objets
- [x] Centraliser la création d'objets
- [ ] Décorer des méthodes
- [ ] Gérer les états

---

# Le patron Builder est utilisé pour:
- [ ] Détruire des objets
- [ ] Observer des changements
- [x] Construire des objets avec paramètres optionnels
- [ ] Gérer des transactions

---

# Le patron Adapter permet de:
- [ ] Créer une seule instance
- [x] Transformer du code pour qu'il soit compatible ailleurs
- [ ] Observer des objets
- [ ] Itérer dans une collection

---

# Le patron Decorator (@) sert à:
- [ ] Créer des objets
- [x] Ajouter des comportements ou restrictions à une méthode
- [ ] Supprimer du code
- [ ] Gérer les bases de données

---

# Le patron Façade a pour objectif de:
- [ ] Compliquer le code
- [x] Simplifier du code complexe derrière une interface simple
- [ ] Observer les changements
- [ ] Créer des instances

---

# Le patron Observer permet de:
- [x] Surveiller et réagir aux changements d'un objet
- [ ] Créer plusieurs instances
- [ ] Transformer des objets
- [ ] Compiler du code

---

# Le patron Strategy est utile pour:
- [ ] Créer une seule instance
- [ ] Transformer des interfaces
- [x] Avoir différentes façons de faire la même action (ex: calcul taxes)
- [ ] Simplifier le code

---

# Le patron Command suit quel flux?
- [ ] Model → View → Controller
- [x] UI → Command → Execute
- [ ] Database → Service → API
- [ ] Client → Server → Database

---

# Le patron Repository sert à:
- [ ] Décorer des méthodes
- [ ] Observer des changements
- [x] Abstraire l'accès aux données (ex: findById())
- [ ] Créer des factories

---

# Active Record permet à:
- [ ] L'UI de se sauvegarder
- [x] Un objet de savoir comment se sauvegarder lui-même (User.save())
- [ ] La base de données de créer des objets
- [ ] Le controller de tout gérer

---

# Le patron DAO (Data Access Object) sert à:
- [ ] Observer les changements
- [x] Simplifier la logique proche de la table de base de données
- [ ] Créer des singletons
- [ ] Décorer les méthodes

---

# Quel patron n'est PAS à l'examen?
- [ ] Observer
- [ ] Strategy
- [x] Unit of Work
- [ ] Factory

---

# Le style CRUD est approprié pour:
- [x] Applications avec opérations de base sur données (formulaires, réseaux sociaux)
- [ ] Logique d'affaire très complexe
- [ ] Systèmes avec beaucoup de règles métier
- [ ] Applications nécessitant Event-Sourcing

---

# Dans le style CRUD, que trouve-t-on généralement?
- [x] Peu ou pas de domaine, modèles proches de la BDD, ORM utiles
- [ ] Beaucoup de règles d'affaires complexes
- [ ] Architecture hexagonale obligatoire
- [ ] Event-Sourcing systématique

---

# Dans le patron MVC, le Controller sert à:
- [ ] Gérer uniquement la base de données
- [x] Faire la colle entre la vue et le modèle, orchestration
- [ ] Afficher l'interface uniquement
- [ ] Gérer les tests

---

# Quelle est la différence entre MVC et MVP?
- [ ] Il n'y a pas de différence
- [x] Dans MVP, tout passe par le presenter, la vue ne connaît pas le modèle
- [ ] MVP n'a pas de vue
- [ ] MVC n'a pas de controller

---

# Dans un modèle en couches traditionnel [API → Service → Domaine → Infra], quel est le problème principal?
- [ ] Trop de tests
- [ ] Pas assez de code
- [x] Le domaine dépend de la technologie
- [ ] Trop de documentation

---

# Dans l'architecture Hexagonale (Ports & Adapters), où est le domaine?
- [ ] Dans l'infrastructure
- [x] Au centre (le plus stable)
- [ ] Dans les adapters
- [ ] À l'extérieur

---

# Quel est l'avantage principal de l'architecture Hexagonale?
- [ ] Moins de code à écrire
- [ ] Plus de dépendances
- [x] Tests plus faciles, domaine isolé de la techno
- [ ] Déploiement plus rapide

---

# Clean Architecture (Onion) est une spécialisation de:
- [ ] MVC
- [ ] CRUD
- [x] Architecture Hexagonale
- [ ] Modèle en couches traditionnel

---

# Dans Clean Architecture, au centre on trouve:
- [ ] Les controllers
- [ ] La base de données
- [x] Les entités (données + règles d'affaires)
- [ ] L'API

---

# ETL signifie:
- [ ] Edit-Test-Launch
- [ ] Entity-Template-Logic
- [x] Extract-Transform-Load
- [ ] Execute-Transfer-Link

---

# Le style ETL sert principalement à:
- [ ] Créer des interfaces utilisateur
- [x] Manipuler et transformer des données entre systèmes
- [ ] Gérer les tests unitaires
- [ ] Créer des APIs REST

---

# Quelles sont les 4 mécaniques ETL?
- [ ] Fast, Slow, Medium, Stop
- [x] Once, Scheduled, Pull, Push
- [ ] Get, Post, Put, Delete
- [ ] Create, Read, Update, Delete

---

# Dans le style Pipe & Filter, qu'est-ce qu'un filtre?
- [ ] Une base de données
- [ ] Un controller MVC
- [x] Un composant de traitement de données (interchangeable)
- [ ] Une API REST

---

# Map & Reduce est:
- [ ] Un patron de conception
- [x] Une spécialisation de Pipe & Filter
- [ ] Un style CRUD
- [ ] Une cérémonie SCRUM

---

# Dans l'architecture Event-Based, le mode Orchestré signifie:
- [ ] Chacun réagit de façon autonome
- [x] Un responsable dicte les actions de manière synchrone
- [ ] Pas de coordination
- [ ] Événements asynchrones uniquement

---

# Dans l'architecture Event-Based, le mode Chorégraphié signifie:
- [x] Chacun réagit de manière autonome aux événements (basé sur confiance)
- [ ] Un orchestrateur central contrôle tout
- [ ] Pas d'événements
- [ ] Synchronisation obligatoire

---

# Quel patron est utilisé dans le style Chorégraphié (Event-Based)?
- [ ] Singleton
- [x] Observer
- [ ] Factory
- [ ] Builder

---

# Pub/Sub (Publish/Subscribe) comporte combien de composants principaux?
- [ ] 2 composants
- [ ] 3 composants
- [x] 4 composants (Publisher, Subscriber, Topic, Message Broker)
- [ ] 5 composants

---

# Event-Sourcing consiste à:
- [ ] Sauvegarder uniquement l'état final
- [x] Sauvegarder les changements d'états plutôt que l'état final
- [ ] Ne jamais sauvegarder de données
- [ ] Sauvegarder uniquement les erreurs

---

# Dans Event-Sourcing, comment reconstruit-on l'état d'un objet?
- [ ] En lisant la dernière ligne de la BDD
- [x] En rejouant les événements depuis le dernier snapshot
- [ ] En appelant une API REST
- [ ] En consultant le cache

---

# CQRS signifie:
- [ ] Create Query Read System
- [x] Command Query Responsibility Segregation
- [ ] Complex Queue Request Service
- [ ] Controller Query Repository Service

---

# Dans CQRS, que sépare-t-on?
- [ ] Le frontend et le backend
- [x] La lecture (Query) et l'écriture (Command)
- [ ] Les tests et le code
- [ ] La documentation et le code

---

# Dans le style Client/Serveur, qu'est-ce qu'un Thin Client?
- [ ] Un client avec beaucoup de logique
- [x] Un client léger, la majorité de la logique est sur le serveur (ex: SSR)
- [ ] Un client sans interface
- [ ] Un client qui ne communique pas

---

# Un Thick Client signifie:
- [x] Le client contient beaucoup de logique (ex: application avec Firebase)
- [ ] Le client est très petit
- [ ] Le client n'a pas de logique
- [ ] Le serveur fait tout

---

# Le Gateway (style) sert à:
- [ ] Gérer les tests
- [x] Interfacer un autre système (1 point d'entrée vers système externe)
- [ ] Créer des objets
- [ ] Observer des changements

---

# Gateway est la version "style architectural" de quel patron?
- [ ] Singleton
- [ ] Factory
- [x] Adapter
- [ ] Observer

---

# Le modèle Waterfall présente quel problème majeur?
- [ ] Trop de tests
- [ ] Trop rapide
- [x] Trop long, rigide, tout prévoir à l'avance
- [ ] Pas assez de documentation

---

# Dans le modèle Cynefin, un projet "Simple" correspond à:
- [x] Connu-connu (ex: assembler meuble IKEA)
- [ ] Inconnu-inconnu
- [ ] Inconnu-connaissable
- [ ] Chaotique

---

# Dans le modèle Cynefin, le développement logiciel est généralement:
- [ ] Simple
- [ ] Compliqué
- [x] Complexe (inconnu-inconnu)
- [ ] Impossible

---

# L'Empirisme (essence de l'agilité) suit quelle séquence?
- [ ] Code → Test → Déploiement
- [x] Problématique → Hypothèse → Expérimentation → Analyse → Conclusion
- [ ] Requis → Conception → Code
- [ ] Planning → Daily → Revue

---

# Combien y a-t-il de cérémonies dans SCRUM?
- [ ] 3
- [ ] 4
- [x] 5
- [ ] 7

---

# Quelle cérémonie SCRUM dure 15 minutes?
- [ ] Planification
- [x] Daily
- [ ] Revue
- [ ] Rétrospective

---

# La Rétrospective SCRUM porte sur quelles 3 sphères?
- [ ] Code, Tests, Déploiement
- [x] Technologie, Processus, Humain
- [ ] Frontend, Backend, Database
- [ ] Client, Serveur, API

---

# Le Raffinement dans SCRUM sert à:
- [ ] Déployer en production
- [x] Mieux comprendre les récits pour le prochain sprint
- [ ] Corriger les bugs
- [ ] Écrire la documentation

---

# La Revue de Sprint est une démo pour:
- [ ] L'équipe uniquement
- [x] Le client (niveau produit, feedback)
- [ ] Les testeurs
- [ ] Les architectes uniquement

---

# Un récit utilisateur suit quel format?
- [ ] Je veux [quoi] pour [qui]
- [x] En tant que [qui], je veux [quoi], afin de [pourquoi]
- [ ] [Qui] doit faire [quoi]
- [ ] [Quoi] sera fait par [qui]

---

# Les Critères d'Acceptation (CA) d'un récit servent à:
- [ ] Écrire les tests unitaires
- [x] Déterminer si la fonctionnalité est complète
- [ ] Planifier les sprints
- [ ] Créer la documentation

---

# La Definition of Done (DoD) est:
- [ ] Un patron de conception
- [x] Un contrat qualité définissant quand c'est vraiment terminé (incluant tests, revue, PROD)
- [ ] Un style architectural
- [ ] Une cérémonie SCRUM

---

# Qu'est-ce qu'un sprint (itération) dans SCRUM?
- [ ] Une réunion quotidienne
- [x] Une période fixe et répétable avec des objectifs précis
- [ ] Un type de test
- [ ] Un diagramme UML

---

# L'architecte doit optimiser:
- [ ] Le nombre de bugs
- [x] La vélocité de l'équipe (vitesse de livraison)
- [ ] La quantité de code
- [ ] Le nombre de réunions

---

# Que signifie "architecture juste assez / juste à temps"?
- [ ] Faire toute l'architecture au début
- [x] Répondre aux besoins actuels et prévoir les évolutions potentielles
- [ ] Ne jamais faire d'architecture
- [ ] Tout prévoir pour 10 ans

---

# La dette technique a quel impact?
- [ ] Aucun impact
- [ ] Augmente la vélocité
- [x] Diminue la vélocité à long terme
- [ ] Améliore la qualité

---

# Parmi les soft skills de l'architecte, on trouve:
- [ ] Coder plus vite
- [ ] Connaître tous les langages
- [x] Communication, empathie, "read the room", travail d'équipe
- [ ] Travailler seul

---

# Le modèle C4 comporte combien de niveaux d'abstraction?
- [ ] 2 niveaux
- [ ] 3 niveaux
- [x] 4 niveaux
- [ ] 5 niveaux

---

# Les 4 niveaux du modèle C4 sont (dans l'ordre):
- [ ] Code, Composant, Conteneur, Contexte
- [x] Contexte, Conteneur, Composant, Code
- [ ] Contexte, Code, Composant, Conteneur
- [ ] Conteneur, Composant, Contexte, Code

---

# Quel niveau C4 est à l'examen?
- [ ] Contexte
- [ ] Conteneur
- [x] Composant
- [ ] Code

---

# Un Composant dans C4 représente:
- [ ] Une ligne de code
- [ ] Un serveur physique
- [x] Un groupe de fonctionnalités reliées (ex: Service, Repo, Controller)
- [ ] Une base de données

---

# Sur un diagramme de composant C4, on doit inclure:
- [ ] Uniquement les classes
- [ ] Uniquement le code
- [x] Personas, étiquettes, descriptions, systèmes externes, persistances, tags
- [ ] Uniquement les bases de données

---

# Quels diagrammes UML sont à ÉVITER selon le cours?
- [ ] Diagrammes de composants
- [x] Diagrammes de classes et diagrammes de séquence
- [ ] Diagrammes C4
- [ ] Tous les diagrammes

---

# La documentation doit être:
- [ ] Très longue
- [ ] Faite à la main uniquement
- [x] À jour (préférer génération automatique)
- [ ] Facultative

---

# Quels types de documentation sont automatiques et recommandés?
- [ ] Diagrammes de classes
- [x] Doxygen, Open API, Tests (doc vivante)
- [ ] PowerPoint
- [ ] Emails

---

# Pour qui doit-on définir la documentation?
- [ ] Pour tout le monde pareil
- [x] Selon la persona (granularité, compréhension adaptées)
- [ ] Uniquement pour les développeurs
- [ ] Uniquement pour les clients

---

# En refactoring, quelle est la règle d'or?
- [ ] Changer le plus de choses possible en même temps
- [x] 1 changement à la fois, ne pas changer le fonctionnement
- [ ] Ne jamais utiliser de tests
- [ ] Refactorer sans tests

---

# Les tests d'approbation servent à:
- [ ] Approuver les développeurs
- [x] Comparer input/output (safety net sans comprendre le code)
- [ ] Tester l'UI uniquement
- [ ] Remplacer les tests unitaires

---

# Pourquoi le refactoring est-il important?
- [ ] Pour compliquer le code
- [x] On lit plus qu'on écrit, testabilité, évolution, vélocité
- [ ] Pour ajouter des bugs
- [ ] Pour supprimer des tests

---

# SOLID est:
- [ ] Un style architectural
- [x] Un ensemble de 5 principes de conception orientée objet
- [ ] Un patron de conception
- [ ] Une cérémonie SCRUM

---

# Parmi les éléments suivants, lequel fait partie de la qualité du code?
- [ ] Nombre de lignes de code
- [x] Tests, Couplage, Cohésion, SOLID, Naming, Clean Code, TDA
- [ ] Vitesse de frappe
- [ ] Taille des fichiers

---

# Les tests sont considérés comme:
- [ ] Une perte de temps
- [ ] Uniquement pour les juniors
- [x] De la documentation vivante
- [ ] Facultatifs

---

# TDD (Test-Driven Development) signifie:
- [ ] Tester après avoir codé
- [x] Écrire le test d'abord (Red-Green-Refactor)
- [ ] Ne jamais tester
- [ ] Tester uniquement en production

---

# Le cycle TDD est:
- [ ] Code → Test → Deploy
- [x] Red (test échoue) → Green (code minimal) → Refactor
- [ ] Plan → Code → Test
- [ ] Test → Plan → Code

---

# Clean Code implique:
- [ ] Code compliqué
- [ ] Beaucoup de commentaires partout
- [x] Nommage clair, organisation, simplicité (KISS)
- [ ] Code le plus court possible

---

# KISS signifie:
- [ ] Keep It Super Secure
- [x] Keep It Simple, Stupid! (garder simple, pas de complexité inutile)
- [ ] Keep Integrating Software Systems
- [ ] Keep It Safe and Sound

---

# Qu'est-ce qui n'est PAS à l'examen?
- [ ] Les patrons de conception
- [ ] Les styles architecturaux
- [x] Les verbes HTTP et codes HTTP détaillés
- [ ] Le diagramme de composant C4

---

# Qu'est-ce qui n'est PAS à l'examen?
- [ ] SCRUM
- [ ] Récits utilisateurs
- [x] DDD (Domain-Driven Design)
- [ ] Qualité du code

---

# Qu'est-ce qui n'est PAS à l'examen?
- [x] Diagrammes de Conteneur et Contexte C4
- [ ] Diagramme de Composant C4
- [ ] Patrons de conception
- [ ] Cohésion et couplage

---

# Qu'est-ce qui n'est PAS à l'examen?
- [ ] MVC
- [ ] Architecture Hexagonale
- [x] API Standard Google et REST détaillé
- [ ] ETL

---

# À l'examen, doit-on écrire du code brut?
- [x] Non, pas de code brut à écrire
- [ ] Oui, beaucoup de code
- [ ] Seulement en Java
- [ ] Seulement en Python

---

# Pour la Question 4 de l'examen (diagramme de composant), qu'est-ce qui est permis?
- [ ] Ordinateur portable
- [x] Règle et crayon effaçable
- [ ] Tablette
- [ ] Smartphone

---

# L'examen d'intra comporte combien de questions?
- [ ] 3 questions
- [ ] 4 questions
- [x] 5 questions
- [ ] 10 questions

---

# Quelle question vaut le plus de points à l'examen?
- [ ] Question 1 (15 pts)
- [x] Question 2 (25 pts) et Question 4 (25 pts)
- [ ] Question 3 (15 pts)
- [ ] Question 5 (20 pts)

---

# La Question 5 de l'examen porte sur:
- [ ] Documentation uniquement
- [ ] Code à écrire
- [x] Identifier patrons et styles (mise en situation + diagrammes UML)
- [ ] Mathématiques

---

# La Question 3 de l'examen porte sur:
- [ ] Théorie pure
- [x] État de l'itération 2 du projet (introspection, jugement, conception)
- [ ] Histoire de l'informatique
- [ ] Langages de programmation

---

# L'examen se déroule:
- [ ] En ligne
- [x] Sur papier (11 pages)
- [ ] Sur ordinateur
- [ ] Oralement

---

# Peut-on apporter une feuille de notes à l'examen?
- [ ] Non, rien du tout
- [x] Oui, 1 feuille 8.5x11 manuscrite recto-verso
- [ ] Oui, notes imprimées
- [ ] Oui, mais seulement recto

---

# Que faut-il apporter à l'examen?
- [ ] Ordinateur
- [x] Carte d'identité
- [ ] Téléphone
- [ ] Tablette

---

# La Question 2 porte sur (25 pts):
- [ ] Uniquement les patrons
- [x] Patrons, Styles, Exemples d'utilisation, Qualité (Tests, Couplage/Cohésion, SOLID)
- [ ] Uniquement SCRUM
- [ ] Uniquement la documentation

---

# L'objectif de l'architecture évolutive est de:
- [ ] Ne jamais changer le code
- [ ] Tout prévoir dès le départ
- [x] Permettre au code d'évoluer facilement selon les découvertes
- [ ] Éviter les tests

---

# En contexte agile, l'architecture doit:
- [ ] Être fixée au début et jamais modifiée
- [x] Évoluer avec les expérimentations et minimiser l'impact des changements
- [ ] Être ignorée
- [ ] Être complexe dès le départ

---

# Dans un environnement complexe (développement logiciel), la meilleure approche est:
- [ ] Waterfall avec plan détaillé
- [x] Empirisme (expérimentation, feedback, adaptation)
- [ ] Ne rien planifier
- [ ] Tout décider en avance

---

# Le rôle de mentorat de l'architecte signifie:
- [ ] Critiquer le code des autres
- [ ] Coder à la place de l'équipe
- [x] Aider l'équipe à évoluer et apprendre
- [ ] Imposer ses choix sans explication

---

# "Read the room" pour un architecte signifie:
- [ ] Lire la documentation
- [ ] Lire le code
- [x] Savoir à qui on parle, adapter sa communication au contexte
- [ ] Lire les tests

---

