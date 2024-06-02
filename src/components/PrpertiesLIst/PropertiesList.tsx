import React from "react";
import { ListContainer } from "./PropertiesList.styles";
import { Property } from "../../types";
import PropertyCard from "../PropertyCard/PropertyCard";

interface PropertiesListProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  selectedProperty: Property | null;
}

const PropertiesList: React.FC<PropertiesListProps> = ({
  properties,
  onSelectProperty,
  selectedProperty,
}) => {
  return (
    <ListContainer>
      {properties.map((property) => (
        <li key={property.streetAddress}>
          <PropertyCard
            property={property}
            onSelectProperty={() => onSelectProperty(property)}
            isSelected={selectedProperty === property}
          />
        </li>
      ))}
    </ListContainer>
  );
};

export default PropertiesList;
