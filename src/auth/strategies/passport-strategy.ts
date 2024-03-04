import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenService } from '../service/access-token-service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private accessTokenService: AccessTokenService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'Nothing0',
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
