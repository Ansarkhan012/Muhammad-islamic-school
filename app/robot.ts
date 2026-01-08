import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // Sab pages crawl karne do
        // disallow: "/admin", // Agar admin page ho, yahan block kar sakte ho
      },
    ],
    sitemap: "https://muhammadislamicschool.com/sitemap.xml", // Sitemap link
  };
}
