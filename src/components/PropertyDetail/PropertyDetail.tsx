import { Property } from "../../types";
import { getTitleImageAttributesFromProperty } from "../../utils/getTitleImageAttributesFromProperty";
import { DetailContainer, TitleImage } from "./PropertyDetail.styles";

interface PropertyDetailProps {
  property: Property | null;
  handleClose: () => void;
}

const PropertyDetail = ({ property, handleClose }: PropertyDetailProps) => (
  <DetailContainer $hasProperty={!!property}>
    {property && (
      <>
        <TitleImage
          src={getTitleImageAttributesFromProperty(property).src}
          alt={getTitleImageAttributesFromProperty(property).alt}
        />
        <p>home detail goes here</p>
        <button onClick={handleClose}>close</button>
        <p>and it's a lot of other detail</p>
        <p>
          Laborum quis excepteur non voluptate est qui consectetur duis tempor
          sunt labore duis do. Non in commodo pariatur est esse commodo. Officia
          qui dolore pariatur esse do sint quis. Qui irure id deserunt nisi
          aliquip occaecat tempor cillum cillum nisi.
        </p>
        <p>
          Et laboris aliqua elit dolor ea dolor aute do. Nulla ullamco cupidatat
          fugiat excepteur eu sit. Nulla excepteur veniam in ullamco elit elit
          occaecat nostrud laborum quis elit.
        </p>
      </>
    )}
  </DetailContainer>
);

export default PropertyDetail;
