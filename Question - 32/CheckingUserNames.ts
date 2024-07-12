let current_users: string[] = ['john', 'jane', 'doe', 'alex', 'emma'];

let new_users: string[] = ['jake', 'alex', 'sarah', 'JOHN', 'mike'];

let currentUsersLowercase: string[] = current_users.map(username => username.toLowerCase());

for (let newUsername of new_users) {
     let isNewUserAvailable: boolean = true;
     let newUsernameLowercase: string = newUsername.toLowerCase();

     if (currentUsersLowercase.includes(newUsernameLowercase)) {
          isNewUserAvailable = false;
     }

     if (isNewUserAvailable) {
          console.log(`Username '${newUsername}' is available.`);
     } else {
          console.log(`Username '${newUsername}' is already taken. Please choose a different username.`);
     }
}
