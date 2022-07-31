import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";
import { website } from "../../fluff.config";
import PrettyLink from "../Common/PrettyLink";

export function CopyLeft({}) {
  const router = useRouter();
  const tr = getTranslation(router);
  return (
    <div className='flex-row justify-center text-center md:mx-8'>
      <div className='text-center text-lg'>
        {website.author} - {new Date().getFullYear()}
      </div>
      {/* You can keep this link for other devs to find, thanks ! */}
      <PrettyLink href='https://github.com/koalafr/fluff' onBlackBg>
        {tr.share_the_fluff} (MIT)
      </PrettyLink>
    </div>
  );
}
