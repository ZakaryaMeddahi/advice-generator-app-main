const button = document.getElementById('dice-button');
const adviceIdWrapper = document.getElementById('advice-id');
const adviceWrapper = document.getElementById('advice');

const BASE_URL = 'https://api.adviceslip.com';

const getRandomAdvice = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);

    console.log(response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    console.log(data);

    const { id, advice } = data.slip;

    adviceIdWrapper.textContent = id;
    adviceWrapper.textContent = `"${advice}"`;
  } catch (error) {
    console.error(error);
  }
};

window.onload = async () => await getRandomAdvice('advice');

button.onclick = async () => await getRandomAdvice('advice');
