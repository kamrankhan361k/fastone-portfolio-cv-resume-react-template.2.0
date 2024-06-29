import { useEffect, useState } from "react";
import RouterLinks from "./router/Routes";
import { PushSpinner  } from "react-spinners-kit";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="fastoneApp">
      {loading ? (
        <div className="pageLoader fixed justify-center items-center inset-0 flex">
          <PushSpinner 
            className="bg-accent"
            size={60}
            color="#284be5"
          ></PushSpinner>
        </div>
      ) : (
        <RouterLinks></RouterLinks>
      )}
    </div>
  );
}

export default App;
