import React from "react";
import { ListContainer, PropertyButton } from "./PropertiesList.styles";
import { Property } from "../../types";

interface PropertiesListProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

const PropertiesList: React.FC<PropertiesListProps> = ({
  properties,
  onSelectProperty,
}) => {
  return (
    <ListContainer>
      {properties.map((property, index) => (
        <li key={index}>
          <PropertyButton onClick={() => onSelectProperty(property)}>
            {property.streetAddress}
          </PropertyButton>
        </li>
      ))}
    </ListContainer>
  );
};

export default PropertiesList;
