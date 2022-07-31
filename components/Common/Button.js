import Link from "next/link";

function Button({ children, href }) {
  return (
    <>
      <div
        role='button'
        className='container mx-auto mb-10 max-w-5xl cursor-pointer items-center rounded-xl bg-me-inverted py-4 text-me-base shadow-lg shadow-me-light hover:bg-me-primary hover:text-me-inverted'
      >
        <p className='text-center text-xl'>
          {href ? (
            <Link href={href}>
              <a className='uppercase'>{children}</a>
            </Link>
          ) : (
            <a className='uppercase'>{children}</a>
          )}
        </p>
      </div>
    </>
  );
}

export default Button;
