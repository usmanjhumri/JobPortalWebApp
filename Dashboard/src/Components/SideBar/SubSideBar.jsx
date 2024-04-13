import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import theme from "../../theme/index";
const useStyles = makeStyles(() => ({
  deleteIconOpen: {
    "& svg": {
      fontSize: 22,
    },
  },

  deleteIconClosed: {
    "& svg": {
      fontSize: 22,
    },
  },
  SideBarItems: {
    display: "flex",
    alignItems: "start",
    gap: "5px",
  },
  SideBar_link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    opacity: "80%",
    "&:hover": {
      opacity: "100%",
      color: theme.palette.primary.contrastText,
    },
    paddingLeft: "5px",
    paddingTop: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sideBar_title: {
    fontSize: "14px",
  },
  SideBar_link_Selected: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: theme.palette.background.main,
    color: `${theme.palette.secondary.main}`,
    // opacity: "60%",

    borderEndStartRadius: "10px",
    borderStartStartRadius: "10px",

    paddingLeft: "5px",
    paddingTop: "7px",
  },
  SideBar_Sublink_Selected: {
    backgroundColor: theme.palette.background.main,
    color: `${theme.palette.secondary.main} `,
    fontSize: "12px",
    paddingLeft: "30px",
    borderEndStartRadius: "10px",
    borderStartStartRadius: "10px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
  SideBar_Sublink: {
    textDecoration: "none",
    color: `${theme.palette.background.main} `,

    fontSize: "12px",
    paddingLeft: "30px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
}));
const SideBarMenu = ({
  open,
  item,
  selectedTab,
  setselectedTab,
  selectedSecondTab,
  setselectedSecondTab,
  idx,
}) => {
  const {
    SideBarItems,
    sideBar_title,
    SideBar_link,
    SideBar_link_Selected,
    SideBar_Sublink_Selected,
    SideBar_Sublink,
  } = useStyles(theme);

  return (
    <>
      <Link
        to={item.path}
        key={idx}
        onClick={() => {
          setselectedTab(item);
          if (item?.subitems.length > 0) {
            setselectedSecondTab(item?.subitems[0]);
          }
        }}
        className={
          selectedTab?.name === item.name && item?.subitems?.length === 0 ? SideBar_link_Selected : SideBar_link
        }
      >
        <div className={SideBarItems}>
          <div
            className={
              open ? `classes.deleteIconOpen ` : `classes.deleteIconClosed`
            }
          >
            {item.icon}
          </div>

          {open && <div className={sideBar_title}>{item.name}</div>}
        </div>
        {open && item?.subitems.length > 0 && (
          <div className="left_items">
            {item?.subitems.length > 0 && selectedTab.name === item.name
              ? item.iconOpened
              : item.iconClosed}
          </div>
        )}
      </Link>
      {open &&
        selectedTab.name === item.name &&
        item?.subitems?.map((item1, index) => {
          return (
            <>
              <Link
                to={item1.path}
                key={index}
                onClick={() => {
                  setselectedSecondTab(item1);
                }}
                className={
                  selectedSecondTab?.name === item1?.name
                    ? SideBar_Sublink_Selected
                    : SideBar_Sublink
                }
              >
                <div className={open ? `` : `icon_class`}>
                  <div
                    className={
                      open
                        ? `classes.deleteIconOpen `
                        : `classes.deleteIconClosed`
                    }
                  >
                    {item1.icon}
                  </div>
                </div>
                {item1.name}
              </Link>
            </>
          );
        })}
    </>
  );
};

export default SideBarMenu;

SideBarMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.any,
  selectedTab: PropTypes.any,
  setselectedTab: PropTypes.func,
  selectedSecondTab: PropTypes.any,
  setselectedSecondTab: PropTypes.func,
  idx: PropTypes.any,
};
