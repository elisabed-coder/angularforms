import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes: any[] = [];

  constructor(private backend: BackendService, private logger: LoggerService) {}

  getAllHeroes() {
    const data = this.backend.getHeroes();
    this.heroes = data;
    this.logger.log(data);
  }
}
