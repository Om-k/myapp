import { Navbar } from "@/components/layout/Navbar";
import Main from "@/components/pages/Main";
import TestLink from "@/components/TestLink";
import Link from "next/link";

export default async function Home({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  
  return (
    <>
    <Main params={params} />
    </>
  );
}
