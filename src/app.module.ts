import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.roles';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [AccessControlModule.forRoles(roles)],
  controllers: [AppController,AuthController],
  providers: [AppService,AuthService],
})
export class AppModule {}
