import { Property } from "../../types";
import { DetailContainer } from "./PropertyDetail.styles";

interface PropertyDetailProps {
  property: Property | null;
  handleClose: () => void;
}

const PropertyDetail = ({ property, handleClose }: PropertyDetailProps) => (
  <DetailContainer hasProperty={!!property}>
    <p>home detail goes here</p>
    <button onClick={handleClose}>close</button>
  </DetailContainer>
);

export default PropertyDetail;
