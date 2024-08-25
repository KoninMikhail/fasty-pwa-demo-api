import {
  addHours,
  differenceInHours,
  setHours,
  setMinutes,
  setSeconds,
  startOfDay
} from 'date-fns';

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
  // Helper function to parse time from "HH:MM" format
  const parseTime = (time: string, date: Date): Date => {
    const [hours, minutes] = time.split(':').map(Number);
    return setSeconds(setMinutes(setHours(date, hours), minutes), 0);
  };

  const startDateTime = parseTime(startTime, startOfDay(day));
  const endDateTime = parseTime(endTime, startOfDay(day));

  if (startDateTime >= endDateTime) {
    throw new Error('Start time must be less than end time');
  }

  // Calculate maximum duration in hours between start and end time
  const maxDuration = differenceInHours(endDateTime, startDateTime);
  if (maxDuration < 1) {
    throw new Error('Time interval must be at least 1 hour');
  }

  // Get a random duration between 1 and the maximum possible duration
  const randomDuration = Math.floor(Math.random() * Math.min(4, maxDuration)) + 1;

  // Calculate the latest possible start time that would allow for the random duration
  const latestStartDateTime = addHours(endDateTime, -randomDuration);

  // Generate a random start time within the allowed range
  const randomStartTime = new Date(
    startDateTime.getTime() +
      Math.random() * (latestStartDateTime.getTime() - startDateTime.getTime())
  );

  // Calculate the end time based on the random start time and random duration
  const randomEndTime = addHours(randomStartTime, randomDuration);

  if (randomEndTime > endDateTime) {
    throw new Error('Generated time interval goes beyond working hours');
  }

  return { startTime: randomStartTime, endTime: randomEndTime };
};

export const generateRandomNumber = (): number => {
  return parseFloat((Math.random() * 150).toFixed(1));
};
