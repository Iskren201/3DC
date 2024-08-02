/*
import { Injectable } from '@nestjs/common';
import { JwtStrategy as PassportJwtStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt.payload';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportJwtStrategy {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findOneById(payload.userId);
    return { ...user, role: payload.role }; 
  }
}
*/

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt.payload'; // Ensure the path is correct
import { UserService } from '../user/user.service'; // Ensure the path is correct

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findOneById(payload.userId);
    return { ...user, role: payload.role }; // Ensure role is included
  }
}

//Test
