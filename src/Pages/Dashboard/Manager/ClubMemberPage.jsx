import React from 'react';
import { Link, NavLink } from 'react-router';


const ClubMemberPage = () => {
    return (
       <>
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/manager">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">Club Members</span>
        </p>

<div className='mt-5'>
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 1" defaultChecked />
  <div className="tab-content  bg-base-100  mt-5">
    
 <div className="overflow-x-auto bg-neutral rounded-lg ">
        <table className="table table-zebra">
        
          <thead className="bg-secondary text-neutral">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Membership Status</th>
              <th>Join Date</th>
              <th>Action</th>
           
            </tr>
          </thead>
          <tbody>
         <tr>

         </tr>
          </tbody>
        </table>
      </div>


  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" />
  <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
  <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>

</div>

       </>
    );
};

export default ClubMemberPage;