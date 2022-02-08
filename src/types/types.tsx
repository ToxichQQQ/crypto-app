export interface ICoin {
    id: string,
    name:string,
    image:string,
    symbol:string,
    last_updated:string,
    price_change_percentage_24h:number,
    current_price: number,
    market_cap:number,
}