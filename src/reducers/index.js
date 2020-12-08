import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'My Sunshine',
            duration: '2:45'
        },
        {
            title: 'All Star',
            duration: '3:56'
        },
        {
            title: 'Chop Suey',
            duration: '4:14'
        },
        {
            title: 'Bad',
            duration: '2:59'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
} 

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})