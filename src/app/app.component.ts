import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

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
  constructor(private router: Router){
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
}
