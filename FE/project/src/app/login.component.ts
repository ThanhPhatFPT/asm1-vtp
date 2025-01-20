import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="login-container">
      <h2>Đăng nhập</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Tên đăng nhập:</label>
          <input 
            type="text" 
            id="username" 
            [(ngModel)]="username" 
            name="username" 
            required>
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu:</label>
          <input 
            type="password" 
            id="password" 
            [(ngModel)]="password" 
            name="password" 
            required>
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <p *ngIf="error" class="error">{{ error }}</p>
    </div>
  `,
  styles: [`
    .login-container {
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
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.error = 'Vui lòng nhập đầy đủ thông tin';
      return;
    }

    this.http.post('http://localhost:8080/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response: any) => {
        console.log('Đăng nhập thành công:', response.data.access_token);
        if (response.data.access_token) {
          // Lưu token vào localStorage thay vì sessionStorage
          localStorage.setItem('token', response.data.access_token);
          alert('Đăng nhập thành công!');
        } else {
          console.error('Không tìm thấy token trong phản hồi.');
          this.error = 'Đăng nhập thất bại. Vui lòng thử lại.';
        }
      },
      error: (error) => {
        console.error('Lỗi đăng nhập:', error);
        this.error = 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.';
      }
    });
  }



}