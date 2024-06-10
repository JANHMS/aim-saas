import Link from "next/link";
import { TableBody, TableCell, TableRow } from "@saasfly/ui/table";
import { formatDate } from "~/lib/utils";
import type { Account } from "~/types/accounts"; // Ensure this type exists

interface AccountItemProps {
  account: Pick<Account, "id" | "name" | "location" | "plan" | "updatedAt">;
}

export function AccountItem({ account }: AccountItemProps) {
  return (
    <TableBody className="divide-y divide-gray-100">
      <TableRow key={String(account.id)}>
        <TableCell className="font-medium">
          <Link
            href={`/editor/account/${String(account.id)}`}
            className="font-semibold hover:underline"
          >
            {account.name}
          </Link>
        </TableCell>
        <TableCell className="text-left">{account.location}</TableCell>
        <TableCell className="text-left">
          {formatDate(account.updatedAt?.toDateString())}
        </TableCell>
        <TableCell className="text-left">{account.plan}</TableCell>
        <TableCell className="text-left">RUNNING</TableCell>
      </TableRow>
    </TableBody>
  );
}
