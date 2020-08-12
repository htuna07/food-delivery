interface Food {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  ingredients: Ingredient[];
  extra_ingredients: Ingredient[];
  calories:number,
  duration:number,
}

interface Ingredient {
  _id?: string;
  name: string;
}

interface User {
  _id?: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
}
