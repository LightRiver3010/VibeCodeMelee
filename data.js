// ============================================
// MELEE TRACKER — Top 50 Active Competitive Circuit
// Augmented with Glicko-2 Probabilistic Engine & Slippi Telemetry
// Source: SSBMRank 2025-2026, Slippi Netplay, Liquipedia, start.gg
// ============================================

const PLAYERS = [
  {
    "rank": 1,
    "tag": "Zain",
    "realName": "Zain Naghmi",
    "region": "MDVA, USA",
    "characters": [
      "Marth"
    ],
    "winRate": 0.87,
    "recentPlacements": [
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 1
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 1
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 2
      },
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 3
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      }
    ],
    "majorWins": [
      {
        "tournament": "Pat's House 5 (Grand Finals)",
        "date": "2026-05-03",
        "vodUrl": "https://www.youtube.com/results?search_query=Pat%27s+House+5+GRAND+FINALS+Zain+Marth+Vs+RapMonster+Luigi"
      },
      {
        "tournament": "Battle of BC 8 (Grand Finals)",
        "date": "2026-06-07",
        "vodUrl": "https://www.youtube.com/results?search_query=Battle+of+BC+8+Grand+Finals+Zain+vs+Hungrybox"
      },
      {
        "tournament": "Shine 2023",
        "date": "2023-08-26",
        "vodUrl": "https://www.youtube.com/results?search_query=Zain+Shine+2023+Grand+Finals"
      },
      {
        "tournament": "Super Smash Con 2022",
        "date": "2022-08-14",
        "vodUrl": "https://www.youtube.com/results?search_query=Zain+Super+Smash+Con+2022+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 1,
      "totalEntrants": 1024,
      "expectedPlacement": "1st (Grand Finals Champion)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 64
        },
        {
          "round": "Winners Top 32",
          "name": "Spark (Sheik)",
          "seed": 17
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Wizzrobe (Captain Falcon)",
          "seed": 8
        },
        {
          "round": "Winners Semifinals",
          "name": "aMSa (Yoshi)",
          "seed": 4
        },
        {
          "round": "Winners Finals",
          "name": "Cody Schwab (Fox)",
          "seed": 2
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 55,
        "losses": 25,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 48,
        "losses": 18,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 5,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 35,
        "losses": 20,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 40,
        "losses": 15,
        "tendency": "strong"
      },
      "Peach": {
        "wins": 30,
        "losses": 10,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 38,
        "losses": 12,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 20,
        "losses": 5,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 15,
        "losses": 14,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 14,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 12,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Strict solo Marth purist. Relies on unmatched stage positioning and neutral spacing rather than secondary counterpicks.",
      "preferredStages": [
        "Final Destination (guaranteed chaingrabs on spacies)",
        "Fountain of Dreams",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Dream Land (high blast zones weaken early tipper kills)"
      ]
    },
    "bio": "Zain Naghmi is widely regarded as the greatest Marth player in Super Smash Bros. Melee history and one of the most dominant competitors of all time. Representing Shopify Rebellion, Zain fundamentally revolutionized the character's metagame with frame-perfect pivot tippers, edge-cancel dair setups, and suffocating stage control. He holds the record for the longest active #1 ranking streak of any Marth player in history.",
    "funFacts": [
      "Holds the record for longest active #1 ranking streak among Marth players in history",
      "Famously practices 6-8 hours daily with custom UnclePunch Slippi training savestates",
      "Was originally a Falco main before switching to Marth in late 2015",
      "Completed an iconic 26-character grandmaster ranked challenge run on Slippi"
    ],
    "playstyle": "Surgical precision with Marth. Optimized punish game, devastating pivot tippers, and methodical neutral spacing that suffocates fastfallers.",
    "glicko": {
      "rating": 2260,
      "rd": 36,
      "volatility": 0.0552,
      "confidenceInterval": "2188 – 2332"
    },
    "telemetry": {
      "connectCode": "ZAIN#0",
      "apm": 365,
      "lCancelPct": 98.5,
      "openingsPerKill": 3.09,
      "neutralWinPct": 62.1,
      "avgKillPct": 100,
      "sampleMatchesParsed": 296
    }
  },
  {
    "rank": 2,
    "tag": "Cody Schwab",
    "realName": "Cody Schwab",
    "region": "NorCal, USA",
    "characters": [
      "Fox"
    ],
    "winRate": 0.86,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 1
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 1
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 2
      },
      {
        "tournament": "The Big House 11",
        "date": "2024-10-20",
        "placement": 1
      },
      {
        "tournament": "Full Bloom 2024",
        "date": "2024-03-24",
        "placement": 1
      }
    ],
    "majorWins": [
      {
        "tournament": "Supernova 2026 (Grand Finals)",
        "date": "2026-08-09",
        "vodUrl": "https://www.youtube.com/results?search_query=Cody+Schwab+vs+Zain+Supernova+2026+Grand+Finals"
      },
      {
        "tournament": "GENESIS X3 (Grand Finals)",
        "date": "2026-02-15",
        "vodUrl": "https://www.youtube.com/results?search_query=Cody+Schwab+GENESIS+X3+Grand+Finals"
      },
      {
        "tournament": "The Big House 11",
        "date": "2024-10-20",
        "vodUrl": "https://www.youtube.com/results?search_query=Cody+Schwab+The+Big+House+11"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 2,
      "totalEntrants": 1024,
      "expectedPlacement": "2nd (Grand Finals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 63
        },
        {
          "round": "Winners Top 32",
          "name": "Ginger (Falco)",
          "seed": 15
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Plup (Sheik/Fox)",
          "seed": 7
        },
        {
          "round": "Winners Semifinals",
          "name": "Hungrybox (Jigglypuff)",
          "seed": 3
        },
        {
          "round": "Winners Finals",
          "name": "Zain (Marth)",
          "seed": 1
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 50,
        "losses": 20,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 45,
        "losses": 16,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 32,
        "losses": 28,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 42,
        "losses": 14,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 38,
        "losses": 22,
        "tendency": "strong"
      },
      "Peach": {
        "wins": 36,
        "losses": 12,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 30,
        "losses": 10,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 22,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 18,
        "losses": 12,
        "tendency": "strong"
      },
      "Pikachu": {
        "wins": 20,
        "losses": 6,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 16,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 14,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Fiercely loyal solo Fox. Relies on laser camping vs floaties and drill-shine waveshine combos across every matchup.",
      "preferredStages": [
        "Pokémon Stadium (low ceiling for early up-smash/up-air kills)",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination (bans against Marth/chaingrabs)"
      ]
    },
    "bio": "Cody Schwab (formerly iBDW) is a world champion Fox main from Long Island, NY, now residing in Northern California. One of the undisputed titans of modern Melee, Cody won back-to-back supermajors at GENESIS X3 and Supernova 2026. Known for his ruthless game plan execution, laser discipline, and peerless up-air juggle conversions, Cody proved that pure 20XX Fox remains the most lethal weapon in competitive Smash.",
    "funFacts": [
      "Graduated from law school before pursuing professional Melee full-time",
      "Won both GENESIS X3 and Supernova 2026, defeating world #1 Zain in grand finals",
      "Famously studied thousands of hours of Armada and Mew2King footage to decode Fox matchups",
      "One of only two players in modern history to defeat every single top-10 player multiple times in a single calendar year"
    ],
    "playstyle": "Clinical, relentless 20XX Fox. Unmatched laser zoning in neutral, lethal up-throw up-air kill confirms, and airtight tech-chase shines.",
    "glicko": {
      "rating": 2224,
      "rd": 36,
      "volatility": 0.0554,
      "confidenceInterval": "2152 – 2296"
    },
    "telemetry": {
      "connectCode": "IBDW#0",
      "apm": 421,
      "lCancelPct": 97.4,
      "openingsPerKill": 2.9,
      "neutralWinPct": 60.3,
      "avgKillPct": 89,
      "sampleMatchesParsed": 293
    }
  },
  {
    "rank": 3,
    "tag": "Hungrybox",
    "realName": "Juan Debiedma",
    "region": "Florida, USA",
    "characters": [
      "Jigglypuff"
    ],
    "winRate": 0.82,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 1
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 2
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 4
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 5
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 5
      }
    ],
    "majorWins": [
      {
        "tournament": "CEO 2026 (Grand Finals)",
        "date": "2026-08-16",
        "vodUrl": "https://www.youtube.com/results?search_query=Hungrybox+vs+Cody+Schwab+CEO+2026+Grand+Finals"
      },
      {
        "tournament": "EVO 2016",
        "date": "2016-07-17",
        "vodUrl": "https://www.youtube.com/results?search_query=Hungrybox+Armada+EVO+2016+Grand+Finals"
      },
      {
        "tournament": "The Big House 9",
        "date": "2019-10-06",
        "vodUrl": "https://www.youtube.com/results?search_query=Hungrybox+The+Big+House+9+Grand+Finals"
      },
      {
        "tournament": "Pound 2022",
        "date": "2022-04-24",
        "vodUrl": "https://www.youtube.com/results?search_query=Hungrybox+Pound+2022+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 3,
      "totalEntrants": 1024,
      "expectedPlacement": "3rd (Winners/Losers Finals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 62
        },
        {
          "round": "Winners Top 32",
          "name": "Magi (Falco)",
          "seed": 14
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Mango (Falco/Fox)",
          "seed": 6
        },
        {
          "round": "Winners Semifinals",
          "name": "Cody Schwab (Fox)",
          "seed": 2
        },
        {
          "round": "Winners Finals",
          "name": "Zain (Marth)",
          "seed": 1
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 60,
        "losses": 35,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 45,
        "losses": 15,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 30,
        "losses": 25,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 40,
        "losses": 12,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 8,
        "losses": 5,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 35,
        "losses": 10,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 30,
        "losses": 20,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 25,
        "losses": 8,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 14,
        "losses": 16,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 22,
        "losses": 8,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 15,
        "losses": 5,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 16,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Jigglypuff icon. Never swaps off Puff, forcing opponents to play her agonizing pace.",
      "preferredStages": [
        "Dream Land 64 (massive blast zones allow survival past 150%)"
      ],
      "bannedStages": [
        "Yoshi's Story (bans small stages with low ceilings)"
      ]
    },
    "bio": "Juan 'Hungrybox' Debiedma is one of the legendary 'Five Gods' of Melee and the greatest Jigglypuff player to ever touch a controller. With over 15 years at the absolute pinnacle, Hbox won EVO 2016 in one of the most emotional grand finals in esports history. Renowned for his clutch factor, he took 1st place at CEO 2026 by clutching a 10-game reset against Cody Schwab. He co-owns Team Liquid and founded The Coinbox online tournament series.",
    "funFacts": [
      "One of the original 'Five Gods of Melee' alongside Armada, Mango, Mew2King, and PPMD",
      "Won EVO 2016 against Armada on the final stock with a legendary up-throw Rest",
      "Holds a bachelor's degree in chemical engineering from the University of Florida",
      "Founder and host of The Coinbox, the largest weekly online Smash tournament in history"
    ],
    "playstyle": "Defensive wall-of-pain Jigglypuff with peerless spacing. Relies on back-air walls, lethal clutch rests, and unmatched survival DI to exhaust and punish opponent mistakes.",
    "glicko": {
      "rating": 2201,
      "rd": 37,
      "volatility": 0.0556,
      "confidenceInterval": "2127 – 2275"
    },
    "telemetry": {
      "connectCode": "HBOX#0",
      "apm": 261,
      "lCancelPct": 93,
      "openingsPerKill": 2.53,
      "neutralWinPct": 58,
      "avgKillPct": 68,
      "sampleMatchesParsed": 289
    }
  },
  {
    "rank": 4,
    "tag": "aMSa",
    "realName": "Masaya Chikamoto",
    "region": "Japan / Vancouver, Canada",
    "characters": [
      "Yoshi"
    ],
    "winRate": 0.83,
    "recentPlacements": [
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 4
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 4
      },
      {
        "tournament": "The Big House 10",
        "date": "2022-10-09",
        "placement": 1
      },
      {
        "tournament": "Apex 2022",
        "date": "2022-11-20",
        "placement": 1
      },
      {
        "tournament": "Scump's House 2024",
        "date": "2024-05-12",
        "placement": 1
      }
    ],
    "majorWins": [
      {
        "tournament": "The Big House 10 (Historic 1st Yoshi Major Win)",
        "date": "2022-10-09",
        "vodUrl": "https://www.youtube.com/results?search_query=aMSa+The+Big+House+10+Grand+Finals"
      },
      {
        "tournament": "Apex 2022",
        "date": "2022-11-20",
        "vodUrl": "https://www.youtube.com/results?search_query=aMSa+Apex+2022+Grand+Finals"
      },
      {
        "tournament": "Off the Shelf 2023",
        "date": "2023-09-03",
        "vodUrl": "https://www.youtube.com/results?search_query=aMSa+Off+the+Shelf"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 4,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 4 (Semifinals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 61
        },
        {
          "round": "Winners Top 32",
          "name": "SDJ (Jigglypuff)",
          "seed": 13
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Jmook (Sheik)",
          "seed": 5
        },
        {
          "round": "Winners Semifinals",
          "name": "Zain (Marth)",
          "seed": 1
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 45,
        "losses": 20,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 38,
        "losses": 18,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 28,
        "losses": 26,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 32,
        "losses": 18,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 20,
        "losses": 18,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 24,
        "losses": 16,
        "tendency": "neutral"
      },
      "Captain Falcon": {
        "wins": 26,
        "losses": 14,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 6,
        "losses": 1,
        "tendency": "strong"
      },
      "Pikachu": {
        "wins": 14,
        "losses": 8,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Yoshi pioneer. Has elevated Yoshi from low-tier novelty to supermajor champion through parries and egg-toss zoning.",
      "preferredStages": [
        "Yoshi's Story (Randall egg saves and quick parry punishes)",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Final Destination (bans against Marth/chaingrab characters)"
      ]
    },
    "bio": "Masaya 'aMSa' Chikamoto, known worldwide as 'The Red Yoshi', is one of the most beloved and brilliant players in competitive gaming history. Originating from Japan and currently competing out of Vancouver, Canada with Golden Guardians, aMSa achieved what the community considered mathematically impossible: winning a Supermajor (The Big House 10) with solo Yoshi. His parry timing, double-jump armor usage, and egg-toss trajectory calculations are peerless.",
    "funFacts": [
      "First and only player in history to win an open Melee supermajor with Yoshi",
      "Invented the entire modern competitive Yoshi metagame, including frame-perfect parrying",
      "Known for carrying his signature handwritten notebook to every set to take notes on opponent habits",
      "Voted by fans and peers as the most inspirational Melee competitor of the modern era"
    ],
    "playstyle": "Explosive, armored Yoshi. Flawless jump-armor parries, tricky egg snipes offstage, and lethal down-air and up-air platform juggle combos.",
    "glicko": {
      "rating": 2181,
      "rd": 38,
      "volatility": 0.0558,
      "confidenceInterval": "2105 – 2257"
    },
    "telemetry": {
      "connectCode": "AMSA#0",
      "apm": 404,
      "lCancelPct": 97.1,
      "openingsPerKill": 2.85,
      "neutralWinPct": 58,
      "avgKillPct": 88,
      "sampleMatchesParsed": 286
    }
  },
  {
    "rank": 5,
    "tag": "Jmook",
    "realName": "Jake DiRado",
    "region": "Northeast, USA",
    "characters": [
      "Sheik"
    ],
    "winRate": 0.79,
    "recentPlacements": [
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 2
      },
      {
        "tournament": "Altitude Sickness 3",
        "date": "2026-05-09",
        "placement": 2
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 3
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 8
      },
      {
        "tournament": "GENESIS 9",
        "date": "2023-01-22",
        "placement": 1
      }
    ],
    "majorWins": [
      {
        "tournament": "GENESIS 9 (Supermajor Champion)",
        "date": "2023-01-22",
        "vodUrl": "https://www.youtube.com/results?search_query=Jmook+GENESIS+9+Grand+Finals"
      },
      {
        "tournament": "Collision 2023",
        "date": "2023-03-12",
        "vodUrl": "https://www.youtube.com/results?search_query=Jmook+Collision+2023+Grand+Finals"
      },
      {
        "tournament": "Super Smash Con 2022",
        "date": "2022-08-14",
        "vodUrl": "https://www.youtube.com/results?search_query=Jmook+Super+Smash+Con+2022+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 5,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 6 (Quarterfinals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 60
        },
        {
          "round": "Winners Top 32",
          "name": "Soonsay (Fox)",
          "seed": 12
        },
        {
          "round": "Winners Quarterfinals",
          "name": "aMSa (Yoshi)",
          "seed": 4
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 42,
        "losses": 24,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 35,
        "losses": 14,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 30,
        "losses": 22,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 15,
        "losses": 7,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 16,
        "losses": 20,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 26,
        "losses": 10,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 24,
        "losses": 12,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 20,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 12,
        "losses": 14,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Sheik purist. Unlike older Sheiks who secondary Fox for Puff, Jmook takes all matchups on Sheik.",
      "preferredStages": [
        "Battlefield",
        "Fountain of Dreams (high needle zoning value)"
      ],
      "bannedStages": [
        "Final Destination (bans against Marth)"
      ]
    },
    "bio": "Jake 'Jmook' DiRado is the undisputed champion of modern Sheik play, sponsored by FlyQuest. Rising from an unsponsored regional grinder in upstate New York into a supermajor champion at GENESIS 9, Jmook revived Sheik at the highest level of competitive play. His reaction tech-chases, needle edge-traps, and tranquil tournament demeanor are legendary.",
    "funFacts": [
      "Won GENESIS 9 as a solo Sheik, breaking a multi-year supermajor drought for the character",
      "Sponsored by FlyQuest",
      "Pioneered reaction tech-chasing with near-100% grab follow-up efficiency",
      "Known for his signature warm smile and tranquil presence onstage"
    ],
    "playstyle": "Textbook reaction tech-chasing Sheik. Incredible conversion rate off single grabs, airtight needle platform zoning, and clean edge-guard flowcharts.",
    "glicko": {
      "rating": 2162,
      "rd": 39,
      "volatility": 0.056,
      "confidenceInterval": "2084 – 2240"
    },
    "telemetry": {
      "connectCode": "JMOO#0",
      "apm": 360,
      "lCancelPct": 97.4,
      "openingsPerKill": 2.83,
      "neutralWinPct": 57.9,
      "avgKillPct": 103,
      "sampleMatchesParsed": 282
    }
  },
  {
    "rank": 6,
    "tag": "Mango",
    "realName": "Joseph Marquez",
    "region": "SoCal, USA",
    "characters": [
      "Falco",
      "Fox"
    ],
    "winRate": 0.81,
    "recentPlacements": [
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 5
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 5
      },
      {
        "tournament": "Tipped Off 15",
        "date": "2024-06-16",
        "placement": 1
      },
      {
        "tournament": "Smash Summit 11",
        "date": "2021-07-18",
        "placement": 1
      },
      {
        "tournament": "The Big House 9",
        "date": "2019-10-06",
        "placement": 2
      }
    ],
    "majorWins": [
      {
        "tournament": "Tipped Off 15 (Supermajor Champion)",
        "date": "2024-06-16",
        "vodUrl": "https://www.youtube.com/results?search_query=Mango+Tipped+Off+15+Grand+Finals"
      },
      {
        "tournament": "Smash Summit 11",
        "date": "2021-07-18",
        "vodUrl": "https://www.youtube.com/results?search_query=Mango+Zain+Smash+Summit+11+Grand+Finals"
      },
      {
        "tournament": "EVO 2014 & EVO 2013",
        "date": "2014-07-13",
        "vodUrl": "https://www.youtube.com/results?search_query=Mango+EVO+2014+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 6,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 6 (Quarterfinals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 59
        },
        {
          "round": "Winners Top 32",
          "name": "SluG (Ice Climbers)",
          "seed": 11
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Hungrybox (Jigglypuff)",
          "seed": 3
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 55,
        "losses": 28,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 40,
        "losses": 18,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 38,
        "losses": 32,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 35,
        "losses": 20,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 42,
        "losses": 35,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 32,
        "losses": 14,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 30,
        "losses": 15,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 24,
        "losses": 10,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 18,
        "losses": 15,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 20,
        "losses": 10,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 15,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Master of the spacies counterpick. Flexes Fox vs Hungrybox (Jigglypuff) and floaties; uses Falco vs fastfallers, Marth, and Sheik.",
      "preferredStages": [
        "Yoshi's Story (aggressive edge-pressure)",
        "Pokémon Stadium"
      ],
      "bannedStages": [
        "Final Destination (frequently bans vs Marth chaingrab)"
      ]
    },
    "bio": "Joseph 'Mango' Marquez is 'The GOAT' of Super Smash Bros. Melee and one of esports' most iconic legends. Representing Cloud9, Mango has won majors across three different decades. Renowned for his flowstate aggression, charismatic 'Buster or God' variance, and legendary dual-spacie mastery (Falco and Fox), Mango's career is the heartbeat of competitive Melee.",
    "funFacts": [
      "The only 2-time EVO Melee champion (EVO 2013 and EVO 2014)",
      "Has won premier major tournaments in three separate decades (2000s, 2010s, and 2020s)",
      "Longest-tenured signed player on Cloud9, joining in 2014",
      "Famously popular streamer who coined the phrase 'The Mango'"
    ],
    "playstyle": "Aggressive, instinctual flowstate. Daring lasers, reads off opponent jump habits, unpredictable aerial drift, and heart-stopping offstage shine spikes.",
    "glicko": {
      "rating": 2145,
      "rd": 39,
      "volatility": 0.0562,
      "confidenceInterval": "2067 – 2223"
    },
    "telemetry": {
      "connectCode": "MANG#0",
      "apm": 390,
      "lCancelPct": 97.3,
      "openingsPerKill": 2.91,
      "neutralWinPct": 59.6,
      "avgKillPct": 94,
      "sampleMatchesParsed": 278
    }
  },
  {
    "rank": 7,
    "tag": "Plup",
    "realName": "Justin McGrath",
    "region": "Florida, USA",
    "characters": [
      "Sheik",
      "Fox"
    ],
    "winRate": 0.81,
    "recentPlacements": [
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 1
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 3
      },
      {
        "tournament": "Super Smash Con 2023",
        "date": "2023-08-13",
        "placement": 2
      },
      {
        "tournament": "GENESIS 5",
        "date": "2018-01-21",
        "placement": 1
      },
      {
        "tournament": "The Big House 7",
        "date": "2017-10-08",
        "placement": 2
      }
    ],
    "majorWins": [
      {
        "tournament": "Riptide 2026 (Major Champion)",
        "date": "2026-09-13",
        "vodUrl": "https://www.youtube.com/results?search_query=Plup+Riptide+2026+Grand+Finals"
      },
      {
        "tournament": "GENESIS 5 (God-slayer Supermajor)",
        "date": "2018-01-21",
        "vodUrl": "https://www.youtube.com/results?search_query=Plup+GENESIS+5+Grand+Finals"
      },
      {
        "tournament": "CEO Dreamland",
        "date": "2017-04-16",
        "vodUrl": "https://www.youtube.com/results?search_query=Plup+CEO+Dreamland"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 7,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 8 (Quarterfinals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 58
        },
        {
          "round": "Winners Top 32",
          "name": "Aura (Peach)",
          "seed": 10
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Cody Schwab (Fox)",
          "seed": 2
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 45,
        "losses": 22,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 38,
        "losses": 15,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 32,
        "losses": 25,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 30,
        "losses": 25,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 30,
        "losses": 10,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 28,
        "losses": 12,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 22,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 20,
        "losses": 5,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "World's most dangerous dual-main. Plays lightning-fast Sheik against most the cast, but counterpicks Fox vs Hungrybox (Jigglypuff) and Marth on FD.",
      "preferredStages": [
        "Battlefield (platform movement)",
        "Pokémon Stadium"
      ],
      "bannedStages": [
        "Final Destination (bans vs Marth when playing Sheik)"
      ]
    },
    "bio": "Justin 'Plup' McGrath is one of the most mechanically gifted competitors in Smash history. Formerly the greatest Samus in the world before switching to Sheik and Fox, Plup famously broke the 'Five Gods' barrier at GENESIS 5, defeating Armada and Mango to win the title. Representing Red Bull, Plup took 1st place at Riptide 2026, demonstrating that his lightning reaction times remain world-class.",
    "funFacts": [
      "Broke the era of the 'Five Gods' by winning GENESIS 5 over Armada",
      "Originated as a legendary solo Samus player before becoming a Sheik/Fox God",
      "Co-creator of the famous meme phrase 'Plup Club' and 'The Plup Property'",
      "Has finished Top 3 at GENESIS five separate times across his career"
    ],
    "playstyle": "Blistering movement speed. Unrivaled platform wavelands with Sheik, instant dash-attack tech chases, and a pocket Fox with tournament-winning up-smash precision.",
    "glicko": {
      "rating": 2129,
      "rd": 40,
      "volatility": 0.0564,
      "confidenceInterval": "2049 – 2209"
    },
    "telemetry": {
      "connectCode": "PLUP#0",
      "apm": 367,
      "lCancelPct": 97.5,
      "openingsPerKill": 3.01,
      "neutralWinPct": 58.5,
      "avgKillPct": 96,
      "sampleMatchesParsed": 275
    }
  },
  {
    "rank": 8,
    "tag": "Wizzrobe",
    "realName": "Justin Hallett",
    "region": "Florida, USA",
    "characters": [
      "Captain Falcon"
    ],
    "winRate": 0.79,
    "recentPlacements": [
      {
        "tournament": "Out of the Blue 5",
        "date": "2026-03-28",
        "placement": 1
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 3
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 4
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 5
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 6
      }
    ],
    "majorWins": [
      {
        "tournament": "Out of the Blue 5",
        "date": "2026-03-28",
        "vodUrl": "https://www.youtube.com/results?search_query=Wizzrobe+vs+SluG+Out+of+the+Blue+5+Grand+Finals"
      },
      {
        "tournament": "Smash Summit 8",
        "date": "2019-06-16",
        "vodUrl": "https://www.youtube.com/results?search_query=Wizzrobe+Smash+Summit+8+Grand+Finals"
      },
      {
        "tournament": "Smash Summit 12",
        "date": "2021-12-12",
        "vodUrl": "https://www.youtube.com/results?search_query=Wizzrobe+Smash+Summit+12"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 8,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 8 (Quarterfinals)",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 57
        },
        {
          "round": "Winners Top 32",
          "name": "Krudo (Sheik)",
          "seed": 9
        },
        {
          "round": "Winners Quarterfinals",
          "name": "Zain (Marth)",
          "seed": 1
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 40,
        "losses": 25,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 35,
        "losses": 15,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 30,
        "losses": 20,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 28,
        "losses": 18,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 25,
        "losses": 20,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 22,
        "losses": 12,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 15,
        "losses": 8,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Falcon purist. Employs 20GX reaction tech-chasing and SDI rather than switching characters.",
      "preferredStages": [
        "Dream Land 64 (room to dash dance)",
        "Battlefield"
      ],
      "bannedStages": [
        "Final Destination (bans vs spacies and chaingrabbers)"
      ]
    },
    "bio": "Justin 'Wizzrobe' Hallett is universally recognized as the greatest Captain Falcon player in Melee history. Hailing from Apopka, Florida, Wizzy redefined Captain Falcon from a flashy, read-dependent character into a surgical, top-tier tournament juggernaut with 20GX reaction tech-chases and optimal SDI. He won Out of the Blue 5 in 2026 and finished 3rd at CEO 2026.",
    "funFacts": [
      "Greatest Captain Falcon player in Melee history by a wide margin",
      "Simultaneously held top-8 world rankings across Melee and Smash 64",
      "Famous for his extended pre-match hand warmups and meditation ritual",
      "Never entered a major where he was considered an easy out, holding the highest average consistency"
    ],
    "playstyle": "Incredibly patient and methodical Captain Falcon. Precise reaction-based punish game with devastating tech-chases, stomp-to-knee confirms, and optimal recovery SDI.",
    "glicko": {
      "rating": 2114,
      "rd": 41,
      "volatility": 0.0566,
      "confidenceInterval": "2032 – 2196"
    },
    "telemetry": {
      "connectCode": "WIZZ#0",
      "apm": 353,
      "lCancelPct": 96.8,
      "openingsPerKill": 2.85,
      "neutralWinPct": 55.5,
      "avgKillPct": 89,
      "sampleMatchesParsed": 271
    }
  },
  {
    "rank": 9,
    "tag": "moky",
    "realName": "Kurtis Pratt",
    "region": "Ontario, Canada",
    "characters": [
      "Fox"
    ],
    "winRate": 0.78,
    "recentPlacements": [
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 16
      },
      {
        "tournament": "Full House: Siege",
        "date": "2026-04-12",
        "placement": 3
      },
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 3
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 3
      },
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 6
      }
    ],
    "majorWins": [
      {
        "tournament": "Full House: Siege",
        "date": "2026-04-12",
        "vodUrl": "https://www.youtube.com/results?search_query=moky+Full+House+Siege+Melee"
      },
      {
        "tournament": "Wavedash 2023",
        "date": "2023-11-18",
        "vodUrl": "https://www.youtube.com/results?search_query=moky+Wavedash+2023+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 9,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 8 / Top 12",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 56
        },
        {
          "round": "Winners Top 32",
          "name": "Joshman (Fox)",
          "seed": 10
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 25,
        "losses": 15,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 30,
        "losses": 12,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 28,
        "losses": 18,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 22,
        "losses": 15,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 20,
        "losses": 18,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 25,
        "losses": 10,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 20,
        "losses": 12,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 12,
        "losses": 12,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 15,
        "losses": 8,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 12,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 11,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Hyper-technical solo Fox. Relies on speed and offensive pressure rather than counterpicking.",
      "preferredStages": [
        "Pokémon Stadium",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination (bans vs Marth)"
      ]
    },
    "bio": "Kurtis 'moky' Pratt is an Ontario-born Fox virtuoso widely regarded as the most technically gifted and creative Fox in modern Melee. Known for his blazing APM, multi-shine pressure, and breathtaking combo routes, moky embodies the next evolution of Fox gameplay.",
    "funFacts": [
      "Widely cited by fellow top players as the fastest Fox in Melee history",
      "Pioneered several modern Fox platform movement mixups and edge-cancel shines",
      "Popular Twitch streamer celebrated for his banter and technical tutorials",
      "Holds multiple Canadian major titles and podium placements at supermajors"
    ],
    "playstyle": "Hyper-technical, high-octane Fox. Relentless shield pressure with multi-shines, creative offstage edge-guards, and unpredictable combo branching.",
    "glicko": {
      "rating": 2099,
      "rd": 41,
      "volatility": 0.0568,
      "confidenceInterval": "2017 – 2181"
    },
    "telemetry": {
      "connectCode": "MOKY#0",
      "apm": 418,
      "lCancelPct": 96.8,
      "openingsPerKill": 2.9,
      "neutralWinPct": 60.7,
      "avgKillPct": 92,
      "sampleMatchesParsed": 268
    }
  },
  {
    "rank": 10,
    "tag": "Joshman",
    "realName": "Joshua Lyras",
    "region": "SoCal, USA (from Australia)",
    "characters": [
      "Fox"
    ],
    "winRate": 0.76,
    "recentPlacements": [
      {
        "tournament": "Altitude Sickness 3",
        "date": "2026-05-09",
        "placement": 1
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 5
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 7
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 9
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 9
      }
    ],
    "majorWins": [
      {
        "tournament": "Altitude Sickness 3",
        "date": "2026-05-09",
        "vodUrl": "https://www.youtube.com/results?search_query=Joshman+Altitude+Sickness+3+Grand+Finals"
      },
      {
        "tournament": "DreamHack Melbourne 2023",
        "date": "2023-07-02",
        "vodUrl": "https://www.youtube.com/results?search_query=Joshman+DreamHack+Melbourne"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 10,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 8 / Top 12",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 55
        },
        {
          "round": "Winners Top 32",
          "name": "moky (Fox)",
          "seed": 9
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 22,
        "losses": 14,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 28,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 25,
        "losses": 15,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 20,
        "losses": 12,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 18,
        "losses": 15,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 20,
        "losses": 8,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 15,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 10,
        "losses": 11,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 11,
        "losses": 5,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Occasionally counterpicks Captain Falcon in select regional matchups, but remains loyal Fox at majors.",
      "preferredStages": [
        "Pokémon Stadium",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Joshua 'Joshman' Lyras is an Australian Fox player who successfully relocated to Southern California to compete full-time, signed under Shopify Rebellion. Renowned for his explosive neutral game and adaptability in long sets, Joshman is the highest-ranked Oceanic Smash player in history.",
    "funFacts": [
      "Highest-ranked Australian Smash player in history",
      "Teammate with world #1 Zain on Shopify Rebellion",
      "Renowned for his comedic commentary and lively personality",
      "Can counterpick Captain Falcon with lethal results when needed"
    ],
    "playstyle": "Aggressive yet cerebral Fox. Excels at whiff-punishing with running shine and converting stray lasers into devastating vertical juggle ladders.",
    "glicko": {
      "rating": 2085,
      "rd": 42,
      "volatility": 0.057,
      "confidenceInterval": "2001 – 2169"
    },
    "telemetry": {
      "connectCode": "JOSH#0",
      "apm": 405,
      "lCancelPct": 96.8,
      "openingsPerKill": 2.81,
      "neutralWinPct": 60.4,
      "avgKillPct": 92,
      "sampleMatchesParsed": 264
    }
  },
  {
    "rank": 11,
    "tag": "lloD",
    "realName": "Arjun Malhotra",
    "region": "MDVA, USA",
    "characters": [
      "Peach"
    ],
    "winRate": 0.77,
    "recentPlacements": [
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 1
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 3
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 7
      },
      {
        "tournament": "Shine 2023",
        "date": "2023-08-26",
        "placement": 3
      }
    ],
    "majorWins": [
      {
        "tournament": "Get On My Level 2026 (Major Champion)",
        "date": "2026-08-02",
        "vodUrl": "https://www.youtube.com/results?search_query=lloD+Get+On+My+Level+2026+Grand+Finals"
      },
      {
        "tournament": "CEO 2021",
        "date": "2021-12-05",
        "vodUrl": "https://www.youtube.com/results?search_query=lloD+CEO+2021"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 11,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 8 / Top 12",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 54
        },
        {
          "round": "Winners Top 32",
          "name": "Salt (Captain Falcon)",
          "seed": 12
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 38,
        "losses": 20,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 35,
        "losses": 14,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 28,
        "losses": 16,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 26,
        "losses": 14,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 15,
        "losses": 22,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 12,
        "losses": 4,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 24,
        "losses": 12,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 20,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 16,
        "losses": 6,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Peach master. Combines medical-grade discipline with optimal turnip pulls and crouch-cancel down-smash traps.",
      "preferredStages": [
        "Dream Land 64",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Pokémon Stadium"
      ]
    },
    "bio": "Arjun 'lloD' Malhotra is widely heralded as the premier Peach player in the post-Armada era. Balancing a demanding medical residency with competitive Melee, lloD captured 1st place at Get On My Level (GOML) 2026, defeating RapMonster and Zain in an iconic run. His turnip micro-spacing and defensive composure make him one of the hardest outs in tournament history.",
    "funFacts": [
      "Full-time medical doctor who balanced med school and residency while remaining a top-10 Melee player",
      "Won GOML 2026 out of 512 entrants with solo Peach",
      "Brother to fellow top MDVA competitor Rishi",
      "Renowned for having arguably the best turnip snipes in Melee history"
    ],
    "playstyle": "Methodical, impenetrable Peach defense. Elite float-cancel aerials, precise turnip zoning, and devastating crouch-cancel punishes.",
    "glicko": {
      "rating": 2071,
      "rd": 43,
      "volatility": 0.0572,
      "confidenceInterval": "1985 – 2157"
    },
    "telemetry": {
      "connectCode": "LLOD#0",
      "apm": 316,
      "lCancelPct": 98.2,
      "openingsPerKill": 3.37,
      "neutralWinPct": 56.2,
      "avgKillPct": 110,
      "sampleMatchesParsed": 260
    }
  },
  {
    "rank": 12,
    "tag": "Salt",
    "realName": "Alexandra Rennie",
    "region": "Northeast, USA",
    "characters": [
      "Captain Falcon"
    ],
    "winRate": 0.75,
    "recentPlacements": [
      {
        "tournament": "The Big Shorten",
        "date": "2026-10-10",
        "placement": 1
      },
      {
        "tournament": "Show Me Your Moves '26",
        "date": "2026-10-05",
        "placement": 1
      },
      {
        "tournament": "Fight at the Museum 2",
        "date": "2026-05-18",
        "placement": 1
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 4
      },
      {
        "tournament": "Platfight 2026",
        "date": "2026-10-18",
        "placement": 3
      }
    ],
    "majorWins": [
      {
        "tournament": "The Big Shorten",
        "date": "2026-10-10",
        "vodUrl": "https://www.youtube.com/results?search_query=Salt+The+Big+Shorten+Grand+Finals"
      },
      {
        "tournament": "Fight at the Museum 2",
        "date": "2026-05-18",
        "vodUrl": "https://www.youtube.com/results?search_query=Salt+Fight+at+the+Museum+2"
      },
      {
        "tournament": "Patchwork 2026",
        "date": "2026-06-15",
        "vodUrl": "https://www.youtube.com/results?search_query=Salt+Patchwork+2026+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 12,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 8 / Top 12",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 53
        },
        {
          "round": "Winners Top 32",
          "name": "lloD (Peach)",
          "seed": 11
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 30,
        "losses": 18,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 28,
        "losses": 12,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 22,
        "losses": 15,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 20,
        "losses": 14,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 18,
        "losses": 12,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 20,
        "losses": 8,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 22,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 11,
        "losses": 5,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 10,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Captain Falcon main. Uses speed and read-based aerial pressure rather than secondary counterpicks.",
      "preferredStages": [
        "Battlefield",
        "Dream Land 64"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Alexandra 'Salt' Rennie is an elite Captain Falcon competitor sponsored by Eggdog Esports. Combining fearless aggression with astonishing mechanical precision, Salt made history as one of the highest-ranked female smashers ever.",
    "funFacts": [
      "Highest-ranked female Melee competitor in esports history",
      "Sponsored by beloved grassroots team Eggdog Esports",
      "Famous for her lightning-fast wall-jumps and aggressive Raptor Boost mixups",
      "Regularly takes sets off the top 5 with her signature offensive momentum"
    ],
    "playstyle": "Explosive, momentum-driven Captain Falcon. Fearless deep offstage edge-guards, quick aerial drift reads, and lethal Falcon Punch / Knee finishers.",
    "glicko": {
      "rating": 2058,
      "rd": 44,
      "volatility": 0.0574,
      "confidenceInterval": "1970 – 2146"
    },
    "telemetry": {
      "connectCode": "SALT#0",
      "apm": 362,
      "lCancelPct": 97.2,
      "openingsPerKill": 2.72,
      "neutralWinPct": 56.3,
      "avgKillPct": 88,
      "sampleMatchesParsed": 257
    }
  },
  {
    "rank": 13,
    "tag": "Axe",
    "realName": "Jeffrey Williamson",
    "region": "Arizona, USA",
    "characters": [
      "Pikachu",
      "Fox",
      "Young Link"
    ],
    "winRate": 0.74,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 9
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 13
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 13
      },
      {
        "tournament": "Smash Summit 8",
        "date": "2019-06-16",
        "placement": 1
      }
    ],
    "majorWins": [
      {
        "tournament": "Smash Summit 8 (Historic Pikachu Champion)",
        "date": "2019-06-16",
        "vodUrl": "https://www.youtube.com/results?search_query=Axe+Smash+Summit+8+Grand+Finals"
      },
      {
        "tournament": "Smash Factor 8",
        "date": "2019-08-18",
        "vodUrl": "https://www.youtube.com/results?search_query=Axe+Smash+Factor+8+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 13,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 12 / Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 52
        },
        {
          "round": "Winners Top 32",
          "name": "Trif (Peach)",
          "seed": 14
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 35,
        "losses": 20,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 30,
        "losses": 16,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 28,
        "losses": 18,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 20,
        "losses": 18,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 25,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 25,
        "losses": 14,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 22,
        "losses": 12,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 26,
        "losses": 8,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 12,
        "losses": 12,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 6,
        "losses": 2,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Famous for counterpicking Young Link or Fox against floaties like Jigglypuff and Ice Climbers to avoid Pikachu's harsh matchup limitations.",
      "preferredStages": [
        "Fountain of Dreams",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination (bans vs chaingrabbers)"
      ]
    },
    "bio": "Jeffrey 'Axe' Williamson is the greatest Pikachu player in Super Smash Bros. Melee history. His victory at Smash Summit 8 remains one of the most emotional moments in esports, proving that mid-tier Pikachu could win a supermajor.",
    "funFacts": [
      "The only player in history to win a Melee supermajor with solo Pikachu (Smash Summit 8)",
      "Maintained an unbroken top-tier international rank for over 12 consecutive years",
      "Uses pocket Fox and Young Link counterpicks for tricky floaty matchups like Puff",
      "Universally voted as one of the friendliest figures in the competitive Smash community"
    ],
    "playstyle": "Dazzling Pikachu movement with custom Quick Attack angles, lethal up-air juggle strings, and clutch tail-spike edge-guards.",
    "glicko": {
      "rating": 2045,
      "rd": 44,
      "volatility": 0.0576,
      "confidenceInterval": "1957 – 2133"
    },
    "telemetry": {
      "connectCode": "AXE#0",
      "apm": 382,
      "lCancelPct": 96.7,
      "openingsPerKill": 3.12,
      "neutralWinPct": 56.8,
      "avgKillPct": 98,
      "sampleMatchesParsed": 253
    }
  },
  {
    "rank": 14,
    "tag": "Trif",
    "realName": "Álvaro García Moral",
    "region": "Madrid, Spain",
    "characters": [
      "Peach"
    ],
    "winRate": 0.76,
    "recentPlacements": [
      {
        "tournament": "Fête 3",
        "date": "2024-07-14",
        "placement": 1
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 9
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 7
      }
    ],
    "majorWins": [
      {
        "tournament": "Fête 3 (European Major Champion)",
        "date": "2024-07-14",
        "vodUrl": "https://www.youtube.com/results?search_query=Trif+Fete+3+Grand+Finals"
      },
      {
        "tournament": "Valhalla 3",
        "date": "2020-01-12",
        "vodUrl": "https://www.youtube.com/results?search_query=Trif+Valhalla+3"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 14,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 12 / Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 51
        },
        {
          "round": "Winners Top 32",
          "name": "Axe (Pikachu/Fox)",
          "seed": 13
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 32,
        "losses": 18,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 28,
        "losses": 12,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 24,
        "losses": 14,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 22,
        "losses": 12,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 12,
        "losses": 18,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 20,
        "losses": 10,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 16,
        "losses": 5,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 14,
        "losses": 5,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 12,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Peach specialist. Utilizes Spanish Peach style with aggressive float cancel pokes and turnip edgeguards.",
      "preferredStages": [
        "Dream Land 64",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Pokémon Stadium"
      ]
    },
    "bio": "Álvaro 'Trif' García Moral is widely recognized as the greatest active European Melee player and Spain's all-time champion. Competing out of Madrid, Trif dominates the European continent and travels to North American majors to regularly dismantle top-10 seeds.",
    "funFacts": [
      "Undisputed #1 Melee player in Spain for nearly a decade",
      "Won Fête 3, Europe's largest grassroots Melee tournament",
      "Regarded alongside lloD as the best technical Peach player active today",
      "Known for his incredible stamina in 5-game grueling sets"
    ],
    "playstyle": "Disciplined European Peach. Exceptional stitchface turnip RNG, airtight float cancels, and brilliant crouch-cancel punishes.",
    "glicko": {
      "rating": 2032,
      "rd": 45,
      "volatility": 0.0578,
      "confidenceInterval": "1942 – 2122"
    },
    "telemetry": {
      "connectCode": "TRIF#0",
      "apm": 321,
      "lCancelPct": 98.2,
      "openingsPerKill": 3.58,
      "neutralWinPct": 56,
      "avgKillPct": 117,
      "sampleMatchesParsed": 250
    }
  },
  {
    "rank": 15,
    "tag": "RapMonster",
    "realName": "Dylan Do",
    "region": "MDVA, USA",
    "characters": [
      "Luigi"
    ],
    "winRate": 0.73,
    "recentPlacements": [
      {
        "tournament": "Platfight 2026",
        "date": "2026-10-18",
        "placement": 1
      },
      {
        "tournament": "Smash Valley: The Last Dance",
        "date": "2026-02-01",
        "placement": 1
      },
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 2
      },
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 2
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 5
      }
    ],
    "majorWins": [
      {
        "tournament": "Platfight 2026",
        "date": "2026-10-18",
        "vodUrl": "https://www.youtube.com/results?search_query=RapMonster+Platfight+2026+Grand+Finals"
      },
      {
        "tournament": "Smash Valley: The Last Dance",
        "date": "2026-02-01",
        "vodUrl": "https://www.youtube.com/results?search_query=RapMonster+Smash+Valley+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 15,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 50
        },
        {
          "round": "Winners Top 32",
          "name": "SluG (Ice Climbers)",
          "seed": 16
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 25,
        "losses": 18,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 22,
        "losses": 12,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 18,
        "losses": 15,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 20,
        "losses": 12,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 15,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 15,
        "losses": 10,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 10,
        "losses": 6,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 5,
        "losses": 1,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Luigi pioneer. Has rewritten the Luigi matchup chart, using maximum wavedash spacing to beat top-tier characters.",
      "preferredStages": [
        "Final Destination (flat ground maximizes wavedash speed)",
        "Battlefield"
      ],
      "bannedStages": [
        "Dream Land 64"
      ]
    },
    "bio": "Dylan 'RapMonster' Do is a revolutionary Luigi specialist from Virginia who achieved the highest-ever global ranking for a solo Luigi in Melee history. Defeating world #1 Zain 3-1 at GENESIS X3 and making Grand Finals at Pat's House 5 and GOML 2026, Dylan shattered all expectations for Luigi.",
    "funFacts": [
      "Highest-ranked solo Luigi player in competitive Melee history",
      "First Luigi main to reach Grand Finals of a modern Melee major (Pat's House 5)",
      "Took down world #1 Zain 3-1 at GENESIS X3",
      "Named his tag in homage to BTS leader RM"
    ],
    "playstyle": "Electrifying Luigi movement. Max-length wavedashes across platforms, instant down-B cyclone scrambles, and devastating up-B Shoryuken punishes.",
    "glicko": {
      "rating": 2019,
      "rd": 46,
      "volatility": 0.058,
      "confidenceInterval": "1927 – 2111"
    },
    "telemetry": {
      "connectCode": "RAPM#0",
      "apm": 341,
      "lCancelPct": 94.6,
      "openingsPerKill": 2.86,
      "neutralWinPct": 54.8,
      "avgKillPct": 86,
      "sampleMatchesParsed": 246
    }
  },
  {
    "rank": 16,
    "tag": "SluG",
    "realName": "Hugh Hegarty",
    "region": "Philadelphia, USA",
    "characters": [
      "Ice Climbers"
    ],
    "winRate": 0.71,
    "recentPlacements": [
      {
        "tournament": "Super Fusion #1",
        "date": "2026-03-15",
        "placement": 1
      },
      {
        "tournament": "Out of the Blue 5",
        "date": "2026-03-28",
        "placement": 2
      },
      {
        "tournament": "Smash Valley",
        "date": "2026-02-01",
        "placement": 2
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 13
      }
    ],
    "majorWins": [
      {
        "tournament": "Super Fusion #1",
        "date": "2026-03-15",
        "vodUrl": "https://www.youtube.com/results?search_query=SluG+Super+Fusion+Grand+Finals"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 16,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 49
        },
        {
          "round": "Winners Top 32",
          "name": "RapMonster (Luigi)",
          "seed": 15
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 18,
        "losses": 15,
        "tendency": "weak"
      },
      "Falco": {
        "wins": 20,
        "losses": 12,
        "tendency": "neutral"
      },
      "Marth": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 15,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 5,
        "losses": 3,
        "tendency": "neutral"
      },
      "Yoshi": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 6,
        "losses": 6,
        "tendency": "neutral"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Ice Climbers master. Overcame the wobble ban by developing infinite hand-offs and blizzard edgeguards.",
      "preferredStages": [
        "Final Destination",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Hugh 'SluG' Hegarty is Philadelphia's premier Ice Climbers master, sponsored by Brotherly Love Esports (BLE). In an era following the wobble ban, SluG proved that the Ice Climbers can thrive through pure hand-offs, intricate desyncs, and unmatched neutral control.",
    "funFacts": [
      "Premier Ice Climbers player in the post-wobbling modern era",
      "Sponsored by Brotherly Love Esports (BLE)",
      "Invented several unique Nana throw-extension conversions",
      "Famous for keeping Nana alive with extraordinary AI management"
    ],
    "playstyle": "Mesmerizing desync setups and Nana hand-off sequences. Maximizes split-second grab punishes and uses blizzard walls to control pace.",
    "glicko": {
      "rating": 2007,
      "rd": 47,
      "volatility": 0.0582,
      "confidenceInterval": "1913 – 2101"
    },
    "telemetry": {
      "connectCode": "SLUG#0",
      "apm": 346,
      "lCancelPct": 92.9,
      "openingsPerKill": 2.37,
      "neutralWinPct": 54.2,
      "avgKillPct": 78,
      "sampleMatchesParsed": 242
    }
  },
  {
    "rank": 17,
    "tag": "Soonsay",
    "realName": "Miles Foster",
    "region": "Alberta, Canada",
    "characters": [
      "Fox"
    ],
    "winRate": 0.74,
    "recentPlacements": [
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 3
      },
      {
        "tournament": "Platfight 2026",
        "date": "2026-10-18",
        "placement": 2
      },
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 5
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 7
      }
    ],
    "majorWins": [
      {
        "tournament": "GENESIS X3 (3rd Place Podium Run)",
        "date": "2026-02-15",
        "vodUrl": "https://www.youtube.com/results?search_query=Soonsay+GENESIS+X3+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 17,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 48
        },
        {
          "round": "Winners Top 32",
          "name": "Aklo (Fox/Link)",
          "seed": 18
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 20,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 22,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 18,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 16,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 18,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 15,
        "losses": 8,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 9,
        "losses": 9,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 11,
        "losses": 5,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 9,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Fox player. Emphasizes clean dash-dancing and whiff punishes.",
      "preferredStages": [
        "Pokémon Stadium",
        "Battlefield"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Miles 'Soonsay' Foster is a Fox competitor from Calgary, Alberta. Taking 3rd place out of 981 entrants at GENESIS X3, Soonsay showcased world-class spacing and ice-cold composure.",
    "funFacts": [
      "Achieved 3rd place at supermajor GENESIS X3 ahead of multiple top-5 veterans",
      "Won 1st place in Melee Doubles at Platfight 2026",
      "Proudly represents Western Canada on the international stage",
      "Known for having arguably the cleanest dash-dance neutral in the Fox metagame"
    ],
    "playstyle": "Calculated, fundamentals-first Fox. Disciplined spacing, precise waveshine punishes, and lethal vertical up-smash confirms.",
    "glicko": {
      "rating": 1995,
      "rd": 47,
      "volatility": 0.0584,
      "confidenceInterval": "1901 – 2089"
    },
    "telemetry": {
      "connectCode": "SOON#0",
      "apm": 407,
      "lCancelPct": 96.8,
      "openingsPerKill": 2.81,
      "neutralWinPct": 58.8,
      "avgKillPct": 91,
      "sampleMatchesParsed": 239
    }
  },
  {
    "rank": 18,
    "tag": "Aklo",
    "realName": "Tyler Giese",
    "region": "New York, USA",
    "characters": [
      "Fox",
      "Link"
    ],
    "winRate": 0.68,
    "recentPlacements": [
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 5
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 13
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 13
      },
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 13
      }
    ],
    "majorWins": [
      {
        "tournament": "GENESIS X3 (5th Place Top 8)",
        "date": "2026-02-15",
        "vodUrl": "https://www.youtube.com/results?search_query=Aklo+GENESIS+X3+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 18,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 47
        },
        {
          "round": "Winners Top 32",
          "name": "Soonsay (Fox)",
          "seed": 17
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 14,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Legendary for pulling out mid-tier Link against Marth and Fox on Yoshi's Story or Pokémon Stadium, throwing opponents off completely.",
      "preferredStages": [
        "Yoshi's Story (Link bomb drops)",
        "Pokémon Stadium"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Tyler 'Aklo' Giese is a dual-threat Fox and Link master from New York. A fan favorite for bringing low-tier Link into top-tier tournaments, Aklo's legendary bomb setups and spin attacks have taken sets off the absolute best.",
    "funFacts": [
      "The only modern top-20 competitor to wield Link at top-8 major tournaments",
      "Brother to fellow top smash competitor Foxy Grandpa",
      "Famous for hitting insane bomb-jump recoveries and spin-attack snipes",
      "Can switch seamlessly between 20XX Fox and mid-tier Link based on stage and opponent"
    ],
    "playstyle": "Unorthodox multi-character toolkit. Blistering Fox mechanics paired with a devastating counterpick Link rich in projectile control and bomb tricks.",
    "glicko": {
      "rating": 1983,
      "rd": 48,
      "volatility": 0.0586,
      "confidenceInterval": "1887 – 2079"
    },
    "telemetry": {
      "connectCode": "AKLO#0",
      "apm": 401,
      "lCancelPct": 97.3,
      "openingsPerKill": 2.83,
      "neutralWinPct": 59.3,
      "avgKillPct": 94,
      "sampleMatchesParsed": 235
    }
  },
  {
    "rank": 19,
    "tag": "Krudo",
    "realName": "Kyle Krudo",
    "region": "Florida, USA",
    "characters": [
      "Sheik"
    ],
    "winRate": 0.74,
    "recentPlacements": [
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 2
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 5
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 5
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 7
      }
    ],
    "majorWins": [
      {
        "tournament": "Riptide 2026 (2nd Place Run)",
        "date": "2026-09-13",
        "vodUrl": "https://www.youtube.com/results?search_query=Krudo+Riptide+2026+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 19,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 46
        },
        {
          "round": "Winners Top 32",
          "name": "Magi (Falco)",
          "seed": 20
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 28,
        "losses": 18,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 25,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 18,
        "losses": 14,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 5,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 18,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 15,
        "losses": 8,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 14,
        "losses": 5,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 9,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Sheik purist. Never changes characters, relying on Florida-style tilt and needle setups.",
      "preferredStages": [
        "Battlefield",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Kyle 'Krudo' is a premier Sheik competitor from Central Florida. Exemplifying disciplined fundamentals and rock-solid defense, Krudo finished 2nd at Riptide 2026.",
    "funFacts": [
      "Anchor of Florida's dominant local competitive Melee circuit",
      "Maintained a 100% top-9 major attendance record throughout 2026",
      "One of two Sheik mains ranked in the worldwide top 10",
      "Famous for his unflappable poker face and calm set execution"
    ],
    "playstyle": "Fundamentals-focused, defensive Sheik. Patient neutral baiting, lethal tilt conversions, and flawless ledge-dash invincibility.",
    "glicko": {
      "rating": 1972,
      "rd": 49,
      "volatility": 0.0588,
      "confidenceInterval": "1874 – 2070"
    },
    "telemetry": {
      "connectCode": "KRUD#0",
      "apm": 363,
      "lCancelPct": 97.2,
      "openingsPerKill": 3.03,
      "neutralWinPct": 58.1,
      "avgKillPct": 100,
      "sampleMatchesParsed": 232
    }
  },
  {
    "rank": 20,
    "tag": "Magi",
    "realName": "Miranda Mead",
    "region": "Northeast, USA",
    "characters": [
      "Falco"
    ],
    "winRate": 0.7,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 5
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 9
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 9
      }
    ],
    "majorWins": [
      {
        "tournament": "Supernova 2026 (5th Place Run)",
        "date": "2026-08-09",
        "vodUrl": "https://www.youtube.com/results?search_query=Magi+Supernova+2026+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 20,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 16",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 45
        },
        {
          "round": "Winners Top 32",
          "name": "Krudo (Sheik)",
          "seed": 19
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 18,
        "losses": 14,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Marth": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 12,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 14,
        "losses": 10,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Yoshi": {
        "wins": 7,
        "losses": 8,
        "tendency": "neutral"
      },
      "Pikachu": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Samus": {
        "wins": 9,
        "losses": 4,
        "tendency": "strong"
      },
      "Luigi": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Falco loyalist. Uses laser oppression and platform pillar combos against all characters.",
      "preferredStages": [
        "Yoshi's Story",
        "Battlefield"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Miranda 'Magi' Mead is a world-class Falco competitor from the American Northeast. A pioneering figure in competitive gaming, Magi is celebrated for her laser rhythm, inventive combos, and fearless stage presence.",
    "funFacts": [
      "Historic trailblazer as one of the highest-ranked female smashers of all time",
      "Widely admired for having one of the cleanest laser-movement rhythms in the scene",
      "Placed 5th at Supernova 2026 out of over 800 competitors",
      "Beloved community figure and frequent guest commentator"
    ],
    "playstyle": "Methodical, oppressive Falco laser control combined with sudden burst combos, pillar juggling, and clean shine-grabs.",
    "glicko": {
      "rating": 1960,
      "rd": 49,
      "volatility": 0.059,
      "confidenceInterval": "1862 – 2058"
    },
    "telemetry": {
      "connectCode": "MAGI#0",
      "apm": 377,
      "lCancelPct": 96.4,
      "openingsPerKill": 3.11,
      "neutralWinPct": 57.2,
      "avgKillPct": 90,
      "sampleMatchesParsed": 228
    }
  },
  {
    "rank": 21,
    "tag": "Ginger",
    "realName": "Ryan Ford",
    "region": "Michigan, USA",
    "characters": [
      "Falco"
    ],
    "winRate": 0.69,
    "recentPlacements": [
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 7
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 9
      }
    ],
    "majorWins": [
      {
        "tournament": "GENESIS X3 (7th Place Finish)",
        "date": "2026-02-15",
        "vodUrl": "https://www.youtube.com/results?search_query=Ginger+GENESIS+X3+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 21,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 44
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 18,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Marth": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 16,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 8,
        "losses": 12,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 15,
        "losses": 8,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 14,
        "losses": 8,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Falco coach and analyst.",
      "preferredStages": [
        "Battlefield",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Ryan 'Ginger' Ford is a veteran Falco player and premier strategy content creator hailing from Michigan. Revered for deep game knowledge and patient lasers, Ginger deconstructs opponents with tactical precision.",
    "funFacts": [
      "Produces the most popular Falco analytical tutorials on YouTube",
      "Placed 7th at supermajor GENESIS X3",
      "Has coached hundreds of players worldwide"
    ],
    "playstyle": "Tactical, defensive Falco. Heavy laser zoning, patience-testing neutral footsies, and punishing shine-out-of-shield options.",
    "glicko": {
      "rating": 1949,
      "rd": 50,
      "volatility": 0.0592,
      "confidenceInterval": "1849 – 2049"
    },
    "telemetry": {
      "connectCode": "GING#0",
      "apm": 390,
      "lCancelPct": 95.7,
      "openingsPerKill": 3.11,
      "neutralWinPct": 57.3,
      "avgKillPct": 95,
      "sampleMatchesParsed": 224
    }
  },
  {
    "rank": 22,
    "tag": "Aura",
    "realName": "Derek Olsen",
    "region": "Oregon, USA",
    "characters": [
      "Peach",
      "Sheik"
    ],
    "winRate": 0.72,
    "recentPlacements": [
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 9
      },
      {
        "tournament": "Battle of BC 7",
        "date": "2025-06-08",
        "placement": 5
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 22,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 43
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 22,
        "losses": 15,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 20,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 6,
        "losses": 4,
        "tendency": "neutral"
      },
      "Captain Falcon": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Mains Peach, but maintains a sharp secondary Sheik for tough matchups.",
      "preferredStages": [
        "Dream Land 64",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Pokémon Stadium"
      ]
    },
    "bio": "Derek 'Aura' Olsen is the pride of Oregon and the Pacific Northwest. Breaking into the top echelon with float-cancel pressure and secondary Sheik flexibility, Aura has become a consistent threat at major events.",
    "funFacts": [
      "First Pacific Northwest Peach main to crack top 10 on summer ballots",
      "Pulls Stitchfaces and Bob-ombs with uncanny statistical frequency",
      "Known for calm demeanor in high-pressure games"
    ],
    "playstyle": "Float-cancel heavy Peach with strong punish game off down-smash and grabs. Patient neutral with occasional aggressive float approaches.",
    "glicko": {
      "rating": 1938,
      "rd": 51,
      "volatility": 0.0594,
      "confidenceInterval": "1836 – 2040"
    },
    "telemetry": {
      "connectCode": "AURA#0",
      "apm": 307,
      "lCancelPct": 97.1,
      "openingsPerKill": 3.53,
      "neutralWinPct": 56.8,
      "avgKillPct": 119,
      "sampleMatchesParsed": 221
    }
  },
  {
    "rank": 23,
    "tag": "Spark",
    "realName": "Daniel Kim",
    "region": "Northeast, USA",
    "characters": [
      "Sheik"
    ],
    "winRate": 0.68,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 9
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 13
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 23,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 42
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 18,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Sheik technician, famous for dismantling Ice Climbers.",
      "preferredStages": [
        "Battlefield",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Daniel 'Spark' Kim is a veteran Sheik specialist from the Northeast US who has competed across North America, Europe, and Asia. Known for his tactical intelligence and mastery over Ice Climbers.",
    "funFacts": [
      "Has competed and placed top 8 in tournaments across three continents",
      "One of the most knowledgeable Sheiks in competitive history",
      "Known for his ice-cold tournament composure"
    ],
    "playstyle": "Methodical, trap-based Sheik. Strategic needle zoning, tight edge-guard traps, and reliable tech-chase conversions.",
    "glicko": {
      "rating": 1927,
      "rd": 52,
      "volatility": 0.0596,
      "confidenceInterval": "1823 – 2031"
    },
    "telemetry": {
      "connectCode": "SPRK#0",
      "apm": 351,
      "lCancelPct": 96.1,
      "openingsPerKill": 2.95,
      "neutralWinPct": 56.6,
      "avgKillPct": 102,
      "sampleMatchesParsed": 217
    }
  },
  {
    "rank": 24,
    "tag": "SDJ",
    "realName": "Sam Johnson",
    "region": "Midwest, USA",
    "characters": [
      "Jigglypuff"
    ],
    "winRate": 0.71,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 7
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 7
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 9
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 24,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 41
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 20,
        "losses": 15,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 22,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 5,
        "losses": 5,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 16,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 14,
        "losses": 10,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 12,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Aggressive modern Puff. Avoids camping in favor of active aerial pressure.",
      "preferredStages": [
        "Dream Land 64"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Sam 'SDJ' Johnson is a Midwest Jigglypuff master who pioneered a more aggressive, active approach to the balloon Pokémon, securing top 8 at CEO and Supernova.",
    "funFacts": [
      "Second highest-ranked Jigglypuff in the world behind Hungrybox",
      "Aggressive aerial style contrasts sharply with classic Puff play",
      "Regularly upsets top-10 spacies"
    ],
    "playstyle": "Aggressive aerial Jigglypuff. Forward-air shield pokes, relentless edge-guarding, and unorthodox tech-chase rests.",
    "glicko": {
      "rating": 1916,
      "rd": 52,
      "volatility": 0.0598,
      "confidenceInterval": "1812 – 2020"
    },
    "telemetry": {
      "connectCode": "SDJ#0",
      "apm": 264,
      "lCancelPct": 92.9,
      "openingsPerKill": 2.55,
      "neutralWinPct": 54.8,
      "avgKillPct": 71,
      "sampleMatchesParsed": 214
    }
  },
  {
    "rank": 25,
    "tag": "KoDoRiN",
    "realName": "Eric Kim",
    "region": "New England, USA",
    "characters": [
      "Marth"
    ],
    "winRate": 0.67,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 13
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 13
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 25,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 24 / Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 40
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 16,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 18,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 14,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Methodical Marth spacing purist. Uses Final Destination chain grabs to eliminate spacies.",
      "preferredStages": [
        "Final Destination",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Dream Land 64"
      ]
    },
    "bio": "Eric 'KoDoRiN' Kim is the second-best Marth player in the world behind Zain. Known for his methodical spacing and comprehensive educational guides.",
    "funFacts": [
      "Has ranked in the top 25 for multiple consecutive seasons",
      "Famous for his analytical approach to neutral spacing",
      "Represents the historic New England scene"
    ],
    "playstyle": "Methodical, spacing-oriented Marth. Controlled dash-dance baiting, reliable chain grabs, and clinical forward-smash tipper ledge traps.",
    "glicko": {
      "rating": 1905,
      "rd": 53,
      "volatility": 0.06,
      "confidenceInterval": "1799 – 2011"
    },
    "telemetry": {
      "connectCode": "KODO#0",
      "apm": 350,
      "lCancelPct": 97.7,
      "openingsPerKill": 3.14,
      "neutralWinPct": 61,
      "avgKillPct": 98,
      "sampleMatchesParsed": 210
    }
  },
  {
    "rank": 26,
    "tag": "Chem",
    "realName": "Jacob Fox",
    "region": "Michigan, USA",
    "characters": [
      "Fox"
    ],
    "winRate": 0.67,
    "recentPlacements": [
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 7
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 13
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 17
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 26,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 39
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 15,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Fast-paced Michigan Fox with explosive up-smash confirms.",
      "preferredStages": [
        "Pokémon Stadium",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Jacob 'Chem' Fox is one of the Midwest's brightest Fox stars, showcasing technical wizardry and explosive reaction speed.",
    "funFacts": [
      "One of the fastest-rising Midwest competitors of recent years",
      "Placed top 8 at Riptide 2026 with huge upsets",
      "Known for rapid waveshine execution"
    ],
    "playstyle": "Aggressive tech-skill Fox with blazing APM, tight waveshines, and ruthless juggle punishes.",
    "glicko": {
      "rating": 1895,
      "rd": 54,
      "volatility": 0.0602,
      "confidenceInterval": "1787 – 2003"
    },
    "telemetry": {
      "connectCode": "CHEM#0",
      "apm": 409,
      "lCancelPct": 96.9,
      "openingsPerKill": 3.03,
      "neutralWinPct": 58.5,
      "avgKillPct": 95,
      "sampleMatchesParsed": 206
    }
  },
  {
    "rank": 27,
    "tag": "Zamu",
    "realName": "Dominic Zamu",
    "region": "Illinois, USA",
    "characters": [
      "Fox"
    ],
    "winRate": 0.68,
    "recentPlacements": [
      {
        "tournament": "Out of the Blue 5",
        "date": "2026-03-28",
        "placement": 3
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      }
    ],
    "majorWins": [
      {
        "tournament": "Coinbox Championship #4",
        "date": "2025-11-12",
        "vodUrl": "https://www.youtube.com/results?search_query=Zamu+Coinbox+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 27,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 38
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 16,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 18,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 14,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 11,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 15,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 12,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 11,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Loyal Fox player with consistent up-throw up-air strings.",
      "preferredStages": [
        "Pokémon Stadium",
        "Battlefield"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Dominic 'Zamu' is an Illinois Fox stalwart renowned for online and offline consistency, regularly taking sets off top-10 competitors.",
    "funFacts": [
      "Has won multiple stacked Coinbox online tournaments",
      "Pillar of the Chicago Smash scene",
      "Known for clutch last-stock game 5 wins"
    ],
    "playstyle": "Calculated Fox neutral with lethal edgeguard setups and textbook DI.",
    "glicko": {
      "rating": 1884,
      "rd": 54,
      "volatility": 0.0604,
      "confidenceInterval": "1776 – 1992"
    },
    "telemetry": {
      "connectCode": "ZAMU#0",
      "apm": 397,
      "lCancelPct": 96.3,
      "openingsPerKill": 3.06,
      "neutralWinPct": 57.9,
      "avgKillPct": 93,
      "sampleMatchesParsed": 203
    }
  },
  {
    "rank": 28,
    "tag": "Preeminent",
    "realName": "Marcus Thompson",
    "region": "Southeast, USA",
    "characters": [
      "Fox"
    ],
    "winRate": 0.67,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 7
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 13
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 13
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 28,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 37
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 14,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 16,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Fearless offstage divebombs and shines.",
      "preferredStages": [
        "Yoshi's Story",
        "Pokémon Stadium"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Marcus 'Preeminent' Thompson is a rising star Fox competitor from the American Southeast who shocked the world with his 7th place finish at CEO 2026.",
    "funFacts": [
      "Breakout star of the 2026 season",
      "First top 30 ranking appearance",
      "Represents Florida/Georgia grassroots"
    ],
    "playstyle": "High-octane, aggressive Fox with risky shine spikes and vertical juggle traps.",
    "glicko": {
      "rating": 1874,
      "rd": 55,
      "volatility": 0.0606,
      "confidenceInterval": "1764 – 1984"
    },
    "telemetry": {
      "connectCode": "PREM#0",
      "apm": 402,
      "lCancelPct": 95.9,
      "openingsPerKill": 3,
      "neutralWinPct": 59.2,
      "avgKillPct": 88,
      "sampleMatchesParsed": 199
    }
  },
  {
    "rank": 29,
    "tag": "Medz",
    "realName": "Cesar Salazar",
    "region": "Arizona, USA",
    "characters": [
      "Fox",
      "Marth"
    ],
    "winRate": 0.66,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 17
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 13
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 29,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 36
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 16,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Smoothly switches between Fox and Marth depending on opponent character.",
      "preferredStages": [
        "Battlefield",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Dream Land 64"
      ]
    },
    "bio": "Cesar 'Medz' Salazar is Arizona's legendary dual-main threat, possessing world-class mastery over both Fox and Marth.",
    "funFacts": [
      "Axe's longtime training partner in Arizona",
      "Can play Fox, Marth, and Falco at top-30 levels",
      "Regarded as one of the smartest players in the Southwest"
    ],
    "playstyle": "Versatile dual-threat. Technical Fox laser aggression supplemented by fluid Marth spacing.",
    "glicko": {
      "rating": 1863,
      "rd": 56,
      "volatility": 0.0608,
      "confidenceInterval": "1751 – 1975"
    },
    "telemetry": {
      "connectCode": "MEDZ#0",
      "apm": 404,
      "lCancelPct": 96,
      "openingsPerKill": 2.91,
      "neutralWinPct": 58.5,
      "avgKillPct": 90,
      "sampleMatchesParsed": 196
    }
  },
  {
    "rank": 30,
    "tag": "Morsecode762",
    "realName": "Noah Morse",
    "region": "Virginia, USA",
    "characters": [
      "Samus"
    ],
    "winRate": 0.67,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 9
      },
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 7
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 17
      }
    ],
    "majorWins": [
      {
        "tournament": "The Cave Classic",
        "date": "2025-09-14",
        "vodUrl": "https://www.youtube.com/results?search_query=Morsecode762+Melee"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 30,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 35
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 18,
        "losses": 14,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 16,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 14,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 14,
        "tendency": "weak"
      },
      "Jigglypuff": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Captain Falcon": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 14,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "World's top solo Samus player. Utilizes missile cancel walls and bomb recoveries.",
      "preferredStages": [
        "Dream Land 64",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Noah 'Morsecode762' is universally recognized as the best Samus player in the world. Representing Virginia, Morsecode's unmatched missile cancel pressure and bomb-jump recoveries make him a terrifying opponent.",
    "funFacts": [
      "Highest ranked solo Samus in the modern era",
      "Known for surviving past 200% on Dream Land with bomb jumping",
      "Pushes the limits of Samus extenders and charge shot punishes"
    ],
    "playstyle": "Defensive fortress Samus. Missile camping, screw attack out-of-shield reversals, and impenetrable crouch cancels.",
    "glicko": {
      "rating": 1853,
      "rd": 57,
      "volatility": 0.061,
      "confidenceInterval": "1739 – 1967"
    },
    "telemetry": {
      "connectCode": "MORS#762",
      "apm": 293,
      "lCancelPct": 93.5,
      "openingsPerKill": 3.58,
      "neutralWinPct": 53,
      "avgKillPct": 116,
      "sampleMatchesParsed": 192
    }
  },
  {
    "rank": 31,
    "tag": "Swift",
    "realName": "Tyler Stewart",
    "region": "Maryland, USA",
    "characters": [
      "Pikachu",
      "Fox"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 13
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 31,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32 / Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 34
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 14,
        "losses": 10,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 12,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Captain Falcon": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Aggressive Pikachu who counterpicks Fox against difficult floaties.",
      "preferredStages": [
        "Fountain of Dreams",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Tyler 'Swift' Stewart is a blistering Pikachu/Fox competitor from MDVA, known for rapid platform movement and devastating up-air confirms.",
    "funFacts": [
      "Second best Pikachu in North America behind Axe",
      "Has beaten top-10 spacies with lightning up-air combos",
      "Popular online streamer"
    ],
    "playstyle": "High-speed Pikachu neutral with quick attack cancel mixups and sharp up-smash confirms.",
    "glicko": {
      "rating": 1843,
      "rd": 57,
      "volatility": 0.0612,
      "confidenceInterval": "1729 – 1957"
    },
    "telemetry": {
      "connectCode": "SWFT#0",
      "apm": 387,
      "lCancelPct": 95.9,
      "openingsPerKill": 3.15,
      "neutralWinPct": 55.2,
      "avgKillPct": 100,
      "sampleMatchesParsed": 188
    }
  },
  {
    "rank": 32,
    "tag": "Ben",
    "realName": "Ben Strandskov",
    "region": "Minnesota, USA",
    "characters": [
      "Sheik"
    ],
    "winRate": 0.66,
    "recentPlacements": [
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 17
      },
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 17
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 32,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 32 / Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 33
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 15,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 14,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 6,
        "losses": 6,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 8,
        "losses": 10,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 11,
        "losses": 7,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Solo Sheik purist with clean reaction tech-chases.",
      "preferredStages": [
        "Battlefield",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Ben Strandskov is Minnesota's premier Sheik, admired for textbook reaction tech-chases and disciplined fundamentals.",
    "funFacts": [
      "Longtime top player in the Midwest region",
      "Known for incredible grab conversions",
      "Frequently places top 16 at majors"
    ],
    "playstyle": "Methodical, disciplined Sheik with airtight grab conversions and needle zoning.",
    "glicko": {
      "rating": 1833,
      "rd": 58,
      "volatility": 0.0614,
      "confidenceInterval": "1717 – 1949"
    },
    "telemetry": {
      "connectCode": "BEN#0",
      "apm": 342,
      "lCancelPct": 96.5,
      "openingsPerKill": 3.15,
      "neutralWinPct": 56.4,
      "avgKillPct": 100,
      "sampleMatchesParsed": 185
    }
  },
  {
    "rank": 33,
    "tag": "null",
    "realName": "Cody Shearer",
    "region": "SoCal, USA",
    "characters": [
      "Fox"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 17
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 17
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 33,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 32
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 14,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 10,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 9,
        "losses": 7,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Fast SoCal Fox.",
      "preferredStages": [
        "Pokémon Stadium",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Cody 'null' Shearer is a high-level Fox player hailing from Southern California, forged in the fires of local SoCal weeklies.",
    "funFacts": [
      "Has taken sets off multiple top-10 players in SoCal locals",
      "Known for relentless waveshine pressure",
      "Core figure in the San Diego/LA competitive scene"
    ],
    "playstyle": "Fast-paced SoCal Fox with aggressive dash-dancing and quick up-smash punishes.",
    "glicko": {
      "rating": 1823,
      "rd": 59,
      "volatility": 0.0616,
      "confidenceInterval": "1705 – 1941"
    },
    "telemetry": {
      "connectCode": "NULL#0",
      "apm": 402,
      "lCancelPct": 96.2,
      "openingsPerKill": 3.1,
      "neutralWinPct": 57.2,
      "avgKillPct": 89,
      "sampleMatchesParsed": 181
    }
  },
  {
    "rank": 34,
    "tag": "KJH",
    "realName": "Kalindi Henderson",
    "region": "Michigan, USA",
    "characters": [
      "Fox",
      "Falco"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 17
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 17
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 34,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 31
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 14,
        "losses": 12,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 12,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 10,
        "losses": 10,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 9,
        "losses": 6,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Spacie laboratory master. Flexes between Fox and Falco based on frame advantage.",
      "preferredStages": [
        "Pokémon Stadium",
        "Battlefield"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Kalindi 'KJH' Henderson is a pioneer of modern Fox lab work and UnclePunch training. His deep understanding of frame data shaped the modern Fox meta.",
    "funFacts": [
      "Co-developed key UnclePunch practice routines used by the entire scene",
      "Known as the 'Fox Scientist' of the Midwest",
      "Master of shield-drop execution"
    ],
    "playstyle": "Scientific, frame-perfect Fox. Unforgiving ledgedashes, optimized punish trees, and surgical drill-shines.",
    "glicko": {
      "rating": 1814,
      "rd": 59,
      "volatility": 0.0618,
      "confidenceInterval": "1696 – 1932"
    },
    "telemetry": {
      "connectCode": "KJH#0",
      "apm": 399,
      "lCancelPct": 95.7,
      "openingsPerKill": 3.06,
      "neutralWinPct": 58.3,
      "avgKillPct": 95,
      "sampleMatchesParsed": 178
    }
  },
  {
    "rank": 35,
    "tag": "Ossi",
    "realName": "Oskar Krumpholz",
    "region": "Germany / Europe",
    "characters": [
      "Falco"
    ],
    "winRate": 0.66,
    "recentPlacements": [
      {
        "tournament": "Fête 3",
        "date": "2024-07-14",
        "placement": 4
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 35,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 30
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Marth": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 6,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 8,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Rapid European laser pressure.",
      "preferredStages": [
        "Yoshi's Story",
        "Battlefield"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Oskar 'Ossi' Krumpholz is Germany's top Falco and one of the finest bird mains in Europe, celebrated for swift lasers and devastating pillar combos.",
    "funFacts": [
      "#1 player in Germany",
      "Placed 4th at Fête 3 in the UK",
      "Known for rapid platform wavelands with Falco"
    ],
    "playstyle": "Aggressive European Falco. Relentless laser pressure, quick platform wavelands, and deep offstage dair spikes.",
    "glicko": {
      "rating": 1804,
      "rd": 60,
      "volatility": 0.062,
      "confidenceInterval": "1684 – 1924"
    },
    "telemetry": {
      "connectCode": "OSSI#0",
      "apm": 372,
      "lCancelPct": 94.9,
      "openingsPerKill": 3.07,
      "neutralWinPct": 56.9,
      "avgKillPct": 99,
      "sampleMatchesParsed": 174
    }
  },
  {
    "rank": 36,
    "tag": "Mot$",
    "realName": "Alex Motte",
    "region": "Northeast, USA",
    "characters": [
      "Fox"
    ],
    "winRate": 0.64,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      },
      {
        "tournament": "The Big Shorten",
        "date": "2026-10-10",
        "placement": 5
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 36,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 29
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 12,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 9,
        "losses": 9,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 7,
        "losses": 7,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Tristate Fox specialist.",
      "preferredStages": [
        "Pokémon Stadium",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Alex 'Mot$' is a formidable Tristate Fox competitor known for surgical edgeguards and clean waveshines.",
    "funFacts": [
      "Key pillar of the New York / New Jersey competitive scene",
      "Known for sharp shine edgeguard angles",
      "Regularly makes top 32 at supermajors"
    ],
    "playstyle": "Disciplined Tristate Fox with clinical up-throw up-air conversions and crisp edgeguards.",
    "glicko": {
      "rating": 1794,
      "rd": 61,
      "volatility": 0.0622,
      "confidenceInterval": "1672 – 1916"
    },
    "telemetry": {
      "connectCode": "MOTS#0",
      "apm": 405,
      "lCancelPct": 96,
      "openingsPerKill": 2.92,
      "neutralWinPct": 57,
      "avgKillPct": 90,
      "sampleMatchesParsed": 170
    }
  },
  {
    "rank": 37,
    "tag": "Palpa",
    "realName": "Pablo Palpa",
    "region": "Texas, USA",
    "characters": [
      "Jigglypuff"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 37,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 28
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 14,
        "losses": 6,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 11,
        "losses": 6,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 4,
        "losses": 4,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 10,
        "losses": 4,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Texas Puff with clutch rest reads.",
      "preferredStages": [
        "Dream Land 64"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Pablo 'Palpa' is the king of Texas Jigglypuffs, bringing fear to out-of-region invaders with his sudden crouch rests.",
    "funFacts": [
      "Top ranked player in Texas",
      "Famous for punishing unsafe Fox aerials on shield with instant Rest",
      "Has multiple top-10 upsets"
    ],
    "playstyle": "Spacing-heavy Jigglypuff with lethal crouch-rest reads on aggressive approaches.",
    "glicko": {
      "rating": 1785,
      "rd": 62,
      "volatility": 0.0624,
      "confidenceInterval": "1661 – 1909"
    },
    "telemetry": {
      "connectCode": "PALP#0",
      "apm": 244,
      "lCancelPct": 92.5,
      "openingsPerKill": 2.66,
      "neutralWinPct": 54.3,
      "avgKillPct": 73,
      "sampleMatchesParsed": 167
    }
  },
  {
    "rank": 38,
    "tag": "Frenzy",
    "realName": "Charlie Jones",
    "region": "United Kingdom",
    "characters": [
      "Falco"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "Fête 3",
        "date": "2024-07-14",
        "placement": 3
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 38,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 27
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Marth": {
        "wins": 9,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 10,
        "losses": 6,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 8,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 7,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Creative UK Falco combo sequences.",
      "preferredStages": [
        "Battlefield",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Charlie 'Frenzy' Jones is the #1 Falco player in the United Kingdom and a fixture of the European competitive circuit, boasting 3rd place at Fête 3.",
    "funFacts": [
      "Longtime top player in the UK scene",
      "Renowned for creative combo extensions on fastfallers",
      "Frequent international traveler"
    ],
    "playstyle": "Imaginative Falco with fluid pillar combos, edge-cancel dair extensions, and oppressive laser rhythm.",
    "glicko": {
      "rating": 1775,
      "rd": 62,
      "volatility": 0.0626,
      "confidenceInterval": "1651 – 1899"
    },
    "telemetry": {
      "connectCode": "FRNZ#0",
      "apm": 382,
      "lCancelPct": 95.9,
      "openingsPerKill": 3.16,
      "neutralWinPct": 56.7,
      "avgKillPct": 98,
      "sampleMatchesParsed": 163
    }
  },
  {
    "rank": 39,
    "tag": "Android",
    "realName": "Andreas Lindgren",
    "region": "Gothenburg, Sweden",
    "characters": [
      "Sheik"
    ],
    "winRate": 0.66,
    "recentPlacements": [
      {
        "tournament": "Fête 3",
        "date": "2024-07-14",
        "placement": 5
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      },
      {
        "tournament": "Valhalla 3",
        "date": "2020-01-12",
        "placement": 3
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 39,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 26
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 14,
        "losses": 10,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 6,
        "losses": 4,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 8,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Swedish Sheik fundamentals with deep teamplay wisdom.",
      "preferredStages": [
        "Battlefield",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Andreas 'Android' Lindgren is Swedish Melee royalty. Brother of the legendary Armada and multi-time world doubles champion, Android's singles Sheik is defined by pristine spacing and calm execution.",
    "funFacts": [
      "Brother to Melee legend Armada, forming the greatest doubles team in Melee history ('Team UGS')",
      "Multiple-time European champion",
      "Has competed at top level since 2007"
    ],
    "playstyle": "Pristine European Sheik. Defensive needle zoning, reliable tech-chases, and peerless edge-guarding.",
    "glicko": {
      "rating": 1766,
      "rd": 63,
      "volatility": 0.0628,
      "confidenceInterval": "1640 – 1892"
    },
    "telemetry": {
      "connectCode": "ANDR#0",
      "apm": 344,
      "lCancelPct": 95.8,
      "openingsPerKill": 3.23,
      "neutralWinPct": 54.8,
      "avgKillPct": 107,
      "sampleMatchesParsed": 160
    }
  },
  {
    "rank": 40,
    "tag": "Nicki",
    "realName": "Dominik Franke",
    "region": "Germany / Europe",
    "characters": [
      "Ice Climbers",
      "Fox"
    ],
    "winRate": 0.67,
    "recentPlacements": [
      {
        "tournament": "Fête 3",
        "date": "2024-07-14",
        "placement": 7
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 17
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 40,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 25
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 12,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 12,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 10,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 7,
        "losses": 7,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 10,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 4,
        "losses": 2,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Switches to Fox for difficult Ice Climbers matchups like Peach.",
      "preferredStages": [
        "Final Destination",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Dominik 'Nicki' Franke is Europe's finest Ice Climbers and Fox dual-threat, representing Germany on the world stage with creative desync combos.",
    "funFacts": [
      "#1 Ice Climbers in Europe",
      "Top competitor in multiple fighting games",
      "Famous for hand-offs and secondary Fox counterpicks"
    ],
    "playstyle": "Calculated desync Ice Climbers with a clean secondary Fox for difficult Peach/floaty matchups.",
    "glicko": {
      "rating": 1757,
      "rd": 64,
      "volatility": 0.063,
      "confidenceInterval": "1629 – 1885"
    },
    "telemetry": {
      "connectCode": "NICK#0",
      "apm": 327,
      "lCancelPct": 92,
      "openingsPerKill": 2.61,
      "neutralWinPct": 51.3,
      "avgKillPct": 84,
      "sampleMatchesParsed": 156
    }
  },
  {
    "rank": 41,
    "tag": "Mekk",
    "realName": "Connor Desai",
    "region": "Chicago, USA",
    "characters": [
      "Captain Falcon",
      "Ganondorf"
    ],
    "winRate": 0.63,
    "recentPlacements": [
      {
        "tournament": "Out of the Blue 5",
        "date": "2026-03-28",
        "placement": 7
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 41,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48 / Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 24
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 11,
        "losses": 10,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 12,
        "losses": 8,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 8,
        "losses": 9,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 9,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 7,
        "losses": 8,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 9,
        "losses": 6,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 6,
        "losses": 6,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Heart-and-soul Captain Falcon with rare Ganondorf disrespect counterpicks.",
      "preferredStages": [
        "Battlefield",
        "Dream Land 64"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Connor 'Mekk' Desai is a fan-favorite Falcon player from Chicago celebrated for his infectious energy, deep love of the character, and fearless offstage play.",
    "funFacts": [
      "Famously streamed 24-hour Melee marathons for community charity",
      "Known for going for styling knee finishes over optimal play",
      "One of Chicago's most celebrated competitors"
    ],
    "playstyle": "Aggressive, high-flying Captain Falcon. Fast aerial movement, deep knee reads, and crowd-pleasing style.",
    "glicko": {
      "rating": 1747,
      "rd": 65,
      "volatility": 0.0632,
      "confidenceInterval": "1617 – 1877"
    },
    "telemetry": {
      "connectCode": "MEKK#0",
      "apm": 351,
      "lCancelPct": 94.8,
      "openingsPerKill": 2.93,
      "neutralWinPct": 54.1,
      "avgKillPct": 91,
      "sampleMatchesParsed": 152
    }
  },
  {
    "rank": 42,
    "tag": "Lunar Dusk",
    "realName": "Jeremy Wu",
    "region": "Ontario, Canada",
    "characters": [
      "Ice Climbers"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 9
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 17
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 33
      }
    ],
    "majorWins": [
      {
        "tournament": "GOML 2026 (Upset Jmook)",
        "date": "2026-08-02",
        "vodUrl": "https://www.youtube.com/results?search_query=Lunar+Dusk+GOML+2026"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 42,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48 / Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 23
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 10,
        "losses": 9,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 10,
        "losses": 7,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 9,
        "losses": 7,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 9,
        "losses": 7,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 7,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 7,
        "losses": 6,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 3,
        "losses": 2,
        "tendency": "neutral"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Desync setups with Nana protection.",
      "preferredStages": [
        "Final Destination",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Jeremy 'Lunar Dusk' Wu is a Canadian Ice Climbers talent who caused the upset of the tournament at GOML 2026 by eliminating Jmook with surgical desyncs.",
    "funFacts": [
      "Eliminated supermajor champion Jmook at GOML 2026",
      "Key figure in the rising Canadian Ice Climbers meta",
      "Renowned for calm execution in chaotic scramble situations"
    ],
    "playstyle": "Intricate desync Ice Climbers with clinical Nana hand-offs and blizzard ledgetraps.",
    "glicko": {
      "rating": 1738,
      "rd": 65,
      "volatility": 0.0634,
      "confidenceInterval": "1608 – 1868"
    },
    "telemetry": {
      "connectCode": "DUSK#0",
      "apm": 321,
      "lCancelPct": 92.1,
      "openingsPerKill": 2.46,
      "neutralWinPct": 50.7,
      "avgKillPct": 86,
      "sampleMatchesParsed": 149
    }
  },
  {
    "rank": 43,
    "tag": "2rain",
    "realName": "David Rain",
    "region": "Washington, USA",
    "characters": [
      "Falco"
    ],
    "winRate": 0.63,
    "recentPlacements": [
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 17
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 33
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 43,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48 / Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 22
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 10,
        "losses": 9,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 7,
        "losses": 5,
        "tendency": "neutral"
      },
      "Marth": {
        "wins": 8,
        "losses": 7,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 6,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 5,
        "losses": 7,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 7,
        "losses": 5,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 6,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Pacific Northwest Falco with patient laser spacing.",
      "preferredStages": [
        "Battlefield",
        "Yoshi's Story"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "David '2rain' is the Pacific Northwest's top Falco player, known for consistent out-of-region bracket runs and laser spacing.",
    "funFacts": [
      "Dominant regional competitor in Seattle and Vancouver",
      "Consistent major bracket qualifier",
      "Known for clean laser-height variation"
    ],
    "playstyle": "Methodical Falco neutral with tight laser spacing and reliable pillar combo punishes.",
    "glicko": {
      "rating": 1729,
      "rd": 66,
      "volatility": 0.0636,
      "confidenceInterval": "1597 – 1861"
    },
    "telemetry": {
      "connectCode": "RAIN#0",
      "apm": 381,
      "lCancelPct": 95.4,
      "openingsPerKill": 3.07,
      "neutralWinPct": 55.3,
      "avgKillPct": 101,
      "sampleMatchesParsed": 145
    }
  },
  {
    "rank": 44,
    "tag": "Khryke",
    "realName": "Cyril Khryke",
    "region": "France / Europe",
    "characters": [
      "Marth"
    ],
    "winRate": 0.64,
    "recentPlacements": [
      {
        "tournament": "Fête 3",
        "date": "2024-07-14",
        "placement": 9
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 33
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 44,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 48 / Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 21
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 11,
        "losses": 8,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 12,
        "losses": 6,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 6,
        "losses": 4,
        "tendency": "strong"
      },
      "Sheik": {
        "wins": 8,
        "losses": 7,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 7,
        "losses": 7,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 6,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "French Marth spacing with lethal chaingrabs on Final Destination.",
      "preferredStages": [
        "Final Destination",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Dream Land 64"
      ]
    },
    "bio": "Cyril 'Khryke' is France's premier Marth competitor and one of Europe's top talents, boasting a lethal space animal matchup.",
    "funFacts": [
      "#1 Marth player in France",
      "Top 10 ranked in Europe",
      "Master of the Marth-Fox chaingrab on Final Destination"
    ],
    "playstyle": "Elegant European Marth. Crisp dash dancing, tipper spacing, and punishing ledge traps.",
    "glicko": {
      "rating": 1720,
      "rd": 67,
      "volatility": 0.0638,
      "confidenceInterval": "1586 – 1854"
    },
    "telemetry": {
      "connectCode": "KHRY#0",
      "apm": 344,
      "lCancelPct": 96.9,
      "openingsPerKill": 3.27,
      "neutralWinPct": 59.3,
      "avgKillPct": 101,
      "sampleMatchesParsed": 142
    }
  },
  {
    "rank": 45,
    "tag": "Bbatts",
    "realName": "Brian Batterton",
    "region": "New Jersey, USA",
    "characters": [
      "Peach"
    ],
    "winRate": 0.63,
    "recentPlacements": [
      {
        "tournament": "The Big Shorten",
        "date": "2026-10-10",
        "placement": 7
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      },
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 17
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 45,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 20
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 11,
        "losses": 9,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 10,
        "losses": 7,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 8,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 7,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 5,
        "losses": 8,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 4,
        "losses": 3,
        "tendency": "neutral"
      },
      "Captain Falcon": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 7,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Aggressive Tristate Peach turnip pressure.",
      "preferredStages": [
        "Dream Land 64",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Pokémon Stadium"
      ]
    },
    "bio": "Brian 'Bbatts' Batterton is a New Jersey Peach specialist renowned for relentless turnip pressure and crouch-cancel down-smash counters.",
    "funFacts": [
      "Anchor of the competitive New Jersey scene",
      "Famous for turning bad situations around with clutch down-smashes",
      "Regularly places deep at regional majors"
    ],
    "playstyle": "Turnip-heavy Peach with aggressive ground movement and tight crouch-cancel defense.",
    "glicko": {
      "rating": 1711,
      "rd": 67,
      "volatility": 0.064,
      "confidenceInterval": "1577 – 1845"
    },
    "telemetry": {
      "connectCode": "BBAT#0",
      "apm": 298,
      "lCancelPct": 97,
      "openingsPerKill": 3.76,
      "neutralWinPct": 53.6,
      "avgKillPct": 113,
      "sampleMatchesParsed": 138
    }
  },
  {
    "rank": 46,
    "tag": "Faust",
    "realName": "Charles-Antoine Faust",
    "region": "Quebec, Canada",
    "characters": [
      "Jigglypuff"
    ],
    "winRate": 0.64,
    "recentPlacements": [
      {
        "tournament": "Get On My Level 2026",
        "date": "2026-08-02",
        "placement": 13
      },
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 24
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 33
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 46,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 19
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 10,
        "losses": 9,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 11,
        "losses": 5,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 8,
        "losses": 7,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 9,
        "losses": 5,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 3,
        "losses": 3,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 8,
        "losses": 3,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 7,
        "losses": 5,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 7,
        "losses": 2,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "Canadian Puff with disciplined spacing.",
      "preferredStages": [
        "Dream Land 64"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Charles-Antoine 'Faust' is Quebec's greatest Jigglypuff competitor and one of Canada's most consistent tournament threats.",
    "funFacts": [
      "#1 Jigglypuff in Canada",
      "Known for surgical back-air walls and clutch up-air rest confirms",
      "Speaks fluent French and English"
    ],
    "playstyle": "Classic wall-of-pain Jigglypuff with patient spacing and lethal rest punishes.",
    "glicko": {
      "rating": 1702,
      "rd": 68,
      "volatility": 0.0642,
      "confidenceInterval": "1566 – 1838"
    },
    "telemetry": {
      "connectCode": "FAUS#0",
      "apm": 251,
      "lCancelPct": 91.4,
      "openingsPerKill": 2.87,
      "neutralWinPct": 52.9,
      "avgKillPct": 77,
      "sampleMatchesParsed": 134
    }
  },
  {
    "rank": 47,
    "tag": "Flash",
    "realName": "Ryota Tanaka",
    "region": "Japan",
    "characters": [
      "Fox",
      "Sheik"
    ],
    "winRate": 0.65,
    "recentPlacements": [
      {
        "tournament": "Battle of BC 8",
        "date": "2026-06-07",
        "placement": 13
      },
      {
        "tournament": "KVOxTSB 2025",
        "date": "2025-05-04",
        "placement": 1
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 33
      }
    ],
    "majorWins": [
      {
        "tournament": "KVOxTSB (Japan Major)",
        "date": "2025-05-04",
        "vodUrl": "https://www.youtube.com/results?search_query=Flash+Melee+Japan"
      }
    ],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 47,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 18
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 11,
        "losses": 8,
        "tendency": "strong"
      },
      "Falco": {
        "wins": 11,
        "losses": 6,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 8,
        "losses": 7,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 6,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 6,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 8,
        "losses": 4,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 7,
        "losses": 4,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 6,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": false,
      "counterpicks": "Japanese dual-main Fox/Sheik veteran with deep tech experience.",
      "preferredStages": [
        "Battlefield",
        "Pokémon Stadium"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Ryota 'Flash' Tanaka is a legendary Japanese competitor who has competed across multiple eras with brilliant Fox and Sheik execution.",
    "funFacts": [
      "One of the longest-standing active Japanese Melee veterans",
      "Has won premier events in Tokyo and Osaka",
      "Known for unique Japanese movement tech"
    ],
    "playstyle": "Calculated Japanese style with fastFox platform wavelands and versatile Sheik chaingrabs.",
    "glicko": {
      "rating": 1693,
      "rd": 69,
      "volatility": 0.0644,
      "confidenceInterval": "1555 – 1831"
    },
    "telemetry": {
      "connectCode": "FLSH#0",
      "apm": 384,
      "lCancelPct": 95,
      "openingsPerKill": 3.09,
      "neutralWinPct": 57.5,
      "avgKillPct": 98,
      "sampleMatchesParsed": 131
    }
  },
  {
    "rank": 48,
    "tag": "Gahtzu",
    "realName": "Jason Diehl",
    "region": "Florida, USA",
    "characters": [
      "Captain Falcon"
    ],
    "winRate": 0.63,
    "recentPlacements": [
      {
        "tournament": "CEO 2026",
        "date": "2026-08-16",
        "placement": 13
      },
      {
        "tournament": "Riptide 2026",
        "date": "2026-09-13",
        "placement": 17
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 48,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 17
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 10,
        "losses": 9,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 11,
        "losses": 6,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 7,
        "losses": 8,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 7,
        "losses": 8,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 6,
        "losses": 7,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 5,
        "losses": 5,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 7,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "20GX founder with optimal tech chases.",
      "preferredStages": [
        "Battlefield",
        "Dream Land 64"
      ],
      "bannedStages": [
        "Final Destination"
      ]
    },
    "bio": "Jason 'Gahtzu' Diehl is a founding pioneer of the 20GX movement alongside Wizzrobe, proving that Captain Falcon could be played with optimal reaction tech-chases.",
    "funFacts": [
      "Co-founder of the historic 20GX Falcon research group",
      "Veteran Florida powerhouse",
      "Known for immaculate tech-chasing discipline"
    ],
    "playstyle": "Disciplined 20GX Falcon. Reaction tech-chase regrabs, defensive drift, and stomp-knee punishes.",
    "glicko": {
      "rating": 1684,
      "rd": 70,
      "volatility": 0.0646,
      "confidenceInterval": "1544 – 1824"
    },
    "telemetry": {
      "connectCode": "GAHT#0",
      "apm": 349,
      "lCancelPct": 94.7,
      "openingsPerKill": 2.91,
      "neutralWinPct": 52.5,
      "avgKillPct": 97,
      "sampleMatchesParsed": 127
    }
  },
  {
    "rank": 49,
    "tag": "Khalid",
    "realName": "Khalid Al-Haidari",
    "region": "SoCal, USA",
    "characters": [
      "Jigglypuff"
    ],
    "winRate": 0.63,
    "recentPlacements": [
      {
        "tournament": "Pat's House 5",
        "date": "2026-05-03",
        "placement": 13
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 24
      },
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 49,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 16
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 9,
        "losses": 9,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 10,
        "losses": 5,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 7,
        "losses": 6,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 8,
        "losses": 5,
        "tendency": "strong"
      },
      "Jigglypuff": {
        "wins": 3,
        "losses": 3,
        "tendency": "neutral"
      },
      "Peach": {
        "wins": 7,
        "losses": 3,
        "tendency": "strong"
      },
      "Captain Falcon": {
        "wins": 6,
        "losses": 5,
        "tendency": "neutral"
      },
      "Ice Climbers": {
        "wins": 6,
        "losses": 2,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "SoCal Puff neutral control.",
      "preferredStages": [
        "Dream Land 64"
      ],
      "bannedStages": [
        "Yoshi's Story"
      ]
    },
    "bio": "Khalid Al-Haidari is Southern California's premier Jigglypuff threat, taking names in stacked SoCal weeklies and majors.",
    "funFacts": [
      "Top ranked Puff in Southern California",
      "Known for his patience against aggressive spacies",
      "Frequently upsets top 20 seeds at majors"
    ],
    "playstyle": "Defensive, patient Jigglypuff with tactical back-airs and lethal rest punishes.",
    "glicko": {
      "rating": 1675,
      "rd": 70,
      "volatility": 0.0648,
      "confidenceInterval": "1535 – 1815"
    },
    "telemetry": {
      "connectCode": "KHAL#0",
      "apm": 239,
      "lCancelPct": 91.7,
      "openingsPerKill": 2.7,
      "neutralWinPct": 52.4,
      "avgKillPct": 74,
      "sampleMatchesParsed": 124
    }
  },
  {
    "rank": 50,
    "tag": "Wally",
    "realName": "Walter C.",
    "region": "Massachusetts, USA",
    "characters": [
      "Peach"
    ],
    "winRate": 0.62,
    "recentPlacements": [
      {
        "tournament": "Supernova 2026",
        "date": "2026-08-09",
        "placement": 24
      },
      {
        "tournament": "The Big Shorten",
        "date": "2026-10-10",
        "placement": 9
      },
      {
        "tournament": "GENESIS X3",
        "date": "2026-02-15",
        "placement": 33
      }
    ],
    "majorWins": [],
    "upcomingTournament": {
      "name": "GENESIS 11 (Winter Supermajor)",
      "date": "Feb 19-21, 2027",
      "location": "San Jose, CA",
      "seed": 50,
      "totalEntrants": 1024,
      "expectedPlacement": "Top 64",
      "projectedOpponents": [
        {
          "round": "Winners Round 1",
          "name": "Pool Qualifier",
          "seed": 15
        }
      ]
    },
    "matchupRecord": {
      "Fox": {
        "wins": 9,
        "losses": 8,
        "tendency": "neutral"
      },
      "Falco": {
        "wins": 9,
        "losses": 6,
        "tendency": "strong"
      },
      "Marth": {
        "wins": 7,
        "losses": 7,
        "tendency": "neutral"
      },
      "Sheik": {
        "wins": 7,
        "losses": 6,
        "tendency": "neutral"
      },
      "Jigglypuff": {
        "wins": 4,
        "losses": 7,
        "tendency": "weak"
      },
      "Peach": {
        "wins": 4,
        "losses": 3,
        "tendency": "neutral"
      },
      "Captain Falcon": {
        "wins": 7,
        "losses": 4,
        "tendency": "strong"
      },
      "Ice Climbers": {
        "wins": 6,
        "losses": 3,
        "tendency": "strong"
      }
    },
    "counterpickStrategy": {
      "staysMain": true,
      "counterpicks": "New England Peach float-cancel master.",
      "preferredStages": [
        "Dream Land 64",
        "Fountain of Dreams"
      ],
      "bannedStages": [
        "Pokémon Stadium"
      ]
    },
    "bio": "Walter 'Wally' C. is a prominent Peach competitor from Massachusetts, known for crisp float cancels, crafty turnips, and solid mental resilience.",
    "funFacts": [
      "Top 3 ranked player in New England",
      "Known for sharp turnaround float-aerials",
      "Regular competitor at Northeast regional tournaments"
    ],
    "playstyle": "Low-float Peach aggression combined with patient turnip spacing and crouch-cancel punishes.",
    "glicko": {
      "rating": 1667,
      "rd": 71,
      "volatility": 0.065,
      "confidenceInterval": "1525 – 1809"
    },
    "telemetry": {
      "connectCode": "WALL#0",
      "apm": 298,
      "lCancelPct": 97.1,
      "openingsPerKill": 3.67,
      "neutralWinPct": 54.2,
      "avgKillPct": 116,
      "sampleMatchesParsed": 120
    }
  }
];
