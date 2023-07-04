/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navbar";
import Footer from "./footer";
import MyDialog from "../components/Dialog";
import DeleteBtn from "../components/deleteBtn";
import { useEffect } from "react";
import { getUsersAsync } from "../redux/bankSlice";
import Count from "../components/count";

export const Bank = () => {
  const dispatch = useDispatch();
  const bank = useSelector((state) => state.bank);
  console.log(bank);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex justify-center my-10">
          <MyDialog />
        </div>
        <div className="flex justify-center my-10">
          <Count />
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 min-h-screen">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  CUSTOMER NAME
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  ACCOUNT NUMBER
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  ACCOUNT TYPE
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {bank.map((data) => (
                <tr key={data.id}>
                  <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                    {data.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                    {data.title.slice(0, 20)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {Math.ceil((data.body.length * 15) / 20)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data.title.slice(0, 10)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    <DeleteBtn id={data.id} /> {/* Corrected prop name */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};
