import {
  Details,
  PropertyButton,
  TitleImage,
  TopStuff,
} from "./PropertyCard.styles";
import { Property } from "../../types";

interface PropertyCardProps {
  property: Property;
  onSelectProperty: () => void;
  isSelected: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelectProperty,
  isSelected,
}) => {
  const getTitleImage = () => {
    if (property.titleImage) {
      return (
        <TitleImage
          $isSelected={isSelected}
          src={property.titleImage.url}
          alt={property.titleImage.title}
        />
      );
    } else if (property.floorPlan) {
      return (
        <TitleImage
          $isSelected={isSelected}
          src={property.floorPlan.titleImage.url}
          alt={property.floorPlan.titleImage.title}
        />
      );
    } else {
      console.error("ERROR! no title image found!");
      return (
        <TitleImage
          $isSelected={isSelected}
          src="https://placehold.co/336x340?text=Missing+Image!"
        />
      );
    }
  };

  return (
    <PropertyButton onClick={onSelectProperty} $isSelected={isSelected}>
      {getTitleImage()}
      <TopStuff $isSelected={isSelected}>
        <p>
          <img src="/images/floor-plans.svg" alt="floor plan icon" />
          <span>top</span>
        </p>
        <p>
          <img src="/images/paintbrush.svg" alt="paintbrush icon" />
          <span>stuff</span>
        </p>
      </TopStuff>
      <Details $isSelected={isSelected}>
        <p>{property.constructionStatus}</p>
        <p>{property.price}</p>
        <p>{property.streetAddress}</p>
      </Details>
    </PropertyButton>
  );
};

export default PropertyCard;
