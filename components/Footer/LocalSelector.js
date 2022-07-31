import { useRouter } from "next/router";
import { available_locales } from "../../lib/locales";

export default function LocalSelector({}) {
  const router = useRouter();
  const { locale } = router;
  const changeLocale = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale, scroll: false });
  };
  return (
    <select
      onChange={changeLocale}
      defaultValue={locale}
      aria-label='Locale language selector'
      id='local'
      className='text-md mx-auto my-2 block rounded-lg border border-me-inverted bg-me-base p-2.5 text-me-inverted hover:border-me-primary focus:border-me-accent md:mx-4'
    >
      {available_locales.map((local) => {
        return (
          <option key={local} value={local}>
            {local.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
}
