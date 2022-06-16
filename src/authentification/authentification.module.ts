import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/local.strategy';
import { UserModule } from 'src/user/user.module';
import { UsersService } from 'src/user/user.service';
import { AuthentificationController } from './authentification.controller';
import { AuthService } from './authentification.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret : jwtConstants.secret,
      signOptions : { expiresIn : '60s'},
    }),
  ],
  providers: [AuthService,LocalStrategy,UsersService,JwtStrategy],
  exports : [AuthService]
})
export class AuthentificationModule {}
