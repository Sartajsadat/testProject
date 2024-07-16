import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrl: './multi-language.component.css',
})
export class MultiLanguageComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fa', 'pa']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.translate.use('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}