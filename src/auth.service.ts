import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    private videos: string[] = ['Funny Cats', 'Ninja Dogs'];
    getAuth(roles: string[]) {
      return {
        videos: this.videos,
        userRoles: roles
      }
    }
}
