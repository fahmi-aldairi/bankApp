/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import Navbar from "./navbar";
import Footer from "./footer";

export const Bank = () => {
  const bank = useSelector((state) => state);
  console.log(bank);
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="overflow-x-auto rounded-lg border border-gray-200 min-h-screen w-screen">
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
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {bank.bank.accounts.map((data) => (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                    {data.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                    {data.customerName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {data.accountNumber}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data.accountType}
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
