import {Music} from "@/models/LibraryItems";

function MediaFactory() {

    this.create = function (item) {
        if (item.kind === 'song'
            || item.kind === 'mix'
            || item.kind === 'musicVideo'
            || item.kind === 'album'
            || item.kind === 'musicTrack'
            || item.kind === 'musicArtist') {
            return new Music(item.artistName, item.trackName, item.artworkUrl, item.collectionName, item.kind);
        }
        else
        {
            console.log('type not found: ', item)
            return false;
        }
        // else if(item.kind === '') {
        //     return new ();
        // }
    }
}

export default MediaFactory