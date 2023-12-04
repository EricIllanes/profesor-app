 export const  scheduleProfessor = (data)=> {
  const totalMinutes = data.contractHours * 60;
  const totalLectures = Math.round(
    (totalMinutes * (data.classHours / 100)) / data.durationClass
  );
  const totalPlanification = Math.round(
    (totalMinutes - totalLectures*60) /60
  );

  const response = {
    totalMinutes,
    totalLectures,
    totalPlanification,
  };

  return response;
}
 

export const scrollingFunction = (toWhere)=>{
document.getElementById(toWhere).scrollIntoView({behavior:'smooth'})
}

export const totalHoursWorked = (
  startMorning,
  exitMorning,
  startAfternoon,
  exitAfternoon
) => {
  const startMorningValue = startMorning.split(":").map(Number);
  const exitMorningValue = exitMorning.split(":").map(Number);
  const startAfternoonValue = startAfternoon !== "" ? startAfternoon.split(":").map(Number) : [0,0]
  const exitAfternoonValue = exitAfternoon !=="" ? exitAfternoon.split(":").map(Number) : [0,0]
  const startMorningTime = startMorningValue[0] * 60 + startMorningValue[1];
  const exitMorningTime = exitMorningValue[0] * 60 + exitMorningValue[1];
  const startAfternoonTime =
    startAfternoonValue[0] * 60 + startAfternoonValue[1];
  const exitAfternoonTime =
    exitAfternoonValue[0] * 60 + exitAfternoonValue[1];

  const timeWorked =
    exitMorningTime -
    startMorningTime +
    (exitAfternoonTime - startAfternoonTime);
  let hoursWorked;

  if (timeWorked % 60 === 0) {
    const totalHours = timeWorked / 60;
    totalHours < 10
      ? (hoursWorked = `0${totalHours}:00`)
      : (hoursWorked = `${totalHours}:00`);
  } else {
    const integer = Math.floor(timeWorked / 60);
    const rest = timeWorked - integer * 60;
    if (integer < 10 && rest < 10) {
      hoursWorked = `0${integer}:0${rest}`;
    } else if (integer < 10 && rest >= 10) {
      hoursWorked = `0${integer}:${rest}`;
    } else if (integer >= 10 && rest < 10) {
      hoursWorked = `${integer}:0${rest}`;
    } else if (integer >= 10 && rest >= 10) {
      hoursWorked = `${integer}:${rest}`;
    }
  }
  return hoursWorked;
};

export const totalWeeklyHours = (hours) => {
  const arreglin = Object.values(hours);

  let acum = 0;
  let minutes = 0;
  for (const hours of arreglin) {
    const horas = totalHoursWorked(
      hours.startMorning,
      hours.exitMorning,
      hours.startAfternoon,
      hours.exitAfternoon
    );
    let responseToArray = horas.split(":").map(Number);
    minutes = responseToArray[0] * 60 + responseToArray[1];
    acum += minutes;
  }
  let hoursWorked;

  if (acum % 60 === 0) {
    const totalHours = acum / 60;
    totalHours < 10
      ? (hoursWorked = `0${totalHours}:00`)
      : (hoursWorked = `${totalHours}:00`);
  } else {
    const integer = Math.floor(acum / 60);
    const rest = acum - integer * 60;
    if (integer < 10 && rest < 10) {
      hoursWorked = `0${integer}:0${rest}`;
    } else if (integer < 10 && rest >= 10) {
      hoursWorked = `0${integer}:${rest}`;
    } else if (integer >= 10 && rest < 10) {
      hoursWorked = `${integer}:0${rest}`;
    } else if (integer >= 10 && rest >= 10) {
      hoursWorked = `${integer}:${rest}`;
    }
  }

  return hoursWorked;
};