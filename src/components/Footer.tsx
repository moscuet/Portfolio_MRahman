import { Button } from "@mui/material";

export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 text-gray-300 ">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-4">
        
          <p className="text-center text-md">
            Crafting seamless web experiences
          </p>
          <p className="text-sm font-semibold">
            © Copyright 2023, Mostafizur Rahman
          </p>
          <Button className=" hover:bg-gray-600 text-white  py-2 px-4 rounded">
            Contacts
          </Button>
        </div>
      </footer>
    );
  }
  