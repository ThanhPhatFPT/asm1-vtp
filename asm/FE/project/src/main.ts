import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/login.component';
import { RegisterComponent } from './app/register.component';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent],
  template: `
    <div class="container">
      <div class="nav-buttons">
        <button (click)="showLogin = true" [class.active]="showLogin">Đăng nhập</button>
        <button (click)="showLogin = false" [class.active]="!showLogin">Đăng ký</button>
      </div>
      <app-login *ngIf="showLogin"></app-login>
      <app-register *ngIf="!showLogin"></app-register>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .nav-buttons button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #e9ecef;
    }
    .nav-buttons button.active {
      background-color: #007bff;
      color: white;
    }
  `]
})
export class App {
  showLogin = true;
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});