import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationRepository: ReservationsRepository) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '123 ',
    });
  }

  findAll() {
    return this.reservationRepository.find({});
  }

  findOne(id: number) {
    return this.reservationRepository.findOne({ _id: id });
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.findOneAndUpdate(
      { _id: id },
      { $set: updateReservationDto },
    );
  }

  remove(id: number) {
    return this.reservationRepository.findOneAndDelete({ _id: id });
  }
}
