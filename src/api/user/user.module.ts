import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER_SERVICE } from '@/constants/instances.constants';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '@/database/database.module';

const Services = [
  {
    provide: USER_SERVICE,
    useClass: UserService,
  },
];

@Module({
  controllers: [UserController],
  providers: [...Services],
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: 'secret',
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),
  ],
  exports: [...Services],
})
export class UserModule {}