import { PRIVATE, PUBLIC, GOING, INTERESTED } from '@/assets/constants'

export default [
  {
    pub: {
      name: "DJ Khaled @ Celebrities",
      time: "19:00",
      date: "12/21/2019",
      venue: "Celebrities Nightclub",
      price: "$15",
      admin: "Killy Bong"
    },
    priv: {
      id: 0,
      adminId: 1,
      dateCreated: "07/29/2019",
      lastUpdate: "07/29/2019",
      type: PUBLIC
    },
    attendance: {
      membersAccess: {
        list: [
          { id: 1, firstName: "Clarence", status:"", invited: true},
          { id: 23, firstName: "Victor", status: INTERESTED, invited: false},
          { id: 215, firstName: "Ayat", status: "", invited: true},
          { id: 23, firstName: "Donna", status: GOING, invited: false},
          { id: 770, firstName: "Ayesha", status: GOING, invited: false},
          { id: 786, firstName: "Boyd", status: "", invited: true},
          { id: 167, firstName: "Connor", status: INTERESTED, invited: false},
          { id: 3465, firstName: "Fahim", status: GOING, invited: false},
          { id: 462, firstName: "Jayden", status: INTERESTED, invited: false},
          { id: 24, firstName: "Jillian", status:GOING, invited: false},
          { id: 35, firstName: "Alma", status: GOING, invited: false},
          { id: 876, firstName: "Rhianna", status: INTERESTED, invited: false},
          { id: 496, firstName: "Tasha", status: INTERESTED, invited: true},
          { id: 4527, firstName: "Riley", status: GOING, invited: false},
          { id: 4358, firstName: "Marc", status: GOING, invited: false},
          { id: 345, firstName: "Daniella", status: GOING, invited: false},
          { id: 97, firstName: "Jayden", status: GOING, invited: false},
          { id: 136, firstName: "Wilf", status:INTERESTED, invited: true},
          { id: 6, firstName: "Keyla", status: GOING, invited: false},
          { id: 4236, firstName: "Honey", status: "", invited: true},
          { id: 7, firstName: "Marc", status: INTERESTED, invited: false},
          { id: 890, firstName: "Isaiah", status: INTERESTED, invited: false},
          { id: 67, firstName: "Mark", status: INTERESTED, invited: false},
          { id: 836, firstName: "Dollie", status: INTERESTED, invited: false},
          { id: 572, firstName: "Sonny", status: INTERESTED, invited: false},
          { id: 23, firstName: "Sheila", status: GOING, invited: false},
          { id: 654, firstName: "Bethan", status: GOING, invited: false},
          { id: 572, firstName: "Lily", status: INTERESTED, invited: false},
          { id: 47, firstName: "Rodney", status: INTERESTED, invited: false},
          { id: 56, firstName: "Ernest", status: GOING, invited: false},
          { id: 126, firstName: "Dollie", status: "", invited: true},
          { id: 123, firstName: "Marc", status: "", invited: true},
          { id: 344, firstName: "Lillith", status: INTERESTED, invited: false},
          { id: 4268, firstName: "Kaif", status: "", invited: true},
          { id: 2178, firstName: "Keely", status: GOING, invited: false},
        ],
        invited: 9,
        going: 14,
        interested: 14
        // Total: 35
      },
    },
    ticketLink: "https://www.eventbrite.ca/",
    mediaLink: {
      cover: 'https://media-cdn.tripadvisor.com/media/photo-w/11/ce/ee/1b/celebrities-nightclub.jpg',
      host: [
        'https://media-cdn.tripadvisor.com/media/photo-m/1280/17/94/42/91/photo2jpg.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-w/17/94/42/8f/photo1jpg.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-w/17/94/42/8e/photo0jpg.jpg'
      ],
      users: [
        'https://media-cdn.tripadvisor.com/media/photo-o/11/ce/ef/f1/rezz-at-celebrities-nightclub.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-o/11/ce/ef/ca/travis-scott-live-at.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-o/11/ce/ef/61/a-club-called-rhonda.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-o/11/ce/ee/75/cedric-gervais-at-celebrities.jpg'
      ]
    },
    eventTags: {
      host: [
        'party',
        'nightlife',
        'fun',
        'birthday',
        'weekend'
      ],
      users: [
        'lit',
        'fob',
        'dj',
        'fuuuun'
      ]
    },
    history: {
      previous: "",
      demograph: "Youth"
    }
  },
  {
    pub: {
      name: "Kelvin's Bday Bash",
      time: "23:00",
      date: "09/09/2019",
      venue: "Marine Drive",
      price: "",
      admin: "Kelvin Muk"
    },
    priv: {
      id: 1,
      adminId: 19356,
      dateCreated: "07/29/2019",
      lastUpdate: "07/29/2019",
      type: PRIVATE
    },
    attendance: {
      membersAccess: {
        list: [
          { id: 700, firstName: "Anna", status:"", invited: true},
          { id: 701, firstName: "Chris", status: INTERESTED, invited: true},
          { id: 702, firstName: "Diego", status: "", invited: true},
          { id: 703, firstName: "Bush", status: GOING, invited: true},
          { id: 704, firstName: "Kennedy", status: GOING, invited: true},
          { id: 705, firstName: "Athena", status: "", invited: true},
          { id: 706, firstName: "Hades", status: INTERESTED, invited: true},
          { id: 707, firstName: "Zeus", status: GOING, invited: true},
          { id: 708, firstName: "Nib", status: INTERESTED, invited: true},
          { id: 709, firstName: "Barrack", status:GOING, invited: true},
          { id: 710, firstName: "Hussain", status: GOING, invited: true},
        ],
        invited: 11,
        going: 5,
        interested: 3,
      },
    },
    ticketLink: "",
    mediaLink: {
      cover: '',
      host: [],
      users: []
    },
    eventTags: {
      host: [],
      users: []
    },
    history: {
      previous: "",
      demograph: ""
    }
  },
  {
    pub: {
      name: "Alwin's Pot Party",
      time: "00:00",
      date: "04/20/2019",
      venue: "Totem Forest",
      price: "",
      admin: "High Bong"
    },
    priv: {
      id: 2,
      adminId: 823132,
      dateCreated: "07/29/2019",
      lastUpdate: "07/29/2019",
      type: PUBLIC
    },
    attendance: {
      membersAccess: {
        list: [
          { id: 1, firstName: "Clarence", status:"", invited: true},
          { id: 23, firstName: "Victor", status: INTERESTED, invited: false},
          { id: 215, firstName: "Ayat", status: "", invited: true},
          { id: 23, firstName: "Donna", status: GOING, invited: false},
          { id: 770, firstName: "Ayesha", status: GOING, invited: false},
          { id: 786, firstName: "Boyd", status: "", invited: true},
          { id: 167, firstName: "Connor", status: GOING, invited: false},
          { id: 3465, firstName: "Fahim", status: GOING, invited: false},
          { id: 462, firstName: "Jayden", status: INTERESTED, invited: false},
          { id: 24, firstName: "Jillian", status:GOING, invited: true},
          { id: 35, firstName: "Alma", status: GOING, invited: true},
          { id: 876, firstName: "Rhianna", status: GOING, invited: true},
          { id: 496, firstName: "Tasha", status: GOING, invited: true},
          { id: 4527, firstName: "Riley", status: GOING, invited: true},
          { id: 4358, firstName: "Marc", status: GOING, invited: true},
          { id: 345, firstName: "Daniella", status: GOING, invited: true},
          { id: 97, firstName: "Jayden", status: GOING, invited: true},
          { id: 136, firstName: "Wilf", status:GOING, invited: true},
          { id: 6, firstName: "Keyla", status: GOING, invited: true},
          { id: 4236, firstName: "Honey", status: "", invited: true},
          { id: 7, firstName: "Marc", status: INTERESTED, invited: false},
          { id: 890, firstName: "Isaiah", status: GOING, invited: false},
          { id: 67, firstName: "Mark", status: INTERESTED, invited: false},
          { id: 836, firstName: "Dollie", status: INTERESTED, invited: false},
          { id: 572, firstName: "Sonny", status: INTERESTED, invited: false},
          { id: 23, firstName: "Sheila", status: GOING, invited: false},
          { id: 654, firstName: "Bethan", status: GOING, invited: false},
          { id: 572, firstName: "Lily", status: INTERESTED, invited: false},
          { id: 47, firstName: "Rodney", status: INTERESTED, invited: false},
          { id: 56, firstName: "Ernest", status: GOING, invited: false},
          { id: 126, firstName: "Dollie", status: "", invited: true},
          { id: 123, firstName: "Marc", status: "", invited: true},
          { id: 344, firstName: "Lillith", status: INTERESTED, invited: false},
          { id: 4268, firstName: "Kaif", status: "", invited: true},
          { id: 2178, firstName: "Keely", status: GOING, invited: false},
        ],
        invited: 15,
        going: 19,
        interested: 9
      },
    },
    ticketLink: "",
    mediaLink: {
      cover: 'https://asset.barrons.com/public/resources/images/ON-CM053_FEAT_0_B1280_20180327155410.jpg',
      host: [],
      users: []
    },
    eventTags: {
      host: [],
      users: []
    },
    history: {
      previous: "",
      demograph: ""
    }
  }

]
