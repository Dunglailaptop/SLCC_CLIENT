import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "antd";

const BarSreach = () => {
  return (
    <div className="inline-grid">
      <div className="h-[50px]">
        <input className="bg-gray-100 w-[300px] h-[30px] m-5 border-[1px] rounded border-black-500"></input>
        <button className="w-[70px] h-[30px] p-1 bg-green-500 rounded text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          Tìm
        </button>

      </div>
      <div className="m-[20px]">
        <ul className="flex">
          <li className="pr-2">
            <DatePicker id="datepicker"></DatePicker>
          </li>
          <li className="pr2">
            <DatePicker id="datepicker"></DatePicker>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default BarSreach;
