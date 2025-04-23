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