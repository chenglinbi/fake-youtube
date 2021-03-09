import axios from 'axios'
const KEY = 'AIzaSyDrg0pDBDWcWiYMMa-mCO3-X_7FOmqa1fs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})