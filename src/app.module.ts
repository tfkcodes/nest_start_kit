import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfigAsyc } from './config/typeorm.config';
import { ServiceService } from './auth/service/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
    TypeOrmModule.forRootAsync(typeormConfigAsyc),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ServiceService],
})
export class AppModule {}
