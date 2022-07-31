import Page from "../components/Page/Page";
import Title from "../components/Page/Title";
import Button from "../components/Common/Button";
import { useRouter } from "next/router";
import { getTranslation } from "../lib/locales";

export default function NotFoud({}) {
  const router = useRouter();
  const tr = getTranslation(router);
  return (
    <Page>
      <section className='container max-w-screen-lg'>
        <div className='container mx-auto'>
          <Title
            title={tr.taglines.notfound?.title}
            description={tr.taglines.notfound?.description}
          />
          <hr className='my-8' />
          <Button href={"/"}>&larr; {tr.navbar.home}</Button>
        </div>
      </section>
    </Page>
  );
}
