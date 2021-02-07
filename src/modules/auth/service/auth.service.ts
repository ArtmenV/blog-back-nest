import { Injectable } from '@nestjs/common';
import { Admin } from 'src/modules/admin/model/admin';
import { AdminRepository } from './../../admin/service/admin.repository';

@Injectable()
export class AuthService {
  constructor(private AdminRepository: AdminRepository) {

  }

  async validateAdmin(login: string, pass: string): Promise<Admin | null> {
    const admin: Admin = await this.AdminRepository.findByLogin(login);

    if (admin && admin.password === pass) {
      const {password, ...secureAdmin} = admin
      return secureAdmin;
    }

    return null
  }
}