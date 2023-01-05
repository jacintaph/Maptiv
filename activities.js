"use strict";

export class Activity {
  date = new Date();
  result = this.date.toLocaleDateString("en-AU", {
    // you can use undefined as first argument
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration, heartRate) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.heartRate = heartRate;
  }

  _setDescription() {
    this.html = `<img
    class="icon--popup"
    src="./img/${this.type}.png"
  />`;
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} ${
      this.result
    } `;
    console.log(this.html);
  }

  _calcPace() {
    if (this.duration || this.distance <= 0) this.pace = 0;
    else this.pace = this.duration / this.distance;
    console.log(this.pace.toFixed(2));
    return this.pace;
  }
}

export class Walk extends Activity {
  type = "walk";
  constructor(coords, distance, duration, heartRate, steps, speed, elevation) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this.speed = speed;
    this.elevation = elevation;
    this._calcPace();
    this._setDescription();
  }
}

export class Run extends Activity {
  type = "run";
  constructor(coords, distance, duration, heartRate, steps, speed, elevation) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this.speed = speed;
    this.elevation = this.elevation;
    this._calcPace();
    this._setDescription();
  }
}

export class Cycle extends Activity {
  type = "cycle";
  constructor(coords, distance, duration, heartRate, speed, elevation) {
    super(coords, distance, duration, heartRate);
    this.speed = speed;
    this.elevation = elevation;
    this._calcPace();
    this._setDescription();
  }
}

export class Swim extends Activity {
  type = "swim";
  constructor(coords, distance, duration, heartRate, speed) {
    super(coords, distance, duration, heartRate);
    this.speed = speed;
    this._calcPace();
    this._setDescription();
  }
}

export class Kayak extends Activity {
  type = "kayak";
  constructor(coords, distance, duration, heartRate, strokeRate, speed) {
    super(coords, distance, duration, heartRate);
    this.strokeRate = strokeRate;
    this.speed = speed;
    this._calcPace();
    this._setDescription();
  }
}

export class Row extends Activity {
  type = "row";
  constructor(coords, distance, duration, heartRate, strokeRate, speed) {
    super(coords, distance, duration, heartRate);
    this.strokeRate = strokeRate;
    this.speed = speed;
    this._calcPace();
    this._setDescription();
  }
}

export class Ski extends Activity {
  type = "ski";
  constructor(coords, distance, duration, heartRate, speed) {
    super(coords, distance, duration, heartRate);
    this.speed = speed;
    this._calcPace();
    this._setDescription();
  }
}
export class Skate extends Activity {
  type = "skate";
  constructor(coords, distance, duration, heartRate, speed) {
    super(coords, distance, duration, heartRate);
    this.speed = speed;
    this._calcPace();
    this._setDescription();
  }
}

export class Football extends Activity {
  type = "football";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Gym extends Activity {
  type = "gym";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Rugby extends Activity {
  type = "rugby";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Tennis extends Activity {
  type = "tennis";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Basketball extends Activity {
  type = "basketball";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Boxing extends Activity {
  type = "boxing";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Hockey extends Activity {
  type = "hockey";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Golf extends Activity {
  type = "golf";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Waterpolo extends Activity {
  type = "waterpolo";
  constructor(coords, distance, duration, heartRate) {
    super(coords, distance, duration, heartRate);
    this._setDescription();
  }
}

export class Cricket extends Activity {
  type = "cricket";
  constructor(coords, distance, duration, heartRate, steps) {
    super(coords, distance, duration, heartRate);
    this.steps = steps;
    this._setDescription();
  }
}

export class Sailing extends Activity {
  type = "sailing";
  constructor(coords, distance, duration, heartRate, speedKnots) {
    super(coords, distance, duration, heartRate);
    this.speedKnots = speedKnots;
    this._setDescription();
  }
}

export class Other extends Activity {
  constructor(
    coords,
    distance,
    duration,
    heartRate,
    type,
    steps,
    elevation,
    strokeRate,
    speedKnots,
    speed
  ) {
    super(coords, distance, duration, heartRate);
    this.type = type;
    console.log("Type 2: ", this.type);
    this.steps = steps;
    this.elevation = elevation;
    this.strokeRate = strokeRate;
    this.speedKnots = speedKnots;
    this.speed = speed;
    this._calcPace();
    this._setDescription();
  }
}
