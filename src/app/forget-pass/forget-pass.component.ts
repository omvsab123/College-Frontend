import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent {

  step = 1;
  email = "";
  otp = "";
  newPassword = "";
  confirmPassword = "";

  errorMsg = "";
  successMsg = "";

  constructor(private http: HttpClient) {}

  // STEP 1 - SEND OTP
  sendOtp() {
    this.errorMsg = "";
    this.successMsg = "";

    if (!this.email.includes("@")) {
      this.errorMsg = "Invalid Email";
      return;
    }

    this.http.post("YOUR_API/send-otp", { email: this.email }).subscribe({
      next: (res: any) => {
        this.successMsg = "OTP Sent Successfully";
        this.step = 2;
      },
      error: err => {
        this.errorMsg = "Invalid Email / Email Not Registered";
      }
    });
  }

  // STEP 2 - VERIFY OTP
  verifyOtp() {
    this.errorMsg = "";
    this.successMsg = "";

    if (this.otp.length < 4) {
      this.errorMsg = "Invalid OTP";
      return;
    }

    this.http.post("YOUR_API/verify-otp", {
      email: this.email,
      otp: this.otp
    }).subscribe({
      next: (res: any) => {
        this.successMsg = "OTP Verified Successfully";
        this.step = 3;
      },
      error: err => {
        this.errorMsg = "Incorrect OTP";
      }
    });
  }

  // STEP 3 - RESET PASSWORD
  resetPassword() {
    this.errorMsg = "";
    this.successMsg = "";

    if (this.newPassword !== this.confirmPassword) {
      this.errorMsg = "Passwords do not match";
      return;
    }

    this.http.post("YOUR_API/set-password", {
      email: this.email,
      otp: this.otp,
      newPassword: this.newPassword
    }).subscribe({
      next: (res: any) => {
        this.successMsg = "Password Reset Successfully";
        alert("Password changed! Redirecting to login...");
        // redirect here
      },
      error: err => {
        this.errorMsg = "Something went wrong. Try again.";
      }
    });
  }

}
