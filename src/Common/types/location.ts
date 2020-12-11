export type Ilocation = {
  stationNames?: Istation[];
  stationUrls?: Istation[];
  data?: Istation;
  pathname?: string;
  key?: string;
  search?: string;
  hash?: string;
  state?: any;
};

export type Istation = {
  changeuuid?: string;
  stationuuid?: string;
  name?: string;
  url?: string;
  url_resolved?: string;
  homepage?: string;
  favicon?: string;
  tags?: string;
  country?: string;
  countrycode?: string;
  state?: string;
  language?: string;
  votes?: number;
  lastchangetime?: string;
  codec?: string;
  bitrate?: number;
  hls?: number;
  lastcheckok?: number;
  lastchecktime?: string;
  lastcheckoktime?: string;
  lastlocalchecktime?: string;
  clicktimestamp?: string;
  clickcount?: number;
  clicktrend?: number;
};
