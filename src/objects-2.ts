// Enum for worker roles
enum Role {
    Developer = "Developer",
    Designer = "Designer",
    Manager = "Manager",
}

// Base interface for a Client
interface Client {
    name: string;
    phone: string;
}

// Worker interface extends Client
interface Worker extends Client {
    age: number;
    role: Role;           // enum
    department?: string;  // optional property
    about(): string;      // method
}

// Tuple for project assignment
type ProjectAssignment = [projectName: string, durationWeeks: number];

// Example Worker object
const worker1: Worker = {
    name: "Chiemezie Uchenwoke",
    phone: "+234559",
    age: 34,
    role: Role.Developer,
    department: "Engineering",
    about(): string {
        // 'this' refers to worker1 object
        return `${this.name}, age ${this.age}, works as a ${this.role}` +
               (this.department ? ` in ${this.department} department.` : ".");
    },
};

console.log(worker1.about());

// Assigning projects with a tuple
const project1: ProjectAssignment = ["Stockify App", 12];
const project2: ProjectAssignment = ["CodeFoundations", 8];

console.log(`${worker1.name} is assigned to ${project1[0]} for ${project1[1]} weeks.`);
console.log(`${worker1.name} is assigned to ${project2[0]} for ${project2[1]} weeks.`);
