import { campgroundsData } from '../utils/campsData.js';
import CampCard from './CampCard';
import CampsMain from './CampsMain';

const Campgrounds = () => {
  // let campID = '1234';
  return (
    <>
      <CampsMain />
      {campgroundsData.map((camp) => {
        return (
          <CampCard
            key={camp.id}
            title={camp.title}
            image={camp.image}
            name={camp.name}
            campgroundId={camp.campgroundId}
          />
        );
      })}
    </>
  );
};

export default Campgrounds;
