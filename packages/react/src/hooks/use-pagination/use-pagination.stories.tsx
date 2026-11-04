import { useArgs } from "storybook/preview-api";
import preview from "../../../../../apps/storybook/.storybook/preview";
import { Pagination, type UsePaginationProps, usePagination } from "../..";

const UsePagination = (_props: UsePaginationProps) => (
  <Pagination aria-label="label" />
);

const meta = preview.meta({
  tags: ["!dev"],
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  component: UsePagination,
});

export const Default = meta.story({
  render: (args) => {
    const [, updateArgs] = useArgs();
    const { pages, nextButtonProps, prevButtonProps } = usePagination({
      ...(args as UsePaginationProps),
      setCurrentPage: (currentPage) => updateArgs({ currentPage }),
    });

    return (
      <Pagination aria-label="Sidenavigering">
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button aria-label="Forrige side" {...prevButtonProps}>
              Forrige
            </Pagination.Button>
          </Pagination.Item>
          {pages.map(({ page, itemKey, buttonProps }) => (
            <Pagination.Item key={itemKey}>
              {typeof page === "number" && (
                <Pagination.Button aria-label={`Side ${page}`} {...buttonProps}>
                  {page}
                </Pagination.Button>
              )}
            </Pagination.Item>
          ))}
          <Pagination.Item>
            <Pagination.Button aria-label="Neste side" {...nextButtonProps}>
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    );
  },

  args: {
    currentPage: 2,
    totalPages: 10,
    showPages: 7,
  },
});
