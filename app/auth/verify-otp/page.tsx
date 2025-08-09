import VerifyOtpPage from "@/components/VerifyOtpPage";

interface VerifyOtpParams {
  email?: string;
  type?: string;
  name?: string;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedParams = (await searchParams) as VerifyOtpParams;

  return (
    <VerifyOtpPage
      email={resolvedParams?.email || ""}
      type={resolvedParams?.type || "login"}
      name={resolvedParams?.name || ""}
    />
  );
}
