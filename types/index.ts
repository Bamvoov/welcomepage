export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];   // ✅ MUST be array
  demo?: string;
  repo?: string;
  image?: string;
};
