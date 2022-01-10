function Intern (name, email, id, school) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.school = school;
  };
  
  Intern.prototype.getName = function() {
    return this.name;
  };
  
  Intern.prototype.getEmail = function() {
    return this.email;
  }
  
  Intern.prototype.getId = function() {
    return this.id;
  }
  
  Intern.prototype.getSchool = function() {
    return this.school;
  }
  
  Intern.prototype.getRole = function() {
    return "Intern";
  }
  
  module.exports = Intern;