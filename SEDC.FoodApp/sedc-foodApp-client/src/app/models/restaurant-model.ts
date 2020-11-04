export class RestaurantRequestModel {
    name: string;
    address: string;
    municipality: Municipality
}

export enum Municipality {
    karpos = 1,
    centar,
    aerodrom
}