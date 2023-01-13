import { CommissionInterface } from "./commission-interface"

export interface CourseInterface {
    id: number,
    name: string,
    description: string,
    students: number,
    totalHours: number,
    image: string,
    commissions: CommissionInterface[];
}
