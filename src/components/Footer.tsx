import { Button } from "@mui/material";

export default function Footer() {
  return (
    <footer className="absolute left-0 bg-gray-800 text-gray-300 p-4 w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-4">

        <p className="text-center text-md">
          Crafting seamless web experiences
        </p>
        <p className="text-sm font-semibold">
          © Copyright 2023, Mostafizur Rahman
        </p>
        <Button className="hover:bg-gray-600 text-white py-2 px-4 rounded">
          Get in touch
        </Button>
      </div>
    </footer>
  );
}
