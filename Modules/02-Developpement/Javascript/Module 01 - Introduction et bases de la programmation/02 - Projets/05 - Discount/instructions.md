# 6. projet - discount

## Contexte

Vous dirigez une boutique de haches de bûcherons. Malheureusement, en raison d'une pandémie, votre gouvernement vous a contraint à fermer boutique pendant un mois. Pour ne pas perdre votre clientèle, vous avez ouvert une boutique en ligne et avez décidé d'appliquer une remise de 20 % sur toute commande passée au mois de juillet 2020. Et même si vous traitez vos commandes avec des mois de retard à cause des effectifs réduits, vous devez rester en mesure d'appliquer indéfiniment cette remise sur les commandes de juillet 2020.

Un prestataire a déjà réussi à extraire de votre base de données les commandes à traiter et vous les a traduires en javascript sous forme de tableau d'objets :

````js
const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
];
````

Chaque objet du tableau orders représente une commande. Chaque commande contient un certain nombre de propriétés, dont certaines ne nous seront pas utiles. Par exemple, les numéros de produits ne nous intéressent pas vraiment.

Là où notre regard doit s'arrêter, c'est sur le timestamp et le price de chaque commande. La propriété price, c'est le prix, facile. Le timestamp, c'est la date de la commande au format de l'heure Unix. C'est une façon particulière d'exprimer une date, car il s'agit du nombre exact de secondes écoulées entre le 1er janvier 1970 à minuit pile et un instant T. Par exemple, le 2 janvier 1970 à minuit pile, le timestamp Unix était égal à 24 * 60 * 60 secondes, soit 86400. C'est un format de date très courant en informatique, autant s'y habituer.

Vous allez donc devoir créer une fonction capable de prendre ce tableau en paramètres, et de modifier le prix des commandes effectuées en juillet 2020 afin d'y appliquer votre réduction de 20 %.

/!\ Vous ne devez pas altérer les types de valeurs. Les prix vous sont donnés en tant que chaînes de caractères, vous rendrez une chaîne de caractères. Un prix de "30" auquel on applique une réduction de 20 % sera changé pour "24", non pas 24.

## Indices

Vous pouvez attaquer l'exercice sans lire la suite. Voici toutefois quelques indices pour les moins costauds d'entre vous :

Vous pourriez avoir besoin de jeter un œil du côté de Date.

Une petite équation, comme ça, pour le plaisir de retirer 50 % au nombre 10 : 5 = 10 - 10 * 50 / 100.

## Bonus 1

Mathématiquement, on ne traite pas des euros exactement comme on traite n'importe quel nombre décimal : le nombre de chiffres après la virgule est important dans le contexte monétaire.

Les centimes après la virgule doivent toujours être exprimés avec deux chiffres, même si ce sont des zéros. "15.60" c'est "15.60", pas "15.6".

Assurez-vous qu'il y ait toujours deux chiffres après la virgule de chaque prix dans le résultat final : "14.00", "30.45", "13.40", etc.