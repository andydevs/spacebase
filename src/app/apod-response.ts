import { SafeResourceUrl } from '@angular/platform-browser';

export interface ApodResponse {
    date: string,
    explanation: string,
    media_type: string,
    service_version: string,
    title: SafeResourceUrl
}
