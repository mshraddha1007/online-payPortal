import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  PaymentDetails;
  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    public navctrl: NavController
  ) {}

  ngOnInit() {
    this.PaymentDetails = this.fb.group({
      billNo: "",
      billAmount: "",
      cardNo: "",
      nameOnCard: "",
     cvv: ""
    });
  }

  async completePayment() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Payment Successful",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navctrl.navigateForward("/logout");
          }
        }
      ]
    });

    await alert.present();
  }
}
