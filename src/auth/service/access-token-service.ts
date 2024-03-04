import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccessTokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  validateAccessToken(token: string): any {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }
}
