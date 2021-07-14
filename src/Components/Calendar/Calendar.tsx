import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ICalendarInterface } from '../../shared/interfaces';
import useOnClickOutside  from '../../use/useOutSideClick';

const Calendar : React.FC<ICalendarInterface> = (props: ICalendarInterface)  => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleSelect = (data: Date | null) => {
    props.onChange(data);
    toggle();
  }
  
  return (
    <div>
      <DatePicker
        selected={props.startDate} 
        onChange={(data: Date) =>handleSelect(data)} 
        inline={props.inline}
        withPortal={props.withPortal} 
        showTimeSelect={props.showTimeSelect}
        timeFormat={props.timeFormat}
        timeIntervals={props.timeIntervals}
        timeCaption={props.timeCaption}
        dateFormat={props.dateFormat}
        minDate={props.minDate}
        maxDate={props.maxDate}
        showTimeSelectOnly={props.showTimeSelectOnly}
        placeholderText={props.placeholderText}
      />
    </div>
  );
}


export default Calendar ;

