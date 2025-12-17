import React from 'react';
import { Link } from 'react-router';

const TransactionsPage = () => {
    return (
       <>
        <div className="flex justify-between items-center gap-5 mb-5 flex-wrap">
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/admin">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">Transactions</span>
        </p>
      </div>



      <div className="overflow-x-auto bg-neutral rounded-lg ">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-secondary text-neutral">
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Club Name</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
         <tr>

         </tr>
          </tbody>
        </table>
      </div>

       </>
    );
};

export default TransactionsPage;