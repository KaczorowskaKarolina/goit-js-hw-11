import axios from 'axios';
const MY_API_KEY = '39260371-83ef64e0aa197167fe58dcdf0';
const BASE_API_URL = `https://pixabay.com/api/?key=${MY_API_KEY}`;

export async function searchImages(userInput, currentPage) {
  const urlEncodedUserInput = userInput.split(' ').join('+');
  let searchParams = new URLSearchParams({
    q: urlEncodedUserInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: currentPage,
  });

  try {
    const response = await axios.get(`${BASE_API_URL}&${searchParams}`);
    console.log('search result from API:', response.data);
    return response.data;
  } catch (error) {
    errorInAxios(error);
  }
}

function errorInAxios(error) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {

    console.log('Error', error.message);
  }
  console.log(error.config);
}

// Kod zawiera funkcję searchImages, która wysyła zapytanie do API Pixabay w celu wyszukania obrazów na podstawie podanego user input. Funkcja przyjmuje dwa parametry: userInput (fraza wprowadzona przez użytkownika) i currentPage (numer aktualnej strony wyników wyszukiwania).

// Na początku definiujemy stałe MYAPIKEY i BASEAPIURL. MYAPIKEY to klucz dostępu do naszego konta Pixabay, a BASEAPIURL to podstawowy adres URL API Pixabay z dodanym kluczem dostępu.

// Funkcja searchImages wykonuje kilka kroków:

// Konwertuje userInput na kod URL poprzez zamianę spacji na znak "+". Może to być konieczne, jeśli fraza wyszukiwania zawiera spacje.
// Tworzy nowy obiekt URLSearchParams i ustawia parametry wyszukiwania, takie jak q (fraza wyszukiwania), imagetype (typ obrazu), orientation (orientacja), safesearch (bezpieczne wyszukiwanie), perpage (ilość obrazów na stronie) i page (aktualna strona wyników wyszukiwania).
// Wykorzystuje bibliotekę Axios do wywołania zapytania GET do API Pixabay. Wywołane zapytanie jest złożone z adresu URL z podanymi parametrami wyszukiwania.
// Jeśli zapytanie jest udane, to w konsoli wyświetlany jest wynik wyszukiwania (obiekt response.data) i zwracany jest ten sam obiekt.
// Jeśli wystąpił błąd podczas wywołania zapytania, to wywoływana jest funkcja errorInAxios, która obsługuje różne rodzaje błędów i wyświetla odpowiednie komunikaty w konsoli.
// Funkcja errorInAxios jest odpowiedzialna za obsługę błędów związanych z wywołaniem zapytania Axios. Sprawdza, czy dostaliśmy odpowiedź od serwera, jeśli tak, to wyświetla informacje o błędzie (status, dane, nagłówki), jeśli nie, to wyświetla informacje o błędzie związanym z żądaniem (np. brak odpowiedzi od serwera).