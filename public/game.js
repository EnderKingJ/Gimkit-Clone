let perquestion = 1;
let multiplier = 1;
let insurance = 1;
let boostquestion = 1;
let balance = 0;

function questionupgrade(level) {
if (level ==  2) {
  perquestion = 5
} else if (level == 3) {
  perquestion = 10
} else if (level == 4) {
  perquestion = 50
} else if (level == 5) {
  perquestion = 100
} else if (level == 6) {
  perquestion = 1000
} else if (level == 7) {
  perquestion = 5000
} else if (level == 8) {
  perquestion = 10000
}
}

function multiplierupgrade(level) {
if (level ==  2) {
  multiplier = 1.25
} else if (level == 3) {
  multiplier = 1.5
} else if (level == 4) {
  multiplier = 2
} else if (level == 5) {
  multiplier = 3
} else if (level == 6) {
  multiplier = 5
} else if (level == 7) {
  multiplier = 10
} else if (level == 8) {
  multiplier = 15
}
}

function insuranceupgrade(level) {
if (level ==  2) {
  insurance = 0.9
} else if (level == 3) {
  insurance = 0.8
} else if (level == 4) {
  insurance = 0.7
} else if (level == 5) {
  insurance = 0.5
} else if (level == 6) {
  insurance = 0.4
} else if (level == 7) {
  insurance = 0.25
} else if (level == 8) {
  insurance = 0.2
}
}

function boostupgrade(level) {
if (level ==  2) {
  boostquestion = 3
} else if (level == 3) {
  boostquestion = 5
} else if (level == 4) {
  boostquestion = 10
} else if (level == 5) {
  boostquestion = 50
} else if (level == 6) {
  boostquestion = 100
} else if (level == 7) {
  boostquestion = 500
} else if (level == 8) {
  boostquestion = 1000
}
}

function questionright(streak) {
var togive = perquestion+(streak*boostquestion)*multiplier
balance = (balance*1) + (togive*1)
}

function questionwrong() {

}