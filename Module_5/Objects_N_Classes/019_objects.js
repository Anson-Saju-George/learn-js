let DATA = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data =", DATA);
  }
}

let student1 = new User("Alice", "alice@example.com");
let student2 = new User("Bob", "bob@example.com");

let teacher1 = new User("Dr. Smith", "smith@example.com");

teacher1.viewData();
student1.viewData();
student2.viewData();

let admin1 = new User();
admin1.viewData();

admin1.name = "Admin User";
admin1.email = "admin@example.com";