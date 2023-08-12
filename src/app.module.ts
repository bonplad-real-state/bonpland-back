import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [UserModule, PropertyModule, ContactModule],
})
export class AppModule {}
