import { Hero } from "../hero";

export interface IHeroRepository {
    get(): Hero[];
    getById(id: string): Hero;
    create(hero: any): void;
    update(hero: any): Hero;
    delete(id: string): void;
}
