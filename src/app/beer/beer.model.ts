export interface Beer {
  id: string,
  photoUrl: string;
  name: string;
  brand: string;
  description: string;
  alcoholPercentage: number;
}

export interface BeerState extends Beer {
  likes: number;
  dislikes: number;
}
