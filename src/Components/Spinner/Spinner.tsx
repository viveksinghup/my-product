import { ISpinnerProps } from "../../shared/interfaces";

const Spinner = (props: ISpinnerProps) =>  {
  
  return (
    <div className={"w--spinner " + (props.customClass || "")}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  );
}

export default Spinner;
