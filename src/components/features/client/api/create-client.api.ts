import type { ClientRequest } from '../model/client.model'
import { http } from '@/api/http'

export function CreateClient(data: ClientRequest) {
  return http
    .post('/client', {
      play_time: Number(data.play_time),
      timeout: Number(data.timeout)
    })
    .then(data => data.data)
    .catch(error => error)
}
