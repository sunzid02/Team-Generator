import { Component } from '@angular/core';


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
    console.log(this.newMemberName);

  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
    console.log(this.numberOfTeams);

  }

  addMember(){
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }


    this.members.push(this.newMemberName)
    console.log(this.members);
    this.newMemberName = '';
    this.errorMessage = '';
  }


  generateTeams(){
    if (!this.numberOfTeams || this.numberOfTeams <= 0 || !this.members) {
      return
    }

    const allMembers = [...this.members]; //destructure array, ... means rest of the operator

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

    this.members  = [];
    this.numberOfTeams = '';
  }

}
