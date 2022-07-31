export default function PrettyLink({ children, href, onBlackBg }) {
  return (
    <>
      <a
        href={href}
        className={
          "link link-underline my-4 cursor-pointer text-me-primary" +
          (onBlackBg ? " link-underline-primary" : " link-underline-base")
        }
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        {children}
      </a>
    </>
  );
}
