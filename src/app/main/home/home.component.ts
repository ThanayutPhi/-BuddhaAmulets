import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  students: any = [];
  imgTitle: any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.imgTitle = [
      "./assets/images/BA-img.jpg",
      "./assets/images/BA-img.jpg",
      "./assets/images/BA-img.jpg",
      // {
      //   id: "1",
      //   coverImg: "./assets/images/BA-img.jpg",
      // },
      // {
      //   id: "2",
      //   coverImg: "./assets/images/BA-img.jpg",
      // },
      // {
      //   id: "3",
      //   coverImg: "./assets/images/BA-img.jpg",
      // },
    ]

    this.students = [
      {
        id: "1",
        titlename: "สมเด็จชานหมาก",
        subtitlename: "สมเด็จชานหมาก ลพ.คง วัดชำป่าง่าม พิมพ์ปรกโพธิ์หลังยันต์ตรี",
        img: "./assets/images/BA-img.jpg",
        about: "พระสมเด็จหลวงพ่อคง วัดชำป่าง่าม จ.ฉะเชิงเทรา พิมพ์ปรกโพธิ์หลังยันต์ตรี(นิยม) เนื้อผงผสมชานหมากหลวงพ่อคงท่านได้จัดสร้างพระในยุคแรกๆประมาณปี พ.ศ 2477 แบ่งออกเป็น 4 พิมพ์ คือ 1.พระสมเด็จปรกโพธิ์หลังยันต์ตรี 2.พระสมเด็จปรกโพธิ์หลังเรียบ 3.พระสมเด็จพิมพ์ใหญ่หลังเรียบ 4.พระปิดตา ส่วนเหรียญท่านได้จัดสร้างในปี พ.ศ.2483 พระผงผสมชานหมากตัวจริงเสียงจริงนั้นหาชมได้ยากมากๆ ปัจุบันพระสมเด็จชานหมากของท่านนั้นได้กลายเป็นพระในตำนานของเมืองแปดริ้วไปแล้วครับ"
      },
      {
        id: "2",
        titlename: "สมเด็จชานหมาก",
        subtitlename: "สมเด็จชานหมาก ลพ.คง วัดชำป่าง่าม พิมพ์ปรกโพธิ์หลังยันต์ตรี",
        img: "./assets/images/BA-img.jpg",
        about: "พระสมเด็จหลวงพ่อคง วัดชำป่าง่าม จ.ฉะเชิงเทรา พิมพ์ปรกโพธิ์หลังยันต์ตรี(นิยม) เนื้อผงผสมชานหมากหลวงพ่อคงท่านได้จัดสร้างพระในยุคแรกๆประมาณปี พ.ศ 2477 แบ่งออกเป็น 4 พิมพ์ คือ 1.พระสมเด็จปรกโพธิ์หลังยันต์ตรี 2.พระสมเด็จปรกโพธิ์หลังเรียบ 3.พระสมเด็จพิมพ์ใหญ่หลังเรียบ 4.พระปิดตา ส่วนเหรียญท่านได้จัดสร้างในปี พ.ศ.2483 พระผงผสมชานหมากตัวจริงเสียงจริงนั้นหาชมได้ยากมากๆ ปัจุบันพระสมเด็จชานหมากของท่านนั้นได้กลายเป็นพระในตำนานของเมืองแปดริ้วไปแล้วครับ"
      },
      {
        id: "3",
        titlename: "สมเด็จชานหมาก",
        subtitlename: "สมเด็จชานหมาก ลพ.คง วัดชำป่าง่าม พิมพ์ปรกโพธิ์หลังยันต์ตรี",
        img: "./assets/images/BA-img.jpg",
        about: "พระสมเด็จหลวงพ่อคง วัดชำป่าง่าม จ.ฉะเชิงเทรา พิมพ์ปรกโพธิ์หลังยันต์ตรี(นิยม) เนื้อผงผสมชานหมากหลวงพ่อคงท่านได้จัดสร้างพระในยุคแรกๆประมาณปี พ.ศ 2477 แบ่งออกเป็น 4 พิมพ์ คือ 1.พระสมเด็จปรกโพธิ์หลังยันต์ตรี 2.พระสมเด็จปรกโพธิ์หลังเรียบ 3.พระสมเด็จพิมพ์ใหญ่หลังเรียบ 4.พระปิดตา ส่วนเหรียญท่านได้จัดสร้างในปี พ.ศ.2483 พระผงผสมชานหมากตัวจริงเสียงจริงนั้นหาชมได้ยากมากๆ ปัจุบันพระสมเด็จชานหมากของท่านนั้นได้กลายเป็นพระในตำนานของเมืองแปดริ้วไปแล้วครับ"
      },

    ];
  }

  openDialog(id, item) {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      panelClass: 'my-class',
      data: {
        student: item,
        studentId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result) {
        console.log(result);
      } else {
        console.log("no result");
      }
    });
  }

}
