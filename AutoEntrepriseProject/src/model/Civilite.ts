export class Civilite{

        public nom:String;
        public prenom:String;
        public adresse : String;
        public dateNaissance : Date;

    public getNom(): String
 {
        return this.nom;
    }

    public setNom(nom: String
): void {
        this.nom = nom;
    }

    public getPrenom(): String
 {
        return this.prenom;
    }

    public setPrenom(prenom: String
): void {
        this.prenom = prenom;
    }

    public getAdresse(): String {
        return this.adresse;
    }

    public setAdresse(adresse: String): void {
        this.adresse = adresse;
    }

    public getDateNaissance(): Date {
        return this.dateNaissance;
    }

    public setDateNaissance(dateNaissance: Date): void {
        this.dateNaissance = dateNaissance;
    }

}