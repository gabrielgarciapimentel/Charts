const generateMockWeatherData = (): Weather[] => {
  const mockData: Weather[] = [];

  for (let i = 1; i <= 100; i++) {
    const weather: Weather = {
      id: i.toString(),
      temperature: Math.floor(Math.random() * 30) + 10,
      date: new Date(
        `2023-01-${i < 10 ? '0' + i : i}T${Math.floor(
          Math.random() * 24,
        )}:00:00Z`,
      ),
    };

    mockData.push(weather);
  }

  return mockData;
};

export const weatherData: Weather[] = generateMockWeatherData();

export interface Weather {
  id: string;
  temperature: number;
  date: Date;
}
