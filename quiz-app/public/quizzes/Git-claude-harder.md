# Pourquoi Git dit-il que chaque fichier est représenté comme un "blob" (binary large object) ?

- [ ] Parce que Git ne peut gérer que des fichiers binaires
- [x] Parce que le contenu est considéré comme opaque pour le système
- [ ] Parce que tous les fichiers sont automatiquement compressés
- [ ] Parce que Git stocke les fichiers dans une base de données binaire

---

# Quelle est la principale différence entre l'organisation des données de Git et celle d'un système de fichiers traditionnel ?

- [ ] Git organise les fichiers par date de création
- [ ] Git utilise une structure hiérarchique plus complexe
- [x] Git organise les données par contenu (hachage SHA1) plutôt que par structure de répertoires
- [ ] Git stocke tous les fichiers dans un seul répertoire

---

# Dans le contexte de l'index Git, que se passe-t-il exactement quand vous exécutez "git add file1" sur un fichier modifié ?

- [ ] Le fichier est immédiatement ajouté au dernier commit
- [x] Une nouvelle version du blob est créée dans le magasin d'objets et l'index est mis à jour
- [ ] Le fichier est simplement marqué comme "à commiter"
- [ ] Une copie du fichier est créée dans le répertoire .git

---

# Comment Git optimise-t-il le stockage lorsqu'il compare le contenu de différents blobs ?

- [ ] Il supprime les fichiers identiques
- [ ] Il utilise des liens symboliques
- [x] Il ne stocke que les différences entre les blobs dans les pack files
- [ ] Il compresse chaque fichier individuellement

---

# Quelle information n'est PAS stockée dans un arbre (tree) Git ?

- [ ] Les noms des fichiers
- [ ] Les emplacements des fichiers
- [x] Le contenu des fichiers
- [ ] Les métadonnées des blobs

---

# Si vous avez un commit avec le hash "dc67d0ca654e925fcc496cd226975487e4a7c001", que pouvez-vous déduire de ce hash ?

- [ ] La date de création du commit
- [ ] L'auteur du commit
- [x] Le hash est basé sur le contenu complet de l'objet commit
- [ ] Le numéro de version du fichier

---

# Dans le processus Git, à quel moment un nouveau blob est-il créé dans le magasin d'objets ?

- [ ] Seulement lors du commit
- [x] Lors de l'exécution de "git add" si le contenu a changé
- [ ] À chaque modification de fichier
- [ ] Seulement lors du push vers un dépôt distant

---

# Quelle est la différence fondamentale entre "git fetch" et "git pull" en termes d'impact sur votre dépôt local ?

- [ ] git fetch télécharge plus rapidement
- [ ] git pull télécharge seulement les nouveaux commits
- [x] git fetch ne modifie pas votre branche courante, git pull la fusionne automatiquement
- [ ] git fetch fonctionne seulement avec GitHub

---

# Pourquoi Git est-il qualifié de "système de stockage basé sur le contenu" (content tracking system) ?

- [ ] Parce qu'il ne peut pas gérer les métadonnées
- [x] Parce que l'identité des objets est déterminée par leur contenu, pas par leur nom ou emplacement
- [ ] Parce qu'il stocke seulement le contenu des fichiers texte
- [ ] Parce qu'il suit les changements de contenu en temps réel

---

# Dans l'architecture Git, quel est le rôle spécifique de l'index par rapport au magasin d'objets ?

- [ ] L'index est une copie de sauvegarde du magasin d'objets
- [x] L'index sert de zone de transition pour préparer le prochain commit
- [ ] L'index contient l'historique complet des modifications
- [ ] L'index stocke les métadonnées que le magasin d'objets ne peut pas gérer

---

# Quand vous exécutez "git rebase" au lieu de "git merge", quelle est la principale différence dans le résultat final ?

- [ ] git rebase est plus rapide que git merge
- [ ] git rebase gère mieux les conflits
- [x] git rebase réécrit l'historique pour créer une ligne temporelle linéaire
- [ ] git rebase fonctionne seulement avec les branches distantes

---

# Dans le contexte des pack files, comment Git détermine-t-il quels objets peuvent être compressés ensemble ?

- [ ] Par leur date de création
- [ ] Par leur taille
- [x] En comparant leur contenu et en identifiant les similitudes
- [ ] Par leur type d'objet (blob, tree, commit)

---

# Si un fichier passe de "untracked" à "tracked", que doit-il se passer au niveau technique dans Git ?

- [x] Le fichier doit être ajouté à l'index via "git add"
- [ ] Git commence automatiquement à suivre tous les nouveaux fichiers
- [ ] Le fichier doit être mentionné dans un commit
- [ ] Le fichier doit être ajouté au fichier .gitignore

---

# Quelle est la différence conceptuelle entre une étiquette (tag) et une branche dans Git ?

- [ ] Les tags sont plus rapides à créer
- [ ] Les branches sont temporaires, les tags sont permanents
- [x] Les tags sont des noms fixes assignés à des objets, les branches évoluent avec de nouveaux commits
- [ ] Les tags ne peuvent pointer que vers des commits, les branches peuvent pointer vers n'importe quel objet

---

# Pourquoi l'index est-il décrit comme "temporaire et dynamique" dans le cours ?

