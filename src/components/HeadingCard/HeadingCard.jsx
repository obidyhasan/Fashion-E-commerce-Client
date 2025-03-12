const HeadingCard = ({ heading, subheading }) => {
  return (
    <div className="text-center flex items-center justify-center gap-2 flex-col">
      <h1 className="font-semibold text-2xl">{heading}</h1>
      <p className="text-sm">{subheading}</p>
    </div>
  );
};

export default HeadingCard;
