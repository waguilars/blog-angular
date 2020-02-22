import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public title_page: string;
  constructor() {
    this.title_page = "Identificate!";
  }

  ngOnInit(): void {}
}
