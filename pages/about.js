import Page from "../components/Page/Page";
import Title from "../components/Page/Title";
import PrettyLink from "../components/Common/PrettyLink";
import { useRouter } from "next/router";
import { getTranslation } from "../lib/locales";

export default function About({}) {
  const router = useRouter();
  const tr = getTranslation(router);
  const page = router.asPath.substring(1);
  return (
    <Page>
      <section className='container max-w-screen-lg'>
        <div className='container mx-auto'>
          <Title
            title={tr.taglines[page].title}
            description={tr.taglines[page].description}
          />
          <div className='my-16 flex-row space-y-6 rounded-xl bg-me-inverted p-8 text-lg text-me-base shadow-md shadow-me-light'>
            <p>
              Hi, my name is <em>Alex</em>, I love coding and this is my first
              react / nextjs app ! If you like the Fluff, please share this
              template with devs and harnest the power of the Fluff.
            </p>
            <p>
              If you create anything cool feel free to send it my way&nbsp;
              <PrettyLink href='https://twitter.com/koalabearfr'>
                @koalabearfr on twitter
              </PrettyLink>
              &nbsp;so I can add the screenshots/links to the{" "}
              <PrettyLink href='https://github.com/koalafr/fluff'>
                GIT Repository
              </PrettyLink>{" "}
              !!
            </p>
            <hr />
            <p>I love seeing what Fluff becomes.</p>
            <p>Code Happy</p>
          </div>
        </div>
      </section>
    </Page>
  );
}
