
interface UniteOrganisationnelle {
    getNom(): string;
    afficher(indent?: string): void;
  }
  
  // Employé
  class Employe implements UniteOrganisationnelle {
    constructor(private nom: string) {}
  
    getNom(): string {
      return this.nom;
    }
  
    afficher(indent = ''): void {
      console.log(`${indent}- Employé : ${this.nom}`);
    }
  }
  
  // Département
  class Departement implements UniteOrganisationnelle {
    private enfants: UniteOrganisationnelle[] = [];
  
    constructor(private nom: string) {}
  
    getNom(): string {
      return this.nom;
    }
  
    ajouter(unite: UniteOrganisationnelle): void {
      this.enfants.push(unite);
    }
  
    afficher(indent = ''): void {
      console.log(`${indent} Département : ${this.nom}`);
      this.enfants.forEach(enfant => enfant.afficher(indent + '  '));
    }
  }

const commercial = new Departement("Commercial");
commercial.ajouter(new Employe("Sophie"));
commercial.ajouter(new Employe("Luc"));

commercial.afficher();

  