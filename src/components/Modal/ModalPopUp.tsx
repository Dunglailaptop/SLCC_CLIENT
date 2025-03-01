import React, { useState, useRef } from "react";
import { Button, Flex, Modal } from "antd";
import { PrintReport } from "../../page";
import { useReactToPrint } from "react-to-print";
import TriageForm from "../../page/Report/TriageForm";
import { samplePatientData } from "../../ultis/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../ultis/icon";

const ModalPopUp: React.FC = () => {
  const reportRef = useRef<HTMLDivElement>(null);

  const print = useReactToPrint({
    documentTitle: "Phieu-Nhan-Dinh",
    contentRef: reportRef,
  });
  const handlePrint = () => {
    if (print) print(); // 👈 Gọi `print()` khi bấm nút
  };

  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);

  return (
    <Flex vertical gap="middle" align="flex-start">
      {/* Basic */}
      <Button type="primary" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={icons.faEye}></FontAwesomeIcon>
        Chi tiết phiếu
      </Button>
      <Modal title="Chi tiết phiếu sàng lọc" centered open={open} width={1000} footer={null}>
        <div className="overflow-auto h-[600px]">
          <div ref={reportRef} className="w-full">
            <TriageForm data={samplePatientData} />
          </div>
        </div>
        <div>
          <ul className="flex justify-end">
            <li>
              {" "}
              <Button onClick={() => setOpen(false)} className="m-3">Bỏ qua</Button>
            </li>
            <li>
              {" "}
              <Button onClick={handlePrint} className="m-3">Print</Button>
            </li>
          </ul>
        </div>
      </Modal>
    </Flex>
  );
};

export default ModalPopUp;
