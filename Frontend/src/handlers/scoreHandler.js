export default class ScoreHandler {
  constructor() {
    this.DBWOScore = [];
    this.isLocalStorageAvailable = null;
    this.keyData = "DBWOScore";
    this.bestScore = {};
  }

  setup = (bestScoreConfig) => {
    // Create schema DB Best score and set 0 for every entity
    this.bestScore = {};
    bestScoreConfig.nameWorkout.forEach((workout) => {
      this.bestScore[workout] = {};
      bestScoreConfig.duration.forEach((dur) => {
        this.bestScore[workout][dur] = 0;
      });
    });

    if (typeof localStorage === "undefined") {
      this.isLocalStorageAvailable = false;
      // eslint-disable-next-line no-alert
      alert("Warning! Local storage unavailable. Please use newest browser");
      return;
    }
    this.isLocalStorageAvailable = true;
    const DBWOScoreStringify = localStorage.getItem(this.keyData);
    if (DBWOScoreStringify !== null) {
      this.DBWOScore = JSON.parse(DBWOScoreStringify);
    } else {
      this.saveToLocalStorage();
    }
  };

  saveToLocalStorage = () => {
    if (this.isLocalStorageAvailable) {
      localStorage.setItem(this.keyData, JSON.stringify(this.DBWOScore));
    }
  };

  addNewData = (inputData) => {
    const newScore = {
      id: +new Date(),
      nameWorkout: inputData.nameWorkout,
      duration: inputData.duration,
      repetition: inputData.repetition,
      date: new Date().toLocaleString(),
    };
    this.DBWOScore.push({
      id: +new Date(),
      nameWorkout: inputData.nameWorkout,
      duration: inputData.duration,
      repetition: inputData.repetition,
      date: new Date().toLocaleString(),
    });

    let emailId= "abc@gmail.com";
    emailId = localStorage.getItem("uid");
    const data = { emailId, newScore };

    fetch('http://18.191.116.75:5000/exercise/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });


    this.saveToLocalStorage();
  };

  getBestScoreByReps = () => {
    if (Object.keys(this.bestScore).length === 0) return {};
    // Search maximum score with compare each other
    this.DBWOScore.forEach((dataWO) => {
      if (
        this.bestScore[dataWO.nameWorkout][dataWO.duration] === 0 ||
        dataWO.repetition >= this.bestScore[dataWO.nameWorkout][dataWO.duration]
      ) {
        this.bestScore[dataWO.nameWorkout][dataWO.duration] = dataWO.repetition;
      }
    });
    return this.bestScore;
  };
}
