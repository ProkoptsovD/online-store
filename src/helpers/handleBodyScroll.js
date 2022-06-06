import { refs } from '../constants/refs';

export const handleBodyScroll = {
    disable: () => refs.body.classList.add('noscroll'),
    enable: () => refs.body.classList.remove('noscroll'),
}