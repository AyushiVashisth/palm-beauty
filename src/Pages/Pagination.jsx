import { Button, Flex, Stack, Tooltip } from "@chakra-ui/react";
export default function Pagination({ page, handlePage, totalPage }) {
  return (
    <Flex
      id="pagination-secction"
      direction="row"
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      m={5}
    >
      <Tooltip isDisabled>
        <Button
          bgColor={"lightcoral"}
          variant="solid"
          isDisabled={page <= 1 ? true : false}
          onClick={() => handlePage(-1)}
        >
          PREV
        </Button>
      </Tooltip>

      <Button disabled colorScheme="blackAlpha" variant="outline">
        {page}
      </Button>
      <Button
        bgColor={"lightcoral"}
        colorScheme="blackAlpha"
        variant="solid"
        isDisabled={page === Math.ceil(totalPage / 6)}
        onClick={() => handlePage(1)}
      >
        NEXT
      </Button>
    </Flex>
  );
}
