import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from './permission.entity';
import { RolePermission } from './role-permission.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
    @InjectRepository(RolePermission)
    private rolePermissionRepository: Repository<RolePermission>,
  ) {}

  async createRole(name: string, description?: string): Promise<Role> {
    const role = this.roleRepository.create({ name, description });
    return this.roleRepository.save(role);
  }

  async createPermission(name: string): Promise<Permission> {
    const permission = this.permissionRepository.create({ name });
    return this.permissionRepository.save(permission);
  }

  async assignPermissionToRole(roleId: number, permissionId: number): Promise<void> {
    const role = await this.roleRepository.findOne(roleId);
    const permission = await this.permissionRepository.findOne(permissionId);
    
    if (role && permission) {
      const rolePermission = new RolePermission();
      rolePermission.role = role;
      rolePermission.permission = permission;
      await this.rolePermissionRepository.save(rolePermission);
    }
  }
}
