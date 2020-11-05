import { Component } from '@angular/core';
import { SelectItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }
    
    checked1: boolean = false;

    checked2: boolean = true;
    checked3: boolean = true;
}
