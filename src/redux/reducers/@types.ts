import { CardListType } from "src/utils/@globalTypes";

export type GetSearchPostsPayload = {
    searchValue: string;
    isOverwrite: boolean;
    offset: number;
};

// export interface SetSearchedPostsPayload extends SetAllPostsPayload {
//     isOverwrite: boolean;
//   }


