import { Hero } from "../domain/hero";
import { IHeroRepository } from "../domain/repositories/IHeroRepository";
import { IHeroService } from "./IHeroService";

export class HeroService implements IHeroService {

    private repository: IHeroRepository;

    constructor(repository: IHeroRepository) {
        this.repository = repository;
    }

    get(): Hero[]{
        return this.repository.get();
    }

    getById(id: string): Hero {
        throw new Error("Method not implemented.");
    }
    create(hero: any): void {
        throw new Error("Method not implemented.");
    }
    update(hero: any): Hero {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }

}