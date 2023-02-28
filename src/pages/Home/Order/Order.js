import React, { useContext, useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { TableRow } from "./TableRow";
export const Order = () => {
  // state declare
  const [order, setOrder] = useState([]);
  const { user, logOutUser } = useContext(AuthContext);

  // set authorization header token set verify jwt(json web token)
  useEffect(() => {
    fetch(
      `https://genious-car-server-topaz.vercel.app/order?email=${user?.email}`,
      {
        headers: {
          autorizetion: `bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          logOutUser();
          window.location.reload();
        }
        return res.json();
      })
      .then((data) => setOrder(data));
  }, [user?.email, logOutUser]);
  console.log(order);

  // delate order from order api
  const handleDeleteOrder = (id) => {
    const isConfirm = window.confirm("Are You Sure delete");
    if (isConfirm) {
      fetch(`https://genious-car-server-topaz.vercel.app/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = order.filter((oder) => oder._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  // update user status
  const handleStatusUpdate = (id) => {
    fetch(`https://genious-car-server-topaz.vercel.app/order/${id}`, {
      method: `PATCH`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "APPROVED" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = order.filter((odr) => odr._id !== id);
          const approving = order.find((odr) => odr._id === id);
          approving.status = `APPROVED`;
          const newOrder = [approving, ...remaining];
          setOrder(newOrder);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <MdCancel className=" text-3xl cursor-pointer" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <TableRow
                handleStatusUpdate={handleStatusUpdate}
                order={order}
                handleDeleteOrder={handleDeleteOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
