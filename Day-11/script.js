//User Role

const roleBasedAcess = function (name, rule) {
  switch (rule) {
    case "admin":
      return `${name} has All acceess`;
      break;
    case "admin":
      return `${name} has Acceess to review games.`;
      break;
    case "user":
      return `${name} has Acceess to play games.`;
      break;
    default:
      break;
  }
};

console.log(roleBasedAcess("Muhammad Farooq", "user"));

