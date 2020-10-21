const sunrise = async () => {
  const lat = '60.17';
  const lng = '24.94';
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0&date=today`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const themeHandler = async () => {
  // Часовой пояс Хельсинки ОБЯЗАТЕЛЕН!
  // Т.к. получаем время без учёта часавого пояса
  const utc = 3;
  // Текущее время
  const time = new Date().toLocaleTimeString('fi');
  const { results } = await sunrise();

  const currentHour = parseInt(time.split('.')[0]);
  const currentMin = parseInt(time.split('.')[1]);

  const sunriseHour =
    parseInt(results.sunrise.split('T')[1].split(':')[0]) + utc;
  const sunriseMin = parseInt(results.sunrise.split('T')[1].split(':')[1]);
  const sunsetHour = parseInt(results.sunset.split('T')[1].split(':')[0]) + utc;
  const sunsetMin = parseInt(results.sunset.split('T')[1].split(':')[1]);

  if (
    currentHour > sunriseHour &&
    currentMin > sunriseMin &&
    currentHour < sunsetHour &&
    currentMin < sunsetMin
  ) {
    return 'light';
  }
  return 'dark';
};
