function Engineer (name, email, id, github) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.github = github;
  };
  
  Engineer.prototype.getName = function() {
    return this.name;
  };
  
  Engineer.prototype.getEmail = function() {
    return this.email;
  }
  
  Engineer.prototype.getId = function() {
    return this.id;
  }
  
  Engineer.prototype.getGithub = function() {
    return this.github;
  }
  
  Engineer.prototype.getRole = function() {
    return "Engineer";
  }

  module.exports = Engineer;