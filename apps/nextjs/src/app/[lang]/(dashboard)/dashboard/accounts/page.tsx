import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { authOptions, getCurrentUser } from "@saasfly/auth";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@saasfly/ui/table";

import { EmptyPlaceholder } from "~/components/empty-placeholder";
import { DashboardHeader } from "~/components/header";
import { AccountsCreateButton } from "~/components/accounts/account-create-button";
import { AccountItem } from "~/components/accounts/account-item";
import { DashboardShell } from "~/components/shell";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { trpc } from "~/trpc/server";
import { mockAccounts, AccountsArray } from "~/types/accounts";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard",
};

export default function AccountsPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const [accounts, setAccounts] = useState<AccountsArray>([]);
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getCurrentUser();
      if (!user) {
        redirect(authOptions?.pages?.signIn ?? "/login");
      }

      const customer = await trpc.customer.queryCustomer.query({
        userId: user.id,
      });

      if (!customer) {
        await trpc.customer.insertCustomer.mutate({
          userId: user.id,
        });
      }

      const result: AccountsArray = mockAccounts;

      if (result) {
        setAccounts(result);
      }

      const dictionary = await getDictionary(lang);
      setDict(dictionary);
    };

    fetchData();
  }, [lang]);

  if (!dict) return null; // Or a loading state

  return (
    <DashboardShell>
      <DashboardHeader heading="Accounts" text={dict.common.dashboard.title_text}>
        <AccountsCreateButton dict={dict.business} />
      </DashboardHeader>
      <div>
        {accounts.length ? (
          <div className="divide-y divide-border rounded-md border">
            <div className="flex items-center justify-between p-4">
              <Table className="divide-y divide-gray-200">
                <TableCaption>A list of your accounts.</TableCaption>
                <TableHeader>
                  <TableRow className="hover:bg-gray-50">
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>UpdatedAt</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                {accounts.map((account) => (
                  <AccountItem key={String(account.id)} account={account} />
                ))}
              </Table>
            </div>
          </div>
        ) : (
          <EmptyPlaceholder>
            {/* <EmptyPlaceholder.Icon /> */}
            <EmptyPlaceholder.Title>
              {dict.business.accounts.no_account_title}
            </EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              {dict.business.accounts.no_account_content}
            </EmptyPlaceholder.Description>
            <AccountsCreateButton variant="outline" dict={dict.business} />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
