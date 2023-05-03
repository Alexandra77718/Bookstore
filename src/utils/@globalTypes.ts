export type CardListType = CardType[];

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

export enum CardSize {
    Main = 0,
    YourCart = 1,
    Favorites = 2,
   SearchShort = 3,
}

export enum ButtonType {
    Primary = "Primary",
    Close = "Close",
    Like = "Like",
};


