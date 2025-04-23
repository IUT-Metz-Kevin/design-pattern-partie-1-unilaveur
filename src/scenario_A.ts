class ParametreJeu {
    private static instance: ParametreJeu;
  

    difficulté: string[] = ["facile", "moyen", "difficile"];
    langue: string[] = ["Français", "Anglais"];
    parametreGraphique: string[] = ["bas", "moyen", "élevé"];

    difficulteActuelle: string;
    langueActuelle: string;
  
    volumeMusique: number;
    volumeEffet: number;
  
    resolutionEcran: string;
    qualiteGraphique: string;
  
    private constructor() {
     
      this.difficulteActuelle = "moyen";
      this.langueActuelle = "Français";
      this.volumeMusique = 0.5;
      this.volumeEffet = 0.5;
      this.resolutionEcran = "1920x1080";
      this.qualiteGraphique = "moyen";
    }
  
   
    public static getInstance(): ParametreJeu {
      if (!ParametreJeu.instance) {
        ParametreJeu.instance = new ParametreJeu();
      }
      return ParametreJeu.instance;
    }
  }

  const settings1 = ParametreJeu.getInstance();
settings1.volumeMusique = 0.8;
settings1.langueActuelle = "Anglais";

const settings2 = ParametreJeu.getInstance();
console.log("Langue :", settings2.langueActuelle); 
console.log("Volume Musique :", settings2.volumeMusique); 
console.log("Même instance ?", settings1 === settings2); 