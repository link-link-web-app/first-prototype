import Api from './api'

export default {
  fetchEvents(){
    return Api.get('events')
  }
}
