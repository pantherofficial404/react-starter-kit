import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectAccounts } from "../../store/root/root.selector";
import { UserService } from "../../services";
import { DataLoaderComponent } from "../../components";

const HomePage = () => {
  const accounts = useSelector(selectAccounts);

  useEffect(() => {
    if (!accounts.initialized) {
      UserService.fetchUsers();
    }
  }, [accounts]);

  return (
    <div>
      <DataLoaderComponent loading={accounts.loading} error={accounts.error}>
        {(accounts.data || []).map((element) => (
          <div key={element.id}>
            <p>{element.name}</p>
          </div>
        ))}
      </DataLoaderComponent>
    </div>
  );
};

export default HomePage;
