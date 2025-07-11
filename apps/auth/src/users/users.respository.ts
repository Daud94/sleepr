import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { UserDocument } from './models/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRespository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UsersRespository.name);

  constructor(
    @InjectModel(UserDocument.name) readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
