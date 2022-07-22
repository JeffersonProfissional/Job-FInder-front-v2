import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from 'src/app/main/services/users.service';

@Component({
  selector: 'app-view-info-job',
  templateUrl: './view-info-job.component.html',
  styleUrls: ['./view-info-job.component.css']
})
export class ViewInfoJobComponent implements OnInit {

  data: any;
  info: any;

  constructor(
      private dialogRef: MatDialogRef<ViewInfoJobComponent>,
      private usersService: UsersService,
      @Optional() @Inject(MAT_DIALOG_DATA) data,
  ) { 
      this.data = data;
  }

  ngOnInit() {
      if(!this.data) {
          this.dialogRef.close();
      }
  }
}
