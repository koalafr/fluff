export default function Tag({ children }) {
  return (
    <p className='w-fit cursor-pointer items-center rounded-md border border-me-accent py-0.5 px-2 text-xs uppercase tracking-wider text-me-accent hover:bg-me-accent hover:text-me-inverted hover:shadow-lg hover:shadow-me-light'>
      {children}
    </p>
  );
}
