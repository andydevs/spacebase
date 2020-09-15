interface InsightSensorData {
    av: number,
    ct: number,
    mn: number,
    mx: number
}

interface InsightCompasPointObject {
    compass_degrees: number,
    compass_point: string,
    compass_up: string,
    ct: number
}

export interface InsightSol {
    AT?: InsightSensorData,
    HWS?: InsightSensorData
    PRE?: InsightSensorData,
    WD: {
        most_common?: InsightCompasPointObject,
        '1'?: InsightCompasPointObject,
        '2'?: InsightCompasPointObject,
        '3'?: InsightCompasPointObject,
        '4'?: InsightCompasPointObject,
        '5'?: InsightCompasPointObject,
        '6'?: InsightCompasPointObject,
        '7'?: InsightCompasPointObject,
        '8'?: InsightCompasPointObject,
        '9'?: InsightCompasPointObject,
        '10'?: InsightCompasPointObject,
        '11'?: InsightCompasPointObject,
        '12'?: InsightCompasPointObject,
        '13'?: InsightCompasPointObject,
        '14'?: InsightCompasPointObject,
        '15'?: InsightCompasPointObject,
        '16'?: InsightCompasPointObject
    },
    Season: string,
    First_UTC: string,
    Last_UTC: string
}