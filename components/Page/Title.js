function Title({ title, description }) {
  return (
    <>
      <h3
        id={title.replace(" ", "-").toLowerCase()}
        className='mt-8 px-4 font-lora text-4xl font-bold text-me-base'
      >
        {title}
      </h3>
      <p className='mt-2 px-4 text-xl text-me-secondary'>{description}</p>
    </>
  );
}

export default Title;
