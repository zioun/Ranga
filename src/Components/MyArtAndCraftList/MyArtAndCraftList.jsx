import React from "react";
import { useLoaderData } from "react-router-dom";

const MyArtAndCraftList = () => {
    const allArtAndCraft = useLoaderData();
  return (
    <div className="bg-[#E5E2DB]">
      <div className="flex justify-center text-center">
        <div className="bg-[#ffffff] p-10 my-[100px] max-w-[9000px] shadow">
          <h1 className="text-[30px] font-mono">All Art and Craft Items</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-7 items-center">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image & Title Name</th>
                    <th>Sub Category</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allArtAndCraft.map((allArtAndCraft) => (
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-full h-12">
                              <img
                                src={allArtAndCraft.photoURL}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {allArtAndCraft.itemName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{allArtAndCraft.subCategory}</td>
                      <td>
                        <span className="badge badge-ghost">
                          $ {allArtAndCraft.price}
                        </span>
                      </td>
                      <th>
                        <span className="badge cursor-pointer badge-neutral">
                          View Details
                        </span>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
