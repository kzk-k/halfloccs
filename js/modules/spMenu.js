import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Alpine from 'alpinejs';

const target = document.querySelector('.js-drawer-menu');

document.addEventListener('alpine:init', () => {
    Alpine.store('spMenu', {
        open: false,
        toggle() {
            this.open = !this.open;
        },
        bodyScrollLock() {
            if (this.open) {
                disableBodyScroll(target);
            } else {
                clearAllBodyScrollLocks();
            }
        },
    });
});
