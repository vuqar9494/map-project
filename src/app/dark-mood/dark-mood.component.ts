import { Component } from "@angular/core";
import { DarkModeService } from "angular-dark-mode";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
  <div class="icon" (click)="t.click()" >
  <input #t style="display: none;"
    type="checkbox"
    [checked]="darkMode$ |async"
    (change)="onToggle()"
  />
  <i style="font-size: 14px; padding:5px ;" class="fa fa-moon-o"></i>
  </div>
  `,
})
export class DarkModeToggle {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}