import React from "react";

interface Props {
  params: { photoID: string; id: string };
}
const page = ({ params }: Props) => {
  const { photoID, id } = params;

  return (
    <>
      <div>photoID: {photoID}</div>
      <div>Id: {id}</div>
    </>
  );
};

export default page;
