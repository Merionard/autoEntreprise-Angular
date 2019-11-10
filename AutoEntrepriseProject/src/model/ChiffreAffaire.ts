export class ChiffreAffaire{
    private annee:number;
    private montant:number;
    private mois: number;

    public getAnnee(): number
 {
        return this.annee;
    }

    public setAnnee(annee: number
): void {
        this.annee = annee;
    }

    public getMontant(): number {
        return this.montant;
    }

    public setMontant(montant: number): void {
        this.montant = montant;
    }

    public getMois(): number
    {
           return this.mois;
       }
   
       public setMois(mois: number
   ): void {
           this.mois = mois;
       }



}