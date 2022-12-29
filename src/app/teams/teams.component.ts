import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams: Team[] = [];
  heroes: Hero[] = [];
  addedHero: Hero = { id: 0, name: "error" };

  isAdmin: boolean = document.cookie == "admin";

  constructor(private teamService: TeamService,
                private heroService: HeroService,  ) { }

  ngOnInit() {
    this.getHeroes();
    this.getTeams();

  }

  getTeams() {
    this.teamService.getTeams()
      .subscribe(result => this.teams = result)
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    if (this.teams.some(t => t.name == name)) { alert(`There is command with name ${name}`); return;}
    this.teamService.addTeam({ name } as Team)
      .subscribe(team => { this.teams.push(team) });
  }

  addHero(name: string, team: Team): void {
    /*add new hero*/
    name = name.trim();
    if (!name) { return; }
    if (this.heroes.some(h => h.name == name)) { alert(`There is hero with name ${name}`); return;}
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.addedHero = hero;
      });

    /*add new hero to this team*/
    this.teamService.addHero({ name } as Hero, team )
      .subscribe(a => {
        if (team.members == undefined) team.members = []
        team.members.push(this.addedHero);
      })  
  }

  delete(hero: Hero, team: Team): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    team.members = team.members.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe()
  }
}
