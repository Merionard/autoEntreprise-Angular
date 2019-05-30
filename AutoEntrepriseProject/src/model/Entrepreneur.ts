import { Civilite } from './Civilite';

export class Entrepreneur{
    constructor(
        public login: string,
        public password: string,
        public civilite: Civilite
      ) {}
}