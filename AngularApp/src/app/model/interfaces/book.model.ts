import { Category } from "src/app/core/interfaces/category.interface";

export interface Book {
  id: number;
  title: string;
  alt: string;
  src: string;
  surname: string;
  category: Category;
  description: string;
}
