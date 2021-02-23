// defined employee class
class Employee {
    constructor(name,email, id, role){
        this.name = name
        this.email = email
        this.id = id
        this.role = role

    }

    getName(){
        return this.name
    }
    
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getRole(){
        return this.role
    }
    
    
}
module.exports = Employee;