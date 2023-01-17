import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {

  constructor(){}
  donationform =new FormGroup(
    {
      fname : new FormControl("",[Validators.required]),
      amount : new FormControl("",[Validators.required])
    }
  );
  donationSubmit(){
    console.log(this.donationform.get("fname"));
  }
  get Firstname(): FormControl {
    return this.donationform.get("fname") as FormControl;
  }
  get Amount(): FormControl {
    return this.donationform.get("amount") as FormControl;
  }

}
