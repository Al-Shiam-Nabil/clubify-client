import React from "react";
import Container from "../../Components/Shared/Container";

const AllClubsPage = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between justify-center items-center my-8 gap-y-5 ">
        <h3>All Clubs (10)</h3>
        {/* search */}
        <form className="flex justify-center items-center">
          <div className="relative h-[45px]">
            <input
              type="text"
              name="search"
              placeholder="Search By Name..."
              spellCheck={false}
              className="bg-gray-200 w-full sm:w-[400px] px-5 pr-24 py-2 rounded-4xl h-full  focus:outline-2 focus:outline-secondary"
              required
            />
            <button
              type="submit"
              className="btn bg-gray-200 hover:bg-gray-300  text-primary shadow-none rounded-br-4xl rounded-tr-4xl absolute top-0 right-0 h-full"
            >
              Search
            </button>
          </div>
        </form>
      </div>
     

      <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 items-center justify-center">

<div className="flex">
     <label className="label mr-3">Sort By</label>
      <select defaultValue="Pick a color" className="select w-[250px] ">
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
</div>


<div className="flex">
     <label className="label mr-3">Filter By</label>
      <select defaultValue="Pick a color" className="select w-[250px]">
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
</div>


      </div>
    </Container>
  );
};

export default AllClubsPage;
