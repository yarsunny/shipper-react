import React from "react";
import { render } from "@testing-library/react";
import DriverList from "./DriverList";


test("renders driver list", () => {
  const { getByTestId } = render(<DriverList drivers={mockDrivers} />);
  expect(getByTestId('driver-list')).toBeInTheDocument();
});

test("shows no drivers found when drivers count is 0", () => {
  const {getByText} = render(<DriverList drivers={[]}/>);
  expect(getByText(/No drivers found/i)).toBeInTheDocument();
})


const mockDrivers = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Yvonne",
      last: "Sager",
    },
    location: {
      street: {
        number: 7118,
        name: "Burgstraße",
      },
      city: "Bitterfeld-Wolfen",
      state: "Baden-Württemberg",
      country: "Germany",
      postcode: 47809,
      coordinates: {
        latitude: "-45.3161",
        longitude: "176.1172",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "yvonne.sager@example.com",
    login: {
      uuid: "fb0ab310-61df-467c-aa4c-dcb45bedee7d",
      username: "smallsnake788",
      password: "cygnusx1",
      salt: "gZ0yDWNO",
      md5: "e7907e1fbf7fe6acc3620bb336dafed7",
      sha1: "d9d038d79f60fa205b8653cdd9c84593cec5afa9",
      sha256:
        "e3aaffc8d0641e48b51d29212ebfdd3ec7611ab9c398f1e8872683510149c10b",
    },
    dob: {
      date: "1985-02-19T12:57:41.413Z",
      age: 36,
    },
    registered: {
      date: "2006-10-23T10:34:33.986Z",
      age: 15,
    },
    phone: "0798-9848689",
    cell: "0176-1410776",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Carl",
      last: "Olsen",
    },
    location: {
      street: {
        number: 3873,
        name: "Fyrrevænget",
      },
      city: "København N",
      state: "Midtjylland",
      country: "Denmark",
      postcode: 79166,
      coordinates: {
        latitude: "25.1514",
        longitude: "111.2156",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "carl.olsen@example.com",
    login: {
      uuid: "ea2620cc-a422-4a96-b67c-c236eca7237a",
      username: "bluekoala682",
      password: "blaster",
      salt: "Vipy4VNE",
      md5: "821cbbe88ea0fc8a605008dee4bda03d",
      sha1: "693cfcd1b7d93cdc39a2de7e966b66bed9d738d8",
      sha256:
        "8f6d2b13864f929108001f62990cfe78396c326dc8912519282c7345e9f0c029",
    },
    dob: {
      date: "1958-10-02T16:33:17.917Z",
      age: 63,
    },
    registered: {
      date: "2004-12-25T07:30:45.643Z",
      age: 17,
    },
    phone: "61950592",
    cell: "08696161",
    id: {
      name: "CPR",
      value: "021058-8848",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Bella",
      last: "Dixon",
    },
    location: {
      street: {
        number: 3009,
        name: "W Pecan St",
      },
      city: "Columbus",
      state: "Nevada",
      country: "United States",
      postcode: 13363,
      coordinates: {
        latitude: "-43.0765",
        longitude: "-123.1623",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "bella.dixon@example.com",
    login: {
      uuid: "9a2e909e-30eb-4f91-92ed-7ef913f14e38",
      username: "beautifulfrog654",
      password: "vauxhall",
      salt: "SLk8LlEA",
      md5: "0e71d7c9db93ce715e321e163ff83c0e",
      sha1: "fe872145c6782b0c48f0389812002de18e9bbd6b",
      sha256:
        "ac3030875377f338040a9da8ca42faa905410fbc5fa4d37b1ef89b1dba5e46c2",
    },
    dob: {
      date: "1992-06-01T07:47:42.707Z",
      age: 29,
    },
    registered: {
      date: "2005-07-21T08:55:47.487Z",
      age: 16,
    },
    phone: "(598)-290-8784",
    cell: "(833)-944-9770",
    id: {
      name: "SSN",
      value: "890-66-6446",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Julie",
      last: "Louis",
    },
    location: {
      street: {
        number: 57,
        name: "Rue Abel",
      },
      city: "Poitiers",
      state: "Var",
      country: "France",
      postcode: 11908,
      coordinates: {
        latitude: "-83.2738",
        longitude: "81.2519",
      },
      timezone: {
        offset: "+8:00",
        description: "Beijing, Perth, Singapore, Hong Kong",
      },
    },
    email: "julie.louis@example.com",
    login: {
      uuid: "92f9276f-159e-4338-bd4e-1dcd7e55e66f",
      username: "happyelephant183",
      password: "booger",
      salt: "1TPQpZPP",
      md5: "78dd81a1597f19de661db40d8fd5d2ab",
      sha1: "0f9c2bf44f8c1cc06e08acc53caf778e35b86a01",
      sha256:
        "62c2bbb6f81031bf038d009003154e0fc9ac393f9f8cbf52ae569a1703bbcdfc",
    },
    dob: {
      date: "1977-01-27T04:19:49.065Z",
      age: 44,
    },
    registered: {
      date: "2017-03-22T08:47:28.056Z",
      age: 4,
    },
    phone: "01-56-26-69-27",
    cell: "06-43-65-94-29",
    id: {
      name: "INSEE",
      value: "2NNaN49345853 52",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Regine",
      last: "Birkedal",
    },
    location: {
      street: {
        number: 323,
        name: "Tunveien",
      },
      city: "Hjukse",
      state: "Hordaland",
      country: "Norway",
      postcode: "4663",
      coordinates: {
        latitude: "48.2778",
        longitude: "105.4038",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "regine.birkedal@example.com",
    login: {
      uuid: "1df1aaa7-6a8d-4796-905b-e0dbab4daa26",
      username: "brownswan747",
      password: "subzero",
      salt: "c5Pqu5j9",
      md5: "ba3df43f3adcda6edc69295da135cc04",
      sha1: "5c1af3310a3283f13c246de437c78f9c964422ed",
      sha256:
        "0245c978eb03e0fa32b95baccb1ffb2aedc7cd147255ba1a9556c43012323078",
    },
    dob: {
      date: "1995-03-15T09:04:48.866Z",
      age: 26,
    },
    registered: {
      date: "2002-06-04T18:23:54.982Z",
      age: 19,
    },
    phone: "24935092",
    cell: "49946655",
    id: {
      name: "FN",
      value: "15039525663",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    },
    nat: "NO",
  },
];
