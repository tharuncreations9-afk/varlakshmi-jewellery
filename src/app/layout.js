import "./globals.css";

export const metadata = {
  title: {
    default: "VLJ Treasures | Retail Brand of Varlakshmi Jewellery",
    template: "%s | VLJ Treasures",
  },
  description:
    "VLJ Treasures is the retail brand of Varlakshmi Jewellery. Discover timeless jewellery crafted with heritage and trust. Follow VLJ Treasures on Instagram @vljtreasures and Varlakshmi Jewellery @varlakshmijewellery.",
  keywords: [
    "VLJ Treasures",
    "VLJ Treasure",
    "Varlakshmi Jewellery",
    "Varlakshmi Jewelry",
    "jewellery Hyderabad",
    "diamond jewellery",
  ],
  openGraph: {
    title: "VLJ Treasures | Varlakshmi Jewellery",
    description:
      "VLJ Treasures — retail brand of Varlakshmi Jewellery. Manufacturing & wholesale by Varlakshmi Jewellery.",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#organization-varlakshmi-jewellery",
      name: "Varlakshmi Jewellery",
      alternateName: [
        "Varlakshmi Jewelry",
        "Varalakshmi Jewellery",
        "Varlakshmi",
      ],
      description:
        "Premium jewellery manufacturing and wholesale house since 2016.",
      url: "https://www.instagram.com/varlakshmijewellery/",
      sameAs: ["https://www.instagram.com/varlakshmijewellery/"],
      brand: {
        "@id": "#brand-vlj-treasures",
      },
    },
    {
      "@type": ["Brand", "Organization"],
      "@id": "#brand-vlj-treasures",
      name: "VLJ Treasures",
      alternateName: ["VLJ Treasure", "VLJ Treasures Jewellery", "VLJ"],
      description:
        "VLJ Treasures is the retail brand of Varlakshmi Jewellery.",
      url: "https://www.instagram.com/vljtreasures/",
      sameAs: ["https://www.instagram.com/vljtreasures/"],
      parentOrganization: {
        "@id": "#organization-varlakshmi-jewellery",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        {children}

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
