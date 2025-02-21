import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../partials/Header";

import UserProfile from "../components/UserProfile";

function LandingPage() {
  const { id } = useParams();
  const numberofID = [15, 20, 16, 18];
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [patientID, setPaientID] = useState(id);
  useEffect(() => {
    if (!numberofID.includes(parseInt(id))) {
      setPaientID(0);
      navigate("/404"); // Redirect to the 404 page if ID is less than 7
    }
  }, [id, navigate]);

  return (
    <div>
      <div className="flex h-screen  overflow-hidden">
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="grow">
            {numberofID.includes(parseInt(id)) ? (
              <UserProfile id={patientID} />
            ) : (
              navigate("/404")
            )}
          </main>

          {/* <Banner /> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
