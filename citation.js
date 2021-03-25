function getPhrase(){
    var listePhrases = new Array(
        "La beauté est dans les yeux de celui qui regarde. (Oscar Wilde, écrivain)",
        "Quand on m'attaque, je peux me défendre, mais devant les louanges, je suis sans défense. (Sigmund Freud, médecin)",
        "La gratitude est non seulement la plus grande des vertus, mais c'est également la mère de tous les autres. (Emil Cioran, philosophe et écrivain)",
        "La reconnaissance est la mémoire du cœur. (Henri Lacordaire, religieux)",
        "La stratégie c'est l'art de faire face à son destin. (Peter Drucker, théoricien du management)",
        "Ceux qui ne font rien ne se trompent jamais. (Théodore de Banville, poète)",
        "Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite. (Henry Ford, industriel)",
        "La vraie réussite d'une équipe, c'est d'assurer la compétitivité dans la pérennité. (Alain Prost, pilote automobile)",
        "Pour qu'un château de cartes s'écroule, il suffit d'en retirer une seule. (Dominique Muller, écrivain)",
        "Ne compter que sur soi c'est risquer de se tromper. (Pierre Gravel, prêtre)",
        "Aucun de nous ne sait ce que nous savons tous, ensemble. (Euripide, dramaturge)",
        "Seuls ceux qui prennent le risque d'échouer spectaculairement réussiront brillamment. (Robert Kennedy, homme politique)",
        "Pour gagner, il faut risquer de perdre. (Jean-Claude Killy, skieur)",
        "Si vous ne risquez rien, vous risquez encore plus. (Faouzi Skali, écrivain)",
        "Celui qui meurt cette année en est quitte pour l'an prochain. (William Shakespeare, dramaturge)",
        "Ce qu'on risque révèle ce qu'on vaut. (Jeanette Winterson, écrivain)",
        "Ask not what your country can do for you; ask what you can do for your country.  (John Kennedy)",
        "Genius is one percent inspiration and ninety-nine percent perspiration.  (Thomas Edison)",
        "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.	(Martin Luther King)",
        "Life is like riding a bicycle. To keep your balance, you must keep moving.	(Albert Einstein)",
        "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.	(Abraham Lincoln)"

    );
     
    document.getElementById("phrase").innerHTML = listePhrases[Math.floor(Math.random() * listePhrases.length)];
}