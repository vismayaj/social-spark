import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SocialSparkService } from './social-spark.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'social-spark';
  isContinue = false;
  activeUpload = true;
  activeGenerate = false;
  constructor(private socialSparkService:SocialSparkService){
  }

  ngOnInit(): void {

    this.uploadFile();

  }


  isRel = false;
  isRelease(){
    this.isRel = true;
    this.isCamp = false; 
    this.isPost = false
    this.isTrend = false;
    this.isAdmin = false;


  }
  continuePosting(){
    // this.router.navigate(["generate-post"]);
    this.isContinue = true
    this.isAdmin = true;
    // this.trending()

  }

  isAdmin = false;
  adminpage(){
    this.isAdmin = true;
    this.isTrend = false;
    this.isRel = false;
    this.isPost = false;
    this.isCamp = false
  }



  isUpload = false;
  uploadFile(){
    this.isUpload = true;
    this.isgenereated =  false;
    this.continuePosting()

  }

  isgenereated = false;
  genereatedPosts(){
    this.isgenereated =  true;
    this.isUpload = false;
  }

  getFileData(event: any){
    let file = event.target.files[0];
    let fd = new FormData();
    fd.append('file', file,);
    this.socialSparkService.getPostViaFile(fd)
    // .subscribe(posts => {
    //   }, (err: HttpErrorResponse) => {
    //     console.log("Error:",err.error);
    //   });
    
  }

  isCamp = false;
  isPost = false;

  gotoPost(){
    this.isPost = true
    this.isCamp = false;
    this.isRel = false;
    this.isTrend = false;
    this.isAdmin = false;


  }

  backToCampain(){
    this.isCamp = true;
    this.isRel = false;
    this.isPost = false;
    this.isTrend = false;
    this.isAdmin = false;



  }

  popup = false;
  addRelease(){
    this.popup = true;
  }

  publish(){
    this.popupp = true;
  }

  popupp = false; 
  cancel(){
    this.popup = false;
    this.popupp = false; 
  }


  isManual = true;
  manualCreate(){
    this.isManual = true;

  }
  viaRelaseCreate(){
    this.isManual = false;


  }


  isTrend = false
  trending(){
    this.isTrend = true
    this.isRel = false;
    this.isPost = false;
    this.isCamp = false
    this.isAdmin = false;

  }


}
