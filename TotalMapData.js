var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#8f67ff",
    state_hover_color: "#5534a8",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "TotalMap",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      color: "#7f61d4",
      name: "Hawaii",
      description: "The Aloha State"
    },
    AK: {
      color: "#a089df",
      name: "Alaska",
      description: "The Last Frontier"
    },
    FL: {
      color: "#39217b",
      name: "Florida",
      description: "The Sunshine State"
    },
    NH: {
      color: "#a089df",
      name: "New Hampshire",
      description: "Granite State"
    },
    VT: {
      color: "#a089df",
      name: "Vermont",
      description: "Green Mountain State"
    },
    ME: {
      color: "#a089df",
      name: "Maine",
      description: "Pine Tree State"
    },
    RI: {
      color: "#a089df",
      name: "Rhode Island",
      description: "The Ocean State"
    },
    NY: {
      color: "#39217b",
      name: "New York",
      description: "Empire State"
    },
    PA: {
      color: "#39217b",
      name: "Pennsylvania",
      description: "Keystone State"
    },
    NJ: {
      color: "#5f39c9",
      name: "New Jersey",
      description: "Garden State"
    },
    DE: {
      color: "#a089df",
      name: "Delaware",
      description: "The First State, The Diamond State"
    },
    MD: {
      color: "#5f39c9",
      name: "Maryland",
      description: "Old Line State, Free State"
    },
    VA: {
      color: "#5f39c9",
      name: "Virginia",
      description: "Old Dominion, Mother of States"
    },
    WV: {
      color: "#7f61d4",
      name: "West Virginia",
      description: "Mountain State"
    },
    OH: {
      color: "#4c2ca3",
      name: "Ohio",
      description: "Buckeye State"
    },
    IN: {
      color: "#5f39c9",
      name: "Indiana",
      description: "Hoosier State"
    },
    IL: {
      color: "#39217b",
      name: "Illinois",
      description: "Prairie State, Land of Lincoln"
    },
    CT: {
      color: "#7f61d4",
      name: "Connecticut",
      description: "The Constitution State, Nutmeg State"
    },
    WI: {
      color: "#5f39c9",
      name: "Wisconsin",
      description: "Badger State"
    },
    NC: {
      color: "#39217b",
      name: "North Carolina",
      description: "Tar Heel State, Old North State"
    },
    DC: {
      color: "#39217b",
      hide: "yes",
      name: "District of Columbia"
    },
    MA: {
      color: "#7f61d4",
      name: "Massachusetts",
      description: "Bay State, The Spirit of America"
    },
    TN: {
      color: "#4c2ca3",
      name: "Tennessee",
      description: "Volunteer State"
    },
    AR: {
      color: "#5f39c9",
      name: "Arkansas",
      description: "The Natural State"
    },
    MO: {
      color: "#4c2ca3",
      name: "Missouri",
      description: "Show-Me State"
    },
    GA: {
      color: "#39217b",
      name: "Georgia",
      description: "Peach State, Empire State of the South"
    },
    SC: {
      color: "#4c2ca3",
      name: "South Carolina",
      description: "Palmetto State"
    },
    KY: {
      color: "#7f61d4",
      name: "Kentucky",
      description: "Bluegrass State"
    },
    AL: {
      color: "#5f39c9",
      name: "Alabama",
      description: "Yellowhammer State, Cotton State, Heart of Dixie"
    },
    LA: {
      color: "#4c2ca3",
      name: "Louisiana",
      description: "Pelican State, Bayou State"
    },
    MS: {
      color: "#7f61d4",
      name: "Mississippi",
      description: "Magnolia State"
    },
    IA: {
      color: "#7f61d4",
      name: "Iowa",
      description: "Hawkeye State"
    },
    MN: {
      color: "#5f39c9",
      name: "Minnesota",
      description: "North Star State, Land of 10,000 Lakes"
    },
    OK: {
      color: "#5f39c9",
      name: "Oklahoma",
      description: "Sooner State"
    },
    TX: {
      color: "#39217b",
      name: "Texas",
      description: "Lone Star State"
    },
    NM: {
      color: "#5f39c9",
      name: "New Mexico",
      description: "Land of Enchantment"
    },
    KS: {
      color: "#7f61d4",
      name: "Kansas",
      description: "Sunflower State"
    },
    NE: {
      color: "#7f61d4",
      name: "Nebraska",
      description: "Cornhusker State"
    },
    SD: {
      color: "#a089df",
      name: "South Dakota",
      description: "Mount Rushmore State"
    },
    ND: {
      color: "#a089df",
      name: "North Dakota",
      description: "Peace Garden State"
    },
    WY: {
      color: "#a089df",
      name: "Wyoming",
      description: "Equality State, Cowboy State"
    },
    MT: {
      color: "#a089df",
      name: "Montana",
      description: "Treasure State, Big Sky Country"
    },
    CO: {
      color: "#4c2ca3",
      name: "Colorado",
      description: "Centennial State, Colorful Colorado"
    },
    UT: {
      color: "#7f61d4",
      name: "Utah",
      description: "Beehive State"
    },
    AZ: {
      color: "#4c2ca3",
      name: "Arizona",
      description: "Grand Canyon State, Copper State"
    },
    NV: {
      color: "#7f61d4",
      name: "Nevada",
      description: "Silver State"
    },
    OR: {
      color: "#5f39c9",
      name: "Oregon",
      description: "Beaver State"
    },
    WA: {
      color: "#4c2ca3",
      name: "Washington",
      description: "Evergreen State"
    },
    CA: {
      color: "#39217b",
      name: "California",
      description: "The Golden State"
    },
    MI: {
      color: "#4c2ca3",
      name: "Michigan",
      description: "Great Lakes State, Wolverine State"
    },
    ID: {
      color: "#a089df",
      name: "Idaho",
      description: "Gem State"
    },
    GU: {
      color: "#39217b",
      hide: "yes",
      name: "Guam"
    },
    VI: {
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      color: "#39217b",
      hide: "yes",
      name: "Puerto Rico"
    },
    MP: {
      color: "#39217b",
      hide: "yes",
      name: "Northern Mariana Islands"
    },
    AS: {
      color: "#4c2ca3",
      hide: "yes",
      name: "American Samoa"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {},
  data: {
    data: {
      AL: "105884",
      HI: "28052",
      AK: "22020",
      FL: "350474",
      NH: "9202",
      VT: "4696",
      ME: "9042",
      RI: "11664",
      NY: "245990",
      PA: "195192",
      NJ: "81914",
      DE: "17146",
      MD: "100718",
      OH: "189338",
      IN: "118692",
      IL: "215110",
      CT: "43520",
      NC: "232656",
      DC: "200292",
      MA: "77730",
      TN: "189794",
      AR: "89412",
      MO: "164024",
      GA: "200292",
      SC: "132992",
      KY: "77728",
      LA: "132504",
      MS: "58934",
      IA: "55988",
      MN: "95944",
      OK: "117190",
      TX: "654360",
      NM: "78888",
      KS: "59562",
      NE: "32252",
      SD: "19848",
      ND: "15792",
      MT: "21674",
      CO: "159196",
      UT: "57018",
      AZ: "159368",
      NV: "74024",
      OR: "89362",
      CA: "999278",
      MI: "182052",
      ID: "20164",
      GU: "215110",
      PR: "654360",
      MP: "195192",
      AS: "159368",
      WY: "7212",
      WA: "183008",
      WV: "27544",
      VA: "81728",
      WI: "83138"
    }
  }
};