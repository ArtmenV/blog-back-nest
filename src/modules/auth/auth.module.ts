import { AuthController } from './controller/auth.controller';
import { LocalStrategy } from './service/local.strategy';
import { AuthService } from './service/auth.service';
import { AdminModule } from './../admin/app.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AdminModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
