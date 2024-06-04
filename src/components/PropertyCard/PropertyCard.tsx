import {
  Details,
  PropertyButton,
  TitleImage,
  TopStuff,
} from "./PropertyCard.styles";
import { Property } from "../../types";
import { getTitleImageAttributesFromProperty } from "../../utils/getTitleImageAttributesFromProperty";

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
  return (
    <PropertyButton onClick={onSelectProperty} $isSelected={isSelected}>
      <TitleImage
        $isSelected={isSelected}
        src={getTitleImageAttributesFromProperty(property).src}
        alt={getTitleImageAttributesFromProperty(property).alt}
      />
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
