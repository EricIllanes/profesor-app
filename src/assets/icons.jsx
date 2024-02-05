export const HeartIcon = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-filled icon-tabler icon-tabler-heart"
    width={width || 24}
    height={height || 24}
    strokeWidth={strokeWidth || 2}
    viewBox="0 0 24 24"
    stroke="#a51b1b"
    fill="#a51b1b"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572"></path>
  </svg>
);

export const ArrowIcon = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-narrow-right"
    width={width || 24}
    height={height || 24}
    strokeWidth={strokeWidth || 2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
    <path d="M15 16l4 -4" />
    <path d="M15 8l4 4" />
  </svg>
);

export const FileIcon = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-file-description"
    width={width || 24}
    height={height || 24}
    strokeWidth={strokeWidth || 2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M9 17h6" />
    <path d="M9 13h6" />
  </svg>
);

export const BriefcaseIcon = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-briefcase"
    width={width || 24}
    height={height || 24}
    strokeWidth={strokeWidth || 2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 12l0 .01" />
    <path d="M3 13a20 20 0 0 0 18 0" />
  </svg>
);
