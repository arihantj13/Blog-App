import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const dataArray = [
    {
      desc: "Description of item 1",
      fileSize: "1 MB",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Important",
        tagColor: "bg-green-500",
      },
    },
    {
      desc: "Description of item 2",
      fileSize: "2 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Action Required",
        tagColor: "bg-blue-500",
      },
    },
    {
      desc: "Description of item 3",
      fileSize: "0.5 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Pending",
        tagColor: "bg-orange-500",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-screen flex flex-wrap gap-10 p-5"
    >
      {dataArray.map((item, index) => (
        <Card data={item} reference={ref} key={index} />
      ))}
    </div>
  );
};

export default Foreground;
