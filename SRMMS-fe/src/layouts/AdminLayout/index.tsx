import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BREAKPOINT_SCREEN } from "../../common/const/const";
import Nav from "../../components/Nav";
import Sidebar from "../../pages/Admin";
import { Outlet } from "react-router-dom";
import Spinner from "../../components/Spiner";
import styles from "./index.module.scss";
import classNames from "classnames";
import { ConfigProvider } from "antd";
import { checkAuthentication } from "../../common/utils/authentication";

const cx = classNames.bind(styles);

const AdminLayout = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const resize = useWindowSize();

  const handleShowSideBar = () => {
    setIsOpenSideBar(true);
  };

  const handleHiddenSideBar = () => {
    setIsOpenSideBar(false);
  };

  useLayoutEffect(() => {
    if (window.innerWidth < BREAKPOINT_SCREEN.lg) {
      setIsOpenSideBar(false);
    }

    if (window.innerWidth > BREAKPOINT_SCREEN.lg) {
      setIsOpenSideBar(true);
    }
  }, [resize]);

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#08979C",
        },
        components: {
          Button: {
            primaryShadow: "0px 10px 20px -10px #08979C",
            borderRadius: 2,
            borderRadiusLG: 2,
          },
          Input: {
            borderRadius: 2,
            borderRadiusLG: 2,
          },
          InputNumber: {
            borderRadius: 2,
            borderRadiusLG: 2,
          },
          Select: {
            borderRadius: 2,
            borderRadiusLG: 2,
          },
          DatePicker: {
            borderRadius: 2,
            borderRadiusLG: 2,
          },
        },
      }}
    >
      <div>
        <Nav
          isOpenSideBar={isOpenSideBar}
          handleHiddenSideBar={handleHiddenSideBar}
          handleShowSideBar={handleShowSideBar}
        />
        <div className={cx("admin-layout")}>
          <Sidebar />
          <div className="body-layout">
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AdminLayout;
