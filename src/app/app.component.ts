import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dialog: MatDialog, private rs: RestService) { }

  // columns = ["Subjects", "Id", "Name", "Grade", "Class", "Department", "University", "Batch"]
  // index = ["subjects", "id", "name", "grade", "classs", "department", "uni", "batch"]
  users: Users[] = [];
  ngOnInit(): void {
    this.rs.getUsers().subscribe
      ({
        next: (res) => {
          this.users = res;
        },
        error: () => {
          console.log("Error Occured");

        }
      })
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    })
  }

  // Data: any = [
  //   {
  //     id: 1,
  //     name: 'Shahzeb',
  //     grade: 'A',
  //     class: 'MS',
  //     department: 'Computer Sceince',
  //     uni: 'Punjab University',
  //     batch: '2020-2022',
  //     subjects: [
  //       {
  //         id: 1,
  //         name: 'computer science',
  //         creditHours: '3',
  //         lecturer: 'James'
  //       },
  //       {
  //         id: 2,
  //         name: 'maths',
  //         creditHours: '3',
  //         lecturer: 'Sam'
  //       },
  //       {
  //         id: 3,
  //         name: 'it',
  //         creditHours: '3',
  //         lecturer: 'Mark'
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'Saqlain',
  //     grade: 'B',
  //     class: 'MS',
  //     department: 'Computer Sceince 2',
  //     uni: 'Punjab University',
  //     batch: '2020-2022',
  //     subjects: [
  //       {
  //         id: 1,
  //         name: 'computer science',
  //         creditHours: '3',
  //         lecturer: 'James'
  //       },
  //       {
  //         id: 2,
  //         name: 'maths',
  //         creditHours: '3',
  //         lecturer: 'Alex'
  //       },
  //       {
  //         id: 3,
  //         name: 'it',
  //         creditHours: '3',
  //         lecturer: 'Mark'
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'Sadaqat',
  //     grade: 'C',
  //     class: 'BS',
  //     department: 'Maths',
  //     uni: 'Preston University',
  //     batch: '2020-2022',
  //     subjects: [
  //       {
  //         id: 1,
  //         name: 'Calculus',
  //         creditHours: '3',
  //         lecturer: 'Mickel'
  //       },
  //       {
  //         id: 2,
  //         name: 'Algebra',
  //         creditHours: '3',
  //         lecturer: 'Stoner'
  //       },
  //       {
  //         id: 3,
  //         name: 'it',
  //         creditHours: '3',
  //         lecturer: 'Mark'
  //       }
  //     ]
  //   }
  // ]

}
