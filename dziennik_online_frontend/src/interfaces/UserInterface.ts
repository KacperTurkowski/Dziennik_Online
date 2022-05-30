export interface UserInterface {
    guid: string,
    firstName: string,
    lastName: string,
    role: Role
}

export enum Role {
    Teacher = 'Teacher',
    Student = 'Student'
}