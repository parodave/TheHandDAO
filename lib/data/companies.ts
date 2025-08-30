export type Company = {
  id: string; code: string;
  name_fr: string; name_en: string;
  status: "active"|"coming";
  image: string;
  summary_fr: string; summary_en: string;
};
const IMG = "https://gvqeohakukdygsenyqev.supabase.co/storage/v1/object/public/photo%20dao/IMG_8295.jpeg";
export const companies: Company[] = [
  { id:"c-01", code:"C-01", name_fr:"Immobilier Maroc", name_en:"Real Estate Morocco", status:"active", image: IMG,
    summary_fr:"Ventes et locations au Maroc. Trésor redistribué mensuellement.",
    summary_en:"Sales and rentals in Morocco. Monthly treasury distributions." },
  { id:"c-02", code:"C-02", name_fr:"Entreprise à venir", name_en:"Coming soon", status:"coming", image: IMG,
    summary_fr:"À venir.", summary_en:"Coming soon." },
  { id:"c-03", code:"C-03", name_fr:"Entreprise à venir", name_en:"Coming soon", status:"coming", image: IMG,
    summary_fr:"À venir.", summary_en:"Coming soon." },
  { id:"c-04", code:"C-04", name_fr:"Entreprise à venir", name_en:"Coming soon", status:"coming", image: IMG,
    summary_fr:"À venir.", summary_en:"Coming soon." },
  { id:"c-05", code:"C-05", name_fr:"Entreprise à venir", name_en:"Coming soon", status:"coming", image: IMG,
    summary_fr:"À venir.", summary_en:"Coming soon." }
];
