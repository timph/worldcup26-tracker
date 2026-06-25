const rawData = require("./api.json")

let fixtures = [
    // ===== MATCHDAY 1 =====
    { id: 1, date: "06/11/2026", time: "13:00", home: "Mexico", away: "South Africa", homeScore: 2, awayScore: 0, status: "finished", group: "A", stadiumId: "1" },
    { id: 2, date: "06/11/2026", time: "20:00", home: "South Korea", away: "Czech Republic", homeScore: 2, awayScore: 1, status: "finished", group: "A", stadiumId: "2" },
    { id: 3, date: "06/12/2026", time: "15:00", home: "Canada", away: "Bosnia and Herzegovina", homeScore: 1, awayScore: 1, status: "finished", group: "B", stadiumId: "12" },
    { id: 4, date: "06/12/2026", time: "18:00", home: "United States", away: "Paraguay", homeScore: 4, awayScore: 1, status: "finished", group: "D", stadiumId: "16" },
    { id: 5, date: "06/13/2026", time: "21:00", home: "Haiti", away: "Scotland", homeScore: 0, awayScore: 1, status: "finished", group: "C", stadiumId: "9" },
    { id: 6, date: "06/13/2026", time: "21:00", home: "Australia", away: "Turkey", homeScore: 2, awayScore: 0, status: "finished", group: "D", stadiumId: "13" },
    { id: 7, date: "06/13/2026", time: "18:00", home: "Brazil", away: "Morocco", homeScore: 1, awayScore: 1, status: "finished", group: "C", stadiumId: "11" },
    { id: 8, date: "06/13/2026", time: "12:00", home: "Qatar", away: "Switzerland", homeScore: 1, awayScore: 1, status: "finished", group: "B", stadiumId: "15" },
    { id: 9, date: "06/14/2026", time: "19:00", home: "Ivory Coast", away: "Ecuador", homeScore: 1, awayScore: 0, status: "finished", group: "E", stadiumId: "10" },
    { id: 10, date: "06/14/2026", time: "12:00", home: "Germany", away: "Curaçao", homeScore: 7, awayScore: 1, status: "finished", group: "E", stadiumId: "5" },
    { id: 11, date: "06/14/2026", time: "15:00", home: "Netherlands", away: "Japan", homeScore: 2, awayScore: 2, status: "finished", group: "F", stadiumId: "4" },
    { id: 12, date: "06/14/2026", time: "20:00", home: "Sweden", away: "Tunisia", homeScore: 5, awayScore: 1, status: "finished", group: "F", stadiumId: "3" },
    { id: 13, date: "06/15/2026", time: "18:00", home: "Iran", away: "New Zealand", homeScore: 2, awayScore: 2, status: "finished", group: "G", stadiumId: "16" },
    { id: 14, date: "06/15/2026", time: "12:00", home: "Spain", away: "Cape Verde", homeScore: 0, awayScore: 0, status: "finished", group: "H", stadiumId: "7" },
    { id: 15, date: "06/15/2026", time: "12:00", home: "Belgium", away: "Egypt", homeScore: 1, awayScore: 1, status: "finished", group: "G", stadiumId: "14" },
    { id: 16, date: "06/15/2026", time: "18:00", home: "Saudi Arabia", away: "Uruguay", homeScore: 1, awayScore: 1, status: "finished", group: "H", stadiumId: "8" },
    { id: 17, date: "06/16/2026", time: "15:00", home: "France", away: "Senegal", homeScore: 3, awayScore: 1, status: "finished", group: "I", stadiumId: "11" },
    { id: 18, date: "06/16/2026", time: "18:00", home: "Iraq", away: "Norway", homeScore: 1, awayScore: 4, status: "finished", group: "I", stadiumId: "9" },
    { id: 19, date: "06/16/2026", time: "20:00", home: "Argentina", away: "Algeria", homeScore: 3, awayScore: 0, status: "finished", group: "J", stadiumId: "6" },
    { id: 20, date: "06/16/2026", time: "21:00", home: "Austria", away: "Jordan", homeScore: 3, awayScore: 1, status: "finished", group: "J", stadiumId: "15" },
    { id: 21, date: "06/17/2026", time: "12:00", home: "Portugal", away: "Democratic Republic of the Congo", homeScore: 1, awayScore: 1, status: "finished", group: "K", stadiumId: "5" },
    { id: 22, date: "06/17/2026", time: "15:00", home: "England", away: "Croatia", homeScore: 4, awayScore: 2, status: "finished", group: "L", stadiumId: "4" },
    { id: 23, date: "06/17/2026", time: "20:00", home: "Uzbekistan", away: "Colombia", homeScore: 1, awayScore: 3, status: "finished", group: "K", stadiumId: "1" },
    { id: 24, date: "06/17/2026", time: "19:00", home: "Ghana", away: "Panama", homeScore: 1, awayScore: 0, status: "finished", group: "L", stadiumId: "12" },

    // ===== MATCHDAY 2 =====
    { id: 25, date: "06/18/2026", time: "19:00", home: "Mexico", away: "South Korea", homeScore: 0, awayScore: 0, status: "live", group: "A", stadiumId: "2" },
    { id: 26, date: "06/18/2026", time: "12:00", home: "Switzerland", away: "Bosnia and Herzegovina", homeScore: 4, awayScore: 1, status: "finished", group: "B", stadiumId: "16" },
    { id: 27, date: "06/18/2026", time: "15:00", home: "Canada", away: "Qatar", homeScore: 6, awayScore: 0, status: "finished", group: "B", stadiumId: "13" },
    { id: 28, date: "06/18/2026", time: "12:00", home: "Czech Republic", away: "South Africa", homeScore: 1, awayScore: 1, status: "finished", group: "A", stadiumId: "7" },
    { id: 31, date: "06/19/2026", time: "14:00", home: "United States", away: "Australia", homeScore: 0, awayScore: 0, status: "scheduled", group: "D", stadiumId: "14" },
    { id: 30, date: "06/19/2026", time: "17:00", home: "Scotland", away: "Morocco", homeScore: 0, awayScore: 0, status: "scheduled", group: "C", stadiumId: "9" },
    { id: 29, date: "06/19/2026", time: "19:30", home: "Brazil", away: "Haiti", homeScore: 0, awayScore: 0, status: "scheduled", group: "C", stadiumId: "10" },
    { id: 32, date: "06/19/2026", time: "22:00", home: "Turkey", away: "Paraguay", homeScore: 0, awayScore: 0, status: "scheduled", group: "D", stadiumId: "15" },
    { id: 35, date: "06/20/2026", time: "12:00", home: "Netherlands", away: "Sweden", homeScore: 0, awayScore: 0, status: "scheduled", group: "F", stadiumId: "5" },
    { id: 33, date: "06/20/2026", time: "15:00", home: "Germany", away: "Ivory Coast", homeScore: 0, awayScore: 0, status: "scheduled", group: "E", stadiumId: "12" },
    { id: 34, date: "06/20/2026", time: "19:00", home: "Ecuador", away: "Curaçao", homeScore: 0, awayScore: 0, status: "scheduled", group: "E", stadiumId: "6" },
    { id: 36, date: "06/20/2026", time: "23:00", home: "Tunisia", away: "Japan", homeScore: 0, awayScore: 0, status: "scheduled", group: "F", stadiumId: "3" },
    { id: 39, date: "06/21/2026", time: "11:00", home: "Spain", away: "Saudi Arabia", homeScore: 0, awayScore: 0, status: "scheduled", group: "H", stadiumId: "7" },
    { id: 37, date: "06/21/2026", time: "14:00", home: "Belgium", away: "Iran", homeScore: 0, awayScore: 0, status: "scheduled", group: "G", stadiumId: "16" },
    { id: 40, date: "06/21/2026", time: "17:00", home: "Uruguay", away: "Cape Verde", homeScore: 0, awayScore: 0, status: "scheduled", group: "H", stadiumId: "8" },
    { id: 38, date: "06/21/2026", time: "20:00", home: "New Zealand", away: "Egypt", homeScore: 0, awayScore: 0, status: "scheduled", group: "G", stadiumId: "13" },
    { id: 43, date: "06/22/2026", time: "12:00", home: "Argentina", away: "Austria", homeScore: 0, awayScore: 0, status: "scheduled", group: "J", stadiumId: "4" },
    { id: 41, date: "06/22/2026", time: "16:00", home: "France", away: "Iraq", homeScore: 0, awayScore: 0, status: "scheduled", group: "I", stadiumId: "10" },
    { id: 42, date: "06/22/2026", time: "19:00", home: "Norway", away: "Senegal", homeScore: 0, awayScore: 0, status: "scheduled", group: "I", stadiumId: "11" },
    { id: 44, date: "06/22/2026", time: "22:00", home: "Jordan", away: "Algeria", homeScore: 0, awayScore: 0, status: "scheduled", group: "J", stadiumId: "15" },
    { id: 45, date: "06/23/2026", time: "12:00", home: "Portugal", away: "Uzbekistan", homeScore: 0, awayScore: 0, status: "scheduled", group: "K", stadiumId: "5" },
    { id: 48, date: "06/23/2026", time: "15:00", home: "England", away: "Ghana", homeScore: 0, awayScore: 0, status: "scheduled", group: "L", stadiumId: "9" },
    { id: 46, date: "06/23/2026", time: "18:00", home: "Panama", away: "Croatia", homeScore: 0, awayScore: 0, status: "scheduled", group: "L", stadiumId: "12" },
    { id: 47, date: "06/23/2026", time: "21:00", home: "Colombia", away: "Democratic Republic of the Congo", homeScore: 0, awayScore: 0, status: "scheduled", group: "K", stadiumId: "2" },

    // ===== MATCHDAY 3 =====
    { id: 49, date: "06/24/2026", time: "18:00", home: "Scotland", away: "Brazil", homeScore: 0, awayScore: 0, status: "scheduled", group: "C", stadiumId: "8" },
    { id: 50, date: "06/24/2026", time: "18:00", home: "Morocco", away: "Haiti", homeScore: 0, awayScore: 0, status: "scheduled", group: "C", stadiumId: "7" },
    { id: 51, date: "06/24/2026", time: "19:00", home: "South Africa", away: "South Korea", homeScore: 0, awayScore: 0, status: "scheduled", group: "A", stadiumId: "3" },
    { id: 52, date: "06/24/2026", time: "19:00", home: "Czech Republic", away: "Mexico", homeScore: 0, awayScore: 0, status: "scheduled", group: "A", stadiumId: "1" },
    { id: 53, date: "06/24/2026", time: "12:00", home: "Bosnia and Herzegovina", away: "Qatar", homeScore: 0, awayScore: 0, status: "scheduled", group: "B", stadiumId: "14" },
    { id: 54, date: "06/24/2026", time: "12:00", home: "Switzerland", away: "Canada", homeScore: 0, awayScore: 0, status: "scheduled", group: "B", stadiumId: "13" },
    { id: 55, date: "06/25/2026", time: "16:00", home: "Curaçao", away: "Ivory Coast", homeScore: 0, awayScore: 0, status: "scheduled", group: "E", stadiumId: "10" },
    { id: 56, date: "06/25/2026", time: "16:00", home: "Ecuador", away: "Germany", homeScore: 0, awayScore: 0, status: "scheduled", group: "E", stadiumId: "11" },
    { id: 57, date: "06/25/2026", time: "19:00", home: "Paraguay", away: "Australia", homeScore: 0, awayScore: 0, status: "scheduled", group: "D", stadiumId: "15" },
    { id: 58, date: "06/25/2026", time: "19:00", home: "Turkey", away: "United States", homeScore: 0, awayScore: 0, status: "scheduled", group: "D", stadiumId: "16" },
    { id: 59, date: "06/25/2026", time: "18:00", home: "Japan", away: "Sweden", homeScore: 0, awayScore: 0, status: "scheduled", group: "F", stadiumId: "4" },
    { id: 60, date: "06/25/2026", time: "18:00", home: "Tunisia", away: "Netherlands", homeScore: 0, awayScore: 0, status: "scheduled", group: "F", stadiumId: "6" },
    { id: 61, date: "06/26/2026", time: "15:00", home: "Senegal", away: "Iraq", homeScore: 0, awayScore: 0, status: "scheduled", group: "I", stadiumId: "12" },
    { id: 62, date: "06/26/2026", time: "15:00", home: "Norway", away: "France", homeScore: 0, awayScore: 0, status: "scheduled", group: "I", stadiumId: "9" },
    { id: 63, date: "06/26/2026", time: "20:00", home: "Egypt", away: "Iran", homeScore: 0, awayScore: 0, status: "scheduled", group: "G", stadiumId: "14" },
    { id: 64, date: "06/26/2026", time: "20:00", home: "New Zealand", away: "Belgium", homeScore: 0, awayScore: 0, status: "scheduled", group: "G", stadiumId: "13" },
    { id: 65, date: "06/26/2026", time: "19:00", home: "Cape Verde", away: "Saudi Arabia", homeScore: 0, awayScore: 0, status: "scheduled", group: "H", stadiumId: "5" },
    { id: 66, date: "06/26/2026", time: "18:00", home: "Uruguay", away: "Spain", homeScore: 0, awayScore: 0, status: "scheduled", group: "H", stadiumId: "2" },
    { id: 67, date: "06/27/2026", time: "17:00", home: "Panama", away: "England", homeScore: 0, awayScore: 0, status: "scheduled", group: "L", stadiumId: "11" },
    { id: 68, date: "06/27/2026", time: "17:00", home: "Croatia", away: "Ghana", homeScore: 0, awayScore: 0, status: "scheduled", group: "L", stadiumId: "10" },
    { id: 69, date: "06/27/2026", time: "21:00", home: "Algeria", away: "Austria", homeScore: 0, awayScore: 0, status: "scheduled", group: "J", stadiumId: "6" },
    { id: 70, date: "06/27/2026", time: "21:00", home: "Jordan", away: "Argentina", homeScore: 0, awayScore: 0, status: "scheduled", group: "J", stadiumId: "4" },
    { id: 71, date: "06/27/2026", time: "19:30", home: "Colombia", away: "Portugal", homeScore: 0, awayScore: 0, status: "scheduled", group: "K", stadiumId: "8" },
    { id: 72, date: "06/27/2026", time: "19:30", home: "Democratic Republic of the Congo", away: "Uzbekistan", homeScore: 0, awayScore: 0, status: "scheduled", group: "K", stadiumId: "7" },

    { id: 73, date: "06/28/2026", time: "12:00", home: "Runner-up Group A", away: "Runner-up Group B", homeScore: 0, awayScore: 0, status: "scheduled", group: "R32", stadiumId: "16" },
    { id: 104, date: "07/19/2026", time: "15:00", home: "Winner Match 101", away: "Winner Match 102", homeScore: 0, awayScore: 0, status: "scheduled", group: "FINAL", stadiumId: "11" }
];

rawData.games.forEach(apiMatch => {
  const localFixture = fixtures.find(f => f.id === parseInt(apiMatch.id));
  console.log({ localFixture })
  
  if (localFixture) {
    const remoteFinished = apiMatch.time_elapsed === "finished";
    const hasStarted = apiMatch.time_elapsed !== "notstarted";

    // Parse API scores
    const newHomeScore = hasStarted ? parseInt(apiMatch.home_score, 10) : 0;
    const newAwayScore = hasStarted ? parseInt(apiMatch.away_score, 10) : 0;
    console.log({ remoteFinished, hasStarted, newHomeScore, newAwayScore })

    // Only update if scores actually changed to keep DOM stable
    if (localFixture.homeScore !== newHomeScore || localFixture.awayScore !== newAwayScore) {
      localFixture.homeScore = newHomeScore;
      localFixture.awayScore = newAwayScore;
      localFixture.status = remoteFinished ? "finished" : (hasStarted ? "live" : "scheduled");
        
      console.log({ localFixture })
    }
  }
});
