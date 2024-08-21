type Officer = {
    Name: string;
    Title: string;
    Uniqname: string;
    BBA: string;
};

type Club = {
    clubName: string;
    profilePNG: string;
    profilePic: string;
    username: string;
    password: string;
    officers: Officer[];
};

export const clubsData: Club[] = [
    {
        clubName: "Niki's Club",
        profilePNG: "...",
        profilePic: "...",
        username: "Niki.Club",
        password: "rcpcNC130",
        officers: [
            {
                Name: "Niki Murthy",
                Title: "President",
                Uniqname: "nikivm",
                BBA: "yes"
            },
            {
                Name: "Alex Wang",
                Title: "VP DEI",
                Uniqname: "alxswang",
                BBA: "yes"
            },
            {
                Name: "Niki Murthy",
                Title: "Room Res Officer",
                Uniqname: "nikivm",
                BBA: "yes"
            }
        ]
    },
    {
        clubName: "Another Club",
        profilePNG: "...",
        profilePic: "...",
        username: "Club.Two",
        password: "rcpcPPB217",
        officers: [
            {
                Name: "Coryne Howard",
                Title: "President",
                Uniqname: "howardch",
                BBA: "no"
            },
            {
                Name: "Maggie He",
                Title: "VP DEI",
                Uniqname: "magghe",
                BBA: "yes"
            },
            {
                Name: "Priya Rao",
                Title: "Room Res Officer",
                Uniqname: "priyarao",
                BBA: "no"
            }
        ]
    }
];
