import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import PropertiesList from "./components/PrpertiesLIst/PropertiesList";
import { Property } from "./types";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";

const AppContainer = styled.div`
  padding-inline: 2rem;
`;

const Search = styled.input`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Main = styled.main`
  flex: 1;
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
        setProperties(propertiesResponse);
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
        <Container>
          <Main>
            <Search placeholder="Search by Street, Neighborhood, City, Floor Plan" />
            <PropertiesList
              properties={properties}
              onSelectProperty={(property) => setSelectedProperty(property)}
            />
          </Main>
          <PropertyDetail
            property={selectedProperty}
            handleClose={() => setSelectedProperty(null)}
          />
        </Container>
      )}
    </AppContainer>
  );
};

export default App;
