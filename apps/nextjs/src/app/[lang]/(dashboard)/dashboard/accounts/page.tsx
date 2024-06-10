import React from "react";
import { mockAccounts, AccountsArray } from "~/types/accounts";
import { AccountItem } from "~/components/accounts/account-item";

interface Props {
  accounts?: AccountsArray;
}

const AccountsPage: React.FC<Props> = ({ accounts = mockAccounts }) => {
  return (
    <div>
      <h1>Accounts</h1>
      {accounts && accounts.length > 0 ? (
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              <AccountItem account={account} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No accounts found</p>
      )}
    </div>
  );
};

export default AccountsPage;
