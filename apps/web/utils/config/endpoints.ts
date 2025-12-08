const apiURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export class Endpoints {
  static metadata = `${apiURL}/metadata`;
  static homepage = `${apiURL}/homepage`;
  static notes = `${apiURL}/notes`;
  static about = `${apiURL}/about`;
  static socials = `${apiURL}/socials`;
}
