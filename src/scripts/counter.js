const [$days, $hours, $minutes, $seconds] = Array.from(document.querySelectorAll('.timer__item-value'));

const getRemainTime = eventDate => {
  const diffSeconds = (eventDate.getTime() - Date.now()) / 1000;

  return {
    days: Math.floor(diffSeconds / (3600 * 24)),
    hours: Math.floor((diffSeconds % (3600 * 24)) / 3600),
    minutes: Math.floor((diffSeconds % 3600) / 60),
    seconds: Math.floor(diffSeconds % 60),
  };
};

const numFormat = num => String(num).padStart(2, '0');

setInterval(() => {
  const remainTime = getRemainTime(new Date(2025, 0, 1, 0, 0, 0, 0));
  $days.textContent = numFormat(remainTime.days);
  $hours.textContent = numFormat(remainTime.hours);
  $minutes.textContent = numFormat(remainTime.minutes);
  $seconds.textContent = numFormat(remainTime.seconds);
}, 1000);
