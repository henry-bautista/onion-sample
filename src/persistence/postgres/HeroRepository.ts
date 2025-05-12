import { Hero } from "../../domain/hero";
import { IHeroRepository } from "../../domain/repositories/IHeroRepository";

export class HeroRepository implements IHeroRepository {
    get(): Hero[] {
        // Connect to postgres DB
        return [];
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