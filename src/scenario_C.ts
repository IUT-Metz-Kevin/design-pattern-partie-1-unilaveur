interface ControlerActions {
    sauter(): void;
    attaquer(): void;
    interargir(): void;
  }

  class Clavier {
    espace() {
      console.log("Le joueur appuie sur ESPACE (saut)");
    }
    clicGauche() {
      console.log("Le joueur clique gauche (attaque)");
    }
    clicDroit() {
      console.log("Le joueur clique droit (interaction)");
    }
  }
  
  class AdaptateurClavier implements ControlerActions {
    constructor(private clavier: Clavier) {}
  
    sauter() {
      this.clavier.espace();
    }
  
    attaquer() {
      this.clavier.clicGauche();
    }
  
    interargir() {
      this.clavier.clicDroit();
    }
  }

  class ManetteXbox {
    boutonA() {
      console.log("Xbox : bouton A (saut)");
    }
    boutonB() {
      console.log("Xbox : bouton B (attaque)");
    }
    boutonX() {
      console.log("Xbox : bouton X (interaction)");
    }
  }
  
  class AdaptateurXbox implements ControlerActions {
    constructor(private manette: ManetteXbox) {}
  
    sauter() {
      this.manette.boutonA();
    }
  
    attaquer() {
      this.manette.boutonB();
    }
  
    interargir() {
      this.manette.boutonX();
    }
  }

  class ManettePS5 {
    boutonX() {
      console.log("PS5 : bouton X (saut)");
    }
    boutonO() {
      console.log("PS5 : bouton O (attaque)");
    }
    boutonTriangle() {
      console.log("PS5 : bouton Triangle (interaction)");
    }
  }
  
  class AdaptateurPS5 implements ControlerActions {
    constructor(private manette: ManettePS5) {}
  
    sauter() {
      this.manette.boutonX();
    }
  
    attaquer() {
      this.manette.boutonO();
    }
  
    interargir() {
      this.manette.boutonTriangle();
    }
  }


const clavier = new AdaptateurClavier(new Clavier());
const xbox = new AdaptateurXbox(new ManetteXbox());
const ps5 = new AdaptateurPS5(new ManettePS5());


const controleurs: ControlerActions[] = [clavier, xbox, ps5];

for (const controleur of controleurs) {
  controleur.sauter();
  controleur.attaquer();
  controleur.interargir();
  console.log('---');
}
