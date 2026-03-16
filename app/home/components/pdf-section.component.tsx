"use client";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Typography, Box } from "@mui/material";
import { TypeOutlineIcon } from "lucide-react";

const documents = [
  {
    title: "Copy of Environmental Clearance (EC)",
    file: "/pdfs/environmental-clearance.pdf",
  },
  {
    title: "Form - V (2024-2025)",
    file: "/pdfs/form-v-2024-2025.pdf",
  },
  {
    title: "Six-Month Compliance Reports",
    file: "/pdfs/six-month-compliance.pdf",
  },
];

export default function PdfDocSection() {
  return (
    <section className="w-full bg-white py-24 px-4 text-center">
      
        
      <Box className='flex flex-col pt-4 pb-8'>
        <Typography variant="fontDmSerifXlRegularItalic" className="text-[#E6AE2B]">
            Sustainable Development
        </Typography>

        <Typography variant="fontDmSansXlMediumBold" className="text-black">
            for a better tomorrow.
        </Typography>
      </Box>

      {/* Document Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 rounded-xl px-6 py-4 bg-white hover:shadow-md transition cursor-pointer min-w-[300px]"
          >
            <div className="text-red-500">
              <PictureAsPdfIcon />
            </div>

            <Typography variant="fontUbuntuSmMedium" className="text-black">
              {doc.title}
            </Typography>
          </a>
        ))}
      </div>
    </section>
  );
}