import { NeowsDay } from "../neows/neows.service";

export const FEED : NeowsDay[] = [
    {
        date: '2015-09-08',
        asteroids: [
            {
                name: '(2015 RC)',
                diameter: { min: '120', max: '269' },
                hazardous: false
            },
            {
                name: '(2015 TX237)',
                diameter: { min: '191', max: '427' },
                hazardous: false
            },
            {
                name: '(2006 WO1)',
                diameter: { min: '1261', max: '2819' },
                hazardous: false
            }
        ]
    },
    {
        date: '2015-09-07',
        asteroids: [
            {
                name: '(2015 RG2)',
                diameter: { min: '40', max: '89' },
                hazardous: false
            },
            {
                name: '(2015 RX83)',
                diameter: { min: '229', max: '513' },
                hazardous: false
            },
            {
                name: '(2015 RY83)',
                diameter: { min: '126', max: '282' },
                hazardous: false
            }
        ]
    }
  ]