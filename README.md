# ProjecteSistemes-Trivial
Projecte de sistemes de fer un joc de trivial i usar Github.

# De que ho farem?
El nostre grup fara el trivial sobre pelicules; especificament les pelicules mes populars historicament.
Preguntarem sobre diferents escenes i moments relacionats o que van pasar amb aquestes pelicules.

# Rols
Enrique - Responsable del Github
Marc - Desarollador del Front-End
Ruben - Responsable de UI/UX

# Desarollo de App
  * Sistema d'accés: Al principi del joc, hauràs d'introduir el teu nom i la teva edat, i després podràs prémer el botó de començar. Si no s'introdueixen les dades, no es podrà iniciar el joc.
  * Joc principal i preguntes: El joc és un trivial/quiz sobre les pel·lícules més populars, on et preguntarà una varietat de qüestions; poden ser d'escenes, moments o de coses fora la producció de les pel·lis. Es preguntaran un total de cinc qüestions, agafades d'una llista random per crear varietat en tornar a jugar. Seguirà el format popular d'un Kahoot, on hi haurà 4 opcions per respondre o només 2 si es pregunta de veritat o fals. En els dos casos, només hi haurà una opció que és correcte. No sabràs si has respost correcte fins al final, quan hagis respos totes les cinc preguntes; que et portarà a la pròxima part.
  * Resultats: Un cop s'hagin respos les cinc preguntes, els resultats es presentaran i es podrà veure quines has respos bé i les que has respos malament. Després rebràs un títol depenent del teu resultat:
  - 0-1 correctes = Inculto: Has de mirar més pel·lis, nano!
  - 2 correctes = Casi però no: Si passes una mica més temps al cine, la pròxima serà!
  - 3-4 correctes = Aprovat: Has passat el quiz, felicitats!
  - 5 correctes = Movie Master: No només has aprovat, has demostrat que ets un friqui de les pel·lis. Enhorabona!
  * Restart: Un cop hagis vist els teus resultats i el teu títol, pots tornar a provar prement el botó de reiniciar a sota, on hauràs de reintroduir el teu nom i edat (per si de cas és un altra persona) i podràs tornar a fer el quiz. Es tornaran a aleatoritzar les preguntes, fent que no sigui molt repetitiu i que puguis tornar a jugar un parell de vegades.
  * Timer a les preguntes: Hi haurà un cronometro de 15 segons cada pregunta, i hauràs de llegir i respondre a la pregunta abans que s'acabi el temps. Podràs consultar el cronometro just al costat del text de la pregunta. Afegirem que en el cas que l'usuari no respongui en temps, simplement es farà una elecció random de la pregunta, afegint un element divertit i simulant com l'usuari es "tira un triple".
  * Establiment de regles: A la pàgina principal, hi haurà una breu explicació del que s'ha contat a dalt i les regles del quiz com el nombre de preguntes, el temps per fer-les i el sistema random que implanta, etc.
