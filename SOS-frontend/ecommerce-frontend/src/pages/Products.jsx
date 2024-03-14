import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { get } from "../utils/axios-utils";
import { INDCurrency } from "../utils/constants";

const Products = () => {
  var classNames = require("classnames");
  const { cid } = useParams();
  const BASE_URL = 'http://localhost:9090/';
  console.log("company id", cid);
  const [data, setData] = useState([]);
  const [company, setCompany] = useState([]);
  useEffect(() => {
    loadData();
  }, [cid]);
  const loadData = async () => {
    if (cid == null) {
      const resp = await get("api/variants");
      setData(resp.data);
    } else {
      const resp = await get("api/variants/company/" + cid);
      setData(resp.data);
    }
    const resp = await get("api/companies");
    setCompany(resp.data);
  };
  return (
    <>
      <div
        className="container-fluid products"
        style={{ marginTop: "0", minHeight: "80vh" }}
      >
        <div className="row">
          <div className="col-sm-2 p-0">
            <h5 className="p-2 text-center">Companies</h5>
            <div className="list-group">
              <Link
                to="/products"
                className={classNames(
                  "list-group-item list-group-item-action",
                  { active: cid == null }
                )}
              >
                All Companies
              </Link>
              {company?.map((x) => (
                <Link
                  key={x.id}
                  to={"/products/" + x.id}
                  className={classNames(
                    "list-group-item list-group-item-action",
                    { active: cid === x.id }
                  )}
                >
                  {x.compname}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-sm-10 p-0">
            <div className="card shadow" style={{backgroundColor:"#eff3f5" }}>
              <div className="card-body p-1">
                <div className="container-fluid py-2">
                  <div className="row m-2">
                    {data?.length > 0 ? (
                      data.map((x) => (
                        <div key={x.id} className="col-md-4">
                          <div className="car-wrap rounded ftco-animate">
                            <img
                              className="img rounded d-flex align-items-end"
                              src={BASE_URL + x.photo }
                              alt={x.photo}
                            />
                            <div className="text">
                              <h2 className="mb-0">
                                <Link to={"/details/" + x.id}>
                                  {x.company.compname} {x.title}
                                </Link>
                              </h2>
                              <div className="d-flex mb-3">
                                <span className="cat">{x.title}</span>
                                <p className="price ml-auto">
                                  {INDCurrency.format(x.price)}{" "}
                                  <span>/day</span>
                                </p>
                              </div>
                              <p className="d-flex mb-0 d-block">
                                <Link
                                  to={"/details/" + x.id}
                                  className="btn btn-primary py-2 mr-1"
                                >
                                  Book now
                                </Link>
                                <Link
                                  to={"/details/" + x.id}
                                  className="btn btn-secondary py-2 ml-1"
                                >
                                  Details
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="col-md-4">
                          <div className="card shadow mt-2">
                            <h5 className="p-2 text-danger">
                              No Car available for this company.
                            </h5>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
