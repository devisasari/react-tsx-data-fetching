interface InputProps {
  onChange: (val: string) => void;
}

const Input = ({ onChange }: InputProps) => (
  <input
    type="text"
    id="input-field"
    onChange={e => {
      onChange(e.target.value);
    }}
  />
);

export default Input;
