import { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

const MainLayout: FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <MainLayoutStyle>
        {/* <Sidebar /> */}
        <ContentWapper>
          <Outlet />
        </ContentWapper>
      </MainLayoutStyle>
    </main>
  );
};

export default MainLayout;

const MainLayoutStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-height: calc(100vh - 60px);
`;

const ContentWapper = styled.div`
  padding: 1rem;
  background-color: whitesmoke;
  width: 100%;
  overflow-x: auto;

  & > div {
    background-color: white;
    padding: 1.5rem;
    border-radius: 5px;
  }
`;
