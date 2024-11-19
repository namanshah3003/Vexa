import * as Permissions from "./permissions.js";

export const DBUsers = [
    {
        firstName: "Naman",
        lastName: "Shah",
        email: "naman.shah@vexa.com",
        password: "password"
    },
    {
        firstName: "Mittal",
        lastName: "Shah",
        email: "mittal.shah@vexa.com",
        password: "password"
    },
    {
        firstName: "Raju",
        lastName: "Shah",
        email: "raju.shah@vexa.com",
        password: "password"
    },
    {
        firstName: "Ansh",
        lastName: "Patel",
        email: "ansh.patel@vexa.com",
        password: "password"
    }
];

export const DBRole = [
    {
        name: "Admin",
        permissions: [
            Permissions.ADD_COMMENT,
            Permissions.ADD_MEMBER_TO_PROJECT,
            Permissions.ADD_PROJECT,
            Permissions.ADD_TICKET,
            Permissions.MANAGE_ROLE,
            Permissions.UPDATE_USER_PROFILE,
        ]
    },
    {
        name: "Developer",
        permissions: [
            Permissions.ADD_COMMENT,
            Permissions.ADD_PROJECT,
            Permissions.ADD_TICKET,
        ]
    },
    {
        name: "Project Manager",
        permissions: [
            Permissions.ADD_COMMENT,
            Permissions.ADD_MEMBER_TO_PROJECT,
            Permissions.ADD_PROJECT,
            Permissions.ADD_TICKET,
            Permissions.MANAGE_ROLE,
        ]
    },
    {
        name: "Submitter",
        permissions: [
            Permissions.ADD_COMMENT,
            Permissions.ADD_TICKET
        ]
    },
];

export const DBTicketType = [
    {
        name: "Feature",
        iconName: "BsPlusLg",
        colour: "#4ab577"
    },
    {
        name: "Bug",
        iconName: "BsBugFill",
        colour: "#e25555"
    },
    {
        name: "Documentation",
        iconName: "BsFileEarmarkText",
        colour: "#ED8936",
    },
    {
        name: "Support",
        iconName: "BsQuestion",
        colour: "#4299E1",
    }
];