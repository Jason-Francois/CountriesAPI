import Link from "next/link";
import { useRouter } from "next/router";
const CountryPage = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  return (
    <>
      <Link href="/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default CountryPage;
