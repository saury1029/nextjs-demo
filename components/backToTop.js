const BackToTop = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <a
        href="#top"
        className="w-12 h-12 mb-12 mr-12 flex justify-center items-center text-white bg-primary rounded-full"
      >
        &uarr;
      </a>
    </div>
  );
};

export default BackToTop;
