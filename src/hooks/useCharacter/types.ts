export type Image = {
  path: string;
  extension: string;
};

export type ResourceItem = {
  resourceURI: string;
  name: string;
};

export type ResourceList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: ResourceItem[];
};

export type Url = {
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

export type Resources = "comics" | "stories" | "events" | "series";

export type OtherResource = {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  images?: Image[];
};

export type CharResources = {
  comics?: OtherResource[];
  stories?: OtherResource[];
  events?: OtherResource[];
  series?: OtherResource[];
};

export type UpdateResourceProps = {
  name: Resources;
  resource: OtherResource[];
};
