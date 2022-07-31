import Image from "next/image";
import Link from "next/link";

import logo from "../../public/thefluff.png";

export default function SiteIcon({}) {
  return (
    <div className='my-auto h-12 w-12 cursor-pointer'>
      <Link href='/'>
        <a>
          <Image
            src={logo}
            alt='logo'
            layout='responsive'
            height={32}
            width={32}
          />
        </a>
      </Link>
    </div>
  );
}
