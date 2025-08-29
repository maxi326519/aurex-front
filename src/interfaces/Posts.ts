export interface Post {
  id: string;
  date: Date;
  title: string;
  content: string;
  price: number;
  clicks: string;
}

export const initPost = (): Post => ({
  id: "",
  date: new Date(),
  title: "",
  content: "",
  price: 0,
  clicks: "",
});
