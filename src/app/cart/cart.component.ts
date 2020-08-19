import { Component, OnInit } from "@angular/core";
import { StorageService } from "../service/storage.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart: Map<Food, number>;
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.cart = this.storageService.getCart();
  }

  remove(food: Food) {
    this.storageService.removeFromCart(food);
  }

  add(food: Food) {
    this.storageService.addToCart(food, 1);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let [key, value] of this.cart.entries()) {
      totalPrice += key.price * value;
    }
    return totalPrice;
  }

  getAmountOfFood(food: Food) {
    return this.cart.get(food) || 0;
  }

  order() {
    console.log("ordered.");
  }
}
