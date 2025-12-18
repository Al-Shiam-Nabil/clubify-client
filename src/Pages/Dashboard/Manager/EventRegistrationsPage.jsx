import React from 'react';
import { Link } from 'react-router';

const EventRegistrationsPage = () => {
    return (
        <>
          <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/manager">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">Event Registrations</span>
        </p>


 <div className="overflow-x-auto bg-neutral rounded-lg mt-5 ">
        <table className="table table-zebra">
        
          <thead className="bg-secondary text-neutral">
            <tr>
              <th>SL</th>
              <th>Event Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Register Time</th>
           
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

export default EventRegistrationsPage;