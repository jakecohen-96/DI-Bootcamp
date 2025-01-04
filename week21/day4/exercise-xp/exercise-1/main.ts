class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(
        name: string,
        salary: number,
        position: string,
        department: string,
    ){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}