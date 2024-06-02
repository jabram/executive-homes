import { PropertyButton } from "./PropertyCard.styles";
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
  return (
    <PropertyButton onClick={onSelectProperty} $isSelected={isSelected}>
      {property.streetAddress}
    </PropertyButton>
  );
};

export default PropertyCard;
