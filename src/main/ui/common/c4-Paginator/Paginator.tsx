import React, {useState} from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize: number
}

const Paginator: React.FC<PaginatorPropsType> = (
    {
        totalItemsCount,
        pageSize ,
        currentPage,
        onPageChanged,
        portionSize,
        ...restProps
    }

) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i ++) {
        pages.push(i)
    }

    const portionsCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(2)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;


    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Previous</button>
            }
            {
                pages.filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map((p) => {
                        return <span key={p} onClick={(e) => onPageChanged(p)}>{p}</span>
                    })
            }
            {portionNumber < portionsCount &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    );
}

export default Paginator;
