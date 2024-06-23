import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private localizationData = new BehaviorSubject<any>({});
  localizationData$ = this.localizationData.asObservable();

  constructor(private http: HttpClient) {}

  loadLocalization(): Observable<any> {
    return this.http.get('/assets/en.localization.json');
  }

  setLocalization(data: any) {
    this.localizationData.next(data);
  }
}
