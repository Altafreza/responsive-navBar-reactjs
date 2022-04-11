import React from "react";

function Menu() {
  return (
    <div>
      <Provider>
        <div className="menu">
          <Logo />
          <Mains meals={mains} />
          <aside className="aside">
            <Extras type="Sides" item={sides} />
            <Extras type="Drinks" item={drinks} />
          </aside>
          <Total />
        </div>
      </Provider>
    </div>
  );
}

export default Menu;
