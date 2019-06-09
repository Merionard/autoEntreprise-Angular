export class ChiffreAffaire{
    private annee:number;
    private chiffreAffaire:number;

    public getAnnee(): number
 {
        return this.annee;
    }

    public setAnnee(annee: number
): void {
        this.annee = annee;
    }

    public getChiffreAffaire(): number {
        return this.chiffreAffaire;
    }

    public setChiffreAffaire(chiffreAffaire: number): void {
        this.chiffreAffaire = chiffreAffaire;
    }

}