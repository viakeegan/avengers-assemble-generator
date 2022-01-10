function Manager (name, email, id, officeNumber) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNumber = officeNumber;
  };
  
  Manager.prototype.getName = function() {
    return this.name;
  };
  
  Manager.prototype.getEmail = function() {
    return this.email;
  }
  
  Manager.prototype.getId = function() {
    return this.id;
  }
  
  Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
  }
  
  Manager.prototype.getRole = function() {
    return "Manager";
  }
  
  module.exports = Manager;