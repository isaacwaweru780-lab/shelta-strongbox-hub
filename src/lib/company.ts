export const company = {
  name: "Shelta Packaging Ltd",
  tagline: "Strong Packaging. Solid Partnerships.",
  phones: ["+254720440580", "+254703238594"],
  whatsapp: "254720440580",
  email: "Sheltapackagingltd@gmail.com",
  address: "Ruiru – Mugutha, near Mugutha Police Station",
  location: "Kiambu County, Kenya",
};

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${company.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