- [ ] Parce qu'il est supprimé à chaque redémarrage
- [x] Parce qu'il change constamment pour refléter les modifications en cours avant le commit
- [ ] Parce qu'il ne stocke les données que pendant 24 heures
- [ ] Parce qu'il est synchronisé automatiquement avec le dépôt distant

---

# Dans une pull request GitHub, quel est l'avantage principal par rapport à un merge direct ?

- [ ] C'est plus rapide qu'un merge normal
- [ ] Cela évite tous les conflits potentiels
- [x] Cela permet d'engager une conversation et révision avant l'intégration
- [ ] Cela crée automatiquement une nouvelle branche

---

# Si vous modifiez un fichier mais n'exécutez pas "git add", où se trouve la version modifiée ?

- [ ] Dans le magasin d'objets
- [ ] Dans l'index
- [x] Seulement dans votre répertoire de travail
- [ ] Dans le dernier commit

---

# Quelle est la relation entre un commit et l'arbre (tree) qu'il référence ?

- [ ] Un commit peut référencer plusieurs arbres
- [x] Un commit référence exactement un arbre qui représente l'état complet du répertoire
- [ ] L'arbre contient le commit
- [ ] Il n'y a pas de relation directe entre commits et arbres

---

# Pourquoi les noms d'objets Git semblent-ils aléatoires (exemple: dc67d0ca654e925fcc496cd226975487e4a7c001) ?

- [ ] Git utilise un générateur de nombres aléatoires
- [ ] C'est pour des raisons de sécurité
- [x] Ce sont des hash SHA1 calculés à partir du contenu exact de l'objet
- [ ] Git incrémente un compteur interne

---

# Dans le workflow Git, quelle est la séquence correcte pour qu'un fichier modifié devienne partie d'un commit ?

- [ ] Modification → Commit → Add
- [x] Modification → Add → Commit
- [ ] Add → Modification → Commit
- [ ] Commit → Modification → Add

---

# Explanations

# Question 1
Git considère le contenu des fichiers comme "opaque" car il ne cherche pas à interpréter ou comprendre le contenu - il le traite simplement comme des données binaires à versionner.

# Question 2
Contrairement aux systèmes de fichiers traditionnels qui organisent par noms et chemins, Git utilise des hash SHA1 basés sur le contenu pour identifier et organiser tous les objets.

# Question 3
Quand vous faites "git add", Git calcule le hash du contenu modifié, crée un nouveau blob dans le magasin d'objets (si différent), et met à jour l'index pour pointer vers ce nouveau blob.

# Question 4
Les pack files sont une optimisation où Git compare les objets similaires et ne stocke que les différences (deltas) plutôt que le contenu complet de chaque version.

# Question 5
Un arbre stocke les métadonnées (noms, emplacements, permissions) mais pas le contenu des fichiers - celui-ci est dans les blobs référencés par l'arbre.

# Question 6
Les hash SHA1 sont déterministes : le même contenu produit toujours le même hash, permettant à Git d'identifier de manière unique chaque version d'objet.

# Question 7
Git crée un nouveau blob dès "git add" si le contenu a changé, pas seulement au moment du commit - cela permet de préparer le commit dans l'index.

# Question 8
"git fetch" récupère les objets distants mais ne touche pas à votre branche courante, tandis que "git pull" effectue aussi un merge automatique dans votre branche.

# Question 9
L'identité d'un objet Git est entièrement déterminée par son contenu (via SHA1), pas par son nom de fichier ou son emplacement dans l'arborescence.

# Question 10
L'index sert de "staging area" - une zone intermédiaire où vous préparez exactement ce qui fera partie du prochain commit, indépendamment du magasin d'objets.

# Question 11
"git merge" préserve l'historique des deux branches, tandis que "git rebase" réapplique les commits d'une branche sur l'autre, créant un historique linéaire.

# Question 12
Git analyse le contenu des objets pour identifier les parties communes et ne stocke que les différences dans les pack files, optimisant ainsi l'espace disque.

# Question 13
Pour qu'un fichier devienne "tracked", il doit être explicitement ajouté à l'index avec "git add" - Git ne suit pas automatiquement les nouveaux fichiers.

# Question 14
Les tags sont des pointeurs statiques vers des objets spécifiques, tandis que les branches sont des pointeurs mobiles qui avancent automatiquement avec chaque nouveau commit.

# Question 15
L'index change constamment selon vos actions (git add, git rm, etc.) pour refléter ce que sera le prochain commit, d'où sa nature "temporaire et dynamique".

# Question 16
Les pull requests permettent la révision de code et la discussion collaborative avant l'intégration, contrairement à un merge direct qui intègre immédiatement.

# Question 17
Tant que vous n'avez pas fait "git add", vos modifications existent uniquement dans votre répertoire de travail, pas encore dans l'index ou le magasin d'objets.

# Question 18
Chaque commit pointe vers exactement un arbre qui représente l'instantané complet de l'état du répertoire au moment de ce commit.

# Question 19
Les noms d'objets sont des hash SHA1 calculés mathématiquement à partir du contenu - ils semblent aléatoires mais sont totalement déterministes.

# Question 20
Le workflow standard est : modifier le fichier dans votre répertoire, l'ajouter à l'index avec "git add", puis créer le commit avec "git commit".