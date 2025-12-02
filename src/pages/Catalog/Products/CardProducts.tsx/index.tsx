import { useGetProductQuery } from "../../../../redux/api/product/api"
import { useEffect, useRef, useState } from "react"
import ProductsCard from "../../../../components/ProductCard"
import { BtnSort, BtnSortWrapper, CardsWrapper, FilterResult, FiltersCards, PagingWrapper, SortIcon } from "./styled-components"
import { Box } from "@mui/material"
import { filters } from "./filters.data"
import { Btn } from "../styled-component"
import Paging from "./Pagination"

const CardsProducts = () => {
  const { data: apiData, isLoading } = useGetProductQuery()

  const sortRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Все")
  const [sortActiv, setSortActive] = useState("По цене вверх")
  const [page, setPage] = useState(1)

  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    if (apiData?.data) {
      setProducts(apiData.data)
    }
  }, [apiData])

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", callback)
    return () => document.removeEventListener("click", callback)
  }, [])

  if (!apiData || isLoading) {
    return null
  }

  const itemsPerPage = 9
  const startIndex = (page - 1) * itemsPerPage
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage)
  const pageCount = Math.ceil(products.length / itemsPerPage)

  const sortPriceUp = () => {
    setProducts(prev => [...prev].sort((a, b) => a.price.quantity - b.price.quantity))
    setSortActive("По цене вверх")
    setPage(1)
    setOpen(false)
  }

  const sortPriceDown = () => {
    setProducts(prev => [...prev].sort((a, b) => b.price.quantity - a.price.quantity))
    setSortActive("По цене вниз")
    setPage(1)
    setOpen(false)
  }

  return (
    <Box>
      <FiltersCards>
        {filters.map(filter => (
          <Btn
            key={filter}
            onClick={() => setActive(filter)}
            $active={active === filter}
            $size="medium"
          >
            {filter}
          </Btn>
        ))}
      </FiltersCards>

      <FilterResult>
        <Box>{products.length} результатов</Box>

        <Box ref={sortRef} onClick={() => setOpen(prev => !prev)} sx={{ display: "flex" }}>
          <SortIcon src="/img/icons/sort 1.svg" />
          <Box>{sortActiv}</Box>

          {open && (
            <BtnSortWrapper>
              <BtnSort onClick={sortPriceUp} $active={sortActiv === "По цене вверх"}>
                По цене вверх
              </BtnSort>
              <BtnSort onClick={sortPriceDown} $active={sortActiv === "По цене вниз"}>
                По цене вниз
              </BtnSort>
            </BtnSortWrapper>
          )}
        </Box>
      </FilterResult>

      <CardsWrapper>
        {currentProducts.map(product => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </CardsWrapper>

      <PagingWrapper>
        <Paging page={page} pageCount={pageCount} setPage={setPage} />
      </PagingWrapper>
    </Box>
  )
}

export default CardsProducts
