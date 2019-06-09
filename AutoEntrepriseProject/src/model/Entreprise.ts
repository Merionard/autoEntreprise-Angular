import { ChiffreAffaire } from './ChiffreAffaire';

export class Entreprise{
    private dateDebut: Date;
    private dateFin: Date;
    private isLiberal : boolean;
    private isCommercial : boolean;
    private isBeneficiaireArce: boolean;
    private typeActivite: String;
    private chiffresAffaire:Set<ChiffreAffaire>;

    public getDateDebut(): Date
 {
        return this.dateDebut;
    }

    public setDateDebut(dateDebut: Date
): void {
        this.dateDebut = dateDebut;
    }

    public getDateFin(): Date
 {
        return this.dateFin;
    }

    public setDateFin(dateFin: Date
): void {
        this.dateFin = dateFin;
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