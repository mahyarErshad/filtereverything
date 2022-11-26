import { useRef } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export default function HeaderDropDownMenu() {
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  return (
    <>
      <li ref={ref} onPointerEnter={() => toggleMenu(true)} className="flex items-center justify-center">
        <span className="material-symbols-outlined">expand_more</span>
        مشاهده دمو ها
      </li>

      <ControlledMenu {...menuProps} anchorRef={ref} onPointerLeave={() => toggleMenu(false)} onClose={() => toggleMenu(false)}>
        <MenuItem>New File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuItem>Close Window</MenuItem>
      </ControlledMenu>
    </>
  );
}
