import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function MyPagination({ preUrl, nextUrl, page, curUrl }) {
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        {preUrl && (
          <PaginationItem>
            <PaginationPrevious href={preUrl} />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={curUrl}>{page.currentPage}</PaginationLink>
        </PaginationItem>

        {nextUrl && (
          <PaginationItem>
            <PaginationNext href={nextUrl} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default MyPagination;
