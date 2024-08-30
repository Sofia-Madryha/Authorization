import Pagination from "rc-pagination";
import { Box } from "@chakra-ui/react";

import "rc-pagination/assets/index.css";
import "./pagination.css";
import { PaginationComponentProps } from "./PaginationComponent.types";

const PaginationComponent = ({
  currentPage,
  totalItems,
  pageSize,
  setCurrentPage
}: PaginationComponentProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={pageSize}
        className="custom-pagination"
        onChange={setCurrentPage}
      />
    </Box>
  );
};

export default PaginationComponent;
