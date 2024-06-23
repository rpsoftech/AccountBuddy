import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationService } from './localization.service';

@Component({
  standalone: true,
  imports: [LoginComponent, RouterModule, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LocalizationService],
})
export class AppComponent {
  title = '';
  localization: any = {};

  constructor(private localizationService: LocalizationService) {}

  ngOnInit() {
    this.localizationService.loadLocalization().subscribe((data) => {
      this.localizationService.setLocalization(data);
    });

    this.localizationService.localizationData$.subscribe((data) => {
      this.localization = data;
    });
    this.title = this.localization.APP_TITLE;
  }
}
