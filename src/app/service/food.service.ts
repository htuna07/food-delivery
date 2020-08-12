import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  foods: Food[] = [
    {
      _id: "0",
      image:
        "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      name: "Chicken Soup",
      price: 1,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      ingredients: [
        {
          _id: "4",
          name: "chicken",
        },
      ],
      extra_ingredients: [
        {
          _id: "3",
          name: "bread",
        },
        {
          _id: "2",
          name: "hot sauce",
        },
      ],
      calories: 200,
      duration: 30,
    },
    {
      _id: "1",
      image:
        "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
      name: "Pizza",
      price: 10,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      ingredients: [
        {
          _id: "4",
          name: "cheese",
        },
      ],
      extra_ingredients: [
        {
          _id: "0",
          name: "ketchup",
        },
        {
          _id: "1",
          name: "mayonnaise",
        },
        {
          _id: "2",
          name: "hot sauce",
        },
      ],
      calories: 600,
      duration: 45,
    },
    {
      _id: "2",
      image:
        "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      name: "Spaghetti",
      price: 5,
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      ingredients: [
        {
          _id: "2",
          name: "hot sauce",
        },
      ],
      extra_ingredients: [
        {
          _id: "0",
          name: "ketchup",
        },
        {
          _id: "1",
          name: "mayonnaise",
        },
      ],
      calories: 300,
      duration: 20,
    },
  ];

  constructor() {}

  list() {
    return of(this.foods);
  }

  get(id: string) {
    return of(this.foods.find((food) => food._id == id));
  }
}
