import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(private router: Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  Menu() {
    this.presentLoading();
    this.router.navigateByUrl('/tabs/tab4');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 500
    });
    await loading.present();
  }

}
