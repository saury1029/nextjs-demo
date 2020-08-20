const Container = ({ clsName = '', children }) => {
  return (
    <div className={`container mx-auto px-4 md:px-16 ${clsName}`}>
      {children}
    </div>
  );
};

export default Container;
