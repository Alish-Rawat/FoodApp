const Shimmer = () => {
  return (
    <div className="flex flex-wrap" data-testid="shimmer">
      {Array(10)
        .fill()
        .map((e, index) => (
          <div className="bg-slate-200 w-44 h-56 m-5" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
