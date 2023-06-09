import { api } from "../api/api";

export const teamList = [
    {
        name: "Jelly Bob",
        fund: "10,000,000",
    },
    {
        name: "Blizz",
        fund: "9,900,000",
    },
    {
        name: "Kripz",
        fund: "0",
    },
    {
        name: "Zeri",
        fund: "7,960,000",
    },
    {
        name: "Profries",
        fund: "0",
    },
    {
        name: "Haly Bake",
        fund: "6,905,000",
    },
    {
        name: "Fragante",
        fund: "0",
    },
    {
        name: "K'otton",
        fund: "3,005,000",
    },
    {
        name: "Day One",
        fund: "1,900,000",
    },
    {
        name: "Locomto",
        fund: "1,900,000",
    },
    {
        name: "Let's Plant",
        fund: "1,200,000",
    },
    {
        name: "GottaGO",
        fund: "1,105,000",
    },
    {
        name: "Harn",
        fund: "850,000",
    },
    {
        name: "Athena",
        fund: "850,000",
    },
    {
        name: "Tagme",
        fund: "850,000",
    },
    {
        name: "R-ROI",
        fund: "0",
    },
    {
        name: "Indicat",
        fund: "0",
    },
    {
        name: "Yeobo",
        fund: "10,000",
    },
    {
        name: "Frescas",
        fund: "0",
    },
    {
        name: "Giadina",
        fund: "100,000",
    },
    {
        name: "CoGrow",
        fund: "50,000",
    },
    {
        name: "Wastic",
        fund: "9,900,000",
    },
    {
        name: "Fizzle",
        fund: "0",
    },
];
export const data = async (setResponse, id) => {
    await fetch(`${api}/getAllTeam`, {
        method: "POST",
        headers: {
            accepted: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
    }).then((data) => data.json().then((result) => setResponse(result)));
};

// export const data = async (setTeamList) => {
//   // console.log(judgeID)
//   // console.log(JSON.stringify({ id: judgeID }))
//   await fetch(`${api}/getAllTeam`, {
//     methods: 'POST',
//     headers: {
//       accepted: "application/json",
//       "Content-Type": "application/json",
//     },
//     // body: JSON.stringify({ ids: "64209494be26b0acaa41c72c"})
//   })
//     .then(data => data.json()

//     .then(result => setTeamList(result)))

//     .catch(error => error);

//   // setTeamList(result.team);
// }
