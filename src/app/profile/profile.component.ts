import { Component, OnInit } from "@angular/core";
import { StorageService } from "../service/storage.service";
import { UserService } from "../service/user.service";
import { take, tap, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: User = {
    name: undefined,
    email: undefined,
    password: undefined,
    phone: undefined,
    surname: undefined,
  };

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(
        take(1),
        switchMap(() => this.userService.get(this.storageService.getUserId())),
        tap((user) => (this.user = user))
      )
      .subscribe();
  }

  save() {
    this.userService
      .update(this.user)
      .toPromise()
      .then((user) => {
        this.user = user;
        this.toastController
          .create({
            message: `Updated.`,
            duration: 2000,
          })
          .then((toast) => toast.present());
      })
      .catch(() =>
        this.toastController
          .create({
            message: `Failed!`,
            duration: 2000,
          })
          .then((toast) => toast.present())
      );
  }
}
