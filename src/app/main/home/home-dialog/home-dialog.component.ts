import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent implements OnInit {

  students: any = [];

  constructor(
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {
    if (this.students) {
      this.students = _data.student;
      console.log(this.students);
    }
  }

  ngOnInit() {
    console.log(this.students);
    // console.log(this._data.student);
  }

  onClose(students) {
    console.log(students);
    this.dialogRef.close(students);
  }

}
