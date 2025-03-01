import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "./icon";

const { faUserPlus, faChartLine, faClipboardList } = icons;
export const siderbarMenu = [
  {
    path: "Home",
    text: "Danh sách",
    icon: <FontAwesomeIcon icon={faUserPlus} className="text-2xl mb-2" />,
  },
  {
    path: "ScreeningForm",
    text: "Thêm bệnh",
    icon: <FontAwesomeIcon icon={faClipboardList} className="text-2xl mb-2" />,
  },
  {
    path: "Statistical",
    text: "Báo cáo",
    icon: <FontAwesomeIcon icon={faChartLine} className="text-2xl mb-2" />,
  },
];
interface PatientData {
    hospital: string;
    patientName: string;
    dob: string;
    gender: 'Nam' | 'Nữ';
    room: string;
    bed: string;
    visitDate: string;
    visitTime: string;
    symptoms: string;
    triageLevel: string;
    doctor: string;
    patientId?: string;
    hospitalId?: string;
    temperature?: string;
    pulse?: string;
    bloodPressure?: string;
    respiratoryRate?: string;
    spO2?: string;
    weight?: string;
    consciousness?: string;
    generalCondition?: 'Tốt' | 'Trung bình' | 'Xấu';
    glucoseLevel?: string;
    hematocrit?: string;
    allergies?: { has: boolean; details?: string };
  }
export const samplePatientData: PatientData = {
  hospital: "BỆNH VIỆN NHI ĐỒNG 2",
  patientName: "Nguyễn Văn A",
  dob: "12/05/2015",
  gender: "Nam",
  room: "Phòng 101",
  bed: "Giường 12",
  visitDate: "27/02/2025",
  visitTime: "14:30",
  symptoms: "Sốt cao, khó thở",
  triageLevel: "Loại 2 - Điều trị trong 10 phút",
  doctor: "BS. Trần Văn B",
  temperature: "38.5",
  pulse: "110",
  bloodPressure: "90/60",
  respiratoryRate: "28",
  spO2: "95",
  weight: "25",
  consciousness: "15",
  generalCondition: "Trung bình",
  allergies: { has: false },
};
