export default function scheduleProfessor(data) {
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
 