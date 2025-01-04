interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface premiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: premiumUser): void {
    console.log(`${user.id}`);
    console.log(`${user.name}`);
    console.log(`${user.email}`);
    if(user.membershipLevel) {
        console.log(`${user.membershipLevel}`);
    } else {
        console.log('basic');
        
    }
}

const user1: premiumUser = {
    id: 1,
    name: "josh",
    email: "josh@example.com",
    membershipLevel: "premium",
};

const user2: premiumUser = {
    id: 2,
    name: "sarah",
    email: "sarah@example.com",
};

printUserDetails(user1);
printUserDetails(user2);
