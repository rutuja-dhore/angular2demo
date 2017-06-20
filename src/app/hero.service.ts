import {
  Injectable
} from '@angular/core';

import {
  HEROES
} from 'app/mock-heros';

import {Hero} from 'app/hero';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
