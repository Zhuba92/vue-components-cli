import {Music, Movie, Podcast, Audiobook, All} from "@/models/LibraryItems";

function MediaFactory() {

    this.create = function (item) {
        if (item.kind === 'song'
            || item.kind === 'mix'
            || item.kind === 'music-video'
            || item.kind === 'album'
            || item.kind === 'musicTrack'
            || item.kind === 'musicArtist') {
            return new Music(item.artistName, item.trackName, item.artworkUrl100, item.collectionName, item.kind);
        }
        else if (item.kind === 'movie' || item.kind === 'movieArtist' || item.kind === 'feature-movie' || item.kind === 'tv-episode' || item.kind === 'tv-season'){
            return new Movie(item.artistName, item.trackName, item.artworkUrl130, item.kind)
        }
        else if (item.kind === 'podcastAuthor' || item.kind === 'podcast') {
            return new Podcast(item.artistName, item.trackName, item.feedUrl, item.artworkUrl130, item.kind)
        }
        else if (item.kind === 'audiobook' || item.kind === 'audiobookAuthor') {
            return new Audiobook(item.wrapperType, item.artistName)
        }
        else if (item.kind === 'movie' || item.kind === 'album' || item.kind === 'allArtist' || item.kind === 'podcast' || item.kind === 'music-video' || item.kind === 'mix' || item.kind === 'audiobook' || item.kind === 'tv-season' || item.kind === 'allTrack') {
            return new All(item.artistName, item.trackName, item.artworkUrl100, item.collectionName, item.kind)
        }
        else
        {
            console.log('type not found: ', item)
            return false;
        }
    }
}

export default MediaFactory