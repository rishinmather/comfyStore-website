import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const { meta } = useLoaderData();

  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();

  const navigate = useNavigate();
  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => {
            let prevpage = page - 1;
            if (prevpage < 1) prevpage = pageCount;

            handlePageChange(prevpage);
          }}
        >
          prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-sm sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => {
            let nextpage = page + 1;
            if (nextpage > pageCount) nextpage = 1;
            handlePageChange(nextpage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

// import React from "react";
// import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

// const PaginationContainer = () => {
//   const { meta } = useLoaderData();
//   console.log(meta);
//   const { page, pageCount } = meta.pagination;

//   const pages = Array.from({ length: pageCount }, (_, index) => {
//     return index + 1;
//   });

//   const { search, pathname } = useLocation();

//   const navigate = useNavigate();

//   const handlePages = (pageNum) => {
//     const searchParams = new URLSearchParams(search);
//     console.log(searchParams);
//     searchParams.set("page", pageNum);
//     navigate(`${pathname}?${searchParams.toString()}`);
//   };

//   if (pageCount < 2) {
//     return null;
//   }

//   return (
//     <div className="flex justify-end mt-10 ">
//       <div className="join">
//         <button
//           className="btn btn-md capitalize join-item"
//           onClick={() => {
//             let prevPage = page - 1;
//             if (prevPage < 1) prevPage = pageCount;

//             handlePages(prevPage);
//           }}
//         >
//           prev
//         </button>

//         {pages.map((pagenumber) => {
//           return (
//             <button
//               onClick={() => handlePages(pagenumber)}
//               key={pagenumber}
//               className={`btn btn-md capitalize join-item ${
//                 pagenumber === page
//                   ? "bg-primary hover:bg-primary text-black"
//                   : ""
//               }`}
//             >
//               {pagenumber}
//             </button>
//           );
//         })}

//         <button
//           className="btn btn-md capitalize join-item"
//           onClick={() => {
//             let nextPage = page + 1;
//             if (nextPage > pageCount) {
//               return (nextPage = 1);
//             }
//             handlePages(nextPage);
//           }}
//         >
//           next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationContainer;
