import React, { useState } from "react";

const Pagination = ({
  filteredData,
  itemsPerPage,
  page,
  setPage,
}: {
  filteredData: any;
  itemsPerPage: any;
  page: number;
  setPage: any;
}) => {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="flex gap-[10px]">
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="text-[#1B1919] font-medium text-base rounded-[5px] bg-[#FAAF3D] py-2 px-4"
        >
          Prev
        </button>
      )}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={
              "border-solid border font-medium text-base rounded-[5px] py-2 px-4 " +
              (page === pageNumber
                ? "border-[#FAAF3D] text-[#FAAF3D] "
                : "text-white border-white hover:bg-white hover:text-[#1B1919] transition-all duration-300 ease-in-out")
            }
          >
            {pageNumber}
          </button>
        )
      )}
      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="text-[#1B1919] font-medium text-base rounded-[5px] bg-[#FAAF3D] py-2 px-4"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
