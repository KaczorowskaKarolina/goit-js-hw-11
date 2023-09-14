export function scrollPage() {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
  
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }

// Kod definiuje funkcję "scrollPage", 
// która jest odpowiedzialna za scrollowanie strony.
// Funkcja najpierw pobiera wysokość pierwszego dziecka elementu o klasie "gallery" i zapisuje ją w zmiennej "cardHeight". 
// Następnie używa metody "window.scrollBy" do przewinięcia strony w dół o podwójną wysokość karty. 
// Scrollowanie odbywa się płynnie ("behavior: 'smooth'") zamiast natychmiastowo.