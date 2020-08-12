import { Component, Input, OnInit } from "@angular/core";
import { StorageService } from "../service/storage.service";
import { ModalController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  @Input() food: Food;

  orderFood;

  count = 1;

  constructor(
    private storageService: StorageService,
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.orderFood = { ...this.food, extra_ingredients: [] };
  }

  addToCart() {
    this.toastController
      .create({
        message: "Successfully added to cart.",
        duration: 2000,
      })
      .then((toast) => toast.present());
    this.storageService.addToCart(this.orderFood, this.count);
    this.onDismiss();
  }

  updateIngredients(ingredient: Ingredient, target: string) {
    if (target == "defaults") {
      let index = this.orderFood.ingredients.findIndex(
        (ing) => ing._id == ingredient._id
      );
      if (index != -1) {
        this.orderFood.ingredients = this.orderFood.ingredients.filter(
          (ing) => ing._id != ingredient._id
        );
      } else {
        this.orderFood.ingredients.push(ingredient);
      }
    } else if (target == "extras") {
      let index = this.orderFood.extra_ingredients.findIndex(
        (ing) => ing._id == ingredient._id
      );
      if (index != -1) {
        this.orderFood.extra_ingredients = this.orderFood.extra_ingredients.filter(
          (ing) => ing._id != ingredient._id
        );
      } else {
        this.orderFood.extra_ingredients.push(ingredient);
      }
    }
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
