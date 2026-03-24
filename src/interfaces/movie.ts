export interface IMovie {
  id: number;
  title: string;
  director: string;
  image: string;
  createdAt: string;
}

export type IMovieInput = Omit<IMovie, "id" | "createdAt">;