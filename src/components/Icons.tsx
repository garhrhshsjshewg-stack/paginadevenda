import type { ReactNode } from 'react';

export type IconName =
  | 'check'
  | 'ball'
  | 'chart'
  | 'users'
  | 'lock'
  | 'shield'
  | 'star'
  | 'starOutline'
  | 'arrow'
  | 'alert'
  | 'mail'
  | 'telegram'
  | 'cookie';

const PATHS: Record<IconName, ReactNode> = {
  check: <path d="M20 6.5 9.5 17 4 11.5" />,
  ball: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4l3.1 2.2-1.2 3.6h-3.8l-1.2-3.6L12 7.4z" />
      <path d="M12 3.4v4M20.3 9.6l-3.2 2.1M17.6 19.9l-2.4-3.8M6.4 19.9l2.4-3.8M3.7 9.6l3.2 2.1" />
    </>
  ),
  chart: <path d="M4 19.5V11M9.6 19.5V5M15.2 19.5v-5.4M20.5 19.5H3" />,
  users: (
    <>
      <circle cx="9.2" cy="8.4" r="3.1" />
      <path d="M3.2 19.6a6 6 0 0 1 12 0" />
      <path d="M15.6 5.6a3.1 3.1 0 0 1 0 5.8M17.4 19.6a6 6 0 0 0-1.8-4.3" />
    </>
  ),
  lock: (
    <>
      <rect x="4.2" y="10.4" width="15.6" height="9.8" rx="2.2" />
      <path d="M8.2 10.4V8a3.8 3.8 0 0 1 7.6 0v2.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2l7 2.9v5.4c0 4.2-2.9 7.6-7 9.4-4.1-1.8-7-5.2-7-9.4V6.1l7-2.9z" />
      <path d="M9.2 12.1l2 2 3.7-3.9" />
    </>
  ),
  star: <path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.6 9.7l5.8-.8L12 3.6z" />,
  starOutline: <path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.6 9.7l5.8-.8L12 3.6z" />,
  arrow: <path d="M14.5 6.5 9 12l5.5 5.5" />,
  alert: (
    <>
      <path d="M12 4.4l8.4 15.1H3.6L12 4.4z" />
      <path d="M12 9.8v4.1M12 16.6v.1" />
    </>
  ),
  mail: (
    <>
      <rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2.2" />
      <path d="M3.9 6.9l8.1 5.8 8.1-5.8" />
    </>
  ),
  telegram: (
    <>
      <path d="M20.7 4.2 3.4 10.4c-.7.3-.7 1.1 0 1.3l4.5 1.5 1.7 4.9c.2.7 1 .8 1.4.3l2.4-2.8 4.3 3.1c.5.4 1.2.1 1.4-.5l2.2-13c.1-.6-.5-1.1-1-.9z" />
      <path d="M7.9 13.2 19.3 5.5l-8 9.5" />
    </>
  ),
  cookie: (
    <>
      <path d="M12 3.4a8.6 8.6 0 1 0 8.6 8.6 3.5 3.5 0 0 1-4.3-4.3A8.6 8.6 0 0 0 12 3.4z" />
      <circle cx="9" cy="10.2" r=".9" />
      <circle cx="13.2" cy="13.6" r=".9" />
      <circle cx="9.4" cy="15" r=".9" />
    </>
  ),
};

type Props = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: Props) {
  const filled = name === 'star';

  return (
    <svg
      className={className ? `ico ${className}` : 'ico'}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
