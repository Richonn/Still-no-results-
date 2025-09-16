# Quelle commande permet de créer un dépôt Git ?

- [ ] git create
- [x] git init
- [ ] git new
- [ ] git start

---

# Que contient un blob dans le magasin d'objets Git ?

- [ ] Les métadonnées du fichier
- [x] Le contenu du fichier sans métadonnées
- [ ] L'historique des modifications
- [ ] Les informations de l'auteur

---

# Combien de types d'objets Git existe-t-il dans le magasin d'objets ?

- [ ] 3
- [x] 4
- [ ] 5
- [ ] 6

---

# Quelle commande permet d'ajouter un fichier à l'index ?

- [ ] git commit
- [ ] git stage
- [x] git add
- [ ] git track

---

# Qu'est-ce qui représente un niveau d'information du répertoire du dépôt ?

- [ ] Un blob
- [x] Un arbre (tree)
- [ ] Un commit
- [ ] Une étiquette (tag)

---

# Dans quel sous-répertoire se trouvent les structures de données principales de Git ?

- [ ] .git-data
- [ ] .repository
- [x] .git
- [ ] .gitstore

---

# Quelle commande permet de connaître l'état de l'index ?

- [ ] git info
- [ ] git index
- [x] git status
- [ ] git state

---

# Que contient un commit ?

- [ ] Seulement le contenu des fichiers
- [ ] Seulement les métadonnées
- [x] L'information sur une modification (auteur, date, message)
- [ ] Seulement l'arbre des fichiers

---

# L'index classe les fichiers en combien de catégories ?

- [ ] 2
- [x] 3
- [ ] 4
- [ ] 5

---

# Dans quelle catégorie se trouvent les fichiers nouvellement créés ?

- [ ] tracked
- [ ] ignored
- [x] untracked
- [ ] staged

---

# Quel algorithme de hachage Git utilise-t-il pour créer des noms uniques ?

- [ ] MD5
- [x] SHA1
- [ ] SHA256
- [ ] CRC32

---

# Que signifie le fait que Git soit un "système de stockage basé sur le contenu" ?

- [x] L'organisation des données n'est pas basée sur la structure du répertoire
- [ ] Git stocke seulement le contenu des fichiers
- [ ] Git ne peut pas gérer les métadonnées
- [ ] Git organise les fichiers par date de création

---

# Quelle commande permet de voir l'historique des commits ?

- [ ] git history
- [x] git log
- [ ] git show-commits
- [ ] git list

---

# Quelle commande permet de créer une branche ?

- [ ] git create-branch
- [x] git branch [nom de branche]
- [ ] git new-branch
- [ ] git make-branch

---

# Quelle commande permet de changer de branche ?

- [ ] git switch
- [x] git checkout [nom de branche]
- [ ] git change
- [ ] git branch-change

---

# Quelle est la commande raccourci pour créer et changer de branche en une seule fois ?

- [ ] git branch -c
- [x] git checkout -b [nom de branche]
- [ ] git create -b
- [ ] git new -b

---

# Quelle commande permet de fusionner deux branches ?

- [ ] git combine
- [x] git merge [nom de branche à fusionner]
- [ ] git join
- [ ] git fusion

---

# Quelle est l'alternative à git merge pour fusionner des branches ?

- [ ] git combine
- [ ] git join
- [x] git rebase
- [ ] git fusion

---

# Quelle commande permet de lister les branches du dépôt ?

- [x] git branch
- [ ] git list-branches
- [ ] git show-branches
- [ ] git branches

---

# Pour quoi utilise-t-on le fichier .gitignore ?

- [ ] Pour suivre les fichiers
- [x] Pour ignorer certains fichiers
- [ ] Pour configurer Git
- [ ] Pour stocker les commits

---

# Quelle commande permet d'afficher l'historique des branches ?

- [ ] git branch-history
- [x] git show-branch
- [ ] git log-branches
- [ ] git history-branch

---

# Quelle commande permet de cloner un dépôt GitHub ?

- [ ] git copy
- [ ] git download
- [x] git clone
- [ ] git get

---

# Quelle commande permet de récupérer le contenu d'un dépôt distant sans le fusionner ?

- [x] git fetch
- [ ] git get
- [ ] git download
- [ ] git retrieve

---

# Quelle commande permet de récupérer le contenu du dépôt distant ET le fusionner au dépôt local ?

- [ ] git fetch
- [x] git pull
- [ ] git merge-remote
- [ ] git sync

---

# Quelle commande permet de transférer les objets du dépôt local vers le dépôt distant ?

