import React from "react";
import { ListContainer, PropertyButton } from "./PropertiesList.styles";
import { Property } from "../../types";

interface PropertiesListProps {
  properties: Property[];
}

const PropertiesList: React.FC<PropertiesListProps> = ({ properties }) => {
  return (
    <ListContainer>
      {properties.map((property, index) => (
        <li key={index}>
          <PropertyButton>{property.streetAddress}</PropertyButton>
        </li>
      ))}
    </ListContainer>
  );
};

export default PropertiesList;
