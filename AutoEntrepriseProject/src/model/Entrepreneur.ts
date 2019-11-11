import { Civilite } from './Civilite';
import { Entreprise } from './Entreprise';

export class Entrepreneur {
/*     id:number;
    login:string;
    password:string;
    civilite:Civilite;
    entreprises:Set<Entreprise>; */


    public static fromJson(json: Object) {
        console.log("entreprise = " +json['entreprise']);
        return new Entrepreneur(json['id'],
            json['login'],
            json['password'],
            json['civilite'],
            json['entreprise']
            
        );
    }

    constructor(private id: number,
        private login: string,
        private password: string,
        private civilite: Civilite,
        private entreprise: Entreprise) { }

        /* constructor(){} */


    public getId(): number {
        return this.id;
    }

    public getLogin(): string {
        return this.login;
    }

    public setLogin(login: string
    ): void {
        this.login = login;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string
    ): void {
        this.password = password;
    }

    public getCivilite(): Civilite {
        return this.civilite;
    }

    public setCivilite(civilite: Civilite): void {
        this.civilite = civilite;
    }

    public getEntreprise(): Entreprise {
        return this.entreprise;
    }

    public setEntreprise(entreprise: Entreprise): void {
        this.entreprise = entreprise;
    }





}