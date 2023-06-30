export const Background = () => {
  return (
    <div className="w-screen h-screen fixed bg-black top-0 left-0 transition-all duration-300 overflow-hidden -z-10">
      <div id="blob" className="opacity-75" />
    </div>
  );
};
