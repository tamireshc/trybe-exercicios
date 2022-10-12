import { Book } from './interfaces';

export default class WhishListTracker {
    private wishlist: Book[];
    constructor() {
        this.wishlist = [];
    }

    addToWishlist(book: Book): void {
        this.wishlist.push(book);
    }

    showWishlist(): void {
        console.log(this.wishlist);
    }
}

type Discipline = {
    name: string;
    grade: number;
    letterGrade?: string;
};

type School = {
    name: string;
    approvalGrade: number;
};

type Student = {
    name: string;
    disciplines: Discipline[];
    school: School; // Agora não é mais uma string
};

function setApproved(students: Student[]): void {
    students
        .map(percentageGradesIntoLetters)
        .filter(approvedStudents)
        .map(updateApprovalData);
}

const approvedStudents = ({ disciplines, school }: Student): boolean =>
    disciplines.every(({ grade }) => grade >= school.approvalGrade);

// Para testar:
const studentsExample = [
    {
        name: 'Lee',
        school: { name: 'Standard', approvalGrade: 0.7 },
        disciplines: [
            { name: 'matemática', grade: 0.8 },
            { name: 'história', grade: 0.9 },
        ],
    },
    {
        name: 'Albus',
        school: { name: 'Hogwarts', approvalGrade: 0.8 },
        disciplines: [
            { name: 'divination', grade: 0.8 },
            { name: 'potions', grade: 0.9 },
        ],
    },
];
approvedStudents(studentsExample);