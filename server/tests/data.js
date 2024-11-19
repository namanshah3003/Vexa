import mongoose from "mongoose";

/*
    0: Naman Shah - admin,
    1: Mittal Shah - project manager,
    2: Raju Shah - developer,
    3: Ansh Patel - submitter
*/

const _ids = [];

for (let x = 0; x < 4; x++) {

    _ids.push(new mongoose.Types.ObjectId().toString());
}

export const sampleUsers = [
    {
        _id: _ids[0],
        firstName: "Naman",
        lastName: "Shah",
        email: "naman.shah@vexa.com",
        password: "random"
    },
    {
        _id: _ids[1],
        firstName: "Mittal",
        lastName: "Shah",
        email: "mittal.shah@vexa.com",
        password: "random"
    },
    {
        _id: _ids[2],
        firstName: "Raju",
        lastName: "Shah",
        email: "raju.shah@vexa.com",
        password: "random"
    },
    {
        _id: _ids[3],
        firstName: "Ansh",
        lastName: "Patel",
        email: "ansh.patel@vexa.com",
        password: "random"
    }
];


export const sampleRoles = [
    {
        _id: new mongoose.Types.ObjectId().toString(),
        name: "admin",
        permissions: ["PERMISSION_ADD_TICKET", "PERMISSION_ADD_PROJECT", "PERMISSION_ADD_MEMBER_TO_PROJECT", "PERMISSION_ADD_COMMENT", "PERMISSION_MANAGE_ROLE", "PERMISSION_UPDATE_USER_PROFILE"]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        name: "project manager",
        permissions: ["PERMISSION_ADD_TICKET", "PERMISSION_ADD_PROJECT", "PERMISSION_ADD_MEMBER_TO_PROJECT", "PERMISSION_ADD_COMMENT", "PERMISSION_MANAGE_ROLE"]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        name: "developer",
        permissions: ["PERMISSION_ADD_TICKET", "PERMISSION_ADD_PROJECT", "PERMISSION_ADD_MEMBER_TO_PROJECT", "PERMISSION_ADD_COMMENT"]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        name: "submitter",
        permissions: ["PERMISSION_ADD_TICKET", "PERMISSION_ADD_COMMENT"]
    },
];

/*
    Project 1: Naman Shah
    Project 2: Naman Shah
    Project 3: Mittal Shah
    Project 4: Mittal Shah
    Project 5: Mittal Shah
    Project 6: Raju Shah
*/

export const projectPayload = [
    {
        _id: new mongoose.Types.ObjectId().toString(),
        title: "Sample project #1",
        description: "This is a sample project #1 description",
        authorId: _ids[0]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        title: "Sample project #2",
        description: "This is a sample project #2 description",
        authorId: _ids[0]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        title: "Sample project #3",
        description: "This is a sample project #3 description",
        authorId: _ids[1]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        title: "Sample project #4",
        description: "This is a sample project #3 description",
        authorId: _ids[1]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        title: "Sample project #5",
        description: "This is a sample project #3 description",
        authorId: _ids[1]
    },
    {
        _id: new mongoose.Types.ObjectId().toString(),
        title: "Sample project #6",
        description: "This is a sample project #3 description",
        authorId: _ids[2]
    },
];