import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { listOfUsers } from "../users_list";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  UserDetails;

  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    public navctrl: NavController
  ) {}

  ngOnInit() {
    this.UserDetails = this.fb.group({
      userName:  ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  verifyUser() {
    var isValidUserArray = listOfUsers.filter(data => {
      if (
        data.user_name === this.UserDetails.get("userName").value &&
        data.password === this.UserDetails.get("password").value
      ) {
        return true;
      }
    });

    if (isValidUserArray.length > 0) {
      this.loginSuccess();
    } else {
      this.loginUnsuccess();
    }
  }

  async loginSuccess() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "Login Successful",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navctrl.navigateForward("/payment");
          }
        }
      ]
    });

    await alert.present();
  }

  async loginUnsuccess() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "Login Unsuccessful",
      buttons: ["OK"]
    });

    await alert.present();
  }

  navigateToPayment() {
    this.navctrl.navigateForward("../payment");
  }
}
// console.log('username = ' +this.UserDetails.get('userName').value);
// console.log('username = ' +this.UserDetails.controls['userName'].value);
// if(this.UserDetails.get('userName').value === this.users.user_name)
