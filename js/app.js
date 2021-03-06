
$(document).ready(function() {
    console.log("Here");
    
    $('#submit').click(function(){
        var data= {};
        console.log(data);
        data['name']= $('#name').val();
        data['level']=$('#level').val();
        data['base'] =$('#base').val();
        data['leveltopup']= $('#leveltopup').val();
        data['experience']= $('#experience').val();
        data['bonus']=$('#bonus').val();
        data['period']= $('#period').val(); 
        
        var employee= new Employee(data);
        var salary = employee.calculateSalary();
        
        
        $("#salary").val(salary);
    });
});

//var employee = require('Employee.js');
         function Employee(data) {
            this.levelTopUp = data['leveltopup'];
            this.name = data['name'];
            this.level = data['level'];
            this.yearsOfExperience = data['experience'];
            this.bonusPerYear = data['bonus'];
            this.base = data['base'];

            switch (this.level.toLowerCase()) {
                case 'intern':
                    this.base = data['base'];
                    break;
                case 'associate':
                    this.base = (1 + (this.levelTopUp/100)) * this.base;
                    break;
                case 'manager':
                    this.base = Math.pow((1 + (this.levelTopUp/100)), 2) * this.base;
                    break;
                case 'executive':
                    this.base = Math.pow((1 + (this.levelTopUp/100)), 3) * this.base;
                    break;
                case 'director':
                    this.base = Math.pow((1 + (this.levelTopUp/100)), 4) * this.base;
                    break;
            };

            this.calculateSalary = function() {
                return Math.floor(this.base + (this.bonusPerYear * this.yearsOfExperience));          
            };

        };