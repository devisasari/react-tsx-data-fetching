interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  const handleClick = () => {
    try {
      onClick();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button id="filter-btn" onClick={handleClick}>Filter Posts</button>
  );
};

export default Button;
