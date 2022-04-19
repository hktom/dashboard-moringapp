import { Breadcrumbs } from "@mui/material";
import Link from "next/link";

interface IProps {
  page: string;
  link: string;
}

function PageBreadCrumb(props: IProps) {
  const { page, link } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/page/">
        <a style={{ textDecoration: "none" }}>Dashboard</a>
      </Link>
      <Link href={"/page/" + link}>
        <a style={{ textDecoration: "none" }}>{page}</a>
      </Link>
    </Breadcrumbs>
  );
}

export default PageBreadCrumb;
