import axios from 'axios'

export default axios.create(
    {
        baseURL:'https://api.unsplash.com',
        headers:{
            Authorization:'Client-ID Dl_9Wm1eBfP9cN1jVsJ-N1xdedgEVFqC6IaKE4o8I_Q'
        }
    }
)