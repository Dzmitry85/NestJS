import { Comments } from "./comments.interface";

export class News {
  newsId: number;
  title: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;
  comments: Comments[];
}
