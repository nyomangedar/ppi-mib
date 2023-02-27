import CardProfile from "./CardProfile";
import { importMany } from "../../features/functionTools/importMany";

const orgMemberImgs = importMany(
    require.context("../../image/orgMemberImg/", false, /\.(png|jpe?g|svg)$/)
);

const coreTeam = [
    {
        Nama: "Aldian Vounthougerenth S.",
        Posisi: "President",
        Picture: orgMemberImgs["coreTeam_1.png"],
    },
    {
        Nama: "Lukman Septaekwara",
        Posisi: "Vice President (External Affairs)",
        Picture: orgMemberImgs["coreTeam_2.png"],
    },
    {
        Nama: "Qinthara Ulya Yassifa",
        Posisi: "Vice Presiednt (Internal Affairs)",
        Picture: orgMemberImgs["coreTeam_3.png"],
    },
    {
        Nama: "Jusrida Ramadhanti Fadhila",
        Posisi: "General Secretary",
        Picture: orgMemberImgs["coreTeam_4.png"],
    },
    {
        Nama: "Babtista Varani Anggraeni",
        Posisi: "General Treasurer",
        Picture: orgMemberImgs["coreTeam_5.png"],
    },
];

const festivalIndonesia = [
    {
        Nama: "Mardiansah Subhani",
        Posisi: "Head of Festival Indonesia",
        Picture: orgMemberImgs["festIndonesia_1.png"],
    },
];

const talentSportsHobby = [
    {
        Nama: "Sandi Fajar Pratama",
        Posisi: "Head of Talent, Sports, and Hobby Division",
        Picture: orgMemberImgs["tsh_1.png"],
    },
    {
        Nama: "Apta Sampoerna",
        Posisi: "Head of Logistic and Venue Subdivision",
        Picture: orgMemberImgs["tsh_2.png"],
    },
    {
        Nama: "Muhammad Humamvidi",
        Posisi: "Head of Sports Event and Liaison Subdivision",
        Picture: orgMemberImgs["tsh_3.png"],
    },
];

const hwfk = [
    {
        Nama: "Arifah Rahmi",
        Posisi: "Head of Health, Wellbeing, Family and Kids Division",
        Picture: orgMemberImgs["hwfk_1.png"],
    },
    {
        Nama: "Nurul Melati Ulfa",
        Posisi: "Head of Indonesian Society Engagement Subdivision",
        Picture: orgMemberImgs["hwfk_2.png"],
    },
];

const entrepreunership = [
    {
        Nama: "Micha Paramitha",
        Posisi: "Head of Entrepreneurship Division",
        Picture: orgMemberImgs["entre_1.png"],
    },
    {
        Nama: "Matthew Brian Tahir",
        Posisi: "Head of Business Planning and Strategy Subdivision",
        Picture: orgMemberImgs["entre_2.png"],
    },
    {
        Nama: "Abdul Muthi",
        Posisi: "Head of Marketing and Sales Subdivision",
        Picture: orgMemberImgs["entre_3.png"],
    },
    {
        Nama: "Fedra Eirene",
        Posisi: "Head of Fundraising Subdivision",
        Picture: orgMemberImgs["entre_4.png"],
    },
];

const socmed = [
    {
        Nama: "Keysha Aira Rizki Riyadi",
        Posisi: "Head of Social Media and Public Relations Division",
        Picture: orgMemberImgs["socmed_1.png"],
    },
    {
        Nama: "Alma Mahira Lazuardani",
        Posisi: "Head of Social Media Subdivision",
        Picture: orgMemberImgs["socmed_2.png"],
    },
    {
        Nama: "Satriyo Priyo Adi",
        Posisi: "Head of Public Relations Subdivision",
        Picture: orgMemberImgs["socmed_3.png"],
    },
    {
        Nama: "Dwikavindra Haryo Radithya",
        Posisi: "Head of Organisation Internal Information Subdivision",
        Picture: orgMemberImgs["socmed_4.png"],
    },
    {
        Nama: "Faris Rineksa Palagan",
        Posisi: "Head of Social Media Marketing Subdivision",
        Picture: orgMemberImgs["socmed_5.png"],
    },
];

