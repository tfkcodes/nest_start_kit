import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/passport-strategy';
import { AccessTokenService } from './service/access-token-service';
import { AuthService } from './service/auth-service.service';
import { AuthResolver } from './resolver/auth.resolver';
@Module({
  imports: [
    HttpModule.register({
      httpsAgent: { rejectUnauthorized: false },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'Nothing0',
      signOptions: { expiresIn: '2000s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, AccessTokenService],
  exports: [AuthService],
})
export class AuthModule {}
