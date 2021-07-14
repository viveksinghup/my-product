import { IButtonProps } from "../../shared/interfaces";
import Spinner from "../Spinner/Spinner";

const prefixClassName = "w--button";

const Button = (props: IButtonProps) => {
    const {
      title,
      type = "",
      customClass = "",
      disabled = false,
      disableOnLoading,
      theme,
    } = props;

    const themeClassName = theme ? `${prefixClassName}--${theme}` : "";
    const className = `${prefixClassName} ${customClass} ${type} ${themeClassName}`;
    const tooltip = typeof title === "string" ? title.toString() : "";
    const isLoading = type === "loading";
    const isDisabled = disabled || (disableOnLoading && isLoading);

    return (
      <button
        name={props.name}
        disabled={isDisabled}
        title={tooltip}
        onClick={(evt) =>
          props.onClick &&
          props.onClick(evt, props.customValueAttr)
        }
        className={className}
      >
        {isLoading ? <Spinner /> : title}
      </button>
    );
  
}


Button.defaultProps = {
  title: "Submit",
  disableOnLoading: false,
};


export default Button;
