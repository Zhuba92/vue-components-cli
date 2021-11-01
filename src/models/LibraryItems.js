function LibraryItem(media, removeFunction, addToBagFunction){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }

    media.remove = removeFunction || function(){};

    media.addToBag = addToBagFunction || function(){};

    return media;
}

function Book(title, pages){
    this.pages = pages;
    this.title = title || 'Default Title';
    this.id = Math.floor(Math.random() * 10e16);
}

function Album(title, artist, trackCount){
    this.title = title;
    this.artist = artist;
    this.trackCount = trackCount;
    this.id = Math.floor(Math.random() * 10e16);
}

function Music (artistName, trackName, artworkUrl100, collectionName, kind) {
    this.artistName = artistName;
    this.trackName = trackName;
    this.artworkUrl100 = artworkUrl100;
    this.collectionName = collectionName;
    this.kind = kind;
}

function Movie (artistName, trackName, artworkUrl130, kind) {
    this.artistName = artistName;
    this.trackName = trackName;
    this.artworkUrl130 = artworkUrl130;
    this.kind = kind;
}

function Podcast (artistName, trackName, feedUrl, artworkUrl130, kind) {
    this.artistName = artistName;
    this.trackName = trackName;
    this.feedUrl = feedUrl;
    this.artworkUrl130 = artworkUrl130;
    this.kind = kind;
}

function Audiobook (wrapperType, artistName, collectionName, kind) {
    this.wrapperType = wrapperType;
    this.artistName = artistName;
    this.collectionName = collectionName;
    this.kind = kind
}

function All (artistName, trackName, artworkUrl100, collectionName, kind) {
    this.artistName = artistName;
    this.trackName = trackName;
    this.artworkUrl100 = artworkUrl100;
    this.collectionName = collectionName;
    this.kind = kind;
}


export {LibraryItem, Book, Movie, Album, Music, Podcast, Audiobook, All}