import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(result => {
      this.teams = result;
    });
  }
}
