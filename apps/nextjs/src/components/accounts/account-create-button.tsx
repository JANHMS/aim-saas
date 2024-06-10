// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import * as React from "react";
// Navigate to new page
import { useRouter } from "next/navigation";

import { cn } from "@saasfly/ui";
// Button self design
import { buttonVariants, type ButtonProps } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import { toast } from "@saasfly/ui/use-toast";

import { trpc } from "~/trpc/client";

interface AccountsCreateButtonProps extends ButtonProps {
  customProp?: string;
  dict: Record<string, unknown>;
}

export function AccountsCreateButton({
  className,
  variant,
  dict,
  ...props
}: AccountsCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onClick() {
    setIsLoading(true);
    const res = await trpc.accounts.createAccount.mutate({
      name: "Default Account",
      location: "Hong Kong",
    });
    setIsLoading(false);

    if (!res?.success) {
      return toast({
        title: "Something went wrong.",
        description: "Your account was not created. Please try again.",
        variant: "destructive",
      });
    }

    if (res) {
      const account = res;

      // This forces a cache invalidation.
      router.refresh();

      if (account?.id) {
        router.push(`/editor/account/${account.id}`);
      }
    } else {
      // console.log("error ");
    }
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.Add className="mr-2 h-4 w-4" />
      )}
      {dict.accounts?.new_account}
    </button>
  );
}
