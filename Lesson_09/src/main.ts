/////////////////////////////////////////////////////////////
                ///// Utility Types /////
/////////////////////////////////////////////////////////////

/////////////// Part 01 (Partial) /////////////////

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assignment, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});


/////////////// Part 02 (Required and Readonly) /////////////////

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// assignVerified.grade = 88
// Hier wird versucht bei einem "Readonly" den "grade-Wert" zu verändern,was zu einem Bug führt.

recordAssignment({ ...assignGraded, verified: true})

/////////////// Part 03 (Record) /////////////////

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
} 

type Students = "Sarah" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sarah: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sarah: { assign1: 85, assign2: 93},
    Kelly: { assign1: 76, assign2: 15},
}

/////////////// Part 04 (Pick and Omit) /////////////////

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}

/////////////// Part 05 (Exclude and Extract) /////////////////
type adjustedGrade = Exclude<LetterGrades, "U">
// Es wird alles ausser "U" angezeigt.
type highGrades = Extract<LetterGrades, "A" | "B">
// Es wird alles was "A" und "B" beinhaltet angezeigt


/////////////// Part 06 (Nonnullable) /////////////////

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

//  
/////////////// Part 07 (ReturnType) /////////////////

// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

 
/////////////// Part 08 (Parameters) /////////////////
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)


/////////////// Part 09 (Awaited) /////////////////
// Awaited - helps us with the ReturnType of a Promise 
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

