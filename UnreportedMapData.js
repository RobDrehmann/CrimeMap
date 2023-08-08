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
    div: "UnreportedMap",
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
      color: "#a089df",
      name: "Hawaii",
      description: "The Aloha State"
    },
    AK: {
      color: "#7f61d4",
      name: "Alaska",
      description: "The Last Frontier"
    },
    FL: {
      color: "#39217b",
      name: "Florida",
      description: "The Sunshine State"
    },
    NH: {
      color: "#7f61d4",
      name: "New Hampshire",
      description: "Granite State"
    },
    VT: {
      color: "#a089df",
      name: "Vermont",
      description: "Green Mountain State"
    },
    ME: {
      color: "#7f61d4",
      name: "Maine",
      description: "Pine Tree State"
    },
    RI: {
      color: "#a089df",
      name: "Rhode Island",
      description: "The Ocean State"
    },
    NY: {
      color: "#4c2ca3",
      name: "New York",
      description: "Empire State"
    },
    PA: {
      color: "#a089df",
      name: "Pennsylvania",
      description: "Keystone State"
    },
    NJ: {
      color: "#4c2ca3",
      name: "New Jersey",
      description: "Garden State"
    },
    DE: {
      color: "#a089df",
      name: "Delaware",
      description: "The First State, The Diamond State"
    },
    MD: {
      color: "#a089df",
      name: "Maryland",
      description: "Old Line State, Free State"
    },
    VA: {
      color: "#39217b",
      name: "Virginia",
      description: "Old Dominion, Mother of States"
    },
    WV: {
      color: "#a089df",
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
      color: "#a089df",
      name: "Illinois",
      description: "Prairie State, Land of Lincoln"
    },
    CT: {
      color: "#7f61d4",
      name: "Connecticut",
      description: "The Constitution State, Nutmeg State"
    },
    WI: {
      color: "#39217b",
      name: "Wisconsin",
      description: "Badger State"
    },
    NC: {
      color: "#39217b",
      name: "North Carolina",
      description: "Tar Heel State, Old North State"
    },
    DC: {
      color: "#4c2ca3",
      hide: "yes",
      name: "District of Columbia"
    },
    MA: {
      color: "#5f39c9",
      name: "Massachusetts",
      description: "Bay State, The Spirit of America"
    },
    TN: {
      color: "#39217b",
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
      color: "#4c2ca3",
      name: "Georgia",
      description: "Peach State, Empire State of the South"
    },
    SC: {
      color: "#5f39c9",
      name: "South Carolina",
      description: "Palmetto State"
    },
    KY: {
      color: "#4c2ca3",
      name: "Kentucky",
      description: "Bluegrass State"
    },
    AL: {
      color: "#4c2ca3",
      name: "Alabama",
      description: "Yellowhammer State, Cotton State, Heart of Dixie"
    },
    LA: {
      color: "#39217b",
      name: "Louisiana",
      description: "Pelican State, Bayou State"
    },
    MS: {
      color: "#7f61d4",
      name: "Mississippi",
      description: "Magnolia State"
    },
    IA: {
      color: "#5f39c9",
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
      color: "#7f61d4",
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
      color: "#7f61d4",
      name: "South Dakota",
      description: "Mount Rushmore State"
    },
    ND: {
      color: "#7f61d4",
      name: "North Dakota",
      description: "Peace Garden State"
    },
    WY: {
      color: "#4c2ca3",
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
      color: "#5f39c9",
      name: "Utah",
      description: "Beehive State"
    },
    AZ: {
      color: "#39217b",
      name: "Arizona",
      description: "Grand Canyon State, Copper State"
    },
    NV: {
      color: "#5f39c9",
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
      color: "#7f61d4",
      name: "Idaho",
      description: "Gem State"
    },
    GU: {
      color: "#a089df",
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
      color: "#a089df",
      hide: "yes",
      name: "Northern Mariana Islands"
    },
    AS: {
      color: "#39217b",
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
      HI: "13047",
      AK: "14859",
      FL: "299722",
      NH: "15788",
      ME: "16824",
      RI: "8943",
      NY: "62814",
      PA: "651",
      NJ: "72778",
      DE: "11392",
      MD: "5082",
      OH: "62552",
      IN: "40264",
      IL: "2854",
      CT: "29317",
      NC: "111116",
      DC: "55184",
      MA: "41924",
      TN: "146022",
      AR: "53459",
      MO: "66346",
      GA: "55184",
      SC: "52325",
      KY: "81867",
      AL: "55184",
      LA: "214129",
      MS: "21961",
      IA: "42974",
      MN: "51054",
      OK: "37974",
      TX: "214129",
      NM: "18887",
      KS: "24388",
      NE: "15257",
      SD: "15721",
      ND: "13201",
      MT: "12758",
      CO: "89644",
      UT: "39256",
      AZ: "91625",
      NV: "54143",
      OR: "54710",
      CA: "370292",
      MI: "76048",
      ID: "21121",
      GU: "2854",
      PR: "214129",
      MP: "651",
      AS: "91625",
      VT: "5782",
      WV: "12068",
      VA: "99989",
      WI: "214129",
      WA: "74747",
      WY: "55184"
    }
  }
};