import { useRouter } from "next/router";
import CreateCity from "../create/index.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <>{pid && <CreateCity pid={pid?.toString()} />}</>;
}

export default Edit;