const profDev = [
    {
        Nama: "Fildzah Cindra Yunita",
        Posisi: "Head of Professional Development and Institutional Affairs Division",
        Picture: orgMemberImgs["profDev_1.png"],
    },
    {
        Nama: "Muhammad Ega",
        Posisi: "Head of Career Development Event Subdivision",
        Picture: orgMemberImgs["profDev_2.png"],
    },
    {
        Nama: "M. Yusuf Dimas Al-Ma’ruf",
        Posisi: "Head of Institutional Affairs Subdivision",
        Picture: orgMemberImgs["profDev_3.png"],
    },
];

const orgDev = [
    {
        Nama: "Fakhruddin Wirakusuma",
        Posisi: "Head of Organisational Development and Alumni Engagement Division",
        Picture: orgMemberImgs["orgDev_1.png"],
    },
    {
        Nama: "Khasan Mustofa",
        Posisi: "Head of Alumni Engagement Subdivision",
        Picture: orgMemberImgs["orgDev_2.png"],
    },
    {
        Nama: "Andrea Nabilla Supit",
        Posisi: "Head of Organisational Development Strategy Subdivision",
        Picture: orgMemberImgs["orgDev_3.png"],
    },
];

const academic = [
    {
        Nama: "Anisa Nurfirda Ramdhani",
        Posisi: "Head of Academic Support, Data, and Information Division",
        Picture: orgMemberImgs["academic_1.png"],
    },
    {
        Nama: "Kiara Wsuesti Safi",
        Posisi: "Secretary of Student Advisory Board",
        Picture: orgMemberImgs["academic_2.png"],
    },
    {
        Nama: "Adityo Julian Tri W. M.",
        Posisi: "Head of Apps Development Subdivision",
        Picture: orgMemberImgs["academic_3.png"],
    },
    {
        Nama: "I Nyoman Gde Gedar M. P.",
        Posisi: "Head of Data and Information Subdivision",
        Picture: orgMemberImgs["academic_4.png"],
    },
];

const generateCards = (members, name) =>
    members.map((member, index) => (
        <CardProfile
            team={name}
            index={index}
            nama={member.Nama}
            posisi={member.Posisi}
            picture={member.Picture}
        />
    ));

export const coreTeamCards = generateCards(coreTeam);
export const festivalIndonesiaCards = generateCards(festivalIndonesia);
export const talentSportsHobbyCards = generateCards(talentSportsHobby);
export const hwfkCards = generateCards(hwfk);
export const entrepreunershipCards = generateCards(entrepreunership);
export const socmedCards = generateCards(socmed);
export const profDevCards = generateCards(profDev);
export const orgDevCards = generateCards(orgDev);
export const academicCards = generateCards(academic);

// 1. Talent Sports and Hobby -> Talent, Sports, and Hobby
// 2. Head of Sports Even and Liaison -> Head of Sports Event and Liaison Subdivision
// 3. Health Wellbeing Family and Kids -> Health, Wellbeing, Family and Kids
// 4. Head of Society Engagement -> Head of Indonesian Society Engagement Subdivision
// 5. Entrepreunership -> Entrepreneurship
// 6. Business Planning and Strategy -> Head Business Planning and Strategy Subdivision
// 7. Professional Development and Enggagement -> Professional Development and Institutional Affairs
// 8. Organisation Development and Engagement -> Organisational Development and Alumni Engagement
// 9. Khasan salah jabatan -> Alumni Engagement Subdivision
// 10. Wira salah jabatan -> Head of Organisational Development and Alumni Engagement
// 11. Kiara -> gausah ada subdivision nya
// 12. Smua anggota team tambahin subdivision kecuali yg aku mention diatas
