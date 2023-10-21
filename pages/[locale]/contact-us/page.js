import { ContactCard } from "../../../components/ContactCard";
import { whitney } from "../../../fonts";
import React from "react";

export default function contactUS() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  return (
    <div className={`px-10 bg-white pt-16 grid place-items-center text-[#8D8282]`}>
      {contactUsData.map((data, index) => (
        <div key={index} className="text-lg  text-center ">
          <h1
            className={`${index !== 0 ? "text-left" : ""} text-3xl text-black font-extralight mt-6`}
          >
            {data.contactHead}
          </h1>

          {data.mainContact && (
            <div className="grid place-items-center">
              <ContactCard contact={data.mainContact} />{" "}
            </div>
          )}
          <div className="grid lg:grid-cols-2 grid-col-12 gap-4">
            {data.contacts &&
              data.contacts.map((contact, index) => (
                <ContactCard
                  key={index}
                  contact={contact}
                  style={{
                    holder: "text-left my-5 font-extralight",
                  }}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const contactUsData = [
  {
    contactHead: "Contact Us",
    mainContact: {
      name: "SRI. HARSHAKUMAR CHIKKANARAGUND( I.F.S.)",
      designation: "Deputy Conservator of Forests & Director",
      location: [
        "Nagarahole Tiger Reserve",
        "Forest Campus, Old BM Road",
        "Hunsur",
      ],
      phone: "08222-252041",
      email: "dirnagarahole@aranya.gov.in",
    },
    contacts: [
      {
        name: "SRI. D S DAYANANDA",
        designation: "Assistant Conservator of Forests",
        location: ["Hunsur Wildlife Sub-Division", "Hunsur"],
        email: "acfhunsurwl@gmail.com",
      },
      {
        name: "SRI. GOPAL K.P.",
        designation: "Assistant Conservator of Forests",
        location: [
          "Nagarahole Wildlife Sub-Division",
          "Nagarahole",
          "Virajpet Taluk",
        ],
        email: "acfnagarahole@gmail.com",
      },
      {
        name: "SRI. RANGASWAMY K N",
        designation: "Assistant Conservator of Forests",
        location: [
          "Metikuppe Wildlife Sub-Division",
          "Antharasanthe",
          "H.D.Kote Taluk",
        ],
        email: "acfmetikuppe@gmail.com",
      },
      {
        name: "SRI. DILEEP KUMAR P C",
        designation: "Range Forest Officer",
        location: ["Anechowkur Wildlife Range", "Anechowkur", "Virajpet Taluk"],
        email: "rfoanechowkur@gmail.com",
      },
      {
        name: "SRI. RAJASHEKAR S",
        designation: "Range Forest Officer",
        location: ["Kallahalla Wildlife Range", "Kallahalla", "Virajpet Taluk"],
        email: "rfokallahalla@gmail.com",
      },

      {
        name: "SRI.MUHAMMED ZEESHAN",
        designation: "Range Forest Officer",
        location: ["Nagarahole Wildlife Range", "Nagarahole", "Virajpet Taluk"],
        email: "rfonagarahole@gmail.com",
      },
      {
        name: "SRI. RATHAN KUMAR M A",
        designation: "Range Forest Officer",
        location: ["Hunsur Wildlife Range", "Hunsur", "Hunsur Taluk"],
        email: "rfohunsurwl@gmail.com",
      },
      {
        name: "SRI. GANARAJ PATAGAR",
        designation: "Range Forest Officer",
        location: [
          "Veeranahosahally Wildlife Range",
          "Veeranahosahally",
          "Hunsur Taluk",
        ],
        email: "rfoveeranahosahally@gmail.com",
      },
      {
        name: "SRI. HARSHITH K N",
        designation: "Range Forest Officer",
        location: ["Metikuppe Wildlife Range", "Metikuppe", "H.D.Kote Taluk"],
        email: "rfometikuppe@gmail.com",
      },
      {
        name: "SRI. SIDDARAJU S.S.",
        designation: "Range Forest Officer",
        location: [
          "Antharasanthe Wildlife Range",
          "Antharasanthe",
          "H.D.Kote Taluk ",
        ],
        email: "rfoantharasanthe@gmail.com",
      },
      {
        name: "SRI. MADHU K.L.",
        designation: "Range Forest Officer",
        location: ["D.B.Kuppe Wildlife Range", "D.B.Kuppe", "H.D.Kote Taluk"],
        email: "dbkrfo@gmail.com",
      },
    ],
  },
  {
    contactHead: "Kakanakote Safari Point",
    contacts: [
      {
        name: "SRI. SIDDARAJU S.S.",
        designation: "Range Forest Officer",
      },

      {
        name: "SRI. SATISH",
        designation: "Dy. Range Forest Officer cum Surveyor",
        location: ["Ecotourism Antarasante Wildlife Range"],
        phone: "+91-9481995138",
      },
    ],
  },
  {
    contactHead: "Veeranahosahally Safari Point",
    contacts: [
      {
        name: "SRI. GANARAJ PATAGAR",
        designation: "Range Forest Officer",
      },
      {
        name: "SRI. CHANDRESH D.S.",
        designation: "Dy. Range Forest Officer cum Surveyor",
        location: ["Ecotourism Veeranahosahally Wildlife Range"],
        phone: "+91-9945419300",
      },
    ],
  },
  {
    contactHead: "Nanachi Safari Point & Nagarahole Room",
    contacts: [
      {
        name: "SRI. MUHAMMED ZEESHAN",
        designation: "Range Forest Officer",
      },
      {
        name: "SRI. NAVEEN ROWATH",
        designation: "Dy. Range Forest Officer cum Surveyor",
        location: ["Ecotourism Nagarahole Wildlife Range"],
        phone: "+91-8105096096",
      },
    ],
  },
];