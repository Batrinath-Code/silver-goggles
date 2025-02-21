import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../partials/Header";

import UserProfile from "../components/UserProfile";
function LandingPage() {
  const { id } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="flex h-screen  overflow-hidden">
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="grow">
            {id ? <UserProfile id={id} /> : <h1>Welcome to MEDZO</h1>}
          </main>

          {/* <Banner /> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
