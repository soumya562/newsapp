export class Weather {
    constructor(
        public cityName : string,
        public temp: string,
        public max_temp:string,
        public min_temp:string,
        public feels_like : string,
        public weatherKind : string,// description
        // public rainfall:string, // precipitation
        public windSpeed:string,
        public windDirection : string,
        public humidity : string,
        public pressure : string,
        public visibility : string,
        public cloundPercentage : string//in meter
        ){}
}