import { ChiffreAffaire } from './ChiffreAffaire';

export class Entreprise{


    public static fromJson(json: Object) {
        return new Entreprise(
            json['chiffresAffaire'],
            json['dateDebut'],
            json['dateFin'],
            json['typeActivite'],
            json['id'],
            json['beneficaireArce'],
            json['siret']
        );
    }

    constructor(
        private chiffresAffaire:Set<ChiffreAffaire>,
        private dateDebut: Date,
        private dateFin: Date,
        private typeActivite: String,
        private id : number,
        private isBeneficiaireArce: boolean,
        private siret:String
         ){}

    public getSiret(): String {
        return this.siret;
    }

    public setSiret(siret: String): void {
        this.siret = siret;
    }


    public getDateDebut(): Date
 {
        return this.dateDebut;
    }

    public setDateDebut(dateDebut: Date): void {
        this.dateDebut = dateDebut;
    }

    public getIsBeneficiaireArce(): boolean
 {
        return this.isBeneficiaireArce;
    }

    public setIsBeneficiaireArce(isBeneficiaireArce: boolean): void {
        this.isBeneficiaireArce = isBeneficiaireArce;
    }

    public getTypeActivite(): String
 {
        return this.typeActivite;
    }

    public setTypeActivite(typeActivite: String
): void {
        this.typeActivite = typeActivite;
    }

    public getChiffresAffaire(): Set<ChiffreAffaire> {
        return this.chiffresAffaire;
    }

    public setChiffresAffaire(chiffresAffaire: Set<ChiffreAffaire>): void {
        this.chiffresAffaire = chiffresAffaire;
    }

    public getChaffaireAnneeEnCours(): number{
        let summCa = 0;
        if(this.getChiffresAffaire()!=null){
            this.getChiffresAffaire().forEach(ca =>ca.getAnnee()== new Date().getFullYear()?summCa+=ca.getMontant():summCa+=0);
        }
        return summCa;
    }

}