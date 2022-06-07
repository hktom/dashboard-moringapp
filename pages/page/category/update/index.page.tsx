import { useRouter } from "next/router";
import CreateCategory from "../create/index.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <>{pid && <CreateCategory pid={pid?.toString()} />}</>;
}

export default Edit;
