import { Get, UseGuards } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles-auth.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { BanUserDto } from './dto/ban-user.dto';

import { CreateUserDto } from './dto/create-user.dto';
import { GiveRoleDto } from './dto/give-role.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/editUser')
  editUser(@Body() userDto: CreateUserDto) {
    return this.userService.editUser(userDto);
  }

  @Roles('admin')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/getAll')
  getAll() {
    return this.userService.getAllUsers();
  }

  @Roles('admin')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('/giveRole')
  giveRole(@Body() dto: GiveRoleDto) {
    return this.userService.giveRole(dto);
  }

  @Roles('admin')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('/banUser')
  banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
