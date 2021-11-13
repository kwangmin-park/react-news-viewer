import React from "react";
import Categories from "../componenets/Categories";
import NewsList from "../componenets/NewsList";

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';
    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
}

export default NewsPage;
