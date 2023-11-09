export type ModeType = "production" | "development";

export type PathsType = {
  entry: string;
  output: string;
  html: string;
};

export type EnvTypes = {
  port: number;
  mode: ModeType;
};

export type DevServerTypes = {
  port: number;
  open: boolean;
};

export interface BuildOptions {
  mode: ModeType;
  paths: PathsType;
  port: number;
  isDev: boolean;
}
