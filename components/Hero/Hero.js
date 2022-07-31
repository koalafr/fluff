import Image from "next/image";
import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";
import bg from "../../public/rounded_bg.png";

export default function Hero() {
  const router = useRouter();
  const tr = getTranslation(router);
  return (
    <div className='relative -z-10 max-h-[800px] text-me-base transition-all md:-translate-y-16 xl:-translate-y-32'>
      <Image
        className='translate-x-1/4'
        src={bg}
        alt='hero background image, it is a fluffy sheep'
      />
      <div className='absolute top-1/2 left-1/4 max-w-[150px] -translate-x-1/2 -translate-y-1/2 font-lora md:max-w-md xl:max-w-xl'>
        <h3 className='my-8 text-center text-2xl font-bold md:text-7xl xl:text-8xl'>
          {tr.taglines.hero.title}
        </h3>
        <p className='my-8 text-center text-lg text-me-accent md:text-3xl'>
          {tr.taglines.hero.description}
        </p>
      </div>
    </div>
  );
}
