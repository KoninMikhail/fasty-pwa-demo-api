export const getRandomGender = (): 'male' | 'female' => {
  return Math.random() > 0.5 ? 'male' : 'female';
};

// generator of a sequential array of dates in utc format, for a specified number of days.

export const getDates = (days: number): string[] => {
  const dates = [];
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + i);
    dates.push(date.toISOString());
  }
  return dates;
};

export const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getRandomTimeInterval = (
  day: Date,
  startTime: string,
  endTime: string
): { startTime: Date; endTime: Date } => {
  const startDateTime = new Date(day.getTime());
  startDateTime.setHours(Number(startTime.split(':')[0]), Number(startTime.split(':')[1]), 0);

  const endDateTime = new Date(day.getTime());
  endDateTime.setHours(Number(endTime.split(':')[0]), Number(endTime.split(':')[1]), 0);

  if (startDateTime >= endDateTime) {
    throw new Error('Start time must be less than end time');
  }

  const duration = Math.floor(Math.random() * 4) + 1; // От 1 до 4 часов

  const latestStart = new Date(endDateTime.getTime() - duration * 60 * 60 * 1000);
  const randomStart = new Date(
    startDateTime.getTime() + Math.random() * (latestStart.getTime() - startDateTime.getTime())
  );

  const randomEnd = new Date(randomStart.getTime() + duration * 60 * 60 * 1000);

  if (randomEnd > endDateTime) {
    throw new Error('Generated time interval goes beyond working hours');
  }

  return { startTime: randomStart, endTime: randomEnd };
};

export const generateRandomNumber = (): number => {
  return parseFloat((Math.random() * 150).toFixed(1));
};
