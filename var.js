const accountId = 1456243
let accountEmail = "pushpa@gmail.com"
var accountPassword = "12342"
accountCity = "Delhi"
let accontState;


// accountId = 2/ NOT ALLOWED

accountEmail ="abcd@gmail.com"
accountPassword ="121212"
accountCity = "GKP"

console.log(accountId);

/*
Prefer not to use for
Beacuse of issue in block scope and function scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accontState])
