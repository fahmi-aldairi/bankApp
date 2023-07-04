import { useSelector } from "react-redux";

function Count() {
  const bank = useSelector((state) => state.bank);

  return (
    <div className="d-flex justify-content-between mb-5">
      <div className="">Number: {bank.length}</div>
    </div>
  );
}

export default Count;
