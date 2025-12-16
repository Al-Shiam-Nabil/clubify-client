import React from 'react';
import { Link } from 'react-router';

const ClubMemberPage = () => {
    return (
       <>
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/manager">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">Club Members</span>
        </p>
       </>
    );
};

export default ClubMemberPage;