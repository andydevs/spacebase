import { SafeResourceUrl } from '@angular/platform-browser';

export interface ApodResponse {
    title: string,
    date: string,
    explanation: string,
    media_type: string,
    service_version: string,
    url: SafeResourceUrl
}
