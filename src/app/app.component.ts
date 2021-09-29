import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public flag = false;
  title = 'calendar';
  public dateObj  = {
    "name": "Premier League 2019/20",
    "matches": [
      {
        "round": "Matchday 1",
        "date": "2019-08-09",
        "team1": "Liverpool FC",
        "team2": "Norwich City FC",
        "score": {
          "ft": [
            4,
            1
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-10",
        "team1": "West Ham United FC",
        "team2": "Manchester City FC",
        "score": {
          "ft": [
            0,
            5
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-10",
        "team1": "Burnley FC",
        "team2": "Southampton FC",
        "score": {
          "ft": [
            3,
            0
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-10",
        "team1": "AFC Bournemouth",
        "team2": "Sheffield United FC",
        "score": {
          "ft": [
            1,
            1
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-10",
        "team1": "Crystal Palace FC",
        "team2": "Everton FC",
        "score": {
          "ft": [
            0,
            0
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-10",
        "team1": "Watford FC",
        "team2": "Brighton & Hove Albion FC",
        "score": {
          "ft": [
            0,
            3
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-10",
        "team1": "Tottenham Hotspur FC",
        "team2": "Aston Villa FC",
        "score": {
          "ft": [
            3,
            1
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-11",
        "team1": "Leicester City FC",
        "team2": "Wolverhampton Wanderers FC",
        "score": {
          "ft": [
            0,
            0
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2019-08-11",
        "team1": "Newcastle United FC",
        "team2": "Arsenal FC",
        "score": {
          "ft": [
            0,
            1
          ]
        }
      },
      {
        "round": "Matchday 1",
        "date": "2021-09-28",
        "team1": "Manchester United FC",
        "team2": "Chelsea FC",
        "score": {
          "ft": [
            4,
            0
          ]
        }
      },
      {
        "round": "Matchday 2",
        "date": "2021-10-31",
        "team1": "Arsenal FC",
        "team2": "Burnley FC",
        "score": {
          "ft": [
            2,
            1
          ]
        }
      },
      {
        "round": "Matchday 2",
        "date": "2021-10-05",
        "team1": "Everton FC",
        "team2": "Watford FC",
        "score": {
          "ft": [
            1,
            0
          ]
        }
      },
      {
        "round": "Matchday 2",
        "date": "2021-09-01",
        "team1": "Brighton & Hove Albion FC",
        "team2": "West Ham United FC",
        "score": {
          "ft": [
            1,
            1
          ]
        }
      },
      {
        "round": "Matchday 2",
        "date": "2021-09-01",
        "team1": "Aston Villa FC",
        "team2": "AFC Bournemouth",
        "score": {
          "ft": [
            1,
            2
          ]
        }
      },
      {
        "round": "Matchday 2",
        "date": "2021-09-05",
        "team1": "Norwich City FC",
        "team2": "Newcastle United FC",
        "score": {
          "ft": [
            3,
            1
          ]
        }
      },
      {
        "round": "Matchday 2",
        "date": "2021-09-15",
        "team1": "Southampton FC",
        "team2": "Liverpool FC",
        "score": {
          "ft": [
            1,
            2
          ]
        }
      },
    ]
  };

  ngOnInit(): void {
  }
}
