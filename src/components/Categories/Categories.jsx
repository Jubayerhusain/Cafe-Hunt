/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

function Categories({ categories }) {
//   console.log(categories);
  return (
    <div className="w-10/12 mx-auto my-10">
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            key={category.category}
            role="tab"
            className={({isActive})=>`tab text-xl ${isActive?'tab-active':''}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Categories;
