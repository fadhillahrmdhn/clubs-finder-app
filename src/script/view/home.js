import Utils from '../utils.js';
import Clubs from '../data/local/clubs.js';

const home = () => {
  const searchFormElement = document.querySelector('search-bar');

  const clubListContainerElement = document.querySelector('#clubListContainer');
  const clubQueryWaitingElement = clubListContainerElement.querySelector('.query-waiting');
  const clubLoadingElement = clubListContainerElement.querySelector('.search-loading');
  const clubListElement = clubListContainerElement.querySelector('club-list');

  const showSportClub = (query) => {
    showLoading();

    const result = Clubs.searchClub(query);
    displayResult(result);

    showClubList();
  };

  const onSearchHandler = (event) => {
    event.preventDefault();
    const { query } = event.detail;
    showSportClub(query);
  };

  const displayResult = (clubs) => {
    const clubItemElements = clubs.map((club) => {
    const clubItemElement = document.createElement('club-item');
    clubItemElement.club = club;

    return clubItemElement;
    });

    Utils.emptyElement(clubListElement);
    clubListElement.append(...clubItemElements);
  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubListElement);
  };

  const showQueryWaiting = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubQueryWaitingElement);
  };

  //home.js memasang listener langsung pada searchFormElement (<search-bar>). Karena listener-nya berada tepat di sumber event (target), secara teknis ia masih akan tertangkap bahkan tanpa bubbles: true.Contoh alternatif di home.js, Listener sekarang ada di parent, bukan di search-bar langsung 
  // const clubSection = document.querySelector('#club');
  // clubSection.addEventListener('search', onSearchHandler);
  //kode berikut bisa berjalan karena Dengan bubbles: true: Event dari <search-bar> akan merambat naik ke clubSection dan listener akan bekerja dengan sempurna.
  // Jika Tanpa bubbles: true: Event dari <search-bar> akan berhenti sebelum mencapai clubSection. Listener tidak akan pernah terpicu. 
  searchFormElement.addEventListener('search', onSearchHandler);

  showQueryWaiting();
};

export default home;
