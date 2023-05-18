import { Typography } from "@material-tailwind/react";
 
const SITEMAP = [
  {
    title: "Yegon Collins",
    links: ["About", "Portfolio", "Service", "Contact"],
  },
  {
    title: "Social Links",
    links: [ "Twitter", "GitHub", "LinkedIn"],
  },
  {
    title: "Services",
    links: ["Web Development", "Mobile app Development", "Branding", "SEO"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                className="mb-4 text-[#feb786] font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li"  className="font-normal text-[#f0f2f2]">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                    
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-cyan-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="#">Yegon Collins</a>. All
            Rights Reserved.
          </Typography>
         
        </div>
      </div>
    </div>
  );
}