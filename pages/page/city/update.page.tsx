import { useRouter } from "next/router";
import CreateCity from "./create.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateCity pid={pid?.toString()}></CreateCity>;
}

export default Edit;
