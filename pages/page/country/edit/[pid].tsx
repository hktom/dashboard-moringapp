import { useRouter } from "next/router";
import CreateCountry from "../create.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateCountry pid={pid?.toString()}></CreateCountry>;
}

export default Edit;
