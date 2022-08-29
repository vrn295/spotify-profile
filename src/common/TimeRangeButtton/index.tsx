import styles from './TimeRangeButtton.module.scss'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TimeRange } from '../../model';
import { useState } from 'react';

export interface ITimeRangeButtonProps {
  handleClick: (timeRange?: TimeRange) => Promise<void>
  listItem?: Array<any>
}

export const TimeRangeButton = ({
  handleClick,
  listItem = timeRange
}: ITimeRangeButtonProps) => {

  const [currentTimeValue, setcurrentTimeValue] = useState(TimeRange.SIX_MONTH)

  const handleTimeClick = (value) => {
    setcurrentTimeValue(value)
    handleClick(value)
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        Time Filter
        <span>
          <RiArrowDropDownLine />
        </span>
      </button>
      <ul className={styles.list}>
        {
          listItem.map((item) => (
            <li 
              key={item.key} 
              value={item.key} 
              onClick={() => handleTimeClick(item.key)} 
              className={`${item.key === currentTimeValue ? styles.selected_option : ""}`}
            >
              { item.title }
            </li>
        ))
        }
      </ul>
    </div>
  );
}

export default TimeRangeButton

const timeRange = [
  {
    title: "Four Week",
    key: TimeRange.FOUR_WEEK
  },
  {
    title: "Six Month",
    key: TimeRange.SIX_MONTH
  },
  {
    title: "Years",
    key: TimeRange.YEARS
  }
]