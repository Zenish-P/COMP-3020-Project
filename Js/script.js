const pages = {
    'home': '../HTML/HomePage.html',
    'search': '../HTML/searchPage.html',
    'search-songs': '../HTML/SearchSongsPage.html',
    'music-player': '../HTML/MusicPlayer.html',
};

const buttons = {
    'home': '#home-btn',
    'search': '#explore-btn',
    'search-songs': '#explore-btn'
};

let currentPage = '';
switchPage('home');
$(addNavEvents);

/**
 * FUNCTIONS
 */

function addNavEvents() {
    $("#searchbox").on('input', () => {
        switchPage('search');
    });

    $('#logo-btn').on('click', () => {
        switchPage('home');
    });

    $('#home-btn').on('click', () => {
        switchPage('home');
    });

    $('#explore-btn').on('click', () => {
        switchPage('search');
    });

    $('#main-body').on('click', '.card', () => {
        switchPage('music-player');
    });

    $('#main-body').on('click', '#songs-only', () => {
        switchPage('search-songs');
    });

}

function switchPage(page) {
    if (page !== currentPage) {
        currentPage = page;
        $('#main-body').load(pages[page] + ' #main-content');
        for (b in buttons) {
            if (b === page) {
                $(buttons[page]).addClass('active');
            } else {
                $(buttons[b]).removeClass('active');
            }
        }
    }
}
