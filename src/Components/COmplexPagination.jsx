import React from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const COmplexPagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const handlePage = (pagenumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pagenumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePage(pageNumber)}
        className={`btn btn-sm sm:btn-md join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderButtons = () => {
    const pageButtons = [];

    //  firstbutton //

    pageButtons.push(addButton({ pageNumber: 1, activeClass: page === 1 }));

    // dots

    if (page > 2) {
      pageButtons.push(
        <button className="btn btn-sm sm:btn-md join-item">...</button>
      );
    }

    // active

    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addButton({ pageNumber: page, activeClass: true }));
    }

    if (pageCount - 1) {
      pageButtons.push(
        <button className="btn btn-sm sm:btn-md join-item">...</button>
      );
    }

    // lastBtn

    pageButtons.push(
      addButton({ pageNumber: pageCount, activeClass: pageCount })
    );

    return pageButtons;
  };

  return (
    <>
      <div className="mt-5 flex justify-end join">
        <button
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) {
              prevPage = pageCount;
            }
            handlePage(prevPage);
          }}
        >
          prev
        </button>

        {renderButtons()}

        <button
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => {
            let nextpage = page + 1;
            if (nextpage > pageCount) {
              nextpage = 1;
            }
            handlePage(nextpage);
          }}
        >
          next
        </button>
      </div>
    </>
  );
};
export default COmplexPagination;
