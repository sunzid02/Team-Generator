import { Component } from '@angular/core';
import { TeamComponent } from './components/team/team.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: Number | '' = 0;
  teams: string[][] = [];

  onInput(member: string){
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  addMember(){
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }


    this.members.push(this.newMemberName)
    this.newMemberName = '';
    this.errorMessage = '';
  }


  generateTeams(){
    if (!this.numberOfTeams || this.numberOfTeams <= 0 || !this.members) {
      this.errorMessage = "invalid Number of teams";
      return;
    }

    if (this.members.length < this.numberOfTeams)
    {
      this.errorMessage = "Not enough members to create a team";
      return;
    }

    const allMembers = [...this.members]; //destructure array, ... means rest of the operator
    this.errorMessage = '';

    while (allMembers.length)
    {
      for (let i = 0; i < this.numberOfTeams; i++)
      {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) {
          break;
        }

        if (this.teams[i])
        {
          this.teams[i].push(member);
        }
        else
        {
          this.teams[i] = [member];
        }

      }
    }

    console.log(this.teams);

    this.cleanUp();

  }

  cleanUp(){
    this.members  = [];
    this.numberOfTeams = '';
  }

}
