type Props<T> = {
  type: string;
  value: T;
  placeholder: string;
  onChangeInput: (value: T) => void;
};

const ComponentInput: React.FC<Props<any>> = ({
  type,
  value,
  placeholder,
  onChangeInput,
}) => {
  function modifierLaValeurInput(e: any) {
    if (value === "number") {
      onChangeInput(parseFloat(e.target.value));
    } else {
      onChangeInput(e.target.value);
    }
  }

  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          modifierLaValeurInput(e);
        }}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default ComponentInput;
