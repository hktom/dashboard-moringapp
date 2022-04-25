import { useRouter } from "next/router";
import CreateCategory from "./create.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateCategory pid={pid?.toString()}></CreateCategory>;
}

export default Edit;
