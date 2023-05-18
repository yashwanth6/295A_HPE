export default class SettingsHandler {
  constructor() {
    this.DBWOSettings = {};
    this.isGetPrevSettings = false;
    this.isLocalStorageAvailable = null;
    this.keyData = "DBWOSettings";
  }

  setup = (settingsConfig, actionInit) => {
    if (Object.keys(this.DBWOSettings).length !== 0) return;
    if (typeof localStorage === "undefined") {
      // eslint-disable-next-line no-alert
      alert("Warning! Local storage unavailable. Please use newest browser");
      return;
    }
    this.isLocalStorageAvailable = true;
    const DBWOSettingsStringify = localStorage.getItem(this.keyData);
    if (DBWOSettingsStringify !== null) {
      const data = JSON.parse(DBWOSettingsStringify);
      // Only changing when it has previous settings
      if (data.currWorkout !== "None") {
        this.isGetPrevSettings = true;
        this.change(data, actionInit);
        this.saveToDatabase();
      }
    } else {
      this.DBWOSettings = settingsConfig;
      this.saveToLocalStorage();
      this.saveToDatabase();
    }
  };

  saveToLocalStorage = () => {
    if (this.isLocalStorageAvailable) {
      localStorage.setItem(this.keyData, JSON.stringify(this.DBWOSettings));
    }
  };

  saveToDatabase = () => {
    fetch('http://18.191.166.16:5000/exercise/settingsChange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.DBWOSettings),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  getEffectChange = (afterConfig, actionCB) => {
    // Assign DBWOSettings to beforeConfig
    // Prevent DBWOsettings changing while doing getEffectChange
    const beforeConfig = this.DBWOSettings;
    const isInitial = Object.keys(beforeConfig).length === 0;
    Object.keys(actionCB).forEach((setting) => {
      // currWorkout (async) and currDuration (sync) are dependence each other
      // To prevent error, we need to integrate them to currWorkoutDuration
      if (
        setting === "currWorkoutDuration" &&
        (afterConfig.currWorkout !== beforeConfig.currWorkout ||
          afterConfig.currDuration !== beforeConfig.currDuration ||
          (isInitial && this.isGetPrevSettings))
      ) {
        actionCB[setting]({
          nameWO: {
            isChange: isInitial
              ? afterConfig.currWorkout
              : afterConfig.currWorkout !== beforeConfig.currWorkout,
            value: afterConfig.currWorkout,
          },
          durationWO: {
            isChange: isInitial
              ? afterConfig.currDuration
              : afterConfig.currDuration !== beforeConfig.currDuration,
            value: afterConfig.currDuration,
          },
        });
        return;
      }
      if (
        (isInitial && this.isGetPrevSettings) ||
        afterConfig[setting] !== beforeConfig[setting]
      ) {
        actionCB[setting](afterConfig[setting]);
      }
    });
  };

  change = (obsConfig, actionCB = {}) => {
    const obsConfigSettings = {
      ...this.DBWOSettings,
      ...obsConfig,
    };
    this.getEffectChange(obsConfigSettings, actionCB);
    this.DBWOSettings = obsConfigSettings;
    this.saveToLocalStorage();
  };
}
