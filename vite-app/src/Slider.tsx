import diningTable1 from "./assets/dining-table1.png";
import diningTable2 from "./assets/dining-table2.png";
import diningTable3 from "./assets/dining-table3.png";
import diningTable4 from "./assets/dining-table4.png";
import diningTable5 from "./assets/dining-table5.png";
import diningTable6 from "./assets/dining-table6.png";
import diningTable7 from "./assets/dining-table7.png";
import diningTable8 from "./assets/dining-table8.png";
import diningTable9 from "./assets/dining-table9.png";
import diningTable10 from "./assets/dining-table10.png";

const images = [
  diningTable1,
  diningTable2,
  diningTable3,
  diningTable4,
  diningTable5,
  diningTable6,
  diningTable7,
  diningTable8,
  diningTable9,
  diningTable10,
];

const Slider = () => {
  return (
    <div className="pt-52 w-full overflow-hidden relative">
      <div className="animate-slide flex w-[calc(384px*20)">
        {images.map((image, index) => (
          <div className="mx-2 shadow rounded" key={index}>
            <div className="w-96 h-auto">
              <img src={image} alt="dining table" className="object-cover" />
            </div>
          </div>
        ))}
        {images.map((image, index) => (
          <div className="mx-2 shadow rounded" key={index}>
            <div className="w-96 h-auto">
              <img src={image} alt="dining table" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
