let userNames: string[] = [];

if (userNames.length === 0) {
    console.log('We need to find some users!');
} else {
    userNames.forEach(username => {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}