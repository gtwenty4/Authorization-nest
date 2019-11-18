import { Get, Controller, UseGuards } from '@nestjs/common';
import { UserRoles, UseRoles, ACGuard } from 'nest-access-control';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AppRoles } from './app.roles';

@Controller('Auth')
export class AuthController {
  constructor(private readonly authService:AuthService) {}

  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: 'video',
    action: 'read',
    possession: 'any',
  })
  @Get()
  getAuth(@UserRoles() userRoles: any) {
    return this.authService.getAuth(userRoles);
  }
}
