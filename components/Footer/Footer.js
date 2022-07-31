import { CopyLeft } from "./CopyLeft";
import SiteIcon from "../Common/SiteIcon";
import Socials from "../Common/Socials";
import LocalSelector from "./LocalSelector";

export default function Footer({}) {
  return (
    <>
      <footer className='w-screen place-self-end bg-me-base text-me-inverted'>
        <div className='flex-row items-center space-y-4 py-6 md:flex'>
          <div className='flex justify-center md:mx-8'>
            <SiteIcon />
          </div>
          <CopyLeft />
          <div className='align-center w-full justify-center md:w-fit'>
            <LocalSelector />
          </div>
          <Socials />
        </div>
      </footer>
    </>
  );
}
