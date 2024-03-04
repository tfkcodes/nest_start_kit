import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any): Promise<{
    accessToken: string;
    username: string;
    password: string;
    id: number;
    message: string;
  }> {
    if (user && user.username && user.password) {
      const accessToken = this.jwtService.sign({
        username: user.username,
        id: user.id,
      });

      return {
        accessToken,
        username: user.username,
        id: user.id,
        password: user.password,
        message: 'Login successful',
      };
    } else {
      throw new Error('Invalid username or password');
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    if (username == null || password == null) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
