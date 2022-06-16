import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './authentification/authentification.service';
import { JwtAuthGuard } from './authentification/jwt-auth.guard';
import { LocalAuthGuard } from './authentification/local-auth.guard';


@Controller()
export class AppController {
  constructor(private authService:AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
