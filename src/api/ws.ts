import { APP_CONFIG } from '@/constants/app.constants'

export const ws = new WebSocket(APP_CONFIG.wsUrl)
