import { Civilite } from './Civilite';

export class Entrepreneur{
  
        private login: string;
        private password: string;
        private civilite = new Civilite();

        constructor(){}

    public getLogin(): string
 {
        return this.login;
    }

    public setLogin(login: string
): void {
        this.login = login;
    }

    public getPassword(): string
 {
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



}