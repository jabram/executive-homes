import { Property } from "../types";

export const getTitleImageAttributesFromProperty = (property: Property) => {
  if (property.titleImage) {
    return {
      src: property.titleImage.url,
      alt: property.titleImage.title,
    };
  } else if (property.floorPlan) {
    return {
      src: property.floorPlan.titleImage.url,
      alt: property.floorPlan.titleImage.title,
    };
  } else {
    console.error("ERROR! no title image found!");
    return {
      src: "https://placehold.co/336x340?text=Missing+Image!",
      alt: "Missing Image!",
    };
  }
};
