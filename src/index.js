import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()
axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"

export default axios
