import { Student } from "./student-interface"

export interface CommissionInterface {
    id: number,
    studentsIds: number[],
    teacher: string,
    courseId: number
}
