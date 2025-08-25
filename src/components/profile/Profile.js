
import './profile.scss';

import profilePic from '../../assets/profile.png'

const Profile = () => (
    <svg id='profile' width="100%" height="100%" viewBox="0 0 533 583" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <path d="M158.983 431.31C154.286 418.919 160.524 405.066 172.916 400.369L488.85 280.616C501.241 275.919 515.094 282.157 519.791 294.549C524.488 306.941 518.251 320.794 505.859 325.491L189.925 445.243C177.533 449.94 163.68 443.702 158.983 431.31Z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="12" />
        <rect x="114.468" y="300.391" width="378.26" height="36.8076" rx="18.4038" transform="rotate(-20.1702 114.468 300.391)" fill="var(--accent)" stroke="var(--accent)" strokeWidth="12" />
        <path d="M29.1359 407.622C22.3813 388.392 32.4948 367.327 51.7252 360.572L405.037 236.471C424.268 229.716 445.333 239.83 452.087 259.06C458.842 278.291 448.729 299.356 429.498 306.11L76.186 430.212C56.9556 436.966 35.8906 426.853 29.1359 407.622Z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="3" />
        <rect y="261.047" width="459.203" height="76.1279" rx="38.064" transform="rotate(-21.7952 0 261.047)" fill="var(--accent)" />
        <path d="M54.0907 215.099C49.4962 203.076 55.5182 189.605 67.5412 185.011L262.135 110.647C274.159 106.053 287.63 112.075 292.224 124.098C296.819 136.121 290.797 149.592 278.774 154.187L84.1796 228.55C72.1566 233.145 58.6853 227.123 54.0907 215.099Z" fill="var(--accent)" stroke="var(--accent)" />
        <mask id="mask0_2556_3510" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="54" y="0" width="580" height="574">
            <circle cx="313.566" cy="256.24" r="256.24" fill="#D9D9D9" />
            <rect x="45.124" y="475.023" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-35.3138 45.124 475.023)" fill="#D9D9D9" />
            <rect x="51.2236" y="438.417" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-35.3138 51.2236 438.417)" fill="#D9D9D9" />
            <rect x="73.5947" y="499.708" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-29.5144 73.5947 499.708)" fill="#D9D9D9" />
            <rect x="120.369" y="506.445" width="312.485" height="48.8076" rx="24.4038" transform="rotate(-26.2798 120.369 506.445)" fill="#D9D9D9" />
            <rect x="171.211" y="501.46" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-35.3138 171.211 501.46)" fill="#D9D9D9" />
            <rect x="165.109" y="456.72" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-35.3138 165.109 456.72)" fill="#D9D9D9" />
            <rect x="187.479" y="532.246" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-29.5144 187.479 532.246)" fill="#D9D9D9" />
            <rect x="262.726" y="530.849" width="223.251" height="48.8076" rx="24.4038" transform="rotate(-26.2798 262.726 530.849)" fill="#D9D9D9" />
            <rect x="254.718" y="541.665" width="246.769" height="50.6559" rx="25.328" transform="rotate(-35.3138 254.718 541.665)" fill="#D9D9D9" />
            <rect x="354.239" y="529.567" width="353.855" height="48.8076" rx="24.4038" transform="rotate(-43.7276 354.239 529.567)" fill="#D9D9D9" />
            <rect x="427.449" y="526.788" width="125.206" height="48.8076" rx="24.4038" transform="rotate(-55.6557 427.449 526.788)" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2556_3510)">
            <rect x="-65" y="-16" width="694" height="694" fill="url(#pattern0_2556_3510)" />
        </g>
        <defs>
            <pattern id="pattern0_2556_3510" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_2556_3510" transform="scale(0.00133333)" />
            </pattern>
            <image id="image0_2556_3510" width="750" height="750" preserveAspectRatio="none" href={profilePic} />
        </defs>
    </svg>
);

export default Profile;