import ExternalLink from "./ExternalLink";

// Import more icons as you need them
import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

// Simply add the icon as a type and  add it to the config for socials
const icons = {
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  discord: <FaDiscord />,
  email: <FaEnvelope />,
  github: <FaGithub />,
};

export default function Icon({ icon, href }) {
  const jsx_elem = icons[icon];
  return (
    <div className='w-10.5 h-10.5 rounded-full bg-me-inverted p-[9px] text-2xl text-me-base shadow-lg shadow-me-light transition-all hover:bg-me-accent hover:text-me-inverted hover:shadow-me-primary'>
      <ExternalLink href={href ?? "#"} isIcon>
        {jsx_elem}
      </ExternalLink>
    </div>
  );
}
