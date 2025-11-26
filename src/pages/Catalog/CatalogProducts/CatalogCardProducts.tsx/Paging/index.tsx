import { Box } from "@mui/material"
import { PagingBox } from "./styled-component"

interface Props {
  page: number
  pageCount: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Paging = ({ page, pageCount, setPage }: Props) => {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

    return (
        <PagingBox>
            <Box
            sx={{
                cursor: page === 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                opacity: page === 1 ? 0.4 : 1,
            }}
            onClick={() => page > 1 && setPage(page - 1)}
            >
            <Box
                component="img"
                src="/img/icons/,vector.svg"
                alt="prev"
            />
            </Box>

            {pages.map(num => (
                <Box
                key={num}
                sx={{
                    cursor: 'pointer',
                    fontWeight: num === page ? '600' : '400',
                    borderBottom: num === page ? '2px solid #000' : 'none',
                    paddingBottom: '4px',
                }}
                onClick={() => setPage(num)}
                >
                {num}
                </Box>
            ))}

            <Box
            sx={{
                cursor: page === pageCount ? "default" : "pointer",
                opacity: page === pageCount ? 0.4 : 1
            }}
            onClick={() => page < pageCount && setPage(page + 1)}
            >
            <Box
                component="img"
                src="/img/icons/vector,.svg"
                alt="next"
            />
            </Box>


        </PagingBox>
    )
}

export default Paging
