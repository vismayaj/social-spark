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

  continuePosting(){
    // this.router.navigate(["generate-post"]);
    this.isContinue = true
  }

  isUpload = false;
  uploadFile(){
    this.isUpload = true;
    this.isgenereated =  false;

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
}
