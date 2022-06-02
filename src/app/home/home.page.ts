import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Plugins } from '@capacitor/core';
import { ViewWillEnter } from '@ionic/angular';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {
  Data = JSON.parse(window.localStorage.getItem("RegisterUserData"));
  Name: any;
  base64Image: any;
  lenght: Array<any> = []
  constructor(private camera: Camera) { }
  ngOnInit() {
    this.Name = this.Data.name;

  }

  ionViewWillEnter(): void {
    var self = this;
    var intervalId = window.setInterval(function () {
      self.local();
    }, 10000);
  }

  Camera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert("Please allow camera permisions")
    });
  }









  local() {

    let id: any = this.lenght.length;
    this.lenght.push(id)
    const notifs = LocalNotifications.schedule({
      notifications: [
        {
          title: 'Title',
          body: 'Hi' + ' ' + this.Name + ',' + 'This is a Local Message',
          id: id,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null,

        },
      ],
    });
    console.log('scheduled notifications', notifs);

  }

}
