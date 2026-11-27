import type { IconName } from '../content';

const paths: Record<IconName, string> = {
  chart: 'M4 19V5m0 14h16M8 15l3-4 3 2 4-6',
  shield: 'M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z',
  book: 'M4 5.5A2.5 2.5 0 016.5 3H19v16H6.5A2.5 2.5 0 004 21.5V5.5zM19 19v2H6.5',
  wallet: 'M3 8.5A2.5 2.5 0 015.5 6H19a2 2 0 012 2v9a2 2 0 01-2 2H5.5A2.5 2.5 0 013 16.5v-8zM16 12.5h.01',
  users: 'M16 19v-1.5a4 4 0 00-4-4H7a4 4 0 00-4 4V19M9.5 9.5a3 3 0 100-6 3 3 0 000 6zM21 19v-1.5a4 4 0 00-3-3.87M16.5 3.6a3 3 0 010 5.8',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7.5V12l3 2',
  check: 'M4.5 12.5l5 5 10-11',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  cookie: 'M12 21a9 9 0 110-18 4 4 0 004 4 4 4 0 004 4 9 9 0 01-8 10zM9 9.5h.01M8.5 14h.01M13.5 15.5h.01',
  lock: 'M7 11V8a5 5 0 0110 0v3M5.5 11h13a1.5 1.5 0 011.5 1.5v6A1.5 1.5 0 0118.5 20h-13A1.5 1.5 0 014 18.5v-6A1.5 1.5 0 015.5 11z',
  alert: 'M12 9v4.5M12 17h.01M10.3 3.9L2.6 17a2 2 0 001.7 3h15.4a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z',
  heart: 'M12 20s-7-4.3-7-9.2A4 4 0 0112 8a4 4 0 017 2.8C19 15.7 12 20 12 20z',
};

type Props = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.8 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45L2.6 9.45l6.5-.95L12 2.6z" />
    </svg>
  );
}

export function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 18V6l14 12V6" />
    </svg>
  );
}
