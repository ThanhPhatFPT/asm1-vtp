import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="form-container">
      <h2>Đăng ký</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="firstName">Tên:</label>
          <input
              type="text"
              id="firstName"
              [(ngModel)]="firstName"
              name="firstName"
              required
              maxlength="50">
        </div>
        <div class="form-group">
          <label for="lastName">Họ:</label>
          <input
              type="text"
              id="lastName"
              [(ngModel)]="lastName"
              name="lastName"
              required
              maxlength="50">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
              type="email"
              id="email"
              [(ngModel)]="email"
              name="email"
              required
              maxlength="100">
        </div>
        <div class="form-group">
          <label for="username">Tên đăng nhập:</label>
          <input
              type="text"
              id="username"
              [(ngModel)]="username"
              name="username"
              required
              maxlength="50">
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu:</label>
          <input
              type="password"
              id="password"
              [(ngModel)]="password"
              name="password"
              required
              minlength="8"
              maxlength="255">
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p *ngIf="error" class="error">{{ error }}</p>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .error {
      color: red;
      margin-top: 10px;
    }
  `]
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.email || !this.username || !this.firstName || !this.lastName || !this.password) {
      this.error = 'Vui lòng nhập đầy đủ thông tin';
      return;
    }

    this.http.post('http://localhost:8080/register', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
    }).subscribe({
      next: (response: any) => {
        console.log('Đăng ký thành công:', response);
        this.error = ''; // Xóa lỗi nếu thành công
      },
      error: (error) => {
        console.error('Lỗi đăng ký:', error);
        this.error = 'Đăng ký thất bại. Vui lòng thử lại.';
      }
    });
  }
}
