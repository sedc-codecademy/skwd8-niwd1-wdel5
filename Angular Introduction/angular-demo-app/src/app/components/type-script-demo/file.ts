export const myName = "Viktor";

export function importedFunction() :void {
    console.log("I am imported function!");
}

export class Car {
    name: string
    fuelType: string
    horsePower: number
    hasAc: boolean 
    owner?: User

    DriveInRellyMode(): void {
        console.log("relly mode on!")
    }
}

export class User {
    firstName: string
    age: number
}

export interface DriveCar {
    Drive(): void
    MilesLeft(): number
}
