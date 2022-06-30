import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-lists',
  templateUrl: './member-lists.component.html',
  styleUrls: ['./member-lists.component.css']
})
export class MemberListsComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberServices: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.memberServices.getMembers();
  }

  /*loadMembers(){
    this.memberServices.getMembers().subscribe(members => {
      this.members = members;
    })
  }*/

}
