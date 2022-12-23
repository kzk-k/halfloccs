import { getBreakpoint } from './getBreakpoint.js';

export function getDeviceType() {
    if (innerWidth <= getBreakpoint('xl')) {
        return 'isSP';
    } else {
        return 'isPC';
    }
}
