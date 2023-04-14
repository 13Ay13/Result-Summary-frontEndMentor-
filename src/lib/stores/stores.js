import { writable } from 'svelte/store'

export const showProgress = writable(false)
export const resetProgress = writable(false)
export const loadCard = writable([])
