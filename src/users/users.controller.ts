import { Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles-auth.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { BanUserDto } from './dto/ban-user.dto';

import { CreateUserDto } from './dto/create-user.dto';
import { GiveRoleDto } from './dto/give-role.dto';
import { UpdReqStatusDto } from './dto/upd-req-status.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get('/getConfirmedUsers')
  getConfirmedUsers() {
    return this.userService.getConfirmedUsers();
  }

  @Post('')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  editUser(@Param('id') id: number, @Body() userDto: CreateUserDto) {
    return this.userService.editUser(userDto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/updReqStatus')
  updateRequestStatus(@Body() dto: UpdReqStatusDto) {
    return this.userService.updateRequestStatus(dto);
  }

  // @Roles('admin')
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)

  @Get('/requests')
  getUsersByRequest() {
    return this.userService.getFiltredUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: number) {
    this.userService.deleteUserById(id);
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
