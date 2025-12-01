import { useEffect, useRef, useState } from "react"
import { data } from "../../../../components/ProductCard/data.ts"
import ProductsCard from "../../../../components/ProductCard/index.tsx"
import { BtnSort, BtnSortWrapper, CardsWrapper, FilterResult, FiltersCards, PagingWrapper, SortIcon } from "./styled-components.ts"
import { Box } from "@mui/material"
import { filters } from "./filters.data.ts"
import { Btn } from "../styled-component.ts"
import Paging from "./Pagination/index.tsx"


const CardsProducts = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("Все")
    const [sortActiv, setSortActive] = useState("По цене вверх")
    const sortRef = useRef<HTMLDivElement>(null)
    const originalData = data
    const [products, setProducts] = useState(originalData)
    const [page, setPage] = useState(1)
    const itemsPerPage = 9
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const pageCount = Math.ceil(products.length / itemsPerPage)
    const currentProducts = products.slice(startIndex, endIndex)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
            setOpen(false)
            }
        }

        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    function sortPriceUp() {
        const sorted = [...originalData].sort((a, b) => a.price.quantity - b.price.quantity)
        setProducts(sorted)
        setPage(1)
        setSortActive("По цене вверх")
        setOpen(false)
    }

    function sortPriceDown() {
        const sorted = [...originalData].sort((a, b) => b.price.quantity - a.price.quantity)
        setProducts(sorted)
        setPage(1)
        setSortActive("По цене вниз")
        setOpen(false)
    }

    return(
        <Box>
            <Box>
                <FiltersCards>
                    {filters.map((filter) => (
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
                    <Box  
                        ref={sortRef}  
                        onClick={() => setOpen(prev => !prev)} 
                        sx={{display: 'flex',}}
                    >   
                        <SortIcon src="/img/icons/sort 1.svg" alt="sort"/>
                        <Box>Сортировать</Box>

                        {open && (
                            <BtnSortWrapper>
                                <BtnSort disableRipple
                                    onClick={sortPriceUp}
                                    $active={sortActiv === "По цене вверх"}
                                >
                                    По цене вверх
                                </BtnSort>

                                <BtnSort disableRipple
                                    onClick={sortPriceDown}
                                    $active={sortActiv === "По цене вниз"}
                                >
                                    По цене вниз
                                </BtnSort>
                            </BtnSortWrapper>
                        )}
                    </Box>
                </FilterResult>
            </Box>

            <CardsWrapper>
                {currentProducts.map(value => (
                <ProductsCard data={value} key={value.id} />
                ))}
            </CardsWrapper>

            <PagingWrapper>
                <Paging 
                    page={page}
                    pageCount={pageCount}
                    setPage={setPage}
                />
            </PagingWrapper>
        </Box>
    )
}

export default CardsProducts