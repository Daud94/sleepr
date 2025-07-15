import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, UserDocument } from '@app/common';
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
