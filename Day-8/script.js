let user = "admin";

switch (user) {
  case "admin":
    return console.log("You have full access.");
    break;
  case "subAdmin":
    return console.log("You have only access to CRUD.");
    break;
  case "user":
    return console.log("You have access to consume content.");
    break;
  default:
    return console.log("in trial");
    break;
}
