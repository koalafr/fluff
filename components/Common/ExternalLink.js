// This is a simple component to open links in a new tab
export default function ExternalLink({ children, href, isIcon }) {
  return (
    <>
      <a
        className={
          "cursor-pointer" +
          (isIcon ? "" : " hover:text-me-accent hover:underline")
        }
        href={href}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        {children}
      </a>
    </>
  );
}
