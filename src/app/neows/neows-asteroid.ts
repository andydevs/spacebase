export interface NeowsAsteroid {
    name: string,
    estimated_diameter: {
        feet: {
            estimated_diameter_min: number,
            estimated_diameter_max: number
        }
    },
    is_potentially_hazardous_asteroid: boolean
}