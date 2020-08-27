import { NeowsAsteroid } from "../neows/neows.service";

export const FEED : NeowsAsteroid[] = [
    {
        name: '(2015 RC)',
        estimated_diameter: {
            feet: {
                estimated_diameter_min: 120, 
                estimated_diameter_max: 269 
            }
        },
        is_potentially_hazardous_asteroid: false
    },
    {
        name: '(2015 TX237)',
        estimated_diameter: {
            feet: {
                estimated_diameter_min: 191,
                estimated_diameter_max: 427
            }
        },
        is_potentially_hazardous_asteroid: false
    },
    {
        name: '(2006 WO1)',
        estimated_diameter: {
            feet: {
                estimated_diameter_min: 1261,
                estimated_diameter_max: 2819
            }
        },
        is_potentially_hazardous_asteroid: false
    }
]