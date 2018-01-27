import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-askInfo',
  templateUrl: 'askInfo.html'
})
export class AskInfoPage {

  tabBarElement: any;

  mail = {
    about: "Service",
    object: "Objet",
    text: "Message",
    sendBy: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "@ email",
    }
  }

  submitAttempt: boolean = false;
  askInfoForm: FormGroup;
  serviceId;
  constructor(public navCtrl: NavController,  public navParams: NavParams,
    public toastCtrl: ToastController, public formBuilder: FormBuilder, private emailComposer: EmailComposer) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      this.serviceId = navParams.get("serviceId");
      this.mail.about = navParams.get("serviceName");

      this.askInfoForm = formBuilder.group({
        firstName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: [''],
        about: [''],
        object: [''],
        text: ['']
      });
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  askInfo(){
    this.submitAttempt = true;
    console.log(this.mail);
    if (this.askInfoForm.valid){
      this.emailComposer.isAvailable().then((available: boolean) =>{
        if(available) {
          //Now we know we can send
        }
       });
       
       let email = {
         from: this.mail.sendBy.email,
         to: 'cypconnet@wanadoo.fr',
         subject: this.mail.object,
         body: 'Related to: '+this.mail.about+'<br><br>'+this.mail.text,
         isHtml: true
       };
       
       // Send a text message using default options
       this.emailComposer.open(email);
    }
  }

  prev(){
    this.tabBarElement.style.display = 'flex';
    this.navCtrl.pop();
  }
}
