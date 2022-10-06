
import axios from "axios";
import React, { useState, useEffect } from "react";

const IndexPage = () => {
  const [data, setData] = useState([]);
  // search
  const [search, setSearch] = useState("");
  //sort
  const [sortValue, setSortValue] = useState("");
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
  // sort / filter according to pagination
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");

  useEffect(() => {
    // 0,4,0 for pagination (start, end, increase)
    loadUserData(0, 4, 0);
  }, []);

  // get the data

  const loadUserData = async (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        // search
        return await axios
          .get(
            `http://localhost:3003/users?q=${search}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
            //setSearch("");
          })

          .catch((err) => console.log(err));
      // sort with pagination

      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);

        return await axios
          .get(
            `http://localhost:3003/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
          })
          .catch((err) => console.log(err));

      // filter with pagination
      case "filter":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);

        return await axios
          .get(
            `http://localhost:3003/users?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
          })
          .catch((err) => console.log(err));

      default:
        return await axios

          //pagination
          .get(`http://localhost:3003/users?_start=${start}&_end=${end}`)
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })

          .catch((err) => console.log(err));
    }
  };

  console.log("data", data);

  // search

  const handleSearch = async (e) => {
    e.preventDefault();
    loadUserData(0, 4, 0, "search");
    // return await axios
    //   .get(`http://localhost:3003/users?q=${search}`)
    //   .then((response) => {
    //     setData(response.data);

    //     setSearch("");
    //   })

    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const noData = () => {
    if (data.length <= 0) {
      return (
        <>
          <h1>No Data available</h1>
        </>
      );
    }
  };

  //---------- reset-----------------------------------------------
  const handleReset = () => {
    setOperation("");
    setSearch("");
    setSortValue("");
    setSortFilterValue("");
    loadUserData(0, 4, 0);
  };
  //-----------------------------------------------------------------

  //---- sort--------------------------------------------------------
  const sortOptions = ["name", "address", "email", "phone", "status"];

  const handleSort = async (e) => {
    let sortResult = e.target.value;
    setSortValue(sortResult);
    loadUserData(0, 4, 0, "sort", sortResult);
    // return await axios
    //   .get(`http://localhost:3003/users?_sort=${sortResult}&_order=asc`)
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((err) => console.log(err));
  };
  //-------------------------------------------------------------------

  // filter

  const handleFilter = async (filter) => {
    loadUserData(0,4,0, "filter", filter)
  //   return await axios
  //     .get(`http://localhost:3003/users?status=${filter}`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => console.log(err));
  };

  //-----------------------------------------------------

  // pagination
  const renderPagination = () => {
    // if we have less than 4 data per page, pagination should not appear
    if (data.length < 4 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <div className="flex justify-content-center">
          <ul className="items-center pagination ">
            <li className="page-item ">
              <a className="text-white page-link bg-primary" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="text-white page-link bg-primary ms-2"
                href="#"
                onClick={() =>
                  loadUserData(4, 8, 1, operation, sortFilterValue)
                }
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <div className="flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="text-white page-link bg-primary ms-2"
                href="#"
                onClick={() =>
                  loadUserData(
                    (currentPage - 1) * 4,
                    currentPage * 4,
                    -1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                Prev
              </a>
            </li>
            <li className="page-item">
              <a className="text-white page-link bg-primary ms-2" href="#">
                {currentPage + 1}
              </a>
            </li>
            <li className="page-item">
              <a
                className="text-white page-link bg-primary ms-2"
                href="#"
                onClick={() =>
                  loadUserData(
                    (currentPage + 1) * 4,
                    (currentPage + 2) * 4,
                    +1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="text-white page-link bg-primary ms-2"
                href="#"
                onClick={() =>
                  loadUserData(
                    (currentPage - 1) * 4,
                    currentPage * 4,
                    -1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                Prev
              </a>
            </li>
            <li className="page-item ">
              <a className="text-white page-link bg-primary ms-2" href="#">
                {currentPage + 1}
              </a>
            </li>
          </ul>
        </div>
      );
    }
  };

  //---------------------------------------------------------
  return (
    <div className="container mt-2">
      <div className="flex py-3 row ">
        <div className="col-12">
          <form
            className="w-auto text-center d-flex input-group"
            onSubmit={handleSearch}
          >
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit" className="btn btn-success">
              Search
            </button>

            <button
              type="button"
              className="btn btn-primary ms-2"
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      {/* //------------------------------------ */}
      {/* // sort */}
      <div className="container py-3 mb-2">
        <div className="row">
          <div className="col-md-6">
            <h5>Sort By:</h5>
            <select
              className="form-select"
              value={sortValue}
              onChange={handleSort}
            >
              <option> select </option>
              {sortOptions.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          {/* //filter */}

          <div className="col-md-6">
            <h5>Filter By Status:</h5>
            <button
              className="btn btn-success me-2"
              onClick={() => handleFilter("Active")}
            >
              Active
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleFilter("Inactive")}
            >
              Inactive
            </button>
          </div>
        </div>
      </div>
      {/*    
      //------------------------------------- */}

      {/* // table */}
      <div className="container py-8">
        <table className="table table-bordered">
          <thead className="font-bold text-center text-white bg-dark">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.status}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* // pagination */}
      <div>{renderPagination()}</div>
      {/* // if no data inside the table, should display 'No data available' */}

      <div className="py-5 text-center">{noData()}</div>
    </div>
  );
};

export default IndexPage;
