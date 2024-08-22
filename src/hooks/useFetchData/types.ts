type Image = {
  path: string;
  extension: string;
};

type ResourceList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: [];
};

type Url = {
  type: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  series: ResourceList;
};
