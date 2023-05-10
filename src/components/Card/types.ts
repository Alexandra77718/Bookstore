export type CardType = {
    error?: string;
    title: string;
    subtitle?: string;
    authors?: string;
    publisher?: string;
    isbn10?:string;
    isbn13?: string;
    pages?: string;
    year?: string;
    rating?: string;
    desc?: string;
    price?: string;
    image: string;
    url?: string;
    pdf?: {
        "Chapter 2": string,
        "Chapter 5": string,
    };
  };

  export type BookCardType = {
    error?: string;
    title: string;
    subtitle?: string;
    authors?: string;
    publisher?: string;
    isbn10?:string;
    isbn13?: string;
    pages?: string;
    year?: string;
    rating?: string;
    desc?: string;
    price?: string;
    image: string;
    url?: string;
    pdf?: {
        "Chapter 2": string,
        "Chapter 5": string,
    };
  };

export enum CardSize {
    Main = 0,
    YourCart = 1,
    Favorites = 2,
   SearchShort = 3,
}

export type CardProps = {
    card: CardType;
    size?: CardSize;
}
export type BookCardProps = {
    card: CardType;
}
