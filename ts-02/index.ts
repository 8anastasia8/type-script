class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
  
    _areas: string[];

    // type Lecture = {
    //   name: string,
    //   surname: string,
    //   position: number,
    //   company: string,
    //   experience: number,
    //   courses: number,
    //   contatacs: number,
    // };

    _lecturers: string | number [][]; // Name, surname, position, company, experience, courses, contacts

    
    get areas(): string[] {
      return this._areas;
    }
  
    get lecturers(): string | number[][] {
      return this._lecturers;
    }

    addArea(area: string): void{
      this._areas.push(area);
    }

    removeArea(area: string): void{
      this._areas.splice(this._areas.indexOf(area), 1)
    }
  }
  
  class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: string[];
    _name: string;
  
    constructor(name: string) {
      this._name = name;
    }

    get levels(): string[]{
      return this._levels;
    }

    get name(): string{
      return this._name;
    }

    addLevel(level: string): void{
      this._levels.push(level);
    }

    removeLevel(level: string): void{
      this._levels.splice(this._levels.indexOf(level), 1);
    }
  }
  
  class Level1 {
    // implement getters for fields and 'add/remove group' methods
  
    _groups: string[];
    _name: string;
    _description: string;
    
    get groups(): string[]{
      return this._groups;
    }

    get name(): string{
      return this._name;
    }

    get description(): string{
      return this._description;
    }
  
    constructor(name: string, description: string) {
      this._name = name;
      this._description = description;
    }

    addGroup(group: string):void{
      this._groups.push(group);
    }

    removeGroup(group: string): void{
      this._groups.splice(this._groups.indexOf(group), 1);
    }
  }
  
  class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods
  
    _area: string;
    _status: string;
    _students: any[]; // Modify the array so that it has a valid toSorted method*
    _directionName: string;
    _levelName: string;
    
    get area(): string{
      return this._area;
    }

    get status(): string{
      return this._status;
    }

    get students(): any[]{
      return this._students;
    }

    get directionName(): string{
      return this._directionName;
    }

    get levelName(): string{
      return this._levelName;
    }

    setStatus(value: string): void{
      this._status = value;
    }
  
    constructor(directionName: string, levelName: string) {
      this._directionName = directionName;
      this._levelName = levelName;
    }
  
    showPerformance() {
      const studentSarray = [...this._students];
      const sortedStudents = studentSarray.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
      return sortedStudents;
    }
  }
  
  class Student {
    // implement 'set grade' and 'set visit' methods
  
    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: object = {}; // workName: mark
    _visits: number[]; // lesson: present
  
    constructor(firstName: string, lastName: string, birthYear: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._birthYear = birthYear;
    }
  
    get fullName(): string {
      return `${this._lastName} ${this._firstName}`;
    }
  
    set fullName(value: string) {
      [this._lastName, this._firstName] = value.split(' ');
    }
  
    get age(): number {
      return new Date().getFullYear() - this._birthYear;
    }

    setGrade(subject: string, mark: number):void{
      this._grades[subject] = mark;
    }

    setVisit(subject: string, present: number):void{
      this._visits[subject] = present;
    }
  
    getPerformanceRating() {
      const gradeValues: number[] = Object.values(this._grades);
  
      if (!gradeValues.length) return 0;
  
      const averageGrade: number = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
      const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }