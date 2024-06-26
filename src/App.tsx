import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import PropertiesList from "./components/PrpertiesLIst/PropertiesList";
import { Property } from "./types";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import { device } from "./styles/breakpoints";
import { InnerContainer } from "./styles/shared";
import { headerHeight } from "./styles/constants";

const AppContainer = styled.div`
  position: relative;
  padding-top: calc(${headerHeight} + 1.6rem);
`;

const Search = styled.input`
  width: 100%;
  font-family: "Montserrat", sans-serif;
`;

const LayoutContainer = styled(InnerContainer)`
  @media ${device.sm} {
    display: flex;
    gap: 1rem;
  }
`;

const Main = styled.main<{ $hasSelectedProperty: boolean }>`
  flex: 1;
  ${({ $hasSelectedProperty }) =>
    $hasSelectedProperty && "padding-right: calc(50% + 1.6rem);"}
`;

const App: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "https://website-api.dev.cloud.executivehomes.com/properties?market=tulsa"
        );
        const propertiesResponse = await response.json();
        const filteredProperties = propertiesResponse.filter(
          (property: Property) =>
            property.constructionStatus !== "Available Lot"
        );
        setProperties(filteredProperties);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <AppContainer>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <LayoutContainer>
          <Main $hasSelectedProperty={!!selectedProperty}>
            <Search placeholder="Search by Street, Neighborhood, City, Floor Plan" />
            <PropertiesList
              properties={properties}
              onSelectProperty={(property) => setSelectedProperty(property)}
              selectedProperty={selectedProperty}
            />
          </Main>
          <PropertyDetail
            property={selectedProperty}
            handleClose={() => setSelectedProperty(null)}
          />
        </LayoutContainer>
      )}
    </AppContainer>
  );
};

export default App;
