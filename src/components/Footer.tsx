import { Button } from "@mui/material";

export default function Footer() {
  return (
    <footer className="absolute left-0 bg-gray-800 text-gray-300 p-4 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 py-4">

        <p className="text-center text-md mb-4 sm:mb-0 mr-1">
          Crafting seamless web experiences
        </p>
        <p className="text-sm text-center font-semibold mb-4 sm:mb-0">
          © Copyright 2023, Mostafizur Rahman
        </p>
        <Button className="hover:bg-gray-600 text-white py-2 px-4 rounded">
          Get in touch
        </Button>
      </div>
    </footer>
  );
}
