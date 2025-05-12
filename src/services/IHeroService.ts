import { Hero } from "../domain/hero";

export interface IHeroService {
    get(): Hero[];
    getById(id: string): Hero;
    create(hero: any): void;
    update(hero: any): Hero;
    delete(id: string): void;
}