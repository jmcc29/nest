import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = ['Toyota', 'Honda', 'Ford'];
    
    @Get()
    getAllCars() {
        return this.cars;
    }
    
    @Get(':id')
    getCarById(@Param('id') id: string) {
        console.log(`Fetching car with ID: ${id}`);
        return this.cars[id];
    }
}