- [ ] git send
- [ ] git upload
- [x] git push
- [ ] git transfer

---

# Que se passe-t-il quand un merge échoue ?

- [ ] Git supprime les fichiers conflictuels
- [x] Il y a conflit
- [ ] Git crée automatiquement une nouvelle branche
- [ ] Git annule tous les changements

---

# Quelle commande permet de voir le contenu d'un objet Git ?

- [ ] git content
- [x] git cat-file -p
- [ ] git show-content
- [ ] git view

---

# Comment Git optimise-t-il l'espace disque et les transferts réseau ?

- [ ] En supprimant les anciens commits
- [x] En compressant et stockant les objets sous forme de pack files
- [ ] En ne gardant que les fichiers récents
- [ ] En utilisant des liens symboliques

---

# Qu'est-ce qu'une pull request sur GitHub ?

- [ ] Une demande de téléchargement
- [x] Une demande d'intégration de commits au projet
- [ ] Une demande de création de branche
- [ ] Une demande de suppression de fichiers

---

# Quelles sont les deux structures de données principales dans un dépôt Git ?

- [ ] Le cache et l'historique
- [x] Le magasin d'objets et l'index
- [ ] Les branches et les tags
- [ ] Les commits et les blobs

---

# Explanations

# Question 1
`git init` est la commande standard pour initialiser un nouveau dépôt Git dans un répertoire.

# Question 2
Un blob contient uniquement le contenu brut du fichier, sans aucune métadonnée comme le nom ou les permissions.

# Question 3
Git utilise 4 types d'objets : blobs (contenu), trees (structure), commits (modifications) et tags (étiquettes).

# Question 4
`git add` ajoute les fichiers à l'index (staging area) pour préparer le prochain commit.

# Question 5
Un tree représente la structure d'un répertoire et contient les références aux blobs et autres trees.

# Question 6
Toutes les données Git sont stockées dans le répertoire caché `.git` à la racine du projet.

# Question 7
`git status` affiche l'état actuel des fichiers (tracked, untracked, modified, staged).

# Question 8
Un commit contient les métadonnées d'une modification : auteur, date, message et référence au tree.

# Question 9
Git classe les fichiers en 3 catégories : tracked (suivis), ignored (ignorés) et untracked (non suivis).

# Question 10
Les nouveaux fichiers créés sont automatiquement classés comme untracked jusqu'à ce qu'on les ajoute.

# Question 11
Git utilise l'algorithme SHA1 pour générer des identifiants uniques basés sur le contenu des objets.

# Question 12
Git organise les données par contenu (hachage SHA1) plutôt que par structure de fichiers traditionnelle.

# Question 13
`git log` affiche la liste chronologique des commits avec leurs informations détaillées.

# Question 14
`git branch [nom]` crée une nouvelle branche pointant vers le commit actuel.

# Question 15
`git checkout [branche]` permet de basculer vers une branche existante et met à jour les fichiers.

# Question 16
`git checkout -b [nom]` combine la création d'une branche et le basculement vers celle-ci.

# Question 17
`git merge [branche]` fusionne une branche dans la branche courante en créant un commit de merge.

# Question 18
`git rebase` est une alternative au merge qui réécrit l'historique plutôt que de créer un commit de fusion.

# Question 19
`git branch` sans argument liste toutes les branches locales du dépôt.

# Question 20
Le fichier `.gitignore` spécifie quels fichiers Git doit ignorer lors du suivi des modifications.

# Question 21
`git show-branch` affiche l'historique et les relations entre plusieurs branches simultanément.

# Question 22
`git clone [URL]` télécharge une copie complète d'un dépôt distant vers votre machine locale.

# Question 23
`git fetch` récupère les nouveaux objets du dépôt distant mais ne modifie pas votre branche courante.

# Question 24
`git pull` combine `git fetch` et `git merge` pour récupérer et fusionner en une seule commande.

# Question 25
`git push` envoie vos commits locaux vers le dépôt distant pour les partager avec l'équipe.

# Question 26
Un conflit survient quand Git ne peut pas fusionner automatiquement deux versions différentes du même fichier.

# Question 27
`git cat-file -p [hash]` affiche le contenu brut d'un objet Git (blob, tree, commit).

# Question 28
Git compresse les objets similaires en pack files pour économiser l'espace disque et accélérer les transferts.

# Question 29
Une pull request permet de proposer l'intégration de commits et d'engager une discussion avant fusion.

# Question 30
Le magasin d'objets contient tous les objets Git, l'index prépare les modifications pour le prochain commit.