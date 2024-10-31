export interface Breed {
  bred_for: string;
  breed_group: string;
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
}

export interface DogApiResponse {
  breeds: Breed[];
  height: number;
  id: string;
  url: string;
  width: number;
}
