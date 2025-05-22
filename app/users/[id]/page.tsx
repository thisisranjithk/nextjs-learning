import React from "react";

interface Props {
  params: { id: string };
}

const UserDetails = async ({ params: { id } }: Props) => {
  return <div>UserDetail {id}</div>;
};

export default UserDetails;
