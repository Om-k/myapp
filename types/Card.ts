import { IStrapiImage } from "./CommonTypes";

export interface ICard {
    Heading: string;
    Description: string;
    Image: IStrapiImage;
    Groups: { id: number; Value: string }[];
    ImageHeaderContainer: boolean;
    FullWidth: boolean;
}


