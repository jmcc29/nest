import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            make: 'Toyota',
            model: 'Corolla',
            year: 2020,
            price: 20000
        },
        {
            id: 2,
            make: 'Honda',
            model: 'Civic',
            year: 2021,
            price: 22000
        },
        {
            id: 3,
            make: 'Ford',
            model: 'Focus',
            year: 2019,
            price: 18000
        }
    ];
    findAll() {
        return this.cars;
    }
    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        return car;
    }
}
