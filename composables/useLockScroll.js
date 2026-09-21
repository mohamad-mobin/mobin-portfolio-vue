import { stopLenis, startLenis } from '@/plugins/lenis.client.js'
export const useLockScroll = () => {

    const loadingFinished = () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        startLenis()
    }
    
    const loadingStarted = () => {

        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        stopLenis()
    }

    return  { 
        loadingFinished,
        loadingStarted

    }

}