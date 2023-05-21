import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location, textData: {page, links} } = useGlobalContext();
  const container = useRef(null);
  const [columns, setcolumns] = useState('col-2')

  useEffect(() => {
    let { center, bottom } = location;
    let submenuItem = container.current;
    submenuItem.style.top = `${bottom}px`;
    submenuItem.style.left = `${center}px`;

    if(links.length === 3){
      setcolumns('col-3')
    }
    if(links.length > 3){
      setcolumns('col-4')
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
