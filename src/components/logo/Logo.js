
import './logo.scss';

const Logo = ({ grandient = false, color1 = "var(--primary)", color2 = "var(--accent)" }) => (
    <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
        <path d="M35.9545 16.605C38.8872 16.605 41.2645 14.2276 41.2645 11.295C41.2645 8.36235 38.8872 5.98499 35.9545 5.98499C33.0219 5.98499 30.6445 8.36235 30.6445 11.295C30.6445 14.2276 33.0219 16.605 35.9545 16.605Z" stroke={color2} strokeWidth="3" />
        <path d="M31 25.1254V61.125H41V25.125L36 27.8942L31 25.1254Z" fill={grandient ? "url(#paint1_linear_2666_1101)" : color2} />
        <path d="M47 19.2411V61.125H64V10.125H47V14.3136H59.4126V56.9403H54.0157V19.2411H47Z" fill={grandient ? "url(#paint0_linear_2666_1101)" : color1} />
        <path d="M25 10.125H8V61.125H25V19.2411H18.0373V56.9656H12.6118V14.3136H25V10.125Z" fill={grandient ? "url(#paint2_linear_2666_1101)" : color1} />
        <defs>
            <linearGradient id="paint0_linear_2666_1101" x1="55.4404" y1="10.125" x2="55.4404" y2="66.015" gradientUnits="userSpaceOnUse">
                <stop stopColor={color2} />
                <stop offset="0.731666" stopColor="var(--body-background)" />
            </linearGradient>
            <linearGradient id="paint1_linear_2666_1101" x1="36" y1="27" x2="36" y2="66" gradientUnits="userSpaceOnUse">
                <stop stopColor={color2} />
                <stop offset="0.731666" stopColor="var(--body-background)" />
            </linearGradient>
            <linearGradient id="paint2_linear_2666_1101" x1="16.5148" y1="10.125" x2="16.5148" y2="66.015" gradientUnits="userSpaceOnUse">
                <stop stopColor={color2} />
                <stop offset="0.731666" stopColor="var(--body-background)" />
            </linearGradient>
        </defs>
    </svg>
);

export default Logo;