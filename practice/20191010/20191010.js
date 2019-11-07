function Project(name, teamNumber, difficulty) {
     this.name = name,
     this.teamNumber = teamNumber,
     this.difficulty = difficulty,
     this.study = function() { this.difficulty = 'easy' }
     };

let project = new Project('KWeb', 100, 'hard');
project.teamNumber = 1;
project.study();
project.difficulty;