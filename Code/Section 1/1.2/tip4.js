// export class Student {
//     constructor(studentAcademicId, studentFirstName, studentLastName, studentUniversity) {
//         this.studentAcademicId = studentAcademicId;
//         this.studentFirstName = studentFirstName;
//         this.studentLastName = studentLastName;
//         this.studentUniversity = studentUniversity;
//     }
// }

export class Student {
    constructor(academicId, firstName, lastName, university) {
        this.academicId = academicId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.university = university;
    }
}

// var order = {
//     orderId: 14,
//     orderName: 'My Order',
//     orderProduct: { },
//     orderCustomer: {
//         customerFirstName: 'John',
//         customerLastName: 'Smith'
//     }
// }

var order = {
    id: 14,
    name: 'My Order',
    product: { },
    customer: {
        firstName: 'John',
        lastName: 'Smith'
    }
}