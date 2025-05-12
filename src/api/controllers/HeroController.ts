import { IHeroRepository } from "../../domain/repositories/IHeroRepository";
//import { IHeroService } from "../../services/IHeroService";

export class HeroController {
    
    private service: IHeroRepository;

    constructor(service: any) {
        this.service = service;
    }

    get() {
        return this.service.get();
    }

    getById(id: string) {
        return this.service.getById(id);
    }

    create(hero: any) {
        return this.service.create(hero);
    }

    update(hero: any) {
        return this.service.update(hero);
    }

    delete(id: string) {
        return this.service.delete(id);
    }
}

