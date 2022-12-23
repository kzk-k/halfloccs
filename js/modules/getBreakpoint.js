export function getBreakpoint(suffix = 'xl') {
    const root = document.querySelector(':root');
    const breakpoint = getComputedStyle(root).getPropertyValue(`--breakpoint-${suffix}`);

    return breakpoint;
}
