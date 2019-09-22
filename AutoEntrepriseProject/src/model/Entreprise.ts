import { ChiffreAffaire } from './ChiffreAffaire';

export class Entreprise{


    public static fromJson(json: Object) {
        return new Entreprise(json['chiffresAffaire'],
            json['dateDebut'],
            json['dateFin'],
            json['typeActivite'],
            json['id'],
            json['beneficaireArce'],
            json['siret'],
            json['liberal'],
            json['commercial']
        );
    }

    constructor(private chiffresAffaire:Set<ChiffreAffaire>,
        private dateDebut: Date,
        private dateFin: Date,
        private typeActivite: String,
        private id : number,
        private isBeneficiaireArce: boolean,
        private siret:String,
        private isLiberal : boolean,
        private isCommercial : boolean
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

    public setDateDebut(dateDebut: Date
): void {
        this.dateDebut = dateDebut;
    }

    public isIsLiberal(): boolean {
        return this.isLiberal;
    }

    public setIsLiberal(isLiberal: boolean): void {
        this.isLiberal = isLiberal;
    }

    public isIsCommercial(): boolean {
        return this.isCommercial;
    }

    public setIsCommercial(isCommercial: boolean): void {
        this.isCommercial = isCommercial;
    }

    public getIsBeneficiaireArce(): boolean
 {
        return this.isBeneficiaireArce;
    }

    public setIsBeneficiaireArce(isBeneficiaireArce: boolean
): void {
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

}